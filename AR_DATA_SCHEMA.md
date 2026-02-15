# Arkansas Auctioneer Exam Data Schema

## Overview

This document describes the structure and format of the extracted Arkansas auctioneer exam data files.

---

## 1. Questions Database (ar_questions_temp.json)

### Root Structure
```typescript
type Questions = QuestionObject[];
```

### QuestionObject Schema

```json
{
  "id": number,                  // Unique identifier (1-258)
  "question": string,            // Question text
  "options": string[],           // Array of exactly 4 options [A, B, C, D]
  "correctAnswer": number,       // Answer index: 0=A, 1=B, 2=C, 3=D
  "explanation": string,         // Explanation of the correct answer
  "topic": string               // Topic category (see list below)
}
```

### Field Descriptions

#### id
- **Type**: `number`
- **Range**: 1-258
- **Description**: Unique question identifier
- **Uniqueness**: Guaranteed unique
- **Example**: `1`, `50`, `258`

#### question
- **Type**: `string`
- **Max Length**: ~500 characters
- **Description**: The question text
- **Format**: Complete sentence or question
- **Example**: "Under the Arkansas Auctioneer's Licensing Act, the main purpose of creating the Auctioneer's Licensing Board was to:"

#### options
- **Type**: `string[]`
- **Length**: Always 4 elements
- **Order**: A (index 0), B (index 1), C (index 2), D (index 3)
- **Description**: Multiple choice options
- **Format**: Complete sentences or phrases
- **Example**: 
```json
[
  "Increase state tax revenue from auction companies",
  "License and regulate auctioneers and raise professionalism in the industry",
  "Guarantee that all auctions are conducted by the state government",
  "Eliminate all auctions that sell used goods"
]
```

#### correctAnswer
- **Type**: `number`
- **Valid Values**: 0, 1, 2, 3
- **Description**: Index of the correct answer in the options array
- **Mapping**: 
  - 0 = Option A
  - 1 = Option B
  - 2 = Option C
  - 3 = Option D
- **Example**: `1` (means option B is correct)

#### explanation
- **Type**: `string`
- **Min Length**: 10 characters (no empty explanations)
- **Max Length**: ~1000 characters
- **Description**: Explanation of why the correct answer is correct
- **Format**: Can reference specific statutes or regulations
- **Example**: "The legislative intent section explains that the Act establishes a board to license and regulate auctioneers, require escrow accounts, support reciprocity, and raise professionalism to protect the public."

#### topic
- **Type**: `string`
- **Valid Values**: See Topic Categories section below
- **Description**: Subject matter category of the question
- **Selection Method**: Algorithmically determined based on keywords in question, options, and explanation
- **Example**: "Licensing and Registration"

### Topic Categories

```typescript
type Topic = 
  | "Auction Procedures"
  | "Licensing and Registration"
  | "Board and Governance"
  | "Legal and Contracts"
  | "Duties and Responsibilities"
  | "Financial and Records"
  | "Penalties and Discipline"
  | "Prohibited Acts and Violations"
  | "Ethics and Conduct"
  | "Definitions and Terminology";
```

#### Topic Distribution (258 total)

| Topic | Count | % |
|-------|-------|---|
| Duties and Responsibilities | 54 | 20.9% |
| Licensing and Registration | 51 | 19.8% |
| Penalties and Discipline | 41 | 15.9% |
| Auction Procedures | 40 | 15.5% |
| Financial and Records | 32 | 12.4% |
| Prohibited Acts and Violations | 29 | 11.2% |
| Ethics and Conduct | 6 | 2.3% |
| Board and Governance | 2 | 0.8% |
| Definitions and Terminology | 2 | 0.8% |
| Legal and Contracts | 1 | 0.4% |

### Topic Descriptions

**Auction Procedures** (40 questions)
- Questions about how to conduct auctions
- Bidding processes and auction protocols
- Seller and buyer responsibilities during sales
- Keywords: auction, bid, sale, conduct, procedure, process

**Licensing and Registration** (51 questions)
- Questions about auctioneer licensing requirements
- Qualifications for applicants
- License renewal and expiration
- Keywords: license, registration, applicant, qualify, fee

**Board and Governance** (2 questions)
- Questions about the Auctioneer's Licensing Board
- Board composition and appointment
- Board responsibilities
- Keywords: board, governor, appoint, chairperson

**Legal and Contracts** (1 question)
- Questions about legal requirements and contracts
- Statutory requirements and regulations
- Keywords: contract, legal, statute, agreement

**Duties and Responsibilities** (54 questions)
- Questions about auctioneer obligations
- Ethical duties and professional responsibilities
- Must/shall requirements
- Keywords: duty, responsible, obligation, must, shall

**Financial and Records** (32 questions)
- Questions about accounting and financial management
- Escrow accounts and fund management
- Record-keeping requirements
- Keywords: account, record, financial, money, payment, deposit

**Penalties and Discipline** (41 questions)
- Questions about violations and punishments
- Fines, suspensions, and revocations
- Criminal penalties
- Keywords: penalty, fine, suspension, revoke, criminal

