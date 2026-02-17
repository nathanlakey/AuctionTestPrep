// Add admin emails here — these users will always have admin access
const ADMIN_EMAILS = ['hello@auctionacademy.com', 'nathan@auctionacademy.com', 'admin@auctionacademy.com'];

export function isAdmin(user) {
  if (!user) return false;
  return user.isAdmin || ADMIN_EMAILS.includes(user.email?.toLowerCase());
}
