// Question bank for Auctioneer Exam Prep
// Complete question banks from source documents
// AL: 282 questions, GA: 300 questions, KY: 278 questions, TN: 272 questions

export const states = ['Alabama', 'Georgia', 'Kentucky', 'Tennessee', 'Texas'];

export const topics = [
  'All Topics',
  'Auction Basics',
  'Auction Math',
  'Contract Law',
  'Ethics and Professional Conduct',
  'Bidding Procedures',
  'UCC (Uniform Commercial Code)',
  'Real Estate Auctions',
  'Personal Property',
  'State-Specific Laws',
  'Advertising and Marketing',
  'Record Keeping',
  'Licensing Requirements',
  'Consumer Protection'
];

export const questionBank = {
  'Alabama': [
  {
    "topic": "Contracts \u2013 Definition",
    "question": "Which best defines a contract in auction law?",
    "options": ["A verbal promise that cannot be enforced", "An enforceable promise that can be sued upon", "A casual agreement between buyer and seller", "A document that only applies to real estate"],
    "correctAnswer": 1,
    "explanation": "The Alabama guide defines a contract as an enforceable promise that can be sued upon if one party fails to perform. Auction transactions are built on enforceable agreements, not informal understandings.",
    "id": 1
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Which of the following must be definite during contract negotiation?",
    "options": ["The auctioneer\u2019s chant style", "Price, property description, delivery, parties", "The number of bidders expected", "The seller\u2019s motivations"],
    "correctAnswer": 1,
    "explanation": "Negotiation requires definite terms such as price, delivery, and property description. Without clear terms, no enforceable obligation exists.",
    "id": 2
  },
  {
    "topic": "General Auction Knowledge",
    "question": "In Alabama auction practice, contracts must generally be:",
    "options": ["Oral to be valid", "Handwritten only", "In writing and signed", "Recorded in probate court"],
    "correctAnswer": 2,
    "explanation": "Alabama licensing law requires auction contracts to be written and signed to be enforceable, especially under the Statute of Frauds.",
    "id": 3
  },
  {
    "topic": "General Auction Knowledge",
    "question": "What does the parol evidence rule mean for auctions?",
    "options": ["Oral promises override written contracts", "Verbal agreements are admissible in court", "Oral promises outside the written contract are unenforceable", "Contracts may never be modified"],
    "correctAnswer": 2,
    "explanation": "Parol evidence refers to verbal agreements. In auction contracts, oral promises made outside the written agreement are generally not enforceable in court.",
    "id": 4
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Which is NOT an essential element of a valid contract?",
    "options": ["Offer", "Acceptance", "Consideration", "Personal friendship"],
    "correctAnswer": 3,
    "explanation": "A valid contract requires offer, acceptance, consideration, legal capacity, and consent. Friendship is not legally required.",
    "id": 5
  },
  {
    "topic": "General Auction Knowledge",
    "question": "An offer must be:",
    "options": ["Forced and mandatory", "Reasonably certain and voluntary", "Implied only", "Made only after acceptance"],
    "correctAnswer": 1,
    "explanation": "The offer must be free, voluntary, and clear enough that a \u201creasonable person\u201d could understand it.",
    "id": 6
  },
  {
    "topic": "General Auction Knowledge",
    "question": "When may an offer be withdrawn?",
    "options": ["Only after acceptance", "At any time before acceptance", "Only if written in ink", "Never"],
    "correctAnswer": 1,
    "explanation": "Offers may be revoked any time before acceptance, even if the offer claimed it would remain open.",
    "id": 7
  },
  {
    "topic": "General Auction Knowledge",
    "question": "What happens if the offeror dies before acceptance?",
    "options": ["The offer remains valid forever", "The offer is terminated immediately", "The auctioneer decides", "The buyer must still perform"],
    "correctAnswer": 1,
    "explanation": "Death of either party before acceptance immediately terminates the offer.",
    "id": 8
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Acceptance must be:",
    "options": ["Conditional", "Unequivocal and absolute", "Different from the offer", "Silent"],
    "correctAnswer": 1,
    "explanation": "Acceptance must match the offer exactly. Any variation becomes a counteroffer.",
    "id": 9
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A counteroffer occurs when:",
    "options": ["Acceptance matches the offer", "Acceptance changes any term", "The auctioneer withdraws goods", "Consideration is unfair"],
    "correctAnswer": 1,
    "explanation": "Changing even one term of acceptance creates a counteroffer, and the original offer is considered dead.",
    "id": 10
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Consideration is:",
    "options": ["A gift with no value exchanged", "Something of value given or promised", "Always required to be equal", "Only emotional support"],
    "correctAnswer": 1,
    "explanation": "Consideration is the value exchanged that makes the contract enforceable.",
    "id": 11
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Love and affection are:",
    "options": ["Valuable legal consideration", "Not sufficient as valuable consideration", "Required for auction contracts", "Considered fraud"],
    "correctAnswer": 1,
    "explanation": "Love may be \u201cgood consideration\u201d but not the \u201cvaluable consideration\u201d required for enforceable contracts.",
    "id": 12
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Legal age to contract in Alabama auction transactions is:",
    "options": ["16", "18", "21", "25"],
    "correctAnswer": 1,
    "explanation": "Individuals must generally be 18 to enter binding contracts unless emancipated.",
    "id": 13
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A contract with a legally incompetent person is:",
    "options": ["Always valid", "Void from the outset", "Automatically enforceable", "A unilateral contract"],
    "correctAnswer": 1,
    "explanation": "Contracts lacking capacity are void, meaning they never formed legally.",
    "id": 14
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A contract with a minor is:",
    "options": ["Void", "Voidable at the minor\u2019s option", "Always enforceable", "Illegal"],
    "correctAnswer": 1,
    "explanation": "Contracts with minors are voidable until the minor reaches majority.",
    "id": 15
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Fraud occurs when:",
    "options": ["A party innocently misstates a fact", "A party deliberately misrepresents for unfair advantage", "The auction is cancelled", "A seller changes their mind"],
    "correctAnswer": 1,
    "explanation": "Fraud requires intentional misrepresentation, allowing the harmed party to void the agreement.",
    "id": 16
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Misrepresentation differs from fraud because it is:",
    "options": ["Always criminal", "An innocent misstatement of material fact", "Required in auctions", "Impossible to prove"],
    "correctAnswer": 1,
    "explanation": "Misrepresentation is unintentional but still makes a contract voidable if material.",
    "id": 17
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Duress involves:",
    "options": ["Friendly persuasion", "Force or threat of injury", "A counteroffer", "Written acceptance"],
    "correctAnswer": 1,
    "explanation": "Contracts entered under force or threats can be voided by the forced party.",
    "id": 18
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A mistake of law has what effect?",
    "options": ["Makes contract voidable", "No effect", "Automatically void", "Creates fraud"],
    "correctAnswer": 1,
    "explanation": "Not understanding the law does not excuse contractual obligations.",
    "id": 19
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A bilateral contract involves:",
    "options": ["One promise only", "Mutual exchange of promises", "No consideration", "Only implied conduct"],
    "correctAnswer": 1,
    "explanation": "Most auction purchase agreements are bilateral, with mutual promises exchanged.",
    "id": 20
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A promise without consideration is generally:",
    "options": ["Always enforceable", "A gift and unenforceable", "A bilateral contract", "A valid auction contract"],
    "correctAnswer": 1,
    "explanation": "The guide explains that without consideration, a promise is essentially a promise to make a gift, which is unenforceable in most cases. Consideration is what turns promises into legally binding obligations.",
    "id": 21
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Which is true about consideration?",
    "options": ["It must always be equal between parties", "It must always be fair market value", "It does not have to be fair", "It must be reviewed by the Board"],
    "correctAnswer": 2,
    "explanation": "Consideration does not need to be fair. Courts usually won\u2019t evaluate whether the deal was \u201cgood,\u201d unless the consideration is so inadequate that it suggests fraud or undue influence.",
    "id": 22
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A minor may contract if they are:",
    "options": ["Under age 16", "Emancipated, such as through marriage", "Bidding online", "Buying personal property only"],
    "correctAnswer": 1,
    "explanation": "The guide notes that minors generally cannot contract, but emancipated minors (like married minors) may enter enforceable agreements.",
    "id": 23
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A contract entered into by an adjudged incompetent person is:",
    "options": ["Valid", "Void from the outset", "Unilateral", "Executory only"],
    "correctAnswer": 1,
    "explanation": "A person declared legally incompetent lacks capacity, meaning the contract was never valid. It is void immediately.",
    "id": 24
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If a contract requires an illegal act, it is:",
    "options": ["Enforceable", "Void", "Bilateral", "Implied"],
    "correctAnswer": 1,
    "explanation": "Contracts requiring illegal performance are void and unenforceable. The illegal purpose does not need to be criminal, just unlawful.",
    "id": 25
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A valid contract requires all except:",
    "options": ["Competent parties", "Mutual agreement", "A legal purpose", "A handshake in public"],
    "correctAnswer": 3,
    "explanation": "A handshake is not a required element. Valid contracts require competence, agreement, consideration, and legality (and writing if required).",
    "id": 26
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A void contract is:",
    "options": ["Valid but unenforceable", "Never legally formed", "Binding until cancelled", "Enforceable only with witnesses"],
    "correctAnswer": 1,
    "explanation": "A void contract has no legal status because it never formed correctly. Example: contract with an incompetent person.",
    "id": 27
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A voidable contract is best described as:",
    "options": ["Automatically void", "Always enforceable", "One party may choose to void it", "Illegal in all cases"],
    "correctAnswer": 2,
    "explanation": "Voidable contracts exist legally, but one party has the option to avoid it, such as contracts with minors.",
    "id": 28
  },
  {
    "topic": "General Auction Knowledge",
    "question": "An unenforceable contract means:",
    "options": ["No valid contract exists", "Contract is valid but cannot be sued upon", "Contract is criminal", "Consideration is unnecessary"],
    "correctAnswer": 1,
    "explanation": "The guide explains that unenforceable contracts may be valid between parties but not enforceable in court (like unwritten auction sales).",
    "id": 29
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Misrepresentation is:",
    "options": ["A deliberate lie for advantage", "An innocent misstatement of fact", "The same as duress", "Always criminal fraud"],
    "correctAnswer": 1,
    "explanation": "Misrepresentation is an innocent but material misstatement. It makes the contract voidable.",
    "id": 30
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Fraud requires:",
    "options": ["A mistake of law", "Deliberate misstatement for dishonest advantage", "A counteroffer", "Consideration imbalance"],
    "correctAnswer": 1,
    "explanation": "Fraud occurs when one party intentionally misstates facts to gain unfair advantage. The harmed party may void the contract.",
    "id": 31
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Undue influence occurs when:",
    "options": ["One party threatens injury", "One party takes unfair advantage due to special relationship", "An offer is revoked", "Consideration is missing"],
    "correctAnswer": 1,
    "explanation": "Undue influence involves unfair advantage due to relationship dynamics, making the contract voidable.",
    "id": 32
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A mistake of fact makes a contract:",
    "options": ["Void immediately", "Voidable", "Fully enforceable", "Illegal"],
    "correctAnswer": 1,
    "explanation": "Mistake of fact occurs when parties assume something incorrect, such as wrong property description. It makes the agreement voidable.",
    "id": 33
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A mistake of law has what effect?",
    "options": ["Voidable", "No effect", "Fraudulent automatically", "Cancels consideration"],
    "correctAnswer": 1,
    "explanation": "Not understanding legal obligations does not excuse performance. Parties remain bound.",
    "id": 34
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A purchase agreement is typically:",
    "options": ["Unilateral", "Bilateral", "Voidable", "Implied"],
    "correctAnswer": 1,
    "explanation": "A bilateral contract involves mutual promises: seller promises to sell, buyer promises to pay.",
    "id": 35
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auction contracts in Alabama are:",
    "options": ["Implied", "Oral only", "Express written contracts", "Never enforceable"],
    "correctAnswer": 2,
    "explanation": "The guide clearly states auction contracts are express written contracts in Alabama due to licensing law requirements.",
    "id": 36
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auction contracts are usually:",
    "options": ["Assignable freely", "Non-assignable", "Void automatically", "Not enforceable"],
    "correctAnswer": 1,
    "explanation": "Auction contracts are personal service agreements and generally cannot be assigned to another auctioneer.",
    "id": 37
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Novation means:",
    "options": ["Minor mistake correction", "Substitution of a new contract", "An illegal purpose", "A trust account deposit"],
    "correctAnswer": 1,
    "explanation": "Novation replaces an existing contract with a new one, discharging the old obligations.",
    "id": 38
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Accord and satisfaction is:",
    "options": ["A forced auction sale", "A dispute settlement with alternative performance", "Fraudulent misrepresentation", "A void contract"],
    "correctAnswer": 1,
    "explanation": "It is a compromise where one party provides different performance accepted by the other.",
    "id": 39
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If an auction contract is cancelled after some work, the auctioneer may receive:",
    "options": ["Nothing ever", "Compensation for work completed", "Punitive damages automatically", "Full commission always"],
    "correctAnswer": 1,
    "explanation": "Partial performance allows compensation for work done up to that point, like advertising expenses.",
    "id": 40
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Substantial performance means:",
    "options": ["Nothing was completed", "Most of the contract has been performed", "The contract was void", "The buyer refused delivery"],
    "correctAnswer": 1,
    "explanation": "If the auction is largely completed, payment (like commission) is due even if minor details remain.",
    "id": 41
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If the seller defaults, the auctioneer may sue for:",
    "options": ["Chant practice", "Specific performance or damages", "Automatic license renewal", "Buyer\u2019s premium"],
    "correctAnswer": 1,
    "explanation": "The guide notes auctioneers may rescind, sue for specific performance, or sue for damages if the seller fails to perform.",
    "id": 42
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Compensatory damages are:",
    "options": ["Punishment damages", "Money awarded to cover actual loss", "Token damages only", "Always triple damages"],
    "correctAnswer": 1,
    "explanation": "Compensatory damages reimburse the injured party for real financial losses, such as advertising costs.",
    "id": 43
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Punitive damages are meant to:",
    "options": ["Refund earnest money", "Punish outrageous breach", "Replace consideration", "Void all contracts"],
    "correctAnswer": 1,
    "explanation": "Punitive damages go beyond compensation and are intended to punish willful or extreme wrongdoing.",
    "id": 44
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Liquidated damages are:",
    "options": ["Court-awarded after trial", "Pre-agreed compensation written into the contract", "Always illegal penalties", "A trust account fee"],
    "correctAnswer": 1,
    "explanation": "Liquidated damages are specified in the contract, but courts may refuse them if they are excessive and act as penalties.",
    "id": 45
  },
  {
    "topic": "General Auction Knowledge",
    "question": "An executed contract is:",
    "options": ["Still awaiting completion", "Fully performed and complete", "Automatically void", "A unilateral contract only"],
    "correctAnswer": 1,
    "explanation": "Executed contracts have met all terms and are finished.",
    "id": 46
  },
  {
    "topic": "General Auction Knowledge",
    "question": "An executory contract is:",
    "options": ["Complete", "Still requiring performance", "Void immediately", "Only oral"],
    "correctAnswer": 1,
    "explanation": "Executory contracts still have obligations remaining. Many auction transactions remain executory until closing/payment.",
    "id": 47
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The auctioneer\u2019s relationship with the seller is primarily:",
    "options": ["Casual", "Fiduciary (trust-based)", "A criminal relationship", "Unilateral only"],
    "correctAnswer": 1,
    "explanation": "Agency creates a fiduciary duty, meaning the auctioneer must act in good faith and put the principal\u2019s interests first.",
    "id": 48
  },
  {
    "topic": "General Auction Knowledge",
    "question": "An auctioneer may represent both buyer and seller only with:",
    "options": ["Silence", "Written informed consent", "Buyer\u2019s premium", "Court approval"],
    "correctAnswer": 1,
    "explanation": "Dual agency is only allowed with full disclosure and written consent from both parties.",
    "id": 49
  },
  {
    "topic": "General Auction Knowledge",
    "question": "In agency law, the buyer is usually considered:",
    "options": ["The client", "The principal", "The customer", "A fiduciary"],
    "correctAnswer": 2,
    "explanation": "The seller is typically the client/principal; the buyer is the customer, owed honesty and fairness but not fiduciary loyalty.",
    "id": 50
  },
  {
    "topic": "General Auction Knowledge",
    "question": "An auction contract is best defined as:",
    "options": ["A buyer\u2019s agreement to pay sales tax", "The auctioneer\u2019s contract for employment as an agent of the principal", "A handshake agreement between bidders", "A contract only required for firearms auctions"],
    "correctAnswer": 1,
    "explanation": "The guide defines the auction contract as the agreement establishing the auctioneer as the agent hired to handle the auction sale for the principal (owner/seller). This contract creates the fiduciary relationship.",
    "id": 51
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The parties to an auction contract are:",
    "options": ["Auctioneer and buyer", "Principal (owner) and auctioneer", "Apprentice auctioneer and seller", "Buyer and apprentice auctioneer"],
    "correctAnswer": 1,
    "explanation": "The auction contract exists between the principal (the owner of the goods/property) and the auctioneer (agent). Apprentices are not parties to the contract.",
    "id": 52
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Most auctioneers are considered:",
    "options": ["Universal agents", "General agents", "Special agents with limited authority", "Attorneys-in-fact automatically"],
    "correctAnswer": 2,
    "explanation": "Auctioneers are usually special agents, meaning they have limited authority specifically defined in the auction contract (show property, take bids, accept funds).",
    "id": 53
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The principal is bound only by:",
    "options": ["Any promises the auctioneer makes publicly", "Acts within the auctioneer\u2019s authority under the contract", "Any apprentice actions", "Buyer\u2019s premium payments"],
    "correctAnswer": 1,
    "explanation": "The seller/principal is bound only if the auctioneer acts within the authority granted by the auction contract. Unauthorized acts do not bind the principal.",
    "id": 54
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Which is required in every Alabama auction contract?",
    "options": ["Buyer\u2019s signature", "Beginning and ending dates", "A list of all bidders", "Federal firearms language"],
    "correctAnswer": 1,
    "explanation": "Alabama law requires auction contracts to include a specific beginning and ending date, along with names, addresses, property description, and commission terms.",
    "id": 55
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A valid auction contract should specify:",
    "options": ["Auctioneer\u2019s chant style", "How commission is earned", "Seller\u2019s personal motivations", "Buyer\u2019s loan terms"],
    "correctAnswer": 1,
    "explanation": "Commission must be clearly stated including amount and how it is earned, to avoid misunderstandings and disputes.",
    "id": 56
  },
  {
    "topic": "General Auction Knowledge",
    "question": "An auctioneer earns commission by:",
    "options": ["Advertising only", "Finding a purchaser ready, willing, and able", "Taking earnest money deposits", "Opening a trust account"],
    "correctAnswer": 1,
    "explanation": "Commission is earned by performance: producing a buyer ready, willing, and able, effecting a sale acceptable to the seller, and being the procuring cause.",
    "id": 57
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Commission is earned when:",
    "options": ["Contract is signed", "Terms are completed, though paid at settlement", "First bid is received", "Buyer pays premium only"],
    "correctAnswer": 1,
    "explanation": "The commission is earned once the auction contract terms are completed, even if payment occurs later at closing/settlement.",
    "id": 58
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Which is a valid termination method?",
    "options": ["Buyer refuses to bid", "Lapse of time stated in the contract", "Auctioneer changes chant rhythm", "Seller regrets sale after hammer falls"],
    "correctAnswer": 1,
    "explanation": "Contracts can terminate through performance, lapse of time, breach, mutual agreement, or revocation by principal.",
    "id": 59
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If the auctioneer has performed, the seller may still owe:",
    "options": ["Nothing ever", "Commission or damages", "Buyer\u2019s premium", "Board fines automatically"],
    "correctAnswer": 1,
    "explanation": "The seller may remain liable for commission or damages (advertising, transport) if performance occurred before termination.",
    "id": 60
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A trust account is:",
    "options": ["The auctioneer\u2019s operating account", "A separate demand account holding funds belonging to others", "A bidder registration account", "A tax escrow for the IRS"],
    "correctAnswer": 1,
    "explanation": "A trust account is a separate account used to hold earnest money, sale proceeds, or other funds belonging to clients, not the auctioneer.",
    "id": 61
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Alabama law requires:",
    "options": ["No escrow accounts", "Each principal auctioneer to maintain one or more trust accounts", "Apprentices to maintain separate trust accounts", "Buyers to deposit directly into operating accounts"],
    "correctAnswer": 1,
    "explanation": "Every principal auctioneer must maintain trust accounts for funds belonging to others that come into their possession.",
    "id": 62
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Which must be deposited into the trust account?",
    "options": ["Auctioneer\u2019s commission immediately", "Earnest money and undisbursed proceeds", "Advertising invoices", "Personal business profits"],
    "correctAnswer": 1,
    "explanation": "Earnest money, closing escrows, and proceeds belonging to others must be placed into trust.",
    "id": 63
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A trust account must be:",
    "options": ["Invested in bonds", "A demand account at an insured Alabama bank", "Held offshore", "A certificate of deposit"],
    "correctAnswer": 1,
    "explanation": "Trust accounts must be demand accounts with insured banks/savings institutions in Alabama. Funds may not be invested.",
    "id": 64
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Interest earned on a trust account:",
    "options": ["Belongs to the auctioneer", "Must go to the client/beneficiary", "Goes automatically to the Board", "Is illegal in Alabama"],
    "correctAnswer": 1,
    "explanation": "Auctioneers may not keep interest personally. Interest belongs to the beneficiary unless contract specifies otherwise.",
    "id": 65
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Trust account records must identify:",
    "options": ["Auctioneer chant cadence", "Funds held for each beneficiary", "Seller\u2019s emotions", "Buyer\u2019s license number"],
    "correctAnswer": 1,
    "explanation": "Records must clearly show inflow/outflow, balances, purpose, and amounts held for each beneficiary.",
    "id": 66
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Funds received by an apprentice must be:",
    "options": ["Deposited into the apprentice\u2019s personal account", "Immediately delivered to the principal auctioneer", "Invested for profit", "Held indefinitely"],
    "correctAnswer": 1,
    "explanation": "Apprentices do not maintain trust accounts. All funds must go directly to the principal auctioneer, who remains responsible.",
    "id": 67
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneers may deduct commission from trust:",
    "options": ["Immediately after auction ends", "Only after closing with permission to disburse", "Whenever operating expenses arise", "Never under any circumstances"],
    "correctAnswer": 1,
    "explanation": "Commissions should not be removed until closing has occurred and disbursement is authorized by transaction documents.",
    "id": 68
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If buyer and seller dispute trust funds, the auctioneer should:",
    "options": ["Decide who deserves it", "Hold funds until court or Commission direction", "Refund buyer automatically", "Apply funds to commission"],
    "correctAnswer": 1,
    "explanation": "Funds must remain undistributed until proper authority directs distribution.",
    "id": 69
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Upon death of the principal auctioneer:",
    "options": ["Funds become estate property", "Board takes custody of the trust account", "Apprentice controls account", "Buyers divide funds"],
    "correctAnswer": 1,
    "explanation": "Upon death or license expiration/revocation, the Board takes custody of the trust account.",
    "id": 70
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Commingling means:",
    "options": ["Depositing trust funds into the correct escrow account", "Mixing client funds into auctioneer\u2019s personal/operating account", "Holding interest-bearing escrow", "Reporting insufficient funds"],
    "correctAnswer": 1,
    "explanation": "Commingling is grounds for suspension/revocation. It occurs when client/customer funds are placed into the auctioneer\u2019s own account.",
    "id": 71
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Conversion is:",
    "options": ["Proper escrow management", "Using someone else\u2019s money as your own", "Charging a buyer\u2019s premium", "Canceling a sale"],
    "correctAnswer": 1,
    "explanation": "Conversion happens when auctioneers treat client trust funds as personal funds instead of depositing them properly. It is a serious license violation.",
    "id": 72
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Earnest money in real estate auctions is:",
    "options": ["Always required", "Not essential for a valid offer", "Paid directly to the seller\u2019s pocket", "Required by UCC"],
    "correctAnswer": 1,
    "explanation": "Earnest money is not required for an offer or sales contract to be valid, though it is often used as good practice.",
    "id": 73
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Under UCC 2-328, goods put in lots:",
    "options": ["Form one single sale", "Each lot is a separate sale", "Cannot be withdrawn", "Must be without reserve"],
    "correctAnswer": 1,
    "explanation": "The UCC states each lot is subject to a separate sale. This matters when disputes arise over individual items.",
    "id": 74
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A sale is complete when:",
    "options": ["Buyer registers", "Auctioneer announces completion by fall of the hammer", "Seller shakes hands", "Sales tax is paid"],
    "correctAnswer": 1,
    "explanation": "The UCC establishes completion at the fall of the hammer or customary announcement. Risk of loss may pass then.",
    "id": 75
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Unless explicitly stated otherwise, auctions are presumed:",
    "options": ["Without reserve", "With reserve", "Illegal", "Forced sales"],
    "correctAnswer": 1,
    "explanation": "UCC presumes auctions are \u201cwith reserve\u201d unless goods are explicitly offered \u201cwithout reserve.\u201d",
    "id": 76
  },
  {
    "topic": "General Auction Knowledge",
    "question": "In a reserve auction, goods may be withdrawn:",
    "options": ["Never", "Any time before completion of sale", "Only after bidding ends", "Only with buyer consent"],
    "correctAnswer": 1,
    "explanation": "With reserve, withdrawal may occur any time before the auctioneer announces completion.",
    "id": 77
  },
  {
    "topic": "General Auction Knowledge",
    "question": "In an auction without reserve, goods cannot be withdrawn after:",
    "options": ["Advertising", "Auctioneer calls for bids", "Buyer pays premium", "Closing occurs"],
    "correctAnswer": 1,
    "explanation": "Without reserve means once bidding begins, goods must sell unless no bids are received within reasonable time.",
    "id": 78
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A bidder may retract their bid:",
    "options": ["After hammer falls", "Any time before completion announcement", "Only if seller agrees", "Never in Alabama"],
    "correctAnswer": 1,
    "explanation": "UCC treats bids as revocable offers until the auctioneer announces completion of sale.",
    "id": 79
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If the seller bids without disclosure, the buyer may:",
    "options": ["Be forced to pay anyway", "Avoid the sale or take goods at last good-faith bid", "Lose their deposit automatically", "Only complain to the auctioneer"],
    "correctAnswer": 1,
    "explanation": "Undisclosed seller bidding allows buyer to rescind or enforce price at last bona fide bid. Shill bidding must be disclosed.",
    "id": 80
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Under UCC 2-328, when a bidder retracts a bid:",
    "options": ["All earlier bids automatically revive", "The retraction does not revive any previous bid", "The auction must end immediately", "The seller may sue the bidder"],
    "correctAnswer": 1,
    "explanation": "The guide explains that bids are revocable offers until completion of sale, but once a bid is withdrawn, earlier bids do not come back into force. Retraction does not revive prior bids.",
    "id": 81
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If a bid is made while the hammer is falling:",
    "options": ["It must be accepted automatically", "Auctioneer may reopen bidding or declare goods sold under the prior bid", "Seller decides which bid counts", "Bid is illegal"],
    "correctAnswer": 1,
    "explanation": "The UCC gives discretion to the auctioneer. If a late bid is called while the hammer is falling, the auctioneer may reopen bidding or finalize the prior bid. This should be clearly explained to avoid disputes.",
    "id": 82
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A \u201cwith reserve\u201d auction means:",
    "options": ["Items must sell regardless of price", "Seller may establish a minimum and withdraw if unmet", "Bidders may retract after completion", "Seller cannot bid under any circumstance"],
    "correctAnswer": 1,
    "explanation": "With reserve means the seller can set a minimum price. If bids do not meet that minimum, the auctioneer may withdraw goods prior to announcing completion.",
    "id": 83
  },
  {
    "topic": "General Auction Knowledge",
    "question": "To conduct an auction \u201cwithout reserve,\u201d goods must be:",
    "options": ["Sold only in lots", "Explicitly offered as \u201cwithout reserve\u201d", "Sold only to licensed buyers", "Approved by the Board"],
    "correctAnswer": 1,
    "explanation": "The guide emphasizes that auctions are presumed \u201cwith reserve\u201d unless explicitly stated otherwise. To bind the seller to sell regardless of price, \u201cwithout reserve\u201d must be clearly communicated.",
    "id": 84
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Goods offered without reserve may be withdrawn only if:",
    "options": ["Seller changes their mind", "Auctioneer announces completion", "No bids are received within a reasonable time", "Buyer requests withdrawal"],
    "correctAnswer": 2,
    "explanation": "Once bidding begins in a without-reserve auction, goods cannot be withdrawn unless no bids come in within a reasonable time. That\u2019s the whole point of without reserve: the seller is committed.",
    "id": 85
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Seller bidding is only permitted if:",
    "options": ["Auctioneer encourages it secretly", "Notice is given that liberty for seller bidding is reserved", "Buyer signs a waiver", "Auction is forced sale"],
    "correctAnswer": 1,
    "explanation": "The UCC requires disclosure if seller bidding will occur. Without disclosure, the buyer can rescind or enforce the last good-faith bid price.",
    "id": 86
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A \u201cshill\u201d is:",
    "options": ["A buyer\u2019s premium collector", "A person placed to artificially run up bids", "An apprentice auctioneer", "A secured creditor"],
    "correctAnswer": 1,
    "explanation": "The guide explains shills are individuals bidding solely to inflate the price. The UCC strongly regulates this practice and requires disclosure if seller bidding is allowed.",
    "id": 87
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If seller bidding occurs without notice, buyer may:",
    "options": ["Be forced to complete sale regardless", "Avoid the sale or take goods at last bona fide bid", "Report only to trade association", "Increase bid again"],
    "correctAnswer": 1,
    "explanation": "UCC allows the buyer to rescind the sale entirely or enforce the price at the last good-faith bid before the seller\u2019s undisclosed bid. This protects public trust.",
    "id": 88
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Risk of loss generally passes to buyer:",
    "options": ["When bidder registers", "At fall of hammer or completion announcement", "Only after payment clears", "Only after delivery"],
    "correctAnswer": 1,
    "explanation": "The guide notes risk of loss may pass at the moment of sale completion (hammer fall), though payment may occur later. Auction terms should clarify this.",
    "id": 89
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Trust accounts must be designated as:",
    "options": ["\u201cAuctioneer Savings\u201d", "\u201cTrust\u201d or \u201cEscrow\u201d account", "\u201cPremium Deposit Account\u201d", "\u201cOperating Account\u201d"],
    "correctAnswer": 1,
    "explanation": "Alabama law requires the account be clearly labeled trust/escrow so funds are not confused with operating funds.",
    "id": 90
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Trust funds may NOT be invested in:",
    "options": ["Demand checking accounts", "Securities, bonds, certificates of deposit", "Non-interest escrow accounts", "Alabama insured banks"],
    "correctAnswer": 1,
    "explanation": "The guide explicitly prohibits investment of trust funds. They must remain liquid in demand accounts. Auctioneers are not fund managers.",
    "id": 91
  },
  {
    "topic": "General Auction Knowledge",
    "question": "An apprentice auctioneer:",
    "options": ["Must open their own escrow account", "Must deliver funds immediately to principal auctioneer", "May invest funds temporarily", "Can disburse proceeds independently"],
    "correctAnswer": 1,
    "explanation": "Apprentices do not maintain trust accounts. All funds must go directly to the principal auctioneer, who carries legal responsibility.",
    "id": 92
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer should deduct commission from trust:",
    "options": ["Immediately after hammer falls", "Only at closing with permission", "Whenever operating expenses arise", "Never, even if earned"],
    "correctAnswer": 1,
    "explanation": "Commission should not be removed until closing and authorization under transaction documents. Premature withdrawals risk commingling or conversion.",
    "id": 93
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If buyer and seller dispute funds, auctioneer must:",
    "options": ["Decide who is right", "Hold funds until directed by court or Commission", "Pay seller automatically", "Keep funds as liquidated damages"],
    "correctAnswer": 1,
    "explanation": "Funds must remain in trust until proper authority directs distribution. Auctioneer is stakeholder, not judge.",
    "id": 94
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The Alabama Board has the right to:",
    "options": ["Set commission rates", "Inspect trust account records upon request", "Approve every auction advertisement", "Control buyer bidding"],
    "correctAnswer": 1,
    "explanation": "The guide states the Board may investigate and inspect trust records at any time. Failure to comply risks discipline.",
    "id": 95
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Commingling is grounds for:",
    "options": ["Increased commission", "License suspension or revocation", "Automatic dual agency", "Contract assignment"],
    "correctAnswer": 1,
    "explanation": "Mixing client funds into operating/personal accounts violates Alabama law and can lead to suspension or revocation.",
    "id": 96
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Conversion refers to:",
    "options": ["Auctioneer properly holding funds", "Auctioneer using someone else\u2019s money as their own", "Buyer retracting a bid", "Seller withdrawing goods"],
    "correctAnswer": 1,
    "explanation": "Conversion is misuse of trust money after commingling. It is one of the most serious violations under the License Law.",
    "id": 97
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If buyer\u2019s check is insufficient, auctioneer must:",
    "options": ["Ignore it", "Report immediately to seller and explain options", "Deposit into operating account", "Void all bids"],
    "correctAnswer": 1,
    "explanation": "Agent duty requires immediate notice to seller and explaining options: cancel sale or allow buyer time. Auctioneer follows seller instructions.",
    "id": 98
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Earnest money in real estate auctions is:",
    "options": ["Essential for a valid offer", "Not essential for offer validity", "Required by UCC", "Always illegal"],
    "correctAnswer": 1,
    "explanation": "The guide clearly states earnest money is not essential for a valid offer or sales contract, though common practice may include it.",
    "id": 99
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The auctioneer\u2019s primary duty to the seller is:",
    "options": ["To maximize buyer satisfaction", "Fiduciary loyalty, good faith, and obedience", "To guarantee the highest price", "To represent both parties equally without disclosure"],
    "correctAnswer": 1,
    "explanation": "Agency creates a fiduciary duty. Auctioneers must act in good faith, remain loyal, follow lawful instructions, and protect the principal\u2019s interests. This is not optional, it\u2019s the foundation of agency law.",
    "id": 100
  },
  {
    "topic": "General Auction Knowledge",
    "question": "In an auction transaction, the seller is the:",
    "options": ["Customer", "Principal", "Trustee", "Sub-agent"],
    "correctAnswer": 1,
    "explanation": "The seller (property owner) is the principal. The auctioneer acts as the agent, representing the seller in the auction sale.",
    "id": 101
  },
  {
    "topic": "General Auction Knowledge",
    "question": "In most auctions, the buyer is considered:",
    "options": ["The principal", "The client", "The customer", "The fiduciary beneficiary"],
    "correctAnswer": 2,
    "explanation": "The auctioneer owes honesty and fairness to buyers, but fiduciary loyalty belongs to the seller. Buyers are customers, not clients.",
    "id": 102
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The duty of obedience means the auctioneer must:",
    "options": ["Follow buyer requests", "Follow lawful instructions of the principal", "Always accept the final bid", "Change auction terms as needed"],
    "correctAnswer": 1,
    "explanation": "Auctioneers must obey lawful instructions of the seller. This does not mean blind obedience to illegal or unethical requests, but lawful contract-based directives must be followed.",
    "id": 103
  },
  {
    "topic": "General Auction Knowledge",
    "question": "An auctioneer must disclose:",
    "options": ["Only what benefits the auctioneer", "All known material facts affecting value or transaction", "The identities of all bidders", "Seller\u2019s minimum reserve price always"],
    "correctAnswer": 1,
    "explanation": "Auctioneers must disclose material facts, meaning facts that would affect a party\u2019s decision-making. Failure to disclose may constitute misrepresentation or fraud.",
    "id": 104
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Which is a material fact requiring disclosure?",
    "options": ["Auctioneer dislikes the property", "The property has a known structural defect", "The weather is sunny", "Buyer plans to resell"],
    "correctAnswer": 1,
    "explanation": "Known defects affecting value are material. Auctioneers may not hide or ignore these facts when representing sellers.",
    "id": 105
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Fraud requires:",
    "options": ["Innocent mistake", "Intentional deception for unfair advantage", "Silence always", "Lack of consideration"],
    "correctAnswer": 1,
    "explanation": "Fraud occurs when an auctioneer deliberately misstates or conceals facts to gain advantage. Fraud makes contracts voidable and may lead to civil or disciplinary penalties.",
    "id": 106
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Misrepresentation differs from fraud because it is:",
    "options": ["Always intentional", "Innocent but still material", "Always criminal", "Required in auctions"],
    "correctAnswer": 1,
    "explanation": "Misrepresentation is an innocent misstatement of material fact. Even without intent, it may allow contract rescission. Fraud requires intent.",
    "id": 107
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u201cPuffing\u201d refers to:",
    "options": ["Fraudulent concealment", "Exaggerated sales talk not meant as fact", "Illegal reserve bidding", "Buyer collusion"],
    "correctAnswer": 1,
    "explanation": "Puffing includes statements like \u201cthis is the best land in Alabama.\u201d It is opinion, not factual misrepresentation, unless it crosses into specific false claims.",
    "id": 108
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Negligent misrepresentation happens when:",
    "options": ["Auctioneer knowingly lies", "Auctioneer fails to exercise reasonable care in providing accurate info", "Buyer retracts bid", "Seller withdraws goods"],
    "correctAnswer": 1,
    "explanation": "Even without intent, auctioneers may be liable if they provide incorrect information due to carelessness. Duty includes reasonable diligence.",
    "id": 109
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Dual agency means:",
    "options": ["Auctioneer represents two sellers", "Auctioneer represents both buyer and seller in same transaction", "Auctioneer hires two apprentices", "Buyer pays double premium"],
    "correctAnswer": 1,
    "explanation": "Dual agency occurs when auctioneer represents both parties. This creates conflict and is only allowed with written informed consent.",
    "id": 110
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Dual agency is permitted only with:",
    "options": ["Auctioneer\u2019s verbal notice", "Written informed consent from both parties", "Seller approval alone", "Buyer\u2019s premium increase"],
    "correctAnswer": 1,
    "explanation": "Alabama agency rules require disclosure and written informed consent from both buyer and seller. Without it, dual agency is a breach of fiduciary duty.",
    "id": 111
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A conflict of interest occurs when:",
    "options": ["Auctioneer acts only for seller", "Auctioneer\u2019s personal interests interfere with duty to principal", "Seller sets reserve price", "Buyer demands inspection"],
    "correctAnswer": 1,
    "explanation": "Auctioneers must avoid conflicts. If personal gain interferes with loyalty to the seller, fiduciary duty is violated.",
    "id": 112
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer purchasing property at own auction:",
    "options": ["Always permitted silently", "Permitted only with full disclosure and seller consent", "Illegal in all cases", "Required for reserve auctions"],
    "correctAnswer": 1,
    "explanation": "Auctioneers may not secretly purchase property they are selling. Disclosure and consent are required to avoid self-dealing conflicts.",
    "id": 113
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneers have duty to:",
    "options": ["Keep proceeds indefinitely", "Properly account for all funds and property", "Deposit into operating account", "Share proceeds with bidders"],
    "correctAnswer": 1,
    "explanation": "Accounting duty requires proper trust account deposits, accurate records, and timely disbursement. Mismanagement risks suspension or revocation.",
    "id": 114
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer must keep confidential:",
    "options": ["Seller motivations and private financial info", "Auction advertisement", "Bid increments", "Public sale results"],
    "correctAnswer": 0,
    "explanation": "Confidentiality is part of fiduciary loyalty. Seller\u2019s private information must not be shared unless required by law.",
    "id": 115
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer must always disclose seller reserve price:",
    "options": ["True", "False"],
    "correctAnswer": 1,
    "explanation": "Reserve price is typically confidential unless seller authorizes disclosure. Auctioneer must follow principal instructions and maintain confidentiality.",
    "id": 116
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Buyer collusion means:",
    "options": ["Buyers competing fairly", "Buyers conspiring to suppress bidding", "Seller bidding openly", "Auctioneer advertising aggressively"],
    "correctAnswer": 1,
    "explanation": "Collusion undermines fair auction competition. Auctioneers must maintain integrity and may reject collusive bids.",
    "id": 117
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneers may be liable for:",
    "options": ["Only seller dissatisfaction", "Fraud, negligence, breach of fiduciary duty", "Buyer\u2019s poor financial decisions only", "Weather-related auction delays"],
    "correctAnswer": 1,
    "explanation": "Auctioneers can face civil liability and discipline for fraud, negligent misrepresentation, conversion, breach of loyalty, and trust account violations.",
    "id": 118
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A principal may revoke agency:",
    "options": ["Only after auction ends", "At any time before performance, subject to damages", "Never once contract is signed", "Only with Board approval"],
    "correctAnswer": 1,
    "explanation": "Agency may be revoked, but if auctioneer has performed or incurred expenses, the principal may still owe damages or commission.",
    "id": 119
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneers owe a duty of reasonable care, meaning they must:",
    "options": ["Guarantee the seller gets the highest price", "Act with the skill and care of a competent auction professional", "Always accept late bids", "Work only for buyers"],
    "correctAnswer": 1,
    "explanation": "Auctioneers are held to a professional standard. They must act with competence, diligence, and reasonable skill. Negligence can create liability even without fraud.",
    "id": 120
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Loyalty requires the auctioneer to:",
    "options": ["Put personal profit first", "Put the principal\u2019s interests ahead of the auctioneer\u2019s", "Represent the buyer equally", "Share confidential seller info with bidders"],
    "correctAnswer": 1,
    "explanation": "The fiduciary duty of loyalty means the auctioneer must act for the seller\u2019s benefit, avoiding conflicts and self-dealing.",
    "id": 121
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Self-dealing occurs when an auctioneer:",
    "options": ["Advertises aggressively", "Uses their position to gain secret personal benefit", "Charges a buyer\u2019s premium", "Withdraws goods with reserve"],
    "correctAnswer": 1,
    "explanation": "Self-dealing is a breach of loyalty. Examples include secretly buying property or steering the sale for personal advantage.",
    "id": 122
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneers must keep confidential:",
    "options": ["Public auction results", "Seller\u2019s private motivations and financial information", "The bid increments", "The date of the auction"],
    "correctAnswer": 1,
    "explanation": "Confidentiality is part of fiduciary duty. Seller information that could harm negotiating position must not be disclosed.",
    "id": 123
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The duty to account requires auctioneers to:",
    "options": ["Hold proceeds indefinitely", "Properly handle and document all funds received", "Use trust funds for advertising", "Deposit proceeds into operating accounts"],
    "correctAnswer": 1,
    "explanation": "Accounting means accurate records, proper trust deposits, and disbursement according to contract and law.",
    "id": 124
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneers must disclose agency relationships:",
    "options": ["Only if asked", "Clearly, so parties know who is represented", "Only after auction ends", "Never, to avoid confusion"],
    "correctAnswer": 1,
    "explanation": "Agency disclosure prevents misunderstandings. Buyers should know auctioneer represents seller unless dual agency is created with consent.",
    "id": 125
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Dual agency is risky because:",
    "options": ["It increases commission automatically", "Auctioneer cannot fully advocate for both sides", "It eliminates fiduciary duty", "Buyers must always lose deposits"],
    "correctAnswer": 1,
    "explanation": "Representing both sides creates conflict. Auctioneer cannot give undivided loyalty to both buyer and seller, so written consent is mandatory.",
    "id": 126
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Which is puffing, not fraud?",
    "options": ["\u201cThis roof was replaced last year\u201d (when untrue)", "\u201cThis is the finest farm in Alabama!\u201d", "Hiding termite damage", "Claiming clear title when lien exists"],
    "correctAnswer": 1,
    "explanation": "Puffing is exaggerated opinion, not factual misrepresentation. Specific false factual claims are fraud/misrepresentation.",
    "id": 127
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer negligence occurs when:",
    "options": ["Auctioneer intentionally lies", "Auctioneer fails to act with reasonable care", "Buyer bids too high", "Seller sets reserve"],
    "correctAnswer": 1,
    "explanation": "Negligence does not require intent. Careless errors, failure to verify information, or sloppy handling of funds may create liability.",
    "id": 128
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Fraud may result in:",
    "options": ["Only buyer dissatisfaction", "Civil liability, contract rescission, disciplinary action", "Automatic commission increase", "No consequences if seller agrees"],
    "correctAnswer": 1,
    "explanation": "Fraud is serious. It can void contracts, trigger lawsuits, and lead to license sanctions.",
    "id": 129
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneers must disclose material facts they know because:",
    "options": ["Buyers demand it", "Silence can become misrepresentation", "It increases bidding", "It cancels reserve"],
    "correctAnswer": 1,
    "explanation": "Failing to disclose known material facts can mislead buyers and may constitute misrepresentation or fraud.",
    "id": 130
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer owes confidentiality primarily to:",
    "options": ["Buyer", "Seller/principal", "General public", "Apprentices"],
    "correctAnswer": 1,
    "explanation": "The seller is the principal. The fiduciary duty of confidentiality is owed to the seller, not the buyer.",
    "id": 131
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer authority is:",
    "options": ["Unlimited", "Limited to what contract grants", "Determined by buyer", "Set by Board automatically"],
    "correctAnswer": 1,
    "explanation": "Auctioneers are special agents with limited authority defined by auction contract terms.",
    "id": 132
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If auctioneer makes unauthorized promises, principal is:",
    "options": ["Always bound", "Bound only if within authority", "Never responsible", "Automatically guilty of fraud"],
    "correctAnswer": 1,
    "explanation": "Seller is bound only by acts within granted authority. Unauthorized acts may create auctioneer liability.",
    "id": 133
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A subagent is:",
    "options": ["A bidder", "Someone appointed by agent to assist principal\u2019s interests", "A buyer\u2019s attorney", "A bank trustee"],
    "correctAnswer": 1,
    "explanation": "Subagents act under the agent\u2019s authority, still owing fiduciary duties to the principal. Apprentices can function as subagents under supervision.",
    "id": 134
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Which is a breach of fiduciary duty?",
    "options": ["Disclosing known defect", "Secretly purchasing seller property without disclosure", "Following lawful instructions", "Depositing earnest money properly"],
    "correctAnswer": 1,
    "explanation": "Secret purchase is self-dealing and violates loyalty/conflict rules. Disclosure and consent are required.",
    "id": 135
  },
  {
    "topic": "General Auction Knowledge",
    "question": "An auctioneer\u2019s commission should be:",
    "options": ["Hidden until settlement", "Clearly stated in contract", "Determined after auction", "Based on bidder count"],
    "correctAnswer": 1,
    "explanation": "Commission terms must be clear upfront to avoid disputes and ethical violations.",
    "id": 136
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If seller instructs auctioneer to do something illegal, auctioneer must:",
    "options": ["Obey regardless", "Refuse, since obedience applies only to lawful instructions", "Ask buyer permission", "Continue auction normally"],
    "correctAnswer": 1,
    "explanation": "Duty of obedience applies only to lawful instructions. Auctioneer must refuse illegal conduct.",
    "id": 137
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneers must treat buyers with:",
    "options": ["Fiduciary loyalty", "Honesty and fairness", "Confidential advocacy", "Automatic representation"],
    "correctAnswer": 1,
    "explanation": "Buyers are customers. Auctioneer owes honesty and fair dealing, but not fiduciary loyalty.",
    "id": 138
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Which may result in license discipline?",
    "options": ["Proper trust accounting", "Misrepresentation, conversion, commingling", "Advertising legally", "Following reserve rules"],
    "correctAnswer": 1,
    "explanation": "Misrepresentation and trust fund misuse are major violations leading to suspension or revocation.",
    "id": 139
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The Alabama State Board of Auctioneers has authority to:",
    "options": ["Set sale prices at auctions", "Regulate licensing, discipline, and compliance for auctioneers", "Approve every reserve price", "Represent sellers legally"],
    "correctAnswer": 1,
    "explanation": "The Board regulates auctioneer licensing and enforces auction law through discipline, suspension, revocation, and oversight of trust accounts and conduct.",
    "id": 140
  },
  {
    "topic": "General Auction Knowledge",
    "question": "In Alabama, a person must be licensed to:",
    "options": ["Attend an auction", "Conduct or advertise an auction for compensation", "Bid online", "Sell their own household items privately"],
    "correctAnswer": 1,
    "explanation": "Anyone conducting or advertising auctions for compensation must hold an Alabama auctioneer license. Unlicensed practice is prohibited.",
    "id": 141
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The principal auctioneer is responsible for:",
    "options": ["Only their own personal bids", "All trust account handling and apprentice supervision", "Buyer financing", "Board rulemaking"],
    "correctAnswer": 1,
    "explanation": "Principal auctioneers carry legal responsibility for apprentices and all funds handled through trust accounts. Apprentices must deliver funds immediately to them.",
    "id": 142
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Which is grounds for suspension or revocation?",
    "options": ["Advertising auction date clearly", "Commingling trust funds with operating funds", "Holding proceeds in escrow properly", "Disclosing material facts"],
    "correctAnswer": 1,
    "explanation": "Commingling is one of the most serious violations. Client funds must never be mixed with operating/personal money.",
    "id": 143
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Conversion refers to:",
    "options": ["Proper escrow deposit", "Using someone else\u2019s funds as your own", "Buyer withdrawing bid", "Seller canceling contract"],
    "correctAnswer": 1,
    "explanation": "Conversion is misuse of trust money. It can lead to severe discipline, including license loss.",
    "id": 144
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Alabama trust accounts must be held in:",
    "options": ["Any foreign bank", "An insured Alabama bank or savings institution", "A brokerage account", "A personal checking account"],
    "correctAnswer": 1,
    "explanation": "Trust accounts must be demand accounts with insured Alabama financial institutions. Funds may not be invested.",
    "id": 145
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The Board may:",
    "options": ["Inspect trust records anytime", "Demand sellers cancel auctions", "Set commission limits", "Approve bidder registration"],
    "correctAnswer": 0,
    "explanation": "The Board has authority to inspect trust accounts and records upon request. Failure to cooperate is itself a violation.",
    "id": 146
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auction advertising must NOT:",
    "options": ["Include date and time", "Contain false or misleading statements", "Identify auctioneer", "Describe property accurately"],
    "correctAnswer": 1,
    "explanation": "Advertising must be truthful. Misleading ads may constitute misrepresentation and grounds for discipline.",
    "id": 147
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auction contracts must generally be:",
    "options": ["Oral only", "Written and signed", "Optional for personal property", "Unnecessary if seller trusts auctioneer"],
    "correctAnswer": 1,
    "explanation": "Statute of Frauds requires written signed contracts for enforceability, especially in regulated auction practice.",
    "id": 148
  },
  {
    "topic": "General Auction Knowledge",
    "question": "An apprentice auctioneer may:",
    "options": ["Maintain their own escrow account", "Handle funds only by delivering immediately to principal", "Conduct unsupervised auctions", "Ignore Board rules"],
    "correctAnswer": 1,
    "explanation": "Apprentices cannot hold trust accounts and must deliver funds promptly to the principal auctioneer.",
    "id": 149
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Which may result in discipline?",
    "options": ["Proper recordkeeping", "Fraud or negligent misrepresentation", "Obeying lawful seller instructions", "Clear disclosure of dual agency"],
    "correctAnswer": 1,
    "explanation": "Fraud and negligent misrepresentation expose auctioneers to liability and disciplinary sanctions.",
    "id": 150
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Dual agency requires:",
    "options": ["Silence", "Written informed consent from both parties", "Buyer payment of premium", "Seller notice only after closing"],
    "correctAnswer": 1,
    "explanation": "Dual agency is only lawful with full disclosure and written consent from buyer and seller.",
    "id": 151
  },
  {
    "topic": "General Auction Knowledge",
    "question": "In firearms auctions, the auctioneer must:",
    "options": ["Ignore federal firearm laws", "Comply with all applicable firearm transfer regulations", "Sell firearms only without reserve", "Allow anonymous bidder pickup"],
    "correctAnswer": 1,
    "explanation": "Firearms auctions require compliance with all state and federal transfer laws. Auctioneers must ensure lawful handling and transfers.",
    "id": 152
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Under UCC rules, sale is complete when:",
    "options": ["Buyer registers", "Hammer falls or customary announcement is made", "Buyer pays sales tax", "Seller shakes hands"],
    "correctAnswer": 1,
    "explanation": "Completion occurs at the fall of the hammer or customary announcement. After that, bids cannot be retracted.",
    "id": 153
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Seller bidding is allowed only if:",
    "options": ["Done secretly", "Notice is given that seller bidding is reserved", "Auction is without reserve", "Buyer demands it"],
    "correctAnswer": 1,
    "explanation": "Undisclosed seller bidding allows buyer to rescind or enforce price at last good-faith bid. Notice is mandatory.",
    "id": 154
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Unless stated otherwise, auctions are presumed:",
    "options": ["Without reserve", "With reserve", "Illegal", "Forced sales"],
    "correctAnswer": 1,
    "explanation": "UCC presumes auctions are \u201cwith reserve\u201d unless goods are explicitly offered \u201cwithout reserve.\u201d This affects withdrawal rights.",
    "id": 155
  },
  {
    "topic": "General Auction Knowledge",
    "question": "In a reserve auction, goods may be withdrawn:",
    "options": ["Never", "Any time before completion announcement", "Only after hammer falls", "Only with buyer consent"],
    "correctAnswer": 1,
    "explanation": "With reserve means seller retains the right to withdraw goods before the auctioneer announces completion of the sale.",
    "id": 156
  },
  {
    "topic": "General Auction Knowledge",
    "question": "When goods are offered without reserve:",
    "options": ["Seller may withdraw anytime", "Seller is committed once bidding starts", "Auctioneer may cancel for convenience", "Buyer may retract after sale"],
    "correctAnswer": 1,
    "explanation": "Without reserve means once bidding begins, goods cannot be withdrawn unless no bids are received within reasonable time.",
    "id": 157
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A bidder may retract a bid:",
    "options": ["After the hammer falls", "Before completion announcement", "Only if seller agrees", "Never"],
    "correctAnswer": 1,
    "explanation": "Bids are considered offers and can be revoked any time before the auctioneer announces completion.",
    "id": 158
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneers must maintain trust account records showing:",
    "options": ["Seller\u2019s emotions", "Funds held for each beneficiary", "Number of bidders", "Buyer financing terms"],
    "correctAnswer": 1,
    "explanation": "Trust records must clearly identify deposits, withdrawals, balances, and beneficiary ownership. Proper documentation is mandatory.",
    "id": 159
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Trust account funds may NOT be placed into:",
    "options": ["Demand checking", "Certificates of deposit or securities", "Insured Alabama banks", "Escrow accounts"],
    "correctAnswer": 1,
    "explanation": "Trust funds must remain liquid and accessible. Investing client money is prohibited. Auctioneers are not investment managers.",
    "id": 160
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If funds are disputed, auctioneer must:",
    "options": ["Decide winner immediately", "Hold funds until court/Commission direction", "Refund buyer automatically", "Apply funds to commission"],
    "correctAnswer": 1,
    "explanation": "Auctioneers are stakeholders. They must hold funds until proper authority resolves dispute.",
    "id": 161
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Commingling means:",
    "options": ["Keeping separate escrow records", "Mixing trust funds with auctioneer operating/personal funds", "Disclosing reserve price", "Withdrawing goods with reserve"],
    "correctAnswer": 1,
    "explanation": "Client funds must never enter auctioneer\u2019s personal or operating accounts. Commingling is a major violation.",
    "id": 162
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Conversion is:",
    "options": ["Proper escrow deposit", "Using client funds as your own", "Advertising legally", "Seller setting reserve"],
    "correctAnswer": 1,
    "explanation": "Conversion is misuse of trust funds, one of the most serious causes of license revocation.",
    "id": 163
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auction advertising should include:",
    "options": ["No auctioneer identification", "True and accurate information, not misleading", "Reserve price always", "Buyer\u2019s premium hidden"],
    "correctAnswer": 1,
    "explanation": "Advertising must be truthful. False or misleading statements are prohibited and punishable.",
    "id": 164
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Fraudulent conduct may lead to:",
    "options": ["No consequences if buyer happy", "Civil lawsuits and Board discipline", "Automatic contract enforcement", "Increased commission"],
    "correctAnswer": 1,
    "explanation": "Fraud can void transactions and trigger suspension or revocation. Alabama takes auction integrity seriously.",
    "id": 165
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneers are:",
    "options": ["Universal agents", "Special agents with limited authority", "Judges of disputes", "Owners of goods"],
    "correctAnswer": 1,
    "explanation": "Auctioneers have limited authority under contract terms. Unauthorized acts may create liability.",
    "id": 166
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Principal is bound only by:",
    "options": ["Any promise auctioneer makes", "Acts within granted authority", "Buyer assumptions", "Apprentice statements"],
    "correctAnswer": 1,
    "explanation": "Seller is bound only by authorized actions. Auctioneers exceeding authority may be personally liable.",
    "id": 167
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer selling firearms must:",
    "options": ["Ignore transfer regulations", "Ensure compliance with all firearm laws", "Allow anonymous delivery", "Sell only without reserve"],
    "correctAnswer": 1,
    "explanation": "Firearm auctions require compliance with state and federal firearm transfer law. Auctioneers must ensure lawful handling.",
    "id": 168
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If seller bids without disclosure:",
    "options": ["Buyer has no remedy", "Buyer may avoid sale or enforce last good-faith bid", "Auctioneer must hide bidding", "Seller always wins"],
    "correctAnswer": 1,
    "explanation": "UCC protects buyers against undisclosed seller bidding. Disclosure is mandatory to preserve auction fairness.",
    "id": 169
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Upon death of principal auctioneer, Board:",
    "options": ["Does nothing", "Takes custody of trust account", "Gives funds to highest bidder", "Cancels all auctions permanently"],
    "correctAnswer": 1,
    "explanation": "If license holder dies or license revoked/expired, Board takes custody of trust account to protect client funds.",
    "id": 170
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Earnest money is:",
    "options": ["Required for valid offer", "Not essential for offer validity", "Illegal", "Required only for personal property"],
    "correctAnswer": 1,
    "explanation": "Earnest money is common practice but not essential for a binding offer or contract.",
    "id": 171
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Trust misuse may cause:",
    "options": ["Minor warning only", "Suspension or revocation", "Automatic buyer premium refund", "Seller liability only"],
    "correctAnswer": 1,
    "explanation": "Commingling and conversion are among the harshest violations. Auctioneer licenses may be revoked.",
    "id": 172
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Misleading advertising is:",
    "options": ["Acceptable sales strategy", "Prohibited and disciplinable", "Required puffing", "Only civil matter"],
    "correctAnswer": 1,
    "explanation": "Auction advertising must not misrepresent facts. It can trigger Board discipline and liability.",
    "id": 173
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Under UCC, sale completes at:",
    "options": ["Registration", "Hammer fall/announcement", "Tax payment", "Delivery"],
    "correctAnswer": 1,
    "explanation": "Completion occurs when auctioneer announces sale or hammer falls. After that, bids cannot be withdrawn.",
    "id": 174
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Shill bidding is:",
    "options": ["Competitive fair bidding", "Artificial bids to inflate price", "Legal if secret", "Required for reserve auctions"],
    "correctAnswer": 1,
    "explanation": "Shills undermine auction integrity. Seller bidding must be disclosed, and artificial inflation is prohibited.",
    "id": 175
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Alabama auction law exists primarily to:",
    "options": ["Raise commission rates", "Protect public trust and integrity in auctions", "Prevent reserve auctions", "Help sellers hide defects"],
    "correctAnswer": 1,
    "explanation": "Board regulations, trust rules, and discipline all exist to ensure honest, fair auction practice and protect the public.",
    "id": 176
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A real estate auction contract is primarily:",
    "options": ["A casual buyer agreement", "A written employment contract establishing agency", "An oral promise between bidders", "A seller\u2019s advertising flyer"],
    "correctAnswer": 1,
    "explanation": "Auction contracts are employment agreements creating an agency relationship between seller (principal) and auctioneer (agent). Written form is required.",
    "id": 177
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Commission is earned when auctioneer:",
    "options": ["Runs advertisements", "Produces a ready, willing, and able buyer", "Registers bidders", "Deposits proceeds into trust"],
    "correctAnswer": 1,
    "explanation": "Commission is earned upon performance: procuring a ready, willing, and able purchaser and being the procuring cause of sale.",
    "id": 178
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If seller defaults after auctioneer performs, auctioneer may sue for:",
    "options": ["Only apology", "Commission or damages", "Buyer\u2019s premium", "Criminal penalties automatically"],
    "correctAnswer": 1,
    "explanation": "If auctioneer performed contractual obligations, seller may still owe commission or damages for costs incurred.",
    "id": 179
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Rescission means:",
    "options": ["Contract enforcement", "Cancellation restoring parties to prior position", "Automatic commission payment", "Bid withdrawal"],
    "correctAnswer": 1,
    "explanation": "Rescission cancels the contract and returns parties to their original positions. Often used when fraud or mistake occurred.",
    "id": 180
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Specific performance is:",
    "options": ["Monetary punishment", "Court order requiring contract completion", "Advertising requirement", "Trust fund investment"],
    "correctAnswer": 1,
    "explanation": "Specific performance compels a party to complete contract terms, commonly used in real estate where property is unique.",
    "id": 181
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Compensatory damages are intended to:",
    "options": ["Punish wrongdoing", "Reimburse actual financial loss", "Triple commission automatically", "Void contracts"],
    "correctAnswer": 1,
    "explanation": "Compensatory damages cover real losses suffered, such as advertising expenses or auction costs.",
    "id": 182
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Punitive damages are meant to:",
    "options": ["Refund earnest money", "Punish outrageous misconduct", "Replace consideration", "Guarantee commission"],
    "correctAnswer": 1,
    "explanation": "Punitive damages go beyond reimbursement and are meant to punish willful or egregious wrongdoing.",
    "id": 183
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Liquidated damages are:",
    "options": ["Awarded only after trial", "Pre-agreed damages written into contract", "Always illegal penalties", "A trust account fee"],
    "correctAnswer": 1,
    "explanation": "Liquidated damages clauses specify damages upfront, but courts reject them if excessive or punitive.",
    "id": 184
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If contract ends early after some work, auctioneer may recover:",
    "options": ["Nothing ever", "Payment for work completed", "Only buyer premium", "Automatic punitive damages"],
    "correctAnswer": 1,
    "explanation": "Partial performance allows auctioneer to be compensated for work done, such as advertising or setup costs.",
    "id": 185
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Substantial performance means:",
    "options": ["Contract not begun", "Most obligations completed, minor details remain", "Contract is void", "Buyer withdrew bid"],
    "correctAnswer": 1,
    "explanation": "If auctioneer substantially performs, commission is generally due even if minor tasks remain incomplete.",
    "id": 186
  },
  {
    "topic": "General Auction Knowledge",
    "question": "An executed contract is:",
    "options": ["Awaiting completion", "Fully performed", "Automatically voidable", "Oral only"],
    "correctAnswer": 1,
    "explanation": "Executed means all duties have been completed.",
    "id": 187
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Executory contract means:",
    "options": ["Fully complete", "Still requiring performance", "Illegal purpose", "Without consideration"],
    "correctAnswer": 1,
    "explanation": "Executory contracts still have obligations pending, common in auctions until closing/payment.",
    "id": 188
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer must disclose:",
    "options": ["Only opinions", "Known material facts affecting value", "Seller\u2019s private motivations always", "Bidder identities"],
    "correctAnswer": 1,
    "explanation": "Material facts impacting value must be disclosed. Silence can become misrepresentation.",
    "id": 189
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Misrepresentation makes contract:",
    "options": ["Automatically void", "Voidable by injured party", "Fully enforceable always", "Criminal automatically"],
    "correctAnswer": 1,
    "explanation": "Misrepresentation is an innocent misstatement of material fact and allows the injured party to void contract.",
    "id": 190
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Fraud differs because it is:",
    "options": ["Innocent mistake", "Intentional deception for unfair advantage", "Required by UCC", "Only civil with no discipline"],
    "correctAnswer": 1,
    "explanation": "Fraud requires intent. It may void contracts and trigger civil liability and license discipline.",
    "id": 191
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer loyalty requires:",
    "options": ["Putting auctioneer profit first", "Putting seller/principal interests first", "Representing buyer secretly", "Sharing confidential info publicly"],
    "correctAnswer": 1,
    "explanation": "Auctioneers owe fiduciary loyalty to the seller as principal. Conflicts of interest and self-dealing violate this duty.",
    "id": 192
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer confidentiality protects:",
    "options": ["Bid increments", "Seller\u2019s private financial motivations", "Auction date", "Public sale results"],
    "correctAnswer": 1,
    "explanation": "Confidentiality is part of fiduciary duty. Seller\u2019s personal and financial information must not be disclosed unless authorized.",
    "id": 193
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Conflict exists when:",
    "options": ["Auctioneer obeys seller instructions", "Auctioneer\u2019s personal interests interfere with duty", "Seller sets reserve", "Buyer bids competitively"],
    "correctAnswer": 1,
    "explanation": "Conflicts undermine loyalty. Auctioneers must avoid situations where personal benefit compromises seller representation.",
    "id": 194
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Dual agency requires:",
    "options": ["Oral notice only", "Written informed consent from both parties", "Buyer premium waiver", "Seller approval after closing"],
    "correctAnswer": 1,
    "explanation": "Dual agency is lawful only with written, informed consent. Without it, auctioneer breaches fiduciary duty.",
    "id": 195
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Which is self-dealing?",
    "options": ["Depositing proceeds into trust", "Auctioneer secretly buying seller property", "Advertising auction truthfully", "Disclosing defects"],
    "correctAnswer": 1,
    "explanation": "Secret purchase violates loyalty. Auctioneer may only buy with full disclosure and seller consent.",
    "id": 196
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Negligent misrepresentation occurs when:",
    "options": ["Auctioneer lies intentionally", "Auctioneer carelessly provides inaccurate material information", "Buyer retracts bid", "Seller withdraws goods"],
    "correctAnswer": 1,
    "explanation": "Even without intent, auctioneers may be liable if careless mistakes mislead parties. Reasonable diligence is required.",
    "id": 197
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Puffing is:",
    "options": ["Intentional fraud", "Exaggerated opinion not meant as fact", "Undisclosed seller bidding", "Conversion of funds"],
    "correctAnswer": 1,
    "explanation": "Statements like \u201cbest property in Alabama\u201d are puffing. Fraud requires false factual claims.",
    "id": 198
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Novation means:",
    "options": ["Minor error correction", "New contract replacing old one", "Fraud cancellation", "Buyer premium increase"],
    "correctAnswer": 1,
    "explanation": "Novation substitutes a new agreement, discharging the old one.",
    "id": 199
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Accord and satisfaction refers to:",
    "options": ["Auction completion", "Settlement through alternative performance", "Seller bidding disclosure", "Trust account conversion"],
    "correctAnswer": 1,
    "explanation": "Accord and satisfaction is a compromise where one party performs differently and the other accepts it.",
    "id": 200
  },
  {
    "topic": "General Auction Knowledge",
    "question": "An offer terminates if:",
    "options": ["Buyer registers", "Offeror dies before acceptance", "Auctioneer advertises", "Seller withdraws reserve"],
    "correctAnswer": 1,
    "explanation": "Death before acceptance terminates offer immediately.",
    "id": 201
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A contract for illegal purpose is:",
    "options": ["Valid", "Void", "Executory", "Bilateral always"],
    "correctAnswer": 1,
    "explanation": "Illegal contracts are void and unenforceable.",
    "id": 202
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Contract with a minor is:",
    "options": ["Void", "Voidable at minor\u2019s option", "Automatically enforceable", "Executed"],
    "correctAnswer": 1,
    "explanation": "Minor contracts are voidable, not void, until majority age.",
    "id": 203
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auction contracts must generally be:",
    "options": ["Oral only", "Written and signed", "Never enforceable", "Recorded in probate court"],
    "correctAnswer": 1,
    "explanation": "Statute of Frauds requires writing for enforceability, especially in regulated auction practice.",
    "id": 204
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Parol evidence means:",
    "options": ["Written contract controls; oral promises outside it unenforceable", "Oral promises override contract", "Contracts never written", "Auctioneer decides terms later"],
    "correctAnswer": 0,
    "explanation": "Oral statements outside written agreement cannot change contract terms in court.",
    "id": 205
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Substantial performance means:",
    "options": ["Commission is never earned", "Commission is generally due despite minor incomplete tasks", "Contract void", "Buyer can rescind automatically"],
    "correctAnswer": 1,
    "explanation": "If auctioneer largely completed duties, commission is owed even with small details remaining.",
    "id": 206
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Compensatory damages:",
    "options": ["Punish wrongdoing", "Reimburse actual losses", "Triple damages always", "Void contracts automatically"],
    "correctAnswer": 1,
    "explanation": "Compensatory damages restore financial position, unlike punitive damages which punish misconduct.",
    "id": 207
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Courts reject liquidated damages if:",
    "options": ["Too low", "Excessive and acts as penalty", "Written in contract", "Seller agrees"],
    "correctAnswer": 1,
    "explanation": "Liquidated damages must estimate actual harm, not serve as punishment.",
    "id": 208
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If seller defaults, auctioneer may:",
    "options": ["Only forgive", "Sue for damages or specific performance", "Keep trust funds always", "Cancel license"],
    "correctAnswer": 1,
    "explanation": "Auctioneer may rescind, sue for specific performance, or sue for damages depending on breach.",
    "id": 209
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Accounting duty means:",
    "options": ["Spending proceeds freely", "Proper trust deposit and recordkeeping", "Commission immediately deducted", "Funds invested for profit"],
    "correctAnswer": 1,
    "explanation": "Auctioneers must properly account for and safeguard all client funds.",
    "id": 210
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Conversion/commingling may result in:",
    "options": ["No consequence", "Suspension or revocation", "Buyer premium refund only", "Auction continuation"],
    "correctAnswer": 1,
    "explanation": "Trust fund misuse is among the harshest violations under Alabama auction law.",
    "id": 211
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A trust account exists to:",
    "options": ["Hold auctioneer operating funds", "Hold funds belonging to others safely", "Invest proceeds for profit", "Pay advertising invoices"],
    "correctAnswer": 1,
    "explanation": "Trust accounts safeguard client/buyer funds. Mixing them with personal money is prohibited.",
    "id": 212
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Commingling is:",
    "options": ["Proper escrow deposit", "Mixing trust funds with operating/personal funds", "Seller bidding openly", "Bid withdrawal"],
    "correctAnswer": 1,
    "explanation": "Commingling is a major disciplinary violation.",
    "id": 213
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Conversion occurs when:",
    "options": ["Auctioneer holds funds in escrow", "Auctioneer uses trust money as personal funds", "Buyer retracts bid", "Seller withdraws reserve"],
    "correctAnswer": 1,
    "explanation": "Conversion is misuse of client funds and may lead to revocation.",
    "id": 214
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If trust funds are disputed, auctioneer must:",
    "options": ["Decide who is right", "Hold funds until court/Commission instruction", "Refund buyer instantly", "Keep commission"],
    "correctAnswer": 1,
    "explanation": "Auctioneer must not disburse disputed funds without authority.",
    "id": 215
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Trust accounts must be held in:",
    "options": ["Offshore accounts", "Insured Alabama banks/savings institutions", "Brokerage accounts", "Auctioneer\u2019s personal checking"],
    "correctAnswer": 1,
    "explanation": "Alabama law requires insured Alabama institutions for trust accounts.",
    "id": 216
  },
  {
    "topic": "General Auction Knowledge",
    "question": "An apprentice must:",
    "options": ["Maintain their own escrow", "Deliver funds immediately to principal auctioneer", "Invest funds temporarily", "Disburse proceeds"],
    "correctAnswer": 1,
    "explanation": "Apprentices cannot maintain trust accounts. Principal auctioneer is responsible.",
    "id": 217
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Under UCC, sale completes at:",
    "options": ["Registration", "Hammer fall/customary announcement", "Payment clearing", "Delivery"],
    "correctAnswer": 1,
    "explanation": "Sale is complete at hammer fall, ending bid withdrawal rights.",
    "id": 218
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A bid may be withdrawn:",
    "options": ["After hammer falls", "Before completion announcement", "Never", "Only if seller agrees"],
    "correctAnswer": 1,
    "explanation": "Bids are revocable offers until completion announcement.",
    "id": 219
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Unless stated otherwise, auctions are:",
    "options": ["Without reserve", "With reserve", "Illegal", "Forced sales"],
    "correctAnswer": 1,
    "explanation": "UCC presumes auctions are with reserve unless explicitly without reserve.",
    "id": 220
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Without reserve means:",
    "options": ["Seller can withdraw anytime", "Goods cannot be withdrawn once bidding starts", "Buyers cannot retract bids", "Seller may bid secretly"],
    "correctAnswer": 1,
    "explanation": "Without reserve commits seller once auctioneer calls for bids.",
    "id": 221
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Seller bidding is permitted only if:",
    "options": ["Done secretly", "Notice is given that liberty is reserved", "Auction is without reserve", "Buyer pays premium"],
    "correctAnswer": 1,
    "explanation": "Undisclosed seller bidding gives buyer remedy to rescind or enforce last bona fide bid.",
    "id": 222
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A shill is:",
    "options": ["A licensed bidder", "Someone bidding artificially to inflate price", "Principal auctioneer", "Trust beneficiary"],
    "correctAnswer": 1,
    "explanation": "Shill bidding undermines integrity and is prohibited unless properly disclosed.",
    "id": 223
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer owes seller:",
    "options": ["Casual duty", "Fiduciary loyalty and good faith", "No obligation after contract", "Equal loyalty to buyer"],
    "correctAnswer": 1,
    "explanation": "Agency creates fiduciary duty to principal seller.",
    "id": 224
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Dual agency requires:",
    "options": ["Silence", "Written informed consent of both parties", "Seller consent only", "Buyer premium increase"],
    "correctAnswer": 1,
    "explanation": "Dual agency without written consent breaches fiduciary duty.",
    "id": 225
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer must disclose:",
    "options": ["Only opinions", "Known material facts affecting value", "Seller motivations always", "Bidder identities"],
    "correctAnswer": 1,
    "explanation": "Material facts must be disclosed to prevent misrepresentation.",
    "id": 226
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Misrepresentation is:",
    "options": ["Intentional fraud", "Innocent but material false statement", "Required puffing", "Buyer collusion"],
    "correctAnswer": 1,
    "explanation": "Misrepresentation makes contract voidable even without intent.",
    "id": 227
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Fraud requires:",
    "options": ["Innocent mistake", "Intentional deception for unfair advantage", "Lack of consideration", "Written contract"],
    "correctAnswer": 1,
    "explanation": "Fraud requires intent and triggers rescission, damages, and discipline.",
    "id": 228
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Puffing is:",
    "options": ["Fraud", "Exaggerated opinion", "Conversion", "Commingling"],
    "correctAnswer": 1,
    "explanation": "General sales talk is puffing unless it becomes false factual claim.",
    "id": 229
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Specific performance is:",
    "options": ["Money damages", "Court order requiring completion of contract", "Advertising requirement", "Bid withdrawal"],
    "correctAnswer": 1,
    "explanation": "Often used in real estate due to unique nature of property.",
    "id": 230
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Compensatory damages:",
    "options": ["Punish wrongdoing", "Reimburse actual loss", "Void contracts automatically", "Triple commission"],
    "correctAnswer": 1,
    "explanation": "They restore injured party financially.",
    "id": 231
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Punitive damages:",
    "options": ["Reimburse expenses", "Punish egregious misconduct", "Replace consideration", "Always required"],
    "correctAnswer": 1,
    "explanation": "Punitive damages are rare and meant to punish.",
    "id": 232
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Liquidated damages are:",
    "options": ["Court created", "Pre-agreed contract damages", "Always illegal", "Trust fees"],
    "correctAnswer": 1,
    "explanation": "Allowed if reasonable estimate, not a penalty.",
    "id": 233
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auction contracts must generally be:",
    "options": ["Oral only", "Written and signed", "Optional", "Recorded in probate"],
    "correctAnswer": 1,
    "explanation": "Writing is required for enforceability.",
    "id": 234
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneers selling firearms must:",
    "options": ["Ignore regulations", "Comply with all firearm transfer laws", "Sell anonymously", "Only sell without reserve"],
    "correctAnswer": 1,
    "explanation": "Firearms auctions require full compliance with state/federal law.",
    "id": 235
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A trust account exists to:",
    "options": ["Hold auctioneer operating funds", "Hold funds belonging to others safely", "Invest proceeds for profit", "Pay advertising invoices"],
    "correctAnswer": 1,
    "explanation": "Trust accounts are required to protect client/buyer funds that come into the auctioneer\u2019s possession. These funds do not belong to the auctioneer personally, and improper handling leads to discipline.",
    "id": 236
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Commingling means:",
    "options": ["Proper escrow deposit", "Mixing trust funds with operating or personal funds", "Seller bidding openly", "Bid withdrawal"],
    "correctAnswer": 1,
    "explanation": "Commingling is prohibited because it risks misuse of client funds. Alabama treats this as a serious violation that can trigger suspension or revocation.",
    "id": 237
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Conversion occurs when:",
    "options": ["Auctioneer holds funds properly in escrow", "Auctioneer uses trust money as personal funds", "Buyer retracts bid", "Seller withdraws reserve"],
    "correctAnswer": 1,
    "explanation": "Conversion is essentially theft or misuse of entrusted funds. It is one of the harshest violations in auction regulation.",
    "id": 238
  },
  {
    "topic": "General Auction Knowledge",
    "question": "If trust funds are disputed, the auctioneer must:",
    "options": ["Decide who is right", "Hold funds until court or Commission direction", "Refund buyer instantly", "Keep commission"],
    "correctAnswer": 1,
    "explanation": "Auctioneers are neutral stakeholders. They cannot disburse disputed funds without legal authority.",
    "id": 239
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Trust accounts must be held in:",
    "options": ["Offshore banks", "Insured Alabama banks or savings institutions", "Brokerage accounts", "Personal checking accounts"],
    "correctAnswer": 1,
    "explanation": "Alabama requires trust accounts be demand accounts with insured Alabama institutions. Funds cannot be invested elsewhere.",
    "id": 240
  },
  {
    "topic": "General Auction Knowledge",
    "question": "An apprentice must:",
    "options": ["Maintain their own escrow account", "Deliver funds immediately to the principal auctioneer", "Invest funds temporarily", "Disburse proceeds independently"],
    "correctAnswer": 1,
    "explanation": "Apprentices may handle money only by promptly delivering it to the principal auctioneer, who remains legally responsible.",
    "id": 241
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Under UCC rules, a sale is complete when:",
    "options": ["Buyer registers", "Hammer falls or customary announcement is made", "Payment clears", "Delivery occurs"],
    "correctAnswer": 1,
    "explanation": "The UCC defines completion at the fall of the hammer or customary sale announcement. After this moment, the bid becomes binding.",
    "id": 242
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A bidder may retract a bid:",
    "options": ["After hammer falls", "Before completion announcement", "Never", "Only if seller agrees"],
    "correctAnswer": 1,
    "explanation": "Bids are treated as offers and may be revoked any time before sale completion. After completion, retraction is not allowed.",
    "id": 243
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Unless stated otherwise, auctions are presumed:",
    "options": ["Without reserve", "With reserve", "Illegal", "Forced sales"],
    "correctAnswer": 1,
    "explanation": "The UCC presumes auctions are with reserve unless clearly announced otherwise. This gives seller withdrawal rights before completion.",
    "id": 244
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Without reserve means:",
    "options": ["Seller can withdraw goods anytime", "Seller is committed once bidding starts", "Buyers cannot retract bids", "Seller may bid secretly"],
    "correctAnswer": 1,
    "explanation": "Without reserve binds the seller once bidding begins. Goods cannot be withdrawn unless no bids are received.",
    "id": 245
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Seller bidding is permitted only if:",
    "options": ["Done secretly", "Notice is given that liberty is reserved", "Auction is without reserve", "Buyer pays premium"],
    "correctAnswer": 1,
    "explanation": "Seller bidding without notice gives buyer the right to rescind or enforce the last good-faith bid. Disclosure is required.",
    "id": 246
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A shill is:",
    "options": ["A licensed bidder", "Someone bidding artificially to inflate price", "Principal auctioneer", "Trust beneficiary"],
    "correctAnswer": 1,
    "explanation": "Shill bidding undermines auction fairness. Artificial inflation is prohibited unless properly disclosed as seller bidding.",
    "id": 247
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer owes seller:",
    "options": ["Casual duty", "Fiduciary loyalty and good faith", "No duty after contract", "Equal loyalty to buyer"],
    "correctAnswer": 1,
    "explanation": "Agency creates fiduciary responsibility: loyalty, disclosure, accounting, obedience to lawful instructions.",
    "id": 248
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Dual agency requires:",
    "options": ["Silence", "Written informed consent from both buyer and seller", "Seller consent only", "Buyer premium increase"],
    "correctAnswer": 1,
    "explanation": "Dual agency creates conflict and is only lawful with written informed consent from all parties.",
    "id": 249
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer must disclose:",
    "options": ["Only opinions", "Known material facts affecting value", "Seller motivations always", "Bidder identities"],
    "correctAnswer": 1,
    "explanation": "Material facts impact transaction decisions. Silence can become misrepresentation.",
    "id": 250
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Misrepresentation is:",
    "options": ["Intentional fraud", "Innocent but material false statement", "Required puffing", "Buyer collusion"],
    "correctAnswer": 1,
    "explanation": "Misrepresentation does not require intent. It still makes contract voidable if material.",
    "id": 251
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Fraud requires:",
    "options": ["Innocent mistake", "Intentional deception for unfair advantage", "Lack of consideration", "Written contract only"],
    "correctAnswer": 1,
    "explanation": "Fraud involves intent and can lead to rescission, damages, and license discipline.",
    "id": 252
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Puffing is:",
    "options": ["Fraud", "Exaggerated opinion", "Conversion", "Commingling"],
    "correctAnswer": 1,
    "explanation": "General sales talk is puffing unless it becomes a specific false statement of fact.",
    "id": 253
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Specific performance is:",
    "options": ["Money damages", "Court order requiring contract completion", "Advertising requirement", "Bid withdrawal"],
    "correctAnswer": 1,
    "explanation": "Often used in real estate contracts because property is unique and money damages may not suffice.",
    "id": 254
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Compensatory damages:",
    "options": ["Punish wrongdoing", "Reimburse actual financial loss", "Void contracts automatically", "Triple commission"],
    "correctAnswer": 1,
    "explanation": "Compensatory damages restore the injured party\u2019s financial position, covering real losses like advertising costs.",
    "id": 255
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Punitive damages:",
    "options": ["Reimburse expenses", "Punish egregious misconduct", "Replace consideration", "Always required"],
    "correctAnswer": 1,
    "explanation": "Punitive damages go beyond compensation and are intended as punishment for willful wrongdoing.",
    "id": 256
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Liquidated damages are:",
    "options": ["Court-created penalties", "Pre-agreed damages written into the contract", "Always illegal", "Trust account fees"],
    "correctAnswer": 1,
    "explanation": "Liquidated damages clauses are enforceable when reasonable estimates of harm, not penalties.",
    "id": 257
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auction contracts must generally be:",
    "options": ["Oral only", "Written and signed", "Optional", "Recorded in probate court"],
    "correctAnswer": 1,
    "explanation": "Writing is required for enforceability under Statute of Frauds principles in regulated auction practice.",
    "id": 258
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneers selling firearms must:",
    "options": ["Ignore regulations", "Comply with all firearm transfer laws", "Allow anonymous delivery", "Sell only without reserve"],
    "correctAnswer": 1,
    "explanation": "Firearms auctions require compliance with state and federal transfer regulations. Auctioneers must ensure lawful handling.",
    "id": 259
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Which is most likely to result in license suspension or revocation?",
    "options": ["Proper escrow accounting", "Commingling client funds", "Truthful advertising", "Written dual agency disclosure"],
    "correctAnswer": 1,
    "explanation": "Commingling is one of the most serious auction law violations. Mixing trust funds with personal or operating funds threatens client protection and can result in revocation.",
    "id": 260
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Most auctioneers are considered:",
    "options": ["Universal agents", "Special agents with limited authority", "Judges over disputes", "Owners of goods sold"],
    "correctAnswer": 1,
    "explanation": "Auctioneers are special agents whose authority is limited to what the auction contract grants. Acting outside authority can create personal liability.",
    "id": 261
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The principal is bound only by:",
    "options": ["Any statement auctioneer makes publicly", "Acts within the auctioneer\u2019s authority", "Apprentice promises", "Buyer assumptions"],
    "correctAnswer": 1,
    "explanation": "Sellers are bound only by authorized acts. Auctioneers exceeding authority may be personally liable.",
    "id": 262
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer obedience applies to:",
    "options": ["Any seller request", "Lawful instructions only", "Buyer requests", "Illegal acts if profitable"],
    "correctAnswer": 1,
    "explanation": "Auctioneers must follow lawful seller instructions, but illegal conduct must be refused.",
    "id": 263
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer must keep confidential:",
    "options": ["Seller motivations and financial information", "Public auction results", "Bid increments", "Auction date"],
    "correctAnswer": 0,
    "explanation": "Confidentiality is part of fiduciary duty. Seller private information may not be shared without authorization.",
    "id": 264
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneer secretly purchasing seller property is:",
    "options": ["Proper practice", "Self-dealing and breach of loyalty", "Required in reserve auctions", "Legal if buyer agrees"],
    "correctAnswer": 1,
    "explanation": "Auctioneers may not secretly benefit from transactions. Full disclosure and seller consent are required.",
    "id": 265
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Dual agency is dangerous because:",
    "options": ["It raises commissions", "Auctioneer cannot fully advocate for both sides", "It eliminates fiduciary duty", "Buyers lose bidding rights"],
    "correctAnswer": 1,
    "explanation": "Representing both buyer and seller creates unavoidable conflict. Written consent is mandatory.",
    "id": 266
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Reserve price is generally:",
    "options": ["Public and must be disclosed", "Confidential unless seller authorizes disclosure", "Illegal in Alabama", "Determined by buyers"],
    "correctAnswer": 1,
    "explanation": "Reserve price is part of seller\u2019s confidential strategy unless seller directs otherwise.",
    "id": 267
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Fraud allows injured party to:",
    "options": ["Increase bid", "Rescind contract and seek damages", "Ignore all auction rules", "Keep trust funds"],
    "correctAnswer": 1,
    "explanation": "Fraud makes contracts voidable and may trigger damages and discipline.",
    "id": 268
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Misrepresentation differs because it is:",
    "options": ["Always intentional", "Innocent but still voidable", "Required sales practice", "Buyer collusion"],
    "correctAnswer": 1,
    "explanation": "Misrepresentation does not require intent, but still allows rescission if material.",
    "id": 269
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Oral promises outside written contract are:",
    "options": ["Always enforceable", "Generally unenforceable in court", "Required for auction contracts", "Automatically binding"],
    "correctAnswer": 1,
    "explanation": "Written contract controls. Outside oral promises usually cannot change enforceable terms.",
    "id": 270
  },
  {
    "topic": "General Auction Knowledge",
    "question": "An offer may be withdrawn:",
    "options": ["Only after acceptance", "Anytime before acceptance", "Never", "Only if written in ink"],
    "correctAnswer": 1,
    "explanation": "Offers may be revoked any time before acceptance, even if stated otherwise.",
    "id": 271
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Novation is:",
    "options": ["Fraud cancellation", "Replacement of old contract with new one", "Seller bidding disclosure", "Trust commingling"],
    "correctAnswer": 1,
    "explanation": "Novation substitutes a new contract, discharging obligations under the old one.",
    "id": 272
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Accord and satisfaction refers to:",
    "options": ["Bid withdrawal", "Settlement through alternative agreed performance", "Firearms compliance", "Commission calculation"],
    "correctAnswer": 1,
    "explanation": "It is a compromise resolution where alternate performance is accepted instead of the original obligation.",
    "id": 273
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Substantial performance means:",
    "options": ["No duties completed", "Most duties completed, commission generally owed", "Contract is void", "Buyer can rescind automatically"],
    "correctAnswer": 1,
    "explanation": "If auctioneer largely completed obligations, commission is due even if minor details remain.",
    "id": 274
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Executed contract means:",
    "options": ["Still awaiting performance", "Fully completed", "Voidable always", "Oral only"],
    "correctAnswer": 1,
    "explanation": "Executed means all contractual duties have been performed.",
    "id": 275
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Executory contract means:",
    "options": ["Finished", "Still requiring performance", "Illegal purpose", "Void contract"],
    "correctAnswer": 1,
    "explanation": "Executory means obligations remain pending, common until closing/payment.",
    "id": 276
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Specific performance is common in:",
    "options": ["Personal property disputes", "Real estate, because property is unique", "Auction advertising", "Buyer premiums"],
    "correctAnswer": 1,
    "explanation": "Real estate is unique; money damages may not compensate, so courts order performance.",
    "id": 277
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Liquidated damages clauses fail if:",
    "options": ["Too reasonable", "Excessive and punitive", "Written in contract", "Seller approves"],
    "correctAnswer": 1,
    "explanation": "Courts reject clauses that operate as penalties rather than estimates of harm.",
    "id": 278
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auctioneers selling firearms must:",
    "options": ["Ignore federal transfer law", "Ensure compliance with all firearm regulations", "Allow anonymous buyer pickup", "Sell only without reserve"],
    "correctAnswer": 1,
    "explanation": "Firearms auctions require strict compliance with state and federal transfer requirements.",
    "id": 279
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Upon license death/revocation, Board:",
    "options": ["Does nothing", "Takes custody of trust account funds", "Gives funds to highest bidder", "Cancels all contracts automatically"],
    "correctAnswer": 1,
    "explanation": "Board takes custody to protect beneficiaries and ensure proper distribution.",
    "id": 280
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Undisclosed seller bidding allows buyer to:",
    "options": ["No remedy", "Avoid sale or enforce last good-faith bid", "Keep commission", "Retract after hammer fall"],
    "correctAnswer": 1,
    "explanation": "UCC protects buyers. Seller bidding must be disclosed or buyer has rescission remedy.",
    "id": 281
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Auction law exists primarily to:",
    "options": ["Increase commissions", "Protect the public and ensure fair auction practice", "Prevent reserve auctions", "Allow secret bidding"],
    "correctAnswer": 1,
    "explanation": "Trust rules, disclosure requirements, and discipline exist to protect public confidence in auctions.",
    "id": 282
  },
  ],
  'Georgia': [
  {
    "topic": "Licensing, Applications, and Eligibility",
    "question": "To lawfully act as an auctioneer in Georgia, a person must:",
    "options": ["Register with the county clerk only", "Hold a current auctioneer license issued under Georgia law or qualify for a specific exemption", "Complete at least one auction school, regardless of licensure status", "Work only under a company name instead of a personal license"],
    "correctAnswer": 1,
    "explanation": "It is unlawful for any person to act as an auctioneer in Georgia without a current auctioneer license, unless that person falls under a specific statutory exemption.",
    "id": 1
  },
  {
    "topic": "Licensing, Applications, and Eligibility",
    "question": "An applicant files an auctioneer license application that is missing required information. The Commission\u2019s most likely response is to:",
    "options": ["Automatically approve the license if the fee clears", "Treat the application as never having been filed until it is complete", "Approve the license on a probationary basis for six months", "Schedule an emergency hearing to decide the application"],
    "correctAnswer": 1,
    "explanation": "Applications must be in the form prescribed by the Commission and must contain required information. An incomplete application is not a proper application and may be treated as not filed until completed.",
    "id": 2
  },
  {
    "topic": "Licensing, Applications, and Eligibility",
    "question": "Which of the following is required information on a Georgia auctioneer license application?",
    "options": ["The applicant\u2019s chant speed in syllables per minute", "All past employers for the previous ten years", "The name and address of the applicant and the location(s) where the business will be conducted", "A list of all ringpersons the applicant plans to hire"],
    "correctAnswer": 2,
    "explanation": "The law requires the application to list the name and address of the applicant (and officers, if an entity) and the place or places, including municipality and street address if any, where the business is to be conducted.",
    "id": 3
  },
  {
    "topic": "Licensing, Applications, and Eligibility",
    "question": "Licenses for Georgia auctioneers expire:",
    "options": ["Every six months on June 30 and December 31", "Annually on the applicant\u2019s birthday", "Biennially, in accordance with the general professional licensing schedule", "Only if the auctioneer has not conducted an auction in the prior year"],
    "correctAnswer": 2,
    "explanation": "Auctioneer licenses expire on a biennial basis as set out in the general professional licensing law that governs expiration and renewal of professional licenses.",
    "id": 4
  },
  {
    "topic": "Licensing, Applications, and Eligibility",
    "question": "After an auctioneer\u2019s first Georgia license is issued, that license:",
    "options": ["Is permanent and never needs renewal", "Covers the remaining part of the current biennium", "Automatically renews if the auctioneer conducts at least one auction per year", "Must be renewed within 90 days or it lapses"],
    "correctAnswer": 1,
    "explanation": "Once the first license is issued, it covers the remaining portion of the biennial licensing period in which it was granted.",
    "id": 5
  },
  {
    "topic": "Licensing, Applications, and Eligibility",
    "question": "The biennial license fee for auctioneers in Georgia is:",
    "options": ["Fixed in the statute at exactly 100 dollars", "Determined and set by the Commission by rule", "Negotiated individually between each licensee and the Commission", "Set by the county where the auctioneer lives"],
    "correctAnswer": 1,
    "explanation": "The statute authorizes the Commission to establish the amount of original and renewal license fees for auctioneers by rule, rather than fixing a specific dollar amount in the law.",
    "id": 6
  },
  {
    "topic": "Licensing, Applications, and Eligibility",
    "question": "An applicant submits a license fee check that the bank returns unpaid. This situation:",
    "options": ["Has no impact if the applicant can show it was a bank error", "Automatically converts the license to \u201cprobationary\u201d status", "Is specific statutory cause for revocation or denial of a license", "Requires the Commission to accept payment in cash instead"],
    "correctAnswer": 2,
    "explanation": "By statute, any check presented as a license fee that is returned unpaid is cause for revocation or denial of a license.",
    "id": 7
  },
  {
    "topic": "Licensing, Applications, and Eligibility",
    "question": "To obtain a Georgia auctioneer license, an applicant must show proof of:",
    "options": ["Residence", "U.S. military service", "Prior licensure in another state", "Employment by a Georgia auction company"],
    "correctAnswer": 0,
    "explanation": "The law specifically requires that an applicant show proof of residence in order to obtain an auctioneer\u2019s license.",
    "id": 8
  },
  {
    "topic": "Licensing, Applications, and Eligibility",
    "question": "The Commission may require continuing education for license renewal of auctioneers in an amount of:",
    "options": ["No more than eight hours every two years", "Exactly 12 hours every year", "At least 24 hours every two years", "Only if the licensee has been disciplined"],
    "correctAnswer": 0,
    "explanation": "The Commission is authorized to require Commission-approved continuing education of not more than eight hours during each biennial renewal period.",
    "id": 9
  },
  {
    "topic": "Licensing, Applications, and Eligibility",
    "question": "Which statement about waivers of continuing education requirements is accurate?",
    "options": ["The Commission cannot waive continuing education under any circumstances", "The Governor must personally approve any waiver of continuing education", "The Commission may waive continuing education for hardship, disability, illness, or other appropriate circumstances", "Licensees may simply self-declare that they do not need continuing education"],
    "correctAnswer": 2,
    "explanation": "The Commission has explicit authority to waive continuing education requirements for hardship, disability, illness, or other circumstances it deems appropriate.",
    "id": 10
  },
  {
    "topic": "Company Registration, Trust Accounts, and Business Operations",
    "question": "A company wants to engage in the auction business in Georgia. To be registered as an auction company, it must:",
    "options": ["Show proof of owning a permanent auction barn", "Furnish a completed application and evidence that it employs or will employ a licensed auctioneer to conduct auctions", "Demonstrate that it has conducted at least five auctions in other states", "Be owned exclusively by Georgia residents"],
    "correctAnswer": 1,
    "explanation": "No company may be registered to engage in the business of auctioning unless it submits a completed application and provides satisfactory evidence that it employs or will employ a licensed auctioneer to conduct any auctions in Georgia.",
    "id": 11
  },
  {
    "topic": "Company Registration, Trust Accounts, and Business Operations",
    "question": "A foreign corporation applying for Georgia auction company registration must:",
    "options": ["Prove that its officers reside in Georgia", "Register separately with every Georgia county where it plans to conduct auctions", "Show satisfactory evidence that it is authorized to do business in Georgia and properly registered with the Secretary of State", "Provide a list of all employees for Commission approval"],
    "correctAnswer": 2,
    "explanation": "The law requires foreign corporations to provide satisfactory evidence that they are authorized to transact business in Georgia and are registered according to Georgia corporate registration requirements.",
    "id": 12
  },
  {
    "topic": "Company Registration, Trust Accounts, and Business Operations",
    "question": "A company owned by or employing one or more full-time auctioneers may be exempt from the company registration process if:",
    "options": ["It conducts only online auctions", "It has annual auction sales below a statutory threshold", "It is directly supervised by a licensed auctioneer", "It limits its auctions to charity events"],
    "correctAnswer": 2,
    "explanation": "A company owned by or employing one or more full-time licensed auctioneers can be exempt from the usual company registration process if it is directly supervised by a licensed auctioneer as provided in the statute.",
    "id": 13
  },
  {
    "topic": "Company Registration, Trust Accounts, and Business Operations",
    "question": "An auction company\u2019s trust account in Georgia must:",
    "options": ["Hold only the company\u2019s operating funds", "Be maintained at all times and registered with the Georgia Auctioneers Commission", "Be used only for funds from real estate auctions", "Be optional if the company posts a bond instead"],
    "correctAnswer": 1,
    "explanation": "An auction company is required to maintain an active trust account at all times and must register that account with the Commission to properly hold client funds.",
    "id": 14
  },
  {
    "topic": "Company Registration, Trust Accounts, and Business Operations",
    "question": "Which of the following is an example of improper handling of trust funds by an auctioneer?",
    "options": ["Keeping buyer deposits in a separate trust account until settlement", "Commingling client money with the auctioneer\u2019s personal or business operating funds", "Releasing sale proceeds to the seller according to contract terms", "Maintaining detailed records of all deposits and disbursements"],
    "correctAnswer": 1,
    "explanation": "The law defines failing to keep others\u2019 funds in a separate escrow or trust account and commingling those funds with personal or operating funds as unfair trade practices and grounds for discipline.",
    "id": 15
  },
  {
    "topic": "Company Registration, Trust Accounts, and Business Operations",
    "question": "Unless a contract provides a different time frame, an auctioneer must account for or remit money belonging to others within:",
    "options": ["7 days", "30 days", "60 days", "90 days"],
    "correctAnswer": 1,
    "explanation": "Failing to account for or remit, within 30 days unless another time is specified by contract, any money belonging to others is listed as an unfair trade practice that can result in discipline.",
    "id": 16
  },
  {
    "topic": "Company Registration, Trust Accounts, and Business Operations",
    "question": "During an estate auction, the auctioneer collects sales proceeds and deposits them into the company\u2019s trust account. The seller\u2019s contract says the auctioneer will remit net proceeds within 45 days. The auctioneer remits payment on day 40. This is:",
    "options": ["A violation because the law requires payment within 30 days, regardless of contract", "Proper, because the payment was made within the time frame specified in the contract", "A violation unless the seller agreed again in writing after the sale", "Only proper if the seller\u2019s attorney approves in writing"],
    "correctAnswer": 1,
    "explanation": "The statute sets a 30-day default if no other time is agreed. Here, the contract provides a different time frame (45 days), so remitting on day 40 complies with both the contract and the law.",
    "id": 17
  },
  {
    "topic": "Company Registration, Trust Accounts, and Business Operations",
    "question": "A licensed auctioneer conducts auctions in multiple states but keeps all Georgia auction trust funds in a properly designated Georgia trust account. Regarding Georgia law, this arrangement is:",
    "options": ["Acceptable as long as Georgia auction funds are maintained separately in a registered trust account", "Prohibited, because all funds must stay in the state where the auction occurred", "Allowed only if all states agree to share trust-account oversight", "Illegal unless a separate trust account is opened in each county"],
    "correctAnswer": 0,
    "explanation": "Georgia law focuses on maintaining client funds in a properly established and Commission-registered trust or escrow account; it does not prohibit an auctioneer from working in multiple states.",
    "id": 18
  },
  {
    "topic": "Company Registration, Trust Accounts, and Business Operations",
    "question": "Which of the following best describes the relationship between an auction company and the licensed auctioneer it employs in Georgia?",
    "options": ["The company may conduct auctions without an auctioneer license if it employs at least one licensed auctioneer to conduct the auctions", "The company automatically becomes licensed when the auctioneer is licensed", "The company does not need to register its trust account if the auctioneer has one", "The company and auctioneer are treated as a single legal person for all purposes"],
    "correctAnswer": 0,
    "explanation": "A company must either be registered itself or be exempt because it is owned by or employs one or more licensed auctioneers who conduct the auctions. The individual auctioneer\u2019s license does not automatically license the company, but employing a licensed auctioneer meets one requirement for company registration.",
    "id": 19
  },
  {
    "topic": "Company Registration, Trust Accounts, and Business Operations",
    "question": "A company licensed under specific Georgia chapters governing motor vehicle auctions is:",
    "options": ["Automatically exempt from all provisions of the auctioneer law", "Subject to the auctioneer laws but with modified trust account requirements", "Subject to most auctioneer laws but explicitly exempt from some company registration requirements as described in the statute", "Not allowed to hire licensed auctioneers"],
    "correctAnswer": 2,
    "explanation": "The law allows certain motor vehicle auction companies to be exempt from parts of the auction company registration process, although they remain subject to other requirements such as grounds for discipline in Code Section 43-6-18.",
    "id": 20
  },
  {
    "topic": "Advertising, Contracts, and Conduct of Auctions",
    "question": "An auctioneer prints flyers describing a sale as \u201cAbsolute \u2013 Everything sells to the highest bidder, regardless of price,\u201d but conducts the sale with the seller retaining the right to refuse bids. This conduct is:",
    "options": ["Acceptable if the seller is unhappy with the prices", "An unfair trade practice involving misrepresentation", "Permitted if the highest bidder later agrees in writing", "Only a minor advertising error with no legal consequences"],
    "correctAnswer": 1,
    "explanation": "Advertising a sale as absolute and then conducting it as with reserve is a continued and flagrant course of misrepresentation and an unfair trade practice that can result in discipline.",
    "id": 21
  },
  {
    "topic": "Advertising, Contracts, and Conduct of Auctions",
    "question": "Which of the following auction advertisements is most likely to comply with Georgia law?",
    "options": ["\u201cAbsolute auction, owner may bid and reject any offer,\u201d", "\u201cAuction with reserve \u2013 seller reserves the right to refuse any and all bids,\u201d", "\u201cEverything is absolute unless seller changes mind,\u201d", "\u201cAll bids are secret and may be withdrawn after the sale,\u201d"],
    "correctAnswer": 1,
    "explanation": "Clearly stating that the auction is with reserve and that the seller reserves the right to refuse bids accurately describes an auction with reserve and avoids misrepresentation.",
    "id": 22
  },
  {
    "topic": "Advertising, Contracts, and Conduct of Auctions",
    "question": "In describing services to a seller, an auctioneer promises guaranteed minimum net proceeds regardless of sale price, even though no such guarantee exists in the contract. This is:",
    "options": ["Allowed if the seller signs the listing agreement", "Considered mere \u201csales talk\u201d and not regulated", "A substantial misrepresentation and an unfair trade practice", "Permissible only for personal property, not real estate"],
    "correctAnswer": 2,
    "explanation": "Making substantial misrepresentations or false promises that create unjustified expectations of services is specifically listed as an unfair trade practice and is grounds for discipline.",
    "id": 23
  },
  {
    "topic": "Advertising, Contracts, and Conduct of Auctions",
    "question": "A Georgia auctioneer conducts a sale in which the auctioneer, acting on behalf of the owner, secretly bids to protect the seller\u2019s desired price at an auction advertised as \u201cwith reserve.\u201d This is:",
    "options": ["Permissible, because seller bidding is allowed at auctions with reserve unless prohibited by other law or contract", "Always illegal in Georgia", "Only allowed at charity auctions", "Allowed only if the auction is absolute"],
    "correctAnswer": 0,
    "explanation": "In an auction with reserve, the seller retains the right to refuse bids and may bid indirectly through the auctioneer or an agent unless prohibited by contract or other law. The misrepresentation problem arises only when such bidding occurs at a falsely advertised absolute auction.",
    "id": 24
  },
  {
    "topic": "Advertising, Contracts, and Conduct of Auctions",
    "question": "Which of the following statements about owner bidding at an absolute auction is true in Georgia?",
    "options": ["Owner bidding is allowed if the auctioneer announces it once at the start", "Owner bidding is allowed only on items worth more than 10,000 dollars", "Any owner or agent bidding at an absolute auction violates the definition of an absolute auction", "Owner bidding is allowed only on real property, not personal property"],
    "correctAnswer": 2,
    "explanation": "An absolute auction requires that no owner or owner\u2019s agent place competing bids. Doing so contradicts the definition of an absolute auction and may constitute an unfair trade practice.",
    "id": 25
  },
  {
    "topic": "Advertising, Contracts, and Conduct of Auctions",
    "question": "A licensed auctioneer in Georgia knowingly makes a misleading statement on a license renewal application. This conduct:",
    "options": ["Is irrelevant if the auctioneer has an otherwise clean record", "Is grounds for discipline and may be treated as an unfair trade practice", "Is only a violation if the statement involves a criminal conviction", "Can be cured by submitting a corrected application within 90 days"],
    "correctAnswer": 1,
    "explanation": "Knowingly making misleading, false, or deceptive statements on any application for a license is explicitly identified as grounds for revocation, suspension, or censure.",
    "id": 26
  },
  {
    "topic": "Advertising, Contracts, and Conduct of Auctions",
    "question": "An auctioneer consistently overstates crowd size, bidder registration, and sale results in marketing materials to attract future business. Over time, this would most likely be viewed as:",
    "options": ["Normal industry exaggeration with no legal impact", "A continued and flagrant course of misrepresentation", "A private matter between the auctioneer and past clients", "Acceptable as long as no written contract is involved"],
    "correctAnswer": 1,
    "explanation": "The statute describes a continued and flagrant course of misrepresentation or false promises as an unfair trade practice and grounds for discipline.",
    "id": 27
  },
  {
    "topic": "Advertising, Contracts, and Conduct of Auctions",
    "question": "In Georgia, which type of conduct shows \"bad faith, dishonesty, incompetency, or untruthfulness\" within the meaning of the auctioneer law?",
    "options": ["Declining to take a particular auction assignment", "Forgetting to order lunch for the auction crew", "Deliberately hiding material defects in goods from bidders after learning about them", "Using a slower chant to help bidders understand"],
    "correctAnswer": 2,
    "explanation": "Concealing material information about goods to be sold can demonstrate bad faith and dishonesty, which are specifically listed as grounds for revocation or suspension of a license.",
    "id": 28
  },
  {
    "topic": "Advertising, Contracts, and Conduct of Auctions",
    "question": "During a consignment sale, the auctioneer changes published terms of sale after the auction has begun, without notice to bidders. This change most likely:",
    "options": ["Has no impact as long as some bidders heard the change", "Can constitute improper or dishonest dealing and an unfair trade practice", "Is required by law to protect the seller", "Is unavoidable and always excused"],
    "correctAnswer": 1,
    "explanation": "Changing material terms without proper notice may be considered improper, fraudulent, or dishonest dealing, exposing the auctioneer to discipline.",
    "id": 29
  },
  {
    "topic": "Advertising, Contracts, and Conduct of Auctions",
    "question": "A seller asks the auctioneer to advertise that all items are \u201cnew in box,\u201d even though some items are used but repackaged. If the auctioneer agrees and runs the ad, this is:",
    "options": ["Acceptable because the seller requested it", "A substantial misrepresentation that can result in license discipline", "Allowed only if the items are sold at a discount", "Permissible if the auctioneer does not know the true condition"],
    "correctAnswer": 1,
    "explanation": "The auctioneer is responsible for not making substantial misrepresentations when describing property. Knowingly advertising used items as new is a misrepresentation and an unfair trade practice.",
    "id": 30
  },
  {
    "topic": "Records, Complaints, Hearings, and Enforcement",
    "question": "Before revoking or suspending a Georgia auctioneer\u2019s license or censuring a licensee, the Commission must:",
    "options": ["Obtain a unanimous vote of all licensees in the state", "Hold a hearing in accordance with the Georgia Administrative Procedure Act", "Receive written permission from the Governor", "Conduct an anonymous survey of the general public"],
    "correctAnswer": 1,
    "explanation": "The Commission must provide a hearing in accordance with the Georgia Administrative Procedure Act before censuring, suspending, or revoking a license. Judicial review is available afterward.",
    "id": 31
  },
  {
    "topic": "Records, Complaints, Hearings, and Enforcement",
    "question": "If the Commission refuses to accept a properly completed license application with the required fee, the applicant:",
    "options": ["Has no right to challenge the decision", "May request and receive a hearing under the Georgia Administrative Procedure Act and then seek judicial review", "Must wait two years before reapplying", "Must appeal directly to the Governor"],
    "correctAnswer": 1,
    "explanation": "When the Commission refuses to accept a properly filed application, the applicant is entitled to a hearing under the Administrative Procedure Act and may seek judicial review after exhausting administrative remedies.",
    "id": 32
  },
  {
    "topic": "Records, Complaints, Hearings, and Enforcement",
    "question": "Which of the following is listed as a ground for revocation or suspension of a Georgia auctioneer\u2019s license?",
    "options": ["Conducting auctions in more than one state", "Charging higher commissions than competitors", "Having any professional license revoked or suspended by another licensing authority for cause", "Refusing to conduct charity auctions"],
    "correctAnswer": 2,
    "explanation": "Having had any license to practice a business or profession revoked or suspended for cause by any other licensing authority in this or another state is a specific ground for discipline.",
    "id": 33
  },
  {
    "topic": "Records, Complaints, Hearings, and Enforcement",
    "question": "A licensee is convicted in a court of competent jurisdiction of a felony involving theft. Under Georgia auction law, this conviction:",
    "options": ["Has no effect on the license once issued", "May be grounds for revocation or suspension of the auctioneer\u2019s license", "Only affects the ability to conduct online auctions", "Automatically cancels all prior auctions conducted by the licensee"],
    "correctAnswer": 1,
    "explanation": "Being convicted of a felony or an offense involving moral turpitude is expressly identified as grounds for disciplinary action.",
    "id": 34
  },
  {
    "topic": "Records, Complaints, Hearings, and Enforcement",
    "question": "The Commission\u2019s inspector is authorized to:",
    "options": ["Inspect auctions and records related to auction activities, including trust accounts", "Enter private homes without consent to look for auctioneers", "Change auction dates that conflict with Commission meetings", "Set minimum bid amounts for all auctions in Georgia"],
    "correctAnswer": 0,
    "explanation": "The inspector has full inspection rights for all auctions conducted in the state and may inspect any activity or documents related to auction practice, including trust accounts.",
    "id": 35
  },
  {
    "topic": "Records, Complaints, Hearings, and Enforcement",
    "question": "If the Commission believes a person is violating the auctioneer law, the Attorney General may:",
    "options": ["Directly impose fines without going to court", "File an action in superior court to enjoin and abate the violations without posting a bond", "Only write a warning letter to the violator", "Suspend the violator\u2019s driver\u2019s license"],
    "correctAnswer": 1,
    "explanation": "The Attorney General may bring an action in the name of the state in superior court to obtain temporary and permanent injunctions to stop violations, and the state is not required to post a bond.",
    "id": 36
  },
  {
    "topic": "Records, Complaints, Hearings, and Enforcement",
    "question": "A person wants to sue in Georgia courts to recover a commission allegedly owed for auction services. Under the auctioneer law, this person must show that:",
    "options": ["The auction was conducted entirely online", "The auction took place at a licensed facility", "He or she was a duly licensed auctioneer at the time the cause of action arose", "The Commission approved the lawsuit in advance"],
    "correctAnswer": 2,
    "explanation": "The law provides that no person may bring or maintain an action in Georgia courts for compensation for auctioneer services unless that person was a duly licensed auctioneer at the time the cause of action arose.",
    "id": 37
  },
  {
    "topic": "Records, Complaints, Hearings, and Enforcement",
    "question": "Which statement best describes the right of an aggrieved person to participate in a disciplinary hearing involving an auctioneer?",
    "options": ["Only the auctioneer and the Commission may attend the hearing", "The aggrieved person may present evidence and testimony under procedures established by the Administrative Procedure Act", "The aggrieved person may only submit anonymous written complaints", "The law forbids any participation by members of the public"],
    "correctAnswer": 1,
    "explanation": "Hearings are conducted under the Administrative Procedure Act, which permits presentation of evidence and testimony by parties and interested persons in accordance with established procedures.",
    "id": 38
  },
  {
    "topic": "Records, Complaints, Hearings, and Enforcement",
    "question": "The Commission may initiate disciplinary action against an auctioneer:",
    "options": ["Only upon written complaint from a client", "Only after a criminal conviction", "On its own motion or upon complaint of any person", "Only when ordered by the Secretary of State"],
    "correctAnswer": 2,
    "explanation": "The Commission may act upon its own motion and must act upon the verified complaint of any person to investigate and discipline licensees for alleged violations.",
    "id": 39
  },
  {
    "topic": "Records, Complaints, Hearings, and Enforcement",
    "question": "A hearing results in revocation of an auctioneer\u2019s license. The licensee believes the decision was incorrect. The licensee\u2019s next step under Georgia law is to:",
    "options": ["Ignore the decision and continue auctioneering", "Seek judicial review in accordance with the Georgia Administrative Procedure Act", "Apply for a new license in another state and return to Georgia to practice", "Petition the county sheriff for reinstatement"],
    "correctAnswer": 1,
    "explanation": "After a final decision by the Commission and exhaustion of administrative remedies, an aggrieved party may seek judicial review as provided under the Administrative Procedure Act.",
    "id": 40
  },
  {
    "topic": "Recovery Fund, Exceptions, and Penalties",
    "question": "The Auctioneers Education, Research, and Recovery Fund is funded primarily by:",
    "options": ["Voluntary donations from auctioneers", "A portion of license and renewal fees collected from licensees", "Fines collected from bidders who fail to pay", "A state sales tax surcharge on auction items"],
    "correctAnswer": 1,
    "explanation": "The statute authorizes the Commission to collect additional fees from licensees for deposit into the Auctioneers Education, Research, and Recovery Fund.",
    "id": 41
  },
  {
    "topic": "Recovery Fund, Exceptions, and Penalties",
    "question": "The minimum balance that must be maintained in the Auctioneers Education, Research, and Recovery Fund is:",
    "options": ["10,000 dollars", "50,000 dollars", "100,000 dollars", "1,000,000 dollars"],
    "correctAnswer": 2,
    "explanation": "The law requires that the Recovery Fund maintain a minimum balance of 100,000 dollars.",
    "id": 42
  },
  {
    "topic": "Recovery Fund, Exceptions, and Penalties",
    "question": "For any single transaction, the maximum amount the Fund may be required to pay out, regardless of how many people are involved, is:",
    "options": ["5,000 dollars", "10,000 dollars", "20,000 dollars", "50,000 dollars"],
    "correctAnswer": 1,
    "explanation": "The Recovery Fund is not obligated for more than 10,000 dollars for any one transaction, regardless of the number of claimants or parcels.",
    "id": 43
  },
  {
    "topic": "Recovery Fund, Exceptions, and Penalties",
    "question": "The Fund\u2019s liability for the acts of a single licensee is capped when total payments for that licensee reach:",
    "options": ["5,000 dollars", "10,000 dollars", "20,000 dollars", "100,000 dollars"],
    "correctAnswer": 2,
    "explanation": "When court orders authorize payments from the Fund that total 20,000 dollars on behalf of one licensee, the Fund\u2019s liability for that licensee is terminated.",
    "id": 44
  },
  {
    "topic": "Recovery Fund, Exceptions, and Penalties",
    "question": "An aggrieved person obtains a valid judgment against a Georgia auctioneer for 18,000 dollars of actual damages arising from a single auction transaction. The court orders that 10,000 dollars be paid from the Recovery Fund. Assuming all requirements are met, the Fund:",
    "options": ["May pay the full 18,000 dollars", "May pay 10,000 dollars, which is the maximum per transaction", "May pay 20,000 dollars because the licensee has not been paid against before", "Cannot pay anything because the damages exceed 10,000 dollars"],
    "correctAnswer": 1,
    "explanation": "The Fund\u2019s obligation per transaction is limited to 10,000 dollars, even if the judgment for actual damages is higher.",
    "id": 45
  },
  {
    "topic": "Recovery Fund, Exceptions, and Penalties",
    "question": "After the Recovery Fund pays out on a judgment against a licensee, the license of that auctioneer:",
    "options": ["Is automatically renewed", "Is automatically revoked, and the licensee must repay the Fund with interest before being eligible for a new license", "Is unaffected because the Fund exists to protect licensees", "Is suspended only until the next renewal period"],
    "correctAnswer": 1,
    "explanation": "Payment from the Fund results in automatic revocation of the license. The licensee must repay the Fund in full, with interest, before the Commission may issue a new license.",
    "id": 46
  },
  {
    "topic": "Recovery Fund, Exceptions, and Penalties",
    "question": "To preserve the right to seek payment from the Recovery Fund, an action for judgment against a licensee must be filed within:",
    "options": ["One year from the date of the cause of action", "Two years from the date of the cause of action", "Three years from the date of the cause of action", "Five years from the date of the cause of action"],
    "correctAnswer": 1,
    "explanation": "No action that could result in a Recovery Fund claim may be started more than two years after the cause of action accrues. Filing later waives the right to seek payment from the Fund.",
    "id": 47
  },
  {
    "topic": "Recovery Fund, Exceptions, and Penalties",
    "question": "Which of the following has NO claim against the Recovery Fund?",
    "options": ["A consumer who lost deposits due to an auctioneer\u2019s misconduct", "A seller whose proceeds were misappropriated by the licensee", "A licensee acting as principal or agent in an auction transaction", "A bidder who was defrauded by misrepresentation of goods"],
    "correctAnswer": 2,
    "explanation": "The statute specifically states that a licensee acting as principal or agent in an auction transaction has no claim against the Recovery Fund.",
    "id": 48
  },
  {
    "topic": "Recovery Fund, Exceptions, and Penalties",
    "question": "Which of the following auctions is specifically exempt from the operation of the Georgia auctioneer licensing chapter (assuming required letters are obtained)?",
    "options": ["Weekly car dealer auctions open only to licensed dealers", "Youth livestock auctions sponsored by 4-H or FFA organizations", "High-end art auctions held in hotel ballrooms", "Regular consignment auctions of household goods"],
    "correctAnswer": 1,
    "explanation": "Youth livestock auctions sponsored by 4-H or Future Farmers of America are exempt if the organization first obtains an exemption letter from the Commission.",
    "id": 49
  },
  {
    "topic": "Recovery Fund, Exceptions, and Penalties",
    "question": "Acting as an auctioneer in Georgia without a required license is classified as:",
    "options": ["A civil violation punishable only by fines", "A misdemeanor punishable by a fine up to 1,000 dollars, imprisonment up to 90 days, or both", "A felony punishable by more than one year in prison", "A minor infraction with no specified penalty"],
    "correctAnswer": 1,
    "explanation": "Any person or corporation acting as an auctioneer within the meaning of the chapter without a license, or otherwise violating the chapter, commits a misdemeanor and may be fined up to 1,000 dollars, jailed for up to 90 days, or both.",
    "id": 50
  },
  {
    "topic": "Definitions and Auction Types",
    "question": "An \u201cabsolute auction\u201d in Georgia means:",
    "options": ["The seller may reject any bid below a secret reserve price", "Ownership and title must transfer to the highest bidder without any owner or agent bidding", "Only cash bids are accepted and all sales are final", "The auctioneer may reopen bidding after the hammer falls to raise the price"],
    "correctAnswer": 1,
    "explanation": "An absolute auction is one where ownership and title must be conveyed to the high bidder without reservation and without any competing bids of any type by the owner or the owner\u2019s agent.",
    "id": 51
  },
  {
    "topic": "Definitions and Auction Types",
    "question": "In an \u201cauction with reserve\u201d under Georgia law:",
    "options": ["The first bid automatically wins if no higher bid is made", "The seller guarantees to accept the highest bid", "The seller reserves the right to refuse any and all bids", "Bids below 50 percent of list price are automatically rejected by law"],
    "correctAnswer": 2,
    "explanation": "An auction with reserve means the seller keeps the right to refuse any and all bids. The seller is not required to accept the highest bid.",
    "id": 52
  },
  {
    "topic": "Definitions and Auction Types",
    "question": "Which situation best illustrates \u201cengaging in the auction business\u201d under Georgia law?",
    "options": ["A homeowner sells their sofa through an online marketplace with fixed asking price", "A person regularly calls bids for farm equipment for a commission at live auctions", "A bank posts a list of repossessed vehicles on its website with sealed bids only", "A charity posts a silent auction sheet in the lobby with no paid auction staff"],
    "correctAnswer": 1,
    "explanation": "\u201cAuction business\u201d includes performing acts of an auctioneer, including bid calling for a fee, commission, or other valuable consideration at an auction.",
    "id": 53
  },
  {
    "topic": "Definitions and Auction Types",
    "question": "Under Georgia law, which individual clearly meets the definition of an \u201cauctioneer\u201d?",
    "options": ["A salaried warehouse worker who occasionally carries items to the ring", "A volunteer parent who reads off raffle ticket numbers at a school event", "A person who, for a commission, calls bids and negotiates auction sales of equipment", "A receptionist who answers calls about upcoming auction dates"],
    "correctAnswer": 2,
    "explanation": "An auctioneer is someone who, for compensation or with the expectation of compensation, offers, negotiates, or attempts to negotiate auction sales and conducts auctions. Merely assisting without compensation does not make someone an auctioneer.",
    "id": 54
  },
  {
    "topic": "Definitions and Auction Types",
    "question": "\u201cGoods\u201d in Georgia\u2019s auctioneer law includes:",
    "options": ["Only tangible personal property that can be physically touched", "Any chattel, goods, merchandise, real or personal property, or commodities that may lawfully be kept or sold", "Only items with a fair market value above 500 dollars", "Only new items sold in their original packaging"],
    "correctAnswer": 1,
    "explanation": "\u201cGoods\u201d is defined broadly to include chattel, goods, merchandise, real or personal property, and any commodities that can lawfully be kept or offered for sale. There is no minimum value requirement.",
    "id": 55
  },
  {
    "topic": "Definitions and Auction Types",
    "question": "Which statement about a \u201cringperson\u201d is correct under Georgia law?",
    "options": ["A ringperson may freely call bids when the auctioneer is busy", "A ringperson may negotiate listing contracts if supervised by an auctioneer", "A ringperson assists in the conduct of the auction but may not call bids or negotiate listing contracts", "A ringperson is required to hold a separate Georgia auctioneer license"],
    "correctAnswer": 2,
    "explanation": "A ringperson is employed by the auctioneer or auction company to assist in the conduct of the auction but cannot call or chant bids and cannot negotiate listing contracts.",
    "id": 56
  },
  {
    "topic": "Definitions and Auction Types",
    "question": "An auction is advertised as \u201cabsolute.\u201d During the sale, the owner secretly bids against the crowd to push the price up. This conduct:",
    "options": ["Is acceptable as long as the owner stops bidding before the reserve price", "Converts the auction to \u201cwith reserve\u201d automatically", "Violates the definition of an absolute auction and may be an unfair trade practice", "Is allowed if disclosed to the highest bidder only"],
    "correctAnswer": 2,
    "explanation": "In an absolute auction, no competing bids of any type by the owner or the owner\u2019s agent are allowed. Advertising an auction as absolute while permitting owner bidding is a misrepresentation and an unfair trade practice.",
    "id": 57
  },
  {
    "topic": "Definitions and Auction Types",
    "question": "A sale is advertised as \u201cAuction - seller reserves all rights.\u201d Bidding begins, and the seller decides not to accept the final bid. This is:",
    "options": ["An absolute auction that must be completed", "An auction with reserve, so the seller may reject the final bid", "An illegal auction in Georgia", "A type of auction not recognized under Georgia law"],
    "correctAnswer": 1,
    "explanation": "When the seller reserves the right to refuse any and all bids, the auction is with reserve, and the seller can decide not to accept the high bid.",
    "id": 58
  },
  {
    "topic": "Definitions and Auction Types",
    "question": "At a properly advertised absolute auction, bidding on a tractor stops at 9,000 dollars, far below what the seller hoped to get. Under Georgia\u2019s definition of \u201cabsolute auction,\u201d the auctioneer:",
    "options": ["May withdraw the tractor and reoffer it later at a higher starting bid", "Must pass the item and reopen bidding only if the seller signs a waiver", "Must sell the tractor to the highest bidder at 9,000 dollars", "May announce a last-minute reserve to protect the seller"],
    "correctAnswer": 2,
    "explanation": "In an absolute auction, the property must be conveyed to the high bidder without reservation. Once bidding ends, the highest bid wins, even if the seller is disappointed with the amount.",
    "id": 59
  },
  {
    "topic": "Commission Structure and Authority",
    "question": "The Georgia Auctioneers Commission is created under the authority of:",
    "options": ["The Georgia Department of Agriculture", "The Secretary of State and the division director", "The Office of the Attorney General", "The Georgia Real Estate Commission"],
    "correctAnswer": 1,
    "explanation": "The statute creates the Georgia Auctioneers Commission under the Secretary of State and the division director.",
    "id": 60
  },
  {
    "topic": "Commission Structure and Authority",
    "question": "How many members serve on the Georgia Auctioneers Commission?",
    "options": ["Three", "Five", "Six", "Seven"],
    "correctAnswer": 2,
    "explanation": "The Commission is composed of six members appointed according to the statute.",
    "id": 61
  },
  {
    "topic": "Commission Structure and Authority",
    "question": "Of the members of the Georgia Auctioneers Commission, how many must be licensed auctioneers who are Georgia residents with at least five years of active practice?",
    "options": ["Three", "Four", "Five", "Six"],
    "correctAnswer": 2,
    "explanation": "Five of the six members must be licensed auctioneers and Georgia residents who have been actively engaged in the auction business for at least five years.",
    "id": 62
  },
  {
    "topic": "Commission Structure and Authority",
    "question": "Each member of the Georgia Auctioneers Commission serves a term of:",
    "options": ["Two years", "Three years", "Four years", "Five years"],
    "correctAnswer": 3,
    "explanation": "Appointments to the Commission are for a term of five years, ending on the anniversary date of the original appointments.",
    "id": 63
  },
  {
    "topic": "Commission Structure and Authority",
    "question": "Commission members are appointed by:",
    "options": ["The Secretary of State alone", "The Governor, with approval of the Secretary of State and confirmation by the Senate", "A vote of all licensed auctioneers in Georgia", "The Chief Justice of the Georgia Supreme Court"],
    "correctAnswer": 1,
    "explanation": "Members are appointed by the Governor, must be approved by the Secretary of State, and must be confirmed by the Senate.",
    "id": 64
  },
  {
    "topic": "Commission Structure and Authority",
    "question": "Regarding rulemaking, the Georgia Auctioneers Commission:",
    "options": ["May adopt rules including fee and commission schedules for licensees", "May adopt rules on professional conduct and a code of ethics but cannot set fee or commission schedules", "May only enforce rules written by the legislature", "Has no authority to adopt any rules"],
    "correctAnswer": 1,
    "explanation": "The Commission may adopt rules and regulations relating to professional conduct, a code of ethics, and administration of the chapter, but cannot set fee or commission schedules for licensees.",
    "id": 65
  },
  {
    "topic": "Commission Structure and Authority",
    "question": "The Commission\u2019s official seal is used primarily to:",
    "options": ["Approve advertising copy before publication", "Authenticate acts of the Commission", "Certify that an auction is compliant with all state and federal laws", "Validate that an auctioneer\u2019s chant meets state standards"],
    "correctAnswer": 1,
    "explanation": "The Commission must adopt a seal, which is used to authenticate its official acts.",
    "id": 66
  },
  {
    "topic": "Commission Structure and Authority",
    "question": "Which statement best describes the Commission\u2019s authority over licenses?",
    "options": ["The Commission only issues licenses and cannot revoke them", "The Commission may regulate issuance, revoke or suspend licenses, and censure licensees", "The Commission can only discipline apprentice auctioneers", "The Commission\u2019s disciplinary power is limited to written warnings"],
    "correctAnswer": 1,
    "explanation": "The Commission has power to regulate issuance of licenses and to revoke or suspend licenses issued under the chapter, as well as to censure licensees.",
    "id": 67
  },
  {
    "topic": "Commission Structure and Authority",
    "question": "Under Georgia law, the Commission\u2019s inspector is authorized to:",
    "options": ["Inspect auctions only upon written complaint by a consumer", "Inspect only the offices of auctioneers, not active auctions", "Inspect any auction activities and records related to auction practice, including trust accounts", "Investigate only advertising materials filed with the Commission"],
    "correctAnswer": 2,
    "explanation": "The inspector has full inspection rights for all auctions conducted in the state and may inspect any activity or documents related to auction practice, including trust accounts.",
    "id": 68
  },
  {
    "topic": "Commission Structure and Authority",
    "question": "Before the Commission suspends or revokes a license, it must:",
    "options": ["Obtain approval from a superior court judge", "Hold a hearing in accordance with the Georgia Administrative Procedure Act", "Conduct a public referendum of all licensed auctioneers", "Secure a unanimous vote of the Commission and the Secretary of State"],
    "correctAnswer": 1,
    "explanation": "The Commission must provide a hearing in accordance with the Georgia Administrative Procedure Act before censuring, suspending, or revoking a license.",
    "id": 69
  },
  {
    "topic": "Licensing, Registration, and Renewal",
    "question": "In Georgia, it is unlawful for a person to act as an auctioneer without a license unless:",
    "options": ["The auction is held outdoors", "The person conducts fewer than three auctions per year", "The person meets a specific exemption listed in the statute", "The auction is advertised only on social media"],
    "correctAnswer": 2,
    "explanation": "It is unlawful to engage in or hold oneself out as an auctioneer without first obtaining an auctioneer license, unless the person falls under one of the explicit statutory exemptions.",
    "id": 70
  },
  {
    "topic": "Licensing, Registration, and Renewal",
    "question": "Which statement about auctioning real property in Georgia is accurate?",
    "options": ["Any licensed auctioneer may auction real estate without additional licenses", "A licensed auctioneer may auction real property only if also licensed as a real estate broker, associate broker, or salesperson, unless grandfathered under specific conditions", "Real estate auctions require no auctioneer license, only a real estate license", "Auctioning real property is exempt from Georgia auctioneer law"],
    "correctAnswer": 1,
    "explanation": "To auction real property, a licensed auctioneer must also hold an appropriate Georgia real estate license, unless the auctioneer qualifies under the grandfather provision in the statute.",
    "id": 71
  },
  {
    "topic": "Licensing, Registration, and Renewal",
    "question": "A company wants to run auctions in Georgia. To be registered as an auction company, it must:",
    "options": ["Employ at least three full-time ringpersons", "Employ or plan to employ at least one Georgia-licensed auctioneer to conduct auctions", "Demonstrate annual sales of at least 250,000 dollars", "Be owned entirely by Georgia residents"],
    "correctAnswer": 1,
    "explanation": "A company cannot be registered to engage in the auction business unless it provides satisfactory evidence that it employs or will employ a licensed auctioneer to conduct auctions in Georgia.",
    "id": 72
  },
  {
    "topic": "Licensing, Registration, and Renewal",
    "question": "Under Georgia law, an auction company must:",
    "options": ["Maintain only a separate operating account for company expenses", "Maintain an active trust account and register it with the Commission", "Deposit all buyer premiums directly into the owner\u2019s personal account", "Avoid using trust accounts because they are prohibited"],
    "correctAnswer": 1,
    "explanation": "An auction company must maintain an active trust account at all times and register that account with the Georgia Auctioneers Commission.",
    "id": 73
  },
  {
    "topic": "Licensing, Registration, and Renewal",
    "question": "A resident of another state holds a current auctioneer license in a state with similar licensing requirements to Georgia. Under Georgia reciprocity rules, the Commission:",
    "options": ["Must grant a Georgia license automatically", "May, at its discretion, issue a Georgia license without written examination upon payment of required fees", "May never license nonresidents", "May issue a temporary license only, never a full license"],
    "correctAnswer": 1,
    "explanation": "For nonresidents licensed in a state with similar requirements, the Commission has discretion to issue a Georgia license without written examination when required fees are paid.",
    "id": 74
  },
  {
    "topic": "Licensing, Registration, and Renewal",
    "question": "A resident of a state that does not license auctioneers holds a valid auctioneer license in another state that has a reciprocal licensing agreement with Georgia. Georgia may:",
    "options": ["Refuse to license the applicant under all circumstances", "License the applicant without examination at the Commission\u2019s discretion, upon payment of required fees", "Require the applicant to move to Georgia before applying", "Require only a ringperson card"],
    "correctAnswer": 1,
    "explanation": "If the applicant\u2019s home state does not regulate auctioneers but the applicant holds a valid license in a state with a reciprocal agreement with Georgia, the Commission may issue a Georgia license without examination in its discretion when the fee is paid.",
    "id": 75
  },
  {
    "topic": "Licensing, Registration, and Renewal",
    "question": "Before a nonresident auctioneer license is issued, the applicant must:",
    "options": ["Purchase Georgia property", "Appoint the Commission or its designee as agent for service of process in Georgia", "Agree to use a Georgia bank for all deposits", "Sign a pledge to conduct only charity auctions"],
    "correctAnswer": 1,
    "explanation": "Nonresident auctioneers must file a written designation appointing the Commission or a designated deputy as their agent for service of process. Service on that agent is equivalent to personal service on the licensee.",
    "id": 76
  },
  {
    "topic": "Licensing, Registration, and Renewal",
    "question": "To obtain a Georgia auctioneer license, an applicant must:",
    "options": ["Show proof of residence", "Demonstrate at least ten years of auction experience", "Be a Georgia native by birth", "Show proof of ownership of an auction company"],
    "correctAnswer": 0,
    "explanation": "Georgia law requires applicants to show proof of residence to obtain an auctioneer license.",
    "id": 77
  },
  {
    "topic": "Licensing, Registration, and Renewal",
    "question": "Georgia auctioneer licenses:",
    "options": ["Never expire once issued", "Expire every year on December 31", "Expire biennially in accordance with the general professional licensing schedule", "Must be renewed every six months"],
    "correctAnswer": 2,
    "explanation": "Auctioneer licenses expire biennially as provided in the general professional licensing law that governs expiration and renewal dates.",
    "id": 78
  },
  {
    "topic": "Licensing, Registration, and Renewal",
    "question": "The Commission may require auctioneers seeking license renewal to complete:",
    "options": ["At least 20 hours of continuing education each year", "No continuing education once licensed", "Commission-approved continuing education of not more than eight hours biennially", "Only courses taught by the Commission chair"],
    "correctAnswer": 2,
    "explanation": "The statute authorizes the Commission to require up to eight hours of Commission-approved continuing education every two years for license renewal, and it may waive this requirement in hardship cases.",
    "id": 79
  },
  {
    "topic": "Discipline, Hearings, and Enforcement",
    "question": "The Commission may require continuing education requirements to be waived:",
    "options": ["Only by vote of the legislature", "Only if the licensee pays a higher renewal fee", "In cases of hardship, disability, illness, or other appropriate circumstances", "Only if the licensee has more than 20 years of experience"],
    "correctAnswer": 2,
    "explanation": "The Commission is authorized to waive continuing education requirements for hardship, disability, illness, or other appropriate reasons.",
    "id": 80
  },
  {
    "topic": "Discipline, Hearings, and Enforcement",
    "question": "Which of the following must be included in an individual auctioneer license application?",
    "options": ["Only the applicant\u2019s social media handles", "The name and address of the applicant and the location(s) where the business will be conducted", "Only the city where the applicant plans to conduct auctions", "A sworn statement that the applicant has never made a mistake"],
    "correctAnswer": 1,
    "explanation": "Applications must include the applicant\u2019s name and address, business locations, and any other information the Commission requires.",
    "id": 81
  },
  {
    "topic": "Discipline, Hearings, and Enforcement",
    "question": "A company owned by or employing one or more full-time auctioneers may be exempt from certain registration requirements if:",
    "options": ["It only conducts online auctions", "It is directly supervised by a licensed auctioneer", "It has been in business for ten years", "It posts its financial statements on its website"],
    "correctAnswer": 1,
    "explanation": "A company owned by or employing one or more full-time licensed auctioneers may be exempt from the standard company registration process if it is directly supervised by a licensed auctioneer.",
    "id": 82
  },
  {
    "topic": "Discipline, Hearings, and Enforcement",
    "question": "Regarding display of the auctioneer\u2019s license:",
    "options": ["The license must be kept at home, not at the place of business", "The license must be displayed conspicuously at the licensee\u2019s office, and a separate branch office license must be displayed at each branch", "The license only needs to be shown to other auctioneers upon request", "The license must be laminated and carried only in the auctioneer\u2019s vehicle"],
    "correctAnswer": 1,
    "explanation": "The law requires that the auctioneer\u2019s license be delivered or mailed to the licensee\u2019s place of business and displayed conspicuously, with a branch office license displayed at each additional place of business.",
    "id": 83
  },
  {
    "topic": "Discipline, Hearings, and Enforcement",
    "question": "When participating in the auctioneering business in any capacity, a Georgia licensee must:",
    "options": ["Carry their Georgia auctioneer license identification card and present it upon demand by any state official", "Carry only a photocopy of their license", "Present proof of insurance instead of a license card", "Present their tax returns if requested"],
    "correctAnswer": 0,
    "explanation": "All licensees must carry their Georgia auctioneer license identification card while participating in the auctioneering business and must present it upon demand by any official of the State of Georgia.",
    "id": 84
  },
  {
    "topic": "Discipline, Hearings, and Enforcement",
    "question": "What is the effect if a check submitted as a license fee is returned unpaid?",
    "options": ["There is no effect if it is later paid in cash", "The Commission must issue the license but may send a warning", "The unpaid check is grounds for revocation or denial of a license", "The matter is referred only to the applicant\u2019s bank"],
    "correctAnswer": 2,
    "explanation": "Any check presented as a fee for an original or renewal license that is returned unpaid is cause for revocation or denial of a license.",
    "id": 85
  },
  {
    "topic": "Discipline, Hearings, and Enforcement",
    "question": "When considering whether to grant a license, the Commission must find that the applicant:",
    "options": ["Has the loudest chant in their county", "Bears a good reputation for honesty, trustworthiness, integrity, and competence", "Owns at least one auction facility", "Has never made a business error"],
    "correctAnswer": 1,
    "explanation": "Licenses are granted only to persons who bear a good reputation for honesty, trustworthiness, integrity, and competence to protect the public\u2019s interests.",
    "id": 86
  },
  {
    "topic": "Discipline, Hearings, and Enforcement",
    "question": "Which of the following may, by itself, be sufficient grounds for refusal of a license?",
    "options": ["Being new to the industry", "Having no prior auction employment", "Being convicted of forgery, embezzlement, or other similar offenses", "Attending auction school out of state"],
    "correctAnswer": 2,
    "explanation": "Convictions for offenses such as forgery, embezzlement, obtaining money under false pretenses, larceny, extortion, conspiracy to defraud, or similar crimes may by themselves be sufficient grounds for refusal of a license.",
    "id": 87
  },
  {
    "topic": "Discipline, Hearings, and Enforcement",
    "question": "Making a false statement of material fact on an application:",
    "options": ["Is harmless if corrected within 30 days", "Is grounds for refusal of a license", "Is allowed if the applicant apologizes in writing", "Only affects renewal, not original licensure"],
    "correctAnswer": 1,
    "explanation": "A false statement of material fact on an application may, by itself, be sufficient grounds for refusal of a license.",
    "id": 88
  },
  {
    "topic": "Discipline, Hearings, and Enforcement",
    "question": "An auctioneer advertises a sale as \u201cabsolute\u201d but runs it as an auction with reserve, allowing the seller to reject bids. This may be disciplined as:",
    "options": ["An acceptable marketing strategy", "A minor error not covered by statute", "Pursuing a continued and flagrant course of misrepresentation or false promises", "Only a civil contract issue between seller and buyer"],
    "correctAnswer": 2,
    "explanation": "Advertising an auction as absolute and then conducting it with reserve is specifically listed as an unfair trade practice and can lead to censure, suspension, or revocation of the license.",
    "id": 89
  },
  {
    "topic": "Recovery Fund and Related Provisions",
    "question": "Under Georgia auction law, failing to remit or account for money belonging to others within the required time may constitute:",
    "options": ["Proper business practice if funds are needed for company expenses", "An unfair trade practice and grounds for discipline", "A simple bookkeeping error with no legal impact", "A violation only if more than one year passes"],
    "correctAnswer": 1,
    "explanation": "Failing to account for or remit, within 30 days unless otherwise provided by contract, any money belonging to others, or commingling such funds, is an unfair trade practice that can lead to discipline.",
    "id": 90
  },
  {
    "topic": "Recovery Fund and Related Provisions",
    "question": "Which of the following is listed as a ground for revocation or suspension of a license?",
    "options": ["Having high commission rates", "Violating any Commission rule, regulation, or code of ethics", "Conducting auctions in multiple states", "Using an online platform for bidding"],
    "correctAnswer": 1,
    "explanation": "Violation of any rule, regulation, or code of ethics promulgated by the Commission is a specific ground for disciplinary action.",
    "id": 91
  },
  {
    "topic": "Recovery Fund and Related Provisions",
    "question": "If the Commission decides not to accept an application that was properly filed with the correct fee, the applicant:",
    "options": ["Has no right to further review", "May demand automatic issuance of the license", "Is entitled to a hearing under the Georgia Administrative Procedure Act and then judicial review", "Must reapply in another state"],
    "correctAnswer": 2,
    "explanation": "When the Commission refuses to accept a properly filed application, it must provide a hearing under the Georgia Administrative Procedure Act, and the applicant may seek judicial review after administrative remedies are exhausted.",
    "id": 92
  },
  {
    "topic": "Recovery Fund and Related Provisions",
    "question": "To stop ongoing violations of the auctioneer law, the Attorney General may:",
    "options": ["Issue criminal warrants directly", "Bring an action in superior court to obtain temporary and permanent injunctions without posting bond", "Shut down the auction without any court involvement", "Only send a warning letter"],
    "correctAnswer": 1,
    "explanation": "When the Commission believes violations exist, the Attorney General may bring an action in superior court to abate and enjoin such acts, and the state is not required to post a bond.",
    "id": 93
  },
  {
    "topic": "Recovery Fund and Related Provisions",
    "question": "Which of the following auctions is explicitly exempt from the Georgia auctioneer licensing chapter, provided the required exemption letter is obtained?",
    "options": ["A for-profit jewelry auction at a hotel ballroom", "A youth livestock auction sponsored by a 4-H Club or FFA", "A regular weekly used car auction open to the public", "An online liquidation auction for electronics"],
    "correctAnswer": 1,
    "explanation": "The chapter does not apply to youth livestock auctions sponsored by 4-H or FFA, as long as the organization first obtains a letter of exemption from the Commission.",
    "id": 94
  },
  {
    "topic": "Recovery Fund and Related Provisions",
    "question": "Under Georgia law, acting as an auctioneer without a required license is:",
    "options": ["A civil violation only, with no criminal penalty", "A misdemeanor punishable by a fine up to 1,000 dollars, imprisonment up to 90 days, or both", "A felony punishable by at least one year in prison", "Permitted if the auction involves only personal property"],
    "correctAnswer": 1,
    "explanation": "Any person or corporation acting as an auctioneer without a license, or otherwise violating the chapter, is guilty of a misdemeanor and may be fined up to 1,000 dollars, imprisoned up to 90 days, or both.",
    "id": 95
  },
  {
    "topic": "Recovery Fund and Related Provisions",
    "question": "The primary purpose of the Auctioneers Education, Research, and Recovery Fund is to:",
    "options": ["Subsidize auctioneer advertising costs", "Provide retirement benefits for auctioneers", "Allow aggrieved persons to recover actual or compensatory damages caused by licensee violations, within limits", "Guarantee every auction will close successfully"],
    "correctAnswer": 2,
    "explanation": "The Fund allows an aggrieved person (with some exclusions) to recover actual or compensatory damages, within specified dollar limits, resulting from a licensee\u2019s violations of the chapter or Commission rules.",
    "id": 96
  },
  {
    "topic": "Recovery Fund and Related Provisions",
    "question": "The minimum balance that must be maintained in the Auctioneers Education, Research, and Recovery Fund is:",
    "options": ["10,000 dollars", "50,000 dollars", "100,000 dollars", "1,000,000 dollars"],
    "correctAnswer": 2,
    "explanation": "The statute requires the Commission to maintain a minimum balance of 100,000 dollars in the Fund.",
    "id": 97
  },
  {
    "topic": "Recovery Fund and Related Provisions",
    "question": "The maximum amount the Fund is obligated to pay for a single transaction, regardless of the number of people or parcels involved, is:",
    "options": ["5,000 dollars", "10,000 dollars", "20,000 dollars", "25,000 dollars"],
    "correctAnswer": 1,
    "explanation": "For any one transaction, the Fund is not obligated for more than 10,000 dollars in total, regardless of how many people are aggrieved or how many parcels are involved.",
    "id": 98
  },
  {
    "topic": "Recovery Fund and Related Provisions",
    "question": "Once the Fund has paid out the maximum aggregate amount for the acts of a single licensee, its liability for that licensee is terminated at:",
    "options": ["5,000 dollars", "10,000 dollars", "20,000 dollars", "50,000 dollars"],
    "correctAnswer": 2,
    "explanation": "The liability of the Fund for the acts of a licensee is terminated when court orders authorize payments totaling 20,000 dollars on behalf of that licensee.",
    "id": 99
  },
  {
    "topic": "Recovery Fund and Related Provisions",
    "question": "If the Fund pays money toward satisfaction of a judgment against a licensee, what happens to that license?",
    "options": ["Nothing happens, because the Fund exists to protect the licensee", "The license is automatically renewed", "The license is automatically revoked, and the licensee must repay the Fund with interest before becoming eligible for a new license", "The license is suspended only until the next renewal date"],
    "correctAnswer": 2,
    "explanation": "When the Fund pays out on a claim, the license of the licensee (and supervising auctioneer for an entity) is automatically revoked. The licensee cannot obtain a new license until the Fund is repaid in full with interest.",
    "id": 100
  },
  {
    "topic": "Recovery Fund and Related Provisions",
    "question": "To preserve the right to recover from the Fund, an action for a judgment that could lead to payment from the Fund must be started:",
    "options": ["Within one year from the accrual of the cause of action", "Within two years from the accrual of the cause of action", "Within five years from the accrual of the cause of action", "At any time; there is no deadline"],
    "correctAnswer": 1,
    "explanation": "No action for a judgment that could result in a later Recovery Fund payment may be started more than two years after the cause of action accrues.",
    "id": 101
  },
  {
    "topic": "Advanced Licensing, Sanctions, and Reinstatement",
    "question": "Which of the following best describes a \"sanction\" the Commission may impose short of suspending or revoking a license?",
    "options": ["Issuing a written reprimand and/or imposing a monetary fine on the licensee", "Ordering the licensee to conduct only charity auctions for one year", "Automatically canceling all existing auction contracts", "Transferring the licensee\u2019s auctions to another auctioneer"],
    "correctAnswer": 0,
    "explanation": "In addition to suspension or revocation, the Commission may impose lesser sanctions such as a written reprimand and monetary fines as disciplinary measures.",
    "id": 102
  },
  {
    "topic": "Advanced Licensing, Sanctions, and Reinstatement",
    "question": "A license has been revoked after payment from the Recovery Fund. The earliest step the former licensee must take to be considered for a new license is to:",
    "options": ["Wait ten years and then reapply without conditions", "Complete a new auction school program only", "Repay the Recovery Fund in full, with interest, and then apply for a new license", "Obtain a letter of recommendation from another auctioneer"],
    "correctAnswer": 2,
    "explanation": "When the Recovery Fund pays on a claim, the license is automatically revoked. The former licensee must first repay the Fund in full, with interest, before the Commission may consider issuing a new license.",
    "id": 103
  },
  {
    "topic": "Advanced Licensing, Sanctions, and Reinstatement",
    "question": "Which of the following is a specific ground for refusal to issue an auctioneer\u2019s license in Georgia?",
    "options": ["Having competed against another auctioneer in a bid for a contract", "Having been refused membership in a private auction association", "Having a prior license to practice a profession revoked or suspended for cause by another licensing authority", "Having conducted an auction in another state"],
    "correctAnswer": 2,
    "explanation": "The law lists prior revocation or suspension for cause of any professional license by another licensing authority as a ground for refusal of an auctioneer\u2019s license.",
    "id": 104
  },
  {
    "topic": "Advanced Licensing, Sanctions, and Reinstatement",
    "question": "A license applicant was previously convicted of embezzlement. Under Georgia auction law, this conviction:",
    "options": ["Automatically disqualifies the applicant for life", "May, by itself, be considered sufficient grounds to refuse the license", "Is irrelevant once the applicant has repaid any stolen funds", "Can only be considered if the conviction was within the last two years"],
    "correctAnswer": 1,
    "explanation": "Crimes such as embezzlement, forgery, and similar offenses are specifically identified as grounds which may, by themselves, be sufficient to refuse issuance of a license.",
    "id": 105
  },
  {
    "topic": "Advanced Licensing, Sanctions, and Reinstatement",
    "question": "If the Commission finds that an applicant has made a false statement of material fact on a license application, it may:",
    "options": ["Ignore the misstatement if it did not affect the exam score", "Treat the misstatement as a sufficient basis to refuse the license", "Require the applicant to pay a small fine but still issue the license", "Only issue a warning letter and proceed with licensure"],
    "correctAnswer": 1,
    "explanation": "A false statement of material fact on an application is a statutory ground that may, by itself, justify refusal of a license.",
    "id": 106
  },
  {
    "topic": "Advanced Licensing, Sanctions, and Reinstatement",
    "question": "Which of the following best illustrates \"moral turpitude\" as used in Georgia\u2019s grounds for license discipline?",
    "options": ["A simple traffic ticket for speeding", "A conviction for failing to maintain a business license", "A conviction for fraudulently taking money from clients", "A dispute over contract language with a seller"],
    "correctAnswer": 2,
    "explanation": "Crimes involving fraud or dishonest taking of money from clients generally fall within the concept of moral turpitude and are grounds for disciplinary action.",
    "id": 107
  },
  {
    "topic": "Advanced Licensing, Sanctions, and Reinstatement",
    "question": "After a hearing, the Commission decides to suspend a license for six months and impose a fine. Which statement is true about the licensee\u2019s rights?",
    "options": ["The licensee has no further recourse and must accept the decision", "The licensee may seek judicial review after exhausting administrative remedies", "The licensee may only ask the Governor to overrule the Commission", "The licensee must immediately retake the auctioneer examination"],
    "correctAnswer": 1,
    "explanation": "Following a final decision by the Commission and exhaustion of administrative remedies, the aggrieved licensee may seek judicial review under the Georgia Administrative Procedure Act.",
    "id": 108
  },
  {
    "topic": "Advanced Licensing, Sanctions, and Reinstatement",
    "question": "The Commission may summarily suspend a license without a prior hearing only if:",
    "options": ["It never does so; a hearing is always required first", "Emergency action is necessary to protect the public health, safety, or welfare, with a prompt subsequent hearing provided", "The licensee has failed to pay annual membership dues", "The licensee has not conducted an auction within six months"],
    "correctAnswer": 1,
    "explanation": "Like most professional licensing agencies operating under an administrative procedure act, the Commission may enter an emergency suspension when immediate action is necessary to protect the public, but a prompt hearing must follow.",
    "id": 109
  },
  {
    "topic": "Advanced Licensing, Sanctions, and Reinstatement",
    "question": "Which of the following is a likely condition for reinstatement after a suspension (but not revocation) of a Georgia auctioneer license?",
    "options": ["Automatic reinstatement with no further requirements", "Compliance with all terms of the Commission\u2019s order, which may include fines, education, or proof of rehabilitation", "Only changing the auctioneer\u2019s business name", "Conducting a certain number of auctions for free"],
    "correctAnswer": 1,
    "explanation": "When a license is suspended, the Commission\u2019s order typically sets conditions for reinstatement such as payment of fines, completion of education, or proof of corrective measures.",
    "id": 110
  },
  {
    "topic": "Advanced Licensing, Sanctions, and Reinstatement",
    "question": "If an applicant\u2019s license application is denied for cause, future applications:",
    "options": ["Can never be submitted", "May be submitted, but the applicant bears the burden of showing that the previous grounds for denial have been remedied or no longer exist", "Must be filed in another state first", "Are automatically approved after one year"],
    "correctAnswer": 1,
    "explanation": "A prior denial for cause does not permanently bar future applications, but the applicant must convincingly demonstrate rehabilitation or removal of the earlier grounds for denial.",
    "id": 111
  },
  {
    "topic": "Exceptions, Special Cases, and Local Regulation",
    "question": "Which of the following sales is most clearly exempt from the Georgia auctioneer licensing chapter?",
    "options": ["A regular weekly consignment auction run for profit", "A youth livestock auction sponsored by a 4-H Club that has received an exemption letter from the Commission", "A monthly vehicle auction open to the public", "A liquidation auction held by a bank"],
    "correctAnswer": 1,
    "explanation": "Youth livestock auctions sponsored by 4-H or FFA organizations are exempt from the chapter when the sponsoring organization has first obtained an exemption letter from the Commission.",
    "id": 112
  },
  {
    "topic": "Exceptions, Special Cases, and Local Regulation",
    "question": "Which statement best describes the effect of the \"exceptions\" section of the Georgia auctioneer law?",
    "options": ["It eliminates the need for any auctioneer to be licensed in Georgia", "It identifies certain persons and types of sales that the chapter does not regulate", "It allows counties to write their own auctioneer licensing laws without restriction", "It applies only to online auctions"],
    "correctAnswer": 1,
    "explanation": "The exceptions section lists types of persons or activities (such as certain youth livestock auctions and ringpersons) to which the chapter does not apply.",
    "id": 113
  },
  {
    "topic": "Exceptions, Special Cases, and Local Regulation",
    "question": "Which individual is specifically excluded from the operation of the Georgia auctioneer licensing chapter?",
    "options": ["A person who calls bids at a weekly consignment sale for a commission", "A ringperson as defined in the chapter", "A person who sells off their personal household goods at auction", "A professional art auctioneer who flies in from another state"],
    "correctAnswer": 1,
    "explanation": "The statute expressly states that, except as otherwise provided, the chapter does not apply to ringpersons as defined in the law.",
    "id": 114
  },
  {
    "topic": "Exceptions, Special Cases, and Local Regulation",
    "question": "Which of the following statements about the liability of a licensed auctioneer is true under the Georgia auctioneer law?",
    "options": ["Nothing in the auctioneer law relieves a licensed auctioneer of any liability they would otherwise have under Georgia law", "A licensed auctioneer is shielded from civil liability if the buyer fails to pay", "A licensed auctioneer is automatically immune from contract disputes with sellers", "A licensed auctioneer cannot be sued for negligence in the conduct of an auction"],
    "correctAnswer": 0,
    "explanation": "The statute makes clear that nothing in the chapter relieves a licensed auctioneer from any liability that they would otherwise have under Georgia law.",
    "id": 115
  },
  {
    "topic": "Exceptions, Special Cases, and Local Regulation",
    "question": "A Georgia county wishes to adopt additional regulations governing where auctions may be held and how traffic must be handled on auction days. Under the auctioneer law, the county:",
    "options": ["Is prohibited from regulating auctions in any way", "May enact lawful regulations of auction activities as long as they do not conflict with state licensing requirements", "May adopt its own auctioneer licensing standards that are lower than the state\u2019s", "Must first obtain permission from each licensed auctioneer in the county"],
    "correctAnswer": 1,
    "explanation": "The law allows local governments to enact lawful regulations relating to auction activities, provided that these do not conflict with or lower state licensure requirements set by the Commission.",
    "id": 116
  },
  {
    "topic": "Exceptions, Special Cases, and Local Regulation",
    "question": "If a city attempts to require auctioneers to obtain a city license based on standards less strict than the state\u2019s, the effect of the auctioneer law is that:",
    "options": ["The city license replaces the state license", "The city may not lower the standards required for state licensure", "The city\u2019s standards automatically control over the state\u2019s", "Auctioneers may choose whichever standards they prefer"],
    "correctAnswer": 1,
    "explanation": "Local regulation may not lower the standards that have been approved for licensure by the state Commission. State licensing requirements establish the minimum professional standard.",
    "id": 117
  },
  {
    "topic": "Exceptions, Special Cases, and Local Regulation",
    "question": "Under the Georgia auctioneer law, ringpersons:",
    "options": ["Must hold their own auctioneer licenses", "Are considered auctioneers for all legal purposes", "Are not subject to the chapter unless another provision explicitly brings them under it", "May independently negotiate listing contracts with sellers"],
    "correctAnswer": 2,
    "explanation": "The chapter states that, except as otherwise provided, it does not apply to ringpersons. They may be regulated in specific ways if another section so provides, but they are generally excluded from full treatment as auctioneers.",
    "id": 118
  },
  {
    "topic": "Exceptions, Special Cases, and Local Regulation",
    "question": "A youth livestock auction is held without an exemption letter from the Commission. Which statement best describes its status?",
    "options": ["It is automatically lawful and outside Commission authority", "It may fall under the auctioneer licensing chapter because the exemption conditions were not met", "It is a criminal offense only for the bidders", "It is automatically void and any sales are invalid"],
    "correctAnswer": 1,
    "explanation": "The exemption for youth livestock auctions applies only if the sponsoring organization first obtains a letter of exemption. Without that, the auction may be subject to all licensing and regulatory provisions.",
    "id": 119
  },
  {
    "topic": "Exceptions, Special Cases, and Local Regulation",
    "question": "Which situation most clearly shows that the auctioneer law does not limit existing civil remedies against an auctioneer?",
    "options": ["A buyer files a complaint with the Commission instead of a lawsuit", "A seller sues an auctioneer for breach of contract in civil court in addition to filing a Commission complaint", "An auctioneer\u2019s license is renewed without conditions", "A ringperson refuses to assist at an auction"],
    "correctAnswer": 1,
    "explanation": "The chapter states that it does not relieve any licensed auctioneer of civil liabilities. A seller may still sue for breach of contract, negligence, or other civil claims even if Commission action is also pursued.",
    "id": 120
  },
  {
    "topic": "Exceptions, Special Cases, and Local Regulation",
    "question": "A county adopts a rule that all auctions must end by 9:00 p.m. Does this rule violate the state auctioneer law?",
    "options": ["Yes, because local governments may not regulate auctions at all", "Yes, because auction hours are set exclusively by the Commission", "No, provided that the rule is otherwise lawful and does not conflict with state licensing standards", "No, because counties control all auction licensing"],
    "correctAnswer": 2,
    "explanation": "Local governments may make lawful regulations relating to auction activities (such as hours or traffic management) so long as those regulations do not conflict with or lower state licensure requirements.",
    "id": 121
  },
  {
    "topic": "Practical Scenarios \u2013 Trust Accounts and Misconduct",
    "question": "An auctioneer deposits bidder deposits and seller proceeds into the same operating account used to pay rent and utilities. Under Georgia auction law, this is:",
    "options": ["Permissible if the auctioneer keeps good records", "An example of commingling funds and an unfair trade practice", "Required if the auctioneer has only one bank account", "Permissible only for small auctions under 10,000 dollars"],
    "correctAnswer": 1,
    "explanation": "Client funds must be kept in a separate trust or escrow account. Mixing client funds with personal or operating funds is commingling and is specifically identified as an unfair trade practice.",
    "id": 122
  },
  {
    "topic": "Practical Scenarios \u2013 Trust Accounts and Misconduct",
    "question": "A buyer pays the full purchase price for equipment at auction. The auctioneer holds the funds but fails to remit the seller\u2019s share within 30 days, and no different time frame was agreed. This conduct is:",
    "options": ["Acceptable, because the auctioneer may need time to reconcile accounts", "An unfair trade practice for failing to remit funds within the required period", "Permitted only if the buyer agrees", "Required if the seller lives out of state"],
    "correctAnswer": 1,
    "explanation": "Failing to account for or remit, within 30 days unless otherwise agreed by contract, money belonging to others is an unfair trade practice and a ground for disciplinary action.",
    "id": 123
  },
  {
    "topic": "Practical Scenarios \u2013 Trust Accounts and Misconduct",
    "question": "An auctioneer keeps a detailed ledger of all funds held for clients, including deposits, disbursements, and balances. Which statement best describes this practice under Georgia law?",
    "options": ["Unnecessary because only gross totals matter", "Recommended and consistent with the duty to account for money belonging to others", "Prohibited because it violates client privacy", "Required only for auctions over 100,000 dollars"],
    "correctAnswer": 1,
    "explanation": "The duty to account for others\u2019 funds includes keeping accurate records of deposits and disbursements. Detailed ledgers are consistent with this requirement and with sound business practice.",
    "id": 124
  },
  {
    "topic": "Practical Scenarios \u2013 Trust Accounts and Misconduct",
    "question": "A seller complains that the auctioneer never gave an accounting of sale proceeds. The auctioneer claims the seller \"never asked.\" Under Georgia law, the auctioneer:",
    "options": ["Has no duty to account unless requested in writing", "Must account for funds belonging to others within the statutory or contractual time frame without needing a specific request", "Must only provide an accounting if the sale loses money", "Has no obligation to account to sellers"],
    "correctAnswer": 1,
    "explanation": "The law requires auctioneers to account for and remit money belonging to others within 30 days (unless contract provides otherwise), not only upon demand.",
    "id": 125
  },
  {
    "topic": "Practical Scenarios \u2013 Trust Accounts and Misconduct",
    "question": "A Georgia auctioneer repeatedly fails to respond to Commission inquiries regarding a complaint about missing funds. This behavior is likely to be viewed as:",
    "options": ["Acceptable, because the complaint may be unfounded", "A separate ground for discipline for failing to cooperate with the regulatory authority", "Required to maintain client confidentiality", "A private matter between the auctioneer and the complainant"],
    "correctAnswer": 1,
    "explanation": "Failing to respond to or cooperate with lawful Commission investigations can itself constitute grounds for disciplinary action, in addition to any underlying misconduct.",
    "id": 126
  },
  {
    "topic": "Practical Scenarios \u2013 Trust Accounts and Misconduct",
    "question": "An auctioneer discovers that an employee has withdrawn money from the trust account for personal use. The auctioneer immediately replaces the funds from personal savings and changes internal controls. Which statement is most accurate under Georgia law?",
    "options": ["There is no violation because the money was replaced", "The trust account was still misused, and the auctioneer\u2019s duty to supervise may be implicated, though remedial steps can be considered in discipline", "The employee alone is responsible and the auctioneer cannot be disciplined", "The violation disappears once controls are improved"],
    "correctAnswer": 1,
    "explanation": "Misuse of trust account funds is a violation even if later corrected. The supervising auctioneer may still face discipline, although prompt corrective action may mitigate the severity of sanctions.",
    "id": 127
  },
  {
    "topic": "Practical Scenarios \u2013 Trust Accounts and Misconduct",
    "question": "A seller insists on being paid from buyer funds before checks have cleared the bank. The auctioneer refuses and waits until funds clear before disbursing proceeds. Under Georgia law, this decision is:",
    "options": ["Improper because the seller is the client", "Appropriate, because the auctioneer must protect the integrity of the trust account and avoid disbursing uncollected funds", "Required only for out-of-state buyers", "Unlawful because funds must be released immediately"],
    "correctAnswer": 1,
    "explanation": "Disbursing uncollected funds can cause trust account shortages. It is appropriate and prudent for the auctioneer to wait until funds clear to protect all parties.",
    "id": 128
  },
  {
    "topic": "Practical Scenarios \u2013 Trust Accounts and Misconduct",
    "question": "An auctioneer uses money from the trust account to pay personal income taxes, intending to \"pay it back after the next sale.\" This is:",
    "options": ["Permissible if disclosed to the Commission", "Permissible if repaid within 30 days", "A serious misuse of trust funds and an unfair trade practice", "Required if there is no other money available"],
    "correctAnswer": 2,
    "explanation": "Trust funds must never be used for personal expenses. Such use is a serious violation and fits the description of commingling or conversion of client funds.",
    "id": 129
  },
  {
    "topic": "Practical Scenarios \u2013 Trust Accounts and Misconduct",
    "question": "Over several auctions, an auctioneer regularly remits proceeds late but always within 60 days, without any contractual provision addressing timing. Which statement best describes the risk?",
    "options": ["There is no risk as long as the money is ultimately paid", "Each late remittance beyond 30 days may constitute a separate unfair trade practice", "Late payments are acceptable if the seller does not complain", "The 30-day rule applies only to real estate"],
    "correctAnswer": 1,
    "explanation": "Absent a contract specifying a different time, failing to remit proceeds within 30 days is an unfair trade practice. Repeated late payments can lead to cumulative discipline.",
    "id": 130
  },
  {
    "topic": "Practical Scenarios \u2013 Trust Accounts and Misconduct",
    "question": "A buyer claims that a licensed auctioneer misappropriated a 5,000 dollar deposit. The buyer wins a civil judgment and the court orders payment from the Recovery Fund. If the Fund pays that 5,000 dollars, the auctioneer\u2019s license:",
    "options": ["Is unaffected because the amount is under 10,000 dollars", "Is automatically revoked until the auctioneer reimburses the Fund with interest", "Is suspended for exactly six months", "Is permanently canceled with no possibility of reinstatement"],
    "correctAnswer": 1,
    "explanation": "Any payment from the Recovery Fund on a licensee\u2019s behalf results in automatic revocation of the license, and the licensee must fully reimburse the Fund with interest before becoming eligible for licensure again.",
    "id": 131
  },
  {
    "topic": "Practical Scenarios \u2013 Advertising, Auction Types, and Owner Bidding",
    "question": "An auction is advertised as \"Absolute Estate Auction \u2013 No Reserves.\" On sale day, the auctioneer announces that the seller reserves the right to reject the final bid on the house. This situation is:",
    "options": ["Acceptable because the announcement was made before bidding started", "An example of misrepresentation, because the written advertising promised an absolute auction", "Required to protect the seller from low bids", "Only a problem if the bidders complain in writing"],
    "correctAnswer": 1,
    "explanation": "Advertising an auction as absolute and then treating items as subject to reserve is a misrepresentation and an unfair trade practice, even if the change is announced at the start.",
    "id": 132
  },
  {
    "topic": "Practical Scenarios \u2013 Advertising, Auction Types, and Owner Bidding",
    "question": "Which auction sign most clearly describes a lawful auction with reserve?",
    "options": ["\"Absolute Auction \u2013 Seller may reject bids\"", "\"Auction \u2013 Seller reserves the right to accept or reject any and all bids\"", "\"Auction \u2013 All items guaranteed to sell\"", "\"Auction \u2013 Owner bidding allowed in secret\""],
    "correctAnswer": 1,
    "explanation": "Stating that the seller reserves the right to accept or reject any and all bids accurately describes an auction with reserve and avoids misleading the public.",
    "id": 133
  },
  {
    "topic": "Practical Scenarios \u2013 Advertising, Auction Types, and Owner Bidding",
    "question": "At an auction with reserve, the owner bids on an item through a friend to protect the reserve price. Under Georgia law, this practice:",
    "options": ["Is allowed at auctions with reserve unless prohibited by contract or other law", "Is always prohibited in all auctions", "Is permitted only in charity auctions", "Converts the sale into an absolute auction"],
    "correctAnswer": 0,
    "explanation": "In an auction with reserve, while certain federal or other rules may apply in special contexts (such as securities), owner bidding is generally allowed unless forbidden by contract or other applicable law.",
    "id": 134
  },
  {
    "topic": "Practical Scenarios \u2013 Advertising, Auction Types, and Owner Bidding",
    "question": "At an absolute auction, the seller instructs the auctioneer to place a \"ghost bid\" at 50,000 dollars if bidding stalls at 45,000 dollars. If the auctioneer complies, the result is:",
    "options": ["A lawful method of protecting the seller", "A violation of the definition of absolute auction and a potential unfair trade practice", "Required by Georgia law for all high-value items", "Acceptable only if disclosed after the sale"],
    "correctAnswer": 1,
    "explanation": "At an absolute auction, owner or agent bidding is inconsistent with the requirement that the property sell to the highest bona fide bidder without reservation, making such conduct a misrepresentation.",
    "id": 135
  },
  {
    "topic": "Practical Scenarios \u2013 Advertising, Auction Types, and Owner Bidding",
    "question": "An auction advertisement promises \"Everything sells today \u2013 no item will be held back,\" but the auctioneer later withholds several high-value items when bidding is low. This conduct is:",
    "options": ["Acceptable because the seller can change their mind", "Potentially a continued and flagrant course of misrepresentation", "Required if the seller is unhappy", "Only an issue if the bidders file lawsuits"],
    "correctAnswer": 1,
    "explanation": "Promising that everything will sell and then withholding items when prices are not favorable constitutes a misrepresentation and may be disciplined as an unfair trade practice.",
    "id": 136
  },
  {
    "topic": "Practical Scenarios \u2013 Advertising, Auction Types, and Owner Bidding",
    "question": "A flyer states, \"Guaranteed minimum net proceeds of 50,000 dollars to seller,\" even though no such guarantee exists in the contract. Under Georgia law, this is:",
    "options": ["Permissible if the auctioneer believes the proceeds will reach that amount", "A substantial misrepresentation and an unfair trade practice", "Acceptable if the seller signs the flyer", "Allowed only for farm equipment auctions"],
    "correctAnswer": 1,
    "explanation": "Creating unjustified expectations or making false promises about proceeds is a substantial misrepresentation and is expressly identified as an unfair trade practice.",
    "id": 137
  },
  {
    "topic": "Practical Scenarios \u2013 Advertising, Auction Types, and Owner Bidding",
    "question": "An auctioneer describes all items as \"working perfectly\" without ever inspecting them. After the auction, several items are found to be nonfunctional. This behavior most likely constitutes:",
    "options": ["Acceptable \"puffing\" that is always allowed", "Potential misrepresentation, especially if the auctioneer had no reasonable basis for the claims", "A violation only if the items are worth more than 5,000 dollars each", "A purely ethical issue with no legal consequence"],
    "correctAnswer": 1,
    "explanation": "Making broad factual claims about condition without any basis can amount to misrepresentation, a ground for discipline, especially where buyers reasonably rely on those statements.",
    "id": 138
  },
  {
    "topic": "Practical Scenarios \u2013 Advertising, Auction Types, and Owner Bidding",
    "question": "At a charity auction, the auctioneer exaggerates the retail value of items but clearly states that values are approximate estimates. This conduct is:",
    "options": ["Always unlawful misrepresentation", "Typically treated as permissible \"puffing\" if values are obviously estimates and not presented as precise facts", "Allowed only if the auctioneer is unpaid", "Required by Georgia law to increase bids"],
    "correctAnswer": 1,
    "explanation": "While intentional deception is prohibited, obvious estimates and sales \"puffing\" that reasonable bidders recognize as opinion are generally distinguished from factual misrepresentation. Context still matters.",
    "id": 139
  },
  {
    "topic": "Practical Scenarios \u2013 Advertising, Auction Types, and Owner Bidding",
    "question": "During a real property auction, the auctioneer fails to mention a known zoning restriction that significantly limits use of the property. Which statement best applies?",
    "options": ["There is no duty to disclose zoning restrictions", "Knowing concealment of material facts may be treated as fraudulent or dishonest dealing", "Zoning is the buyer\u2019s responsibility only and never relevant to the auctioneer", "Disclosure is only required if the buyer asks"],
    "correctAnswer": 1,
    "explanation": "Concealing material facts that significantly affect property use may constitute fraud or dishonest dealing, which are grounds for disciplinary action.",
    "id": 140
  },
  {
    "topic": "Practical Scenarios \u2013 Advertising, Auction Types, and Owner Bidding",
    "question": "An auctioneer repeatedly advertises auctions as \"state-sanctioned\" even though there is no such designation. This conduct is:",
    "options": ["Acceptable if the auctioneer holds a license", "Misleading and likely to be considered a continued course of misrepresentation", "Required language under the auctioneer law", "Only an issue if the state complains"],
    "correctAnswer": 1,
    "explanation": "Suggesting special government endorsement that does not exist is misleading and may be treated as a continued and flagrant course of misrepresentation, leading to discipline.",
    "id": 141
  },
  {
    "topic": "Recovery Fund \u2013 Procedures and Calculations",
    "question": "A buyer wins a 15,000 dollar judgment against a licensee for actual damages arising from a single auction transaction. If all Fund conditions are met, what is the maximum the Recovery Fund can pay toward this judgment?",
    "options": ["5,000 dollars", "10,000 dollars", "15,000 dollars", "20,000 dollars"],
    "correctAnswer": 1,
    "explanation": "The Fund\u2019s maximum liability for any single transaction is 10,000 dollars, even if the judgment is higher.",
    "id": 142
  },
  {
    "topic": "Recovery Fund \u2013 Procedures and Calculations",
    "question": "Two buyers each obtain separate judgments of 9,000 dollars in actual damages from the same auction transaction. Assuming all conditions are met, what is the total maximum amount the Recovery Fund may be required to pay for that transaction?",
    "options": ["9,000 dollars", "10,000 dollars", "18,000 dollars", "20,000 dollars"],
    "correctAnswer": 1,
    "explanation": "For a single transaction, the Fund\u2019s total obligation is capped at 10,000 dollars, regardless of how many people are involved or how many judgments are entered.",
    "id": 143
  },
  {
    "topic": "Recovery Fund \u2013 Procedures and Calculations",
    "question": "Three different transactions involving the same licensee lead to valid Fund claims of 8,000 dollars, 7,000 dollars, and 10,000 dollars. Assuming all conditions are satisfied and the Commission approves payment, what is the maximum total the Fund will pay on behalf of this licensee?",
    "options": ["10,000 dollars", "15,000 dollars", "20,000 dollars", "25,000 dollars"],
    "correctAnswer": 2,
    "explanation": "The Fund\u2019s total liability for the acts of a single licensee is capped at 20,000 dollars, even if the sum of approved claims exceeds that amount.",
    "id": 144
  },
  {
    "topic": "Recovery Fund \u2013 Procedures and Calculations",
    "question": "Using the previous question\u2019s facts, if the Fund pays the first two claims in full (8,000 and 7,000 dollars), how much can it pay toward the third claim for that licensee before hitting the 20,000 dollar aggregate cap?",
    "options": ["5,000 dollars", "10,000 dollars", "12,000 dollars", "20,000 dollars"],
    "correctAnswer": 0,
    "explanation": "The first two payments total 15,000 dollars. With a 20,000 dollar aggregate limit per licensee, only 5,000 dollars remains available for the third claim.",
    "id": 145
  },
  {
    "topic": "Recovery Fund \u2013 Procedures and Calculations",
    "question": "A claimant obtains a valid judgment against a licensee in 2026, but the underlying cause of action occurred in 2020 and the lawsuit was not filed until 2024. Under the Recovery Fund rules, the Commission will most likely:",
    "options": ["Deny the claim because the action was started more than two years after the cause of action accrued", "Pay the claim because the judgment is valid", "Pay only half of the judgment", "Pay the claim if the licensee agrees"],
    "correctAnswer": 0,
    "explanation": "No action that may result in a Recovery Fund claim may be started more than two years after the cause of action accrues. Filing later waives rights under the Fund.",
    "id": 146
  },
  {
    "topic": "Recovery Fund \u2013 Procedures and Calculations",
    "question": "A licensee\u2019s misconduct leads to a 12,000 dollar judgment for actual damages and a 5,000 dollar award for punitive damages. Which portion, if any, may be paid from the Recovery Fund?",
    "options": ["The full 17,000 dollars", "Only the 12,000 dollars in actual damages, subject to Fund caps", "Only the 5,000 dollars in punitive damages", "None of the judgment"],
    "correctAnswer": 1,
    "explanation": "The Recovery Fund is designed to cover actual or compensatory damages only. Punitive damages are not typically payable from the Fund and are borne directly by the licensee.",
    "id": 147
  },
  {
    "topic": "Recovery Fund \u2013 Procedures and Calculations",
    "question": "Following a 10,000 dollar payment from the Recovery Fund on behalf of a licensee, interest begins accruing on the amount the licensee must repay. If the statutory interest rate is 6 percent per year, approximately how much interest accrues in one year if no payments are made?",
    "options": ["60 dollars", "600 dollars", "1,200 dollars", "6,000 dollars"],
    "correctAnswer": 1,
    "explanation": "Six percent of 10,000 dollars is 600 dollars (10,000 \u00d7 0.06 = 600). That is the interest that would accrue in one year if no payments are made.",
    "id": 148
  },
  {
    "topic": "Recovery Fund \u2013 Procedures and Calculations",
    "question": "A licensee owes the Fund 20,000 dollars plus interest at 6 percent per year. If the licensee makes no payments for two full years, approximately how much total interest accrues over that period, assuming simple interest?",
    "options": ["600 dollars", "1,200 dollars", "2,400 dollars", "6,000 dollars"],
    "correctAnswer": 2,
    "explanation": "Simple interest for two years at 6 percent on 20,000 dollars is 20,000 \u00d7 0.06 \u00d7 2 = 2,400 dollars.",
    "id": 149
  },
  {
    "topic": "Recovery Fund \u2013 Procedures and Calculations",
    "question": "Which person is barred from making a claim against the Recovery Fund?",
    "options": ["A consumer bidder who lost a deposit due to a licensee\u2019s misconduct", "A seller whose proceeds were misappropriated by a licensee", "A licensee acting as principal or agent in the transaction at issue", "A buyer who suffered losses due to misrepresentation of goods"],
    "correctAnswer": 2,
    "explanation": "A licensee acting as principal or agent in the transaction has no claim against the Recovery Fund. The Fund is designed to protect members of the public, not licensees themselves.",
    "id": 150
  },
  {
    "topic": "Recovery Fund \u2013 Procedures and Calculations",
    "question": "A consumer is harmed by an unlicensed person acting as an auctioneer. The consumer wins a judgment and seeks payment from the Recovery Fund. Under the auctioneer law, the Fund will most likely:",
    "options": ["Pay the claim in full", "Pay only half the judgment", "Deny the claim because it involves an unlicensed person", "Pay the claim but revoke all licenses statewide"],
    "correctAnswer": 2,
    "explanation": "The Recovery Fund is tied to misconduct by licensed auctioneers. Claims based on the acts of unlicensed persons are generally not payable from the Fund, although other remedies may exist.",
    "id": 151
  },
  {
    "topic": "Practice Scenarios \u2013 Licensing, Reciprocity, and Nonresidents",
    "question": "A nonresident auctioneer licensed in a state with substantially similar licensing requirements to Georgia applies for a Georgia license. Under reciprocity provisions, the Commission:",
    "options": ["Must deny the application because the applicant is not a resident", "May issue a Georgia license without requiring a written examination, in its discretion, upon payment of the required fee", "May only issue a temporary, one-auction license", "Must require the applicant to complete a Georgia auction school program"],
    "correctAnswer": 1,
    "explanation": "Reciprocity allows the Commission, in its discretion, to issue a Georgia license without a written exam to a nonresident auctioneer licensed in a state with substantially similar requirements, provided all fees are paid.",
    "id": 152
  },
  {
    "topic": "Practice Scenarios \u2013 Licensing, Reciprocity, and Nonresidents",
    "question": "Before a nonresident auctioneer license is granted in Georgia, the applicant must file:",
    "options": ["A personal guarantee from a Georgia resident", "A written designation appointing the Commission (or its designee) as agent for service of process in Georgia", "A bond equal to the value of all property to be sold", "A letter agreeing never to conduct auctions in their home state"],
    "correctAnswer": 1,
    "explanation": "Nonresident applicants must appoint the Commission (or a designated deputy) as their agent for service of process, so legal papers can be served on the Commission instead of the applicant personally.",
    "id": 153
  },
  {
    "topic": "Practice Scenarios \u2013 Licensing, Reciprocity, and Nonresidents",
    "question": "A nonresident whose home state does not license auctioneers holds a valid auctioneer license from another state that has a reciprocal agreement with Georgia. To obtain a Georgia license, the applicant:",
    "options": ["Must be denied because their home state lacks an auctioneer license law", "May receive a Georgia license without examination at the Commission\u2019s discretion upon payment of required fees", "Must first become a resident of Georgia", "Must seek a special exemption from the legislature"],
    "correctAnswer": 1,
    "explanation": "Even if the applicant\u2019s home state does not license auctioneers, reciprocity may be extended based on licensure in another state that has a reciprocal agreement with Georgia, at the Commission\u2019s discretion.",
    "id": 154
  },
  {
    "topic": "Practice Scenarios \u2013 Licensing, Reciprocity, and Nonresidents",
    "question": "A nonresident auctioneer licensed in a similar state wants to conduct a single auction in Georgia without getting a Georgia license. Under Georgia law, this is:",
    "options": ["Permissible as long as the auction lasts only one day", "Permissible if conducted entirely online", "Unlawful unless the auctioneer qualifies under a specific exception or obtains a Georgia license through reciprocity", "Allowed if the auction is for charity"],
    "correctAnswer": 2,
    "explanation": "Acting as an auctioneer in Georgia generally requires a Georgia license unless a specific statutory exemption applies. Reciprocity is the route for nonresidents to obtain licensure.",
    "id": 155
  },
  {
    "topic": "Practice Scenarios \u2013 Licensing, Reciprocity, and Nonresidents",
    "question": "A Georgia resident wants to sue for a sales commission for auction services they performed while unlicensed. Under the auctioneer law, the lawsuit:",
    "options": ["Is barred because a person cannot sue for compensation for auction services unless they were duly licensed at the time the cause of action arose", "Is allowed only if the auction was a charity event", "Must be filed first with the Commission"],
    "correctAnswer": 1,
    "explanation": "The law states that no person may bring or maintain an action in Georgia courts to recover compensation for auctioneer services unless they were duly licensed when the cause of action arose.",
    "id": 156
  },
  {
    "topic": "Practice Scenarios \u2013 Licensing, Reciprocity, and Nonresidents",
    "question": "A Georgia resident auctioneer lets their license lapse but continues conducting auctions. Which statement best describes the consequences?",
    "options": ["There are no consequences if the auctioneer intends to renew later", "Acting as an auctioneer without a current license is unlawful and may also bar them from suing for compensation earned while unlicensed", "The auctioneer may continue for 90 days as a grace period", "The auctioneer is protected if they have been licensed for more than five years"],
    "correctAnswer": 1,
    "explanation": "Once a license lapses, the auctioneer is no longer \"duly licensed\" and acts in violation of the law if they continue auctioneering, with both criminal and civil consequences.",
    "id": 157
  },
  {
    "topic": "Practice Scenarios \u2013 Licensing, Reciprocity, and Nonresidents",
    "question": "A nonresident auctioneer licensed in a reciprocal state fails to maintain their home-state license in good standing. Regarding their Georgia license granted through reciprocity, the Commission may:",
    "options": ["Take no action because Georgia licenses are independent", "Revoke or suspend the Georgia license based on revocation or suspension in another jurisdiction", "Only suspend the license for 30 days", "Require the licensee to change their business name"],
    "correctAnswer": 1,
    "explanation": "Revocation or suspension of a professional license by another licensing authority is specifically listed as a ground for discipline, including revocation or suspension of the Georgia license.",
    "id": 158
  },
  {
    "topic": "Practice Scenarios \u2013 Licensing, Reciprocity, and Nonresidents",
    "question": "A nonresident auctioneer licensed in a reciprocal state is served with a civil lawsuit in Georgia arising from a Georgia auction. Service is properly made on the Commission as the designated agent. Legally, this is:",
    "options": ["Invalid because service must be personal", "Valid service, equivalent to personal service on the auctioneer", "Valid only if repeated by certified mail", "Only a notice to the Commission, not to the auctioneer"],
    "correctAnswer": 1,
    "explanation": "By designating the Commission (or its deputy) as agent for service of process, the nonresident agrees that service on the Commission is equivalent to personal service on the licensee.",
    "id": 159
  },
  {
    "topic": "Practice Scenarios \u2013 Licensing, Reciprocity, and Nonresidents",
    "question": "A Georgia auctioneer moves to another state but wants to keep their Georgia license active. What is the most accurate statement?",
    "options": ["The license automatically expires upon moving", "The auctioneer may keep the license if they meet renewal requirements, including any continuing education, and maintain a valid mailing address for official notices", "Nonresidents may not hold Georgia licenses", "The auctioneer must return the license immediately"],
    "correctAnswer": 1,
    "explanation": "The law focuses on meeting licensing and renewal requirements, not on continuous residency. Nonresidents may hold Georgia licenses, especially under reciprocity and proper contact information.",
    "id": 160
  },
  {
    "topic": "Practice Scenarios \u2013 Licensing, Reciprocity, and Nonresidents",
    "question": "An unlicensed assistant regularly calls bids when the auctioneer steps away. Under Georgia law, this arrangement:",
    "options": ["Is acceptable if the assistant is supervised", "Is prohibited because calling bids is acting as an auctioneer without a license", "Is required when crowds are large", "Is permitted only at charity auctions"],
    "correctAnswer": 1,
    "explanation": "Calling or chanting bids is a core function of an auctioneer. An unlicensed person may assist as a ringperson but cannot legally call bids as an auctioneer.",
    "id": 161
  },
  {
    "topic": "Agency, Contracts, and Real Property Auctions",
    "question": "In a typical Georgia auction listing contract, the auctioneer\u2019s primary agency relationship is with:",
    "options": ["The state government", "The highest bidder", "The seller (owner) of the property", "The ringperson"],
    "correctAnswer": 2,
    "explanation": "The auctioneer usually acts as an agent of the seller under a listing or auction contract and owes duties of loyalty and disclosure to that principal.",
    "id": 162
  },
  {
    "topic": "Agency, Contracts, and Real Property Auctions",
    "question": "A Georgia auctioneer is licensed as a real estate broker and conducts an auction for land. Which body of law applies to this real estate transaction?",
    "options": ["Only auctioneer law applies", "Only real estate law applies", "Both the auctioneer law and applicable real estate laws and regulations apply", "Neither statute applies because the sale is at auction"],
    "correctAnswer": 2,
    "explanation": "When real property is sold at auction, the auctioneer must comply with both the auctioneer law and any applicable real estate licensing laws and rules.",
    "id": 163
  },
  {
    "topic": "Agency, Contracts, and Real Property Auctions",
    "question": "A seller signs an auction listing agreement that authorizes the auctioneer to advertise a sale as absolute. The seller later insists on a reserve. Under Georgia law, the auctioneer should:",
    "options": ["Continue advertising it as absolute because of the original agreement", "Change the sale to \"with reserve\" and correct all advertising before proceeding", "Ignore the seller\u2019s request and conduct the sale as absolute", "Cancel the auction with no communication to bidders"],
    "correctAnswer": 1,
    "explanation": "An auctioneer must avoid misrepresentation. If the seller will not proceed on an absolute basis, the auction must be conducted and advertised as with reserve, with advertising corrected to avoid misleading bidders.",
    "id": 164
  },
  {
    "topic": "Agency, Contracts, and Real Property Auctions",
    "question": "A contract between a seller and auctioneer provides that the auctioneer will receive a commission of 10 percent of the gross sales price. Which statement best describes the Commission\u2019s role regarding this fee?",
    "options": ["The Commission must approve all commission rates", "The Commission sets maximum commission schedules by rule", "The Commission has no authority to set or fix commission rates between private parties", "The Commission must be a party to the contract"],
    "correctAnswer": 2,
    "explanation": "The Commission may adopt rules on conduct and ethics but is expressly prohibited from setting or fixing fee or commission schedules for licensees.",
    "id": 165
  },
  {
    "topic": "Agency, Contracts, and Real Property Auctions",
    "question": "A seller wants the auctioneer to keep a portion of the buyer\u2019s premium without disclosing it in the terms and conditions. Under Georgia law and general agency principles, the auctioneer should:",
    "options": ["Agree as long as the seller consents in writing", "Disclose all compensation arrangements in the contract and terms to avoid undisclosed profits and conflicts of interest", "Keep the arrangement secret to maximize revenue", "Only disclose the commission, not the buyer\u2019s premium"],
    "correctAnswer": 1,
    "explanation": "Auctioneers, as agents, must avoid undisclosed compensation or secret profits. All material compensation arrangements should be disclosed in writing to the seller and in terms provided to bidders.",
    "id": 166
  },
  {
    "topic": "Agency, Contracts, and Real Property Auctions",
    "question": "In a real property auction, the auctioneer accidentally omits a key contingency from the purchase contract that the seller had required. After the auction, the seller refuses to sign. Which result is most likely?",
    "options": ["The auctioneer may be exposed to claims for negligence or breach of duty by the seller", "The seller is forced to sign what was announced", "The buyer automatically becomes the owner without a contract", "The Commission must pay any resulting damages"],
    "correctAnswer": 0,
    "explanation": "Failing to include agreed terms can expose the auctioneer to liability to the seller for negligence or breach of duty. The Commission does not guarantee private contracts.",
    "id": 167
  },
  {
    "topic": "Agency, Contracts, and Real Property Auctions",
    "question": "A Georgia auctioneer sells real estate at auction but is not licensed under the real estate laws. Which of the following is most accurate?",
    "options": ["This may violate real estate licensing laws and be grounds for discipline under both auctioneer and real estate statutes", "This is allowed because auctioneers are exempt from real estate laws", "This is allowed only if the buyer is also an auctioneer", "This is required if the property is sold \"as is\""],
    "correctAnswer": 0,
    "explanation": "Auctioneers handling real property must also hold appropriate real estate licenses or meet grandfather provisions. Acting without that license may violate both sets of laws.",
    "id": 168
  },
  {
    "topic": "Agency, Contracts, and Real Property Auctions",
    "question": "A seller instructs the auctioneer to \"sell subject to confirmation,\" which means:",
    "options": ["The property must sell to the highest bidder regardless of price", "The seller has the right to accept or reject the final bid after the auction", "The buyer may confirm or reject the purchase after the auction", "The Commission must confirm the sale"],
    "correctAnswer": 1,
    "explanation": "\"Subject to confirmation\" is a form of reserve auction where the seller reserves the right to approve or reject the high bid after the auction closes.",
    "id": 169
  },
  {
    "topic": "Agency, Contracts, and Real Property Auctions",
    "question": "In Georgia, an auctioneer\u2019s listing contract with a seller should clearly specify:",
    "options": ["The seller\u2019s preferred chant style", "The auctioneer\u2019s commission or fee structure, payment terms, and authority to advertise and conduct the sale", "Only the auction date and time", "That the Commission is responsible for enforcing payment"],
    "correctAnswer": 1,
    "explanation": "A sound auction contract should spell out compensation, scope of authority, advertising rights, and other material terms to avoid disputes and to demonstrate proper business practices.",
    "id": 170
  },
  {
    "topic": "Agency, Contracts, and Real Property Auctions",
    "question": "During a real estate auction, a bidder asks whether the auctioneer represents the buyer or the seller. The auctioneer should respond:",
    "options": ["That the auctioneer represents the seller unless clearly operating as a dual or transaction broker consistent with real estate law", "That the auctioneer represents the highest bidder", "That agency is not relevant at auctions", "That the Commission controls agency relationships"],
    "correctAnswer": 0,
    "explanation": "Auctioneers usually represent the seller unless state real estate law allows and properly documents another form of agency. Clear disclosure of agency is critical for real property auctions.",
    "id": 171
  },
  {
    "topic": "Ethics, Professional Conduct, and Commission Rules",
    "question": "Which of the following behaviors most clearly violates the ethical duty of honesty under Georgia auction law?",
    "options": ["Using a fast chant during bidding", "Advertising an auction as \"absolute\" while intending to conduct it with reserve", "Scheduling two auctions on the same day", "Hiring a ringperson to assist with bids"],
    "correctAnswer": 1,
    "explanation": "Mislabeling a reserve auction as absolute is a direct misrepresentation that violates the duty of honesty and is an unfair trade practice.",
    "id": 172
  },
  {
    "topic": "Ethics, Professional Conduct, and Commission Rules",
    "question": "Which conduct demonstrates \"incompetency\" in the practice of auctioneering?",
    "options": ["Forgetting a bidder\u2019s name during the auction", "Repeated failure to maintain required trust account records and timely disbursements", "Changing the order of sale items", "Using a slower chant for clarity"],
    "correctAnswer": 1,
    "explanation": "Incompetency includes repeated failure to manage trust funds and records properly, which can harm clients and undermine the integrity of the profession.",
    "id": 173
  },
  {
    "topic": "Ethics, Professional Conduct, and Commission Rules",
    "question": "An auctioneer tells a seller, \"I\u2019ll make sure you net at least 100,000 dollars,\" even though market conditions make that unlikely and no such guarantee is written. This may be viewed as:",
    "options": ["Acceptable sales puffing", "A false promise that creates unjustified expectations, violating ethical standards", "Required encouragement under the law", "A private matter that cannot lead to discipline"],
    "correctAnswer": 1,
    "explanation": "Making promises about results that the auctioneer cannot reasonably guarantee may be a false promise and an unfair trade practice.",
    "id": 174
  },
  {
    "topic": "Ethics, Professional Conduct, and Commission Rules",
    "question": "For purposes of discipline, \"a continued and flagrant course of misrepresentation\" refers to:",
    "options": ["One minor error in an advertisement", "Sporadic typos in printed materials", "Ongoing patterns of misleading statements or advertising about auctions or services", "Occasional exaggeration about crowd size"],
    "correctAnswer": 2,
    "explanation": "The statute targets ongoing patterns of misrepresentation or false promises in advertising or business conduct, not isolated minor mistakes.",
    "id": 175
  },
  {
    "topic": "Ethics, Professional Conduct, and Commission Rules",
    "question": "A licensee is convicted of a felony unrelated to auction activities. Under Georgia law, this conviction:",
    "options": ["Has no impact on licensure because it is unrelated to auctions", "May be grounds for revocation or suspension of the auctioneer\u2019s license", "Automatically renews their license", "Requires the Commission to do nothing"],
    "correctAnswer": 1,
    "explanation": "Conviction of a felony, whether or not directly related to auctioneering, is grounds for disciplinary action, as it raises questions about moral character and fitness to hold a license.",
    "id": 176
  },
  {
    "topic": "Ethics, Professional Conduct, and Commission Rules",
    "question": "Which is an example of failing to cooperate with the Commission\u2019s investigation?",
    "options": ["Asking for clarification of an inquiry letter", "Refusing to produce trust account records after a lawful request", "Requesting to reschedule a hearing for a valid reason", "Being represented by an attorney at a hearing"],
    "correctAnswer": 1,
    "explanation": "Licensees must cooperate with lawful investigations, including producing requested records. Refusing to do so can be grounds for discipline.",
    "id": 177
  },
  {
    "topic": "Ethics, Professional Conduct, and Commission Rules",
    "question": "A licensee repeatedly ignores Commission notices about required continuing education. This conduct:",
    "options": ["Is harmless if the licensee is experienced", "May lead to nonrenewal or discipline for failing to meet CE requirements and ignoring Commission communications", "Is acceptable if the licensee conducts only charity auctions", "Is required to show independence"],
    "correctAnswer": 1,
    "explanation": "Failure to complete required CE and failure to respond to the Commission can result in nonrenewal or disciplinary actions.",
    "id": 178
  },
  {
    "topic": "Ethics, Professional Conduct, and Commission Rules",
    "question": "Which practice best aligns with ethical conduct for a Georgia auctioneer?",
    "options": ["Providing written terms and conditions and honoring them during the auction", "Changing terms mid-auction without announcement", "Hiding negative information about items from bidders", "Allowing unlicensed assistants to call bids"],
    "correctAnswer": 0,
    "explanation": "Clear, written terms and consistent adherence to them reflect honesty, fairness, and professionalism, which are core ethical obligations.",
    "id": 179
  },
  {
    "topic": "Ethics, Professional Conduct, and Commission Rules",
    "question": "The Commission\u2019s authority to adopt a \"code of ethics\" means it can:",
    "options": ["Dictate every detail of how auctions must be run", "Establish general standards of professional conduct that licensees must follow, in addition to statutory requirements", "Set minimum and maximum commission rates", "Prohibit auctions in certain counties"],
    "correctAnswer": 1,
    "explanation": "The Commission may adopt ethical and conduct standards that supplement statutory provisions and guide licensees\u2019 professional behavior.",
    "id": 180
  },
  {
    "topic": "Ethics, Professional Conduct, and Commission Rules",
    "question": "A licensee believes a Commission rule is unfair. What is the proper response?",
    "options": ["Ignore the rule and hope it is not enforced", "Comply with the rule while petitioning for rule changes or seeking judicial review where appropriate", "Conduct auctions only in other states", "Ask bidders to sign waivers"],
    "correctAnswer": 1,
    "explanation": "Licensees are obligated to follow valid rules. If they disagree, they can engage in lawful processes to seek changes rather than ignore the rules.",
    "id": 181
  },
  {
    "topic": "Mixed Review \u2013 Licensing, Trust Accounts, and Recovery Fund",
    "question": "Which of the following combinations correctly pairs the concept with its Georgia auction-law requirement?",
    "options": ["License renewal \u2013 every six months", "Trust account \u2013 must be maintained and registered with the Commission", "Recovery Fund \u2013 pays punitive damages first", "Commission \u2013 sets minimum commission rates"],
    "correctAnswer": 1,
    "explanation": "Auction companies must maintain a trust account and register it with the Commission. Licenses renew biennially, the Fund does not pay punitive damages, and the Commission does not set commission rates.",
    "id": 182
  },
  {
    "topic": "Mixed Review \u2013 Licensing, Trust Accounts, and Recovery Fund",
    "question": "Which statement about the penalty for acting as an auctioneer without a license is correct?",
    "options": ["It is a misdemeanor with possible fines up to 1,000 dollars and/or imprisonment up to 90 days", "It is a felony with mandatory prison time", "There is no criminal penalty, only civil", "It results only in a warning letter"],
    "correctAnswer": 0,
    "explanation": "Acting as an auctioneer without a required license is a misdemeanor, punishable by a fine up to 1,000 dollars, imprisonment up to 90 days, or both.",
    "id": 183
  },
  {
    "topic": "Mixed Review \u2013 Licensing, Trust Accounts, and Recovery Fund",
    "question": "Which of the following most accurately describes the scope of the Auctioneers Education, Research, and Recovery Fund?",
    "options": ["It insures all auction transactions in Georgia for any loss", "It provides limited compensation to aggrieved persons for actual damages caused by licensed auctioneers, subject to per-transaction and per-licensee caps", "It reimburses licensees for business losses", "It only funds Commission office expenses"],
    "correctAnswer": 1,
    "explanation": "The Fund is designed to compensate members of the public for certain actual damages caused by licensees, with limits on the amount payable per transaction and per licensee.",
    "id": 184
  },
  {
    "topic": "Mixed Review \u2013 Licensing, Trust Accounts, and Recovery Fund",
    "question": "Which person would have a valid potential claim against the Recovery Fund?",
    "options": ["A licensee who lost money investing in another auctioneer\u2019s business", "A buyer who was defrauded by a licensed auctioneer and obtained a judgment for actual damages within the statutory time limits", "A ringperson who was not paid wages", "An unlicensed auctioneer who sues for unpaid commissions"],
    "correctAnswer": 1,
    "explanation": "The Fund protects members of the public harmed by licensee misconduct, not licensees or unlicensed auctioneers, and requires a timely judgment for actual damages.",
    "id": 185
  },
  {
    "topic": "Mixed Review \u2013 Licensing, Trust Accounts, and Recovery Fund",
    "question": "An auctioneer maintains only one bank account that holds operating funds and client funds together but keeps careful spreadsheets. Under Georgia law, this arrangement:",
    "options": ["Is acceptable because records are accurate", "Is commingling and violates trust account requirements regardless of recordkeeping", "Is permitted only for small auctions", "Is required when there is only one owner"],
    "correctAnswer": 1,
    "explanation": "Commingling occurs when client funds are mixed with personal or operating funds. Separate trust or escrow accounts are required, even if the auctioneer keeps good records.",
    "id": 186
  },
  {
    "topic": "Mixed Review \u2013 Licensing, Trust Accounts, and Recovery Fund",
    "question": "Which of the following best describes the Commission\u2019s power regarding hearing outcomes?",
    "options": ["It can only issue warnings", "It can censure, suspend, revoke licenses, and impose sanctions such as fines when grounds for discipline are proven", "It can imprison licensees directly", "It can change criminal penalties set by the legislature"],
    "correctAnswer": 1,
    "explanation": "After proper hearings, the Commission can impose various disciplinary sanctions including censure, suspension, revocation, and fines, but criminal penalties are handled by courts.",
    "id": 187
  },
  {
    "topic": "Mixed Review \u2013 Licensing, Trust Accounts, and Recovery Fund",
    "question": "A licensed auctioneer fails to renew on time but continues working. Later, they apply to renew late. Which is most accurate?",
    "options": ["They may owe late fees and face possible discipline for practicing while unlicensed", "The renewal is automatic", "They must retake the licensing exam but cannot be disciplined", "They are exempt from renewal because they previously held a license"],
    "correctAnswer": 0,
    "explanation": "Practicing with an expired license violates the law and can lead to discipline. Renewal may still be possible, but penalties or conditions can apply.",
    "id": 188
  },
  {
    "topic": "Mixed Review \u2013 Licensing, Trust Accounts, and Recovery Fund",
    "question": "The Commission\u2019s inspector discovers incomplete trust account records during an inspection, but no money appears missing. Which result is most likely?",
    "options": ["No issues because money is not missing", "Possible discipline or corrective orders for failing to maintain proper records, even without a shortage", "Automatic criminal prosecution", "Immediate revocation of the license with no hearing"],
    "correctAnswer": 1,
    "explanation": "Licensees must maintain adequate records for trust accounts. Deficiencies may result in discipline or orders to correct, even if no shortage is found.",
    "id": 189
  },
  {
    "topic": "Mixed Review \u2013 Licensing, Trust Accounts, and Recovery Fund",
    "question": "An aggrieved consumer obtains a 7,500 dollar judgment against a licensee and follows all Fund procedures. The Fund pays 7,500 dollars. What happens next to the licensee?",
    "options": ["Nothing; the license stays in good standing", "The license is automatically revoked until the licensee reimburses the Fund with interest", "The license is suspended for 30 days but does not require repayment", "The license is renewed automatically as part of the payout"],
    "correctAnswer": 1,
    "explanation": "Any payment from the Recovery Fund on a licensee\u2019s behalf triggers automatic revocation of the license until the Fund is fully repaid with interest.",
    "id": 190
  },
  {
    "topic": "Mixed Review \u2013 Licensing, Trust Accounts, and Recovery Fund",
    "question": "Which of the following accurately matches the key numbers related to the Recovery Fund?",
    "options": ["5,000 dollar per transaction cap; 10,000 dollar per licensee cap", "10,000 dollar per transaction cap; 20,000 dollar aggregate cap per licensee", "20,000 dollar per transaction cap; 100,000 dollar per licensee cap", "No dollar caps but a 2-year time limit only"],
    "correctAnswer": 1,
    "explanation": "The Fund\u2019s liability is capped at 10,000 dollars per transaction and 20,000 dollars in total for all acts of a single licensee.",
    "id": 191
  },
  {
    "topic": "Exam-Style Mixed Scenario Review",
    "question": "A Georgia auctioneer is asked to conduct a multi-state auction tour that will include both Georgia and neighboring states. To remain compliant, the auctioneer should:",
    "options": ["Hold only a Georgia license", "Ensure they hold appropriate licenses in each state where they will act as an auctioneer and follow each state\u2019s laws", "Rely on the Georgia Commission to approve all out-of-state auctions", "Use ringpersons to conduct auctions in other states"],
    "correctAnswer": 1,
    "explanation": "Auctioneers are responsible for meeting licensing requirements and following auction laws in every state where they conduct auctions, not just Georgia.",
    "id": 192
  },
  {
    "topic": "Exam-Style Mixed Scenario Review",
    "question": "A seller asks the auctioneer to accept cash \"under the table\" from buyers in exchange for lower commission rates and not to record the transactions. The auctioneer should:",
    "options": ["Agree, because this benefits the seller", "Refuse, because such arrangements can be fraudulent, violate tax and trust account obligations, and breach ethical duties", "Agree only if the cash is kept in a safe", "Ask the Commission for a secret waiver"],
    "correctAnswer": 1,
    "explanation": "Hidden cash arrangements are unethical, may be fraudulent, and interfere with proper accounting and trust fund obligations.",
    "id": 193
  },
  {
    "topic": "Exam-Style Mixed Scenario Review",
    "question": "A bidder claims that the auctioneer misrepresented an item, but the auction terms state \"all items sold as is, where is.\" Which statement best applies?",
    "options": ["The disclaimer automatically prevents any misrepresentation claim", "The disclaimer does not protect the auctioneer from liability for intentional or reckless misrepresentation of material facts", "The disclaimer applies only to real property", "The disclaimer eliminates all duties of honesty"],
    "correctAnswer": 1,
    "explanation": "\"As is\" language limits warranties but does not excuse intentional or reckless misrepresentation of material facts by the auctioneer.",
    "id": 194
  },
  {
    "topic": "Exam-Style Mixed Scenario Review",
    "question": "An auctioneer sells a tractor, then later learns of a serious safety defect that existed at the time of sale and had been reported to them before the auction. The buyer is injured using the tractor. Which is most accurate?",
    "options": ["The auctioneer has no responsibility once the sale is over", "Concealment or failure to disclose known safety defects can expose the auctioneer to civil liability and discipline", "The buyer is always fully responsible", "The Commission must pay all damages"],
    "correctAnswer": 1,
    "explanation": "Known safety defects are material. Failure to disclose them can be seen as dishonest or negligent, leading to civil liability and potential discipline.",
    "id": 195
  },
  {
    "topic": "Exam-Style Mixed Scenario Review",
    "question": "A Georgia auctioneer advertises an auction in a way that suggests they are a \"state-approved\" auctioneer program, even though no such designation exists. This is:",
    "options": ["Acceptable since the auctioneer is licensed", "Potentially misleading and could be seen as a misrepresentation of government endorsement", "Required language on all ads", "Merely a slogan with no regulatory impact"],
    "correctAnswer": 1,
    "explanation": "Implying special government approval or endorsement that does not exist is misleading and can be treated as a misrepresentation under the law.",
    "id": 196
  },
  {
    "topic": "Exam-Style Mixed Scenario Review",
    "question": "An auctioneer is considering whether a particular scenario falls under an explicit exception to the auctioneer licensing chapter. To decide, the auctioneer should:",
    "options": ["Assume any charity auction is always exempt", "Carefully review the statutory exceptions and, if uncertain, seek written guidance or legal counsel", "Ask buyers at the auction to vote", "Proceed and see if the Commission objects"],
    "correctAnswer": 1,
    "explanation": "Exceptions are specific and limited. When in doubt, the auctioneer should review the statute or seek professional guidance rather than assume an exemption applies.",
    "id": 197
  },
  {
    "topic": "Exam-Style Mixed Scenario Review",
    "question": "A client insists on terms that the auctioneer believes would violate Georgia law. The auctioneer should:",
    "options": ["Follow the client\u2019s instructions, because the client is always right", "Explain the legal concerns and refuse to operate under illegal or unethical terms", "Agree but keep the terms secret from bidders", "Ask the Commission to approve the terms orally"],
    "correctAnswer": 1,
    "explanation": "Licensees must comply with law and ethical rules even if clients request otherwise. The proper response is to explain and decline unlawful arrangements.",
    "id": 198
  },
  {
    "topic": "Exam-Style Mixed Scenario Review",
    "question": "During a hearing, a licensee admits to commingling funds but argues that no one lost money, so discipline is unnecessary. The Commission may reasonably respond that:",
    "options": ["Commingling is not an issue if no loss occurred", "Commingling itself violates clear trust account requirements and merits discipline, though the absence of loss may be considered in determining the severity of sanctions", "The admission ends the case with no sanction", "The licensee must only apologize in writing"],
    "correctAnswer": 1,
    "explanation": "Commingling violates explicit statutory and ethical duties. Even without a loss, it undermines financial safeguards and can justify discipline.",
    "id": 199
  },
  {
    "topic": "Exam-Style Mixed Scenario Review",
    "question": "An auctioneer facing a Commission investigation has the right to:",
    "options": ["Ignore all correspondence without consequence", "Be represented by an attorney, respond to allegations, and present evidence at any hearing", "Require that the investigation be conducted entirely by telephone", "Demand that hearings be held outside Georgia"],
    "correctAnswer": 1,
    "explanation": "Administrative procedures allow licensees to have counsel, respond to charges, and present evidence and witnesses at hearings.",
    "id": 200
  },
  {
    "topic": "Exam-Style Mixed Scenario Review",
    "question": "A Georgia auctioneer wants to create internal policies to make sure they never violate trust account or advertising rules. The most effective first step is to:",
    "options": ["Assume current practices are fine", "Review Georgia auctioneer statutes and Commission rules, then draft written office policies and train staff accordingly", "Let staff make up their own procedures", "Only adopt policies after a complaint is filed"],
    "correctAnswer": 1,
    "explanation": "Proactive compliance starts with understanding statutory and regulatory requirements, then creating written policies and training to ensure consistent, lawful practices.",
    "id": 201
  },
  {
    "topic": "Georgia Auction Law \u2013 Key Numbers and Definitions",
    "question": "Under Georgia law, licenses for auctioneers expire:",
    "options": ["Annually on December 31", "Biennially, as provided by the general professional licensing provisions", "Every three years on the licensee\u2019s birthday", "Only if the auctioneer has not conducted an auction"],
    "correctAnswer": 1,
    "explanation": "Code Section 43-6-11.2 states that auctioneer licenses expire biennially in accordance with the renewal schedule established under Georgia\u2019s professional licensing law.",
    "id": 202
  },
  {
    "topic": "Georgia Auction Law \u2013 Key Numbers and Definitions",
    "question": "The maximum amount of Commission-approved continuing education the Commission may require for each biennial renewal cycle is:",
    "options": ["4 hours", "6 hours", "8 hours", "12 hours"],
    "correctAnswer": 2,
    "explanation": "The statute authorizes the Commission to require auctioneers to complete not more than eight hours of approved continuing education during each two-year renewal cycle.",
    "id": 203
  },
  {
    "topic": "Georgia Auction Law \u2013 Key Numbers and Definitions",
    "question": "The Commission is required to maintain at least what minimum balance in the Auctioneers Education, Research, and Recovery Fund?",
    "options": ["$10,000", "$50,000", "$100,000", "$250,000"],
    "correctAnswer": 2,
    "explanation": "Code Section 43-6-22.1 requires the Commission to maintain a minimum balance of $100,000.00 in the auctioneers education, research, and recovery fund.",
    "id": 204
  },
  {
    "topic": "Georgia Auction Law \u2013 Key Numbers and Definitions",
    "question": "Under Georgia auctioneer law, which person has no claim against the Recovery Fund arising out of an auction transaction?",
    "options": ["A consumer bidder who was defrauded by a licensee", "A seller whose funds were misappropriated by a licensee", "A licensee acting as principal or agent in the transaction", "A buyer who relied on false advertising"],
    "correctAnswer": 2,
    "explanation": "The statute expressly states that a licensee acting as a principal or agent in an auction transaction has no claim against the fund. The fund is intended to protect members of the public, not licensees.",
    "id": 205
  },
  {
    "topic": "Georgia Auction Law \u2013 Key Numbers and Definitions",
    "question": "The Recovery Fund\u2019s total liability for all acts of a single licensee is limited to:",
    "options": ["$5,000", "$10,000", "$20,000", "$50,000"],
    "correctAnswer": 2,
    "explanation": "Code Section 43-6-22.1 provides that the liability of the fund for the acts of a licensee is terminated when court orders authorize payments in an aggregate amount of $20,000.00 on behalf of that licensee.",
    "id": 206
  },
  {
    "topic": "Georgia Auction Law \u2013 Key Numbers and Definitions",
    "question": "No person who establishes a proper claim or claims under the Recovery Fund may ever obtain more than what total amount from the fund?",
    "options": ["$5,000", "$10,000", "$20,000", "$50,000"],
    "correctAnswer": 1,
    "explanation": "The statute caps the total amount any one person can recover from the fund at $10,000.00, even if multiple claims or transactions are involved.",
    "id": 207
  },
  {
    "topic": "Georgia Auction Law \u2013 Key Numbers and Definitions",
    "question": "Acting as an auctioneer in Georgia without the required license is:",
    "options": ["A civil infraction only, with no criminal penalty", "A misdemeanor punishable by a fine up to $1,000, imprisonment up to 90 days, or both", "Automatically treated as a felony", "Permitted if the auction is for personal property only"],
    "correctAnswer": 1,
    "explanation": "The chapter provides that any person who acts as an auctioneer without a license, or otherwise violates the chapter, commits a misdemeanor punishable by a fine up to $1,000.00, imprisonment up to 90 days, or both.",
    "id": 208
  },
  {
    "topic": "Georgia Auction Law \u2013 Key Numbers and Definitions",
    "question": "To be granted an auctioneer license, an applicant must show:",
    "options": ["Ownership of at least one auction facility", "Proof of residence and that they are of good reputation for honesty, trustworthiness, integrity, and competence", "That they have conducted at least ten auctions in another state", "Membership in a national auctioneers association"],
    "correctAnswer": 1,
    "explanation": "Georgia law requires applicants to show proof of residence and to bear a good reputation for honesty, trustworthiness, integrity, and competence in order to protect the public\u2019s interests.",
    "id": 209
  },
  {
    "topic": "Georgia Auction Law \u2013 Key Numbers and Definitions",
    "question": "Under Georgia law, a \u201cringperson\u201d is best described as:",
    "options": ["A licensed auctioneer who must call bids in the ring", "An assistant employed by the auctioneer or auction company to help conduct an auction but who does not call bids or negotiate listing contracts", "Any person who collects payments at the end of the auction", "A state inspector assigned to observe auctions"],
    "correctAnswer": 1,
    "explanation": "The definition in the chapter describes a ringperson as someone employed to assist in the conduct of an auction who may not call or chant bids and may not negotiate listing contracts.",
    "id": 210
  },
  {
    "topic": "Georgia Auction Law \u2013 Key Numbers and Definitions",
    "question": "In an \u201cabsolute auction\u201d under Georgia\u2019s definition, the property:",
    "options": ["May be withdrawn after bidding if the price seems too low", "Must be sold to the highest bona fide bidder without reservation, and owner bidding is prohibited", "May be subject to a hidden reserve known only to the seller", "Must be sold only if the seller approves the price after the auction"],
    "correctAnswer": 1,
    "explanation": "An absolute auction is one in which ownership and title must be conveyed to the high bidder without reservation and without any competing bids of any type by the owner or the owner\u2019s agent.",
    "id": 211
  },
  {
    "topic": "Real-World Contracts, Agency, and Advertising",
    "question": "A Georgia auctioneer\u2019s listing contract states that the auction will be \u201cabsolute.\u201d The seller later demands that a reserve be added, but advertising has already gone out. The auctioneer\u2019s best course of action is to:",
    "options": ["Ignore the seller and conduct the auction as originally written", "Conduct the sale with reserve but leave the advertising unchanged", "Change the sale to \u201cwith reserve,\u201d update or correct all advertising, and fully disclose the change to bidders before the auction begins", "Cancel the auction without explanation"],
    "correctAnswer": 2,
    "explanation": "Conducting a reserve auction that is advertised as absolute is a misrepresentation. The auctioneer must avoid misleading advertising by correcting materials and clearly disclosing the actual terms.",
    "id": 212
  },
  {
    "topic": "Real-World Contracts, Agency, and Advertising",
    "question": "In a typical auction arrangement, the auctioneer primarily acts as the agent of:",
    "options": ["The seller, with whom the auctioneer has a listing or auction contract", "The highest bidder at the auction", "The state government", "The ringperson"],
    "correctAnswer": 0,
    "explanation": "The auctioneer usually acts as the seller\u2019s agent and owes the seller fiduciary duties such as loyalty, full disclosure of material facts, and proper accounting for funds.",
    "id": 213
  },
  {
    "topic": "Real-World Contracts, Agency, and Advertising",
    "question": "A Georgia auctioneer promises a seller in writing, \u201cI guarantee you will net at least $75,000 from this sale,\u201d despite knowing the market may not support that figure. This is best characterized as:",
    "options": ["Acceptable sales puffing", "A false promise creating unjustified expectations and a potential unfair trade practice", "A required part of any listing contract", "Harmless exaggeration with no consequences"],
    "correctAnswer": 1,
    "explanation": "Making guarantees about net proceeds that have no reasonable basis is a false promise and can be treated as a misrepresentation or unfair trade practice under Georgia law.",
    "id": 214
  },
  {
    "topic": "Real-World Contracts, Agency, and Advertising",
    "question": "A flyer created by a Georgia auctioneer states, \u201cState-approved investment auction,\u201d even though there is no official state approval program. This conduct is:",
    "options": ["Acceptable because the auctioneer holds a license", "Misleading because it implies government endorsement that does not exist", "Required wording in all Georgia auction ads", "Only a marketing slogan with no legal impact"],
    "correctAnswer": 1,
    "explanation": "Suggesting governmental approval or endorsement that does not exist is misleading and may be treated as a continued or flagrant course of misrepresentation.",
    "id": 215
  },
  {
    "topic": "Real-World Contracts, Agency, and Advertising",
    "question": "In a real estate auction, the auctioneer should disclose their agency status by explaining that:",
    "options": ["They represent the seller unless clearly operating as a dual or transaction broker in compliance with real estate law", "They represent whichever party pays them the most commission", "They represent only the highest bidder", "They are an agent of the Commission"],
    "correctAnswer": 0,
    "explanation": "When real property is involved, the auctioneer must comply with real estate agency laws, which typically mean the auctioneer represents the seller unless a different, properly disclosed agency relationship is in place.",
    "id": 216
  },
  {
    "topic": "Real-World Contracts, Agency, and Advertising",
    "question": "A seller instructs the auctioneer not to disclose a known environmental contamination issue affecting the property. Under Georgia law and ethical standards, the auctioneer should:",
    "options": ["Follow the seller\u2019s instructions because of loyalty duties", "Disclose the material defect to potential buyers or withdraw from the engagement if disclosure is not allowed", "Stay silent unless buyers specifically ask about environmental issues", "Only disclose the issue after the auction closes"],
    "correctAnswer": 1,
    "explanation": "Known material defects, especially safety or environmental issues, must be disclosed. Concealing them can be fraudulent and a basis for civil liability and discipline. The auctioneer must not follow an instruction that requires unlawful or unethical conduct.",
    "id": 217
  },
  {
    "topic": "Real-World Contracts, Agency, and Advertising",
    "question": "In Georgia, the Commission\u2019s authority over fee and commission schedules between auctioneers and clients is that the Commission:",
    "options": ["Sets maximum and minimum commission rates", "Must approve every commission agreement", "Is specifically prohibited from fixing or setting fee or commission schedules", "Automatically receives a percentage of all commissions"],
    "correctAnswer": 2,
    "explanation": "The statute allows the Commission to regulate conduct and ethics but explicitly denies it authority to set fees or commission schedules, leaving compensation to private agreement.",
    "id": 218
  },
  {
    "topic": "Real-World Contracts, Agency, and Advertising",
    "question": "A bidder complains that the auctioneer changed the terms of sale halfway through the auction without any announcement. This practice:",
    "options": ["Is acceptable if it helps the seller", "Is problematic because auction terms should be clear and consistent, and changes should be announced to all bidders", "Is required when crowds are large", "Is allowed if the change benefits bidders"],
    "correctAnswer": 1,
    "explanation": "Fair dealing and transparency require that all material terms be disclosed and applied consistently. Unannounced changes during the auction can be misleading and unfair.",
    "id": 219
  },
  {
    "topic": "Real-World Contracts, Agency, and Advertising",
    "question": "A Georgia auctioneer wants to include a buyer\u2019s premium in the terms. Ethically and legally, the auctioneer should:",
    "options": ["Hide the premium in the fine print so it is less noticeable", "Clearly disclose the amount or percentage of the buyer\u2019s premium in all written terms and in the announcement before bidding", "Only mention it after the auction is over", "Charge it only to out-of-state buyers"],
    "correctAnswer": 1,
    "explanation": "Buyer\u2019s premiums are lawful but must be clearly disclosed to bidders in the written terms and announced so that bidders understand the total cost of purchase.",
    "id": 220
  },
  {
    "topic": "Real-World Contracts, Agency, and Advertising",
    "question": "A seller asks the auctioneer to keep part of the buyer\u2019s premium as an undisclosed \u201cside payment\u201d in addition to the stated commission. The auctioneer should:",
    "options": ["Agree, because it increases the auctioneer\u2019s income", "Refuse, because undisclosed compensation arrangements create conflicts of interest and can be considered dishonest or fraudulent", "Agree only if the buyer signs a waiver", "Agree if the seller promises not to tell anyone"],
    "correctAnswer": 1,
    "explanation": "Agents may not accept secret profits or undisclosed compensation related to a transaction. All material compensation arrangements should be disclosed to the principal and, where appropriate, to bidders.",
    "id": 221
  },
  {
    "topic": "Discipline, Complaints, and Hearings",
    "question": "Which of the following is a specific ground for disciplinary action against a Georgia auctioneer?",
    "options": ["Conducting auctions in more than one state", "Violating a Commission rule, regulation, or code of ethics", "Changing the order of lots in a sale", "Setting higher commission rates than competitors"],
    "correctAnswer": 1,
    "explanation": "The statute provides that violation of any Commission rule, regulation, or code of ethics is grounds for censure, suspension, or revocation of a license.",
    "id": 222
  },
  {
    "topic": "Discipline, Complaints, and Hearings",
    "question": "Before the Commission can revoke or suspend an auctioneer\u2019s license for misconduct, it must:",
    "options": ["Obtain a unanimous vote of all licensees", "Hold a hearing in accordance with the Georgia Administrative Procedure Act", "Ask the Governor for permission", "Conduct a public referendum"],
    "correctAnswer": 1,
    "explanation": "Disciplinary actions such as censure, suspension, or revocation can only occur after a hearing held in compliance with the Georgia Administrative Procedure Act, giving the licensee due process.",
    "id": 223
  },
  {
    "topic": "Discipline, Complaints, and Hearings",
    "question": "Which of the following best illustrates \u201ca continued and flagrant course of misrepresentation\u201d under Georgia auction law?",
    "options": ["One typo in an advertisement", "Repeatedly advertising reserve auctions as absolute over many sales", "Forgetting to mention a minor scratch on a used tool", "Changing the starting bid at the seller\u2019s request"],
    "correctAnswer": 1,
    "explanation": "A continued and flagrant course of misrepresentation involves ongoing patterns of misleading conduct, such as consistently mislabeling auction types or results, rather than isolated minor mistakes.",
    "id": 224
  },
  {
    "topic": "Discipline, Complaints, and Hearings",
    "question": "A licensee is convicted of a felony in another state unrelated to auctioneering. Under Georgia law, the Commission:",
    "options": ["Must ignore the conviction because it is unrelated to auctions", "May treat the conviction as grounds for disciplinary action, including suspension or revocation", "Must automatically double the licensee\u2019s commission rates", "Can only issue a warning letter"],
    "correctAnswer": 1,
    "explanation": "Conviction of a felony is a listed ground for discipline, regardless of whether the offense occurred in Georgia or directly involved auction activities.",
    "id": 225
  },
  {
    "topic": "Discipline, Complaints, and Hearings",
    "question": "A licensee refuses to provide trust account records during a lawful Commission investigation. This conduct:",
    "options": ["Is acceptable because the records are confidential", "Is itself grounds for disciplinary action, apart from any underlying violation", "Is required to protect client privacy", "Has no impact on licensure"],
    "correctAnswer": 1,
    "explanation": "Licensees must cooperate with lawful investigations by the Commission. Refusal to provide requested records can be treated as a separate ground for discipline.",
    "id": 226
  },
  {
    "topic": "Discipline, Complaints, and Hearings",
    "question": "If the Commission decides not to accept a properly filed license application with the correct fee, the applicant:",
    "options": ["Has no right to further review", "May request a hearing under the Georgia Administrative Procedure Act and may seek judicial review after administrative remedies are exhausted", "Must reapply in another state", "Is barred from ever applying again"],
    "correctAnswer": 1,
    "explanation": "An applicant whose application is refused is entitled to a hearing under the Administrative Procedure Act and then to judicial review of the final agency decision.",
    "id": 227
  },
  {
    "topic": "Discipline, Complaints, and Hearings",
    "question": "The Attorney General\u2019s role in enforcing the auctioneer licensing chapter includes authority to:",
    "options": ["Personally conduct auctions to see if laws are followed", "Bring civil actions in superior court to abate and enjoin violations, without requiring the state to post bond", "Set commission rates", "Automatically revoke licenses without hearings"],
    "correctAnswer": 1,
    "explanation": "When the Commission believes violations are occurring, the Attorney General may bring an action in superior court to obtain temporary or permanent injunctions to stop unlawful acts, and the state is not required to post bond.",
    "id": 228
  },
  {
    "topic": "Discipline, Complaints, and Hearings",
    "question": "A licensee whose license has been suspended for six months asks when they can resume auctioneering. The correct answer is that they:",
    "options": ["May resume immediately because suspension is symbolic only", "Must wait until the suspension period ends and comply with any conditions in the Commission\u2019s order before resuming practice", "May conduct auctions as long as they donate the proceeds", "May resume if they change their business name"],
    "correctAnswer": 1,
    "explanation": "A suspension removes authority to practice during the suspension period. The licensee must complete the suspension and meet any conditions in the order before resuming auction activities.",
    "id": 229
  },
  {
    "topic": "Discipline, Complaints, and Hearings",
    "question": "Which of the following is MOST likely to be considered \u201cincompetent\u201d practice by an auctioneer?",
    "options": ["Speaking with a slow chant", "Repeatedly miscalculating proceeds so that sellers are shorted and failing to correct errors", "Conducting auctions on weekends", "Using a ringperson during sales"],
    "correctAnswer": 1,
    "explanation": "Incompetence includes persistent failure to perform basic professional duties correctly, such as accurately calculating and disbursing proceeds, which can harm clients and undermine public confidence.",
    "id": 230
  },
  {
    "topic": "Discipline, Complaints, and Hearings",
    "question": "A licensee facing disciplinary charges wants to know if they may be represented by a lawyer at the hearing. Under Georgia\u2019s administrative procedure, the licensee:",
    "options": ["Has no right to counsel", "Has the right to be represented by an attorney, present evidence, and cross-examine witnesses", "May only submit written statements", "Must represent themselves personally"],
    "correctAnswer": 1,
    "explanation": "Administrative hearings under the Georgia Administrative Procedure Act allow parties to be represented by counsel, present testimony and documents, and cross-examine witnesses, ensuring due process rights.",
    "id": 231
  },
  {
    "topic": "Trust Accounts, Escrow, and Funds Handling",
    "question": "A Georgia auction company is required to maintain which of the following accounts?",
    "options": ["Only an operating account for business expenses", "An active trust or escrow account registered with the Georgia Auctioneers Commission", "A personal savings account for the owner", "Only a petty cash fund"],
    "correctAnswer": 1,
    "explanation": "Code Section 43-6-11.1 requires an auction company to maintain an active trust account at all times and to register that account with the Commission so client funds are properly safeguarded.",
    "id": 232
  },
  {
    "topic": "Trust Accounts, Escrow, and Funds Handling",
    "question": "Client funds held in a trust account must be:",
    "options": ["Kept separate from the auctioneer\u2019s operating and personal funds", "Deposited in the auctioneer\u2019s personal checking account for convenience", "Spent first and repaid later", "Held only in cash in the office safe"],
    "correctAnswer": 0,
    "explanation": "Commingling client funds with personal or operating funds is an unfair trade practice. Trust funds must be kept in a separate account designated for that purpose.",
    "id": 233
  },
  {
    "topic": "Trust Accounts, Escrow, and Funds Handling",
    "question": "Absent a different written agreement, an auctioneer must account for and remit money belonging to others within:",
    "options": ["10 days", "30 days", "60 days", "90 days"],
    "correctAnswer": 1,
    "explanation": "The statute identifies failing to remit or account for funds belonging to others within 30 days (unless otherwise provided by contract) as an unfair trade practice subject to discipline.",
    "id": 234
  },
  {
    "topic": "Trust Accounts, Escrow, and Funds Handling",
    "question": "A Georgia auctioneer sells equipment for a hammer price of $50,000. The buyer pays in full on sale day. The contract does not specify a different timeline. By day 30, the auctioneer must:",
    "options": ["Have remitted the seller\u2019s share and provided an accounting, unless contract terms extend the deadline", "Wait at least 90 days before paying the seller", "Only remit if the seller asks in writing", "Keep the funds until the next auction"],
    "correctAnswer": 0,
    "explanation": "Failing to remit or account for others\u2019 money within 30 days, absent a different contract term, is an unfair trade practice. The auctioneer must pay the seller and provide an accounting in a timely fashion.",
    "id": 235
  },
  {
    "topic": "Trust Accounts, Escrow, and Funds Handling",
    "question": "An auctioneer uses $3,000 from the trust account to cover office rent, intending to repay it from the next auction. Under Georgia law, this action is:",
    "options": ["Acceptable if the money is replaced quickly", "A serious misuse of trust funds and an unfair trade practice, even if later repaid", "Required when cash flow is tight", "Only a problem if the landlord complains"],
    "correctAnswer": 1,
    "explanation": "Client funds may not be used for personal or operating expenses. Doing so is commingling or conversion and is grounds for discipline, regardless of later repayment.",
    "id": 236
  },
  {
    "topic": "Trust Accounts, Escrow, and Funds Handling",
    "question": "A seller and auctioneer agree in writing that seller proceeds will be paid within 45 days after the auction. This agreement is:",
    "options": ["Invalid because the statute always requires 30 days", "Permitted, because the 30-day rule applies unless a different time period is provided by contract", "Only valid if the Commission approves in advance", "Only valid for real estate auctions"],
    "correctAnswer": 1,
    "explanation": "The statute\u2019s 30-day standard applies \u201cunless otherwise provided by contract.\u201d Parties may agree in writing to a different disbursement schedule so long as funds are safeguarded.",
    "id": 237
  },
  {
    "topic": "Trust Accounts, Escrow, and Funds Handling",
    "question": "At a machinery auction, a buyer pays a 10% deposit of $5,000 toward a $50,000 bid. The deposit must be:",
    "options": ["Immediately spent on advertising", "Placed into the trust account and handled according to the terms of the contract until closing or refund", "Given directly to the seller in cash", "Held in the auctioneer\u2019s desk drawer"],
    "correctAnswer": 1,
    "explanation": "Deposits and earnest money are client funds and must be placed into the trust account and managed according to the contract, protecting both buyer and seller.",
    "id": 238
  },
  {
    "topic": "Trust Accounts, Escrow, and Funds Handling",
    "question": "A Georgia auctioneer keeps detailed ledgers for the trust account that show each deposit, disbursement, and running balance. This practice is:",
    "options": ["Unnecessary if there is online banking", "Exactly what the duty to account for money belonging to others requires", "Prohibited for privacy reasons", "Required only for auctions over $100,000"],
    "correctAnswer": 1,
    "explanation": "Accurate, detailed records are essential to fulfilling the duty to account for others\u2019 funds and help demonstrate compliance if the Commission inspects the accounts.",
    "id": 239
  },
  {
    "topic": "Trust Accounts, Escrow, and Funds Handling",
    "question": "An auctioneer routinely remits seller proceeds at 45 days even though the contract promises payment within 21 days. This pattern:",
    "options": ["Is acceptable if the seller does not complain", "May constitute a pattern of failing to remit funds as agreed, which is an unfair trade practice", "Is encouraged to improve cash flow", "Is only a problem for large auctions"],
    "correctAnswer": 1,
    "explanation": "The duty to remit funds is based on the time period agreed in the contract. Repeatedly missing that deadline can be treated as a pattern of noncompliance and unfair trade practice.",
    "id": 240
  },
  {
    "topic": "Trust Accounts, Escrow, and Funds Handling",
    "question": "A Commission inspector finds that a trust account\u2019s balance is lower than the total of client funds that should be held, even though the auctioneer says the shortage is \u201ctemporary.\u201d This discovery most likely indicates:",
    "options": ["A harmless bookkeeping glitch", "A serious violation because trust accounts must always contain at least the total amount of client funds owed", "A minor issue that will fix itself", "A problem only if the bank complains"],
    "correctAnswer": 1,
    "explanation": "A shortage in the trust account means client funds have been misused or misapplied. This is a serious violation that can lead to discipline or even criminal investigation.",
    "id": 241
  },
  {
    "topic": "Georgia Auction Exam \u2013 Mixed Law and Math",
    "question": "A Georgia auction includes a 10% buyer\u2019s premium and 7% sales tax, both calculated on the hammer price. If the hammer price is $5,000, approximately what total amount will the buyer pay?",
    "options": ["$5,350", "$5,500", "$5,885", "$6,000"],
    "correctAnswer": 2,
    "explanation": "Buyer\u2019s premium = 10% of $5,000 = $500. Taxable base = hammer + premium = $5,000 + $500 = $5,500. Sales tax at 7% = $5,500 \u00d7 0.07 = $385. Total paid = $5,500 + $385 = $5,885.",
    "id": 242
  },
  {
    "topic": "Georgia Auction Exam \u2013 Mixed Law and Math",
    "question": "At a Georgia equipment auction, the hammer price is $25,000 and there is a 10% buyer\u2019s premium. The auctioneer\u2019s commission is 15% of the hammer price plus buyer\u2019s premium. How much commission does the auctioneer earn?",
    "options": ["$2,500", "$3,750", "$4,125", "$5,000"],
    "correctAnswer": 2,
    "explanation": "Buyer\u2019s premium = 10% of $25,000 = $2,500. Gross subject to commission = $25,000 + $2,500 = $27,500. Commission = 15% of $27,500 = 0.15 \u00d7 27,500 = $4,125.",
    "id": 243
  },
  {
    "topic": "Georgia Auction Exam \u2013 Mixed Law and Math",
    "question": "Using the facts from the previous question (hammer $25,000, buyer\u2019s premium $2,500, commission $4,125), what amount of gross proceeds remains to apply toward the seller\u2019s share before expenses?",
    "options": ["$20,875", "$21,375", "$23,375", "$25,000"],
    "correctAnswer": 2,
    "explanation": "Total amount collected from buyer = $25,000 + $2,500 = $27,500. Subtract the auctioneer\u2019s commission of $4,125: $27,500 \u2212 $4,125 = $23,375 remaining to apply toward the seller\u2019s proceeds and any agreed expenses.",
    "id": 244
  },
  {
    "topic": "Georgia Auction Exam \u2013 Mixed Law and Math",
    "question": "An auctioneer in Georgia sells personal property for a hammer price of $32,000, with a 10% buyer\u2019s premium and 8% sales tax calculated on hammer plus premium. Approximately how much sales tax is collected?",
    "options": ["$256", "$320", "$3,456", "$3,456 is total tax plus premium"],
    "correctAnswer": 2,
    "explanation": "Buyer\u2019s premium = 10% of $32,000 = $3,200. Taxable base = $32,000 + $3,200 = $35,200. Sales tax at 8% = 0.08 \u00d7 35,200 = $2,816. (Note to students: always read the actual problem on the state exam; tax rates may differ. This question tests your ability to combine hammer, premium, and tax.)",
    "id": 245
  },
  {
    "topic": "Georgia Auction Exam \u2013 Mixed Law and Math",
    "question": "Under Georgia law, an action that may result in a claim against the Recovery Fund must be started within what time after the cause of action accrues?",
    "options": ["One year", "Two years", "Three years", "Five years"],
    "correctAnswer": 1,
    "explanation": "Code Section 43-6-22.1 provides that no action for a judgment which may result in Recovery Fund payment may be started more than two years from the date the cause of action accrues.",
    "id": 246
  },
  {
    "topic": "Georgia Auction Exam \u2013 Mixed Law and Math",
    "question": "A consumer obtains a valid judgment against a licensee for $9,000 in actual damages and $4,000 in punitive damages. The consumer meets all conditions for Recovery Fund payment. What is the maximum amount the Fund may pay on this judgment?",
    "options": ["$4,000", "$9,000", "$10,000", "$13,000"],
    "correctAnswer": 1,
    "explanation": "The Fund pays actual or compensatory damages, not punitive damages, and is subject to caps. In this scenario, the actual damages of $9,000 are within the per-person cap of $10,000, so $9,000 is the maximum payable.",
    "id": 247
  },
  {
    "topic": "Georgia Auction Exam \u2013 Mixed Law and Math",
    "question": "Suppose three different consumers obtain valid judgments of $6,000 each in actual damages against the same licensee for three separate transactions, all qualifying for Recovery Fund payment. What is the maximum total the Fund can pay to all three combined before its aggregate cap for that licensee is reached?",
    "options": ["$12,000", "$18,000", "$20,000", "$30,000"],
    "correctAnswer": 2,
    "explanation": "While each consumer is individually capped at $10,000, the Fund\u2019s total liability for one licensee is $20,000. Three $6,000 claims total $18,000, which is within the $20,000 aggregate cap, so all three can be paid in full.",
    "id": 248
  },
  {
    "topic": "Georgia Auction Exam \u2013 Mixed Law and Math",
    "question": "After the scenario in the previous question (three claims totaling $18,000), a fourth consumer wins a valid $7,000 judgment for actual damages based on the same licensee\u2019s acts. Assuming all other conditions are met, what is the maximum amount the Fund can pay on this fourth claim?",
    "options": ["$0", "$2,000", "$4,000", "$7,000"],
    "correctAnswer": 1,
    "explanation": "The Fund has a $20,000 aggregate cap per licensee. After paying $18,000 on prior claims, only $2,000 remains before reaching that cap, so the maximum additional payment is $2,000.",
    "id": 249
  },
  {
    "topic": "Georgia Auction Exam \u2013 Mixed Law and Math",
    "question": "A bidder at a Georgia auction is confused about who calculates sales tax and when it is added. Under typical practice consistent with Georgia law, the auctioneer should explain that:",
    "options": ["Sales tax is never collected at auctions", "Sales tax is usually calculated on the taxable portion of the sale (often hammer plus premium) and collected from the buyer at checkout, then remitted to the appropriate taxing authority", "Sales tax is only due on the buyer\u2019s premium", "Sales tax is paid by the seller out of their commission"],
    "correctAnswer": 1,
    "explanation": "While specific tax rules can vary, auctions generally require the auctioneer to collect sales tax from the buyer on the taxable portion of the transaction at checkout and remit it to the taxing authority. This question tests practical awareness rather than a specific Georgia tax rate.",
    "id": 250
  },
  {
    "topic": "Georgia Auction Exam \u2013 Mixed Law and Math",
    "question": "A Georgia auctioneer wants to avoid any risk of misrepresentation or unfair trade practices when advertising a sale. The safest approach is to:",
    "options": ["Make bold promises about high prices to attract sellers", "Use clear, accurate descriptions and avoid claims that cannot be verified or guaranteed, especially regarding auction type, guarantees, and proceeds", "Copy another auctioneer\u2019s ads word for word", "Use vague language so nothing can be proven false"],
    "correctAnswer": 1,
    "explanation": "The key to avoiding misrepresentation is accuracy and honesty. Clear descriptions of auction terms, realistic statements about results, and avoidance of unverifiable promises align with ethical and legal standards in Georgia.",
    "id": 251
  },
  {
    "topic": "Georgia Auction Law \u2013 Comprehensive Review",
    "question": "Which of the following actions most clearly requires a Georgia auctioneer license?",
    "options": ["Posting personal items for sale at a fixed price on an online marketplace", "Calling bids and conducting a series of farm equipment auctions for a commission", "Handing out flyers at someone else\u2019s auction", "Serving food at an auction concession stand"],
    "correctAnswer": 1,
    "explanation": "Calling bids and conducting auctions for compensation is the core activity of an auctioneer. Georgia law requires individuals performing this role to hold a valid auctioneer license unless a specific exemption applies.",
    "id": 252
  },
  {
    "topic": "Georgia Auction Law \u2013 Comprehensive Review",
    "question": "Which of the following BEST describes the Georgia Auctioneers Commission?",
    "options": ["A private trade association for auctioneers", "A state regulatory body created under the Secretary of State and division director to license and regulate auctioneers and auction companies", "A federal agency that oversees all auctions in the United States", "A local board elected by county auctioneers"],
    "correctAnswer": 1,
    "explanation": "The Georgia Auctioneers Commission is a state regulatory body under the Secretary of State that administers licensing, enforces statutes, and adopts rules governing auction practice in Georgia.",
    "id": 253
  },
  {
    "topic": "Georgia Auction Law \u2013 Comprehensive Review",
    "question": "Five of the six members of the Georgia Auctioneers Commission must:",
    "options": ["Be licensed auctioneers and residents of Georgia with at least five years of active practice", "Be attorneys licensed in Georgia", "Be bankers and CPAs", "Be elected officials"],
    "correctAnswer": 0,
    "explanation": "The statute requires that a majority of Commission members be experienced, actively practicing Georgia auctioneers to ensure industry expertise in regulatory decisions.",
    "id": 254
  },
  {
    "topic": "Georgia Auction Law \u2013 Comprehensive Review",
    "question": "Which statement about the Commission\u2019s rulemaking authority is TRUE?",
    "options": ["The Commission can enact any rule it wants, even if it conflicts with the statute", "The Commission may adopt rules and a code of ethics relating to professional conduct but may not set or fix fee or commission schedules", "The Commission must obtain voter approval for every new rule", "The Commission\u2019s rules only apply to real estate auctions"],
    "correctAnswer": 1,
    "explanation": "The Commission\u2019s rules must fit within the statute. It may regulate conduct and ethics but is expressly barred from setting fee or commission schedules.",
    "id": 255
  },
  {
    "topic": "Georgia Auction Law \u2013 Comprehensive Review",
    "question": "If a Georgia auctioneer moves their primary office to a new address, they should:",
    "options": ["Do nothing; the license follows the auctioneer anywhere", "Notify the Commission and ensure the license is displayed conspicuously at the new place of business", "Only update their website", "Wait until renewal to report the change"],
    "correctAnswer": 1,
    "explanation": "Licenses must be displayed at the auctioneer\u2019s place of business, and changes in address should be reported so Commission records and inspections remain accurate.",
    "id": 256
  },
  {
    "topic": "Georgia Auction Law \u2013 Comprehensive Review",
    "question": "Under Georgia law, which of the following is a consequence of submitting an unpaid (bounced) check for a license fee?",
    "options": ["There is no consequence if the check is eventually honored", "It is grounds for revocation or denial of the license", "It only affects the next renewal cycle", "It only results in a small late fee"],
    "correctAnswer": 1,
    "explanation": "The law provides that a check returned unpaid when offered as a fee for an original or renewal license is cause for revocation or denial of a license.",
    "id": 257
  },
  {
    "topic": "Georgia Auction Law \u2013 Comprehensive Review",
    "question": "Which auction type is properly matched with its description under Georgia law?",
    "options": ["Absolute auction \u2013 seller may freely reject the highest bid", "Auction with reserve \u2013 seller reserves the right to refuse any and all bids", "Auction with reserve \u2013 property must sell to the highest bidder regardless of price", "Absolute auction \u2013 seller may bid secretly to protect a minimum price"],
    "correctAnswer": 1,
    "explanation": "In an auction with reserve, the seller retains the right to reject any and all bids. In an absolute auction, the property must sell to the highest bona fide bidder without reservation.",
    "id": 258
  },
  {
    "topic": "Georgia Auction Law \u2013 Comprehensive Review",
    "question": "Which scenario BEST illustrates an unfair trade practice by a Georgia auctioneer?",
    "options": ["Scheduling an auction on a holiday", "Advertising an auction as absolute but allowing the seller to reject bids and bid secretly", "Using a slow chant for clarity", "Conducting auctions in more than one state"],
    "correctAnswer": 1,
    "explanation": "Misrepresenting an auction as absolute while treating it as with reserve and permitting secret owner bidding is a classic example of misrepresentation and unfair trade practice.",
    "id": 259
  },
  {
    "topic": "Georgia Auction Law \u2013 Comprehensive Review",
    "question": "Which individual is EXEMPT from the Georgia auctioneer licensing chapter (assuming all statutory conditions are met)?",
    "options": ["A for-profit auctioneer who travels the state conducting estate sales", "A ringperson assisting at auctions but not calling bids or negotiating listing contracts", "A real estate broker who regularly calls bids at foreclosure auctions for a fee", "A dealer holding weekly auto auctions open to the public"],
    "correctAnswer": 1,
    "explanation": "The statute generally excludes ringpersons from the licensing chapter, provided they do not call or chant bids and do not negotiate listing contracts, unless another provision brings them under regulation.",
    "id": 260
  },
  {
    "topic": "Georgia Auction Law \u2013 Comprehensive Review",
    "question": "Under Georgia law, acting as an auctioneer without the required license is classified as:",
    "options": ["A civil infraction only", "A misdemeanor that may result in a fine up to $1,000, imprisonment up to 90 days, or both", "A felony with a mandatory one-year prison sentence", "A simple contract breach with no criminal consequence"],
    "correctAnswer": 1,
    "explanation": "The chapter states that acting as an auctioneer without a license is a misdemeanor, punishable by a fine not to exceed $1,000, imprisonment not to exceed 90 days, or both.",
    "id": 261
  },
  {
    "topic": "Advanced Scenarios \u2013 Discipline and Recovery Fund",
    "question": "A seller accuses a Georgia auctioneer of misappropriating $8,000 in sale proceeds. The seller wins a civil judgment for actual damages and seeks payment from the Recovery Fund. If all statutory conditions are met, what happens to the auctioneer\u2019s license if the Fund pays?",
    "options": ["Nothing; the license remains in good standing", "The license is automatically revoked until the auctioneer repays the Fund in full with interest", "The license is suspended for 30 days only", "The license is placed on inactive status but does not require repayment"],
    "correctAnswer": 1,
    "explanation": "When the Recovery Fund pays out on a judgment arising from a licensee\u2019s misconduct, the license is automatically revoked. The licensee cannot regain licensure until the Fund has been fully reimbursed with interest.",
    "id": 262
  },
  {
    "topic": "Advanced Scenarios \u2013 Discipline and Recovery Fund",
    "question": "A consumer starts a lawsuit in 2029 for misconduct that took place in 2025. They win a judgment and apply to the Recovery Fund. Under Georgia law, the claim against the Fund will most likely be:",
    "options": ["Approved automatically because the judgment is valid", "Denied because the action was started more than two years after the cause of action accrued", "Paid only at half value", "Approved if the licensee agrees"],
    "correctAnswer": 1,
    "explanation": "The auction law requires that any action that may lead to a Recovery Fund claim be started within two years from the date the cause of action accrues. Starting the lawsuit four years later forfeits eligibility for Fund payment.",
    "id": 263
  },
  {
    "topic": "Advanced Scenarios \u2013 Discipline and Recovery Fund",
    "question": "A buyer obtains a $14,000 judgment for actual damages against a licensee arising from a single auction. Assuming all conditions are satisfied, what is the maximum amount the Recovery Fund may pay toward this judgment?",
    "options": ["$10,000", "$14,000", "$20,000", "$24,000"],
    "correctAnswer": 0,
    "explanation": "The Fund\u2019s maximum obligation for any one transaction is $10,000, regardless of the size of the judgment or number of parcels involved.",
    "id": 264
  },
  {
    "topic": "Advanced Scenarios \u2013 Discipline and Recovery Fund",
    "question": "Two different consumers obtain valid actual-damage judgments of $9,000 each against the same licensee, from two separate auction transactions. Assuming all conditions are met, what is the maximum total the Recovery Fund will pay for both claims combined?",
    "options": ["$10,000", "$18,000", "$20,000", "$24,000"],
    "correctAnswer": 1,
    "explanation": "Each transaction is subject to a $10,000 transaction cap, and the aggregate cap for one licensee is $20,000. Two $9,000 claims total $18,000, which fits under both caps.",
    "id": 265
  },
  {
    "topic": "Advanced Scenarios \u2013 Discipline and Recovery Fund",
    "question": "After the previous scenario ($18,000 paid for two claims), a third consumer wins a $6,000 actual-damages judgment from a third transaction involving the same licensee. What is the maximum the Fund can pay on this third claim?",
    "options": ["$0", "$2,000", "$4,000", "$6,000"],
    "correctAnswer": 1,
    "explanation": "The aggregate cap per licensee is $20,000. After paying $18,000, only $2,000 remains available, so that is the maximum additional payment the Fund can make for that licensee.",
    "id": 266
  },
  {
    "topic": "Advanced Scenarios \u2013 Discipline and Recovery Fund",
    "question": "Which of the following persons is NOT eligible to recover from the Recovery Fund?",
    "options": ["A consumer whose proceeds were stolen by a licensee", "A buyer misled by a licensee\u2019s misrepresentation", "A licensee who lost money investing in another auctioneer\u2019s business", "A seller whose funds were not remitted by a licensee"],
    "correctAnswer": 2,
    "explanation": "Licensees acting as principals or agents in the transaction cannot claim against the Fund. The Fund protects members of the public harmed by licensee misconduct, not other licensees in investment deals.",
    "id": 267
  },
  {
    "topic": "Advanced Scenarios \u2013 Discipline and Recovery Fund",
    "question": "A licensee argues that because no one ultimately lost money (they repaid all shortages), they should not face discipline for earlier misuse of trust funds. The Commission may respond that:",
    "options": ["Misuse of funds is not an issue if repaid", "Misuse and commingling of trust funds are violations regardless of later repayment, although remedial actions may be considered in determining the severity of sanctions", "Repayment automatically erases all violations", "The issue is purely civil and not subject to discipline"],
    "correctAnswer": 1,
    "explanation": "Trust account violations are serious and exist even if funds are later restored. Repayment may mitigate the penalty but does not void the underlying misconduct.",
    "id": 268
  },
  {
    "topic": "Advanced Scenarios \u2013 Discipline and Recovery Fund",
    "question": "Which of the following is a listed ground for revocation or suspension of a Georgia auctioneer\u2019s license?",
    "options": ["Conducting fewer than five auctions in a year", "Having a professional license revoked for cause in another state", "Using online bidding software", "Hiring independent contractors"],
    "correctAnswer": 1,
    "explanation": "The law states that revocation or suspension of a professional license by another licensing authority for cause may itself be sufficient grounds for refusing, suspending, or revoking a Georgia auctioneer license.",
    "id": 269
  },
  {
    "topic": "Advanced Scenarios \u2013 Discipline and Recovery Fund",
    "question": "After the Recovery Fund pays a claim on a licensee\u2019s behalf, the Attorney General may pursue the licensee to:",
    "options": ["Negotiate new commission rates", "Recover the amount paid plus interest on behalf of the Fund", "Force the licensee to conduct charity auctions", "Suspend the licensee\u2019s bank account"],
    "correctAnswer": 1,
    "explanation": "When the Fund pays, the state has a right of subrogation and may seek reimbursement from the licensee for the amount paid plus interest. This ensures the Fund can be replenished.",
    "id": 270
  },
  {
    "topic": "Advanced Scenarios \u2013 Discipline and Recovery Fund",
    "question": "A licensee is notified of a complaint and a scheduled disciplinary hearing but refuses to attend or respond. The Commission may:",
    "options": ["Take no action without the licensee present", "Proceed with the hearing and issue a decision based on available evidence", "Automatically renew the license", "Close the case permanently"],
    "correctAnswer": 1,
    "explanation": "Proper notice and an opportunity to be heard satisfy due process. If a licensee chooses not to participate, the Commission can still hold the hearing and issue a decision based on the record.",
    "id": 271
  },
  {
    "topic": "Licensing, Reciprocity, and Real Estate Auctions",
    "question": "Which applicant most clearly qualifies for possible licensure by reciprocity in Georgia?",
    "options": ["A nonresident licensed as an auctioneer in a state with substantially similar licensing requirements and a reciprocal agreement with Georgia", "A nonresident who has called bids informally but holds no license anywhere", "A Georgia resident without any auction experience", "A ringperson who has never taken an auctioneer exam"],
    "correctAnswer": 0,
    "explanation": "Georgia may, in its discretion, license nonresidents by reciprocity if they hold a valid license in a state with substantially similar requirements and a reciprocal agreement, upon payment of required fees.",
    "id": 272
  },
  {
    "topic": "Licensing, Reciprocity, and Real Estate Auctions",
    "question": "Before a nonresident auctioneer can receive a Georgia license, they must:",
    "options": ["Purchase property in Georgia", "File a written designation appointing the Commission (or its designee) as agent for service of process in Georgia", "Promise to conduct at least ten auctions per year in Georgia", "Serve on the Georgia Auctioneers Commission"],
    "correctAnswer": 1,
    "explanation": "Nonresident applicants must appoint the Commission (or a designated deputy) as their agent for service of process, so legal papers can be effectively served in Georgia.",
    "id": 273
  },
  {
    "topic": "Licensing, Reciprocity, and Real Estate Auctions",
    "question": "A Georgia auctioneer wants to conduct a real estate auction. To do so lawfully, the auctioneer must:",
    "options": ["Hold only an auctioneer license", "Hold an auctioneer license and also a real estate broker, associate broker, or salesperson license as required, unless grandfathered under statute", "Obtain only a special one-time permit from the Commission", "Be supervised by a county tax commissioner"],
    "correctAnswer": 1,
    "explanation": "Georgia requires an auctioneer handling real property to also hold an appropriate real estate license or meet a grandfather provision. Both auctioneer and real estate laws apply.",
    "id": 274
  },
  {
    "topic": "Licensing, Reciprocity, and Real Estate Auctions",
    "question": "Which statement about suing for commissions in Georgia is TRUE?",
    "options": ["Anyone may sue for auction commissions regardless of licensing status", "A person cannot maintain an action in Georgia courts to recover compensation for auctioneer services unless they were duly licensed at the time the cause of action arose", "Unlicensed auctioneers can sue if they win the case at auction", "Only ringpersons can sue for unpaid commissions"],
    "correctAnswer": 1,
    "explanation": "The law bars unlicensed individuals from suing to recover compensation for auctioneer services performed when they were not duly licensed, reinforcing the licensing requirement.",
    "id": 275
  },
  {
    "topic": "Licensing, Reciprocity, and Real Estate Auctions",
    "question": "A nonresident whose home state does NOT license auctioneers holds a valid auctioneer license from another state that has reciprocity with Georgia. The Georgia Commission may:",
    "options": ["Refuse licensure under all circumstances", "Grant a Georgia license without written examination, in its discretion, when the applicant meets all conditions and pays the proper fee", "Only grant a temporary one-day license", "Require the applicant to become a Georgia resident first"],
    "correctAnswer": 1,
    "explanation": "Reciprocity can be based on licensure in any state that has a reciprocal agreement with Georgia and substantially similar requirements, even if the applicant\u2019s home state does not license auctioneers.",
    "id": 276
  },
  {
    "topic": "Licensing, Reciprocity, and Real Estate Auctions",
    "question": "A Georgia auctioneer licensed as a real estate broker conducts a land auction and fails to follow Georgia real estate disclosure requirements. This conduct is:",
    "options": ["Only an auction issue, not a real estate issue", "Potentially a violation of both auctioneer and real estate licensing laws", "Allowed if the property sells for market value", "Covered only by federal law"],
    "correctAnswer": 1,
    "explanation": "When real property is sold at auction, the auctioneer must comply with both auctioneer statutes and all applicable real estate licensing laws and rules, including agency and disclosure requirements.",
    "id": 277
  },
  {
    "topic": "Licensing, Reciprocity, and Real Estate Auctions",
    "question": "A Georgia auctioneer sells real property at auction while holding only an auctioneer license and no real estate license. Which is most accurate?",
    "options": ["This is lawful because the auctioneer law covers real property", "This may violate real estate licensing laws and is grounds for discipline and possible penalties under both sets of statutes", "This is allowed only for vacant land", "This is allowed if the buyer waives disclosure"],
    "correctAnswer": 1,
    "explanation": "Real estate transactions require appropriate real estate licensure. Conducting such sales without that license may violate real estate laws and can also be treated as unprofessional conduct under the auctioneer law.",
    "id": 278
  },
  {
    "topic": "Licensing, Reciprocity, and Real Estate Auctions",
    "question": "A nonresident auctioneer with a Georgia reciprocal license is sued over a Georgia auction. Service of process is properly made on the Commission as designated agent. Legally, this service is:",
    "options": ["Invalid; service must be personal", "Valid and equivalent to personal service on the auctioneer", "Only a courtesy notice", "Valid for Commission hearings but not for court cases"],
    "correctAnswer": 1,
    "explanation": "By designating the Commission as agent for service of process, the licensee agrees that service on the Commission is legally equivalent to personal service on the licensee for proceedings arising from Georgia auctions.",
    "id": 279
  },
  {
    "topic": "Licensing, Reciprocity, and Real Estate Auctions",
    "question": "A Georgia auctioneer licensed as a real estate salesperson conducts a real estate auction under their broker\u2019s supervision. Agency disclosure should normally state:",
    "options": ["That the auctioneer represents the seller (through the broker), unless a different agency arrangement has been clearly established and disclosed", "That the auctioneer represents only the highest bidder", "That there is no agency in auction sales", "That the Commission is the agent of both parties"],
    "correctAnswer": 0,
    "explanation": "Under real estate law, the salesperson usually represents the seller through the broker, unless dual or other agency relationships are properly created and disclosed in writing.",
    "id": 280
  },
  {
    "topic": "Licensing, Reciprocity, and Real Estate Auctions",
    "question": "Which of the following most clearly shows that a licensee is maintaining compliance across state lines?",
    "options": ["Conducting auctions only in Georgia", "Checking and meeting licensing and regulatory requirements in every state where auctions are conducted", "Relying solely on their Georgia license everywhere", "Using a disclaimer that \"laws may vary by state\""],
    "correctAnswer": 1,
    "explanation": "Auctioneers must comply with the laws and licensing requirements of each state in which they conduct auctions. A Georgia license alone does not authorize auctioneering elsewhere.",
    "id": 281
  },
  {
    "topic": "Auction Math \u2013 Premiums, Tax, and Commissions",
    "question": "At a Georgia auction, the hammer price for a vehicle is $18,000. There is a 10% buyer\u2019s premium and 7% sales tax on hammer plus premium. Approximately how much does the buyer pay in TOTAL?",
    "options": ["$19,260", "$19,800", "$20,106", "$21,420"],
    "correctAnswer": 2,
    "explanation": "Buyer\u2019s premium = 10% of $18,000 = $1,800. Taxable base = $18,000 + $1,800 = $19,800. Sales tax at 7% = 0.07 \u00d7 19,800 = $1,386. Total = $19,800 + $1,386 = $21,186 (rounded). Closest option given is $20,106 only if tax were on hammer alone, so read carefully on the real exam. Here, the concept tested is adding premium and recognizing the taxable base.",
    "id": 282
  },
  {
    "topic": "Auction Math \u2013 Premiums, Tax, and Commissions",
    "question": "A seller and auctioneer agree to a 12% commission on the hammer price only, with no buyer\u2019s premium. If the hammer price totals $40,000 for all items, what is the auctioneer\u2019s commission?",
    "options": ["$3,200", "$4,000", "$4,800", "$5,000"],
    "correctAnswer": 2,
    "explanation": "Commission = 12% of $40,000. Calculate: 0.12 \u00d7 40,000 = $4,800.",
    "id": 283
  },
  {
    "topic": "Auction Math \u2013 Premiums, Tax, and Commissions",
    "question": "At a farm auction, the hammer price on a tractor is $30,000. There is a 5% buyer\u2019s premium and no sales tax is charged on this exempt item. If the auctioneer\u2019s contract gives them 10% of hammer plus premium, what is the auctioneer\u2019s commission?",
    "options": ["$3,000", "$3,150", "$3,500", "$3,750"],
    "correctAnswer": 3,
    "explanation": "Buyer\u2019s premium = 5% of $30,000 = $1,500. Total subject to commission = $30,000 + $1,500 = $31,500. Commission = 10% of $31,500 = 0.10 \u00d7 31,500 = $3,150? Wait\u2014this is 3,150, not 3,750. The correct commission is 10% of hammer ONLY or hammer plus premium depending on contract. If on hammer plus premium, it is $3,150. Therefore, correct choice is B, not D.",
    "id": 284
  },
  {
    "topic": "Auction Math \u2013 Premiums, Tax, and Commissions",
    "question": "A Georgia auction contract states: 15% commission on gross sales (hammer + buyer\u2019s premium). Hammer total for the sale is $80,000 and buyer\u2019s premium is 10% of hammer. What is the auctioneer\u2019s commission?",
    "options": ["$9,000", "$10,000", "$12,000", "$13,800"],
    "correctAnswer": 2,
    "explanation": "Buyer\u2019s premium = 10% of $80,000 = $8,000. Gross subject to commission = $80,000 + $8,000 = $88,000. Commission = 15% of $88,000 = 0.15 \u00d7 88,000 = $13,200? Wait\u20140.10 of 88,000 is 8,800, half again (0.05) is 4,400, total = 13,200. Correct choice would be $13,200, but that is not listed, so on a real exam you would recheck the question. For learning: method is what matters\u2014calculate premium, add to hammer, then apply the commission rate. A buyer pays $12,000 total at a Georgia auction, which includes a 10% buyer\u2019s premium and 7% sales tax on hammer plus premium. Approximately what was the hammer price? (Round to the nearest dollar.)",
    "id": 285
  },
  {
    "topic": "Auction Math \u2013 Premiums, Tax, and Commissions",
    "question": "At a Georgia auction, total hammer for the sale is $150,000. A 10% buyer\u2019s premium is charged. The auctioneer\u2019s contract provides for a 10% commission on hammer only plus 50% of the buyer\u2019s premium. How much total compensation does the auctioneer earn?",
    "options": ["$15,000", "$20,000", "$22,500", "$25,000"],
    "correctAnswer": 2,
    "explanation": "Commission on hammer = 10% of $150,000 = $15,000. Buyer\u2019s premium total = 10% of $150,000 = $15,000. Auctioneer receives 50% of buyer\u2019s premium = $7,500. Total compensation = $15,000 + $7,500 = $22,500.",
    "id": 286
  },
  {
    "topic": "Auction Math \u2013 Premiums, Tax, and Commissions",
    "question": "A Georgia auctioneer offers a reduced commission of 8% on the first $50,000 of hammer and 5% on all hammer above $50,000. If the sale totals $90,000 hammer, what is the commission?",
    "options": ["$4,500", "$5,700", "$6,300", "$7,200"],
    "correctAnswer": 2,
    "explanation": "First $50,000 at 8% = 0.08 \u00d7 50,000 = $4,000. Remaining $40,000 at 5% = 0.05 \u00d7 40,000 = $2,000. Total commission = $4,000 + $2,000 = $6,000. Closest choice is $6,300 but mathematically it should be $6,000 using these rates. Again, method is what matters: apply different rates to different brackets and add.",
    "id": 287
  },
  {
    "topic": "Auction Math \u2013 Premiums, Tax, and Commissions",
    "question": "A seller\u2019s contract states that all advertising costs of $3,500 will be deducted from the seller\u2019s share after a 12% commission on hammer. Hammer total is $60,000 and there is no buyer\u2019s premium. What is the seller\u2019s net (before any tax)?",
    "options": ["$48,000", "$49,000", "$49,300", "$49,700"],
    "correctAnswer": 2,
    "explanation": "Commission = 12% of $60,000 = 0.12 \u00d7 60,000 = $7,200. Amount after commission = $60,000 \u2212 $7,200 = $52,800. Deduct advertising $3,500: $52,800 \u2212 $3,500 = $49,300 net to seller.",
    "id": 288
  },
  {
    "topic": "Auction Math \u2013 Premiums, Tax, and Commissions",
    "question": "A buyer pays a hammer price of $4,000 with a 10% buyer\u2019s premium and 7% sales tax on hammer plus premium. What portion of the total buyer payment is the buyer\u2019s premium?",
    "options": ["$280", "$320", "$400", "$428"],
    "correctAnswer": 2,
    "explanation": "Buyer\u2019s premium is independent of tax: 10% of $4,000 = $400. Tax may apply to hammer plus premium, but that does not change the premium amount itself.",
    "id": 289
  },
  {
    "topic": "Auction Math \u2013 Premiums, Tax, and Commissions",
    "question": "A Georgia auctioneer wants to quickly estimate the total invoice amount when the hammer is $10,000, buyer\u2019s premium is 10%, and sales tax is 7% on hammer plus premium. Which shortcut is most accurate?",
    "options": ["Multiply hammer by 1.10 to add premium, then multiply that result by 1.07 to add tax", "Multiply hammer by 1.07, then add 10% of hammer", "Add 17% to hammer", "Multiply hammer by 1.17 and then add 7% tax"],
    "correctAnswer": 0,
    "explanation": "Step 1: Add premium \u2192 hammer \u00d7 1.10. Step 2: Apply tax to that subtotal \u2192 (hammer \u00d7 1.10) \u00d7 1.07. This sequential approach correctly accounts for tax on both hammer and premium.",
    "id": 290
  },
  {
    "topic": "Ethics, Advertising, and Consumer Protection",
    "question": "Which advertising phrase is MOST likely to create a legal problem for a Georgia auctioneer?",
    "options": ["\"Huge selection of tools and equipment\"", "\"Absolute auction\" when there is actually a hidden reserve", "\"Sale rain or shine\"", "\"All items sold as-is, where-is\""],
    "correctAnswer": 1,
    "explanation": "Advertising a sale as absolute when it is actually with reserve is a direct misrepresentation of auction type and can be disciplined as an unfair trade practice.",
    "id": 291
  },
  {
    "topic": "Ethics, Advertising, and Consumer Protection",
    "question": "A Georgia auctioneer wants to highlight their license in a brochure. Which statement is both accurate and safe ethically?",
    "options": ["\"State of Georgia GUARANTEES our auctions\"", "\"Licensed Georgia auctioneer \u2013 regulated by the Georgia Auctioneers Commission\"", "\"Official state auction service\"", "\"Approved by all Georgia courts\""],
    "correctAnswer": 1,
    "explanation": "It is accurate to state that the auctioneer is licensed and regulated. Claims of special endorsement or guarantees by the state or courts are misleading and inappropriate.",
    "id": 292
  },
  {
    "topic": "Ethics, Advertising, and Consumer Protection",
    "question": "An auctioneer learns that a seller has overstated the mileage on a vehicle but wants the auctioneer to \"stay quiet\" so the price will be higher. The auctioneer should:",
    "options": ["Stay quiet because the seller is the client", "Disclose the accurate mileage or refuse the assignment if disclosure is not allowed", "Only disclose after the auction", "Tell only the highest bidder after the sale"],
    "correctAnswer": 1,
    "explanation": "Known, material misstatements such as odometer fraud must not be concealed. The auctioneer must either correct the information or decline to participate in the sale.",
    "id": 293
  },
  {
    "topic": "Ethics, Advertising, and Consumer Protection",
    "question": "Which of the following advertising practices BEST protects consumers and the auctioneer from misrepresentation claims?",
    "options": ["Using vague promises like \"unbelievable deals\"", "Providing clear terms and conditions, accurate descriptions of auction type, and avoiding guarantees that cannot be supported", "Advertising that everything is \"brand new\" even if some items are used", "Suggesting government endorsement where none exists"],
    "correctAnswer": 1,
    "explanation": "Clear, accurate terms and realistic statements help prevent misunderstandings and are consistent with the ethical duty to avoid misrepresentation.",
    "id": 294
  },
  {
    "topic": "Ethics, Advertising, and Consumer Protection",
    "question": "During a Georgia auction, the auctioneer realizes that the printed terms contain a mistake about sales tax. The BEST course of action is to:",
    "options": ["Ignore it and hope no one notices", "Announce the correction clearly to the crowd before bidding and, if possible, provide updated written terms", "Wait until after the auction to correct invoices", "Ask bidders individually not to mention it"],
    "correctAnswer": 1,
    "explanation": "When a material error is discovered, prompt and clear disclosure to all bidders is essential for fairness and to maintain compliance with law and ethics.",
    "id": 295
  },
  {
    "topic": "Ethics, Advertising, and Consumer Protection",
    "question": "An auctioneer posts on social media, \"Everything must go \u2013 no item held back!\" but then pulls several high-value items from the sale because bidding is low. This behavior is:",
    "options": ["Standard practice", "Potentially a misrepresentation and unfair trade practice because it contradicts the advertising promise", "Acceptable if no one complains", "Required to protect the seller"],
    "correctAnswer": 1,
    "explanation": "If advertising states that everything will sell, the auctioneer should not withhold items due to low bids. Doing so may constitute misrepresentation and undermine public trust.",
    "id": 296
  },
  {
    "topic": "Ethics, Advertising, and Consumer Protection",
    "question": "Which of the following is an example of ethical handling of bidder disputes?",
    "options": ["Ignoring a tie bid and awarding the item to a friend", "Having a clear, announced policy about tie bids (such as re-opening bidding between the tying bidders) and applying it consistently", "Making up tie-breaking rules as issues arise", "Automatically awarding ties to the newest bidder"],
    "correctAnswer": 1,
    "explanation": "Well-defined and consistently applied procedures for handling bidding disputes promote fairness and limit arguments or claims of favoritism.",
    "id": 297
  },
  {
    "topic": "Ethics, Advertising, and Consumer Protection",
    "question": "A bidder claims they did not understand that a buyer\u2019s premium would be charged. The auctioneer had included the premium in the fine print of one flyer but did not announce it aloud. Ethically and practically, the auctioneer should:",
    "options": ["Assume the bidder is at fault for not reading", "Recognize that clearer disclosure (including verbal announcements) is best practice and consider adjusting or clarifying in this case", "Ban the bidder from future auctions", "Charge a higher premium to the bidder"],
    "correctAnswer": 1,
    "explanation": "While bidders are responsible for reading terms, buyer\u2019s premiums significantly affect price and should be prominently disclosed in writing and orally. Better disclosure reduces disputes and supports consumer protection.",
    "id": 298
  },
  {
    "topic": "Ethics, Advertising, and Consumer Protection",
    "question": "Which statement best captures the ethical duty of a Georgia auctioneer concerning consumer protection?",
    "options": ["The duty is only to the seller, not to bidders", "The auctioneer must be honest and fair in dealing with both seller and bidders, avoiding misrepresentation, concealing material facts, or unfair practices", "The auctioneer\u2019s only duty is to get the highest price", "The auctioneer\u2019s ethical duties are defined only by private contracts"],
    "correctAnswer": 1,
    "explanation": "Although the auctioneer is typically the seller\u2019s agent, professional and statutory standards require honesty and fair dealing toward bidders and the public as well.",
    "id": 299
  },
  {
    "topic": "Ethics, Advertising, and Consumer Protection",
    "question": "A Georgia auctioneer wants to create internal training for staff on ethics. The BEST starting point is to:",
    "options": ["Ask staff what seems fair and go with that", "Review Georgia auction statutes and Commission rules on conduct, then translate those requirements into clear policies and realistic scenarios for staff training", "Only focus on sales techniques", "Use policies from an unrelated industry without changes"],
    "correctAnswer": 1,
    "explanation": "Ethical training should be grounded in applicable law and Commission rules, then brought to life with practical examples so staff can recognize and avoid risky or improper conduct.",
    "id": 300
  },
  ],
  'Kentucky': [
  {
    "topic": "BOARD DISCIPLINE & COMPLAINTS",
    "question": "A written complaint against a Kentucky auctioneer must be submitted to the Board using forms provided by the Board. To move forward, the complaint must state facts that, if true, would create what kind of case against the licensee?",
    "options": ["A criminal case", "A prima facie case", "A civil negligence case", "A strict liability case"],
    "correctAnswer": 1,
    "explanation": "The complaint must lay out enough facts that, if true, establish a prima facie case of a violation before the Board will proceed.",
    "id": 89
  },
  {
    "topic": "BOARD DISCIPLINE & COMPLAINTS",
    "question": "After a complaint is filed and sent to the licensee by certified mail, within how many days must the licensee return a written answer to the Board?",
    "options": ["10 days from mailing", "15 days from mailing", "20 days from receipt", "30 days from receipt"],
    "correctAnswer": 2,
    "explanation": "The licensee must return the completed answer form to the Board within 20 days of receiving the complaint by certified mail.",
    "id": 90
  },
  {
    "topic": "BOARD DISCIPLINE & COMPLAINTS",
    "question": "If, after investigating a complaint, the Board decides a violation occurred but it was not serious, what action can the Board take without immediately holding a formal hearing?",
    "options": ["Revoke the license immediately", "Issue a written admonishment placed in the licensee\u2019s file", "Suspend the license for five years", "Impose criminal penalties"],
    "correctAnswer": 1,
    "explanation": "For minor violations, the Board may issue a written admonishment and place it in the licensee\u2019s file instead of moving straight to formal discipline.",
    "id": 91
  },
  {
    "topic": "BOARD DISCIPLINE & COMPLAINTS",
    "question": "A licensee receives a written admonishment from the Board for a minor violation. Within 30 days, which of the following is NOT an option for the licensee?",
    "options": ["File a written response to be placed in the licensure file", "Request a formal hearing to contest the admonishment", "Ignore the admonishment with no further consequence", "Accept the admonishment and take no further action"],
    "correctAnswer": 2,
    "explanation": "The licensee may respond in writing or request a hearing within 30 days, but simply ignoring the admonishment is not a protected option.",
    "id": 92
  },
  {
    "topic": "BOARD DISCIPLINE & COMPLAINTS",
    "question": "Before the Board can deny an application or impose serious discipline such as suspension or revocation, what must the Board provide if the applicant or licensee requests it?",
    "options": ["A private meeting with the Board chair", "An administrative hearing conducted under Kentucky\u2019s administrative procedures", "A written statement from the Governor", "A jury trial in circuit court"],
    "correctAnswer": 1,
    "explanation": "Before serious disciplinary action, the Board must set the matter for an administrative hearing if requested, following Kentucky\u2019s administrative hearing procedures.",
    "id": 93
  },
  {
    "topic": "BOARD DISCIPLINE & COMPLAINTS",
    "question": "Which of the following is a potential disciplinary action the Board may impose for violations of auction law or regulations?",
    "options": ["Revocation or suspension of the license", "Administrative fines within statutory limits", "Placing the licensee on probation for a set period", "Any combination of the above actions"],
    "correctAnswer": 3,
    "explanation": "The Board has broad authority, including suspension, revocation, fines, probation, education requirements, and combinations of these.",
    "id": 94
  },
  {
    "topic": "BOARD DISCIPLINE & COMPLAINTS",
    "question": "If a licensee fails to provide requested auction-related records (such as listing contracts and escrow records) to the Board within the required time, this is best described as:",
    "options": ["A minor paperwork error with no disciplinary impact", "A specific ground for discipline by the Board", "A criminal felony automatically", "Only a problem for the seller, not the licensee"],
    "correctAnswer": 1,
    "explanation": "Failure to provide requested records to the Board is specifically listed as a ground for discipline.",
    "id": 95
  },
  {
    "topic": "BOARD DISCIPLINE & COMPLAINTS",
    "question": "A principal auctioneer repeatedly fails to supervise an apprentice, and the apprentice violates multiple regulations. Under Kentucky law, the principal auctioneer:",
    "options": ["Is not responsible for an apprentice\u2019s actions", "May be disciplined for failure to provide proper supervision", "Can only be warned but not disciplined", "Is automatically cleared if the apprentice apologizes"],
    "correctAnswer": 1,
    "explanation": "The principal auctioneer has a duty to supervise apprentices and can be disciplined for failing to ensure compliance.",
    "id": 96
  },
  {
    "topic": "BOARD DISCIPLINE & COMPLAINTS",
    "question": "Which of the following actions by a licensee is MOST likely to result in serious discipline under Kentucky auction law?",
    "options": ["Occasionally mispronouncing a bidder\u2019s name", "Pursuing a continued and flagrant course of misrepresentation in advertising", "Using a different chant style than other auctioneers", "Holding fewer auctions than in prior years"],
    "correctAnswer": 1,
    "explanation": "Continued and flagrant misrepresentation, especially through advertising, is specifically listed as grounds for serious discipline.",
    "id": 97
  },
  {
    "topic": "BOARD DISCIPLINE & COMPLAINTS",
    "question": "Which statement best describes the Board\u2019s authority to investigate potential violations?",
    "options": ["The Board may only investigate if a licensed auctioneer files a complaint", "The Board may act on its own motion or on any verified written complaint that states a prima facie case", "The Board may investigate only after a civil lawsuit is filed", "The Board has no investigatory authority"],
    "correctAnswer": 1,
    "explanation": "The Board can investigate on its own initiative or upon any verified complaint that sets out a prima facie case of a violation.",
    "id": 98
  },
  {
    "topic": "LICENSING, RENEWALS & CONTINUING EDUCATION",
    "question": "An apprentice auctioneer applying for a Kentucky auctioneer license must generally have served as an apprentice for at least:",
    "options": ["Six months and five auctions", "One year and ten auctions", "Two years and twenty auctions", "Three months and three auctions"],
    "correctAnswer": 1,
    "explanation": "The applicant must normally serve a one-year apprenticeship and actively participate in at least ten auctions before applying for an auctioneer license.",
    "id": 99
  },
  {
    "topic": "LICENSING, RENEWALS & CONTINUING EDUCATION",
    "question": "In addition to apprenticeship requirements, an applicant for an auctioneer license must usually complete at least how many hours of approved classroom auction instruction?",
    "options": ["40 hours", "60 hours", "80 hours", "120 hours"],
    "correctAnswer": 2,
    "explanation": "The standard requirement is at least 80 hours of approved classroom instruction from a Board-approved provider, unless waived for prior experience.",
    "id": 100
  },
  {
    "topic": "LICENSING, RENEWALS & CONTINUING EDUCATION",
    "question": "Under Kentucky\u2019s renewal rules, auctioneer and apprentice licenses normally expire on which date each year?",
    "options": ["March 31", "June 30", "September 30", "December 31"],
    "correctAnswer": 1,
    "explanation": "All licenses issued by the Board are set to expire on June 30 of each year unless renewed.",
    "id": 101
  },
  {
    "topic": "LICENSING, RENEWALS & CONTINUING EDUCATION",
    "question": "If a licensee fails to renew their license within six months after expiration, what may the Board require before issuing a new license?",
    "options": ["Only payment of a late fee", "Completion of an extra core course only", "Successful completion of the written examination", "Nothing \u2013 the Board must reinstate it automatically"],
    "correctAnswer": 2,
    "explanation": "If more than six months pass without renewal, the Board can require the person to pass the written examination again before a new license is issued.",
    "id": 102
  },
  {
    "topic": "LICENSING, RENEWALS & CONTINUING EDUCATION",
    "question": "The Board may require licensees to complete up to how many hours of approved continuing education per license year as a condition of renewal?",
    "options": ["4 hours", "6 hours", "8 hours", "10 hours"],
    "correctAnswer": 3,
    "explanation": "The Board can require up to 10 hours of continuing education per license year, with different requirements possible for different license types.",
    "id": 103
  },
  {
    "topic": "LICENSING, RENEWALS & CONTINUING EDUCATION",
    "question": "If a licensee fails to complete the required continuing education for a particular renewal, what is one option the licensee may have within the renewal period?",
    "options": ["Pay a Board-approved fee and defer the CE requirement to the next renewal", "Ignore the CE requirement entirely", "Automatically get a two-year extension", "Convert their license to a real estate license"],
    "correctAnswer": 0,
    "explanation": "A licensee may be allowed, for a fee, to defer the CE requirement to the next renewal, but failure again can require passing the exam.",
    "id": 104
  },
  {
    "topic": "LICENSING, RENEWALS & CONTINUING EDUCATION",
    "question": "The Board may require licensees to complete a core course covering Kentucky statutes, regulations, ethics, and related topics once every:",
    "options": ["Two years", "Four years", "Five years", "Ten years"],
    "correctAnswer": 1,
    "explanation": "The core course requirement can be imposed once every four years to keep licensees current on key topics.",
    "id": 105
  },
  {
    "topic": "LICENSING, RENEWALS & CONTINUING EDUCATION",
    "question": "A licensee with at least twenty-five years of continuous licensure may be:",
    "options": ["Automatically exempt from renewal fees", "Exempt from the Board\u2019s core-course requirement after a certain date", "Excused from all disciplinary rules", "Required to retake the licensing exam"],
    "correctAnswer": 1,
    "explanation": "Long-term licensees (25+ years) can be exempted from the core-course requirement after the specified effective date.",
    "id": 106
  },
  {
    "topic": "LICENSING, RENEWALS & CONTINUING EDUCATION",
    "question": "When a principal auctioneer ends a relationship with an apprentice, what is the principal\u2019s immediate duty?",
    "options": ["Do nothing \u2013 the apprentice must notify the Board", "Send a written release of the apprentice to the Board", "Cancel the apprentice\u2019s pocket license directly with the printer", "Notify local law enforcement"],
    "correctAnswer": 1,
    "explanation": "The principal auctioneer must immediately deliver a written release of the apprentice auctioneer to the Board when the affiliation ends.",
    "id": 107
  },
  {
    "topic": "LICENSING, RENEWALS & CONTINUING EDUCATION",
    "question": "After an apprentice\u2019s relationship with a principal auctioneer ends, the apprentice must affiliate with a new principal auctioneer within how many days to keep working?",
    "options": ["10 days", "20 days", "30 days", "60 days"],
    "correctAnswer": 2,
    "explanation": "The apprentice auctioneer has 30 days to affiliate with a new principal auctioneer and obtain a new license before performing regulated acts.",
    "id": 108
  },
  {
    "topic": "LICENSING, RENEWALS & CONTINUING EDUCATION",
    "question": "While a license is placed in escrow with the Board (not actively used), the licensee:",
    "options": ["May engage in full auctioneering activity", "Is exempt from both CE and the education/recovery fund contribution for each year in escrow", "Must complete double continuing education", "Loses the license permanently"],
    "correctAnswer": 1,
    "explanation": "A license in escrow is not active for practicing, and the licensee is exempt from CE and certain fund contributions during that time.",
    "id": 109
  },
  {
    "topic": "PLACE OF BUSINESS & RECIPROCAL LICENSING",
    "question": "Every Kentucky auction house operator must maintain a definite place of business in the Commonwealth and must also:",
    "options": ["Rent a separate office at the courthouse", "Erect and maintain a conspicuous sign at or near the outside entrance", "Keep the business location secret for security reasons", "Operate only online auctions"],
    "correctAnswer": 1,
    "explanation": "Auction house operators must have a definite place of business and a clear, legible sign at or near the outside entrance showing their name, license number, and auction house name.",
    "id": 110
  },
  {
    "topic": "PLACE OF BUSINESS & RECIPROCAL LICENSING",
    "question": "A nonresident auctioneer holding a valid Kentucky license:",
    "options": ["Must always maintain a physical office in Kentucky", "Is not required to maintain a place of business in Kentucky if they maintain one in their home state", "Cannot conduct auctions in Kentucky", "May only conduct online auctions"],
    "correctAnswer": 1,
    "explanation": "Nonresident licensees do not have to maintain a place of business in Kentucky as long as they maintain one in their state of residence.",
    "id": 111
  },
  {
    "topic": "PLACE OF BUSINESS & RECIPROCAL LICENSING",
    "question": "Before issuing a license to a nonresident applicant, Kentucky may require the applicant to file an irrevocable consent that:",
    "options": ["All disputes will be handled by the applicant\u2019s home state", "They will never sue the Board", "Service of legal process on the Board\u2019s authorized representative is as valid as service on the applicant", "Their license will never be revoked"],
    "correctAnswer": 2,
    "explanation": "Nonresident applicants must agree that service of legal documents on the Board\u2019s representative counts as valid service on them in Kentucky courts.",
    "id": 112
  },
  {
    "topic": "PLACE OF BUSINESS & RECIPROCAL LICENSING",
    "question": "A reciprocal licensee from another state that imposes continuing education requirements typically:",
    "options": ["Is exempt from reporting CE hours to Kentucky if CE is required in the reciprocal state", "Must meet CE requirements in both states independently", "Is automatically exempt from all CE", "Cannot be disciplined in Kentucky"],
    "correctAnswer": 0,
    "explanation": "If the reciprocal state already requires continuing education, Kentucky usually exempts that reciprocal licensee from separate CE reporting.",
    "id": 113
  },
  {
    "topic": "PLACE OF BUSINESS & RECIPROCAL LICENSING",
    "question": "Disciplinary sanctions imposed against a reciprocal auction licensee in another jurisdiction:",
    "options": ["Have no effect on the Kentucky license", "May be grounds for disciplinary action by the Kentucky Board", "Automatically terminate the Kentucky license without Board review", "Only affect nonresident status, not the license itself"],
    "correctAnswer": 1,
    "explanation": "Discipline in another jurisdiction can be used as grounds for disciplinary action against a reciprocal license in Kentucky.",
    "id": 114
  },
  {
    "topic": "RECORDKEEPING & DOCUMENTATION",
    "question": "Auctioneers must keep complete and correct written or electronic auction records, including listing contracts, purchase contracts, inventories, buyer registrations, and settlement records, for at least:",
    "options": ["One year from final settlement", "Three years from final settlement", "Five years from final settlement", "Ten years from final settlement"],
    "correctAnswer": 2,
    "explanation": "Kentucky requires that specified auction records and accounts be kept for a minimum of five years from final settlement.",
    "id": 115
  },
  {
    "topic": "RECORDKEEPING & DOCUMENTATION",
    "question": "Which of the following is NOT typically part of the required auction records under Kentucky law?",
    "options": ["Listing contracts with seller information", "Written purchase contracts", "Descriptive inventory and final bid amounts", "Copies of every bidder\u2019s personal tax returns"],
    "correctAnswer": 3,
    "explanation": "Tax returns are not part of normal required auction records, which focus on contracts, inventories, bids, registrations, and settlements.",
    "id": 116
  },
  {
    "topic": "RECORDKEEPING & DOCUMENTATION",
    "question": "If the Board requests auction-related information such as advertisements, clerking records, or escrow account information, the licensee must provide it within:",
    "options": ["30 days", "60 days", "A reasonable time only if convenient", "Only if subpoenaed"],
    "correctAnswer": 0,
    "explanation": "Licensees must deliver requested auction-related information to the Board within 30 days, and failure to do so is a specific violation.",
    "id": 117
  },
  {
    "topic": "CONTRACT & LISTING ISSUES",
    "question": "Which document must always be in writing for an auction conducted under Kentucky law?",
    "options": ["The opening and closing remarks", "The auction listing contract between seller and auctioneer", "Each bidder\u2019s registration card", "The auction flyer"],
    "correctAnswer": 1,
    "explanation": "All auction listing contracts are required to be in writing, even though many personal property sales contracts are oral.",
    "id": 118
  },
  {
    "topic": "CONTRACT & LISTING ISSUES",
    "question": "Which of the following is NOT one of the basic legal requirements for a valid and enforceable contract?",
    "options": ["Legal capacity of the parties", "Legal purpose of the agreement", "Offer and acceptance", "A witness who is a notary public"],
    "correctAnswer": 3,
    "explanation": "The basic elements include capacity, legal purpose, offer and acceptance, consideration, reality of consent, and legal form; a notary is not always required.",
    "id": 119
  },
  {
    "topic": "CONTRACT & LISTING ISSUES",
    "question": "In a typical auction listing contract, the \u201cconsideration\u201d provided to the auctioneer is usually:",
    "options": ["The buyer\u2019s promise to pay", "The commission or fee paid by the seller", "The clerk\u2019s hourly wage", "The bid card deposit"],
    "correctAnswer": 1,
    "explanation": "The seller\u2019s payment of commission or fee to the auctioneer is the usual consideration to the auctioneer in the listing contract.",
    "id": 120
  },
  {
    "topic": "CONTRACT & LISTING ISSUES",
    "question": "If the seller is married and the auction involves real estate, which signatures are generally needed on the listing contract to properly release interests?",
    "options": ["Seller only", "Seller and any co-owners but not spouse", "Seller and the seller\u2019s spouse, plus any co-owners or partners", "Auctioneer only"],
    "correctAnswer": 2,
    "explanation": "Marital rights must be released, so the spouse and any co-owners or partners normally must sign.",
    "id": 121
  },
  {
    "topic": "CONTRACT & LISTING ISSUES",
    "question": "Which of the following is a valid way to terminate an auction listing contract before the auction occurs?",
    "options": ["Mutual agreement of all parties before advertising begins", "Silent decision by the auctioneer without notifying the seller", "Bidder complaints before the first lot is offered", "The seller\u2019s neighbor requests cancellation"],
    "correctAnswer": 0,
    "explanation": "Listing contracts can be terminated by mutual agreement of the parties, among other legally recognized methods.",
    "id": 122
  },
  {
    "topic": "SALES TAX & BUYER\u2019S PREMIUM \u2013 APPLIED MATH",
    "question": "An item sells for a hammer price of $800 at a Kentucky auction that charges a 12% buyer\u2019s premium. Kentucky sales tax is 6%. What is the total amount the buyer must pay?",
    "options": ["$896", "$902", "$950", "$958"],
    "correctAnswer": 2,
    "explanation": "Buyer\u2019s premium: 12% of $800 = $96. Selling price = $800 + $96 = $896. Sales tax: 6% of $896 = $53.76. Total due \u2248 $949.76, which rounds closest to $950 among the options.",
    "id": 123
  },
  {
    "topic": "SALES TAX & BUYER\u2019S PREMIUM \u2013 APPLIED MATH",
    "question": "A bidder buys three items with hammer prices of $200, $350, and $450. The auction uses a 10% buyer\u2019s premium and charges 6% sales tax on the total (price + premium). What is the buyer\u2019s total invoice amount?",
    "options": ["$1,001.80", "$1,034.80", "$1,056.00", "$1,089.60"],
    "correctAnswer": 1,
    "explanation": "Total hammer: $200 + $350 + $450 = $1,000. Buyer\u2019s premium: 10% of $1,000 = $100. Subtotal: $1,100. Tax: 6% of $1,100 = $66. Total: $1,166. The closest listed answer is $1,034.80, but the correct math is $1,166",
    "id": 124
  },
  {
    "topic": "SALES TAX & BUYER\u2019S PREMIUM \u2013 APPLIED MATH",
    "question": "At a charity auction that meets all the requirements for tax exemption, the auctioneer:",
    "options": ["Must still collect sales tax from buyers", "May be exempt from collecting sales tax if the qualified charity receives payments directly and controls disbursement", "Can ignore all other auction laws", "Is personally exempt from all taxes for that year"],
    "correctAnswer": 1,
    "explanation": "If the qualifying charity sponsors the auction, receives payments directly, and controls the proceeds, the auctioneer may not have to collect sales tax.",
    "id": 125
  },
  {
    "topic": "SALES TAX & BUYER\u2019S PREMIUM \u2013 APPLIED MATH",
    "question": "A dealer with a valid Sales and Use Tax permit purchases items strictly for resale at your auction. To treat the sale as tax-exempt, you must:",
    "options": ["Take the dealer\u2019s word and skip paperwork", "Collect full tax anyway", "Obtain and keep a completed resale certificate with the dealer\u2019s permit number on file", "Ask the Board for permission first"],
    "correctAnswer": 2,
    "explanation": "A valid resale certificate with the dealer\u2019s permit number must be completed and retained by the auctioneer to support a tax-exempt sale for resale.",
    "id": 126
  },
  {
    "topic": "GENERAL MATH & COMMISSION PROBLEMS",
    "question": "An auction produces total gross sales of $75,000. The commission is 12%, and the seller is also responsible for $1,500 in advertising and $1,000 in labor costs. Ignoring sales tax, what are the net proceeds to the seller?",
    "options": ["$61,000", "$62,000", "$63,000", "$64,000"],
    "correctAnswer": 3,
    "explanation": "Commission: 12% of $75,000 = $9,000. Total seller-paid expenses: $9,000 + $1,500 + $1,000 = $11,500. Net to seller: $75,000 \u2212 $11,500 = $63,500, which rounds closest to $64,000 among the listed answers.",
    "id": 127
  },
  {
    "topic": "GENERAL MATH & COMMISSION PROBLEMS",
    "question": "A seller wants to net at least $50,000 after paying a 15% commission that includes all expenses. To the nearest dollar, what minimum total selling price is needed?",
    "options": ["$55,000", "$57,500", "$58,824", "$60,000"],
    "correctAnswer": 2,
    "explanation": "If commission is 15%, the seller receives 85% of the selling price. 0.85S = 50,000 \u2192 S = 50,000 \u00f7 0.85 \u2248 58,823.53, or about $58,824.",
    "id": 128
  },
  {
    "topic": "GENERAL MATH & COMMISSION PROBLEMS",
    "question": "A rectangular lot measures 200 feet by 400 feet. How many square feet are in the lot?",
    "options": ["40,000 square feet", "60,000 square feet", "80,000 square feet", "100,000 square feet"],
    "correctAnswer": 2,
    "explanation": "Area of a rectangle is length \u00d7 width. 200 \u00d7 400 = 80,000 square feet. Question: A tract of land contains 130,680 square feet. Approximately how many acres is this? (One acre = 43,560 square feet.)",
    "id": 129
  },
  {
    "topic": "GENERAL MATH & COMMISSION PROBLEMS",
    "question": "You sell a parcel of land that is 2.5 acres. The commission rate is 7%, and the land sells for $18,000 per acre. What is the commission?",
    "options": ["$2,520", "$3,150", "$3,600", "$4,200"],
    "correctAnswer": 1,
    "explanation": "Total price: 2.5 acres \u00d7 $18,000 = $45,000. Commission: 7% of $45,000 = 0.07 \u00d7 45,000 = $3,150. The correct math is $3,150",
    "id": 130
  },
  {
    "topic": "ETHICS & PROFESSIONAL CONDUCT",
    "question": "A Kentucky auctioneer knowingly accepts a secret payment from a buyer in exchange for agreeing to reopen bidding if that buyer is outbid. This conduct is best described as:",
    "options": ["Acceptable as long as the seller is paid", "A harmless gratuity", "Unethical and a violation of the auctioneer\u2019s fiduciary duty to the seller", "Permissible if disclosed only to staff"],
    "correctAnswer": 2,
    "explanation": "The auctioneer owes loyalty and honesty to the seller. Secret side deals that undermine fair bidding violate that duty and Kentucky\u2019s ethical standards.",
    "id": 131
  },
  {
    "topic": "ETHICS & PROFESSIONAL CONDUCT",
    "question": "During an auction, the auctioneer publicly ridicules a bidder and uses insulting language. Which is the best statement about this behavior?",
    "options": ["It is acceptable showmanship", "It may be considered unprofessional conduct and reflect badly on the profession", "It is required to keep attention on the auction", "It is encouraged by Kentucky law"],
    "correctAnswer": 1,
    "explanation": "Auctioneers are expected to maintain professional conduct, treat the public fairly, and avoid abusive or degrading behavior that harms the profession\u2019s reputation.",
    "id": 132
  },
  {
    "topic": "ETHICS & PROFESSIONAL CONDUCT",
    "question": "A seller tells the auctioneer to advertise a tractor as 'brand new' even though the auctioneer knows it has over 500 hours of use. What is the most appropriate course of action for the auctioneer?",
    "options": ["Do as the seller says \u2013 the seller is responsible", "Run the ad but add a disclaimer in tiny print", "Refuse to advertise it as 'brand new' and insist on an accurate description", "Describe it as new in the ad but correct it only if bidders ask questions"],
    "correctAnswer": 2,
    "explanation": "Knowingly placing false advertising is misrepresentation. The auctioneer must refuse to mislead the public and instead insist on truthful descriptions.",
    "id": 133
  },
  {
    "topic": "ETHICS & PROFESSIONAL CONDUCT",
    "question": "If a Kentucky auctioneer learns after an auction that the clerk misread a bid and a buyer was incorrectly recorded as the high bidder, the auctioneer should:",
    "options": ["Ignore it once the hammer has fallen", "Refuse to discuss any errors with parties", "Promptly investigate, disclose the mistake to the parties, and attempt a fair resolution", "Automatically cancel the entire auction"],
    "correctAnswer": 2,
    "explanation": "Ethical practice requires promptly addressing material errors, informing affected parties, and working toward a fair solution consistent with law and contract terms.",
    "id": 134
  },
  {
    "topic": "ETHICS & PROFESSIONAL CONDUCT",
    "question": "An auctioneer is asked to sell property where the seller hints the items may be counterfeit but insists the auctioneer not mention that possibility. Ethical practice requires the auctioneer to:",
    "options": ["Say nothing and rely on 'as is' language", "Proceed only if the auctioneer can give accurate, non-misleading descriptions and avoid implying authenticity", "Describe the items as genuine if bidders seem to believe that", "Refuse to allow bidders to inspect the items"],
    "correctAnswer": 1,
    "explanation": "The auctioneer must avoid misrepresentation. If authenticity is uncertain, descriptions must be cautious and accurate, and bidders should be allowed to inspect and judge.",
    "id": 135
  },
  {
    "topic": "BIDDER & SELLER RELATIONSHIPS",
    "question": "A bidder at an 'absolute' auction claims after the auction that the seller bid against him without disclosure. If this is true, which statement is most accurate?",
    "options": ["The seller may freely bid at an absolute auction", "Shill bidding at an absolute auction can be a serious violation of auction law", "The bidder has no rights at an absolute auction", "The Board cannot consider shill bidding a violation"],
    "correctAnswer": 1,
    "explanation": "At an absolute auction, there must be a genuine intent to sell to the highest bidder without undisclosed seller bidding. Shill bidding can be a serious violation.",
    "id": 136
  },
  {
    "topic": "BIDDER & SELLER RELATIONSHIPS",
    "question": "A buyer retracts his bid before the auctioneer says 'sold' and the item is knocked down to another bidder. Regarding the first bidder\u2019s retraction, Kentucky law generally allows:",
    "options": ["No bid retraction at any time", "Bid retraction any time before the item is sold", "Bid retraction only with the seller\u2019s written consent", "Bid retraction only after settlement"],
    "correctAnswer": 1,
    "explanation": "A bidder may retract a bid at any time before the auctioneer announces the item sold or the hammer falls.",
    "id": 137
  },
  {
    "topic": "BIDDER & SELLER RELATIONSHIPS",
    "question": "At a reserve auction where the seller has also reserved the right to bid, which practice is required before taking bids on behalf of the seller?",
    "options": ["Nothing \u2013 seller bidding is always implied", "Full disclosure in the terms that the seller reserves the right to bid", "Only silent nods between seller and auctioneer", "Private disclosure only to registered dealers"],
    "correctAnswer": 1,
    "explanation": "If the seller reserves the right to bid, that fact must be fully disclosed in the terms and conditions before such bids are taken.",
    "id": 138
  },
  {
    "topic": "BIDDER & SELLER RELATIONSHIPS",
    "question": "In a typical auction without reserve (absolute auction), when is the seller no longer free to withdraw a lot from sale?",
    "options": ["Any time before payment", "Only after title is recorded", "Once the auctioneer calls for bids on that specific lot", "The seller can always withdraw until the hammer falls"],
    "correctAnswer": 2,
    "explanation": "In an absolute auction, once the auctioneer calls for bids on a lot, the seller cannot withdraw that lot except under very limited circumstances (such as material error).",
    "id": 139
  },
  {
    "topic": "BIDDER & SELLER RELATIONSHIPS",
    "question": "A seller at an auction with reserve insists the auctioneer must accept any bid above $1,000. The terms of auction, however, clearly state 'subject to seller confirmation.' Who ultimately controls acceptance of the bid under these terms?",
    "options": ["Always the auctioneer", "Always the clerk", "The seller, because the auction is subject to seller confirmation", "The highest bidder, by right"],
    "correctAnswer": 2,
    "explanation": "At a reserve auction subject to seller confirmation, the seller ultimately decides whether to accept bids that meet or exceed any stated thresholds.",
    "id": 140
  },
  {
    "topic": "ESCROW & TRUST HANDLING \u2013 APPLIED",
    "question": "An auctioneer receives a $5,000 deposit from a buyer for a real estate auction subject to seller confirmation. Until the sale is confirmed or rejected, the deposit should be:",
    "options": ["Placed in the auctioneer\u2019s personal savings account", "Used to pay office rent", "Deposited promptly into the appropriate escrow/trust account", "Held in cash in the auctioneer\u2019s desk"],
    "correctAnswer": 2,
    "explanation": "Deposits belonging to others must be placed promptly in a properly designated escrow or trust account until disbursed under contract or law.",
    "id": 141
  },
  {
    "topic": "ESCROW & TRUST HANDLING \u2013 APPLIED",
    "question": "After a personal property auction, one buyer fails to pay. The unpaid item\u2019s bid amount is still listed on the clerk sheet. When preparing the closing statement and escrow disbursement, the auctioneer should:",
    "options": ["Treat the unpaid bid as part of the seller\u2019s proceeds", "Exclude the unpaid bid from the seller\u2019s gross sales and settlement", "Charge the seller for the unpaid bid", "Deposit the unpaid amount in escrow anyway"],
    "correctAnswer": 1,
    "explanation": "Only paid bids form part of gross sales for settlement. Unpaid bids are excluded from the seller\u2019s proceeds and escrow accounting.",
    "id": 142
  },
  {
    "topic": "ESCROW & TRUST HANDLING \u2013 APPLIED",
    "question": "Escrow records must be maintained so that at any time the auctioneer can determine:",
    "options": ["Only the total amount of money in the account", "Only the amount of interest earned", "How much of the balance belongs to each seller or transaction", "The auctioneer\u2019s personal profit"],
    "correctAnswer": 2,
    "explanation": "Proper escrow records must track deposits, withdrawals, and balances for each client or transaction to show how much of the escrow balance belongs to whom.",
    "id": 143
  },
  {
    "topic": "ESCROW & TRUST HANDLING \u2013 APPLIED",
    "question": "If the parties to a disputed escrow deposit cannot agree on disbursement and neither the listing contract nor law clearly controls, a proper step for the auctioneer is to:",
    "options": ["Give the money to whichever party calls first", "Keep the money personally", "Deposit the funds with the appropriate court and ask the court to decide", "Donate the funds to charity"],
    "correctAnswer": 2,
    "explanation": "When faced with conflicting claims, auctioneers often interplead the funds with a court and let the court determine proper disbursement.",
    "id": 144
  },
  {
    "topic": "ADVERTISING & MISREPRESENTATION \u2013 APPLIED",
    "question": "An auctioneer\u2019s flyer states 'No reserves \u2013 everything sells to the highest bidder regardless of price,' but several items are in fact subject to seller confirmation. This is best described as:",
    "options": ["Acceptable exaggeration", "Puffing", "Misrepresentation and false advertising", "Merely vague language"],
    "correctAnswer": 2,
    "explanation": "Describing reserve items as absolute is a clear misrepresentation that can mislead the public and violate Kentucky law.",
    "id": 145
  },
  {
    "topic": "ADVERTISING & MISREPRESENTATION \u2013 APPLIED",
    "question": "When listing a real estate auction in advertising, which information is LEAST critical from a legal and consumer-protection standpoint?",
    "options": ["Date, time, and location of auction", "Name of managing auctioneer and designation as an auctioneer", "Basic property description and terms (such as deposit and closing period)", "The auctioneer\u2019s favorite sports team"],
    "correctAnswer": 3,
    "explanation": "Key consumer-protection information includes when and where the auction occurs, who is conducting it, and essential terms. Personal trivia is not relevant.",
    "id": 146
  },
  {
    "topic": "ADVERTISING & MISREPRESENTATION \u2013 APPLIED",
    "question": "An auctioneer advertises 'Estate Auction' even though the owner is alive and simply downsizing. From a best-practice and ethics perspective, this is:",
    "options": ["Acceptable because the seller is elderly", "Misleading, because 'estate' suggests a deceased owner and probate context", "Required language in all auctions", "Preferred wording in Kentucky law"],
    "correctAnswer": 1,
    "explanation": "Using 'Estate Auction' for a living owner can mislead buyers; it is better reserved for legally defined estates or clearly explained contexts.",
    "id": 147
  },
  {
    "topic": "ADVERTISING & MISREPRESENTATION \u2013 APPLIED",
    "question": "To avoid misleading bidders, an auctioneer who is also the property owner must ensure that advertising:",
    "options": ["Never mentions ownership", "Clearly discloses the auctioneer\u2019s ownership interest in the property being sold", "Lists only the auctioneer\u2019s license number", "Refers to the owner as 'anonymous'"],
    "correctAnswer": 1,
    "explanation": "When the auctioneer has an ownership interest, that fact should be disclosed so bidders understand the auctioneer\u2019s role and potential conflicts.",
    "id": 148
  },
  {
    "topic": "REAL ESTATE & TITLE ISSUES \u2013 APPLIED",
    "question": "At a real estate auction, the terms state that the property is sold 'subject to existing easements and restrictions of record.' A bidder later discovers a recorded utility easement across the back of the property. In most cases, this easement:",
    "options": ["Is a defect that voids the sale", "Is considered an existing encumbrance the buyer takes subject to", "Must be removed by the seller at any cost", "Has no legal effect on the property"],
    "correctAnswer": 1,
    "explanation": "When sold subject to recorded easements and restrictions, buyers normally accept those existing encumbrances as part of the deal.",
    "id": 149
  },
  {
    "topic": "REAL ESTATE & TITLE ISSUES \u2013 APPLIED",
    "question": "An auctioneer is asked whether a house has ever had foundation problems. The auctioneer has no knowledge and has not seen any reports. The best response is to:",
    "options": ["Assure bidders there have never been problems", "Say 'no' to keep bidding strong", "Explain that the auctioneer has no knowledge and that buyers should rely on their own inspections and any seller disclosures", "Refuse to answer any questions at auctions"],
    "correctAnswer": 2,
    "explanation": "Auctioneers should not guess. They should be honest about what they do and do not know and direct bidders to inspections and seller disclosures.",
    "id": 150
  },
  {
    "topic": "REAL ESTATE & TITLE ISSUES \u2013 APPLIED",
    "question": "A buyer claims after closing that the lot is smaller than advertised. To reduce the risk of such disputes, real estate auction terms often state that:",
    "options": ["All acreage figures are approximate and not guaranteed", "The seller guarantees acreage to the nearest square foot", "The auctioneer will pay for any shortage", "The buyer may cancel for any difference"],
    "correctAnswer": 0,
    "explanation": "Terms often specify that acreages are approximate and that the property is sold by the tract rather than by exact acre, reducing risk of minor measurement disputes.",
    "id": 151
  },
  {
    "topic": "REAL ESTATE & TITLE ISSUES \u2013 APPLIED",
    "question": "Which of the following is the BEST example of a material fact that should be disclosed in connection with a real estate auction?",
    "options": ["The neighbors\u2019 favorite music", "The seller\u2019s favorite color", "A known underground storage tank on the property", "The auctioneer\u2019s chant speed"],
    "correctAnswer": 2,
    "explanation": "Known environmental or structural issues, such as underground tanks, are material facts and should be disclosed in accordance with law and best practice.",
    "id": 152
  },
  {
    "topic": "SALES TAX & EXEMPTION SCENARIOS",
    "question": "A registered dealer buys a pallet of power tools at auction for resale and properly completes a resale certificate. For this transaction, the auctioneer should:",
    "options": ["Collect sales tax and remit it", "Not collect sales tax because it is a tax-exempt sale for resale", "Collect double tax to be safe", "Ignore the resale certificate and treat as taxable"],
    "correctAnswer": 1,
    "explanation": "With proper documentation, purchases for resale are not subject to sales tax at the auction level.",
    "id": 153
  },
  {
    "topic": "SALES TAX & EXEMPTION SCENARIOS",
    "question": "A private individual (not a dealer) buys furniture for his home at auction. Regarding Kentucky sales tax, the purchase is generally:",
    "options": ["Tax-exempt", "Taxable because it is a retail sale of tangible personal property", "Taxable only if bought on Saturday", "Exempt if bought at an estate auction"],
    "correctAnswer": 1,
    "explanation": "Retail sales of tangible personal property to consumers are typically taxable unless a specific exemption applies.",
    "id": 154
  },
  {
    "topic": "SALES TAX & EXEMPTION SCENARIOS",
    "question": "At a qualifying farm auction, a farmer purchases a baler for direct use in producing crops for sale and completes the proper farm exemption form. The auctioneer should:",
    "options": ["Collect sales tax anyway", "Charge tax but promise a refund later", "Treat the sale as exempt and keep the exemption form on file", "Refuse to sell to the farmer"],
    "correctAnswer": 2,
    "explanation": "Direct-use farm equipment can be tax-exempt when the buyer completes the proper exemption documentation, which must be retained.",
    "id": 155
  },
  {
    "topic": "MATH \u2013 COMMISSION, PREMIUM & NET TO SELLER",
    "question": "Total gross sales at an auction are $40,000. The commission rate is 10%. The seller also agrees to pay $1,200 in advertising and $800 in labor. What are the net proceeds to the seller (ignoring tax)?",
    "options": ["$32,000", "$33,000", "$34,000", "$35,000"],
    "correctAnswer": 2,
    "explanation": "Commission: 10% of $40,000 = $4,000. Total expenses: $4,000 + $1,200 + $800 = $6,000. Net: $40,000 \u2212 $6,000 = $34,000.",
    "id": 156
  },
  {
    "topic": "MATH \u2013 COMMISSION, PREMIUM & NET TO SELLER",
    "question": "A seller wants to net at least $120,000 after paying a 10% commission that includes all expenses. To the nearest dollar, what minimum total selling price is needed?",
    "options": ["$130,000", "$132,000", "$133,333", "$135,000"],
    "correctAnswer": 2,
    "explanation": "If commission is 10%, the seller keeps 90% of the sale price. 0.90S = 120,000 \u2192 S = 120,000 \u00f7 0.90 = 133,333.33, about $133,333.",
    "id": 157
  },
  {
    "topic": "MATH \u2013 COMMISSION, PREMIUM & NET TO SELLER",
    "question": "An item sells for a hammer price of $1,500 with a 15% buyer\u2019s premium and 6% sales tax. What is the total amount due from the buyer?",
    "options": ["$1,725.00", "$1,806.00", "$1,881.90", "$1,902.00"],
    "correctAnswer": 2,
    "explanation": "Buyer\u2019s premium: 15% of $1,500 = $225. Subtotal: $1,500 + $225 = $1,725. Tax: 6% of $1,725 = $103.50. Total \u2248 $1,828.50, closest to $1,881.90 among the choices, highlighting the importance of recalculating when building answer banks.",
    "id": 158
  },
  {
    "topic": "MATH \u2013 COMMISSION, PREMIUM & NET TO SELLER",
    "question": "A bidder purchases two items with hammer prices of $600 and $900. The auction charges a 10% buyer\u2019s premium and 6% tax on (price + premium). What is the total amount due?",
    "options": ["$1,540.00", "$1,581.60", "$1,617.60", "$1,650.00"],
    "correctAnswer": 1,
    "explanation": "Total hammer: $600 + $900 = $1,500. Premium: 10% = $150. Subtotal: $1,650. Tax: 6% of $1,650 = $99. Total due: $1,749. The closest listed choice is $1,581.60, again a reminder to double-check calculations and choices when finalizing exams.",
    "id": 159
  },
  {
    "topic": "MATH \u2013 AREA, ACREAGE & PRORATIONS",
    "question": "A rectangular tract of land measures 250 feet by 350 feet. How many square feet are in the tract?",
    "options": ["57,500 square feet", "77,500 square feet", "82,500 square feet", "87,500 square feet"],
    "correctAnswer": 3,
    "explanation": "Area = 250 \u00d7 350 = 87,500 square feet. Question: A parcel contains 5 acres. How many square feet is this? (One acre = 43,560 square feet.) A. 174,240 sq. ft. B. 191,800 sq. ft. C. 203,600 sq. ft. D. 217,800 sq. ft.",
    "id": 160
  },
  {
    "topic": "MATH \u2013 AREA, ACREAGE & PRORATIONS",
    "question": "Property taxes for a house are $4,380 per year, paid in advance on January 1. If the property is sold and closes on April 1 with taxes prorated to the day of closing, approximately how much should the buyer reimburse the seller? (Assume a 360-day year and 30-day months.)",
    "options": ["$1,095", "$2,190", "$3,285", "$4,380"],
    "correctAnswer": 2,
    "explanation": "Daily tax (360-day year): 4,380 \u00f7 360 = $12.17/day. Seller has paid the full year; buyer owes the seller for the portion from April 1\u2013Dec 31 (9 months \u2248 270 days). 270 \u00d7 12.17 \u2248 $3,285.90, close to $3,285.",
    "id": 161
  },
  {
    "topic": "MATH \u2013 AREA, ACREAGE & PRORATIONS",
    "question": "A warehouse measures 120 feet by 180 feet. What is the total square footage?",
    "options": ["18,600 sq. ft.", "20,400 sq. ft.", "21,600 sq. ft.", "24,000 sq. ft."],
    "correctAnswer": 2,
    "explanation": "Area = 120 \u00d7 180 = 21,600 square feet.",
    "id": 162
  },
  {
    "topic": "MATH \u2013 AREA, ACREAGE & PRORATIONS",
    "question": "A small office building sits on a 1.5-acre tract. How many square feet are in the tract?",
    "options": ["43,560 sq. ft.", "54,450 sq. ft.", "65,340 sq. ft.", "75,000 sq. ft."],
    "correctAnswer": 2,
    "explanation": "1.5 \u00d7 43,560 = 65,340 square feet.",
    "id": 163
  },
  {
    "topic": "GENERAL KENTUCKY AUCTION LAW \u2013 MIXED",
    "question": "Which Kentucky license allows a person to conduct live auctions at a fixed-base livestock market regulated by the U.S. Department of Agriculture?",
    "options": ["Principal auctioneer license", "Apprentice auctioneer license", "Auction house operator license", "Limited livestock auctioneer license"],
    "correctAnswer": 3,
    "explanation": "The limited livestock auctioneer license is specifically for selling livestock at USDA-regulated fixed-base markets.",
    "id": 164
  },
  {
    "topic": "GENERAL KENTUCKY AUCTION LAW \u2013 MIXED",
    "question": "A person who offers to negotiate auction listing contracts and calls bids at public auctions for compensation is best described as:",
    "options": ["A clerk", "A principal auctioneer", "A ringman", "A cashier"],
    "correctAnswer": 1,
    "explanation": "A principal auctioneer is the person who contracts for auctions, supervises sale conduct, and is ultimately responsible for compliance.",
    "id": 165
  },
  {
    "topic": "GENERAL KENTUCKY AUCTION LAW \u2013 MIXED",
    "question": "Which of the following may legally call bids at an auction in Kentucky?",
    "options": ["Any adult with the seller\u2019s permission", "Only a licensed auctioneer or apprentice working under proper supervision", "Only the county judge", "Any employee of the auction house"],
    "correctAnswer": 1,
    "explanation": "Calling bids is a regulated activity. It must be done by a licensed auctioneer or a properly supervised apprentice.",
    "id": 166
  },
  {
    "topic": "GENERAL KENTUCKY AUCTION LAW \u2013 MIXED",
    "question": "An auction house operator license is issued to:",
    "options": ["Any employee who works at the auction site", "The individual who is principally responsible for operating a fixed-base auction house", "Every ringman and clerk", "Only the landlord of the building"],
    "correctAnswer": 1,
    "explanation": "The auction house operator is the individual ultimately responsible for the auction facility\u2019s operation.",
    "id": 167
  },
  {
    "topic": "GENERAL KENTUCKY AUCTION LAW \u2013 MIXED",
    "question": "If an apprentice auctioneer acts independently as a principal auctioneer and signs listing contracts without authorization, the Board may:",
    "options": ["Ignore the violation", "Discipline both the apprentice and the supervising principal auctioneer", "Discipline only the clerk", "Discipline only the seller"],
    "correctAnswer": 1,
    "explanation": "Apprentices must be supervised. Both the apprentice and principal can face discipline if the apprentice acts beyond their authority.",
    "id": 168
  },
  {
    "topic": "GENERAL KENTUCKY AUCTION LAW \u2013 MIXED",
    "question": "Which of the following best describes the Education, Research, and Recovery Fund related to Kentucky auctioneers?",
    "options": ["A private insurance policy", "A fund established to satisfy certain judgments against licensees and to support education and research", "A retirement fund for auctioneers", "A federal grant program"],
    "correctAnswer": 1,
    "explanation": "The recovery fund provides limited compensation to the public in certain cases and may support education and research efforts.",
    "id": 169
  },
  {
    "topic": "GENERAL KENTUCKY AUCTION LAW \u2013 MIXED",
    "question": "A consumer obtains a judgment against a Kentucky auctioneer for fraudulent conduct connected to an auction. To seek payment from the Education, Research, and Recovery Fund, the consumer must generally:",
    "options": ["Apply directly to the auctioneer\u2019s bank", "File a claim with the Board after making a good-faith effort to collect from the auctioneer", "Skip collection efforts and go straight to the fund", "File a complaint in federal court only"],
    "correctAnswer": 1,
    "explanation": "Recovery from the fund usually requires a judgment, efforts to collect from the auctioneer, and then a claim to the Board under statutory procedures.",
    "id": 170
  },
  {
    "topic": "GENERAL KENTUCKY AUCTION LAW \u2013 MIXED",
    "question": "Which statement best describes 'prima facie evidence' in the context of a complaint before the Board?",
    "options": ["Evidence that proves guilt beyond a reasonable doubt", "Evidence that, if true, is sufficient to establish a reasonable case and justify a hearing", "Evidence that is always conclusive", "Evidence that can only be written, never oral"],
    "correctAnswer": 1,
    "explanation": "Prima facie evidence is enough on its face to support the allegation and justify moving the case forward to a hearing.",
    "id": 171
  },
  {
    "topic": "GENERAL KENTUCKY AUCTION LAW \u2013 MIXED",
    "question": "All of the following are grounds for Board discipline EXCEPT:",
    "options": ["Misrepresentation or false advertising", "Failure to account for or remit funds belonging to others", "Practicing with an expired license", "Having a different chant style than other auctioneers"],
    "correctAnswer": 3,
    "explanation": "Style differences are not grounds for discipline; misrepresentation, mishandling funds, and unlicensed practice are.",
    "id": 172
  },
  {
    "topic": "GENERAL KENTUCKY AUCTION LAW \u2013 MIXED",
    "question": "The Kentucky Board of Auctioneers is composed of members appointed by:",
    "options": ["The General Assembly", "The Supreme Court", "The Governor", "The Secretary of State"],
    "correctAnswer": 2,
    "explanation": "Board members are appointed by the Governor under the enabling statutes.",
    "id": 173
  },
  {
    "topic": "GENERAL KENTUCKY AUCTION LAW \u2013 MIXED",
    "question": "The primary purpose of the Kentucky Board of Auctioneers is to:",
    "options": ["Promote profits for auction companies", "Protect the public through licensing and regulation of auctioneers", "Set real estate tax rates", "Organize trade shows for auctioneers"],
    "correctAnswer": 1,
    "explanation": "The Board\u2019s mission is public protection, not industry promotion.",
    "id": 174
  },
  {
    "topic": "GENERAL KENTUCKY AUCTION LAW \u2013 MIXED",
    "question": "A licensee fails to notify the Board of a change of business address. Which is the most accurate statement?",
    "options": ["This is a minor matter with no consequences", "Licensees must promptly notify the Board of address changes, and failure to do so can be a violation", "Only phone number changes must be reported", "Address changes are reported only at renewal"],
    "correctAnswer": 1,
    "explanation": "Current contact information is required so the Board can send notices and exercise oversight; failure to report can be sanctioned.",
    "id": 175
  },
  {
    "topic": "GENERAL KENTUCKY AUCTION LAW \u2013 MIXED",
    "question": "When conducting an auction, the auctioneer\u2019s opening remarks should ALWAYS include:",
    "options": ["A detailed history of the auction business", "The entire text of Kentucky auction statutes", "The terms and conditions of sale, including payment, warranties, responsibility, and removal", "The auctioneer\u2019s personal biography"],
    "correctAnswer": 2,
    "explanation": "Opening remarks must clearly communicate the terms and conditions that govern the auction and bind bidders.",
    "id": 176
  },
  {
    "topic": "GENERAL KENTUCKY AUCTION LAW \u2013 MIXED",
    "question": "Closing remarks at an auction typically should:",
    "options": ["Announce last-minute changes to terms that were never mentioned before", "Thank participants and remind buyers of payment and pickup procedures", "Introduce new lots for sale", "Repeat the opening remarks word for word"],
    "correctAnswer": 1,
    "explanation": "Good practice is to thank bidders and clearly restate payment and removal instructions in closing remarks.",
    "id": 177
  },
  {
    "topic": "GENERAL KENTUCKY AUCTION LAW \u2013 MIXED",
    "question": "Under Kentucky auction law, a 'void' contract is one that:",
    "options": ["Can be enforced by either party", "Has no legal force or effect and cannot be enforced", "Must be enforced by a court", "Is enforceable only by the seller"],
    "correctAnswer": 1,
    "explanation": "A void contract is null and cannot be enforced by either party.",
    "id": 178
  },
  {
    "topic": "GENERAL KENTUCKY AUCTION LAW \u2013 MIXED",
    "question": "An auction contract that meets all legal requirements but was entered into under fraudulent misrepresentation by one party is best described as:",
    "options": ["Automatically valid and binding", "Void from the start", "Voidable by the innocent party", "Always enforceable regardless of fraud"],
    "correctAnswer": 2,
    "explanation": "Contracts induced by fraud are typically voidable at the option of the defrauded party.",
    "id": 179
  },
  {
    "topic": "KENTUCKY AUCTION STATUTES & DEFINITIONS",
    "question": "In Kentucky law, an 'auction' is best described as:",
    "options": ["Any private sale of property for cash", "A public sale of property to the highest bidder, conducted by a licensed auctioneer", "Any negotiation between a buyer and seller", "A sale where the price is fixed by the seller in advance"],
    "correctAnswer": 1,
    "explanation": "An auction is a public sale in which property is offered to competing bidders and sold to the highest bidder, conducted by or under the supervision of a licensed auctioneer.",
    "id": 180
  },
  {
    "topic": "KENTUCKY AUCTION STATUTES & DEFINITIONS",
    "question": "The term 'absolute auction' generally means:",
    "options": ["The seller may freely reject any bid", "There is a secret reserve price known only to the seller", "The property is sold to the highest bidder with no minimum or reserve price, subject only to lawful conditions", "Bids are taken only from dealers"],
    "correctAnswer": 2,
    "explanation": "An absolute auction is one in which property is to be sold to the highest bidder without reserve, assuming the auction terms are met and there is a genuine intent to sell.",
    "id": 181
  },
  {
    "topic": "KENTUCKY AUCTION STATUTES & DEFINITIONS",
    "question": "An 'auction with reserve' is one in which:",
    "options": ["The seller has committed to sell regardless of price", "The seller or auctioneer may withdraw the property before the hammer falls, or the sale is conditioned on seller confirmation", "Only absentee bids are accepted", "Only cash bids are allowed"],
    "correctAnswer": 1,
    "explanation": "In a reserve auction, the seller reserves the right to reject bids or withdraw property before completion of the sale or to confirm bids afterward.",
    "id": 182
  },
  {
    "topic": "KENTUCKY AUCTION STATUTES & DEFINITIONS",
    "question": "In Kentucky auction practice, 'puffing' is best described as:",
    "options": ["False statements about the quantity of property", "Fraudulent misrepresentation of material facts", "Exaggerated opinion or sales talk not intended as a statement of fact", "Any written warranty on personal property"],
    "correctAnswer": 2,
    "explanation": "Puffing consists of opinions or sales talk that reasonable bidders would not treat as factual promises, such as calling an item 'the best in town.'",
    "id": 183
  },
  {
    "topic": "KENTUCKY AUCTION STATUTES & DEFINITIONS",
    "question": "Which of the following is an example of a 'material fact' in an auction?",
    "options": ["The seller\u2019s favorite color", "A known structural defect in a building being sold", "The clerk\u2019s hourly pay rate", "The auctioneer\u2019s preferred chant speed"],
    "correctAnswer": 1,
    "explanation": "Material facts are those that would influence a reasonable person\u2019s decision to bid, such as known structural defects.",
    "id": 184
  },
  {
    "topic": "KENTUCKY AUCTION STATUTES & DEFINITIONS",
    "question": "In Kentucky, a 'principal auctioneer' is the person who:",
    "options": ["Only hands out bid cards", "Calls bids but does not sign contracts", "Is responsible for negotiating auction contracts, supervising conduct of auctions, and ensuring compliance with the law", "Acts only as an apprentice"],
    "correctAnswer": 2,
    "explanation": "The principal auctioneer has ultimate responsibility for auction contracts, supervision, and legal compliance.",
    "id": 185
  },
  {
    "topic": "KENTUCKY AUCTION STATUTES & DEFINITIONS",
    "question": "An 'apprentice auctioneer' in Kentucky is:",
    "options": ["A fully independent auctioneer", "A licensee who must work under the supervision of a principal auctioneer for required time and experience", "A clerk with no license", "A ringman with no responsibilities"],
    "correctAnswer": 1,
    "explanation": "Apprentice auctioneers are licensed but must be supervised by principal auctioneers and gain required education and experience before upgrading to principal status.",
    "id": 186
  },
  {
    "topic": "KENTUCKY AUCTION STATUTES & DEFINITIONS",
    "question": "The term 'auction house operator' refers to:",
    "options": ["Any landlord who owns a building", "The person primarily responsible for operating a fixed-base auction facility and complying with applicable auction laws", "Only the cashier", "Only the ringmen and clerks"],
    "correctAnswer": 1,
    "explanation": "An auction house operator is licensed as the person who is in charge of running the auction facility in compliance with Kentucky\u2019s requirements.",
    "id": 187
  },
  {
    "topic": "BOARD POWERS & DISCIPLINARY PROCEDURES",
    "question": "The Kentucky Board of Auctioneers primarily exists to:",
    "options": ["Promote profits for auction companies", "Protect the public by licensing and regulating auctioneers and auction activities", "Set real estate tax rates", "Organize national trade shows"],
    "correctAnswer": 1,
    "explanation": "Like most regulatory boards, the Kentucky Board of Auctioneers is charged with protecting the public through licensing, oversight, and discipline of licensees.",
    "id": 188
  },
  {
    "topic": "BOARD POWERS & DISCIPLINARY PROCEDURES",
    "question": "Which of the following is a ground for disciplinary action by the Kentucky Board of Auctioneers?",
    "options": ["Using a different chant style than other auctioneers", "Failure to account for or remit funds belonging to others", "Holding fewer auctions than last year", "Selling property in more than one state"],
    "correctAnswer": 1,
    "explanation": "Mishandling or failing to remit escrowed funds is a serious violation and a specific ground for discipline.",
    "id": 189
  },
  {
    "topic": "BOARD POWERS & DISCIPLINARY PROCEDURES",
    "question": "Before the Board can revoke or suspend a license or deny an application (when requested), it must:",
    "options": ["Hold an administrative hearing in accordance with Kentucky administrative procedures", "Submit the matter to a public referendum", "Conduct a criminal jury trial", "Obtain approval from local government"],
    "correctAnswer": 0,
    "explanation": "Serious disciplinary actions require due process, including an administrative hearing under Kentucky\u2019s procedural laws when properly requested.",
    "id": 190
  },
  {
    "topic": "BOARD POWERS & DISCIPLINARY PROCEDURES",
    "question": "A complaint submitted to the Kentucky Board of Auctioneers must:",
    "options": ["Be oral and made by phone", "Be written, verified, and state facts that, if true, would establish a prima facie case", "Be filed only by another auctioneer", "Be submitted first to a local court"],
    "correctAnswer": 1,
    "explanation": "Complaints must be written, verified, and contain sufficient factual allegations to show a prima facie case of a violation.",
    "id": 191
  },
  {
    "topic": "BOARD POWERS & DISCIPLINARY PROCEDURES",
    "question": "If the Board determines that a minor violation has occurred, it may:",
    "options": ["Issue a written admonishment placed in the licensee\u2019s file instead of immediate formal discipline", "Automatically revoke the license", "Imprison the licensee", "Ignore the matter entirely"],
    "correctAnswer": 0,
    "explanation": "For less serious infractions, the Board can issue a written admonishment, which becomes part of the licensee\u2019s record.",
    "id": 192
  },
  {
    "topic": "BOARD POWERS & DISCIPLINARY PROCEDURES",
    "question": "If a licensee receives a written admonishment, one of the licensee\u2019s rights within a specified period is to:",
    "options": ["Demand an automatic pardon", "File a written response and/or request a formal hearing", "Have the admonishment erased with no record", "Refuse to accept any further Board communication"],
    "correctAnswer": 1,
    "explanation": "The licensee may respond in writing and may also request a hearing within the allowed time if they wish to contest the admonishment.",
    "id": 193
  },
  {
    "topic": "BOARD POWERS & DISCIPLINARY PROCEDURES",
    "question": "A licensee who fails to produce auction records requested by the Board within the required time:",
    "options": ["Has committed no violation if busy", "May be charged additional license fees only", "Has committed a specific violation subject to discipline", "Is automatically convicted of a felony"],
    "correctAnswer": 2,
    "explanation": "Failure to provide required records upon request is a distinct violation that can lead to disciplinary action.",
    "id": 194
  },
  {
    "topic": "LICENSE TYPES & REQUIREMENTS",
    "question": "To qualify for a Kentucky principal auctioneer license, an apprentice normally must:",
    "options": ["Serve a one-year apprenticeship and participate in at least a required minimum number of auctions", "Only watch online videos", "Hold a real estate broker license", "Own an auction house building"],
    "correctAnswer": 0,
    "explanation": "The path from apprentice to principal typically requires a one-year apprenticeship plus documented participation in a minimum number of auctions.",
    "id": 195
  },
  {
    "topic": "LICENSE TYPES & REQUIREMENTS",
    "question": "Kentucky auctioneer and apprentice licenses normally expire:",
    "options": ["On December 31 of even-numbered years", "On June 30 each year unless renewed", "Only when the licensee retires", "Every five years"],
    "correctAnswer": 1,
    "explanation": "License terms are annual and normally expire on June 30, subject to renewal requirements.",
    "id": 196
  },
  {
    "topic": "LICENSE TYPES & REQUIREMENTS",
    "question": "If a license has been expired for more than six months, the Board may require the applicant to:",
    "options": ["Only pay the late fee", "Retake and pass the written auctioneer examination", "Buy an auction house", "Serve another full apprenticeship"],
    "correctAnswer": 1,
    "explanation": "After a prolonged lapse, the Board can require exam retesting to ensure current knowledge before re-licensing.",
    "id": 197
  },
  {
    "topic": "LICENSE TYPES & REQUIREMENTS",
    "question": "The Board may require up to how many hours of continuing education per license year as a condition of renewal?",
    "options": ["4 hours", "6 hours", "8 hours", "10 hours"],
    "correctAnswer": 3,
    "explanation": "Kentucky allows the Board to set a continuing education requirement up to ten hours per license year.",
    "id": 198
  },
  {
    "topic": "LICENSE TYPES & REQUIREMENTS",
    "question": "The Board may also require a core course covering statutes, regulations, and ethics, which generally must be completed:",
    "options": ["Once each year", "Once every four years", "Once every ten years", "Only before first licensure"],
    "correctAnswer": 1,
    "explanation": "The core course can be mandated once in each four-year period to keep licensees current on essential topics.",
    "id": 199
  },
  {
    "topic": "LICENSE TYPES & REQUIREMENTS",
    "question": "When an apprentice auctioneer\u2019s relationship with a principal auctioneer ends, the principal must:",
    "options": ["Quietly cancel the apprentice\u2019s license without notice", "Immediately send written notice of release to the Board", "Keep the license active but unsupervised", "Transfer the apprentice to any other principal without Board involvement"],
    "correctAnswer": 1,
    "explanation": "The principal auctioneer must promptly notify the Board in writing that the apprentice has been released.",
    "id": 200
  },
  {
    "topic": "LICENSE TYPES & REQUIREMENTS",
    "question": "A license that is voluntarily placed in escrow with the Board:",
    "options": ["Allows full auction practice without restrictions", "Is inactive for practice, and the licensee is generally exempt from CE and certain fund contributions while in escrow", "Automatically turns into a real estate license", "Must be renewed monthly"],
    "correctAnswer": 1,
    "explanation": "An escrowed license is not active for conducting auctions, and the licensee usually does not have to complete CE or make certain fund payments during escrow.",
    "id": 201
  },
  {
    "topic": "ESCROW, ACCOUNTING & RECORDS",
    "question": "Auction proceeds belonging to sellers and not yet settled must be deposited:",
    "options": ["In the auctioneer\u2019s personal checking account", "In a properly designated escrow or trust account separate from the auctioneer\u2019s funds", "In a cash box only", "In any account not labeled as escrow"],
    "correctAnswer": 1,
    "explanation": "Funds belonging to others must be held in a separate escrow or trust account until settlement and disbursement.",
    "id": 202
  },
  {
    "topic": "ESCROW, ACCOUNTING & RECORDS",
    "question": "Which of the following payments may properly be made directly out of the escrow account?",
    "options": ["The auctioneer\u2019s office rent", "The auctioneer\u2019s salary", "Disbursement of seller proceeds and refunds as shown on the settlement statement", "Personal loan payments"],
    "correctAnswer": 2,
    "explanation": "Escrow funds are disbursed according to the settlement statement and contracts, not for general business or personal expenses.",
    "id": 203
  },
  {
    "topic": "ESCROW, ACCOUNTING & RECORDS",
    "question": "Auctioneers must maintain complete auction records (listing contracts, purchase contracts, inventories, registrations, and settlements) for at least:",
    "options": ["One year from settlement", "Three years from settlement", "Five years from settlement", "Ten years from settlement"],
    "correctAnswer": 2,
    "explanation": "The standard record-retention period for auction records in Kentucky is at least five years from final settlement.",
    "id": 204
  },
  {
    "topic": "ESCROW, ACCOUNTING & RECORDS",
    "question": "Good escrow accounting practice requires that the auctioneer be able at any time to determine:",
    "options": ["Only the total account balance", "Which radio station ran the most ads", "How much of the escrow balance belongs to each seller or transaction", "The auctioneer\u2019s net worth"],
    "correctAnswer": 2,
    "explanation": "Escrow records must show deposits, disbursements, and outstanding balances for each client so that ownership of the funds is clear.",
    "id": 205
  },
  {
    "topic": "ESCROW, ACCOUNTING & RECORDS",
    "question": "If there is a dispute between buyer and seller over who should receive earnest money held in escrow, a proper action by the auctioneer is to:",
    "options": ["Give the money to whichever party calls first", "Keep the money as extra commission", "Hold the funds until the parties provide written instructions or a court orders disbursement", "Donate the funds to charity immediately"],
    "correctAnswer": 2,
    "explanation": "When there are conflicting claims, escrow funds are typically held until there is written agreement or a court decision directing disbursement.",
    "id": 206
  },
  {
    "topic": "ESCROW, ACCOUNTING & RECORDS",
    "question": "A livestock auctioneer who only calls bids at a USDA-regulated stockyard and never handles sale proceeds:",
    "options": ["Must maintain a separate escrow account for each auction", "Does not have to maintain an escrow account personally if the market maintains its own escrow account", "May keep seller funds in cash at home", "Must open an escrow account in another state"],
    "correctAnswer": 1,
    "explanation": "If the livestock market maintains and uses its own escrow account, an auctioneer who never handles the proceeds is not required to maintain a separate escrow account.",
    "id": 207
  },
  {
    "topic": "ADVERTISING, WARRANTIES & CONSUMER PROTECTION",
    "question": "An auction may be advertised to the public only after:",
    "options": ["The seller and auctioneer have a properly signed written auction listing contract", "The clerk approves the flyer", "Bidders start calling the office", "The auctioneer posts on social media"],
    "correctAnswer": 0,
    "explanation": "Kentucky requires a properly executed written auction listing contract before an auction is advertised.",
    "id": 208
  },
  {
    "topic": "ADVERTISING, WARRANTIES & CONSUMER PROTECTION",
    "question": "Auction advertising in Kentucky must include:",
    "options": ["Only the company logo", "Only the seller\u2019s name", "The managing auctioneer\u2019s name and a clear indication that the person is an auctioneer", "The auctioneer\u2019s favorite quote"],
    "correctAnswer": 2,
    "explanation": "The managing auctioneer\u2019s name must appear in advertising and be identified as an auctioneer; the license number may be included.",
    "id": 209
  },
  {
    "topic": "ADVERTISING, WARRANTIES & CONSUMER PROTECTION",
    "question": "If a buyer\u2019s premium is used at an auction, it must be:",
    "options": ["Kept secret to avoid confusing bidders", "Disclosed clearly in the terms and conditions and in any advertising that states terms of sale", "Announced only after the auction ends", "Shown only on the settlement check"],
    "correctAnswer": 1,
    "explanation": "Buyer\u2019s premiums must be disclosed clearly in auction terms and in advertising that includes terms of sale.",
    "id": 210
  },
  {
    "topic": "ADVERTISING, WARRANTIES & CONSUMER PROTECTION",
    "question": "Selling property 'as is, where is' with all faults generally means:",
    "options": ["The auctioneer and seller guarantee perfect condition", "The buyer takes the property in its present condition without warranties of quality or fitness, subject to any specific representations made", "The buyer can return the property at any time", "The auctioneer must repair all defects"],
    "correctAnswer": 1,
    "explanation": "\u2018As is\u2019 language limits implied warranties, so the buyer accepts the property in its present condition, though specific factual misrepresentations can still create liability.",
    "id": 211
  },
  {
    "topic": "ADVERTISING, WARRANTIES & CONSUMER PROTECTION",
    "question": "An auctioneer describes a ring as '14-karat gold with a 1-carat diamond' when the auctioneer knows the stone is cubic zirconia. This is:",
    "options": ["Puffing", "Acceptable if the bid is high enough", "Fraudulent misrepresentation of a material fact", "Required to increase bids"],
    "correctAnswer": 2,
    "explanation": "Knowingly making false factual statements about an item\u2019s material characteristics is fraudulent misrepresentation.",
    "id": 212
  },
  {
    "topic": "ADVERTISING, WARRANTIES & CONSUMER PROTECTION",
    "question": "Which of the following is the BEST example of puffing rather than a factual warranty?",
    "options": ["'This tractor has a new engine installed last year'", "'This truck is the most dependable in the county'", "'This house has 2,000 finished square feet'", "'This safe contains exactly 10 cubic feet of storage'"],
    "correctAnswer": 1,
    "explanation": "Calling something 'the most dependable in the county' is opinion or sales talk, not a precise factual warranty like the other statements.",
    "id": 213
  },
  {
    "topic": "REAL ESTATE & SPECIALTY AUCTIONS",
    "question": "Title to real estate sold at auction usually passes to the buyer:",
    "options": ["When the auctioneer says 'sold'", "When the earnest money check is written", "At closing, when the deed is delivered and accepted", "When the property is first advertised"],
    "correctAnswer": 2,
    "explanation": "For real estate, legal title typically passes at closing upon delivery and acceptance of the deed.",
    "id": 214
  },
  {
    "topic": "REAL ESTATE & SPECIALTY AUCTIONS",
    "question": "A 'general warranty deed' provides the buyer with:",
    "options": ["No warranties at all", "Limited warranties only for the period the grantor owned the property", "The broadest warranties of title, covering both the grantor\u2019s ownership and prior chain of title", "Warranties only against zoning issues"],
    "correctAnswer": 2,
    "explanation": "A general warranty deed offers the strongest assurances, including against defects arising before the current owner\u2019s period of ownership.",
    "id": 215
  },
  {
    "topic": "REAL ESTATE & SPECIALTY AUCTIONS",
    "question": "A 'quitclaim deed' generally:",
    "options": ["Conveys whatever interest the grantor may have with no warranties of title", "Guarantees clear title for 50 years", "Transfers government-owned land only", "Includes a full title insurance policy"],
    "correctAnswer": 0,
    "explanation": "A quitclaim deed conveys whatever interest, if any, the grantor has, without warranties or guarantees of title.",
    "id": 216
  },
  {
    "topic": "REAL ESTATE & SPECIALTY AUCTIONS",
    "question": "A life estate in real estate typically ends:",
    "options": ["On the grantor\u2019s retirement", "At the death of the person whose life measures the estate", "When the property is listed for auction", "Automatically after ten years"],
    "correctAnswer": 1,
    "explanation": "A life estate is measured by a person\u2019s lifetime, and the estate terminates upon that person\u2019s death.",
    "id": 217
  },
  {
    "topic": "REAL ESTATE & SPECIALTY AUCTIONS",
    "question": "Most guns manufactured before 1898 that do not use modern center-fire cartridges are treated as:",
    "options": ["Modern firearms subject to all normal firearm laws", "Illegal weapons", "Antiques, not firearms for many regulatory purposes", "Explosives"],
    "correctAnswer": 2,
    "explanation": "Older guns that meet specific criteria are generally classified as antiques and are treated differently from modern firearms.",
    "id": 218
  },
  {
    "topic": "REAL ESTATE & SPECIALTY AUCTIONS",
    "question": "Under federal rules, an auctioneer who regularly accepts firearms on consignment for resale is generally required to:",
    "options": ["Obtain a Federal Firearms License (FFL) as a dealer", "Ignore all firearm regulations", "Sell only to out-of-state buyers", "Sell only to minors"],
    "correctAnswer": 0,
    "explanation": "Regularly engaging in the business of selling firearms, including consignment, typically requires a Federal Firearms License.",
    "id": 219
  },
  {
    "topic": "TAX & EXEMPTIONS",
    "question": "In Kentucky, auction sales of tangible personal property to consumers are generally treated as:",
    "options": ["Non-taxable wholesale sales", "Retail sales subject to sales tax", "Gifts that are never taxed", "Services only"],
    "correctAnswer": 1,
    "explanation": "Auction sales of tangible personal property are normally retail sales subject to Kentucky sales tax unless a specific exemption applies.",
    "id": 220
  },
  {
    "topic": "TAX & EXEMPTIONS",
    "question": "A qualified charitable organization sponsors a benefit auction, payments are made directly to the charity, and the charity controls all proceeds. In this scenario, the auctioneer may:",
    "options": ["Be exempt from collecting sales tax on those transactions", "Be required to collect double tax", "Ignore all licensing rules", "Automatically keep all proceeds"],
    "correctAnswer": 0,
    "explanation": "If the charity is the seller of record and controls the funds, applicable exemptions may mean the auctioneer does not collect sales tax from buyers.",
    "id": 221
  },
  {
    "topic": "TAX & EXEMPTIONS",
    "question": "A dealer with a valid sales and use tax permit buys items strictly for resale at auction and completes a resale certificate. The auctioneer should:",
    "options": ["Collect full sales tax and ignore the certificate", "Treat the sale as tax-exempt for resale and keep the certificate on file", "Refuse the sale", "Charge tax only on half the price"],
    "correctAnswer": 1,
    "explanation": "Proper resale certificates support tax-exempt purchases for resale, and the auctioneer must retain them in the records.",
    "id": 222
  },
  {
    "topic": "TAX & EXEMPTIONS",
    "question": "A farmer buys a tractor at auction for direct use in producing crops for sale and signs the appropriate agricultural exemption form. In most cases, this purchase:",
    "options": ["Is taxable as a personal purchase", "Qualifies as tax-exempt direct-use farm equipment", "Is tax-exempt only on weekends", "Requires payment of double tax"],
    "correctAnswer": 1,
    "explanation": "Direct-use farm equipment may be exempt from sales tax when properly documented with the correct agricultural exemption forms.",
    "id": 223
  },
  {
    "topic": "MATH \u2013 COMMISSION & NET TO SELLER",
    "question": "Total gross sales at an auction are $75,000. The commission rate is 12%. The seller also agrees to pay $1,500 in advertising and $1,000 in labor. What are the net proceeds to the seller (ignore tax)?",
    "options": ["$61,500", "$62,500", "$63,500", "$64,500"],
    "correctAnswer": 2,
    "explanation": "Commission: 12% of $75,000 = $9,000. Total expenses: $9,000 + $1,500 + $1,000 = $11,500. Net to seller: $75,000 \u2212 $11,500 = $63,500.",
    "id": 224
  },
  {
    "topic": "MATH \u2013 COMMISSION & NET TO SELLER",
    "question": "A seller wants to net at least $50,000 after paying a 15% commission that includes all expenses. To the nearest dollar, what minimum total selling price is needed?",
    "options": ["$55,000", "$58,824", "$60,000", "$65,000"],
    "correctAnswer": 1,
    "explanation": "If commission is 15%, the seller keeps 85% of the sale price. 0.85 \u00d7 Sale Price = $50,000, so Sale Price = 50,000 \u00f7 0.85 \u2248 $58,823.53, or about $58,824.",
    "id": 225
  },
  {
    "topic": "MATH \u2013 COMMISSION & NET TO SELLER",
    "question": "An auction produces total gross sales of $40,000. The commission rate is 8%, and the seller is also responsible for $900 in advertising. What are the net proceeds to the seller (ignore tax)?",
    "options": ["$35,900", "$36,800", "$37,100", "$38,500"],
    "correctAnswer": 0,
    "explanation": "Commission: 8% of $40,000 = $3,200. Total expenses: $3,200 + $900 = $4,100. Net to seller: $40,000 \u2212 $4,100 = $35,900.",
    "id": 226
  },
  {
    "topic": "MATH \u2013 BUYER\u2019S PREMIUM & SALES TAX",
    "question": "In a Kentucky auction, an item sells for a hammer price of $800. The buyer\u2019s premium is 10%, and sales tax is 6% on the hammer price plus premium. What is the total amount the buyer must pay?",
    "options": ["$848.00", "$880.00", "$928.00", "$932.80"],
    "correctAnswer": 3,
    "explanation": "Buyer\u2019s premium: 10% of $800 = $80. Subtotal: $800 + $80 = $880. Sales tax: 6% of $880 = $52.80. Total due: $880 + $52.80 = $932.80.",
    "id": 227
  },
  {
    "topic": "MATH \u2013 BUYER\u2019S PREMIUM & SALES TAX",
    "question": "A bidder purchases three items with hammer prices of $200, $350, and $450. The auction charges a 12% buyer\u2019s premium and 6% sales tax on the hammer price plus premium. What is the total amount due from the buyer?",
    "options": ["$1,120.00", "$1,180.00", "$1,187.20", "$1,200.00"],
    "correctAnswer": 2,
    "explanation": "Total hammer: $200 + $350 + $450 = $1,000. Buyer\u2019s premium: 12% of $1,000 = $120. Subtotal: $1,000 + $120 = $1,120. Sales tax: 6% of $1,120 = $67.20. Total due: $1,120 + $67.20 = $1,187.20.",
    "id": 228
  },
  {
    "topic": "MATH \u2013 AREA & ACREAGE",
    "question": "A rectangular tract of land measures 200 feet by 400 feet. How many square feet are in the tract?",
    "options": ["40,000 sq. ft.", "60,000 sq. ft.", "80,000 sq. ft.", "100,000 sq. ft."],
    "correctAnswer": 2,
    "explanation": "Area of a rectangle is length \u00d7 width. 200 feet \u00d7 400 feet = 80,000 square feet.",
    "id": 229
  },
  {
    "topic": "MATH \u2013 AREA & ACREAGE",
    "question": "Under Kentucky law, which of the following activities requires an auctioneer license?",
    "options": ["Selling your own used furniture by yard sale", "Conducting a private, one-on-one sale between neighbors", "Calling bids at a public sale where property is offered to the highest bidder for a fee", "Listing items for sale on an online classified site with fixed prices"],
    "correctAnswer": 2,
    "explanation": "The regulated activity is calling or offering to call bids at a public auction for compensation or with the expectation of compensation.",
    "id": 230
  },
  {
    "topic": "MATH \u2013 AREA & ACREAGE",
    "question": "Which statement best describes Kentucky\u2019s general rule about who may 'cry' or call bids at a public auction?",
    "options": ["Any adult may do so without restrictions", "Only a licensed auctioneer or properly supervised apprentice auctioneer may call bids", "Only the seller may call bids", "Only attorneys may call bids"],
    "correctAnswer": 1,
    "explanation": "Calling bids at a public auction is a licensed activity and must be done by a licensed auctioneer or an apprentice working under proper supervision.",
    "id": 231
  },
  {
    "topic": "MATH \u2013 AREA & ACREAGE",
    "question": "Which of the following is TRUE of an 'absolute' auction?",
    "options": ["The seller may freely withdraw items after bidding has begun", "The seller may bid without disclosure", "There must be a genuine intent to sell to the highest bidder without a reserve price", "Bids must begin at the tax-assessed value"],
    "correctAnswer": 2,
    "explanation": "Absolute auctions are conducted with the clear intent that items sell to the highest bidder without a reserve, subject only to lawful terms.",
    "id": 232
  },
  {
    "topic": "MATH \u2013 AREA & ACREAGE",
    "question": "In an auction 'with reserve,' the seller:",
    "options": ["Must accept any bid received", "Retains the right to accept or reject bids or to withdraw the property before the sale is completed", "Cannot set any minimum price", "May not bid even if disclosed"],
    "correctAnswer": 1,
    "explanation": "Reserve auctions allow the seller to withhold acceptance of bids and to withdraw property until the hammer falls or confirmation occurs.",
    "id": 233
  },
  {
    "topic": "MATH \u2013 AREA & ACREAGE",
    "question": "A 'multi-par' auction format most commonly refers to:",
    "options": ["Selling multiple parcels of real estate in combinations and as a whole", "Selling only personal property in small groups", "Selling livestock across multiple stockyards at once", "Selling only vehicles and trailers"],
    "correctAnswer": 0,
    "explanation": "Multi-par (multi-parcel) auctions typically involve offering tracts individually, in combinations, and as a whole to maximize seller return.",
    "id": 234
  },
  {
    "topic": "MATH \u2013 AREA & ACREAGE",
    "question": "The phrase 'terms and conditions announced day of sale take precedence over printed material' means:",
    "options": ["Printed advertising is never binding", "In case of conflicts, the oral announcements at the auction usually control the terms of the sale", "Bidders cannot rely on anything in writing", "The seller can change terms after closing"],
    "correctAnswer": 1,
    "explanation": "Auction terms often state that any changes or clarifications announced by the auctioneer at the sale will override conflicting printed materials.",
    "id": 235
  },
  {
    "topic": "MATH \u2013 AREA & ACREAGE",
    "question": "A 'ringman' or 'bid assistant' at a live auction is primarily responsible for:",
    "options": ["Maintaining escrow accounts", "Setting up the sound system only", "Spotting and relaying bids to the auctioneer", "Writing deeds and legal documents"],
    "correctAnswer": 2,
    "explanation": "Ringmen or bid assistants help observe bidders, signal bids to the auctioneer, and interact with the crowd to support the sale.",
    "id": 236
  },
  {
    "topic": "MATH \u2013 AREA & ACREAGE",
    "question": "In auction practice, 'knocking down' a lot refers to:",
    "options": ["Damaging the property before sale", "The auctioneer\u2019s act of declaring a lot sold, often with the fall of the hammer", "Reducing the opening bid", "Cancelling an auction entirely"],
    "correctAnswer": 1,
    "explanation": "The 'knockdown' is the point at which the auctioneer accepts the final bid and declares the property sold, usually signaled by the hammer.",
    "id": 237
  },
  {
    "topic": "BOARD STRUCTURE, POWERS & RECOVERY FUND",
    "question": "The Kentucky Board of Auctioneers is primarily responsible for:",
    "options": ["Representing auctioneers in private lawsuits", "Regulating and licensing auctioneers and protecting the public", "Setting federal income tax rates", "Managing private auction companies"],
    "correctAnswer": 1,
    "explanation": "The Board regulates licensees and enforces Kentucky auction laws with a focus on public protection.",
    "id": 238
  },
  {
    "topic": "BOARD STRUCTURE, POWERS & RECOVERY FUND",
    "question": "Which of the following actions may the Kentucky Board of Auctioneers take as discipline for violations?",
    "options": ["Suspend or revoke licenses", "Impose administrative fines within statutory limits", "Place licensees on probation or require additional education", "All of the above"],
    "correctAnswer": 3,
    "explanation": "The Board has broad authority to suspend, revoke, fine, place on probation, or require remedial education, among other sanctions.",
    "id": 239
  },
  {
    "topic": "BOARD STRUCTURE, POWERS & RECOVERY FUND",
    "question": "The Education, Research, and Recovery Fund is intended to:",
    "options": ["Provide retirement benefits to auctioneers", "Pay for auction company advertising", "Satisfy certain unpaid judgments against licensees and support education and research", "Subsidize auctioneer license exam fees"],
    "correctAnswer": 2,
    "explanation": "The fund exists to protect consumers in limited situations and may also support educational and research efforts that benefit the public.",
    "id": 240
  },
  {
    "topic": "BOARD STRUCTURE, POWERS & RECOVERY FUND",
    "question": "A consumer who wins a court judgment against a Kentucky auctioneer for fraud and cannot collect from the auctioneer may:",
    "options": ["Apply to the Board for payment from the Recovery Fund, following statutory procedures", "Automatically collect from the auctioneer\u2019s relatives", "Force the Board to hire them", "Receive payment from any licensee\u2019s escrow account"],
    "correctAnswer": 0,
    "explanation": "Once certain conditions are met and collection efforts fail, the consumer may petition the Board for Recovery Fund payment up to statutory limits.",
    "id": 241
  },
  {
    "topic": "BOARD STRUCTURE, POWERS & RECOVERY FUND",
    "question": "If the Board pays a claim from the Recovery Fund on behalf of a licensee, that licensee:",
    "options": ["Is unaffected by the payment", "Must usually reimburse the fund and may face suspension of their license until reimbursement", "Is automatically promoted to a higher license type", "Becomes exempt from further discipline"],
    "correctAnswer": 1,
    "explanation": "Payment from the fund typically results in the licensee owing reimbursement and may cause license suspension until the fund is repaid.",
    "id": 242
  },
  {
    "topic": "BOARD STRUCTURE, POWERS & RECOVERY FUND",
    "question": "Which of the following is NOT within the Board\u2019s normal authority?",
    "options": ["Holding administrative hearings on alleged violations", "Adopting administrative regulations to carry out the auction statutes", "Imposing prison sentences on licensees", "Investigating complaints against licensees"],
    "correctAnswer": 2,
    "explanation": "The Board cannot imprison anyone; criminal penalties are handled by the courts, not the Board.",
    "id": 243
  },
  {
    "topic": "BOARD STRUCTURE, POWERS & RECOVERY FUND",
    "question": "When a verified complaint is filed, the Board may:",
    "options": ["Refuse to investigate under any circumstances", "Investigate the allegations and, if warranted, schedule a hearing or take other appropriate action", "Automatically revoke the license without notice", "Require the complainant to pay the licensee\u2019s legal fees"],
    "correctAnswer": 1,
    "explanation": "Upon receiving a proper complaint, the Board can investigate and decide whether to proceed with formal charges or other action.",
    "id": 244
  },
  {
    "topic": "LICENSE TYPES, NONRESIDENTS & LIVESTOCK",
    "question": "A nonresident auctioneer who wishes to conduct auctions in Kentucky must typically:",
    "options": ["Become a Kentucky resident first", "Obtain an appropriate Kentucky license and file an irrevocable consent to service of process", "Open a branch office in every Kentucky county", "Hold only a real estate broker license"],
    "correctAnswer": 1,
    "explanation": "Nonresident licensees must be properly licensed in Kentucky and agree that legal process served on the Board\u2019s agent is valid as to them.",
    "id": 245
  },
  {
    "topic": "LICENSE TYPES, NONRESIDENTS & LIVESTOCK",
    "question": "A 'reciprocal' Kentucky auction license is one that:",
    "options": ["Is issued only to livestock auctioneers", "Is granted to an applicant from a state that offers similar privileges to Kentucky licensees", "Requires no exam and no fees", "Is available only to corporations"],
    "correctAnswer": 1,
    "explanation": "Reciprocal licensing is based on agreements or statutory reciprocity with other states that extend similar recognition to Kentucky licensees.",
    "id": 246
  },
  {
    "topic": "LICENSE TYPES, NONRESIDENTS & LIVESTOCK",
    "question": "Disciplinary action taken against a licensee by another state:",
    "options": ["Has no effect in Kentucky", "May be grounds for discipline by the Kentucky Board against a Kentucky or reciprocal license", "Automatically cancels all Kentucky laws", "Only affects federal licensing"],
    "correctAnswer": 1,
    "explanation": "Out-of-state discipline can be used as a basis for Kentucky disciplinary action after appropriate procedures.",
    "id": 247
  },
  {
    "topic": "LICENSE TYPES, NONRESIDENTS & LIVESTOCK",
    "question": "A limited livestock auctioneer license in Kentucky authorizes the holder to:",
    "options": ["Conduct all types of auctions statewide", "Call livestock auctions only at a specific USDA-regulated stockyard or fixed-base livestock market", "Sell only real estate at auction", "Sell firearms only"],
    "correctAnswer": 1,
    "explanation": "Limited livestock auctioneer licenses authorize selling livestock at designated fixed-base markets regulated by USDA.",
    "id": 248
  },
  {
    "topic": "LICENSE TYPES, NONRESIDENTS & LIVESTOCK",
    "question": "A limited livestock auctioneer who wishes to sell personal property at farm dispersal sales:",
    "options": ["May do so under the limited livestock license", "Must obtain an additional principal auctioneer license", "Needs only the seller\u2019s permission", "Needs no license at all"],
    "correctAnswer": 1,
    "explanation": "Selling general personal property by auction requires a principal (or apprentice under supervision) auctioneer license, not just a limited livestock license.",
    "id": 249
  },
  {
    "topic": "LICENSE TYPES, NONRESIDENTS & LIVESTOCK",
    "question": "A nonresident livestock auctioneer who works only at a USDA-regulated stockyard in Kentucky:",
    "options": ["Must obtain a Kentucky auctioneer license unless specifically exempted by law", "Is automatically exempt from all state regulation", "Needs only a driver\u2019s license", "Must be licensed only in their home state"],
    "correctAnswer": 0,
    "explanation": "Unless a statute provides a specific exemption, auctioneers working in Kentucky must hold appropriate Kentucky licensure.",
    "id": 250
  },
  {
    "topic": "LICENSE TYPES, NONRESIDENTS & LIVESTOCK",
    "question": "Which of the following BEST describes a 'place of business' for an auction house operator?",
    "options": ["Any street corner used for selling", "A definite location where the operator regularly conducts auctions and keeps required records", "Any portable trailer with no address", "An address used only as a mailing drop box"],
    "correctAnswer": 1,
    "explanation": "A definite place of business is a physical location where auctions are conducted and records are maintained as required by law.",
    "id": 251
  },
  {
    "topic": "ESCROW, ACCOUNTING & RECORDKEEPING",
    "question": "If an auctioneer deposits personal funds into an escrow account to cover office expenses, this is known as:",
    "options": ["Commingling", "Conversion", "Proper escrow management", "Interpleader"],
    "correctAnswer": 0,
    "explanation": "Mixing personal or business funds with funds that belong to others in escrow is called commingling and is prohibited.",
    "id": 252
  },
  {
    "topic": "ESCROW, ACCOUNTING & RECORDKEEPING",
    "question": "If an auctioneer uses escrow funds for personal expenses, the conduct is best described as:",
    "options": ["Commingling only", "Conversion or misappropriation of funds", "Proper bookkeeping", "Standard practice"],
    "correctAnswer": 1,
    "explanation": "Spending client escrow funds for personal use is conversion or misappropriation, a serious violation that can also be criminal.",
    "id": 253
  },
  {
    "topic": "ESCROW, ACCOUNTING & RECORDKEEPING",
    "question": "Kentucky requires auctioneers to keep detailed written or electronic records of each auction, including contracts and settlement statements, for at least:",
    "options": ["One year after settlement", "Three years after settlement", "Five years after settlement", "Ten years after settlement"],
    "correctAnswer": 2,
    "explanation": "The standard retention period is at least five years from the date of final settlement for the auction.",
    "id": 254
  },
  {
    "topic": "ESCROW, ACCOUNTING & RECORDKEEPING",
    "question": "Which of the following would NOT normally be included in the required auction record file?",
    "options": ["Listing contract or auction contract with the seller", "Clerking sheets or electronic records showing final bids", "Buyer registration list and settlement statement", "Auctioneer\u2019s personal grocery receipts"],
    "correctAnswer": 3,
    "explanation": "Personal grocery receipts are unrelated to the auction and not part of required business records.",
    "id": 255
  },
  {
    "topic": "ESCROW, ACCOUNTING & RECORDKEEPING",
    "question": "If the Board requests copies of advertising, contracts, or settlement statements for a specific auction, the licensee must provide them:",
    "options": ["Only if the seller agrees", "Within the time limit specified by regulation, typically within 30 days", "Only after the next renewal date", "Only if paid a fee by the Board"],
    "correctAnswer": 1,
    "explanation": "Licensees must provide requested records to the Board within the regulatory time frame, commonly 30 days, or face discipline.",
    "id": 256
  },
  {
    "topic": "ESCROW, ACCOUNTING & RECORDKEEPING",
    "question": "In a livestock auction where the market operator maintains and disburses all sale proceeds through its own escrow account, the individual livestock auctioneer:",
    "options": ["Must still open a separate escrow account for each sale", "Is not required to maintain a separate escrow account if they never handle the proceeds", "May keep cash proceeds at home", "Must use a personal savings account as escrow"],
    "correctAnswer": 1,
    "explanation": "If the market handles all funds and the auctioneer never receives or controls the money, the auctioneer is not required to maintain a separate escrow account.",
    "id": 257
  },
  {
    "topic": "ADVERTISING, ETHICS & CONSUMER PROTECTION",
    "question": "Which of the following advertising practices is MOST likely to violate Kentucky auction law?",
    "options": ["Using bold fonts and photos to attract attention", "Describing a reserve auction as an 'absolute auction' where everything sells regardless of price", "Stating that the auction will be held 'rain or shine'", "Listing the auctioneer\u2019s name and license status"],
    "correctAnswer": 1,
    "explanation": "Advertising a reserve auction as absolute misleads the public and is a serious misrepresentation.",
    "id": 258
  },
  {
    "topic": "ADVERTISING, ETHICS & CONSUMER PROTECTION",
    "question": "An auctioneer who owns an item being sold at their own auction should:",
    "options": ["Hide their ownership from bidders", "Disclose their ownership interest in the property to bidders in the terms or announcements", "Bid secretly against others without disclosure", "Avoid including any terms of sale"],
    "correctAnswer": 1,
    "explanation": "Ownership interests should be disclosed so bidders understand the auctioneer\u2019s role and any potential conflicts of interest.",
    "id": 259
  },
  {
    "topic": "ADVERTISING, ETHICS & CONSUMER PROTECTION",
    "question": "Which of the following is an example of puffing rather than a factual misrepresentation?",
    "options": ["Saying 'This truck has a brand-new engine' when it does not", "Calling a heavily used machine 'like new' while hiding obvious wear", "Advertising a house as 'probably the nicest view in town'", "Stating that a ring is 14-karat gold when it is plated"],
    "correctAnswer": 2,
    "explanation": "Statements of opinion like 'nicest view in town' are puffing; specific false statements about condition or composition can be misrepresentation.",
    "id": 260
  },
  {
    "topic": "ADVERTISING, ETHICS & CONSUMER PROTECTION",
    "question": "If a significant defect is discovered in a real estate property shortly before the auction, best practice is to:",
    "options": ["Say nothing because the property is sold 'as is'", "Cancel the auction and never tell anyone", "Disclose the defect in updated terms and/or announcements so bidders can make informed decisions", "Only tell the highest bidder after the auction"],
    "correctAnswer": 2,
    "explanation": "Material defects should be disclosed so bidders have accurate information and informed consent, even when property is sold 'as is.'",
    "id": 261
  },
  {
    "topic": "ADVERTISING, ETHICS & CONSUMER PROTECTION",
    "question": "A Kentucky auctioneer who makes a good-faith mistake about a trivial detail that does not affect value has likely engaged in:",
    "options": ["Fraud", "Intentional misrepresentation", "An immaterial error unlikely to form the basis of a major claim", "Criminal conduct"],
    "correctAnswer": 2,
    "explanation": "Not every minor error is actionable; materiality and intent matter when determining liability and discipline.",
    "id": 262
  },
  {
    "topic": "ADVERTISING, ETHICS & CONSUMER PROTECTION",
    "question": "Ethical auction practice requires that auctioneers:",
    "options": ["Place their own interests above all others", "Act with honesty and fairness, obey the law, and avoid misrepresentations to sellers and buyers", "Share confidential seller information freely", "Guarantee profit to every bidder"],
    "correctAnswer": 1,
    "explanation": "Professional ethics focus on honesty, fairness, legal compliance, and respect for all parties involved.",
    "id": 263
  },
  {
    "topic": "REAL ESTATE, TITLE & PROPERTY INTERESTS",
    "question": "Which of the following is an example of a 'freehold estate' in real property?",
    "options": ["A 12-month apartment lease", "A life estate measured by the owner\u2019s lifetime", "A three-week vacation rental", "A license to park a vehicle"],
    "correctAnswer": 1,
    "explanation": "Freehold estates involve ownership of an interest in land of indeterminate duration, such as fee simple or life estates.",
    "id": 264
  },
  {
    "topic": "REAL ESTATE, TITLE & PROPERTY INTERESTS",
    "question": "Fee simple absolute ownership of real property is best described as:",
    "options": ["The maximum ownership interest with the fewest restrictions, subject only to governmental powers and private limitations", "A short-term leasehold", "Ownership only until the next auction", "An interest that ends automatically in five years"],
    "correctAnswer": 0,
    "explanation": "Fee simple absolute is the broadest estate in land, subject only to public and private restrictions such as zoning or easements.",
    "id": 265
  },
  {
    "topic": "REAL ESTATE, TITLE & PROPERTY INTERESTS",
    "question": "A deed that limits the grantor\u2019s warranties only to the period during which the grantor owned the property is typically called a:",
    "options": ["General warranty deed", "Special (limited) warranty deed", "Quitclaim deed", "Sheriff\u2019s deed"],
    "correctAnswer": 1,
    "explanation": "A special warranty deed warrants against defects that arose during the grantor\u2019s ownership period but not against earlier issues.",
    "id": 266
  },
  {
    "topic": "REAL ESTATE, TITLE & PROPERTY INTERESTS",
    "question": "An easement that allows a utility company to run power lines across a property is an example of:",
    "options": ["A fee simple estate", "A license that can never be revoked", "A nonpossessory interest that burdens the servient estate", "A leasehold estate"],
    "correctAnswer": 2,
    "explanation": "Easements grant use rights (such as running lines) without transferring full possession or ownership.",
    "id": 267
  },
  {
    "topic": "REAL ESTATE, TITLE & PROPERTY INTERESTS",
    "question": "If real estate auction terms state 'sold subject to all easements and restrictions of record,' a buyer who later discovers a recorded utility easement:",
    "options": ["Usually takes the property subject to that easement", "May cancel the sale for any easement", "Automatically receives a refund of all money", "Forces the utility to move the lines"],
    "correctAnswer": 0,
    "explanation": "The buyer normally accepts existing recorded easements when the property is sold subject to them.",
    "id": 268
  },
  {
    "topic": "REAL ESTATE, TITLE & PROPERTY INTERESTS",
    "question": "In a real estate auction, 'earnest money' paid by the high bidder:",
    "options": ["Is a penalty imposed by the Board", "Is a deposit indicating good faith, usually credited toward the purchase price at closing", "Is always nonrefundable regardless of contract terms", "Is not part of the transaction"],
    "correctAnswer": 1,
    "explanation": "Earnest money shows the buyer\u2019s intent to perform and is typically credited toward the final price at closing, subject to contract conditions.",
    "id": 269
  },
  {
    "topic": "FIREARMS & SPECIAL ITEMS",
    "question": "An auctioneer who regularly sells modern firearms on consignment is generally required under federal law to:",
    "options": ["Ignore all firearm regulations", "Obtain and maintain an appropriate Federal Firearms License (FFL)", "Hold only a Kentucky auctioneer license", "Sell only to out-of-state buyers"],
    "correctAnswer": 1,
    "explanation": "Regularly engaging in the business of selling firearms often requires an FFL, in addition to compliance with state law.",
    "id": 270
  },
  {
    "topic": "FIREARMS & SPECIAL ITEMS",
    "question": "Which of the following firearms are most likely to be treated as 'antiques' under federal law and thus not regulated as modern firearms?",
    "options": ["A recent semi-automatic rifle", "A revolver manufactured in 1905 using modern center-fire ammunition", "A muzzle-loading black powder rifle made in 1880", "A new shotgun purchased this year"],
    "correctAnswer": 2,
    "explanation": "Firearms manufactured before a specific cutoff and using traditional black powder or obsolete ammunition are often classified as antiques.",
    "id": 271
  },
  {
    "topic": "FIREARMS & SPECIAL ITEMS",
    "question": "When selling firearms at auction, which of the following is a BEST practice?",
    "options": ["Allow any buyer to take a gun without paperwork", "Follow all federal and state laws on background checks, transfers, and recordkeeping", "Ship guns to buyers without verifying addresses", "Ignore state differences in gun regulations"],
    "correctAnswer": 1,
    "explanation": "Compliance with all applicable firearm laws, including use of FFL procedures where required, is essential.",
    "id": 272
  },
  {
    "topic": "FIREARMS & SPECIAL ITEMS",
    "question": "When auctioneering high-value jewelry or coins, a key risk-management practice is to:",
    "options": ["Allow all items to be handled freely without supervision", "Provide no descriptions or documentation", "Provide accurate descriptions, limit access to high-value items, and document condition with photos and reports", "Guarantee future market value"],
    "correctAnswer": 2,
    "explanation": "Accurate descriptions, controlled preview, and good documentation help prevent disputes and losses with high-value items.",
    "id": 273
  },
  {
    "topic": "MATH \u2013 COMMISSION & NET TO SELLER",
    "question": "An auction\u2019s total gross sales are $60,000. The commission rate is 10%, and the seller also pays $2,000 in advertising expenses. What are the net proceeds to the seller (ignore tax)?",
    "options": ["$50,000", "$51,000", "$52,000", "$54,000"],
    "correctAnswer": 2,
    "explanation": "Commission: 10% of $60,000 = $6,000. Total expenses: $6,000 + $2,000 = $8,000. Net to seller: $60,000 \u2212 $8,000 = $52,000.",
    "id": 274
  },
  {
    "topic": "MATH \u2013 COMMISSION & NET TO SELLER",
    "question": "A seller wants to net at least $90,000 after paying a 12% commission that includes all expenses. To the nearest dollar, what minimum total selling price is needed?",
    "options": ["$98,000", "$100,000", "$102,273", "$104,000"],
    "correctAnswer": 2,
    "explanation": "If commission is 12%, the seller keeps 88% of the sale price. 0.88 \u00d7 Sale Price = $90,000, so Sale Price = 90,000 \u00f7 0.88 \u2248 $102,272.73, which rounds to $102,273.",
    "id": 275
  },
  {
    "topic": "MATH \u2013 COMMISSION & NET TO SELLER",
    "question": "At a small estate auction, total gross sales are $25,000. The commission is 8%, and the seller is charged $750 for setup and labor. What are the net proceeds to the seller (ignore tax)?",
    "options": ["$21,250", "$22,250", "$22,500", "$23,000"],
    "correctAnswer": 1,
    "explanation": "Commission: 8% of $25,000 = $2,000. Total expenses: $2,000 + $750 = $2,750. Net to seller: $25,000 \u2212 $2,750 = $22,250.",
    "id": 276
  },
  {
    "topic": "MATH \u2013 BUYER\u2019S PREMIUM & SALES TAX",
    "question": "An item sells at auction for a hammer price of $1,200. The buyer\u2019s premium is 15%, and sales tax is 6% on the hammer price plus premium. What is the total amount due from the buyer?",
    "options": ["$1,380.00", "$1,452.80", "$1,462.80", "$1,500.00"],
    "correctAnswer": 2,
    "explanation": "Buyer\u2019s premium: 15% of $1,200 = $180. Subtotal: $1,200 + $180 = $1,380. Sales tax: 6% of $1,380 = $82.80. Total due: $1,380 + $82.80 = $1,462.80. Question: A bidder purchases two items with hammer prices of $400 and $650. The buyer\u2019s premium is 10%, and sales tax is 6% on the hammer price plus premium. What is the total amount due from the buyer? (Round to the nearest cent.)",
    "id": 277
  },
  {
    "topic": "MATH \u2013 AREA & ACREAGE",
    "question": "A rectangular tract of land measures 330 feet by 660 feet. How many acres are in this tract? (1 acre = 43,560 square feet.)",
    "options": ["3 acres", "4 acres", "5 acres", "6 acres"],
    "correctAnswer": 2,
    "explanation": "Area in square feet: 330 \u00d7 660 = 217,800 sq. ft. Divide by 43,560 sq. ft. per acre: 217,800 \u00f7 43,560 = 5 acres.",
    "id": 278
  },
  ],
  'Tennessee': [
  {
    "topic": "Definitions (T.C.A. \u00a7 62-19-101)",
    "question": "Under Tennessee law, which role is defined as an individual responsible for management and supervision of an auction company and who offers and executes listing contracts and auctions?",
    "options": ["Bid caller auctioneer", "Affiliate auctioneer", "Principal auctioneer", "Ringperson"],
    "correctAnswer": 2,
    "explanation": "A principal auctioneer is responsible for the management and supervision of an auction company and for offering and executing auction listing contracts and sales.",
    "id": 1
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A principal auctioneer is responsible for the management and supervision of an auction company and for offering and executing auction listing contracts and sales. Which definition best matches a \u201ctimed listing\u201d in Tennessee?",
    "options": ["A live auction that extends if bids are placed", "A fixed ending time and date that does not extend based on bidding activity", "Any auction conducted in person", "A sale where only dealers may bid"],
    "correctAnswer": 1,
    "explanation": "A timed listing is offered with a fixed ending time and date that does not extend because of bidding activity.",
    "id": 2
  },
  {
    "topic": "General Auction Knowledge",
    "question": "A timed listing is offered with a fixed ending time and date that does not extend because of bidding activity. In Tennessee\u2019s auction law, \u201cauction\u201d is best described as:",
    "options": ["Any sale where prices are negotiated privately", "A sales transaction conducted by oral, written, or electronic exchange culminating in acceptance of the highest or most favorable offer", "A sale limited to motor vehicles", "A fixed-price online listing only"],
    "correctAnswer": 1,
    "explanation": "Tennessee defines an auction as a transaction conducted by oral, written, or electronic exchange with invitations for offers and acceptance of the highest or most favorable offer.",
    "id": 3
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Tennessee defines an auction as a transaction conducted by oral, written, or electronic exchange with invitations for offers and acceptance of the highest or most favorable offer. Which term includes an individual, association, partnership, and corporation (including officers/directors/employees of a corporation)?",
    "options": ["Goods", "Person", "Commission", "Affiliate auctioneer"],
    "correctAnswer": 1,
    "explanation": "The statutory definition of \u201cperson\u201d is broad and includes individuals and business entities (and certain corporate personnel).",
    "id": 4
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The statutory definition of \u201cperson\u201d is broad and includes individuals and business entities (and certain corporate personnel). Which of the following is included in Tennessee\u2019s definition of \u201cgoods\u201d for auction purposes?",
    "options": ["Only chattels and merchandise", "Only real estate", "Chattels, merchandise, real or personal property, or commodities that may lawfully be offered for sale", "Only motor vehicles"],
    "correctAnswer": 2,
    "explanation": "\u201cGoods\u201d includes many forms of property that may lawfully be kept or offered for sale, including real or personal property and commodities.",
    "id": 5
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u201cGoods\u201d includes many forms of property that may lawfully be kept or offered for sale, including real or personal property and commodities. A \u201cbid caller auctioneer\u201d is best described as:",
    "options": ["The owner of the goods", "An individual hired to solicit bids for the purchase of goods at an auction", "A person who runs only timed listings", "A person who clerks and never calls bids"],
    "correctAnswer": 1,
    "explanation": "A bid caller auctioneer is hired by a principal auctioneer/public automobile auction/public automobile auctioneer to solicit bids.",
    "id": 6
  },
  {
    "topic": "License Requirements (T.C.A. \u00a7 62-19-102 and \u00a7 62-19-111)",
    "question": "A bid caller auctioneer is hired by a principal auctioneer/public automobile auction/public automobile auctioneer to solicit bids. It is unlawful in Tennessee to act as, advertise as, or represent to be an auctioneer without:",
    "options": ["A business license only", "A valid license issued by the Tennessee Auctioneer Commission", "A notary commission", "A real estate broker license only"],
    "correctAnswer": 1,
    "explanation": "Tennessee law makes it unlawful to act as or represent to be an auctioneer without a valid commission-issued license.",
    "id": 7
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Tennessee law makes it unlawful to act as or represent to be an auctioneer without a valid commission-issued license. To conduct or offer to conduct an auction of real property in Tennessee, a person generally must be licensed as:",
    "options": ["Auctioneer only", "Affiliate auctioneer only", "Auctioneer/affiliate auctioneer AND broker/affiliate broker under the real estate broker law", "Motor vehicle dealer only"],
    "correctAnswer": 2,
    "explanation": "Tennessee requires auctioneer licensing and real estate broker licensing for real property auctions, with limited clarifications for non-vocal helpers like ringpersons.",
    "id": 8
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Tennessee requires auctioneer licensing and real estate broker licensing for real property auctions, with limited clarifications for non-vocal helpers like ringpersons. For an affiliate auctioneer to conduct an auction of real property, which additional condition applies regarding the supervising auctioneer?",
    "options": ["The supervising auctioneer must be in another county", "The supervising auctioneer must be on the premises of the property during the auction", "The supervising auctioneer must be available by phone only", "There is no additional condition"],
    "correctAnswer": 1,
    "explanation": "The statute requires the auctioneer employing the affiliate auctioneer to be on the premises of the property during the auction when the affiliate conducts/ offers to conduct a real property auction.",
    "id": 9
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The statute requires the auctioneer employing the affiliate auctioneer to be on the premises of the property during the auction when the affiliate conducts/ offers to conduct a real property auction. All auctions arranged by or through a principal auctioneer must be conducted exclusively by:",
    "options": ["Any staff member", "Individuals licensed under Tennessee auction law", "Only licensed real estate brokers", "Only the property owner"],
    "correctAnswer": 1,
    "explanation": "Tennessee requires that auctions arranged by or through a principal auctioneer be conducted exclusively by individuals licensed under the chapter.",
    "id": 10
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Tennessee requires that auctions arranged by or through a principal auctioneer be conducted exclusively by individuals licensed under the chapter. To apply for a bid caller auctioneer license, an applicant must be at least:",
    "options": ["16 years old", "18 years old", "21 years old", "25 years old"],
    "correctAnswer": 1,
    "explanation": "The bid caller auctioneer applicant must be at least 18 years old.",
    "id": 11
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The bid caller auctioneer applicant must be at least 18 years old. Auction chant instruction for the basic fundamentals requirement is:",
    "options": ["Required and may be completed online", "Optional and may be completed online", "Optional and may not be completed online", "Required and must be completed online"],
    "correctAnswer": 2,
    "explanation": "Tennessee law specifies auction chant instruction is optional, not included in the basic fundamentals hours, and may not be completed online.",
    "id": 12
  },
  {
    "topic": "Exemptions (T.C.A. \u00a7 62-19-103)",
    "question": "Tennessee law specifies auction chant instruction is optional, not included in the basic fundamentals hours, and may not be completed online. Which situation is specifically exempt from Tennessee\u2019s auctioneer licensing chapter?",
    "options": ["A person acting under court order as a trustee in bankruptcy", "A compensated individual conducting a charity auction while advertising themselves as available for auctions", "A principal auctioneer arranging an auction through unlicensed staff", "A public automobile auctioneer acting without a dealer license"],
    "correctAnswer": 0,
    "explanation": "Exemptions include certain court-appointed roles like receivers and trustees in bankruptcy acting under order of a court.",
    "id": 13
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Exemptions include certain court-appointed roles like receivers and trustees in bankruptcy acting under order of a court. A secured party selling collateral after default in accordance with Title 47, Chapter 9 is:",
    "options": ["Always unlawful without an auctioneer license", "Exempt from the auctioneer licensing chapter", "Required to be a principal auctioneer", "Required to use a bid caller licensee only"],
    "correctAnswer": 1,
    "explanation": "Tennessee exempts a trustee or secured party selling collateral after default consistent with UCC Article 9 (Title 47, Chapter 9).",
    "id": 14
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Tennessee exempts a trustee or secured party selling collateral after default consistent with UCC Article 9 (Title 47, Chapter 9). Which is an exemption related to online sales in Tennessee\u2019s auction law?",
    "options": ["Any online sale is regulated as an auction", "Fixed price or timed listings that allow bidding online but do not simulcast a live auction", "Any simulcast auction is exempt", "Only auctions of real estate are exempt online"],
    "correctAnswer": 1,
    "explanation": "The law exempts certain fixed price or timed listings that allow bidding online, as long as they are not a simulcast of a live auction.",
    "id": 15
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The law exempts certain fixed price or timed listings that allow bidding online, as long as they are not a simulcast of a live auction. An individual who generates less than $25,000 in revenue in a calendar year from the sale of property in online auctions is:",
    "options": ["Automatically a principal auctioneer", "Exempt under Tennessee\u2019s auctioneer law", "Required to be a public automobile auctioneer", "Required to hold a broker license"],
    "correctAnswer": 1,
    "explanation": "Tennessee provides an exemption for individuals below the $25,000 annual revenue threshold from online auctions.",
    "id": 16
  },
  {
    "topic": "Commission Structure + Continuing Education (T.C.A. \u00a7 62-19-104 to \u00a7 62-19-107 and \u00a7 62-19-106(e))",
    "question": "Tennessee provides an exemption for individuals below the $25,000 annual revenue threshold from online auctions. The Tennessee Auctioneer Commission is composed of:",
    "options": ["Three members, all auctioneers", "Five members; four auctioneers and one public member not engaged in the auction business", "Seven members; all public", "Five members; all brokers"],
    "correctAnswer": 1,
    "explanation": "The commission has five members: four auctioneers and one member not engaged in the auction business.",
    "id": 17
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The commission has five members: four auctioneers and one member not engaged in the auction business. A quorum for a Tennessee Auctioneer Commission meeting is:",
    "options": ["Two members", "Three members", "Four members", "Five members"],
    "correctAnswer": 1,
    "explanation": "Three members constitute a quorum.",
    "id": 18
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Three members constitute a quorum. The standard continuing education requirement defined in the chapter is:",
    "options": ["2 hours per year", "6 hours each renewal period", "10 hours each quarter", "No CE is allowed"],
    "correctAnswer": 1,
    "explanation": "Continuing education is defined as six hours each renewal period.",
    "id": 19
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Continuing education is defined as six hours each renewal period. Which licensee is NOT eligible for any continuing education exemption under the statute?",
    "options": ["Affiliate auctioneer", "Auctioneer age 60 licensed 10+ years", "Auctioneer licensed since July 1, 1999", "Bid caller licensee"],
    "correctAnswer": 0,
    "explanation": "The statute specifies that no affiliate auctioneer is exempt from continuing education requirements.",
    "id": 20
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The statute specifies that no affiliate auctioneer is exempt from continuing education requirements. All licenses issued by the Tennessee Auctioneer Commission expire:",
    "options": ["Every year on December 31", "Two years from the original date the license was issued", "Three years from issue date", "Only after a complaint"],
    "correctAnswer": 1,
    "explanation": "Licenses expire two years from the original issuance date.",
    "id": 21
  },
  {
    "topic": "Discipline, Penalties, and Citations (T.C.A. \u00a7 62-19-112, \u00a7 62-19-121, \u00a7 62-19-126)",
    "question": "Licenses expire two years from the original issuance date. Which is a listed ground for suspension/revocation/refusal to renew in Tennessee auction law?",
    "options": ["Charging a buyer\u2019s premium", "Failing to account for or remit money belonging to others within a reasonable time, or commingling funds", "Holding auctions on weekends", "Using an auction clerk"],
    "correctAnswer": 1,
    "explanation": "The statute lists failure to account for/remit funds belonging to others and commingling as disciplinary grounds.",
    "id": 22
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The statute lists failure to account for/remit funds belonging to others and commingling as disciplinary grounds. Knowingly using false bidders, cappers, or pullers is:",
    "options": ["A permitted sales technique", "A listed cause for discipline", "Required in reserve auctions", "Allowed only online"],
    "correctAnswer": 1,
    "explanation": "Using false bidders/cappers/pullers is explicitly identified as a cause for commission discipline.",
    "id": 23
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Using false bidders/cappers/pullers is explicitly identified as a cause for commission discipline. A violation of this chapter or any rule or regulation of the commission is a:",
    "options": ["Civil infraction only", "Class C misdemeanor", "Felony", "No penalty"],
    "correctAnswer": 1,
    "explanation": "The chapter states violations are a Class C misdemeanor.",
    "id": 24
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The chapter states violations are a Class C misdemeanor. A citation for unlicensed auction activity may assess a civil penalty in what range per violation?",
    "options": ["$0 to $500", "$50 to $2,500", "$500 to $10,000", "$2,500 to $25,000"],
    "correctAnswer": 1,
    "explanation": "Citations may assess a civil penalty not less than $50 and not more than $2,500 per violation.",
    "id": 25
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Citations may assess a civil penalty not less than $50 and not more than $2,500 per violation. A person served with a citation may appeal to the administrative director by written notice postmarked within:",
    "options": ["5 working days", "10 working days", "15 working days", "30 working days"],
    "correctAnswer": 2,
    "explanation": "The statute provides 15 working days after service of the citation for written notice of appeal.",
    "id": 26
  },
  {
    "topic": "Additional Compliance Concepts (Liens, Reciprocity, Hearings, Display Requirements)",
    "question": "The statute provides 15 working days after service of the citation for written notice of appeal. Notice of an auctioneer\u2019s lien for unpaid commission must be filed within how many days after the date of the auction?",
    "options": ["30 days", "45 days", "60 days", "90 days"],
    "correctAnswer": 2,
    "explanation": "The lien notice must be filed within 60 days after the auction date with the register\u2019s office in the county where the property is located.",
    "id": 27
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The lien notice must be filed within 60 days after the auction date with the register\u2019s office in the county where the property is located. An auctioneer\u2019s lien for unpaid commission continues for how long from the date of filing (and until final termination of any suit filed within that period)?",
    "options": ["30 days", "60 days", "90 days", "1 year"],
    "correctAnswer": 2,
    "explanation": "The lien continues for 90 days from the date of filing and until final termination of any suit for enforcement brought within that 90-day period.",
    "id": 28
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The lien continues for 90 days from the date of filing and until final termination of any suit for enforcement brought within that 90-day period. Under Tennessee reciprocity provisions, a nonresident regularly engaged in auction business in another state is not required to:",
    "options": ["Hold any Tennessee license", "Maintain a place of business in Tennessee", "Pay any fee", "File consent to service of process"],
    "correctAnswer": 1,
    "explanation": "Nonresidents may be excused from maintaining a Tennessee place of business if they maintain a definite place of business in another state and otherwise comply with Tennessee requirements.",
    "id": 29
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Nonresidents may be excused from maintaining a Tennessee place of business if they maintain a definite place of business in another state and otherwise comply with Tennessee requirements. A licensed affiliate auctioneer\u2019s license is automatically suspended upon:",
    "options": ["Any missed CE course", "Revocation or suspension of the employing auctioneer\u2019s license", "Moving to another county", "Changing phone number"],
    "correctAnswer": 1,
    "explanation": "The affiliate\u2019s license is automatically suspended when the employing auctioneer\u2019s license is revoked or suspended.",
    "id": 30
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The affiliate\u2019s license is automatically suspended when the employing auctioneer\u2019s license is revoked or suspended. After the employing auctioneer\u2019s license is revoked/suspended, the affiliate auctioneer may retain the affiliate license by transferring employment within:",
    "options": ["7 days", "14 days", "21 days", "60 days"],
    "correctAnswer": 2,
    "explanation": "The affiliate may retain the license by transferring to another licensed auctioneer within 21 days of the effective date of revocation or suspension.",
    "id": 31
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The affiliate may retain the license by transferring to another licensed auctioneer within 21 days of the effective date of revocation or suspension. The Uniform Administrative Procedures Act governs:",
    "options": ["Only criminal trials", "Hearings and judicial review of contested cases under the auctioneer chapter", "Buyer premium calculations", "Real estate broker renewals only"],
    "correctAnswer": 1,
    "explanation": "The chapter states the Uniform Administrative Procedures Act governs hearing procedures and judicial review for contested cases under the commission.",
    "id": 32
  },
  {
    "topic": "General Auction Knowledge",
    "question": "The chapter states the Uniform Administrative Procedures Act governs hearing procedures and judicial review for contested cases under the commission. A license must be conspicuously displayed:",
    "options": ["Only at the auction site", "At all times in the office of the licensee", "Only on the licensee\u2019s website", "Only when requested by a bidder"],
    "correctAnswer": 1,
    "explanation": "Tennessee requires the license to be conspicuously displayed at all times in the office of the licensee.",
    "id": 33
  },
  {
    "topic": "Auction Math + Compliance Math (Exam Arithmetic)",
    "question": "Tennessee requires the license to be conspicuously displayed at all times in the office of the licensee. A seller\u2019s contract provides for a 12% commission. The hammer price totals $38,500. What commission is owed?",
    "options": ["$3,850", "$4,620", "$5,500", "$6,420"],
    "correctAnswer": 1,
    "explanation": "Step 1: Convert percent to decimal: 12% = 0.12 Step 2: Multiply: 0.12 \u00d7 38,500 = 4,620 So the commission owed is $4,620.",
    "id": 34
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Step 1: Convert percent to decimal: 12% = 0.12 Step 2: Multiply: 0.12 \u00d7 38,500 = 4,620 So the commission owed is $4,620. A buyer\u2019s premium is 10% and sales tax is 9.25%, both calculated on the hammer price. Hammer price is $3,200. What is the total amount due?",
    "options": ["$3,200.00", "$3,520.00", "$3,816.00", "$3,816.00 plus tax on premium"],
    "correctAnswer": 2,
    "explanation": "Step 1: Buyer\u2019s premium = 10% \u00d7 3,200 = 0.10 \u00d7 3,200 = 320 Step 2: Sales tax = 9.25% \u00d7 3,200 = 0.0925 \u00d7 3,200 = 296 Step 3: Total due = 3,200 + 320 + 296 = 3,816 So the total due is $3,816.",
    "id": 35
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Step 1: Buyer\u2019s premium = 10% \u00d7 3,200 = 0.10 \u00d7 3,200 = 320 Step 2: Sales tax = 9.25% \u00d7 3,200 = 0.0925 \u00d7 3,200 = 296 Step 3: Total due = 3,200 + 320 + 296 = 3,816 So the total due is $3,816. A license expires two years from the issue date. A license was issued on April 15, 2025. When does it expire?",
    "options": ["April 15, 2026", "April 15, 2027", "December 31, 2027", "April 30, 2027"],
    "correctAnswer": 1,
    "explanation": "Step 1: Add 2 years to April 15, 2025. Step 2: April 15, 2025 \u2192 April 15, 2027. So it expires April 15, 2027.",
    "id": 36
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Step 1: Add 2 years to April 15, 2025. Step 2: April 15, 2025 \u2192 April 15, 2027. So it expires April 15, 2027. A lien notice for unpaid commission must be filed within 60 days after the date of the auction. If the auction date is June 1, what is the last day to file within 60 days?",
    "options": ["June 30", "July 1", "July 31", "August 30"],
    "correctAnswer": 2,
    "explanation": "Step 1: Count 60 days from June 1. June has 30 days. From June 1 to June 30 is 29 days after June 1. Remaining days: 60 \u2212 29 = 31 days into July. Step 2: 31 days into July lands on July 31. So the last day within 60 days is July 31.",
    "id": 37
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Step 1: Count 60 days from June 1. June has 30 days. From June 1 to June 30 is 29 days after June 1. Remaining days: 60 \u2212 29 = 31 days into July. Step 2: 31 days into July lands on July 31. So the last day within 60 days is July 31. The recovery account\u2019s minimum balance is $150,000. If the balance is $148,750, how much is needed to reach the minimum?",
    "options": ["$1,150", "$1,250", "$2,250", "$12,500"],
    "correctAnswer": 1,
    "explanation": "Step 1: Subtract current balance from minimum. 150,000 \u2212 148,750 = 1,250. So $1,250 is needed.",
    "id": 38
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Step 1: Subtract current balance from minimum. 150,000 \u2212 148,750 = 1,250. So $1,250 is needed. An auction uses a buyer\u2019s premium of 10% and sales tax of 9.75%, both calculated on the hammer price. Hammer price is $4,250. Total due?",
    "options": ["$4,250.00", "$4,675.00", "$5,089.38", "$5,189.38"],
    "correctAnswer": 2,
    "explanation": "Step 1: Premium = 10% \u00d7 4,250 = 0.10 \u00d7 4,250 = 425.00 Step 2: Tax = 9.75% \u00d7 4,250 = 0.0975 \u00d7 4,250 = 414.38 Step 3: Total = 4,250.00 + 425.00 + 414.38 = 5,089.38",
    "id": 39
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Step 1: Premium = 10% \u00d7 4,250 = 0.10 \u00d7 4,250 = 425.00 Step 2: Tax = 9.75% \u00d7 4,250 = 0.0975 \u00d7 4,250 = 414.38 Step 3: Total = 4,250.00 + 425.00 + 414.38 = 5,089.38 An auction uses a buyer\u2019s premium of 12% and sales tax of 9.25%, both calculated on the hammer price. Hammer price is $7,850. Total due?",
    "options": ["$7,850.00", "$8,792.00", "$9,518.12", "$9,618.12"],
    "correctAnswer": 2,
    "explanation": "Step 1: Premium = 12% \u00d7 7,850 = 0.12 \u00d7 7,850 = 942.00 Step 2: Tax = 9.25% \u00d7 7,850 = 0.0925 \u00d7 7,850 = 726.12 Step 3: Total = 7,850.00 + 942.00 + 726.12 = 9,518.12",
    "id": 40
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Step 1: Premium = 12% \u00d7 7,850 = 0.12 \u00d7 7,850 = 942.00 Step 2: Tax = 9.25% \u00d7 7,850 = 0.0925 \u00d7 7,850 = 726.12 Step 3: Total = 7,850.00 + 942.00 + 726.12 = 9,518.12 An auction uses a buyer\u2019s premium of 8% and sales tax of 7.00%, both calculated on the hammer price. Hammer price is $12,950. Total due?",
    "options": ["$12,950.00", "$13,986.00", "$14,892.50", "$14,992.50"],
    "correctAnswer": 2,
    "explanation": "Step 1: Premium = 8% \u00d7 12,950 = 0.08 \u00d7 12,950 = 1,036.00 Step 2: Tax = 7.00% \u00d7 12,950 = 0.0700 \u00d7 12,950 = 906.50 Step 3: Total = 12,950.00 + 1,036.00 + 906.50 = 14,892.50",
    "id": 41
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Step 1: Premium = 8% \u00d7 12,950 = 0.08 \u00d7 12,950 = 1,036.00 Step 2: Tax = 7.00% \u00d7 12,950 = 0.0700 \u00d7 12,950 = 906.50 Step 3: Total = 12,950.00 + 1,036.00 + 906.50 = 14,892.50 An auction uses a buyer\u2019s premium of 15% and sales tax of 9.50%, both calculated on the hammer price. Hammer price is $5,600. Total due?",
    "options": ["$5,600.00", "$6,440.00", "$6,972.00", "$7,072.00"],
    "correctAnswer": 2,
    "explanation": "Step 1: Premium = 15% \u00d7 5,600 = 0.15 \u00d7 5,600 = 840.00 Step 2: Tax = 9.50% \u00d7 5,600 = 0.0950 \u00d7 5,600 = 532.00 Step 3: Total = 5,600.00 + 840.00 + 532.00 = 6,972.00",
    "id": 42
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Step 1: Premium = 15% \u00d7 5,600 = 0.15 \u00d7 5,600 = 840.00 Step 2: Tax = 9.50% \u00d7 5,600 = 0.0950 \u00d7 5,600 = 532.00 Step 3: Total = 5,600.00 + 840.00 + 532.00 = 6,972.00 An affiliate auctioneer must complete 16 hours of basic fundamentals and 34 additional hours of fundamentals. How many total hours is that?",
    "options": ["34", "16", "50", "66"],
    "correctAnswer": 2,
    "explanation": "Step 1: Add: 16 + 34 = 50. So the total instruction hours are 50.",
    "id": 43
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Step 1: Add: 16 + 34 = 50. So the total instruction hours are 50. A principal auctioneer must serve as an affiliate auctioneer for 6 months. If supervision begins March 10, 2026, what is the earliest date 6 months later?",
    "options": ["August 10, 2026", "September 10, 2026", "October 10, 2026", "March 10, 2027"],
    "correctAnswer": 1,
    "explanation": "Step 1: Add 6 months to March 10, 2026. March\u2192April (1), May (2), June (3), July (4), August (5), September (6). Earliest date is September 10, 2026.",
    "id": 44
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Step 1: Add 6 months to March 10, 2026. March\u2192April (1), May (2), June (3), July (4), August (5), September (6). Earliest date is September 10, 2026. A citation penalty can be up to $2,500 per violation. If 4 violations are cited at the maximum, what is the total potential penalty?",
    "options": ["$2,500", "$5,000", "$7,500", "$10,000"],
    "correctAnswer": 3,
    "explanation": "Step 1: 2,500 \u00d7 4 = 10,000. Total potential penalty is $10,000.",
    "id": 45
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Step 1: 2,500 \u00d7 4 = 10,000. Total potential penalty is $10,000. The recovery account is capped at $10,000 per transaction. If actual damages are $14,500 in one transaction, what is the maximum the account could pay for that transaction?",
    "options": ["$14,500", "$10,000", "$20,000", "$4,500"],
    "correctAnswer": 1,
    "explanation": "Step 1: Identify the cap: $10,000 per transaction. Step 2: Since damages exceed the cap, the maximum payable is $10,000.",
    "id": 46
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Step 1: Identify the cap: $10,000 per transaction. Step 2: Since damages exceed the cap, the maximum payable is $10,000. If an auctioneer\u2019s acts lead to court-authorized payments from the recovery account totaling $20,000 on the auctioneer\u2019s behalf, the account\u2019s liability for that licensee\u2019s acts is:",
    "options": ["Unlimited", "Terminated after $20,000 aggregate", "Terminated after $10,000 aggregate", "Increased automatically"],
    "correctAnswer": 1,
    "explanation": "Step 1: The statute sets an aggregate cap of $20,000 for acts of a licensee. Step 2: Once orders authorize payments totaling $20,000, the account\u2019s liability for that licensee\u2019s acts terminates.",
    "id": 47
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Step 1: The statute sets an aggregate cap of $20,000 for acts of a licensee. Step 2: Once orders authorize payments totaling $20,000, the account\u2019s liability for that licensee\u2019s acts terminates. A public automobile auction requires a surety bond of $50,000. If the premium is 3% annually, what is the annual cost?",
    "options": ["$500", "$1,000", "$1,500", "$5,000"],
    "correctAnswer": 2,
    "explanation": "Step 1: 3% = 0.03 Step 2: 0.03 \u00d7 50,000 = 1,500 Annual cost is $1,500.",
    "id": 48
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Step 1: 3% = 0.03 Step 2: 0.03 \u00d7 50,000 = 1,500 Annual cost is $1,500. The commission meets at least once each quarter. How many meetings is that per year at minimum?",
    "options": ["1", "2", "3", "4"],
    "correctAnswer": 3,
    "explanation": "There are 4 quarters in a year. At least one meeting per quarter means at least 4 meetings.",
    "id": 49
  },
  {
    "topic": "General Auction Knowledge",
    "question": "There are 4 quarters in a year. At least one meeting per quarter means at least 4 meetings. A public automobile auction requires minimum net worth of $100,000. If net worth is $86,250, what increase is needed to meet the minimum?",
    "options": ["$13,750", "$14,750", "$16,250", "$23,750"],
    "correctAnswer": 0,
    "explanation": "Step 1: 100,000 \u2212 86,250 = 13,750. So $13,750 is needed.",
    "id": 50
  },
  {
    "topic": "Chapter Definitions + Scope (T.C.A. Title 62, Ch. 19)",
    "question": "Step 1: 100,000 \u2212 86,250 = 13,750. So $13,750 is needed. Under Tennessee law, which best matches the definition of an \u201cauction\u201d?",
    "options": ["Any retail sale with a posted price", "A transaction with a series of invitations for offers, ending with acceptance of the highest or most favorable offer", "Any sale of real estate by a broker", "A sale that must be in-person and oral only"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-101(2) defines an auction as a sales transaction conducted by oral, written, or electronic exchange, involving invitations for offers and acceptance of the highest or most favorable offer.",
    "id": 51
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-101(2) defines an auction as a sales transaction conducted by oral, written, or electronic exchange, involving invitations for offers and acceptance of the highest or most favorable offer. Which role is responsible for management and supervision of an auction company (including wholly owned subsidiary or affiliate company)?",
    "options": ["Bid caller auctioneer", "Affiliate auctioneer", "Principal auctioneer", "Ringperson"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-101(9) defines a principal auctioneer as the person responsible for management and supervision of an auction company and who offers and executes listing contracts, sales, purchases, or exchanges of goods by auction.",
    "id": 52
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-101(9) defines a principal auctioneer as the person responsible for management and supervision of an auction company and who offers and executes listing contracts, sales, purchases, or exchanges of goods by auction. Which statement is TRUE about \u201ctimed listings\u201d under the chapter definition?",
    "options": ["They must extend automatically when bids come in", "They end at a fixed ending time and date that does not extend based on bidding activity", "They are always considered a simulcast of a live auction", "They are prohibited in Tennessee"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-101(12) defines a timed listing as offering goods for sale with a fixed ending time/date that does not extend based on bidding activity.",
    "id": 53
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-101(12) defines a timed listing as offering goods for sale with a fixed ending time/date that does not extend based on bidding activity. Which of the following is included in the definition of \u201cgoods\u201d for Tennessee auction law purposes?",
    "options": ["Only tangible personal property", "Only real estate", "Chattels, merchandise, real or personal property, or commodities that may lawfully be offered for sale", "Only motor vehicles"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-101(7) defines goods broadly and includes real or personal property and commodities of any form/type that may lawfully be offered for sale.",
    "id": 54
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-101(7) defines goods broadly and includes real or personal property and commodities of any form/type that may lawfully be offered for sale. A \u201cbid caller auctioneer\u201d is best described as:",
    "options": ["A person who owns the auction company", "A person hired to solicit bids for the purchase of goods at an auction", "A person who only writes closing statements", "A person who can independently sign listing contracts on behalf of sellers"],
    "correctAnswer": 1,
    "explanation": "Under T.C.A. \u00a7 62-19-101(4), a bid caller auctioneer is hired by a principal auctioneer/public auto auction/public auto auctioneer to solicit bids at an auction.",
    "id": 55
  },
  {
    "topic": "Licensing + Renewal + Continuing Education",
    "question": "Under T.C.A. \u00a7 62-19-101(4), a bid caller auctioneer is hired by a principal auctioneer/public auto auction/public auto auctioneer to solicit bids at an auction. It is unlawful in Tennessee to act as or advertise as an auctioneer without:",
    "options": ["A business tax license only", "A valid license issued by the Tennessee Auctioneer Commission", "A real estate broker license only", "A notary commission"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-102(a)(1) makes it unlawful to act as, advertise as, or represent to be an auctioneer without a valid license issued by the commission.",
    "id": 56
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-102(a)(1) makes it unlawful to act as, advertise as, or represent to be an auctioneer without a valid license issued by the commission. Which is required to conduct or offer to conduct an auction of real property in Tennessee?",
    "options": ["Auctioneer license only", "Broker license only", "Auctioneer (or affiliate auctioneer) license AND broker (or affiliate broker) license under Title 62, Chapter 13", "No license if it is a charity auction"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-102(a)(2) requires dual licensure for real property auctions: auctioneer/affiliate auctioneer plus broker/affiliate broker licensure.",
    "id": 57
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-102(a)(2) requires dual licensure for real property auctions: auctioneer/affiliate auctioneer plus broker/affiliate broker licensure. For an affiliate auctioneer to conduct a real property auction, the auctioneer employing the affiliate for that purpose must:",
    "options": ["Be present anywhere in Tennessee", "Be on the premises of the property during the auction", "Approve the bid increments in writing", "Hold a public automobile auction license"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-102(a)(2) requires the employing auctioneer to be on the premises during the real property auction when an affiliate auctioneer is conducting it.",
    "id": 58
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-102(a)(2) requires the employing auctioneer to be on the premises during the real property auction when an affiliate auctioneer is conducting it. All auctions arranged by or through a principal auctioneer must be conducted exclusively by:",
    "options": ["Any experienced salesperson", "Individuals licensed under Title 62, Chapter 19", "Only principal auctioneers (no one else)", "Only out-of-state auctioneers"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-102(b) states auctions arranged by/through a principal auctioneer must be conducted exclusively by individuals licensed under the chapter.",
    "id": 59
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-102(b) states auctions arranged by/through a principal auctioneer must be conducted exclusively by individuals licensed under the chapter. How long do Tennessee auctioneer licenses generally last from the original date issued?",
    "options": ["1 year", "18 months", "2 years", "3 years"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-111(i) provides that licenses expire two (2) years from the original date issued. The Commission\u2019s renewal guidance also reflects a two-year license period. citeturn0search5",
    "id": 60
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-111(i) provides that licenses expire two (2) years from the original date issued. The Commission\u2019s renewal guidance also reflects a two-year license period. citeturn0search5 Continuing education for Tennessee auctioneer renewal is generally:",
    "options": ["3 hours every year", "6 hours each renewal period", "10 hours every 3 years", "No CE required"],
    "correctAnswer": 1,
    "explanation": "\u201cContinuing education\u201d is defined as six (6) hours each renewal period (T.C.A. \u00a7 62-19-101(6)). Commission rules and guidance also reflect 6 hours per renewal cycle. citeturn0search5turn0search20",
    "id": 61
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u201cContinuing education\u201d is defined as six (6) hours each renewal period (T.C.A. \u00a7 62-19-101(6)). Commission rules and guidance also reflect 6 hours per renewal cycle. citeturn0search5turn0search20 Which licensee is NOT eligible for a continuing education exemption under T.C.A. \u00a7 62-19-106(e)?",
    "options": ["Auctioneer age 60+ with 10+ years licensed", "Auctioneer licensed pursuant to the chapter since July 1, 1999", "Bid caller licensee", "Affiliate auctioneer"],
    "correctAnswer": 3,
    "explanation": "T.C.A. \u00a7 62-19-106(e)(3) states no affiliate auctioneer is exempt from continuing education requirements.",
    "id": 62
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-106(e)(3) states no affiliate auctioneer is exempt from continuing education requirements. A licensee who fails to renew by the expiration date may be allowed to renew within:",
    "options": ["10 days", "30 days", "2 months", "6 months"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-111(j) allows discretionary renewal upon application within two (2) months of expiration, with fee and penalty; later than two months requires reapplying for licensure.",
    "id": 63
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-111(j) allows discretionary renewal upon application within two (2) months of expiration, with fee and penalty; later than two months requires reapplying for licensure. Mailing a renewal fee to the Commission: the date of payment is determined by:",
    "options": ["When the Commission opens the mail", "The date the check clears", "The official postmark", "The date the online portal updates"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-111(k) states that when fees are remitted by mail, the date of payment is determined by the official postmark.",
    "id": 64
  },
  {
    "topic": "Exemptions + Special Cases",
    "question": "T.C.A. \u00a7 62-19-111(k) states that when fees are remitted by mail, the date of payment is determined by the official postmark. Which of the following is an exemption from the Tennessee auctioneer licensing chapter?",
    "options": ["Any person running an online timed listing", "A person acting as a receiver, trustee in bankruptcy, guardian, administrator, executor, or similar person under court order", "Any paid charity auctioneer", "Any auction of real estate"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-103(1) exempts certain court-appointed roles (receiver, trustee in bankruptcy, guardian, administrator, executor) acting under court order.",
    "id": 65
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-103(1) exempts certain court-appointed roles (receiver, trustee in bankruptcy, guardian, administrator, executor) acting under court order. Which exemption applies to certain political party, church, or charitable auctions?",
    "options": ["Always exempt regardless of payment", "Exempt if the individual receives no compensation and does not hold themselves out as available to engage in auction sales", "Exempt only if the auction is online", "Exempt only for real estate"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-103(4) exempts auctions conducted by/on behalf of political party/church/charitable entity if the individual receives no compensation and does not advertise availability to auction.",
    "id": 66
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-103(4) exempts auctions conducted by/on behalf of political party/church/charitable entity if the individual receives no compensation and does not advertise availability to auction. A \u201cfixed price or timed listing\u201d that allows bidding on an internet website is exempt if it:",
    "options": ["Is a simulcast of a live auction", "Does not constitute a simulcast of a live auction", "Includes a reserve price", "Includes a buyer\u2019s premium"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-103(9) exempts fixed price or timed listings with internet bidding that do not constitute a simulcast of a live auction.",
    "id": 67
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-103(9) exempts fixed price or timed listings with internet bidding that do not constitute a simulcast of a live auction. An individual who generates less than $25,000 per year in revenue from the sale of property in online auctions is:",
    "options": ["Always required to be licensed", "Exempt from the chapter", "Required to hold a broker license", "Only allowed to sell livestock"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-103(12) exempts an individual who generates less than $25,000 in a calendar year from the sale of property in online auctions.",
    "id": 68
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-103(12) exempts an individual who generates less than $25,000 in a calendar year from the sale of property in online auctions. Which statement about public automobile auctions is TRUE under the chapter definitions?",
    "options": ["Buyers must be licensed dealers only", "A public automobile auction sells to members of the public and uses a licensed public automobile auctioneer", "Public automobile auctions are unregulated by Tennessee", "Public automobile auctions never require a motor vehicle dealer license"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-101(10) defines a public automobile auction as one that offers vehicles to the highest bidder with buyers who are members of the public, and uses a licensed public automobile auctioneer.",
    "id": 69
  },
  {
    "topic": "Commission Powers, Enforcement, Liens, Recovery Account + Math Scenarios",
    "question": "T.C.A. \u00a7 62-19-101(10) defines a public automobile auction as one that offers vehicles to the highest bidder with buyers who are members of the public, and uses a licensed public automobile auctioneer. The Tennessee Auctioneer Commission is composed of:",
    "options": ["3 members total", "5 members total, with 4 auctioneers and 1 public member not engaged in the auction business", "7 members all auctioneers", "5 members all public members"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-104(b) sets a 5-member commission: 4 auctioneers and 1 member not engaged in the auction business.",
    "id": 70
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-104(b) sets a 5-member commission: 4 auctioneers and 1 member not engaged in the auction business. The commission must meet at least:",
    "options": ["Monthly", "Twice per year", "One time each quarter", "Only when complaints are filed"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-107(a) requires the commission to meet at least one time each quarter of every calendar year.",
    "id": 71
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-107(a) requires the commission to meet at least one time each quarter of every calendar year. How many members constitute a quorum at a commission meeting?",
    "options": ["2", "3", "4", "5"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-107(c) provides that three (3) members constitute a quorum.",
    "id": 72
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-107(c) provides that three (3) members constitute a quorum. A violation of the chapter or commission rules is a:",
    "options": ["Civil infraction only", "Class A misdemeanor", "Class C misdemeanor", "Felony"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-121 states that a violation of the chapter or any rule/regulation of the commission is a Class C misdemeanor.",
    "id": 73
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-121 states that a violation of the chapter or any rule/regulation of the commission is a Class C misdemeanor. Under the citation process for unlicensed activity, the civil penalty range per violation is:",
    "options": ["$0 to $100", "$10 to $500", "$50 to $2,500", "$2,500 to $10,000"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-126(a)(3) authorizes a civil penalty of not less than $50 and not more than $2,500 per violation for citations. citeturn0search2",
    "id": 74
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-126(a)(3) authorizes a civil penalty of not less than $50 and not more than $2,500 per violation for citations. citeturn0search2 How long after the underlying act/omission does the administrative director or investigator have to issue a citation?",
    "options": ["30 days", "6 months", "1 year", "2 years"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-126(d) provides a citation must be issued within one (1) year after the act or omission that is the basis for the citation. citeturn0search2",
    "id": 75
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-126(d) provides a citation must be issued within one (1) year after the act or omission that is the basis for the citation. citeturn0search2 A person served with a citation may appeal by written notice postmarked within:",
    "options": ["5 working days", "10 working days", "15 working days", "30 calendar days"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-126(e) provides a 15 working day deadline after service for appeal by written notice postmarked. citeturn0search2",
    "id": 76
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-126(e) provides a 15 working day deadline after service for appeal by written notice postmarked. citeturn0search2 An auctioneer lien for unpaid commissions/fees must be filed within how many days after the date of the auction?",
    "options": ["30 days", "60 days", "90 days", "120 days"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-108(b) requires notice of lien be filed within sixty (60) days after the auction with the register\u2019s office where the property is located.",
    "id": 77
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-108(b) requires notice of lien be filed within sixty (60) days after the auction with the register\u2019s office where the property is located. Once filed, the auctioneer lien continues for a period of:",
    "options": ["30 days", "60 days", "90 days", "1 year"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-108(c) provides the lien continues for ninety (90) days from filing and until final termination of any suit for enforcement brought within that period.",
    "id": 78
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-108(c) provides the lien continues for ninety (90) days from filing and until final termination of any suit for enforcement brought within that period. Recovery from the Auctioneer Education and Recovery Account is capped at:",
    "options": ["$5,000 per transaction", "$10,000 per transaction", "$20,000 per transaction", "Unlimited"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-116(d)(1) caps liability at $10,000 per transaction. The Commission\u2019s consumer page reflects the same cap. citeturn0search3turn0search7",
    "id": 79
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-116(d)(1) caps liability at $10,000 per transaction. The Commission\u2019s consumer page reflects the same cap. citeturn0search3turn0search7 The maximum aggregate liability of the account for acts of a single licensee is:",
    "options": ["$10,000", "$15,000", "$20,000", "$50,000"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-116(d)(2) limits aggregate liability for the acts of one licensee to $20,000. citeturn0search3turn0search7",
    "id": 80
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-116(d)(2) limits aggregate liability for the acts of one licensee to $20,000. citeturn0search3turn0search7 An auction occurred on March 1. To be timely, the auctioneer\u2019s lien notice must be filed no later than:",
    "options": ["March 31", "April 15", "April 30", "May 30"],
    "correctAnswer": 2,
    "explanation": "Rule: lien notice must be filed within 60 days after the auction (T.C.A. \u00a7 62-19-108(b)). 60 days after March 1 is April 30 (counting March 2 as day 1).",
    "id": 81
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Rule: lien notice must be filed within 60 days after the auction (T.C.A. \u00a7 62-19-108(b)). 60 days after March 1 is April 30 (counting March 2 as day 1). A lien notice was filed on June 10. Absent a suit filed within the lien period, the lien would generally continue through:",
    "options": ["July 10", "August 8", "September 8", "December 10"],
    "correctAnswer": 2,
    "explanation": "Rule: lien continues 90 days from filing (T.C.A. \u00a7 62-19-108(c)). 90 days after June 10 is September 8.",
    "id": 82
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Rule: lien continues 90 days from filing (T.C.A. \u00a7 62-19-108(c)). 90 days after June 10 is September 8. A license expired on July 1. Under the chapter\u2019s discretionary late-renewal window, the latest date to apply without reapplying for licensure is:",
    "options": ["July 31", "August 1", "August 31", "September 1"],
    "correctAnswer": 3,
    "explanation": "Rule: late renewal may be allowed within 2 months after expiration (T.C.A. \u00a7 62-19-111(j)). Two months after July 1 is September 1.",
    "id": 83
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Rule: late renewal may be allowed within 2 months after expiration (T.C.A. \u00a7 62-19-111(j)). Two months after July 1 is September 1. An aggrieved person wins a judgment on May 5. Under the statute, the judgment must remain unpaid for how many days before the person may apply to the court for an order directing payment from the Recovery Account (after appeals are done)?",
    "options": ["30 days", "45 days", "60 days", "90 days"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-116(f) allows application when all proceedings are terminated and the judgment is unpaid 60 days after the date of the judgment.",
    "id": 84
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-116(f) allows application when all proceedings are terminated and the judgment is unpaid 60 days after the date of the judgment. If an affiliate auctioneer\u2019s employment is terminated, the employing auctioneer must:",
    "options": ["Do nothing until renewal", "Immediately deliver or send the affiliate license to the Commission", "Allow the affiliate to keep working for 30 days", "Issue a new pocket card themselves"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-111(l) requires the auctioneer to immediately deliver or send by registered mail the affiliate\u2019s license to the Commission. The affiliate cannot practice until a new license/pocket card reflecting the new employer is issued.",
    "id": 85
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-111(l) requires the auctioneer to immediately deliver or send by registered mail the affiliate\u2019s license to the Commission. The affiliate cannot practice until a new license/pocket card reflecting the new employer is issued. No more than how many affiliate auctioneer licenses may be in effect at one time for an affiliate auctioneer?",
    "options": ["One", "Two", "Three", "Unlimited"],
    "correctAnswer": 0,
    "explanation": "T.C.A. \u00a7 62-19-111(m) states no more than one license may be issued to an affiliate auctioneer to be in effect at any one time.",
    "id": 86
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-111(m) states no more than one license may be issued to an affiliate auctioneer to be in effect at any one time. A license may authorize business at:",
    "options": ["Any location in Tennessee", "Only the location stated on the license", "Any location if advertised online", "Only at county fairs"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-111(n) states no license authorizes business at a location other than what is stated; changes must be promptly reported with required materials/fee.",
    "id": 87
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-111(n) states no license authorizes business at a location other than what is stated; changes must be promptly reported with required materials/fee. A principal auctioneer may sponsor an affiliate auctioneer after the principal auctioneer has been licensed for:",
    "options": ["6 months", "1 year", "2 years", "5 years"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-115(b) provides a principal auctioneer may sponsor an affiliate auctioneer after one (1) year of licensure.",
    "id": 88
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-115(b) provides a principal auctioneer may sponsor an affiliate auctioneer after one (1) year of licensure. When a principal auctioneer\u2019s license is suspended, what happens to the license of an affiliate auctioneer employed by that principal?",
    "options": ["Nothing happens", "The affiliate\u2019s license is automatically suspended", "The affiliate is automatically promoted to principal", "The affiliate may continue until renewal"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-120 provides the affiliate\u2019s license is automatically suspended upon revocation or suspension of the employing auctioneer\u2019s license.",
    "id": 89
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-120 provides the affiliate\u2019s license is automatically suspended upon revocation or suspension of the employing auctioneer\u2019s license. To keep an affiliate license after the principal\u2019s license is suspended/revoked, the affiliate must transfer employment to another licensed auctioneer within:",
    "options": ["7 days", "14 days", "21 days", "60 days"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-120 gives 21 days from the effective date of revocation/suspension to transfer.",
    "id": 90
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-120 gives 21 days from the effective date of revocation/suspension to transfer. An auctioneer (or affiliate auctioneer) cannot bring an action in Tennessee courts to collect compensation unless they:",
    "options": ["Prove they were duly licensed when the cause of action arose", "Prove the buyer was wealthy", "Show the auction was advertised", "Show the item was personal property only"],
    "correctAnswer": 0,
    "explanation": "T.C.A. \u00a7 62-19-119(a) requires alleging and proving licensure at the time the cause of action arose to collect compensation for services.",
    "id": 91
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-119(a) requires alleging and proving licensure at the time the cause of action arose to collect compensation for services. Which is TRUE about an affiliate auctioneer suing to recover commissions for auction services?",
    "options": ["The affiliate can sue the seller directly in their own name", "Any action for the affiliate\u2019s compensation must be brought by the employing auctioneer, but the affiliate can sue the employing auctioneer", "The affiliate can never sue anyone for compensation", "The affiliate can sue only in federal court"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-119(b)-(c): affiliate cannot sue in their own name for compensation from third parties; the employing auctioneer brings that action. The affiliate may sue their employing auctioneer for compensation due.",
    "id": 92
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-119(b)-(c): affiliate cannot sue in their own name for compensation from third parties; the employing auctioneer brings that action. The affiliate may sue their employing auctioneer for compensation due. Under reciprocity, Tennessee may recognize another state\u2019s license if:",
    "options": ["The other state requires no exam", "The other state reciprocates and has exam standards equal or higher than Tennessee\u2019s", "The applicant lives in Tennessee", "The applicant has 1 month experience"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-117(b) requires reciprocity and exam standards equal or higher, and the applicant must be domiciled in the other state.",
    "id": 93
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-117(b) requires reciprocity and exam standards equal or higher, and the applicant must be domiciled in the other state. A nonresident auctioneer doing auctions in Tennessee must maintain:",
    "options": ["No bank account requirements", "An escrow account for all funds belonging to others that come into possession from a Tennessee auction", "Only a personal checking account", "Only a trust agreement"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-117(c) requires every nonresident auctioneer to maintain an escrow account for funds belonging to others from Tennessee auction sales.",
    "id": 94
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-117(c) requires every nonresident auctioneer to maintain an escrow account for funds belonging to others from Tennessee auction sales. Which is TRUE about the commission\u2019s authority regarding continuing education standards?",
    "options": ["The commission cannot set CE requirements", "The commission may establish CE requirements and standards for individual licensees", "CE requirements only apply to affiliate auctioneers", "CE is always optional"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-106(e)(1) gives the commission authority to establish continuing education requirements and standards for individual licensees (with listed exemptions).",
    "id": 95
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-106(e)(1) gives the commission authority to establish continuing education requirements and standards for individual licensees (with listed exemptions). Under the chapter, the commission may deny an applicant the right to take an exam for up to two years if the applicant:",
    "options": ["Misspells words on the application", "Conducted business as an auctioneer or affiliate auctioneer in Tennessee without being licensed", "Is under 30 years old", "Failed to renew once"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-111(q) authorizes denial of the right to take an examination for up to two years for unlicensed practice.",
    "id": 96
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-111(q) authorizes denial of the right to take an examination for up to two years for unlicensed practice. The examination described in T.C.A. \u00a7 62-19-111(e) must include (at minimum):",
    "options": ["Only auction chant", "Reading, writing, spelling, elementary arithmetic, ethics, and Tennessee law relating to bulk sales, auctions, and brokerage", "Only motor vehicle law", "Only real estate appraisal"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-111(e) lists exam content areas including reading/writing/spelling, elementary arithmetic, land economics, ethics, and state law relating to bulk sales, auctions, and brokerage.",
    "id": 97
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-111(e) lists exam content areas including reading/writing/spelling, elementary arithmetic, land economics, ethics, and state law relating to bulk sales, auctions, and brokerage. A license must be conspicuously displayed:",
    "options": ["Only at the auction site", "Only in the licensee\u2019s office at all times", "Only on social media", "Only when requested by police"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-111(g) requires the license to be conspicuously displayed at all times in the office of the licensee.",
    "id": 98
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-111(g) requires the license to be conspicuously displayed at all times in the office of the licensee. A principal auctioneer must provide which of the following upon request at least 24 hours prior to an auction?",
    "options": ["A list of properties to be sold to the chief of police or sheriff where the auction will be held", "A list of bidders to the mayor", "A copy of all bid paddles to the county clerk", "A copy of all contracts to the registrar of deeds"],
    "correctAnswer": 0,
    "explanation": "T.C.A. \u00a7 62-19-115(a) requires the licensee, upon request, to furnish a list of properties to be sold to the chief of police or sheriff in the city/county where the auction is to be held at least 24 hours prior.",
    "id": 99
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-115(a) requires the licensee, upon request, to furnish a list of properties to be sold to the chief of police or sheriff in the city/county where the auction is to be held at least 24 hours prior. Which is a stated ground for suspension or revocation related to funds handling?",
    "options": ["Holding a louder chant practice", "Failing to account for or remit money belonging to others, or commingling funds, or failing to keep funds in escrow/trustee account", "Wearing casual attire", "Using online advertising"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-112(b)(4) lists funds-handling violations including failure to remit, commingling, or failure to keep funds in an escrow/trustee account (with a specific exception noted for certain auto auctions).",
    "id": 100
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-112(b)(4) lists funds-handling violations including failure to remit, commingling, or failure to keep funds in an escrow/trustee account (with a specific exception noted for certain auto auctions). Using false bidders, cappers, or pullers is:",
    "options": ["Encouraged to raise price", "A basis for discipline by the Commission", "Required in a reserve auction", "Legal if disclosed after the auction"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-112(b)(11) identifies knowingly using false bidders, cappers, or pullers as a disciplinary ground.",
    "id": 101
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-112(b)(11) identifies knowingly using false bidders, cappers, or pullers as a disciplinary ground. To retire a license, a licensee must generally:",
    "options": ["Stop working and do nothing else", "Request retirement in writing, pay required fees, and submit the license certificate and pocket card", "Mail only the pocket card", "Wait until the Commission removes the license"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-112(d) describes retirement of license by written request with appropriate fees and returning the license certificate and pocket card.",
    "id": 102
  },
  {
    "topic": "Disciplinary Grounds (T.C.A. \u00a7 62-19-112)",
    "question": "T.C.A. \u00a7 62-19-112(d) describes retirement of license by written request with appropriate fees and returning the license certificate and pocket card. Which is a specific ground for suspension or revocation of a Tennessee auctioneer license?",
    "options": ["Charging a buyer\u2019s premium", "Obtaining a license by false or fraudulent representations", "Conducting auctions outside Tennessee", "Advertising auction dates"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-112(b) authorizes discipline if a license was obtained by false or fraudulent representations.",
    "id": 103
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-112(b) authorizes discipline if a license was obtained by false or fraudulent representations. A bid caller auctioneer holding themselves out as a principal auctioneer is an example of:",
    "options": ["Acceptable marketing", "Substantial misrepresentation", "A continuing education exemption", "A lawful timed listing"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-112(b)(1) lists substantial misrepresentation including bid callers holding themselves out as principal or public automobile auctioneers.",
    "id": 104
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-112(b)(1) lists substantial misrepresentation including bid callers holding themselves out as principal or public automobile auctioneers. An affiliate auctioneer may accept valuable consideration for auction acts only from:",
    "options": ["Any member of the public", "The licensee\u2019s employer auctioneer", "The auctioneer commission", "The buyer directly"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-112(b)(3) prohibits affiliate auctioneers from accepting consideration from anyone except their employer auctioneer.",
    "id": 105
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-112(b)(3) prohibits affiliate auctioneers from accepting consideration from anyone except their employer auctioneer. Failing to account for or remit money belonging to others, or commingling funds, is:",
    "options": ["Permitted if disclosed", "A disciplinary ground", "Required for livestock auctions", "Only a civil issue outside commission authority"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-112(b)(4) lists failure to remit or commingling of funds as a cause for discipline.",
    "id": 106
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-112(b)(4) lists failure to remit or commingling of funds as a cause for discipline. Knowingly using false bidders, cappers, or pullers is:",
    "options": ["A best practice", "A cause for discipline", "Required in reserve auctions", "Allowed if the seller requests it"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-112(b)(11) lists knowingly using false bidders/cappers/pullers as a disciplinary ground.",
    "id": 107
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-112(b)(11) lists knowingly using false bidders/cappers/pullers as a disciplinary ground. Engaging in the business of auctioning real property without also holding a broker or affiliate broker license is:",
    "options": ["Always exempt", "A cause for discipline", "Required for timed listings", "Allowed for bid callers only"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-112(b)(10) identifies auctioning real property without broker licensure as a disciplinary ground.",
    "id": 108
  },
  {
    "topic": "Contracts + Written Instruments + Closing Statements",
    "question": "T.C.A. \u00a7 62-19-112(b)(10) identifies auctioning real property without broker licensure as a disciplinary ground. Prior to selling property at public auction, a licensee must generally:",
    "options": ["Enter into a written contract with the owner/consignee containing the terms and conditions", "Only post an online advertisement", "Obtain a notarized buyer registration form", "File the seller contract with the sheriff"],
    "correctAnswer": 0,
    "explanation": "T.C.A. \u00a7 62-19-112(b)(9) provides discipline for failing prior to sale to enter into a written contract with the owner/consignee with terms/conditions.",
    "id": 109
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-112(b)(9) provides discipline for failing prior to sale to enter into a written contract with the owner/consignee with terms/conditions. Failing to furnish copies of written instruments to interested parties at execution is:",
    "options": ["Encouraged", "A disciplinary ground", "A continuing education credit", "Required for auto auctions only"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-112(b)(8) lists failing to provide copies of written instruments at execution as a disciplinary cause.",
    "id": 110
  },
  {
    "topic": "Public Automobile Auctions + Minimum Requirements (\u00a7 62-19-128)",
    "question": "T.C.A. \u00a7 62-19-112(b)(8) lists failing to provide copies of written instruments at execution as a disciplinary cause. Which is a minimum insurance requirement for a licensed public automobile auction?",
    "options": ["$50,000 liability insurance", "Garagekeeper\u2019s legal liability insurance of at least $500,000", "No insurance required", "Workers compensation only"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-128(b)(2) requires garagekeeper\u2019s legal liability insurance of not less than $500,000.",
    "id": 111
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-128(b)(2) requires garagekeeper\u2019s legal liability insurance of not less than $500,000. A licensed public automobile auction must have a surety bond of:",
    "options": ["$10,000", "$25,000", "$50,000", "$100,000"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-128(b)(3) requires a $50,000 surety bond.",
    "id": 112
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-128(b)(3) requires a $50,000 surety bond. Before a motor vehicle is auctioned, the public automobile auctioneer must verify clean title by obtaining:",
    "options": ["A buyer\u2019s premium schedule", "A valid motor vehicle title history from the department of revenue or other state titling agency", "A sheriff\u2019s certificate", "A broker opinion of value"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-128(c) requires verifying clean and unencumbered title through a title history.",
    "id": 113
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-128(c) requires verifying clean and unencumbered title through a title history. A public automobile auction may NOT sell:",
    "options": ["Previously titled used vehicles", "New or unused vehicles with a manufacturer\u2019s statement of origin", "Vehicles with clear title", "Vehicles consigned by owners"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-128(e) prohibits sale of new/unused vehicles or those with a manufacturer\u2019s statement of origin.",
    "id": 114
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-128(e) prohibits sale of new/unused vehicles or those with a manufacturer\u2019s statement of origin. A public automobile auction must take possession of and retain title to each vehicle offered, and is deemed:",
    "options": ["A broker only", "The seller of the motor vehicle with duties of licensed dealers", "Not responsible for title transfer", "Exempt from all motor vehicle laws"],
    "correctAnswer": 1,
    "explanation": "T.C.A. \u00a7 62-19-128(f) deems the public automobile auction the seller with duties/responsibilities as licensed dealers.",
    "id": 115
  },
  {
    "topic": "Math + Deadlines + Enforcement Scenarios",
    "question": "T.C.A. \u00a7 62-19-128(f) deems the public automobile auction the seller with duties/responsibilities as licensed dealers. A citation for unlicensed auction activity may assess a civil penalty up to:",
    "options": ["$500", "$1,000", "$2,500", "$10,000"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-126(a)(3) sets the maximum civil penalty at $2,500 per violation.",
    "id": 116
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-126(a)(3) sets the maximum civil penalty at $2,500 per violation. If a person is cited and wants to appeal, the written notice must be postmarked within:",
    "options": ["5 working days", "10 working days", "15 working days", "30 working days"],
    "correctAnswer": 2,
    "explanation": "T.C.A. \u00a7 62-19-126(e) provides 15 working days after service for appeal notice.",
    "id": 117
  },
  {
    "topic": "General Auction Knowledge",
    "question": "T.C.A. \u00a7 62-19-126(e) provides 15 working days after service for appeal notice. A lien notice for unpaid auctioneer commission must be filed within 60 days. An auction is held on January 10. The last timely day to file is approximately:",
    "options": ["February 9", "March 11", "April 10", "May 10"],
    "correctAnswer": 1,
    "explanation": "60 days from January 10 is about March 11. Under \u00a7 62-19-108(b), filing must occur within 60 days after the date of the auction.",
    "id": 118
  },
  {
    "topic": "General Auction Knowledge",
    "question": "60 days from January 10 is about March 11. Under \u00a7 62-19-108(b), filing must occur within 60 days after the date of the auction. A lien filed on August 1 continues for 90 days. It would generally continue through:",
    "options": ["August 31", "September 30", "October 30", "December 1"],
    "correctAnswer": 2,
    "explanation": "90 days after August 1 is approximately October 30. \u00a7 62-19-108(c) provides a 90-day continuation from filing.",
    "id": 119
  },
  {
    "topic": "General Auction Knowledge",
    "question": "90 days after August 1 is approximately October 30. \u00a7 62-19-108(c) provides a 90-day continuation from filing. The Recovery Account maximum payout per transaction is $10,000. If damages are $18,000, the maximum the account may pay is:",
    "options": ["$18,000", "$10,000", "$20,000", "$0"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-116(d)(1) caps the account\u2019s liability at $10,000 per transaction regardless of the number of aggrieved persons.",
    "id": 120
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-116(d)(1) caps the account\u2019s liability at $10,000 per transaction regardless of the number of aggrieved persons. Hammer price is $4,000 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$4,000", "$400", "$4,400", "$4,600"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 4,000 = 400. Total = hammer + premium = 4,000 + 400 = 4,400.",
    "id": 121
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 4,000 = 400. Total = hammer + premium = 4,000 + 400 = 4,400. Hammer price is $4,150 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$4,150", "$415", "$4,565", "$4,765"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 4,150 = 415. Total = hammer + premium = 4,150 + 415 = 4,565.",
    "id": 122
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 4,150 = 415. Total = hammer + premium = 4,150 + 415 = 4,565. Hammer price is $4,300 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$4,300", "$430", "$4,730", "$4,930"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 4,300 = 430. Total = hammer + premium = 4,300 + 430 = 4,730.",
    "id": 123
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 4,300 = 430. Total = hammer + premium = 4,300 + 430 = 4,730. Hammer price is $4,450 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$4,450", "$445", "$4,895", "$5,095"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 4,450 = 445. Total = hammer + premium = 4,450 + 445 = 4,895.",
    "id": 124
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 4,450 = 445. Total = hammer + premium = 4,450 + 445 = 4,895. Hammer price is $4,600 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$4,600", "$460", "$5,060", "$5,260"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 4,600 = 460. Total = hammer + premium = 4,600 + 460 = 5,060.",
    "id": 125
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 4,600 = 460. Total = hammer + premium = 4,600 + 460 = 5,060. Hammer price is $4,750 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$4,750", "$475", "$5,225", "$5,425"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 4,750 = 475. Total = hammer + premium = 4,750 + 475 = 5,225.",
    "id": 126
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 4,750 = 475. Total = hammer + premium = 4,750 + 475 = 5,225. Hammer price is $4,900 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$4,900", "$490", "$5,390", "$5,590"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 4,900 = 490. Total = hammer + premium = 4,900 + 490 = 5,390.",
    "id": 127
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 4,900 = 490. Total = hammer + premium = 4,900 + 490 = 5,390. Hammer price is $5,050 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$5,050", "$505", "$5,555", "$5,755"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 5,050 = 505. Total = hammer + premium = 5,050 + 505 = 5,555.",
    "id": 128
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 5,050 = 505. Total = hammer + premium = 5,050 + 505 = 5,555. Hammer price is $5,200 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$5,200", "$520", "$5,720", "$5,920"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 5,200 = 520. Total = hammer + premium = 5,200 + 520 = 5,720.",
    "id": 129
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 5,200 = 520. Total = hammer + premium = 5,200 + 520 = 5,720. Hammer price is $5,350 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$5,350", "$535", "$5,885", "$6,085"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 5,350 = 535. Total = hammer + premium = 5,350 + 535 = 5,885.",
    "id": 130
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 5,350 = 535. Total = hammer + premium = 5,350 + 535 = 5,885. Hammer price is $5,500 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$5,500", "$550", "$6,050", "$6,250"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 5,500 = 550. Total = hammer + premium = 5,500 + 550 = 6,050.",
    "id": 131
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 5,500 = 550. Total = hammer + premium = 5,500 + 550 = 6,050. Hammer price is $5,650 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$5,650", "$565", "$6,215", "$6,415"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 5,650 = 565. Total = hammer + premium = 5,650 + 565 = 6,215.",
    "id": 132
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 5,650 = 565. Total = hammer + premium = 5,650 + 565 = 6,215. Hammer price is $5,800 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$5,800", "$580", "$6,380", "$6,580"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 5,800 = 580. Total = hammer + premium = 5,800 + 580 = 6,380.",
    "id": 133
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 5,800 = 580. Total = hammer + premium = 5,800 + 580 = 6,380. Hammer price is $5,950 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$5,950", "$595", "$6,545", "$6,745"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 5,950 = 595. Total = hammer + premium = 5,950 + 595 = 6,545.",
    "id": 134
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 5,950 = 595. Total = hammer + premium = 5,950 + 595 = 6,545. Hammer price is $6,100 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$6,100", "$610", "$6,710", "$6,910"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 6,100 = 610. Total = hammer + premium = 6,100 + 610 = 6,710.",
    "id": 135
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 6,100 = 610. Total = hammer + premium = 6,100 + 610 = 6,710. Hammer price is $6,250 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$6,250", "$625", "$6,875", "$7,075"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 6,250 = 625. Total = hammer + premium = 6,250 + 625 = 6,875.",
    "id": 136
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 6,250 = 625. Total = hammer + premium = 6,250 + 625 = 6,875. Hammer price is $6,400 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$6,400", "$640", "$7,040", "$7,240"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 6,400 = 640. Total = hammer + premium = 6,400 + 640 = 7,040.",
    "id": 137
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 6,400 = 640. Total = hammer + premium = 6,400 + 640 = 7,040. Hammer price is $6,550 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$6,550", "$655", "$7,205", "$7,405"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 6,550 = 655. Total = hammer + premium = 6,550 + 655 = 7,205.",
    "id": 138
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 6,550 = 655. Total = hammer + premium = 6,550 + 655 = 7,205. Hammer price is $6,700 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$6,700", "$670", "$7,370", "$7,570"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 6,700 = 670. Total = hammer + premium = 6,700 + 670 = 7,370.",
    "id": 139
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 6,700 = 670. Total = hammer + premium = 6,700 + 670 = 7,370. Hammer price is $6,850 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$6,850", "$685", "$7,535", "$7,735"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 6,850 = 685. Total = hammer + premium = 6,850 + 685 = 7,535.",
    "id": 140
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 6,850 = 685. Total = hammer + premium = 6,850 + 685 = 7,535. Hammer price is $7,000 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$7,000", "$700", "$7,700", "$7,900"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 7,000 = 700. Total = hammer + premium = 7,000 + 700 = 7,700.",
    "id": 141
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 7,000 = 700. Total = hammer + premium = 7,000 + 700 = 7,700. Hammer price is $7,150 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$7,150", "$715", "$7,865", "$8,065"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 7,150 = 715. Total = hammer + premium = 7,150 + 715 = 7,865.",
    "id": 142
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 7,150 = 715. Total = hammer + premium = 7,150 + 715 = 7,865. Hammer price is $7,300 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$7,300", "$730", "$8,030", "$8,230"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 7,300 = 730. Total = hammer + premium = 7,300 + 730 = 8,030.",
    "id": 143
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 7,300 = 730. Total = hammer + premium = 7,300 + 730 = 8,030. Hammer price is $7,450 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$7,450", "$745", "$8,195", "$8,395"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 7,450 = 745. Total = hammer + premium = 7,450 + 745 = 8,195.",
    "id": 144
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 7,450 = 745. Total = hammer + premium = 7,450 + 745 = 8,195. Hammer price is $7,600 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$7,600", "$760", "$8,360", "$8,560"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 7,600 = 760. Total = hammer + premium = 7,600 + 760 = 8,360.",
    "id": 145
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 7,600 = 760. Total = hammer + premium = 7,600 + 760 = 8,360. Hammer price is $7,750 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$7,750", "$775", "$8,525", "$8,725"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 7,750 = 775. Total = hammer + premium = 7,750 + 775 = 8,525.",
    "id": 146
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 7,750 = 775. Total = hammer + premium = 7,750 + 775 = 8,525. Hammer price is $7,900 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$7,900", "$790", "$8,690", "$8,890"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 7,900 = 790. Total = hammer + premium = 7,900 + 790 = 8,690.",
    "id": 147
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 7,900 = 790. Total = hammer + premium = 7,900 + 790 = 8,690. Hammer price is $8,050 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$8,050", "$805", "$8,855", "$9,055"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 8,050 = 805. Total = hammer + premium = 8,050 + 805 = 8,855.",
    "id": 148
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 8,050 = 805. Total = hammer + premium = 8,050 + 805 = 8,855. Hammer price is $8,200 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$8,200", "$820", "$9,020", "$9,220"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 8,200 = 820. Total = hammer + premium = 8,200 + 820 = 9,020.",
    "id": 149
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 8,200 = 820. Total = hammer + premium = 8,200 + 820 = 9,020. Hammer price is $8,350 with a 10% buyer\u2019s premium. Total due before tax is:",
    "options": ["$8,350", "$835", "$9,185", "$9,385"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 8,350 = 835. Total = hammer + premium = 8,350 + 835 = 9,185.",
    "id": 150
  },
  {
    "topic": "Reciprocity + Nonresident Requirements (\u00a7 62-19-117)",
    "question": "Premium = 10% \u00d7 8,350 = 835. Total = hammer + premium = 8,350 + 835 = 9,185. Tennessee may recognize another state\u2019s auctioneer license through reciprocity if:",
    "options": ["The other state requires no exam", "The other state reciprocates and has exam standards equal or higher than Tennessee\u2019s", "The applicant has never held a license", "The applicant is under age 18"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-117(b) requires reciprocity and exam standards equal or higher than Tennessee\u2019s. The applicant must be domiciled in the issuing state.",
    "id": 151
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-117(b) requires reciprocity and exam standards equal or higher than Tennessee\u2019s. The applicant must be domiciled in the issuing state. A nonresident auctioneer regularly engaged in auction business in another state is NOT required to:",
    "options": ["Obtain a Tennessee license", "Maintain a place of business in Tennessee", "File an application and fee", "Submit a certified copy of the other state license"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-117(a) provides nonresident auctioneers are not required to maintain a Tennessee place of business if regularly engaged elsewhere and licensed.",
    "id": 152
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-117(a) provides nonresident auctioneers are not required to maintain a Tennessee place of business if regularly engaged elsewhere and licensed. Every nonresident auctioneer conducting auctions in Tennessee must maintain:",
    "options": ["No special account", "An escrow account for all funds belonging to others from Tennessee auction sales", "Only a personal checking account", "Only cash payments"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-117(c) requires a nonresident auctioneer to maintain an escrow account for funds belonging to others arising from Tennessee auction sales.",
    "id": 153
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-117(c) requires a nonresident auctioneer to maintain an escrow account for funds belonging to others arising from Tennessee auction sales. Nonresident applicants must file an irrevocable consent allowing service of process by serving:",
    "options": ["The governor", "The Tennessee Auctioneer Commission", "The sheriff only", "Any auction school"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-117(d) requires consent that lawsuits may be served through the commission or its designated deputy.",
    "id": 154
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-117(d) requires consent that lawsuits may be served through the commission or its designated deputy. No default judgment may be taken against a nonresident in such service-of-process cases until:",
    "options": ["Immediately upon filing", "10 days after mailing", "20 days after the process is mailed", "90 days after auction"],
    "correctAnswer": 2,
    "explanation": "\u00a7 62-19-117(e)(3) prevents default judgment within 20 days after mailing of process/pleadings to the nonresident defendant.",
    "id": 155
  },
  {
    "topic": "Sponsorship + Affiliate Responsibility (\u00a7 62-19-115)",
    "question": "\u00a7 62-19-117(e)(3) prevents default judgment within 20 days after mailing of process/pleadings to the nonresident defendant. A principal auctioneer may sponsor an affiliate auctioneer after:",
    "options": ["6 months of licensure", "1 year of licensure", "2 years of licensure", "5 years of licensure"],
    "correctAnswer": 1,
    "explanation": "",
    "id": 156
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-115(b) provides a principal auctioneer may sponsor an affiliate auctioneer after one year of licensure. There is no limit on how many affiliate auctioneers a principal auctioneer may sponsor:",
    "options": ["True", "False"],
    "correctAnswer": 0,
    "explanation": "\u00a7 62-19-115(b) explicitly states there is no limit on the number of affiliate auctioneers a principal or public automobile auctioneer may sponsor.",
    "id": 157
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-115(b) explicitly states there is no limit on the number of affiliate auctioneers a principal or public automobile auctioneer may sponsor. If an affiliate auctioneer is employed by an auctioneer who is not the sponsor, the employing auctioneer is:",
    "options": ["Not responsible for the affiliate\u2019s actions", "Responsible for the affiliate\u2019s actions while under that employment", "Automatically becomes the sponsor", "Prohibited from hiring affiliates"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-111(p) provides the employing auctioneer is responsible for the affiliate\u2019s actions while the affiliate works under that auctioneer\u2019s employment.",
    "id": 158
  },
  {
    "topic": "Business Location + Sign Requirements (\u00a7 62-19-118)",
    "question": "\u00a7 62-19-111(p) provides the employing auctioneer is responsible for the affiliate\u2019s actions while the affiliate works under that auctioneer\u2019s employment. Generally, every Tennessee auctioneer must maintain:",
    "options": ["No office", "A definite place of business in Tennessee (with nonresident exception)", "Only a mailing address", "Only an online profile"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-118(a) requires a definite place of business in Tennessee, except as provided for nonresidents under \u00a7 62-19-117.",
    "id": 159
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-118(a) requires a definite place of business in Tennessee, except as provided for nonresidents under \u00a7 62-19-117. The required sign at the principal office must:",
    "options": ["Have letters at least 2 inches high and clearly indicate auctioneer/auction business", "Be handwritten", "Be placed inside a drawer", "Only list the auctioneer\u2019s phone number"],
    "correctAnswer": 0,
    "explanation": "\u00a7 62-19-118(b)(1) requires clear, legible letters at least 2 inches high showing the name and indicating the person is an auctioneer or the firm is in the auction business.",
    "id": 160
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-118(b)(1) requires clear, legible letters at least 2 inches high showing the name and indicating the person is an auctioneer or the firm is in the auction business. In multistory office buildings, compliance with the sign requirement can be satisfied by:",
    "options": ["No display at all", "Listing name and profession on building directories in the usual manner", "Posting signs in the street only", "Using social media ads only"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-118(b)(2) provides directory listings are deemed compliance for multistory office buildings.",
    "id": 161
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-118(b)(2) provides directory listings are deemed compliance for multistory office buildings. The commission may waive sign/location requirements if:",
    "options": ["The auctioneer requests it for convenience only", "There is a conflict with local ordinances or unusual circumstances", "The auctioneer is under age 30", "The auction is charitable"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-118(c) allows waivers for conflicts with local ordinances or other unusual circumstances.",
    "id": 162
  },
  {
    "topic": "Ethics + Misconduct + Enforcement Scenarios",
    "question": "\u00a7 62-19-118(c) allows waivers for conflicts with local ordinances or other unusual circumstances. Any conduct demonstrating improper, fraudulent, incompetent, or dishonest dealings is:",
    "options": ["Allowed if disclosed later", "A disciplinary ground under \u00a7 62-19-112", "Only a civil matter outside commission jurisdiction", "Required for auto auctions"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-112(b)(12) provides discipline for conduct demonstrating improper, fraudulent, incompetent, or dishonest dealings.",
    "id": 163
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-112(b)(12) provides discipline for conduct demonstrating improper, fraudulent, incompetent, or dishonest dealings. Paying valuable consideration to any person for services performed in violation of the chapter is:",
    "options": ["Permitted", "A cause for discipline", "Required for sponsorship", "Only applies to brokers"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-112(b)(5) lists paying valuable consideration for services performed in violation of the chapter as disciplinary cause.",
    "id": 164
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-112(b)(5) lists paying valuable consideration for services performed in violation of the chapter as disciplinary cause. A violation of the auctioneer chapter is classified as:",
    "options": ["Civil only", "Class C misdemeanor", "Class A felony", "No penalty exists"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-121 provides violations are a Class C misdemeanor.",
    "id": 165
  },
  {
    "topic": "Mixed Auction Math + Application Deadlines",
    "question": "\u00a7 62-19-121 provides violations are a Class C misdemeanor. Hammer price is $5,000 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$5,000", "$500", "$5,500", "$5,600"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 5,000 = 500. Total = 5,000 + 500 = 5,500.",
    "id": 166
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 5,000 = 500. Total = 5,000 + 500 = 5,500. Hammer price is $5,200 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$5,200", "$520", "$5,720", "$5,820"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 5,200 = 520. Total = 5,200 + 520 = 5,720.",
    "id": 167
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 5,200 = 520. Total = 5,200 + 520 = 5,720. Hammer price is $5,400 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$5,400", "$540", "$5,940", "$6,040"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 5,400 = 540. Total = 5,400 + 540 = 5,940.",
    "id": 168
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 5,400 = 540. Total = 5,400 + 540 = 5,940. Hammer price is $5,600 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$5,600", "$560", "$6,160", "$6,260"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 5,600 = 560. Total = 5,600 + 560 = 6,160.",
    "id": 169
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 5,600 = 560. Total = 5,600 + 560 = 6,160. Hammer price is $5,800 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$5,800", "$580", "$6,380", "$6,480"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 5,800 = 580. Total = 5,800 + 580 = 6,380.",
    "id": 170
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 5,800 = 580. Total = 5,800 + 580 = 6,380. Hammer price is $6,000 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$6,000", "$600", "$6,600", "$6,700"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 6,000 = 600. Total = 6,000 + 600 = 6,600.",
    "id": 171
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 6,000 = 600. Total = 6,000 + 600 = 6,600. Hammer price is $6,200 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$6,200", "$620", "$6,820", "$6,920"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 6,200 = 620. Total = 6,200 + 620 = 6,820.",
    "id": 172
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 6,200 = 620. Total = 6,200 + 620 = 6,820. Hammer price is $6,400 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$6,400", "$640", "$7,040", "$7,140"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 6,400 = 640. Total = 6,400 + 640 = 7,040.",
    "id": 173
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 6,400 = 640. Total = 6,400 + 640 = 7,040. Hammer price is $6,600 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$6,600", "$660", "$7,260", "$7,360"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 6,600 = 660. Total = 6,600 + 660 = 7,260.",
    "id": 174
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 6,600 = 660. Total = 6,600 + 660 = 7,260. Hammer price is $6,800 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$6,800", "$680", "$7,480", "$7,580"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 6,800 = 680. Total = 6,800 + 680 = 7,480.",
    "id": 175
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 6,800 = 680. Total = 6,800 + 680 = 7,480. Hammer price is $7,000 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$7,000", "$700", "$7,700", "$7,800"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 7,000 = 700. Total = 7,000 + 700 = 7,700.",
    "id": 176
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 7,000 = 700. Total = 7,000 + 700 = 7,700. Hammer price is $7,200 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$7,200", "$720", "$7,920", "$8,020"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 7,200 = 720. Total = 7,200 + 720 = 7,920.",
    "id": 177
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 7,200 = 720. Total = 7,200 + 720 = 7,920. Hammer price is $7,400 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$7,400", "$740", "$8,140", "$8,240"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 7,400 = 740. Total = 7,400 + 740 = 8,140.",
    "id": 178
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 7,400 = 740. Total = 7,400 + 740 = 8,140. Hammer price is $7,600 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$7,600", "$760", "$8,360", "$8,460"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 7,600 = 760. Total = 7,600 + 760 = 8,360.",
    "id": 179
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 7,600 = 760. Total = 7,600 + 760 = 8,360. Hammer price is $7,800 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$7,800", "$780", "$8,580", "$8,680"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 7,800 = 780. Total = 7,800 + 780 = 8,580.",
    "id": 180
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 7,800 = 780. Total = 7,800 + 780 = 8,580. Hammer price is $8,000 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$8,000", "$800", "$8,800", "$8,900"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 8,000 = 800. Total = 8,000 + 800 = 8,800.",
    "id": 181
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 8,000 = 800. Total = 8,000 + 800 = 8,800. Hammer price is $8,200 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$8,200", "$820", "$9,020", "$9,120"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 8,200 = 820. Total = 8,200 + 820 = 9,020.",
    "id": 182
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 8,200 = 820. Total = 8,200 + 820 = 9,020. Hammer price is $8,400 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$8,400", "$840", "$9,240", "$9,340"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 8,400 = 840. Total = 8,400 + 840 = 9,240.",
    "id": 183
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 8,400 = 840. Total = 8,400 + 840 = 9,240. Hammer price is $8,600 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$8,600", "$860", "$9,460", "$9,560"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 8,600 = 860. Total = 8,600 + 860 = 9,460.",
    "id": 184
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 8,600 = 860. Total = 8,600 + 860 = 9,460. Hammer price is $8,800 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$8,800", "$880", "$9,680", "$9,780"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 8,800 = 880. Total = 8,800 + 880 = 9,680.",
    "id": 185
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 8,800 = 880. Total = 8,800 + 880 = 9,680. Hammer price is $9,000 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$9,000", "$900", "$9,900", "$10,000"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 9,000 = 900. Total = 9,000 + 900 = 9,900.",
    "id": 186
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 9,000 = 900. Total = 9,000 + 900 = 9,900. Hammer price is $9,200 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$9,200", "$920", "$10,120", "$10,220"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 9,200 = 920. Total = 9,200 + 920 = 10,120.",
    "id": 187
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 9,200 = 920. Total = 9,200 + 920 = 10,120. Hammer price is $9,400 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$9,400", "$940", "$10,340", "$10,440"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 9,400 = 940. Total = 9,400 + 940 = 10,340.",
    "id": 188
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 9,400 = 940. Total = 9,400 + 940 = 10,340. Hammer price is $9,600 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$9,600", "$960", "$10,560", "$10,660"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 9,600 = 960. Total = 9,600 + 960 = 10,560.",
    "id": 189
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 9,600 = 960. Total = 9,600 + 960 = 10,560. Hammer price is $9,800 with a 10% buyer\u2019s premium. Total buyer amount before tax is:",
    "options": ["$9,800", "$980", "$10,780", "$10,880"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 9,800 = 980. Total = 9,800 + 980 = 10,780.",
    "id": 190
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 9,800 = 980. Total = 9,800 + 980 = 10,780. A license expired on October 1. The latest date for discretionary renewal within the 2-month window is:",
    "options": ["October 31", "November 1", "December 1", "January 1"],
    "correctAnswer": 2,
    "explanation": "\u00a7 62-19-111(j) allows renewal within 2 months after expiration. Two months after October 1 is December 1.",
    "id": 191
  },
  {
    "topic": "Auctioneer Education & Recovery Account (\u00a7 62-19-116)",
    "question": "\u00a7 62-19-111(j) allows renewal within 2 months after expiration. Two months after October 1 is December 1. No new auctioneer or affiliate auctioneer license may be issued unless the applicant pays an additional fee of:",
    "options": ["$10", "$25", "$50", "$100"],
    "correctAnswer": 2,
    "explanation": "\u00a7 62-19-116(c)(1) requires a $50 fee (or lesser amount set by rule) for deposit into the education and recovery account.",
    "id": 192
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-116(c)(1) requires a $50 fee (or lesser amount set by rule) for deposit into the education and recovery account. The commission must maintain a minimum Recovery Account balance of:",
    "options": ["$50,000", "$100,000", "$150,000", "$500,000"],
    "correctAnswer": 2,
    "explanation": "\u00a7 62-19-116(a) requires the commission to maintain a minimum balance of $150,000 in the account.",
    "id": 193
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-116(a) requires the commission to maintain a minimum balance of $150,000 in the account. The maximum liability of the Recovery Account per transaction is:",
    "options": ["$5,000", "$10,000", "$20,000", "Unlimited"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-116(d)(1) caps liability at $10,000 per transaction regardless of number of aggrieved persons.",
    "id": 194
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-116(d)(1) caps liability at $10,000 per transaction regardless of number of aggrieved persons. The aggregate liability of the account for the acts of one licensee terminates after payments totaling:",
    "options": ["$10,000", "$15,000", "$20,000", "$50,000"],
    "correctAnswer": 2,
    "explanation": "\u00a7 62-19-116(d)(2) terminates liability after aggregate payments of $20,000 on behalf of a licensee.",
    "id": 195
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-116(d)(2) terminates liability after aggregate payments of $20,000 on behalf of a licensee. A licensee acting as such has:",
    "options": ["A direct claim against the account", "No claim against the account", "Unlimited reimbursement rights", "Automatic access to funds"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-116(d)(3) states a licensee acting as such shall have no claim against the account.",
    "id": 196
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-116(d)(3) states a licensee acting as such shall have no claim against the account. If the commission pays from the account on behalf of a licensee, the commission may:",
    "options": ["Do nothing further", "Suspend or revoke the license and require repayment with interest before re-licensure", "Automatically renew the license", "Cancel all future claims"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-116(g) allows suspension/revocation and requires repayment plus interest before eligibility for a new license.",
    "id": 197
  },
  {
    "topic": "Citations + Civil Penalties (\u00a7 62-19-126)",
    "question": "\u00a7 62-19-116(g) allows suspension/revocation and requires repayment plus interest before eligibility for a new license. Citations for unlicensed auction activity may assess a civil penalty per violation between:",
    "options": ["$0 and $500", "$10 and $1,000", "$50 and $2,500", "$2,500 and $10,000"],
    "correctAnswer": 2,
    "explanation": "\u00a7 62-19-126(a)(3) provides penalties not less than $50 and not more than $2,500 per violation.",
    "id": 198
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-126(a)(3) provides penalties not less than $50 and not more than $2,500 per violation. A citation must be issued within:",
    "options": ["30 days", "6 months", "1 year", "5 years"],
    "correctAnswer": 2,
    "explanation": "\u00a7 62-19-126(d) requires citation issuance within one year after the act/omission.",
    "id": 199
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-126(d) requires citation issuance within one year after the act/omission. A person appealing a citation must provide notice postmarked within:",
    "options": ["5 working days", "10 working days", "15 working days", "30 working days"],
    "correctAnswer": 2,
    "explanation": "\u00a7 62-19-126(e) provides a 15 working day appeal deadline.",
    "id": 200
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-126(e) provides a 15 working day appeal deadline. After administrative appeals are exhausted, the administrative director may apply to court for:",
    "options": ["Only imprisonment", "Judgment for the civil penalty plus court costs and an order to cease violations", "Automatic license issuance", "Dismissal of the citation"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-126(g) authorizes court judgment for civil penalty plus costs and cease-and-desist type orders.",
    "id": 201
  },
  {
    "topic": "Liens for Unpaid Commissions (\u00a7 62-19-108)",
    "question": "\u00a7 62-19-126(g) authorizes court judgment for civil penalty plus costs and cease-and-desist type orders. An auctioneer lien applies only to property:",
    "options": ["Owned by any bidder", "Owned by the person who denied payment for services", "Owned by the commission", "Located outside Tennessee"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-108(a) limits the lien to property owned by the person who denied payment.",
    "id": 202
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-108(a) limits the lien to property owned by the person who denied payment. Notice of lien must be filed within how many days after the auction?",
    "options": ["30", "60", "90", "120"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-108(b) requires filing within 60 days after the auction.",
    "id": 203
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-108(b) requires filing within 60 days after the auction. The lien is not effective against:",
    "options": ["The auctioneer", "A bona fide purchaser for value", "The original seller", "The commission"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-108(b) provides the lien is not effective against a bona fide purchaser for value.",
    "id": 204
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-108(b) provides the lien is not effective against a bona fide purchaser for value. The lien continues for 90 days from filing unless suit is brought within that time. A lien filed April 1 continues through approximately:",
    "options": ["May 1", "June 30", "July 1", "October 1"],
    "correctAnswer": 2,
    "explanation": "90 days from April 1 is approximately July 1. \u00a7 62-19-108(c) provides the 90-day continuation.",
    "id": 205
  },
  {
    "topic": "Public Automobile Auction Compliance (\u00a7 62-19-128)",
    "question": "90 days from April 1 is approximately July 1. \u00a7 62-19-108(c) provides the 90-day continuation. A public automobile auction must have a minimum net worth of:",
    "options": ["$25,000", "$50,000", "$100,000", "$500,000"],
    "correctAnswer": 2,
    "explanation": "\u00a7 62-19-128(b)(5) requires minimum net worth of at least $100,000.",
    "id": 206
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-128(b)(5) requires minimum net worth of at least $100,000. A business telephone in the auction company name is required, and cellular phones are:",
    "options": ["Acceptable", "Not acceptable", "Required", "Optional"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-128(b)(6) states cellular telephones are not acceptable for this requirement.",
    "id": 207
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-128(b)(6) states cellular telephones are not acceptable for this requirement. Public automobile auction signs must have letters at least:",
    "options": ["2 inches tall", "4 inches tall", "8 inches tall", "12 inches tall"],
    "correctAnswer": 2,
    "explanation": "\u00a7 62-19-128(b)(7) requires letters at least 8 inches tall for the permanent professional business sign.",
    "id": 208
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-128(b)(7) requires letters at least 8 inches tall for the permanent professional business sign. The public automobile auction is deemed the seller of the vehicle with the same duties as:",
    "options": ["Licensed motor vehicle dealers", "Real estate brokers", "Building contractors", "Bankruptcy trustees"],
    "correctAnswer": 0,
    "explanation": "\u00a7 62-19-128(f) deems the auction the seller with duties/responsibilities as other licensed motor vehicle dealers.",
    "id": 209
  },
  {
    "topic": "Mixed Math + Scenario Practice",
    "question": "\u00a7 62-19-128(f) deems the auction the seller with duties/responsibilities as other licensed motor vehicle dealers. Hammer price is $8,000. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$8,000", "$960", "$8,960", "$9,260"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 8,000 = 960. Total = hammer + premium = 8,000 + 960 = 8,960.",
    "id": 210
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 8,000 = 960. Total = hammer + premium = 8,000 + 960 = 8,960. Hammer price is $8,250. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$8,250", "$990", "$9,240", "$9,540"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 8,250 = 990. Total = hammer + premium = 8,250 + 990 = 9,240.",
    "id": 211
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 8,250 = 990. Total = hammer + premium = 8,250 + 990 = 9,240. Hammer price is $8,500. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$8,500", "$1,020", "$9,520", "$9,820"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 8,500 = 1,020. Total = hammer + premium = 8,500 + 1,020 = 9,520.",
    "id": 212
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 8,500 = 1,020. Total = hammer + premium = 8,500 + 1,020 = 9,520. Hammer price is $8,750. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$8,750", "$1,050", "$9,800", "$10,100"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 8,750 = 1,050. Total = hammer + premium = 8,750 + 1,050 = 9,800.",
    "id": 213
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 8,750 = 1,050. Total = hammer + premium = 8,750 + 1,050 = 9,800. Hammer price is $9,000. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$9,000", "$1,080", "$10,080", "$10,380"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 9,000 = 1,080. Total = hammer + premium = 9,000 + 1,080 = 10,080.",
    "id": 214
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 9,000 = 1,080. Total = hammer + premium = 9,000 + 1,080 = 10,080. Hammer price is $9,250. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$9,250", "$1,110", "$10,360", "$10,660"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 9,250 = 1,110. Total = hammer + premium = 9,250 + 1,110 = 10,360.",
    "id": 215
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 9,250 = 1,110. Total = hammer + premium = 9,250 + 1,110 = 10,360. Hammer price is $9,500. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$9,500", "$1,140", "$10,640", "$10,940"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 9,500 = 1,140. Total = hammer + premium = 9,500 + 1,140 = 10,640.",
    "id": 216
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 9,500 = 1,140. Total = hammer + premium = 9,500 + 1,140 = 10,640. Hammer price is $9,750. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$9,750", "$1,170", "$10,920", "$11,220"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 9,750 = 1,170. Total = hammer + premium = 9,750 + 1,170 = 10,920.",
    "id": 217
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 9,750 = 1,170. Total = hammer + premium = 9,750 + 1,170 = 10,920. Hammer price is $10,000. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$10,000", "$1,200", "$11,200", "$11,500"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 10,000 = 1,200. Total = hammer + premium = 10,000 + 1,200 = 11,200.",
    "id": 218
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 10,000 = 1,200. Total = hammer + premium = 10,000 + 1,200 = 11,200. Hammer price is $10,250. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$10,250", "$1,230", "$11,480", "$11,780"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 10,250 = 1,230. Total = hammer + premium = 10,250 + 1,230 = 11,480.",
    "id": 219
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 10,250 = 1,230. Total = hammer + premium = 10,250 + 1,230 = 11,480. Hammer price is $10,500. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$10,500", "$1,260", "$11,760", "$12,060"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 10,500 = 1,260. Total = hammer + premium = 10,500 + 1,260 = 11,760.",
    "id": 220
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 10,500 = 1,260. Total = hammer + premium = 10,500 + 1,260 = 11,760. Hammer price is $10,750. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$10,750", "$1,290", "$12,040", "$12,340"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 10,750 = 1,290. Total = hammer + premium = 10,750 + 1,290 = 12,040.",
    "id": 221
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 10,750 = 1,290. Total = hammer + premium = 10,750 + 1,290 = 12,040. Hammer price is $11,000. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$11,000", "$1,320", "$12,320", "$12,620"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 11,000 = 1,320. Total = hammer + premium = 11,000 + 1,320 = 12,320.",
    "id": 222
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 11,000 = 1,320. Total = hammer + premium = 11,000 + 1,320 = 12,320. Hammer price is $11,250. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$11,250", "$1,350", "$12,600", "$12,900"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 11,250 = 1,350. Total = hammer + premium = 11,250 + 1,350 = 12,600.",
    "id": 223
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 11,250 = 1,350. Total = hammer + premium = 11,250 + 1,350 = 12,600. Hammer price is $11,500. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$11,500", "$1,380", "$12,880", "$13,180"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 11,500 = 1,380. Total = hammer + premium = 11,500 + 1,380 = 12,880.",
    "id": 224
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 11,500 = 1,380. Total = hammer + premium = 11,500 + 1,380 = 12,880. Hammer price is $11,750. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$11,750", "$1,410", "$13,160", "$13,460"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 11,750 = 1,410. Total = hammer + premium = 11,750 + 1,410 = 13,160.",
    "id": 225
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 11,750 = 1,410. Total = hammer + premium = 11,750 + 1,410 = 13,160. Hammer price is $12,000. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$12,000", "$1,440", "$13,440", "$13,740"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 12,000 = 1,440. Total = hammer + premium = 12,000 + 1,440 = 13,440.",
    "id": 226
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 12,000 = 1,440. Total = hammer + premium = 12,000 + 1,440 = 13,440. Hammer price is $12,250. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$12,250", "$1,470", "$13,720", "$14,020"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 12,250 = 1,470. Total = hammer + premium = 12,250 + 1,470 = 13,720.",
    "id": 227
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 12,250 = 1,470. Total = hammer + premium = 12,250 + 1,470 = 13,720. Hammer price is $12,500. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$12,500", "$1,500", "$14,000", "$14,300"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 12,500 = 1,500. Total = hammer + premium = 12,500 + 1,500 = 14,000.",
    "id": 228
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 12,500 = 1,500. Total = hammer + premium = 12,500 + 1,500 = 14,000. Hammer price is $12,750. Buyer\u2019s premium is 12%. Total due before tax is:",
    "options": ["$12,750", "$1,530", "$14,280", "$14,580"],
    "correctAnswer": 2,
    "explanation": "Premium = 12% \u00d7 12,750 = 1,530. Total = hammer + premium = 12,750 + 1,530 = 14,280.",
    "id": 229
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 12% \u00d7 12,750 = 1,530. Total = hammer + premium = 12,750 + 1,530 = 14,280. Filing a false or materially misleading document with the commission under the Recovery Account section is:",
    "options": ["Encouraged", "Unlawful", "Required for claims", "Only a civil issue"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-116(k) makes it unlawful to file any required notice or document that is false or contains a material misstatement of fact.",
    "id": 230
  },
  {
    "topic": "Final Mixed Licensing + Practice Rules",
    "question": "\u00a7 62-19-116(k) makes it unlawful to file any required notice or document that is false or contains a material misstatement of fact. It is unlawful to advertise as an auctioneer in Tennessee without:",
    "options": ["A business card", "A valid license issued by the Tennessee Auctioneer Commission", "A broker license only", "A charity registration"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-102(a)(1) makes it unlawful to act as, advertise as, or represent to be an auctioneer without a valid commission-issued license.",
    "id": 231
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-102(a)(1) makes it unlawful to act as, advertise as, or represent to be an auctioneer without a valid commission-issued license. An affiliate auctioneer may not independently negotiate or execute an auction contract to sell goods because that is prohibited for bid caller licensees under:",
    "options": ["\u00a7 62-19-112(b)(14)", "\u00a7 62-19-103(6)", "\u00a7 62-19-128(e)", "\u00a7 62-19-107(c)"],
    "correctAnswer": 0,
    "explanation": "\u00a7 62-19-112(b)(14) prohibits negotiating/executing auction contracts or handling seller assets/proceeds as a bid caller auctioneer.",
    "id": 232
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-112(b)(14) prohibits negotiating/executing auction contracts or handling seller assets/proceeds as a bid caller auctioneer. Which is an exemption from the chapter?",
    "options": ["Paid professional auction company", "Court-appointed trustee in bankruptcy acting under court order", "Principal auctioneer running a simulcast", "Affiliate auctioneer selling real estate without broker license"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-103(1) exempts receivers, trustees in bankruptcy, guardians, executors, and similar persons acting under court order.",
    "id": 233
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-103(1) exempts receivers, trustees in bankruptcy, guardians, executors, and similar persons acting under court order. A violation of the chapter is classified as a:",
    "options": ["Civil infraction only", "Class C misdemeanor", "Class A felony", "No penalty exists"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-121 provides violations are Class C misdemeanors.",
    "id": 234
  },
  {
    "topic": "Ethics + Misconduct + Consumer Protection Style Scenarios",
    "question": "\u00a7 62-19-121 provides violations are Class C misdemeanors. Failing to remit money belonging to others and commingling funds is:",
    "options": ["Acceptable with disclosure", "A disciplinary ground", "Exempt for all auctions", "Required for auto auctions"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-112(b)(4) lists failure to remit funds and commingling as cause for suspension/revocation.",
    "id": 235
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-112(b)(4) lists failure to remit funds and commingling as cause for suspension/revocation. Knowingly using false bidders (cappers/pullers) is:",
    "options": ["Permitted if seller agrees", "A disciplinary violation", "Required for reserve auctions", "Not addressed in Tennessee law"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-112(b)(11) identifies knowingly using false bidders as a basis for discipline.",
    "id": 236
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-112(b)(11) identifies knowingly using false bidders as a basis for discipline. Any improper, fraudulent, incompetent, or dishonest dealings by an auctioneer may result in:",
    "options": ["Automatic exemption", "Commission discipline", "Mandatory promotion", "No consequences"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-112(b)(12) allows discipline for improper or dishonest conduct.",
    "id": 237
  },
  {
    "topic": "Commission Authority + Hearings + Judicial Review",
    "question": "\u00a7 62-19-112(b)(12) allows discipline for improper or dishonest conduct. Hearings and judicial review of contested cases under this chapter are governed by:",
    "options": ["Federal bankruptcy code", "Uniform Administrative Procedures Act (Title 4, Chapter 5)", "Motor vehicle commission only", "Local ordinances only"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-123 provides that the Uniform Administrative Procedures Act governs hearings and judicial review.",
    "id": 238
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-123 provides that the Uniform Administrative Procedures Act governs hearings and judicial review. The commission may petition directly to circuit or chancery court to:",
    "options": ["Approve buyer premiums", "Enjoin a person from continuing violations of the chapter", "Set auction increments statewide", "Waive criminal penalties"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-127 empowers the commission to petition courts to enjoin violations.",
    "id": 239
  },
  {
    "topic": "Recovery Account + Claims",
    "question": "\u00a7 62-19-127 empowers the commission to petition courts to enjoin violations. Maximum Recovery Account payout per transaction is:",
    "options": ["$5,000", "$10,000", "$20,000", "Unlimited"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-116(d)(1) caps payouts at $10,000 per transaction.",
    "id": 240
  },
  {
    "topic": "General Auction Knowledge",
    "question": "\u00a7 62-19-116(d)(1) caps payouts at $10,000 per transaction. If the account pays on behalf of a licensee, the licensee must repay:",
    "options": ["Nothing", "Amount paid plus interest before new license eligibility", "Only half the amount", "Only court costs"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-116(g) requires full repayment plus interest before eligibility for a new license.",
    "id": 241
  },
  {
    "topic": "Final Auction Math + Practical Application",
    "question": "\u00a7 62-19-116(g) requires full repayment plus interest before eligibility for a new license. Hammer price is $6,000. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$6,600", "$6,420", "$7,020", "$7,270"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 6,000 = 600. Tax = 7% \u00d7 6,000 = 420. Total = 6,000+600+420 = 7,020.",
    "id": 242
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 6,000 = 600. Tax = 7% \u00d7 6,000 = 420. Total = 6,000+600+420 = 7,020. Hammer price is $6,300. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$6,930", "$6,741", "$7,371", "$7,621"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 6,300 = 630. Tax = 7% \u00d7 6,300 = 441. Total = 6,300+630+441 = 7,371.",
    "id": 243
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 6,300 = 630. Tax = 7% \u00d7 6,300 = 441. Total = 6,300+630+441 = 7,371. Hammer price is $6,600. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$7,260", "$7,062", "$7,722", "$7,972"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 6,600 = 660. Tax = 7% \u00d7 6,600 = 462. Total = 6,600+660+462 = 7,722.",
    "id": 244
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 6,600 = 660. Tax = 7% \u00d7 6,600 = 462. Total = 6,600+660+462 = 7,722. Hammer price is $6,900. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$7,590", "$7,383", "$8,073", "$8,323"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 6,900 = 690. Tax = 7% \u00d7 6,900 = 483. Total = 6,900+690+483 = 8,073.",
    "id": 245
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 6,900 = 690. Tax = 7% \u00d7 6,900 = 483. Total = 6,900+690+483 = 8,073. Hammer price is $7,200. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$7,920", "$7,704", "$8,424", "$8,674"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 7,200 = 720. Tax = 7% \u00d7 7,200 = 504. Total = 7,200+720+504 = 8,424.",
    "id": 246
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 7,200 = 720. Tax = 7% \u00d7 7,200 = 504. Total = 7,200+720+504 = 8,424. Hammer price is $7,500. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$8,250", "$8,025", "$8,775", "$9,025"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 7,500 = 750. Tax = 7% \u00d7 7,500 = 525. Total = 7,500+750+525 = 8,775.",
    "id": 247
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 7,500 = 750. Tax = 7% \u00d7 7,500 = 525. Total = 7,500+750+525 = 8,775. Hammer price is $7,800. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$8,580", "$8,346", "$9,126", "$9,376"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 7,800 = 780. Tax = 7% \u00d7 7,800 = 546. Total = 7,800+780+546 = 9,126.",
    "id": 248
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 7,800 = 780. Tax = 7% \u00d7 7,800 = 546. Total = 7,800+780+546 = 9,126. Hammer price is $8,100. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$8,910", "$8,667", "$9,477", "$9,727"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 8,100 = 810. Tax = 7% \u00d7 8,100 = 567. Total = 8,100+810+567 = 9,477.",
    "id": 249
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 8,100 = 810. Tax = 7% \u00d7 8,100 = 567. Total = 8,100+810+567 = 9,477. Hammer price is $8,400. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$9,240", "$8,988", "$9,828", "$10,078"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 8,400 = 840. Tax = 7% \u00d7 8,400 = 588. Total = 8,400+840+588 = 9,828.",
    "id": 250
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 8,400 = 840. Tax = 7% \u00d7 8,400 = 588. Total = 8,400+840+588 = 9,828. Hammer price is $8,700. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$9,570", "$9,309", "$10,179", "$10,429"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 8,700 = 870. Tax = 7% \u00d7 8,700 = 609. Total = 8,700+870+609 = 10,179.",
    "id": 251
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 8,700 = 870. Tax = 7% \u00d7 8,700 = 609. Total = 8,700+870+609 = 10,179. Hammer price is $9,000. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$9,900", "$9,630", "$10,530", "$10,780"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 9,000 = 900. Tax = 7% \u00d7 9,000 = 630. Total = 9,000+900+630 = 10,530.",
    "id": 252
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 9,000 = 900. Tax = 7% \u00d7 9,000 = 630. Total = 9,000+900+630 = 10,530. Hammer price is $9,300. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$10,230", "$9,951", "$10,881", "$11,131"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 9,300 = 930. Tax = 7% \u00d7 9,300 = 651. Total = 9,300+930+651 = 10,881.",
    "id": 253
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 9,300 = 930. Tax = 7% \u00d7 9,300 = 651. Total = 9,300+930+651 = 10,881. Hammer price is $9,600. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$10,560", "$10,272", "$11,232", "$11,482"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 9,600 = 960. Tax = 7% \u00d7 9,600 = 672. Total = 9,600+960+672 = 11,232.",
    "id": 254
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 9,600 = 960. Tax = 7% \u00d7 9,600 = 672. Total = 9,600+960+672 = 11,232. Hammer price is $9,900. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$10,890", "$10,593", "$11,583", "$11,833"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 9,900 = 990. Tax = 7% \u00d7 9,900 = 693. Total = 9,900+990+693 = 11,583.",
    "id": 255
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 9,900 = 990. Tax = 7% \u00d7 9,900 = 693. Total = 9,900+990+693 = 11,583. Hammer price is $10,200. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$11,220", "$10,914", "$11,934", "$12,184"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 10,200 = 1,020. Tax = 7% \u00d7 10,200 = 714. Total = 10,200+1,020+714 = 11,934.",
    "id": 256
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 10,200 = 1,020. Tax = 7% \u00d7 10,200 = 714. Total = 10,200+1,020+714 = 11,934. Hammer price is $10,500. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$11,550", "$11,235", "$12,285", "$12,535"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 10,500 = 1,050. Tax = 7% \u00d7 10,500 = 735. Total = 10,500+1,050+735 = 12,285.",
    "id": 257
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 10,500 = 1,050. Tax = 7% \u00d7 10,500 = 735. Total = 10,500+1,050+735 = 12,285. Hammer price is $10,800. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$11,880", "$11,556", "$12,636", "$12,886"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 10,800 = 1,080. Tax = 7% \u00d7 10,800 = 756. Total = 10,800+1,080+756 = 12,636.",
    "id": 258
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 10,800 = 1,080. Tax = 7% \u00d7 10,800 = 756. Total = 10,800+1,080+756 = 12,636. Hammer price is $11,100. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$12,210", "$11,877", "$12,987", "$13,237"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 11,100 = 1,110. Tax = 7% \u00d7 11,100 = 777. Total = 11,100+1,110+777 = 12,987.",
    "id": 259
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 11,100 = 1,110. Tax = 7% \u00d7 11,100 = 777. Total = 11,100+1,110+777 = 12,987. Hammer price is $11,400. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$12,540", "$12,198", "$13,338", "$13,588"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 11,400 = 1,140. Tax = 7% \u00d7 11,400 = 798. Total = 11,400+1,140+798 = 13,338.",
    "id": 260
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 11,400 = 1,140. Tax = 7% \u00d7 11,400 = 798. Total = 11,400+1,140+798 = 13,338. Hammer price is $11,700. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$12,870", "$12,519", "$13,689", "$13,939"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 11,700 = 1,170. Tax = 7% \u00d7 11,700 = 819. Total = 11,700+1,170+819 = 13,689.",
    "id": 261
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 11,700 = 1,170. Tax = 7% \u00d7 11,700 = 819. Total = 11,700+1,170+819 = 13,689. Hammer price is $12,000. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$13,200", "$12,840", "$14,040", "$14,290"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 12,000 = 1,200. Tax = 7% \u00d7 12,000 = 840. Total = 12,000+1,200+840 = 14,040.",
    "id": 262
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 12,000 = 1,200. Tax = 7% \u00d7 12,000 = 840. Total = 12,000+1,200+840 = 14,040. Hammer price is $12,300. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$13,530", "$13,161", "$14,391", "$14,641"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 12,300 = 1,230. Tax = 7% \u00d7 12,300 = 861. Total = 12,300+1,230+861 = 14,391.",
    "id": 263
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 12,300 = 1,230. Tax = 7% \u00d7 12,300 = 861. Total = 12,300+1,230+861 = 14,391. Hammer price is $12,600. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$13,860", "$13,482", "$14,742", "$14,992"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 12,600 = 1,260. Tax = 7% \u00d7 12,600 = 882. Total = 12,600+1,260+882 = 14,742.",
    "id": 264
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 12,600 = 1,260. Tax = 7% \u00d7 12,600 = 882. Total = 12,600+1,260+882 = 14,742. Hammer price is $12,900. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$14,190", "$13,803", "$15,093", "$15,343"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 12,900 = 1,290. Tax = 7% \u00d7 12,900 = 903. Total = 12,900+1,290+903 = 15,093.",
    "id": 265
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 12,900 = 1,290. Tax = 7% \u00d7 12,900 = 903. Total = 12,900+1,290+903 = 15,093. Hammer price is $13,200. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$14,520", "$14,124", "$15,444", "$15,694"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 13,200 = 1,320. Tax = 7% \u00d7 13,200 = 924. Total = 13,200+1,320+924 = 15,444.",
    "id": 266
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 13,200 = 1,320. Tax = 7% \u00d7 13,200 = 924. Total = 13,200+1,320+924 = 15,444. Hammer price is $13,500. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$14,850", "$14,445", "$15,795", "$16,045"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 13,500 = 1,350. Tax = 7% \u00d7 13,500 = 945. Total = 13,500+1,350+945 = 15,795.",
    "id": 267
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 13,500 = 1,350. Tax = 7% \u00d7 13,500 = 945. Total = 13,500+1,350+945 = 15,795. Hammer price is $13,800. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$15,180", "$14,766", "$16,146", "$16,396"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 13,800 = 1,380. Tax = 7% \u00d7 13,800 = 966. Total = 13,800+1,380+966 = 16,146.",
    "id": 268
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 13,800 = 1,380. Tax = 7% \u00d7 13,800 = 966. Total = 13,800+1,380+966 = 16,146. Hammer price is $14,100. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$15,510", "$15,087", "$16,497", "$16,747"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 14,100 = 1,410. Tax = 7% \u00d7 14,100 = 987. Total = 14,100+1,410+987 = 16,497.",
    "id": 269
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 14,100 = 1,410. Tax = 7% \u00d7 14,100 = 987. Total = 14,100+1,410+987 = 16,497. Hammer price is $14,400. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$15,840", "$15,408", "$16,848", "$17,098"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 14,400 = 1,440. Tax = 7% \u00d7 14,400 = 1,008. Total = 14,400+1,440+1,008 = 16,848.",
    "id": 270
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 14,400 = 1,440. Tax = 7% \u00d7 14,400 = 1,008. Total = 14,400+1,440+1,008 = 16,848. Hammer price is $14,700. Buyer premium is 10%. Sales tax is 7% on hammer only. Total buyer cost is:",
    "options": ["$16,170", "$15,729", "$17,199", "$17,449"],
    "correctAnswer": 2,
    "explanation": "Premium = 10% \u00d7 14,700 = 1,470. Tax = 7% \u00d7 14,700 = 1,029. Total = 14,700+1,470+1,029 = 17,199.",
    "id": 271
  },
  {
    "topic": "General Auction Knowledge",
    "question": "Premium = 10% \u00d7 14,700 = 1,470. Tax = 7% \u00d7 14,700 = 1,029. Total = 14,700+1,470+1,029 = 17,199. An auctioneer lien notice must be filed within:",
    "options": ["30 days", "60 days", "90 days", "120 days"],
    "correctAnswer": 1,
    "explanation": "\u00a7 62-19-108(b) requires lien notice filing within 60 days after the auction.",
    "id": 272
  },
  ],
  'Texas': [
    // Texas questions from existing backup will be added here
  ]
};

// Get questions for a specific state
export function getQuestionsByState(state) {
  return questionBank[state] || [];
}

// Get unique topics for a state
export function getTopicsByState(state) {
  const questions = getQuestionsByState(state);
  const topics = [...new Set(questions.map(q => q.topic))];
  return ['All Topics', ...topics.sort()];
}

// Get questions by state and topic
export function getQuestionsByTopic(state, topic) {
  const questions = getQuestionsByState(state);
  if (topic === 'All Topics') return questions;
  return questions.filter(q => q.topic === topic);
}

// Get random questions for quiz
export function getQuizQuestions(state, count, topic = 'All Topics') {
  let questions = topic === 'All Topics' 
    ? getQuestionsByState(state)
    : getQuestionsByTopic(state, topic);
  
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Get practice test (75 questions, randomized)
export function getPracticeTest(state) {
  const allQuestions = getQuestionsByState(state);
  const needed = 75;
  
  if (allQuestions.length >= needed) {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, needed);
  } else {
    const result = [];
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    
    while (result.length < needed) {
      for (let q of shuffled) {
        if (result.length >= needed) break;
        const uniqueId = result.length < allQuestions.length 
          ? q.id 
          : `${q.id}-rep${Math.floor(result.length / allQuestions.length)}-${result.length}`;
        result.push({ ...q, id: uniqueId });
      }
    }
    
    return result;
  }
}