**Prohibited Acts and Violations** (29 questions)
- Questions about illegal activities
- Violations of law and regulations
- Unlicensed practice
- Keywords: prohibited, illegal, unlawful, violation

**Ethics and Conduct** (6 questions)
- Questions about ethical behavior
- Professional conduct standards
- Character and integrity
- Keywords: ethics, ethical, honest, integrity

**Definitions and Terminology** (2 questions)
- Questions about key terms and definitions
- Lexical understanding
- Keywords: definition, means, defined as, shall mean

### Example Questions

#### Example 1: Licensing and Registration
```json
{
  "id": 1,
  "question": "To qualify for an Arkansas auctioneer license, an applicant must be at least:",
  "options": [
    "16 years old",
    "18 years old",
    "21 years old",
    "25 years old"
  ],
  "correctAnswer": 2,
  "explanation": "Arkansas statute requires auctioneers to be at least 21 years of age to qualify for licensure.",
  "topic": "Licensing and Registration"
}
```

#### Example 2: Penalties and Discipline
```json
{
  "id": 15,
  "question": "Acting as an auctioneer in Arkansas without a license after the effective date of the law can result in:",
  "options": [
    "A warning letter only",
    "A fine of not less than $100 nor more than $500, imprisonment up to 90 days, or both",
    "Automatic lifetime ban from ever being licensed",
    "No penalties if the auction is for charity"
  ],
  "correctAnswer": 1,
  "explanation": "The law makes unlicensed practice a criminal offense punishable by a fine between $100 and $500, imprisonment up to 90 days, or both.",
  "topic": "Penalties and Discipline"
}
```

---

## 2. Study Guide (ar_study_guide.json)

### Root Structure
```typescript
{
  "state": string,
  "title": string,
  "sections": Section[]
}
```

### Complete Schema

```json
{
  "state": "Arkansas",
  "title": "Arkansas Auctioneer Study Guide",
  "sections": [
    {
      "heading": "Section Title",
      "content": [
        "Content line 1",
        "Content line 2",
        "Content line N"
      ]
    }
  ]
}
```

### Field Descriptions

#### state
- **Type**: `string`
- **Value**: "Arkansas"
- **Description**: The state for which this study guide applies
- **Usage**: Identifies the study guide state

#### title
- **Type**: `string`
- **Value**: "Arkansas Auctioneer Study Guide"
- **Description**: The full title of the study guide
- **Usage**: Display title for users

#### sections
- **Type**: `Section[]`
- **Length**: 82 sections
- **Description**: Array of study guide sections
- **Ordering**: Maintains order from original PDF

### Section Object Schema

```typescript
{
  "heading": string,      // Section heading/title
  "content": string[]     // Array of content lines
}
```

#### heading
- **Type**: `string`
- **Max Length**: ~100 characters
- **Description**: Section title or heading
- **Format**: Can be all caps, mixed case, or title case
- **Example**: "DEFINITIONS", "OVERVIEW", "Qualification Requirements"

#### content
- **Type**: `string[]`
- **Min Elements**: 1
- **Max Elements**: 50+
- **Description**: Content lines for this section
- **Format**: Each element is a logical line of text
- **Joining**: Elements can be joined with newlines or spaces depending on use case
- **Example**:
```json
[
  "AUCTIONEER – An auctioneer is any person who offers, negotiates or attempts to negotiate a listing contract, sale, purchase or exchange of goods, chattels, merchandise, real or personal property...",
  "APPLICANT – Any person who applies for an auctioneer's license under the Auctioneers License Act of 1989.",
  "AUCTION – The public sale at which property is sold to the highest bidder."
]
```

### Section Categories

Common section headings in the study guide:

**Regulatory Framework**
- OVERVIEW
- ARKANSAS CODE ANNOTATED – CHAPTER 17
- Arkansas Auctioneers License Act of 1989

**Definitions**
- DEFINITIONS
- SPELLING AND DEFINITIONS

**Specific Terms**
- AUCTIONEER
- APPLICANT
- AUCTION
- BOARD
- CONSIGNMENT
- CONDUCT
- ESCROW ACCOUNT
- FULL TIME
- MERCHANDISE
- PERSON
- RECIPROCITY
- SALE

**Requirements & Procedures**
- Qualification Requirements
- License Renewal
- Board Responsibilities
- Auctioneer Duties

**Guidance**
- SAMPLE QUESTIONS
- Common Violations
- Audit Requirements
- Record Keeping

### Example Section

```json
{
  "heading": "AUCTIONEER DUTIES",
  "content": [
    "An auctioneer has several important duties under Arkansas law:",
    "1. Conduct all auctions in compliance with the law and Board regulations",
    "2. Maintain separate escrow accounts for client funds",
    "3. Keep accurate records of all auctions conducted",
    "4. Provide clients with itemized accounting of sales",
    "5. Report any violations or ethical issues to the Board",
    "6. Maintain professional conduct at all times"
  ]
}
```

---

## 3. Data Integrity Guarantees

### Questions File (ar_questions_temp.json)

