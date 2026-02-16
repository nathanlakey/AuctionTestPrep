import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import './Payment.css';

function Payment({ onSuccess, onBack }) {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');
  const { user, markAsPaid } = useAuth();

  // Check for successful payment return from Stripe Checkout
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get('payment') === 'success') {
      markAsPaid();
      window.history.replaceState({}, '', window.location.pathname);
      onSuccess();
    } else if (params.get('payment') === 'cancelled') {
      setError('Payment was cancelled. Please try again.');
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, [markAsPaid, onSuccess]);

  const handleCheckout = async () => {
    setError('');
    setProcessing(true);

    try {
      const apiBase = import.meta.env.VITE_API_URL || 'https://auctiontestprep.onrender.com';
      const response = await fetch(`${apiBase}/api/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: 'price_1T1aOCDlUV458a7kIJ3M4Dw2', mode: 'payment', userEmail: user?.email }),
      });

      if (!response.ok) {
        let errorMessage = 'Failed to start checkout.';
        try {
          const data = await response.json();
          errorMessage = data.error || errorMessage;
        } catch {
          // Response was not JSON
        }
        throw new Error(errorMessage);
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (err) {
      if (err instanceof TypeError && err.message === 'Failed to fetch') {
        setError('Cannot connect to payment server. Make sure to run: npm run dev:all');
      } else {
        setError(err.message || 'Unable to start checkout. Please try again.');
      }
      setProcessing(false);
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <div className="payment-header">
          <img src="/auction-academy-logo.png" alt="Auction Academy" className="payment-logo" />
          <h2>Complete Your Purchase</h2>
          <p>Get full access to all exam prep materials</p>
        </div>

        <div className="payment-features">
          <div className="payment-feature">✅ Full 75-question practice exams</div>
          <div className="payment-feature">✅ Topic-specific quizzes</div>
          <div className="payment-feature">✅ Interactive flashcards</div>
          <div className="payment-feature">✅ Study games</div>
          <div className="payment-feature">✅ Comprehensive study guides</div>
          <div className="payment-feature">✅ All 7 state exam preparations</div>
        </div>

        <div className="checkout-form">
          <div className="price-display">
            <span className="price-label">Full Access</span>
            <span className="price-amount">$100.00 <span className="price-currency">USD</span></span>
            <span className="price-description">One-time payment for complete exam prep access</span>
          </div>

          {error && <div className="payment-error">{error}</div>}

          <button 
            className="pay-btn"
            onClick={handleCheckout}
            disabled={processing}
          >
            {processing ? 'Redirecting to Stripe...' : 'Pay $100.00 with Stripe'}
          </button>

          <button type="button" className="pay-back-btn" onClick={onBack}>
            ← Go Back
          </button>

          <p className="secure-note">🔒 Payments are securely processed by Stripe</p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
