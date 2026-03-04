// Texas-specific flashcard questions
// 215 flashcards extracted from TX Flashcards.docx

const txFlashcardQuestions = [
  {
    id: 1,
    question: 'What is "Antique"?',
    answer: 'Any work of art, piece of furniture, decorative object, or the like, created or produced in a former period, or, according to U.S. customs laws, 100 years before date of purchase.',
  },
  {
    id: 2,
    question: 'What is "As is"?',
    answer: 'Without warranty; buyers are responsible for examining and judging the property for their own protection.',
  },
  {
    id: 3,
    question: 'What is "Bank letter of guarantee"?',
    answer: 'a letter issued by a bank on behalf of a customer guaranteeing payment up to the amount stated in the letter.',
  },
  {
    id: 4,
    question: 'What is "Buyer’s premium"?',
    answer: 'A percentage of the high bid added to the “hammer price” of an item.',
  },
  {
    id: 5,
    question: 'What is "Commission"?',
    answer: 'The fee charged to the seller by the auctioneer for providing services; usually a percentage of the gross selling price of the item(s) established by contract (the Listing Agreement) prior to the auction.',
  },
  {
    id: 6,
    question: 'What is "Conditions of sale"?',
    answer: 'The legal terms that govern an auction, including acceptable payment terms, buyer’s premiums, possession and removal of goods (including storage), absolute or reserve auction, and other agree upon terms.',
  },
  {
    id: 7,
    question: 'What is "Deposit"?',
    answer: 'The sum of money paid by the bidder for the privilege of bidding or as a percentage of the purchase price, especially on higher valued property. A deposit is commonly used to discourage casual or unqualified bidders. Unused deposits are returned to the bidder at the end of the auction.',
  },
  {
    id: 8,
    question: 'What is "Increment"?',
    answer: 'The amount the bid increases by.',
  },
  {
    id: 9,
    question: 'What is "Provenance"?',
    answer: 'Place or source of origin; the history of ownership.',
  },
  {
    id: 10,
    question: 'What is "USPAP"?',
    answer: 'USPAP was adopted by Congress in 1989, and contains standards for all types of appraisal services, including real estate, personal property, business and mass appraisal.',
  },
  {
    id: 11,
    question: 'What is the definition of an "Antique"?',
    answer: 'Any work of art or item created at least 100 years before the date of purchase',
  },
  {
    id: 12,
    question: 'What does the term "As-Is" mean in the context of an auction?',
    answer: 'The buyer is responsible for examining and judging the property for themselves',
  },
  {
    id: 13,
    question: 'What is a "Bank Letter of Guarantee"?',
    answer: 'A letter from a bank guaranteeing payment up to a certain amount',
  },
  {
    id: 14,
    question: 'What does "Buyer’s Premium" refer to in an auction?',
    answer: 'A percentage of the high bid added to the hammer price',
  },
  {
    id: 15,
    question: 'What is a “Commission" in an auction?',
    answer: 'The fee charged to the seller by the auctioneer for services',
  },
  {
    id: 16,
    question: 'What do the "Conditions of Sale" in an auction refer to?',
    answer: 'Legal terms that govern the auction, including payment terms and removal of goods',
  },
  {
    id: 17,
    question: 'What is a "Deposit" in an auction context?',
    answer: 'A sum paid by the bidder for the privilege of bidding or a percentage of the purchase price',
  },
  {
    id: 18,
    question: 'What does "Increment" refer to in an auction?',
    answer: 'The amount the bid increases by',
  },
  {
    id: 19,
    question: 'What is "Provenance"?',
    answer: 'The place or source of origin and history of ownership of an item',
  },
  {
    id: 20,
    question: 'What does USPAP stand for in the context of appraisals?',
    answer: 'Uniform Standards of Professional Appraisal Practice',
  },
  {
    id: 21,
    question: 'According to Section 2.106(a), what do the terms "contract" and "agreement" refer to in this chapter?',
    answer: 'Contracts related to present or future sale of goods',
  },
  {
    id: 22,
    question: 'What is the meaning of a "present sale" under Section 2.106?',
    answer: 'A sale completed immediately when the contract is made',
  },
  {
    id: 23,
    question: 'What does the term "conforming" refer to in the context of a contract?',
    answer: 'Goods or conduct that align with the obligations in the contract',
  },
  {
    id: 24,
    question: 'What does "Termination" mean in the context of this chapter?',
    answer: 'A party ending the contract not due to breach, and discharging any remaining obligations',
  },
  {
    id: 25,
    question: 'What is the effect of "Cancellation" according to Section 2.106?',
    answer: 'It ends the contract for breach and retains the cancelling party’s right to seek remedies for the breach',
  },
  {
    id: 26,
    question: 'Under Section 2.201, what is required for a contract for the sale of goods priced at $500 or more to be enforceable?',
    answer: 'A writing sufficient to indicate that a contract has been made and signed by the party against whom enforcement is sought',
  },
  {
    id: 27,
    question: 'According to Section 2.201(b), what satisfies the writing requirement for a contract between merchants?',
    answer: 'A writing confirming the contract, received within a reasonable time, and not objected to within ten days',
  },
  {
    id: 28,
    question: 'Under Section 2.201(c), when is a contract enforceable even without satisfying the writing requirement?',
    answer: 'If the goods have been specially manufactured for the buyer',
  },
  {
    id: 29,
    question: 'What does Section 2.204(a) state about how a contract for the sale of goods can be formed?',
    answer: 'It can be formed in any manner sufficient to show agreement, including conduct by both parties',
  },
  {
    id: 30,
    question: 'According to Section 2.204(c), what happens if some terms of a contract are left open?',
    answer: 'The contract is still valid as long as the parties intended to make a contract and there is a reasonably certain basis for giving an appropriate remedy',
  },
  {
    id: 31,
    question: 'According to Section 2.209(a), what is required for an agreement modifying a contract within this chapter to be binding?',
    answer: 'No consideration',
  },
  {
    id: 32,
    question: 'Under Section 2.209(b), a signed agreement that excludes modification or rescission except by a signed writing cannot be modified or rescinded unless:',
    answer: 'The requirement on a form supplied by the merchant is separately signed by the other party',
  },
  {
    id: 33,
    question: 'According to Section 2.209(c), what must be satisfied if the contract is modified and falls under the statute of frauds section (Section 2.201)?',
    answer: 'The requirements of Section 2.201 must be satisfied',
  },
  {
    id: 34,
    question: 'What can occur if an attempt at modification or rescission does not meet the requirements of Subsections (b) or (c) in Section 2.209?',
    answer: 'It can operate as a waiver',
  },
  {
    id: 35,
    question: 'According to Section 2.209(e), what can a party do after waiving an executory portion of the contract?',
    answer: 'They can retract the waiver by giving reasonable notice, unless the retraction would be unjust',
  },
  {
    id: 36,
    question: 'According to Section 2.328(a), in a sale by auction, what does each lot represent?',
    answer: 'A separate sale',
  },
  {
    id: 37,
    question: 'Under Section 2.328(b), when is a sale by auction considered complete?',
    answer: 'When the auctioneer announces completion by the fall of the hammer or in another customary manner',
  },
  {
    id: 38,
    question: 'In a sale by auction with reserve, when can the auctioneer withdraw the goods?',
    answer: 'At any time before announcing the completion of the sale',
  },
  {
    id: 39,
    question: 'What happens in an auction without reserve, according to Section 2.328(c)?',
    answer: 'The article or lot cannot be withdrawn unless no bid is made within a reasonable time',
  },
  {
    id: 40,
    question: 'According to Section 9.102(73), who is considered a "secured party"?',
    answer: 'A person in whose favor a security interest is created or provided for under a security agreement',
  },
  {
    id: 41,
    question: 'According to Section 9.103(a)(1), what does the term "purchase-money collateral" refer to?',
    answer: 'Goods or software that secures a purchase-money obligation incurred with respect to that collateral',
  },
  {
    id: 42,
    question: 'What is a "purchase-money obligation" as defined in Section 9.103(a)(2)?',
    answer: 'An obligation incurred for part of the price of the collateral or to enable the debtor to acquire rights or use of the collateral',
  },
  {
    id: 43,
    question: 'Under Section 9.103(b), when does a security interest in goods become a purchase-money security interest?',
    answer: 'To the extent that the goods are purchase-money collateral with respect to that security interest',
  },
  {
    id: 44,
    question: 'According to Section 9.103(c), when can a security interest in software be considered a purchase-money security interest?',
    answer: 'When the debtor acquires an interest in the software as part of an integrated transaction involving the acquisition of goods',
  },
  {
    id: 45,
    question: 'What is the purchase-money security interest status of a consignor\'s interest in goods under Section 9.103(d)?',
    answer: 'It is a purchase-money security interest in inventory',
  },
  {
    id: 46,
    question: 'How should a payment be applied when there is no agreement on a method in a transaction other than a consumer-goods transaction, according to Section 9.103(e)?',
    answer: 'It should be applied in accordance with any reasonable method to which the parties agree, or by the debtor’s intention',
  },
  {
    id: 47,
    question: 'Under Section 9.103(f), does a purchase-money security interest lose its status if the collateral secures an obligation that is not a purchase-money obligation?',
    answer: 'No, it does not lose its status as a purchase-money security interest',
  },
  {
    id: 48,
    question: 'In a transaction other than a consumer-goods transaction, who has the burden of establishing the extent to which a security interest is a purchase-money security interest, according to Section 9.103(g)?',
    answer: 'The secured party',
  },
  {
    id: 49,
    question: 'What does Section 9.103(h) say about the application of rules in consumer-goods transactions?',
    answer: 'The court must determine the appropriate rules for consumer-goods transactions',
  },
  {
    id: 50,
    question: 'According to Section 9.103(f), does a purchase-money security interest remain valid if the purchase-money obligation has been renewed or refinanced?',
    answer: 'Yes, the purchase-money security interest remains valid',
  },
  {
    id: 51,
    question: 'According to Section 9.502(a), what are the three essential pieces of information that must be included in a financing statement?',
    answer: 'The debtor’s name, secured party’s name, and the collateral covered',
  },
  {
    id: 52,
    question: 'What additional information is required for a financing statement covering as-extracted collateral or timber to be cut, or filed as a fixture filing according to Section 9.502(b)?',
    answer: 'A description of the real property to which the collateral is related',
  },
  {
    id: 53,
    question: 'Under Section 9.502(c), when is a record of a mortgage considered effective as a financing statement?',
    answer: 'When the record includes details about the goods or accounts it covers, is duly recorded, and satisfies financing statement requirements',
  },
  {
    id: 54,
    question: 'Can a financing statement be filed before a security agreement is made or a security interest attaches according to Section 9.502(d)?',
    answer: 'Yes, it can be filed before the security agreement',
  },
  {
    id: 55,
    question: 'According to Section 17.11(a), who is considered a "wholesaler"?',
    answer: 'A person who sells for the purpose of resale, not directly to a consuming purchaser',
  },
  {
    id: 56,
    question: 'What is prohibited under Section 17.11(b) regarding advertising?',
    answer: 'Misrepresenting the nature of the business by using terms like manufacturer, wholesaler, or retailer when not applicable',
  },
  {
    id: 57,
    question: 'According to Section 17.11(c), what must a person do when advertising a liquidation or going-out-of-business sale?',
    answer: 'State the correct name and permanent address of the owner of the business in the advertising',
  },
  {
    id: 58,
    question: 'What penalty does a person face if they violate Section 17.11(b) or (c)?',
    answer: 'A misdemeanor with a fine of not less than $100 nor more than $500',
  },
  {
    id: 59,
    question: 'According to Section 17.12(a), what is prohibited in terms of advertising?',
    answer: 'Disseminating a statement that materially misrepresents the cost or character of goods or services',
  },
  {
    id: 60,
    question: 'What is required to solicit advertising in the name of a club, association, or organization under Section 17.12(b)?',
    answer: 'Written permission from the club, association, or organization',
  },
  {
    id: 61,
    question: 'Under Section 17.12(c), what is prima facie evidence that a person disseminated a statement?',
    answer: 'The person’s proprietary mark appearing on or in the statement',
  },
  {
    id: 62,
    question: 'What penalty does a person face for violating Section 17.12(a) or (b)?',
    answer: 'A misdemeanor and a fine between $10 and $200',
  },
  {
    id: 63,
    question: 'According to Section 17.45(1), what does the term "goods" refer to?',
    answer: 'Tangible personal property or real property purchased or leased for use',
  },
  {
    id: 64,
    question: 'What is the definition of "unconscionable action or course of action" in Section 17.45(5)?',
    answer: 'An act that takes advantage of a consumer’s lack of knowledge or ability to an unfair degree',
  },
  {
    id: 65,
    question: 'Who is considered a "consumer" under Section 17.45(4)?',
    answer: 'An individual, partnership, corporation, or state subdivision that seeks to purchase or lease goods or services',
  },
  {
    id: 66,
    question: 'What does "knowingly" mean under Section 17.45(9)?',
    answer: 'Actual awareness of the falsity, deception, or unfairness of the act or practice',
  },
  {
    id: 67,
    question: 'According to Section 17.45(10), what is a "business consumer"?',
    answer: 'A person who seeks or acquires goods or services for commercial or business use',
  },
  {
    id: 68,
    question: 'What does "economic damages" include according to Section 17.45(11)?',
    answer: 'Compensatory damages for pecuniary loss, including repair and replacement costs',
  },
  {
    id: 69,
    question: 'What is declared unlawful in the conduct of any trade or commerce?',
    answer: 'False, misleading, or deceptive acts or practices',
  },
  {
    id: 70,
    question: 'Which of the following is considered a "false, misleading, or deceptive act"?',
    answer: 'Passing off goods or services as those of another',
  },
  {
    id: 71,
    question: 'Which of the following actions would be prohibited?',
    answer: 'Causing confusion about the origin of goods or services',
  },
  {
    id: 72,
    question: 'What type of representation is prohibited?',
    answer: 'Representing that goods or services have qualities they do not have',
  },
  {
    id: 73,
    question: 'What does the law prohibit in advertising?',
    answer: 'Advertising goods or services with no intention to sell them as advertised',
  },
  {
    id: 74,
    question: 'What practice is prohibited regarding odometers?',
    answer: 'Disconnecting, turning back, or resetting the odometer of a motor vehicle',
  },
  {
    id: 75,
    question: 'What is the key restriction related to advertising a sale?',
    answer: 'Representing that a business is going out of business when it is not',
  },
  {
    id: 76,
    question: 'What is prohibited regarding prescription drug identification cards?',
    answer: 'Advertising them as insurance coverage when they are not',
  },
  {
    id: 77,
    question: 'What practice is prohibited in connection with the sale of goods or services?',
    answer: 'Using a chain referral sales plan that offers compensation for referring future buyers',
  },
  {
    id: 78,
    question: 'What is prohibited regarding a guarantee or warranty?',
    answer: 'Representing that a guaranty or warranty confers rights or remedies it does not involve',
  },
  {
    id: 79,
    question: 'What practice involving pyramid schemes is prohibited?',
    answer: 'Promoting a pyramid promotional scheme',
  },
  {
    id: 80,
    question: 'What must not be represented regarding work or services on goods?',
    answer: 'That work or services have been performed or parts replaced when they have not been',
  },
  {
    id: 81,
    question: 'What is prohibited when filing suit based on a written contractual obligation?',
    answer: 'Filing the suit in a county where the defendant does not reside or did not sign the contract',
  },
  {
    id: 82,
    question: 'What is prohibited regarding failing to disclose information about goods or services?',
    answer: 'Failing to disclose information that would prevent the consumer from entering the transaction',
  },
  {
    id: 83,
    question: 'What is prohibited in business naming?',
    answer: 'Using the term "corporation" when not incorporated under the laws of any jurisdiction',
  },
  {
    id: 84,
    question: 'What is illegal regarding annuity contracts under Chapter 22, Acts of the 57th Legislature?',
    answer: 'Selling or promoting an annuity contract for salary reduction when it is not an eligible qualified investment',
  },
  {
    id: 85,
    question: 'What is prohibited during a disaster declared by the governor?',
    answer: 'Selling or leasing necessities at exorbitant or excessive prices',
  },
  {
    id: 86,
    question: 'What is prohibited when using foreign language translations?',
    answer: 'Using terms like "attorney" or "lawyer" when the person is not authorized to practice law',
  },
  {
    id: 87,
    question: 'What must be disclosed in solicitations that resemble government forms or notices?',
    answer: 'A statement that the solicitation is not from a governmental entity',
  },
  {
    id: 88,
    question: 'What is considered "personal identifying information"?',
    answer: 'Information that alone or with other data identifies an individual',
  },
  {
    id: 89,
    question: 'Which of these is considered sensitive personal information?',
    answer: 'A person’s name and social security number when unencrypted',
  },
  {
    id: 90,
    question: 'Which of the following would NOT be classified as sensitive personal information under this law?',
    answer: 'Publicly available government records',
  },
  {
    id: 91,
    question: 'What is the definition of a "victim" under this law?',
    answer: 'Someone whose identifying information is used without authorization',
  },
  {
    id: 92,
    question: 'What condition must be met for information to be classified as "sensitive personal information"?',
    answer: 'It must include a person’s first name or initial and last name along with certain private data',
  },
  {
    id: 93,
    question: 'What is a business required to do under this law regarding sensitive personal information?',
    answer: 'Implement reasonable procedures to protect sensitive personal information from unlawful use or disclosure',
  },
  {
    id: 94,
    question: 'When a business no longer needs customer records containing sensitive personal information, how must it dispose of them?',
    answer: 'Shred, erase, or modify them to make the information unreadable',
  },
  {
    id: 95,
    question: 'Which type of entity is specifically excluded from this section’s requirements?',
    answer: 'Financial institutions covered under 15 U.S.C. Section 6809',
  },
  {
    id: 96,
    question: 'Under this section, what is included in the definition of a “business”?',
    answer: 'A nonprofit athletic or sports association',
  },
  {
    id: 97,
    question: 'What constitutes a "breach of system security" under this law?',
    answer: 'Unauthorized acquisition of computerized data that compromises security, confidentiality, or integrity',
  },
  {
    id: 98,
    question: 'How soon must a business notify affected individuals after determining a breach has occurred?',
    answer: 'Without unreasonable delay, but no later than 60 days',
  },
  {
    id: 99,
    question: 'Under what circumstances may a business delay notifying individuals of a breach?',
    answer: 'If notifying them would impede a criminal investigation',
  },
  {
    id: 100,
    question: 'What is one method a business may use to notify individuals of a security breach?',
    answer: 'Sending a written notice to their last known address',
  },
  {
    id: 101,
    question: 'If a breach affects more than 10,000 people, who else must be notified?',
    answer: 'Consumer reporting agencies that maintain nationwide files',
  },
  {
    id: 102,
    question: 'If a breach affects at least 250 Texas residents, who must also be notified?',
    answer: 'The state\'s Attorney General',
  },
  {
    id: 103,
    question: 'According to Sec. 604A.0021, a seller may NOT impose a surcharge on a buyer who:',
    answer: 'Uses a credit card instead of cash, a check, or a similar payment method',
  },
  {
    id: 104,
    question: 'Under Sec. 432.003, which of the following is considered a "device"?',
    answer: 'A thermometer used for medical purposes',
  },
  {
    id: 105,
    question: 'Which of the following BEST describes "distressed merchandise"?',
    answer: 'Food, drugs, devices, or cosmetics that have been misbranded, adulterated, or exposed to unsafe conditions',
  },
  {
    id: 106,
    question: 'What is a key difference between "salvaged merchandise" and "distressed merchandise"?',
    answer: 'Distressed merchandise is always unsafe for use, while salvaged merchandise has been restored to meet safety standards',
  },
  {
    id: 107,
    question: 'According to Sec. 432.003, which of the following is NOT considered a "drug" under Texas law?',
    answer: 'A medical face mask',
  },
  {
    id: 108,
    question: 'Under the Food, Drug, Device, and Cosmetic Salvage Act, what is the meaning of "reconditioning"?',
    answer: 'Restoring distressed merchandise to meet safety and quality standards',
  },
  {
    id: 109,
    question: 'According to Sec. 432.003, which of the following is classified as "food"?',
    answer: 'Chewing gum',
  },
  {
    id: 110,
    question: 'Under Sec. 432.005, what type of license is required to operate a salvage establishment in Texas?',
    answer: 'Salvage operator license',
  },
  {
    id: 111,
    question: 'Who must obtain a salvage broker license in Texas?',
    answer: 'A person who acts as a salvage broker',
  },
  {
    id: 112,
    question: 'If a person is licensed as a salvage operator or salvage broker, are they required to obtain an additional license under Chapter 431?',
    answer: 'No, they do not need an additional license if acting within their licensed scope',
  },
  {
    id: 113,
    question: 'Under Sec. 2.001, when is a manufactured home considered personal property?',
    answer: 'Unless the owner elects to treat it as real property and files the necessary paperwork',
  },
  {
    id: 114,
    question: 'What is required for a manufactured home to be considered real property?',
    answer: 'The owner must file a certified copy of the statement of ownership and location in the county property records',
  },
  {
    id: 115,
    question: 'In Sec. 2.001, terms defined in Chapter 1201 of the Occupations Code:',
    answer: 'Consumer; First retail sale; Manufactured home',
  },
  {
    id: 116,
    question: 'Where must notices of federal liens upon real property be filed?',
    answer: 'In the office of the county clerk in the county where the property is located',
  },
  {
    id: 117,
    question: 'According to Sec. 14.002, where must federal tax liens on personal property of a corporation be filed?',
    answer: 'With the Texas Secretary of State',
  },
  {
    id: 118,
    question: 'Where must notices of federal liens on personal property be filed if the lien applies to an individual (not a corporation or partnership)?',
    answer: 'The county clerk’s office in the county where the person resides at the time of filing',
  },
  {
    id: 119,
    question: 'Which of the following documents is NOT required to be filed under the Uniform Federal Lien Registration Act?',
    answer: 'State income tax return',
  },
  {
    id: 120,
    question: 'According to Sec. 1201.003, what is the minimum number of manufactured homes a person must sell or exchange in a 12-month period to be considered a retailer?',
    answer: 'Two',
  },
  {
    id: 121,
    question: 'Which of the following activities qualifies a person as a retailer of manufactured homes under Sec. 1201.003?',
    answer: 'Selling or exchanging at least two manufactured homes in a 12-month period',
  },
  {
    id: 122,
    question: 'What type of license is required to sell or exchange two or more manufactured homes to consumers in a 12-month period?',
    answer: 'Retailer’s license',
  },
  {
    id: 123,
    question: 'Under Sec. 1201.101, which of the following is true regarding the sale of manufactured homes?',
    answer: 'A person must hold a retailer\'s license to sell two or more manufactured homes in a 12-month period',
  },
  {
    id: 124,
    question: 'According to Sec. 1201.2055, when can an owner elect to treat a manufactured home as real property?',
    answer: 'If the home is attached to land the owner possesses or leases under a long-term lease',
  },
  {
    id: 125,
    question: 'Under Sec. 1201.2055, what is required for a manufactured home on leased land to be treated as real property?',
    answer: 'The lease must meet the definition of a long-term lease under department rules',
  },
  {
    id: 126,
    question: 'Under Rule 80.32, how many manufactured homes can be sold at auction to Texas consumers before requiring a retailer’s license?',
    answer: 'One',
  },
  {
    id: 127,
    question: 'According to Rule 80.32, what license must each individual acting as an agent for an auction of manufactured homes hold?',
    answer: 'Salesperson license',
  },
  {
    id: 128,
    question: 'What additional law may apply to auctioning manufactured homes, as mentioned in Rule 80.32?',
    answer: 'Texas Auctioneer Act, Occupations Code, Chapter 1802',
  },
  {
    id: 129,
    question: 'How much notice must a retailer provide to the Texas Department of Housing and Community Affairs before holding an auction of manufactured homes?',
    answer: '30 days',
  },
  {
    id: 130,
    question: 'Under Rule 535.5, when is an auctioneer not required to hold a real estate license?',
    answer: 'When auctioning real property for sale',
  },
  {
    id: 131,
    question: 'Which of the following actions can an auctioneer legally perform without holding a real estate license?',
    answer: 'Conduct the auction of real property',
  },
  {
    id: 132,
    question: 'According to Rule 205.8, what must happen before secondhand bedding can be sold, leased, or rented to consumers?',
    answer: 'It must be cleaned and germicidally treated',
  },
  {
    id: 133,
    question: 'Under Rule 205.8, what is required for bedding materials that are filthy, stained, or have obnoxious odors?',
    answer: 'They must be removed and discarded',
  },
  {
    id: 134,
    question: 'According to Rule 205.8, which of the following is not an approved method for germicidal treatment?',
    answer: 'Freezing at -20°F for 48 hours',
  },
  {
    id: 135,
    question: 'What is the minimum temperature required for dry heat germicidal treatment of secondhand bedding?',
    answer: '230°F for 1 hour and 15 minutes',
  },
  {
    id: 136,
    question: 'What is the required pressure and time for steam germicidal treatment of secondhand bedding?',
    answer: '15 pounds per square inch (psi) for 30 minutes',
  },
  {
    id: 137,
    question: 'According to Rule 205.8, which method of germicidal treatment is allowed only if approved in writing by the department?',
    answer: 'Any method not specifically listed in the regulations',
  },
  {
    id: 138,
    question: 'What requirement applies to records of germicidal treatment under Rule 205.8?',
    answer: 'Records must be kept for at least two years',
  },
  {
    id: 139,
    question: 'Which of the following is not allowed under the chemical spray method for germicidal treatment?',
    answer: 'Use of aerosol sprays',
  },
  {
    id: 140,
    question: 'Which of the following activities is generally prohibited regarding an endangered species in Texas?',
    answer: '• Taking, possessing, or transporting',
  },
  {
    id: 141,
    question: 'What is required for a person to legally sell goods made from threatened species?',
    answer: 'A bill of sale or notarized affidavit proving the specimen was legally obtained',
  },
  {
    id: 142,
    question: 'Under what condition can a person sell an endangered species in Texas?',
    answer: 'If they hold an endangered species propagation permit',
  },
  {
    id: 143,
    question: 'Which of the following is required to legally transport a threatened species in Texas?',
    answer: '• A valid out-of-state permit',
  },
  {
    id: 144,
    question: 'Which of the following does not require a permit when possessing alligator products in Texas?',
    answer: '• Processed alligators',
  },
  {
    id: 145,
    question: 'What must be provided when selling, purchasing, exporting, or importing alligator parts in Texas?',
    answer: 'Proof of lawful take and/or possession',
  },
  {
    id: 146,
    question: 'Who is legally allowed to sell a live fur-bearing animal in Texas?',
    answer: 'A licensed fur-bearing animal propagator',
  },
  {
    id: 147,
    question: 'Who may legally sell the carcass or pelt of a fur-bearing animal in Texas?',
    answer: 'Only a licensed trapper or wholesale fur dealer',
  },
  {
    id: 148,
    question: 'How long must a person retain records required under Texas tax law?',
    answer: 'Four years',
  },
  {
    id: 149,
    question: 'What does a Texas ‘Sales and Use Tax’ permit allow a purchaser to do?',
    answer: 'Buy taxable items for resale without paying tax upfront',
  },
  {
    id: 150,
    question: 'Who is required to have a Texas sales and use tax permit?',
    answer: 'Any seller engaged in business in Texas, including itinerant vendors and kiosk operators',
  },
  {
    id: 151,
    question: 'According to Rule 3.286, which of the following statements about sales tax collection is true?',
    answer: 'Sellers must use the statutory bracket system to calculate sales tax',
  },
  {
    id: 152,
    question: 'What happens if a seller collects less sales tax than is legally due?',
    answer: 'The seller must remit the correct amount based on total receipts, even if they under-collected from the purchaser',
  },
  {
    id: 153,
    question: 'Under what condition may a business file ‘sales and use’ tax returns on a yearly basis?',
    answer: 'If the business collects less than $1,000 in sales and use tax during the calendar year',
  },
  {
    id: 154,
    question: 'What happens if a business filing sales tax yearly exceeds $1,000 in liability within a calendar year?',
    answer: 'They must begin filing quarterly or monthly, depending on the amount owed',
  },
  {
    id: 155,
    question: 'What discount is available to permit holders who file and pay sales tax on time?',
    answer: '0.5% of the tax due',
  },
  {
    id: 156,
    question: 'What is considered a "reasonable estimate" for prepaying sales tax?',
    answer: '• At least 90% of the total amount due',
  },
  {
    id: 157,
    question: 'Is delinquent on any taxes or fees collected by the comptroller',
    answer: 'A business is deemed to have abandoned its sales and use tax permit if:',
  },
  {
    id: 158,
    question: 'When is a seller required to collect sales tax on a transaction?',
    answer: 'Only if the buyer does not provide a valid and properly completed exemption certificate',
  },
  {
    id: 159,
    question: 'Who is responsible for ensuring an exemption certificate is valid?',
    answer: 'The seller',
  },
  {
    id: 160,
    question: 'Which of the following is exempt from sales tax according to Rule 3.296?',
    answer: '• Machinery used exclusively in processing agricultural products',
  },
  {
    id: 161,
    question: 'For machinery and equipment to be exempt under Rule 3.296, what is required for an agricultural cooperative?',
    answer: 'The cooperative must be the original producer of all agricultural products processed',
  },
  {
    id: 162,
    question: 'Which of the following items is considered machinery or equipment for tax exemption purposes?',
    answer: '• A) Hand tools and baling wire',
  },
  {
    id: 163,
    question: 'Which of the following is NOT included as machinery or equipment used exclusively for agricultural purposes under Rule 3.296?',
    answer: '• A) Tractor tires',
  },
  {
    id: 164,
    question: 'Which of the following is a requirement for storage facilities to qualify for tax exemption?',
    answer: 'They must be specifically designed and used exclusively to store bulk fungible commodities',
  },
  {
    id: 165,
    question: 'What criminal offense is committed if a seller advertises that they will absorb or refund the sales tax?',
    answer: 'It is a misdemeanor, punishable by a fine up to $500',
  },
  {
    id: 166,
    question: 'Under Rule 3.305, a seller cannot:',
    answer: 'Offer to absorb or refund any portion of the sales tax',
  },
  {
    id: 167,
    question: 'Who is responsible for collecting and remitting the sales tax on taxable items sold at auction?',
    answer: 'The auctioneer',
  },
  {
    id: 168,
    question: 'Which items are exempt from sales tax when sold at auction?',
    answer: '• Motor vehicles',
  },
  {
    id: 169,
    question: 'Under Rule 3.311, when an auctioneer does not collect payment or issue a bill of sale, who is responsible for sales tax?',
    answer: 'The owner of the item',
  },
  {
    id: 170,
    question: 'What is a maquiladora enterprise?',
    answer: 'A business entity chartered by the Mexican government to process and assemble items for export',
  },
  {
    id: 171,
    question: 'What must a maquiladora enterprise provide when applying for a maquiladora export permit in Texas?',
    answer: 'A copy of their maquiladora authorization form issued by the Mexican government',
  },
  {
    id: 172,
    question: 'What is the purpose of a maquiladora enterprise?',
    answer: 'To import raw materials for production and assembly, primarily for export from Mexico',
  },
  {
    id: 173,
    question: 'How long is the maquiladora export permit valid for once issued by the comptroller?',
    answer: 'Until canceled by the maquiladora enterprise or the comptroller',
  },
  {
    id: 174,
    question: 'What must the maquiladora enterprise do if required by the comptroller when applying for an export permit?',
    answer: 'Post a bond or security',
  },
  {
    id: 175,
    question: 'Who issues the maquiladora export permit?',
    answer: 'The comptroller of Texas',
  },
  {
    id: 176,
    question: 'What does a maquiladora export permit allow an enterprise to do in Texas?',
    answer: 'Make tax-free purchases in Texas for export to Mexico',
  },
  {
    id: 177,
    question: 'What document must the maquiladora enterprise submit to prove they are an authorized maquiladora?',
    answer: 'A maquiladora authorization form issued by the Mexican government',
  },
  {
    id: 178,
    question: 'What happens if the maquiladora enterprise decides to cancel their permit?',
    answer: 'The permit is canceled upon request by the enterprise or the comptroller',
  },
  {
    id: 179,
    question: 'What is the role of the Mexican Secretaria De Comercio Y Fomento Industrial in the maquiladora process?',
    answer: 'They provide the maquiladora authorization form listing the enterprise in the registry of in-bond companies',
  },
  {
    id: 180,
    question: 'According to Sec. 6.01, what must a person obtain before engaging in activities related to alcoholic beverages?',
    answer: 'A license or permit of the proper type as required by the code',
  },
  {
    id: 181,
    question: 'What happens if a license or permit holder violates a provision of the code or a rule of the commission?',
    answer: 'Their license or permit may be revoked or suspended',
  },
  {
    id: 182,
    question: 'What is the purpose of a temporary auction permit?',
    answer: 'To auction alcoholic beverages for off-premises consumption to raise money for the stated purpose of the permit holder',
  },
  {
    id: 183,
    question: 'What is the state fee for obtaining a temporary auction permit?',
    answer: '$25',
  },
  {
    id: 184,
    question: 'How long can a temporary auction permit be issued for?',
    answer: 'No more than 5 days',
  },
  {
    id: 185,
    question: 'Which of the following organizations is eligible to receive a temporary auction permit?',
    answer: 'An organization exempt from taxation under Section 501(c)(3) of the Internal Revenue Code',
  },
  {
    id: 186,
    question: 'Where can an auction be conducted under a temporary auction permit?',
    answer: 'Only in areas where the sale of the type of alcoholic beverage being auctioned is authorized by a local option election',
  },
  {
    id: 187,
    question: 'What must a permit holder do before holding an auction?',
    answer: 'Provide written notice to the nearest commission branch office with details about the auction',
  },
  {
    id: 188,
    question: 'Which of the following activities is prohibited under a temporary auction permit?',
    answer: 'Paying a commission to someone for arranging or conducting the auction',
  },
  {
    id: 189,
    question: 'What happens to the proceeds from an auction authorized by a temporary auction permit?',
    answer: 'They must be deposited into the account of the permit holder',
  },
  {
    id: 190,
    question: 'Who is allowed to sell salvaged alcoholic beverages without a license or permit?',
    answer: 'An insurer or insurance salvor handling a loss',
  },
  {
    id: 191,
    question: 'How must salvaged alcoholic beverages be sold by an insurer or insurance salvor?',
    answer: 'In one lot or parcel',
  },
  {
    id: 192,
    question: 'What must accompany the sale or transfer of livestock such as cattle or horses in Texas?',
    answer: 'A written transfer from the vendor',
  },
  {
    id: 193,
    question: 'What details must be included in the written transfer of livestock?',
    answer: 'The marks and brands of the animal and the number transferred',
  },
  {
    id: 194,
    question: 'What is presumed if a person possesses livestock without a written transfer?',
    answer: 'The possession is presumed to be illegal',
  },
  {
    id: 195,
    question: 'Where must the bill of sale for livestock be recorded to establish legal ownership?',
    answer: 'With the county clerk’s office',
  },
  {
    id: 196,
    question: 'How many vehicles can a person sell in a year before needing a dealer general distinguishing number?',
    answer: 'Five',
  },
  {
    id: 197,
    question: 'What entities are required to obtain a dealer’s license?',
    answer: 'o A person selling 10 vehicles in a year',
  },
  {
    id: 198,
    question: 'Under what condition can an insurance company sell a vehicle without a dealer license?',
    answer: 'If the vehicle was acquired from the owner after paying an insurance claim',
  },
  {
    id: 199,
    question: 'What is the minimum age for an antique passenger car or truck to be sold without a dealer license?',
    answer: '25 years',
  },
  {
    id: 200,
    question: 'How old must a "special interest vehicle" be for a collector to sell it without a dealer license?',
    answer: '12 years',
  },
  {
    id: 201,
    question: 'Which of the following is TRUE about out-of-state dealers selling vehicles in Texas?',
    answer: 'They can sell vehicles if they hold a dealer license and bond from another state',
  },
  {
    id: 202,
    question: 'When is a licensed auctioneer NOT considered a dealer?',
    answer: 'When selling vehicles to the highest bidder at a bona fide auction',
  },
  {
    id: 203,
    question: 'What condition must be met for an auction of vehicles owned by a dealer to be valid?',
    answer: 'The auction must occur at the location for which the dealer\'s general distinguishing number was issued',
  },
  {
    id: 204,
    question: 'According to ATF Rule 96-2, what is the key difference between estate-type and consignment-type auctions?',
    answer: 'Estate-type auctions involve firearms possessed and transferred by an estate, while consignment-type auctions involve firearms taken into possession by the auctioneer for sale.',
  },
  {
    id: 205,
    question: 'Under what condition does an auctioneer conducting consignment-type auctions require a Federal Firearms License?',
    answer: 'When the auctioneer takes possession of firearms and sells them on a regular basis.',
  },
  {
    id: 206,
    question: 'What does 18 U.S.C. § 921(a)(11)(A) define as a "dealer" in firearms?',
    answer: 'Any person engaged in the business of selling firearms at wholesale or retail.',
  },
  {
    id: 207,
    question: 'In estate-type auctions, what role does the auctioneer play in firearm transactions?',
    answer: 'The auctioneer acts as an agent of the estate, assisting in the sale but not possessing or transferring the firearms.',
  },
  {
    id: 208,
    question: 'What is a key factor in determining whether an auctioneer is "engaged in the business" of dealing firearms?',
    answer: 'Whether the auctioneer takes possession of firearms and sells them as a regular business practice.',
  },
  {
    id: 209,
    question: 'Can a licensed auctioneer conduct an auction away from their licensed premises?',
    answer: 'Yes, but they must return the firearms to the licensed premises for delivery to the buyer.',
  },
  {
    id: 210,
    question: 'Under U.S. Code Title 11, Section 721, when may a court allow a trustee to operate the business of a debtor?',
    answer: 'Only if the operation benefits the estate and aligns with its orderly liquidation.',
  },
  {
    id: 211,
    question: 'According to Rule 6005 of the Federal Rules of Bankruptcy Procedure, who is prohibited from acting as an appraiser or auctioneer in a bankruptcy case?',
    answer: 'Officers or employees of the Judicial Branch of the U.S. or the U.S. Department of Justice.',
  },
  {
    id: 212,
    question: 'What is the main purpose of the "notice filing" approach under the Uniform Commercial Code (UCC)?',
    answer: 'To notify a filing office that a debtor and secured party intend to engage in a secured transaction using specified collateral.',
  },
  {
    id: 213,
    question: 'When did the Uniform Commercial Code (UCC) become effective?',
    answer: 'June 30, 1966, at midnight',
  },
  {
    id: 214,
    question: 'Under U.S. Code Title 18, Section 923, what is required before engaging in the business of importing, manufacturing, or dealing in firearms?',
    answer: 'Filing an application and receiving a license from the Attorney General.',
  },
  {
    id: 215,
    question: 'What is the fee for a firearms dealer’s license who is not dealing in destructive device',
    answer: '$200 for 3 years, with a $90 renewal fee for 3 years',
  },
];

export default txFlashcardQuestions;