✓ **All 258 questions contain:**
- Non-empty question text
- Exactly 4 options (A, B, C, D)
- Valid correct answer index (0-3)
- Non-empty explanation
- Valid topic category

✓ **No duplicates:**
- All question IDs are unique (1-258)
- No duplicate questions

✓ **Formatting:**
- Valid JSON syntax
- Proper array/object structure
- UTF-8 encoding

### Study Guide File (ar_study_guide.json)

✓ **All 82 sections contain:**
- Non-empty heading
- Non-empty content array (at least 1 line)

✓ **Structure:**
- Valid JSON syntax
- Proper array/object structure
- UTF-8 encoding

---

## 4. Usage Examples

### JavaScript/Node.js

```javascript
// Load questions
const questions = require('./src/data/ar_questions_temp.json');

// Get a random question
const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
console.log(randomQuestion.question);
console.log(randomQuestion.options);

// Filter questions by topic
const licensingQuestions = questions.filter(q => q.topic === 'Licensing and Registration');

// Get correct answer letter
const answer = String.fromCharCode(65 + randomQuestion.correctAnswer); // A, B, C, or D
```

### TypeScript

```typescript
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: string;
}

interface StudyGuide {
  state: string;
  title: string;
  sections: Section[];
}

interface Section {
  heading: string;
  content: string[];
}

const questions: Question[] = require('./src/data/ar_questions_temp.json');
const guide: StudyGuide = require('./src/data/ar_study_guide.json');
```

### Python

```python
import json

# Load questions
with open('src/data/ar_questions_temp.json') as f:
    questions = json.load(f)

# Get total questions
print(f"Total questions: {len(questions)}")

# Get questions by topic
topics = {}
for q in questions:
    topic = q['topic']
    if topic not in topics:
        topics[topic] = []
    topics[topic].append(q)

print(f"Topics: {list(topics.keys())}")
```

---

## 5. Quality Metrics

### Questions Database

| Metric | Value |
|--------|-------|
| Total Questions | 258 |
| Questions with explanations | 258 (100%) |
| Questions with valid topic | 258 (100%) |
| Average explanation length | ~120 characters |
| Topics covered | 10 |
| Most common topic | Duties and Responsibilities (54) |
| Least common topic | Legal and Contracts (1) |

### Study Guide

| Metric | Value |
|--------|-------|
| Total Sections | 82 |
| Sections with content | 82 (100%) |
| Total content lines | 582 |
| Average lines per section | 7.1 |
| Longest section | ~50 lines |
| Shortest section | 1 line |

---

## 6. Integration Checklist

- [ ] Verify both JSON files parse correctly
- [ ] Confirm 258 questions load without errors
- [ ] Confirm 82 study guide sections load without errors
- [ ] Validate all topics are represented
- [ ] Spot-check 5-10 random questions for accuracy
- [ ] Verify correct answer indices are valid
- [ ] Test search/filter functionality by topic
- [ ] Confirm explanations display properly
- [ ] Test study guide section rendering
- [ ] Deploy to production environment

---

## 7. Support & Maintenance

For issues with the extracted data:

1. **Verify JSON syntax**: Use a JSON validator
2. **Check encoding**: Ensure UTF-8 encoding
3. **Review original sources**: Compare with source DOCX/PDF files
4. **Re-extraction**: Run extract_ar_data.py script to regenerate files

---

## 8. Version Information

- **Extraction Date**: 2025-01-30
- **Source Files**:
  - AR Question Bank.docx (updated)
  - AR study guide.pdf (updated)
- **Extraction Tools**:
  - python-docx (DOCX parsing)
  - PyPDF2 (PDF parsing)
- **Schema Version**: 1.0

---

## Appendix: Topic Keywords

### Auction Procedures
Keywords: auction, bid, sale, conduct, start, procedure, process, seller, buyer, bidding, reserve, reserve bid, opening bid, hammer price

### Licensing and Registration
Keywords: license, licensing, licensed, registration, register, applicant, apply, qualify, qualification, fee, renew, renewal, expire, expiration

### Board and Governance
Keywords: board, member, commissioner, executive director, governor, appoint, appointed, appointment, chairperson, chair, voting

### Legal and Contracts
Keywords: contract, legal, law, statute, agreement, statutory, act, regulation, rule, requirement

### Duties and Responsibilities
Keywords: duty, responsible, responsibility, obligation, shall, must, require, requirement, ensure, maintain, provide

### Financial and Records
Keywords: account, accounting, record, financial, money, payment, deposit, fund, escrow, balance, receipt, invoice, accounting

### Penalties and Discipline
Keywords: penalty, fine, imprisonment, suspension, revoke, revocation, discipline, disciplinary, criminal, offense, punish, punishment

### Prohibited Acts and Violations
Keywords: prohibited, cannot, illegal, unlawful, violation, unlicensed, fraud, deception, misrepresentation

### Ethics and Conduct
Keywords: ethics, ethical, honest, honesty, integrity, disqualify, misconduct, moral, morality, character, professional

### Definitions and Terminology
Keywords: definition, means, defined, shall mean, shall refer, shall include, terminology

