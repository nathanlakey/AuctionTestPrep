// Tennessee-specific flashcard questions
// 99 flashcards extracted from TN Flashcard Questions.docx

const tnFlashcardQuestions = [
  {
    id: 1,
    question: 'What is the minimum age for any auctioneer license in TN?',
    answer: '18 years old.',
  },
  {
    id: 2,
    question: 'How many education hours are required for an affiliate auctioneer?',
    answer: '50 hours.',
  },
  {
    id: 3,
    question: 'How many education hours are required for a bid caller?',
    answer: '16 hours.',
  },
  {
    id: 4,
    question: 'How long must you serve as an affiliate before becoming a principal auctioneer?',
    answer: '6 months.',
  },
  {
    id: 5,
    question: 'How many apprenticeship points are needed for a principal license?',
    answer: '1,000 points.',
  },
  {
    id: 6,
    question: 'What is 1,000 points equivalent to?',
    answer: 'Five complete auctions.',
  },
  {
    id: 7,
    question: 'What are the requirements for a public automobile auctioneer?',
    answer: '2 years as a principal auctioneer and 15 hours of auto instruction.',
  },
  {
    id: 8,
    question: 'What is the continuing education (CE) requirement?',
    answer: '6 hours every 2 years.',
  },
  {
    id: 9,
    question: 'How long must a licensee keep proof of CE completion?',
    answer: 'Two renewal cycles (4 years).',
  },
  {
    id: 10,
    question: 'Are online timed listings exempt from licensure?',
    answer: 'Yes, if there is no live simulcast.',
  },
  {
    id: 11,
    question: 'How many members are on the TN Auctioneer Commission?',
    answer: 'Five members.',
  },
  {
    id: 12,
    question: 'What is the late penalty if renewing less than 2 months late?',
    answer: '$50 (plus the renewal fee).',
  },
  {
    id: 13,
    question: 'What happens to an affiliate\'s license if they leave their sponsor?',
    answer: 'The sponsor must immediately return it to the Commission.',
  },
  {
    id: 14,
    question: 'What must you do if you change your business location?',
    answer: 'Notify the Commission immediately in writing and pay a fee.',
  },
  {
    id: 15,
    question: 'What must all auction advertisements include?',
    answer: 'The principal auctioneer’s name and license number.',
  },
  {
    id: 16,
    question: 'What must an affiliate auctioneer include in their ads?',
    answer: 'Their name/license AND their sponsor\'s name/license.',
  },
  {
    id: 17,
    question: 'How many affiliate licenses can you hold at one time?',
    answer: 'Only one.',
  },
  {
    id: 18,
    question: 'What is the fee to replace a lost or duplicate license?',
    answer: '$35.',
  },
  {
    id: 19,
    question: 'Who sponsors an affiliate auctioneer?',
    answer: 'A licensed principal auctioneer.',
  },
  {
    id: 20,
    question: 'What is a "bid caller"?',
    answer: 'Someone hired only to solicit bids, not to manage the firm.',
  },
  {
    id: 21,
    question: 'What are "cappers" or "pullers"?',
    answer: 'Fake bidders used illegally to inflate prices.',
  },
  {
    id: 22,
    question: 'What type of bank account must hold client funds?',
    answer: 'An escrow or trustee account.',
  },
  {
    id: 23,
    question: 'What is "commingling"?',
    answer: 'Illegally mixing client funds with personal or business funds.',
  },
  {
    id: 24,
    question: 'When is an auto auction exempt from having an escrow account?',
    answer: 'When they do not accept or deposit funds belonging to others.',
  },
  {
    id: 25,
    question: 'What must an auctioneer do before selling a property?',
    answer: 'Sign a written contract with the seller/consignee.',
  },
  {
    id: 26,
    question: 'What must an auctioneer do with written instruments (contracts)?',
    answer: 'Voluntarily give copies to all parties at the time of signing.',
  },
  {
    id: 27,
    question: 'Who has the right to sue a client for an affiliate\'s unpaid commission?',
    answer: 'Only the employing principal auctioneer.',
  },
  {
    id: 28,
    question: 'Can an affiliate sue their principal for unpaid fees?',
    answer: 'Yes.',
  },
  {
    id: 29,
    question: 'When requested by law enforcement, when must a property list be provided?',
    answer: '24 hours prior to the auction.',
  },
  {
    id: 30,
    question: 'What must nonresident applicants file with the state?',
    answer: 'An irrevocable consent for service of process.',
  },
  {
    id: 31,
    question: 'What is the deadline to file a lien for an unpaid commission?',
    answer: 'Within 60 days after the auction.',
  },
  {
    id: 32,
    question: 'How long does an auctioneer\'s lien remain active?',
    answer: '90 days from the date of filing.',
  },
  {
    id: 33,
    question: 'What is the criminal classification for violating auction law?',
    answer: 'Class C misdemeanor.',
  },
  {
    id: 34,
    question: 'What is the maximum civil penalty per violation?',
    answer: '$2,500.',
  },
  {
    id: 35,
    question: 'How many days do you have to appeal an administrative citation?',
    answer: '15 working days.',
  },
  {
    id: 36,
    question: 'What is the statute of limitations to issue a citation?',
    answer: 'One year from the violation.',
  },
  {
    id: 37,
    question: 'What is the minimum balance for the Recovery Account?',
    answer: '$150,000.',
  },
  {
    id: 38,
    question: 'What is the Recovery Fund fee for a new or renewed license?',
    answer: '$50.',
  },
  {
    id: 39,
    question: 'What is the maximum Recovery Account payout per transaction?',
    answer: '$10,000.',
  },
  {
    id: 40,
    question: 'What is the maximum aggregate payout for a single licensee?',
    answer: '$20,000.',
  },
  {
    id: 41,
    question: 'Can an auctioneer claim lost commissions from the Recovery Account?',
    answer: 'No.',
  },
  {
    id: 42,
    question: 'What happens if the Fund pays out on behalf of an auctioneer?',
    answer: 'License is suspended/revoked until repaid in full with interest.',
  },
  {
    id: 43,
    question: 'Does the Recovery Account pay for interest and court costs?',
    answer: 'No, only actual or compensatory damages.',
  },
  {
    id: 44,
    question: 'Who must approve actions to protect the integrity of the Recovery Account?',
    answer: 'The state Attorney General.',
  },
  {
    id: 45,
    question: 'How must a consumer notify the Commission of a lawsuit?',
    answer: 'In writing via certified mail, return receipt requested.',
  },
  {
    id: 46,
    question: 'How long must a court judgment be unpaid before applying for Recovery funds?',
    answer: '60 days.',
  },
  {
    id: 47,
    question: 'Under the UCC, how are grouped lots treated?',
    answer: 'Each lot is a separate sale.',
  },
  {
    id: 48,
    question: 'When is an auction sale legally complete?',
    answer: 'At the fall of the hammer.',
  },
  {
    id: 49,
    question: 'What if a bid is shouted exactly as the hammer falls?',
    answer: 'The auctioneer can reopen bidding or declare the item sold.',
  },
  {
    id: 50,
    question: 'What is the default legal presumption for all auctions?',
    answer: 'They are "with reserve."',
  },
  {
    id: 51,
    question: 'When can goods be withdrawn in a "with reserve" auction?',
    answer: 'Any time before the fall of the hammer.',
  },
  {
    id: 52,
    question: 'When can goods be withdrawn in a "without reserve" (absolute) auction?',
    answer: 'Never, unless no bid is made within a reasonable time.',
  },
  {
    id: 53,
    question: 'Can a bidder retract their bid?',
    answer: 'Yes, before the fall of the hammer.',
  },
  {
    id: 54,
    question: 'Does a bid retraction revive the previous bid?',
    answer: 'No.',
  },
  {
    id: 55,
    question: 'What is the buyer\'s remedy if the seller bids secretly to inflate the price?',
    answer: 'Avoid the sale or take the item at the last good-faith bid.',
  },
  {
    id: 56,
    question: 'Does the undisclosed seller bid rule apply to forced/judicial sales?',
    answer: 'No.',
  },
  {
    id: 57,
    question: 'What is a "soft close" in an online auction?',
    answer: 'Extending the end time after a late bid to prevent sniping.',
  },
  {
    id: 58,
    question: 'What legal requirement does a "Memorandum of Sale" satisfy?',
    answer: 'The Statute of Frauds (written proof of contract).',
  },
  {
    id: 59,
    question: 'What is a "bid increment"?',
    answer: 'The set amount a new bid must exceed the previous bid.',
  },
  {
    id: 60,
    question: 'What are Bulk Sales laws?',
    answer: 'Laws requiring notice to creditors before selling a business\'s inventory.',
  },
  {
    id: 61,
    question: 'What dual licenses are required to call bids for real estate?',
    answer: 'An Auctioneer license AND a Real Estate Broker license.',
  },
  {
    id: 62,
    question: 'If an affiliate calls real estate bids, where must the principal be?',
    answer: 'Physically on the premises.',
  },
  {
    id: 63,
    question: 'Do ringmen need a real estate license?',
    answer: 'No, unless they are acting as a broker/affiliate broker.',
  },
  {
    id: 64,
    question: 'What two licenses must an auto auction facility hold?',
    answer: 'Motor Vehicle Dealer license and Auctioneer Commission license.',
  },
  {
    id: 65,
    question: 'What is the minimum garagekeeper\'s liability insurance for an auto auction?',
    answer: '$500,000.',
  },
  {
    id: 66,
    question: 'What is the mandatory surety bond for an auto auction?',
    answer: '$50,000.',
  },
  {
    id: 67,
    question: 'What is the minimum net worth for an auto auction?',
    answer: '$100,000.',
  },
  {
    id: 68,
    question: 'Can auto auctions sell new vehicles?',
    answer: 'No. (Only used/previously titled vehicles).',
  },
  {
    id: 69,
    question: 'How must a vehicle title transfer at an auto auction?',
    answer: 'From Seller to Auto Auction to Buyer.',
  },
  {
    id: 70,
    question: 'What must an auto auctioneer verify before selling a vehicle?',
    answer: 'A clean and unencumbered title.',
  },
  {
    id: 71,
    question: 'Where must public auto auctions take place?',
    answer: 'At the established business location listed on the dealer license.',
  },
  {
    id: 72,
    question: 'What size letters must an auto auction\'s business sign have?',
    answer: 'At least 8 inches tall.',
  },
  {
    id: 73,
    question: 'What is the ATF standard for needing a Federal Firearms License (FFL)?',
    answer: 'Buying/selling repetitively to predominantly earn a profit.',
  },
  {
    id: 74,
    question: 'Do you need an FFL to call bids at an estate sale?',
    answer: 'No, if the firearms remain the property of the estate.',
  },
  {
    id: 75,
    question: 'Do you need an FFL to take consignment firearms to your auction house for profit?',
    answer: 'Yes.',
  },
  {
    id: 76,
    question: 'Do you need an FFL to liquidate a personal collection?',
    answer: 'No.',
  },
  {
    id: 77,
    question: 'Does a Curio & Relics (C&R) license allow dealing for profit?',
    answer: 'No.',
  },
  {
    id: 78,
    question: 'What is the maximum criminal penalty for dealing firearms without an FFL?',
    answer: '5 years in prison and a $250,000 fine.',
  },
  {
    id: 79,
    question: 'What safety device must an FFL provide with every handgun?',
    answer: 'A child safety lock.',
  },
  {
    id: 80,
    question: 'What is the reporting threshold for IRS Form 8300?',
    answer: 'Cash payments over $10,000.',
  },
  {
    id: 81,
    question: 'What is the deadline to file Form 8300?',
    answer: '15 days after the transaction.',
  },
  {
    id: 82,
    question: 'When must you notify the customer about the Form 8300 filing?',
    answer: 'By January 31 of the following year.',
  },
  {
    id: 83,
    question: 'When is e-filing Form 8300 mandatory?',
    answer: 'If you file 10 or more other information returns (like W-2s).',
  },
  {
    id: 84,
    question: 'How long must you retain Form 8300 records?',
    answer: '5 years.',
  },
  {
    id: 85,
    question: 'What must you write on a paper Form 8300 if claiming a religious exemption?',
    answer: '"RELIGIOUS EXEMPTION" at the top center of Page 1.',
  },
  {
    id: 86,
    question: 'What must you write if you miss the 15-day deadline for Form 8300?',
    answer: '"LATE" in the comments or at the top.',
  },
  {
    id: 87,
    question: 'Formula: Net Income?',
    answer: 'Gross Income – Expenses.',
  },
  {
    id: 88,
    question: 'Formula: Profit?',
    answer: 'Sale Price – Cost.',
  },
  {
    id: 89,
    question: 'Formula: Commission?',
    answer: 'Sale Price × Commission Rate.',
  },
  {
    id: 90,
    question: 'Capitalization Formula: Property Value?',
    answer: 'Income ÷ Rate.',
  },
  {
    id: 91,
    question: 'Capitalization Formula: Required Income?',
    answer: 'Rate × Value.',
  },
  {
    id: 92,
    question: 'Capitalization Formula: Cap Rate?',
    answer: 'Income ÷ Value.',
  },
  {
    id: 93,
    question: 'Property Tax Formula: Assessed Value?',
    answer: 'Appraised Value × Property Tax Rate.',
  },
  {
    id: 94,
    question: 'Property Tax Formula: Mil Rate?',
    answer: 'Assessed Value ÷ 100.',
  },
  {
    id: 95,
    question: 'Property Tax Formula: Tax Owed?',
    answer: 'Mil Rate × County/City Rate.',
  },
  {
    id: 96,
    question: 'Are buyer\'s premiums subject to state sales tax?',
    answer: 'Yes, they are part of the total Sale Price.',
  },
  {
    id: 97,
    question: 'Formula: Sales Tax Due?',
    answer: 'Sale Price × Sales Tax Rate.',
  },
  {
    id: 98,
    question: 'Formula: Break out Sale Price from a total inclusive ticket?',
    answer: 'Ticket Total ÷ (1 + Tax Rate as a decimal).',
  },
  {
    id: 99,
    question: 'Formula: Principle Loan Amount?',
    answer: 'Annual Interest ÷ Interest Rate.',
  },
];

export default tnFlashcardQuestions;
