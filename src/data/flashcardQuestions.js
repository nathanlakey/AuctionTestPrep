// Dedicated Flashcard Questions
// 150 questions specifically formatted for flashcard learning
// Used across all states for consistent flashcard experience

const flashcardQuestions = [
  {
    id: 1,
    question: "What is an absolute auction?",
    answer: "An auction in which the property is sold to the highest bidder with no minimum or reserve price.",
    explanation: "In an absolute auction, once bidding begins, the seller is committed to sell to the highest bidder regardless of price, which usually increases bidder interest and competition."
  },
  {
    id: 2,
    question: "What is a reserve auction?",
    answer: "An auction in which the seller reserves the right to accept or reject the highest bid.",
    explanation: "In a reserve auction the seller is not obligated to sell unless the bidding reaches an acceptable level, which protects the seller but may reduce bidder enthusiasm."
  },
  {
    id: 3,
    question: "What is a buyer\u2019s premium in an auction?",
    answer: "An additional fee, usually a percentage of the high bid, paid by the buyer on top of the bid price.",
    explanation: "The buyer\u2019s premium is added to the hammer price to determine the total purchase price and is a common way for auction companies to generate revenue."
  },
  {
    id: 4,
    question: "What is the hammer price?",
    answer: "The final bid accepted by the auctioneer when the item is declared sold.",
    explanation: "The hammer price is the winning bid amount before any additional charges such as buyer\u2019s premium, taxes, or fees are added."
  },
  {
    id: 5,
    question: "What does the term 'as is, where is' mean in auctions?",
    answer: "The property is sold in its current condition and location with no warranties or guarantees from the seller or auctioneer.",
    explanation: "As is, where is places the responsibility on buyers to inspect and evaluate items before bidding since there is no promise of repairs or returns."
  },
  {
    id: 6,
    question: "What is a catalog in an auction context?",
    answer: "A printed or digital listing that describes the items offered in an auction.",
    explanation: "The catalog helps bidders understand what is being sold, often including lot numbers, descriptions, photos, and terms of sale."
  },
  {
    id: 7,
    question: "What is a lot at auction?",
    answer: "A single item or group of items offered together as one unit for bidding.",
    explanation: "The lot is the basic selling unit in an auction, and bidders compete to buy the entire lot, not individual pieces within it unless stated otherwise."
  },
  {
    id: 8,
    question: "What is a bidder number?",
    answer: "A unique identification number assigned to a registered bidder.",
    explanation: "Bidder numbers allow the auctioneer and staff to track bids and purchases accurately without relying on names during live bidding."
  },
  {
    id: 9,
    question: "What is a floor bid?",
    answer: "A bid placed by someone who is physically present at the auction site.",
    explanation: "Floor bids compete with online, phone, or absentee bids and are taken directly by the auctioneer or ring staff during the live sale."
  },
  {
    id: 10,
    question: "What is an absentee bid?",
    answer: "A bid placed in advance by a buyer who cannot attend the auction in person.",
    explanation: "Absentee bids authorize the auction company to bid on behalf of the absentee bidder up to a maximum amount according to the auction terms."
  },
  {
    id: 11,
    question: "What is a phone bid?",
    answer: "A bid placed by a bidder who participates via telephone during the live auction.",
    explanation: "With a phone bid, an auction staff member relays the auctioneer\u2019s calls and submits bids on behalf of the remote bidder in real time."
  },
  {
    id: 12,
    question: "What is online bidding?",
    answer: "Bidding that takes place over the internet using an electronic platform.",
    explanation: "Online bidding can occur in real time during a live auction or during a timed online only event, expanding the auction\u2019s reach beyond the physical location."
  },
  {
    id: 13,
    question: "What is a timed online auction?",
    answer: "An auction conducted entirely online where bidding is open for a set period and closes at a scheduled time.",
    explanation: "In a timed online auction, bidders can place bids anytime during the bidding window, and the highest bid at closing time wins, subject to any extensions or soft close rules."
  },
  {
    id: 14,
    question: "What is a soft close in online auctions?",
    answer: "A closing method where the end time for a lot is extended if a bid is placed shortly before the scheduled close.",
    explanation: "Soft close features are used to discourage last second sniping and give all interested bidders a fair chance to respond to late bids."
  },
  {
    id: 15,
    question: "What is a bidder registration process?",
    answer: "The procedure through which potential buyers provide information and agree to terms before receiving bidding privileges.",
    explanation: "Registration helps the auction company verify identities, explain terms, and create a record that connects bids to a known person or entity."
  },
  {
    id: 16,
    question: "What is the role of the auctioneer?",
    answer: "The person licensed or authorized to conduct the auction and accept bids on behalf of the seller.",
    explanation: "The auctioneer manages the pace, recognizes bids, announces terms, and declares items sold, serving as the central figure of the sale."
  },
  {
    id: 17,
    question: "What is a ringman or bid assistant?",
    answer: "A trained assistant who works the auction floor to spot bids and communicate them to the auctioneer.",
    explanation: "Ringmen help create energy, improve communication, and ensure no bid is missed, especially in large or crowded auctions."
  },
  {
    id: 18,
    question: "What does 'chant' mean in auctioneering?",
    answer: "The rhythmic, rapid style of calling bids used by an auctioneer.",
    explanation: "The chant combines a series of numbers and filler words that help maintain pace and engagement while clearly communicating the current bid and asking amount."
  },
  {
    id: 19,
    question: "What is the opening bid?",
    answer: "The first bid offered on a lot when the auctioneer begins the bidding.",
    explanation: "The opening bid can be set by the auctioneer, a pre bid, or a bidder in the crowd, and it establishes the starting point for competition."
  },
  {
    id: 20,
    question: "What is a bid increment?",
    answer: "The amount by which the auctioneer advances the bidding from one bid to the next.",
    explanation: "Bid increments are set to keep bidding moving efficiently, usually increasing as the price level rises to reflect the value of the item."
  },
  {
    id: 21,
    question: "What is a consignment in auctions?",
    answer: "Property entrusted to an auction company to sell on behalf of the owner for a fee or commission.",
    explanation: "In a consignment arrangement, the consignor remains the owner until the item is sold, and the auctioneer acts as the seller\u2019s agent."
  },
  {
    id: 22,
    question: "Who is the consignor?",
    answer: "The person or entity that delivers property to the auction company to be sold.",
    explanation: "The consignor is typically the seller and signs a contract authorizing the auction company to market and sell the property."
  },
  {
    id: 23,
    question: "Who is the successful bidder?",
    answer: "The person or entity that wins the bidding and is obligated to complete the purchase.",
    explanation: "The successful bidder is recognized when the auctioneer declares the item sold and that bidder becomes the buyer under the auction terms."
  },
  {
    id: 24,
    question: "What is a seller\u2019s confirmation auction?",
    answer: "An auction where the seller must approve the final high bid before the sale is complete.",
    explanation: "In a seller\u2019s confirmation auction, bidders understand that even if they are the high bidder, the seller must still accept the final price."
  },
  {
    id: 25,
    question: "What is a bid card?",
    answer: "A card displaying the bidder number that a bidder uses to signal bids.",
    explanation: "Bid cards make it easy for auction staff to identify and record bids accurately during the sale."
  },
  {
    id: 26,
    question: "What is a clerk in an auction?",
    answer: "The person responsible for recording bids, buyer numbers, and selling prices during the auction.",
    explanation: "The clerk\u2019s records form the official sale documentation and are essential for invoicing and settlement after the auction."
  },
  {
    id: 27,
    question: "What is settlement in an auction context?",
    answer: "The process of calculating amounts owed to the seller and paying them after the auction.",
    explanation: "Settlement includes reconciling sold lots, commissions, fees, and expenses, then issuing a settlement statement and payment to the seller."
  },
  {
    id: 28,
    question: "What is an auction contract or seller agreement?",
    answer: "The written agreement between the seller and auction company outlining the terms for selling property at auction.",
    explanation: "This contract usually addresses commissions, expenses, advertising, reserve prices, and the duties of both parties."
  },
  {
    id: 29,
    question: "What is a bidder\u2019s paddle?",
    answer: "A physical paddle or card used by bidders to signal their bids, usually printed with a number.",
    explanation: "Paddles help auction staff see and identify bids quickly, especially in larger or more formal events."
  },
  {
    id: 30,
    question: "What is due diligence for an auction buyer?",
    answer: "The research and inspection a buyer performs before bidding to understand the property and risks.",
    explanation: "In auctions, buyers are generally expected to perform their own inspections and cannot rely on post sale adjustments for conditions they could have discovered earlier."
  },
  {
    id: 31,
    question: "What does 'preview' mean in auctions?",
    answer: "Scheduled time before the auction when prospective bidders can inspect the items offered for sale.",
    explanation: "Preview periods support buyer due diligence and can increase confidence and bidding activity."
  },
  {
    id: 32,
    question: "What is a sale bill?",
    answer: "An advertisement or flyer that lists the key details of an upcoming auction.",
    explanation: "Sale bills summarize location, time, major items, and terms, and they are often used for marketing to local buyers."
  },
  {
    id: 33,
    question: "What is a bidder deposit?",
    answer: "Money that bidders may be required to place with the auction company before bidding.",
    explanation: "Deposits can demonstrate seriousness and provide security if the bidder fails to complete the purchase."
  },
  {
    id: 34,
    question: "What is an earnest money deposit in real estate auctions?",
    answer: "A deposit made by the successful bidder to show commitment to completing the purchase.",
    explanation: "Earnest money deposits are typically applied to the purchase price and may be forfeited if the buyer defaults, according to the auction terms."
  },
  {
    id: 35,
    question: "What is bidder default?",
    answer: "Failure of the successful bidder to comply with the terms of the auction, such as not paying or not signing contracts.",
    explanation: "Bidder default can lead to loss of deposits, resale of the property, and potential legal claims depending on the contract."
  },
  {
    id: 36,
    question: "What is seller default in an auction?",
    answer: "Failure of the seller to perform their obligations after the auction, such as refusing to transfer title.",
    explanation: "Seller default can damage the reputation of the auction company and may result in legal consequences for the seller."
  },
  {
    id: 37,
    question: "What is a catalog lot number?",
    answer: "The unique identifier assigned to each lot in the auction catalog.",
    explanation: "Lot numbers organize the sale order and help bidders and staff locate and track specific items throughout the auction process."
  },
  {
    id: 38,
    question: "What is the purpose of auction terms and conditions?",
    answer: "To outline the rules, rights, and obligations of buyers, sellers, and the auction company.",
    explanation: "Clear terms and conditions reduce misunderstandings and provide a legal framework for resolving disputes."
  },
  {
    id: 39,
    question: "What is a buyer\u2019s invoice?",
    answer: "A document that lists the lots a bidder purchased and the total amount due.",
    explanation: "Invoices include hammer prices, buyer\u2019s premiums, taxes, and any additional fees or credits, and are used for checkout and payment."
  },
  {
    id: 40,
    question: "What is checkout in auctions?",
    answer: "The process where buyers pay for their purchases and receive their receipts and instructions for removal.",
    explanation: "Efficient checkout ensures accurate payments, reduces lines, and sets the stage for smooth pickup and load out."
  },
  {
    id: 41,
    question: "What is load out in auctions?",
    answer: "The process of removing purchased items from the auction site.",
    explanation: "Load out must be managed for safety, security, and documentation so buyers receive the correct items without damage or confusion."
  },
  {
    id: 42,
    question: "What is a credit card convenience fee in auctions?",
    answer: "An additional charge applied when buyers pay with a credit card.",
    explanation: "Convenience fees offset processing costs but must be clearly disclosed in the auction terms to avoid disputes."
  },
  {
    id: 43,
    question: "What is an auctioneer\u2019s fiduciary duty to the seller?",
    answer: "The obligation to act in the best interests of the seller within the scope of the agency relationship.",
    explanation: "Fiduciary duty includes loyalty, confidentiality, accounting, and obedience to lawful instructions while conducting the auction."
  },
  {
    id: 44,
    question: "What is dual agency in auctions?",
    answer: "A situation where the auction company has agency relationships with both the seller and the buyer.",
    explanation: "Dual agency creates potential conflicts of interest and may be restricted or require written disclosure depending on applicable law."
  },
  {
    id: 45,
    question: "What is an auction listing period?",
    answer: "The time frame during which the auction company is authorized to market and sell the property.",
    explanation: "The listing period is specified in the seller agreement and guides advertising schedules and sale timing."
  },
  {
    id: 46,
    question: "What is a reserve price?",
    answer: "The minimum price that the seller is willing to accept for a lot in a reserve auction.",
    explanation: "If bidding does not reach the reserve price, the seller may choose not to sell the item."
  },
  {
    id: 47,
    question: "What is shill bidding?",
    answer: "Bidding on an item by the seller or associates to artificially increase the price or activity.",
    explanation: "Shill bidding is unethical and may be illegal or prohibited by auction terms because it misleads genuine bidders."
  },
  {
    id: 48,
    question: "What is bidder collusion?",
    answer: "An agreement among bidders to limit competition to keep prices low.",
    explanation: "Collusion among bidders harms the seller and undermines the integrity of the auction process."
  },
  {
    id: 49,
    question: "What is seller collusion?",
    answer: "Improper cooperation among sellers or between sellers and others to manipulate auction outcomes.",
    explanation: "Seller collusion can include misrepresenting items, restricting access, or coordinating prices and can damage trust in the auction."
  },
  {
    id: 50,
    question: "What is a disclosure statement in auctions?",
    answer: "A document or announcement that provides important information about the property or the sale terms.",
    explanation: "Disclosures help ensure transparency and may address known defects, special conditions, or legal requirements."
  },
  {
    id: 51,
    question: "What does 'subject to prior sale' mean?",
    answer: "The property may be sold before the scheduled auction date.",
    explanation: "When property is subject to prior sale, the seller reserves the right to accept an offer before the auction, which could cancel that lot from the event."
  },
  {
    id: 52,
    question: "What does 'sale pending confirmation' mean on an auction result sheet?",
    answer: "The high bid has been received but the sale is not final until the seller approves it.",
    explanation: "This status typically applies in seller confirmation or reserve auctions where the seller retains approval rights."
  },
  {
    id: 53,
    question: "What is a bid acknowledgement or memorandum of sale?",
    answer: "A document the successful bidder signs to confirm the purchase and terms.",
    explanation: "This agreement may be especially important in real estate or high value auctions to demonstrate mutual consent and key terms."
  },
  {
    id: 54,
    question: "What does 'choice and privilege' mean in auctions?",
    answer: "A selling method where the high bidder can choose one or more items from a group at the winning bid price per item.",
    explanation: "Choice and privilege works well for similar items, allowing the top bidder first selection and then offering remaining items to others."
  },
  {
    id: 55,
    question: "What is 'times the money' selling?",
    answer: "Selling multiple items where the bid is multiplied by the number of units in the lot.",
    explanation: "For example, if the bid is 50 dollars and there are 4 chairs, the total price is 200 dollars plus any fees."
  },
  {
    id: 56,
    question: "What is a staggered closing in online auctions?",
    answer: "A schedule where lots close at different times rather than all at once.",
    explanation: "Staggered closing reduces system load and allows bidders to focus on multiple lots as they close sequentially."
  },
  {
    id: 57,
    question: "What is a bid increment schedule?",
    answer: "A chart that outlines the standard increases in bidding at various price levels.",
    explanation: "Increment schedules help auctioneers maintain consistent and efficient bidding steps during the sale."
  },
  {
    id: 58,
    question: "What is the purpose of a buyer registration agreement?",
    answer: "To document that the bidder understands and agrees to the auction terms before bidding.",
    explanation: "This agreement can include consent to payment methods, fees, and removal deadlines, reducing disputes later."
  },
  {
    id: 59,
    question: "What is 'ringing the sale'?",
    answer: "The act of ringmen or bid assistants working the crowd during the auction.",
    explanation: "Ringing the sale helps build energy, communicate bids, and ensure active participation throughout the event."
  },
  {
    id: 60,
    question: "What is an auction marketing plan?",
    answer: "A strategy that outlines how the auction will be advertised and promoted to potential buyers.",
    explanation: "Effective marketing plans can include print, digital, social media, signage, and direct outreach to attract the right bidders."
  },
  {
    id: 61,
    question: "What is 'inspection by appointment' in auctions?",
    answer: "A preview method where potential bidders schedule specific times to inspect the property.",
    explanation: "This approach manages traffic, supports security, and still allows buyers to perform due diligence."
  },
  {
    id: 62,
    question: "What is the auctioneer\u2019s chant filler?",
    answer: "Non number words and phrases used between bid calls to maintain rhythm and flow.",
    explanation: "Fillers help keep the chant smooth and engaging while the auctioneer looks for the next bid."
  },
  {
    id: 63,
    question: "What is a 'buyer\u2019s choice' in multi lot selling?",
    answer: "A selling method where the high bidder chooses which lot or lots they want at the winning price.",
    explanation: "Buyer\u2019s choice is similar to choice and privilege and is useful when several similar items are offered."
  },
  {
    id: 64,
    question: "What is the purpose of a bid calling practice session for auctioneers?",
    answer: "To develop clarity, rhythm, speed, and control in the auctioneer\u2019s chant.",
    explanation: "Regular practice improves communication and confidence, which can lead to better auction results."
  },
  {
    id: 65,
    question: "What is an auction school certificate?",
    answer: "A document issued by an auction school confirming completion of a course in auctioneering.",
    explanation: "Many states and companies recognize certificates as evidence of formal training for new auctioneers."
  },
  {
    id: 66,
    question: "What is the role of technology in modern auctions?",
    answer: "Technology supports online bidding, marketing, clerking, and record keeping for auctions.",
    explanation: "Using technology can expand the bidder base, improve efficiency, and provide better reporting for clients."
  },
  {
    id: 67,
    question: "What is a charity or benefit auction?",
    answer: "An auction conducted to raise funds for a nonprofit or cause, often with donated items.",
    explanation: "Benefit auctions focus on maximizing contributions and engagement rather than strictly on market value."
  },
  {
    id: 68,
    question: "What is a buyer\u2019s acknowledgment of risk in an 'as is' auction?",
    answer: "A statement that the buyer accepts the property in its current condition and assumes associated risks.",
    explanation: "This acknowledgment reinforces that buyers cannot rely on post sale guarantees regarding condition."
  },
  {
    id: 69,
    question: "What does 'payment in full day of sale' mean?",
    answer: "The buyer must pay the total amount owed on the same day as the auction.",
    explanation: "This term is common in personal property auctions and must be clearly communicated before bidding."
  },
  {
    id: 70,
    question: "What is an auctioneer\u2019s opening statement?",
    answer: "The initial remarks where the auctioneer welcomes bidders, explains terms, and sets expectations.",
    explanation: "A clear opening statement builds trust, reduces confusion, and ensures that bidders understand the rules."
  },
  {
    id: 71,
    question: "What is a clerk sheet or sale log?",
    answer: "A record of each lot sold, the selling price, and the buyer number.",
    explanation: "Accurate clerk sheets are essential for invoicing, settlement, and financial accountability."
  },
  {
    id: 72,
    question: "What does the term 'lot order' refer to?",
    answer: "The sequence in which the auction items will be offered for sale.",
    explanation: "Thoughtful lot order can build momentum and keep bidders engaged throughout the auction."
  },
  {
    id: 73,
    question: "What is proxy bidding in online auctions?",
    answer: "A system where the platform bids automatically for a bidder up to a maximum amount they set.",
    explanation: "Proxy bidding allows bidders to participate without watching every bid and helps ensure they do not exceed their limit."
  },
  {
    id: 74,
    question: "What is the purpose of auction signage at the sale site?",
    answer: "To direct traffic, identify the auction location, and highlight key items or information.",
    explanation: "Good signage improves attendance, safety, and the overall bidder experience."
  },
  {
    id: 75,
    question: "What are terms of removal in auctions?",
    answer: "The rules that state when and how buyers must remove their purchases from the site.",
    explanation: "Clear removal terms prevent congestion, storage issues, and disputes about abandoned items."
  },
  {
    id: 76,
    question: "What is a consignment fee?",
    answer: "A charge paid by the seller to the auction company in addition to or instead of commission.",
    explanation: "Consignment fees can help cover advertising, setup, or other expenses associated with staging the auction."
  },
  {
    id: 77,
    question: "What is a reserve not met status?",
    answer: "An outcome where the highest bid did not reach the reserve price set by the seller.",
    explanation: "In this case, the item may not sell, or the seller may negotiate separately with bidders."
  },
  {
    id: 78,
    question: "What is an auctioneer\u2019s commission?",
    answer: "The fee, usually a percentage of the sale price, paid to the auction company for conducting the auction.",
    explanation: "Commission structures vary but are typically agreed upon in the seller contract before the auction."
  },
  {
    id: 79,
    question: "What is an opening announcement of terms?",
    answer: "The portion of the auction where the auctioneer reads or states key terms and conditions before bidding begins.",
    explanation: "These announcements may override printed materials and are often considered part of the binding terms."
  },
  {
    id: 80,
    question: "What is the difference between public and private auctions?",
    answer: "Public auctions are open to all qualified bidders, while private auctions are restricted to invited participants.",
    explanation: "The choice between public and private affects marketing strategy, bidder pool, and confidentiality."
  },
  {
    id: 81,
    question: "What is a real time simulcast auction?",
    answer: "A live auction that accepts bids from both in person bidders and online bidders at the same time.",
    explanation: "Simulcast auctions use audio and video technology to connect remote bidders to the live sale."
  },
  {
    id: 82,
    question: "What is seller\u2019s net proceeds in an auction?",
    answer: "The amount the seller receives after commissions, fees, and expenses are deducted from the gross sales.",
    explanation: "Net proceeds are calculated during settlement and are detailed in the settlement statement."
  },
  {
    id: 83,
    question: "What is an auctioneer\u2019s block?",
    answer: "The platform or area from which the auctioneer conducts the sale.",
    explanation: "The block provides visibility and authority, helping the auctioneer oversee the crowd and manage the sale."
  },
  {
    id: 84,
    question: "What is a 'one money' lot?",
    answer: "A group of items sold together for a single bid amount, not multiplied by quantity.",
    explanation: "In a one money sale, the high bid purchases the entire lot regardless of the number of items in it."
  },
  {
    id: 85,
    question: "What is a 'times choice' auction method?",
    answer: "A method where the high bidder can take multiple items at the bid price per item, then remaining items are offered again.",
    explanation: "This method blends choice and times the money to give bidders flexibility and maintain strong pricing."
  },
  {
    id: 86,
    question: "What is auctioneer disclosure of relationships?",
    answer: "Informing bidders about any ownership or financial interests the auction company or staff may have in the property.",
    explanation: "Disclosure helps maintain transparency and trust and can be required by law or ethics rules."
  },
  {
    id: 87,
    question: "What is the purpose of describing property accurately in catalogs and advertising?",
    answer: "To provide truthful information so bidders can make informed decisions.",
    explanation: "Accurate descriptions reduce disputes and protect the auctioneer\u2019s reputation and legal position."
  },
  {
    id: 88,
    question: "What is the term for the document that summarizes marketing efforts and results after an auction?",
    answer: "A marketing report or auction summary report.",
    explanation: "These reports help sellers understand the exposure their auction received and can support future business development."
  },
  {
    id: 89,
    question: "What is an 'upset price' in some auction contexts?",
    answer: "A minimum price established by a creditor or authority, often in foreclosure or tax auctions.",
    explanation: "Bidding usually must meet or exceed the upset price for the sale to be approved."
  },
  {
    id: 90,
    question: "What is pre bidding in online auctions?",
    answer: "Bidding that occurs before a live simulcast or before a timed auction\u2019s final countdown.",
    explanation: "Pre bidding allows buyers to place proxy bids in advance and can build early momentum for the sale."
  },
  {
    id: 91,
    question: "What is an auctioneer\u2019s ethical duty regarding misrepresentation?",
    answer: "Auctioneers should avoid false or misleading statements about property or terms.",
    explanation: "Honesty in representation is essential for maintaining trust and complying with professional standards."
  },
  {
    id: 92,
    question: "What does 'all sales final' mean in auction terms?",
    answer: "Once a lot is sold, the buyer cannot return it or cancel the purchase except as allowed by law or stated terms.",
    explanation: "This phrase reinforces the importance of buyer inspection and careful bidding."
  },
  {
    id: 93,
    question: "What is a 'no refund' policy in auctions?",
    answer: "A policy stating that buyers cannot obtain refunds after the sale, except under specific conditions.",
    explanation: "No refund policies must be clearly disclosed to reduce disputes and protect the auction company."
  },
  {
    id: 94,
    question: "What is a vendor in auction terminology in some regions?",
    answer: "Another term for the seller who is offering property for sale.",
    explanation: "Understanding synonyms like vendor helps when reading contracts or international materials."
  },
  {
    id: 95,
    question: "What is the role of photographs in auction marketing?",
    answer: "Photos visually present items to potential bidders, often influencing interest and bidding activity.",
    explanation: "High quality images can increase engagement and help buyers understand condition and features."
  },
  {
    id: 96,
    question: "What is a 'catalog description versus oral announcement' rule often found in auction terms?",
    answer: "A rule stating that oral announcements by the auctioneer take precedence over printed materials if there is a conflict.",
    explanation: "This allows last minute corrections or updates to be made publicly and become part of the binding terms."
  },
  {
    id: 97,
    question: "What is a buyer\u2019s premium cap?",
    answer: "A maximum limit on the dollar amount of buyer\u2019s premium charged on a lot.",
    explanation: "Caps can be used on high value items to keep total fees reasonable and attractive to bidders."
  },
  {
    id: 98,
    question: "What is a multi parcel auction?",
    answer: "An auction where property is offered in individual tracts, combinations, and as a whole.",
    explanation: "Multi parcel methods allow bidders to compete for the configuration that best fits their needs, often increasing overall returns."
  },
  {
    id: 99,
    question: "What is an auction estimate in cataloged sales?",
    answer: "A price range provided by the auctioneer as an educated guess of what a lot may bring.",
    explanation: "Estimates guide bidders but are not guarantees and should be based on market research and experience."
  },
  {
    id: 100,
    question: "What is 'bidder paddle deposit' practice sometimes used in high value auctions?",
    answer: "Requiring a refundable deposit before issuing a bidder paddle for certain auctions.",
    explanation: "This helps ensure that participants are serious and able to complete high value purchases."
  },
  {
    id: 101,
    question: "What is the 'closing statement' provided to sellers after an auction?",
    answer: "A detailed summary of sales, expenses, commissions, and net proceeds.",
    explanation: "Closing statements provide transparency and serve as a financial record for both the seller and auction company."
  },
  {
    id: 102,
    question: "What is a 'tie bid' in auctions?",
    answer: "A situation where two bidders attempt to bid the same amount at the same time.",
    explanation: "The auctioneer has discretion to resolve tie bids, often by recognizing the first bid seen or reopening bidding at that amount."
  },
  {
    id: 103,
    question: "What is a 'back up bidder'?",
    answer: "A bidder who is next in line if the successful bidder defaults or is disqualified.",
    explanation: "Identifying back up bidders can save time if a sale falls through, especially in real estate or high value auctions."
  },
  {
    id: 104,
    question: "What is 'bidder registration closing time'?",
    answer: "The deadline after which new bidders cannot register for a particular auction or session.",
    explanation: "Registration deadlines help control the flow of check in and maintain order during the event."
  },
  {
    id: 105,
    question: "What is the difference between a live auction and a silent auction?",
    answer: "A live auction uses an auctioneer to call bids, while a silent auction uses written or electronic bids without a chant.",
    explanation: "Both formats can be effective, but live auctions often create more immediate excitement and urgency."
  },
  {
    id: 106,
    question: "What is a 'bid sheet' in silent auctions?",
    answer: "A paper or digital form where bidders write or enter their bids for silent auction items.",
    explanation: "Bid sheets record the bidder number or name and bid amount, and the highest entry at closing wins."
  },
  {
    id: 107,
    question: "What is 'closing time' in a silent or timed auction?",
    answer: "The specific time when bidding ends and no new bids may be placed.",
    explanation: "Clear communication of closing time is essential so bidders know when they must place their final bids."
  },
  {
    id: 108,
    question: "What is a consignment auction?",
    answer: "An auction composed of items from multiple consignors rather than a single seller.",
    explanation: "Consignment auctions are common for equipment, antiques, and general merchandise and require careful tracking for each seller."
  },
  {
    id: 109,
    question: "What is an estate auction?",
    answer: "An auction that sells property from a personal estate, often due to death, downsizing, or relocation.",
    explanation: "Estate auctions commonly include a mix of real estate, personal property, and collectibles."
  },
  {
    id: 110,
    question: "What is an inventory reduction auction?",
    answer: "An auction used by a business to reduce excess stock or assets.",
    explanation: "These auctions can free up capital and space while offering buyers discounted prices."
  },
  {
    id: 111,
    question: "What is a cataloged auction?",
    answer: "An auction where each lot is described and often photographed in a catalog provided before the sale.",
    explanation: "Cataloged auctions are common for fine art, collectibles, and specialty items where detailed descriptions support higher values."
  },
  {
    id: 112,
    question: "What is a 'buyer\u2019s number' versus 'seller\u2019s number' in clerking systems?",
    answer: "Buyer\u2019s numbers identify purchasers, while seller\u2019s numbers identify consignors or owners.",
    explanation: "Using both numbering systems allows accurate tracking of which seller each item belongs to and who bought it."
  },
  {
    id: 113,
    question: "What is a common consequence if an auctioneer repeatedly misrepresents property at auction?",
    answer: "They may face disciplinary action such as fines, license suspension or revocation, in addition to potential civil liability.",
    explanation: "Most regulators treat intentional or reckless misrepresentation as a serious violation, which can lead to administrative penalties and lawsuits from buyers or sellers who relied on false information."
  },
  {
    id: 114,
    question: "What is an auctioneer\u2019s liability regarding stolen or missing items before the sale?",
    answer: "Depending on contracts, the auction company may be responsible for reasonable care but is not always liable for all losses.",
    explanation: "Clear terms and security procedures help manage risk related to theft or damage."
  },
  {
    id: 115,
    question: "What is a 'no sale' or 'NS' notation in auction records?",
    answer: "A note indicating that a lot did not sell at the auction.",
    explanation: "No sale notations help track which items remain property of the seller and may be subject to future negotiations."
  },
  {
    id: 116,
    question: "What is a bulk bid in auctions?",
    answer: "A bid placed on a group of lots as a package instead of individually.",
    explanation: "Bulk bidding can be used in multi parcel or asset auctions and may be compared against the sum of individual bids to determine the best result."
  },
  {
    id: 117,
    question: "What is a 'buyers meeting' or 'closing meeting' sometimes used after real estate auctions?",
    answer: "A session immediately after the auction where documents are signed and deposits are collected.",
    explanation: "These meetings formalize the agreement and reduce chances of buyer withdrawal."
  },
  {
    id: 118,
    question: "What is 'auction preview etiquette' for bidders?",
    answer: "Behavior guidelines such as handling items carefully and respecting property rules during inspection.",
    explanation: "Good etiquette protects items and maintains positive relationships between buyers, sellers, and auction staff."
  },
  {
    id: 119,
    question: "What does 'selling subject to seller\u2019s confirmation within a specified period' mean?",
    answer: "The seller has a stated time frame after the auction to decide whether to accept the high bid.",
    explanation: "Bidders may be held to their bids for that period while the seller considers acceptance."
  },
  {
    id: 120,
    question: "What is 'on site' versus 'off site' auction location?",
    answer: "On site auctions occur at the property location, while off site auctions occur at an alternate venue such as an auction facility.",
    explanation: "The choice affects logistics, marketing, and how buyers inspect and remove property."
  },
  {
    id: 121,
    question: "If a successful bidder refuses to complete the purchase without a valid legal excuse, what is a typical consequence under many auction terms?",
    answer: "The bidder may forfeit their deposit and can be held liable for damages related to the resale.",
    explanation: "Auction terms often define bidder default remedies, including forfeiture of earnest money and the right to resell the property and seek any price difference and costs from the defaulting bidder."
  },
  {
    id: 122,
    question: "What is a 'bidder penalty' clause sometimes used in terms and conditions?",
    answer: "A clause that describes consequences, such as forfeiture of deposits, if a bidder fails to perform.",
    explanation: "Penalty clauses deter default and provide a remedy if it occurs."
  },
  {
    id: 123,
    question: "What is a potential legal risk of shill bidding by a seller or associates?",
    answer: "It may be treated as fraud or deceptive practice, exposing the parties to regulatory penalties and civil claims.",
    explanation: "Shill bidding artificially inflates price and misleads genuine bidders, which many laws and codes of conduct expressly prohibit."
  },
  {
    id: 124,
    question: "What is a 'bidder paddle check out' procedure?",
    answer: "The process of collecting bidder paddles at the end of the auction and confirming that all purchases are paid.",
    explanation: "This procedure helps ensure that invoices are reconciled and equipment such as paddles is returned."
  },
  {
    id: 125,
    question: "What is 'absolute as to the lots offered' language sometimes used in catalogs?",
    answer: "It means that specific listed lots will be sold without reserve, even if the overall auction includes other types of lots.",
    explanation: "This clarifies that some items are guaranteed to sell to the highest bidder while others may still have reserves."
  },
  {
    id: 126,
    question: "Why is commingling client funds with an auctioneer\u2019s business or personal funds dangerous?",
    answer: "Because it violates trust account requirements and can result in severe discipline including fines and license revocation.",
    explanation: "Deposits and sale proceeds are typically required to be held in separate trust or escrow accounts, and using them as operating funds is treated as financial misconduct."
  },
  {
    id: 127,
    question: "What is a 'buyer\u2019s guide' document provided at some auctions?",
    answer: "A handout that explains how the auction works, terms, and procedures for new bidders.",
    explanation: "Buyer\u2019s guides can reduce confusion and help first time participants feel more comfortable bidding."
  },
  {
    id: 128,
    question: "What is the purpose of staff briefings before an auction?",
    answer: "To ensure that all auction staff understand their roles, the terms, and key details for the event.",
    explanation: "Well briefed staff members are better able to assist bidders and keep the auction running smoothly."
  },
  {
    id: 129,
    question: "What is a 'bid calling competition' for auctioneers?",
    answer: "An event where auctioneers are judged on their chant, presence, and professionalism.",
    explanation: "Competitions help auctioneers improve their skills and gain recognition in the industry."
  },
  {
    id: 130,
    question: "What consequence might a seller face for refusing to deliver clear title after a legally completed auction sale?",
    answer: "The seller may be liable for breach of contract and may owe damages to the buyer and possibly the auction company.",
    explanation: "Once a lot is declared sold, a binding contract usually exists, so a seller who will not deliver agreed title can be sued and still owe commissions and costs."
  },
  {
    id: 131,
    question: "What type of legal claim might a buyer bring if the auction company knowingly conceals major defects in the property?",
    answer: "The buyer may sue for fraud or misrepresentation and seek rescission or damages.",
    explanation: "Deliberate concealment of material facts supports fraud claims in many systems, allowing buyers to ask a court to cancel the sale or award compensation."
  },
  {
    id: 132,
    question: "What is a common penalty if an auctioneer continues to conduct auctions after their license has expired or been revoked in a licensing state?",
    answer: "They may face additional fines, possible criminal charges, and greater difficulty ever being licensed again.",
    explanation: "Operating without a valid license is usually treated as unlicensed practice, which can escalate regulatory responses and damage future licensing prospects."
  },
  {
    id: 133,
    question: "Why can failure to remit sale proceeds to the seller on time create serious legal exposure for an auctioneer?",
    answer: "It can be viewed as conversion or misappropriation of funds, leading to discipline and civil liability.",
    explanation: "Sale proceeds belong to the seller minus agreed fees, so intentional delay or nonpayment is often treated as taking someone else\u2019s money."
  },
  {
    id: 134,
    question: "What is one legal concern if an auctioneer discriminates against bidders based on protected characteristics?",
    answer: "They may face civil rights complaints, lawsuits, and sanctions from enforcement agencies.",
    explanation: "Anti-discrimination laws often apply to public sales, so excluding or disadvantaging bidders based on protected traits can trigger legal action and reputational damage."
  },
  {
    id: 135,
    question: "Why is it important not to advertise an auction as 'absolute' if the seller intends to reject bids below a certain price?",
    answer: "Because failing to sell to the highest bidder in a true absolute auction can lead to claims of false advertising and legal disputes.",
    explanation: "Describing a sale as absolute sets clear expectations that every item will sell to the highest bidder regardless of price, so hidden reserves conflict with that promise."
  },
  {
    id: 136,
    question: "What is a potential consequence of failing to disclose that the auctioneer or staff own items being sold?",
    answer: "Bidders may claim they were misled, resulting in complaints, sanctions, or undoing of sales.",
    explanation: "Undisclosed self-dealing undermines trust and may violate ethics and legal conflict-of-interest rules that require clear disclosure of ownership interests."
  },
  {
    id: 137,
    question: "Why is poor or incomplete auction record keeping a legal risk for auctioneers?",
    answer: "Because regulators and courts may require detailed records to verify compliance and resolve disputes.",
    explanation: "Missing or inaccurate records about bids, buyers, sellers, payments, and settlements can lead to fines, discipline, and difficulty defending against complaints or audits."
  },
  {
    id: 138,
    question: "What can happen if bidders are not given a reasonable chance to see and understand the auction terms before bidding?",
    answer: "Some terms may be difficult to enforce, and bidders may challenge the sale or file complaints.",
    explanation: "Informed consent is important; hiding or rushing terms can cause regulators or courts to treat certain conditions as unfair or non-binding."
  },
  {
    id: 139,
    question: "What is a typical consequence if an auction company fails to collect and remit required sales taxes on auction transactions?",
    answer: "The company may owe back taxes, penalties, and interest and may face audits or sanctions.",
    explanation: "Where taxes apply, auction companies often act as collection agents, so failure to handle taxes properly can become an expensive compliance issue."
  },
  {
    id: 140,
    question: "What records are auctioneers generally expected to keep for compliance and legal protection?",
    answer: "Accurate records of lots, bids, buyers, sellers, contracts, payments, and settlements, along with key correspondence and settlement statements.",
    explanation: "Many regulations require complete and orderly records so that authorities, sellers, and buyers can verify what was sold, to whom, for how much, and how funds were handled if questions or audits arise."
  },
  {
    id: 141,
    question: "Why is clearly documenting deposits, refunds, and forfeitures important from a penalty standpoint?",
    answer: "It creates a verifiable trail showing that funds were handled according to the terms and the law.",
    explanation: "Good documentation helps resolve complaints quickly and protects the auctioneer if accusations of improper handling of money arise."
  },
  {
    id: 142,
    question: "What is a possible legal outcome if a bidder proves that an auctioneer made intentionally false statements to induce bidding?",
    answer: "The bidder may recover damages and, in some cases, punitive damages for fraud.",
    explanation: "Intentional misstatements about material facts can support fraud claims, and some systems allow extra damages to punish especially wrongful conduct."
  },
  {
    id: 143,
    question: "Why can inconsistent enforcement of removal deadlines or payment terms create legal and fairness concerns?",
    answer: "Other bidders or the seller may argue they were treated unfairly compared to bidders who received special treatment.",
    explanation: "Uneven application of terms can lead to disputes, loss of trust, and claims of partiality or breach of contract."
  },
  {
    id: 144,
    question: "What is the risk if auction advertising materially overstates the quantity or quality of items to be sold?",
    answer: "It may be considered deceptive advertising and lead to regulatory or consumer protection actions.",
    explanation: "Overstating inventory or quality misleads the public and can fall under general consumer protection statutes, triggering fines and mandated corrections."
  },
  {
    id: 145,
    question: "Why is it important for an auctioneer to know which activities in their jurisdiction require a license?",
    answer: "Conducting regulated auction activities without the proper license can lead to fines and bar future licensing.",
    explanation: "Different jurisdictions define 'auctioneering' differently, so understanding the local rules helps avoid unlicensed practice violations."
  },
  {
    id: 146,
    question: "What role do written seller contracts and bidder registrations play in limiting legal risk?",
    answer: "They document the parties\u2019 agreements and acknowledgments, which can be used to defend against later claims.",
    explanation: "Signed contracts and registrations show that sellers and bidders received disclosures, accepted terms, and understood key conditions, which is critical evidence if disputes arise."
  },
  {
    id: 147,
    question: "Why is it important for an auctioneer to maintain a professional demeanor, even in a highly energetic sale?",
    answer: "Professionalism reinforces credibility and control, which keeps bidders confident in the process.",
    explanation: "Excitement and energy help create momentum, but if the auctioneer appears careless, disrespectful, or biased, bidders may question whether the process is fair and hesitate to bid."
  },
  {
    id: 148,
    question: "What should an auctioneer do if they discover a material error in a lot description during the auction?",
    answer: "Immediately correct the error with a clear oral announcement before continuing to sell the lot.",
    explanation: "Prompt correction protects bidders from relying on inaccurate information and reduces the risk of disputes, cancellations, or claims of misrepresentation after the sale."
  },
  {
    id: 149,
    question: "Why is post-auction follow-up with underbidders valuable for the auction business?",
    answer: "Underbidders are proven interested buyers who may purchase other items or consign property in the future.",
    explanation: "A simple follow-up call or email can turn today\u2019s unsuccessful bidder into tomorrow\u2019s buyer or seller, which strengthens the auction company\u2019s pipeline and relationships."
  },
  {
    id: 150,
    question: "How does tailoring marketing to the likely buyer pool impact auction results?",
    answer: "It increases the chances that the right bidders see the auction and are motivated to participate.",
    explanation: "General advertising can create awareness, but targeted marketing to specific collector groups, industries, or regions puts the message in front of buyers most likely to pay strong prices for the assets."
  }
];

export const getFlashcardQuestions = () => {
  return flashcardQuestions;
};

export const getRandomFlashcards = (count = 20) => {
  const shuffled = [...flashcardQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, flashcardQuestions.length));
};

export default flashcardQuestions;
