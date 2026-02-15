import React, { useState, useEffect } from 'react';
import './StudyGuide.css';

// Import study guide data
import alGuide from '../data/al_study_guide.json';
import arGuide from '../data/ar_study_guide.json';
import gaGuide from '../data/ga_study_guide.json';
import kyGuide from '../data/ky_study_guide.json';
import laGuide from '../data/la_study_guide.json';
import tnGuide from '../data/tn_study_guide.json';
import txGuide from '../data/tx_study_guide.json';

const StudyGuide = ({ selectedState, onBack }) => {
  const [guide, setGuide] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Load appropriate study guide based on state
    if (selectedState === 'Alabama') {
      setGuide(alGuide);
    } else if (selectedState === 'Arkansas') {
      setGuide(arGuide);
    } else if (selectedState === 'Georgia') {
      setGuide(gaGuide);
    } else if (selectedState === 'Kentucky') {
      setGuide(kyGuide);
    } else if (selectedState === 'Louisiana') {
      setGuide(laGuide);
    } else if (selectedState === 'Tennessee') {
      setGuide(tnGuide);
    } else if (selectedState === 'Texas') {
      setGuide(txGuide);
    }
  }, [selectedState]);

  const handlePrint = () => {
    window.print();
  };

  if (!guide) {
    return <div className="study-guide-loading">Loading study guide...</div>;
  }

  // Filter sections based on search
  const filteredSections = guide.sections.filter(section => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      section.heading.toLowerCase().includes(searchLower) ||
      section.content.some(line => line.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="study-guide-container">
      {/* Header - hidden in print */}
      <div className="study-guide-header no-print">
        <button className="back-button" onClick={onBack}>
          ← Back to Dashboard
        </button>
        <h1>{guide.title}</h1>
        <div className="study-guide-actions">
          <input
            type="text"
            placeholder="Search guide..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="print-button" onClick={handlePrint}>
            🖨️ Print Study Guide
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="study-guide-content">
        <div className="print-header">
          <h1>{guide.title}</h1>
          <p className="print-info">Auction Academy - Exam Preparation Materials</p>
        </div>

        {filteredSections.length === 0 ? (
          <div className="no-results">No sections match your search.</div>
        ) : (
          filteredSections.map((section, index) => (
            <div key={index} className="study-guide-section">
              <h2 className="section-heading">{section.heading}</h2>
              <div className="section-content">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="section-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer - only in print */}
      <div className="print-footer">
        <p>© {new Date().getFullYear()} Auction Academy. For educational purposes only.</p>
      </div>
    </div>
  );
};

export default StudyGuide;
