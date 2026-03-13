// Question Bank Validation Script
// Checks for common errors in question data

import { questionBank, states } from './src/data/questionBank.js';

let totalQuestions = 0;
let errors = [];
let warnings = [];

console.log('🔍 Validating Question Bank...\n');

states.forEach(state => {
  const questions = questionBank[state];
  
  if (!questions || questions.length === 0) {
    errors.push(`❌ ${state}: No questions found`);
    return;
  }
  
  console.log(`\n📚 ${state}: ${questions.length} questions`);
  
  questions.forEach((q, index) => {
    totalQuestions++;
    const questionNum = index + 1;
    
    // Check 1: Has required fields
    if (!q.question) {
      errors.push(`❌ ${state} Q${questionNum}: Missing question text`);
    }
    if (!q.options || !Array.isArray(q.options)) {
      errors.push(`❌ ${state} Q${questionNum}: Missing or invalid options array`);
      return;
    }
    if (q.correctAnswer === undefined || q.correctAnswer === null) {
      errors.push(`❌ ${state} Q${questionNum}: Missing correctAnswer`);
      return;
    }
    
    // Check 2: correctAnswer is within valid range
    if (q.correctAnswer < 0 || q.correctAnswer >= q.options.length) {
      errors.push(`❌ ${state} Q${questionNum}: correctAnswer (${q.correctAnswer}) is out of bounds (0-${q.options.length - 1})`);
    }
    
    // Check 3: Options array has reasonable length
    if (q.options.length < 2) {
      errors.push(`❌ ${state} Q${questionNum}: Too few options (${q.options.length})`);
    }
    if (q.options.length > 6) {
      warnings.push(`⚠️  ${state} Q${questionNum}: Unusually many options (${q.options.length})`);
    }
    
    // Check 4: Has explanation
    if (!q.explanation || q.explanation.trim().length === 0) {
      warnings.push(`⚠️  ${state} Q${questionNum}: Missing explanation`);
    }
    
    // Check 5: Check for duplicate IDs within state
    const duplicates = questions.filter(other => other.id === q.id);
    if (duplicates.length > 1) {
      errors.push(`❌ ${state} Q${questionNum}: Duplicate ID ${q.id} (appears ${duplicates.length} times)`);
    }
    
    // Check 6: Look for explanation/answer keyword mismatches
    if (q.explanation && q.correctAnswer >= 0 && q.correctAnswer < q.options.length) {
      const correctOption = q.options[q.correctAnswer].toLowerCase();
      const explanation = q.explanation.toLowerCase();
      
      // Check if explanation mentions other options more prominently
      let mentionCount = q.options.map((opt, idx) => {
        const optText = opt.toLowerCase();
        const mainWords = optText.split(' ').filter(w => w.length > 3);
        let count = 0;
        mainWords.forEach(word => {
          if (explanation.includes(word)) count++;
        });
        return { idx, count, text: opt };
      });
      
      const correctMentions = mentionCount[q.correctAnswer].count;
      const maxOtherMentions = Math.max(...mentionCount.filter((_, i) => i !== q.correctAnswer).map(m => m.count));
      
      // Flag if other options are mentioned more than correct answer
      if (maxOtherMentions > correctMentions && correctMentions === 0 && maxOtherMentions > 2) {
        const mostMentioned = mentionCount.find(m => m.count === maxOtherMentions);
        warnings.push(`⚠️  ${state} Q${questionNum}: Explanation may not match correct answer. Correct: "${q.options[q.correctAnswer]}", but explanation seems to favor: "${mostMentioned.text}"`);
      }
    }
  });
});

console.log('\n\n═══════════════════════════════════════════');
console.log('📊 VALIDATION SUMMARY');
console.log('═══════════════════════════════════════════\n');
console.log(`Total Questions: ${totalQuestions}`);
console.log(`Errors: ${errors.length}`);
console.log(`Warnings: ${warnings.length}\n`);

if (errors.length > 0) {
  console.log('🔴 ERRORS:\n');
  errors.forEach(err => console.log(err));
  console.log('\n');
}

if (warnings.length > 0) {
  console.log('🟡 WARNINGS (may need manual review):\n');
  warnings.slice(0, 50).forEach(warn => console.log(warn));
  if (warnings.length > 50) {
    console.log(`\n... and ${warnings.length - 50} more warnings\n`);
  }
  console.log('\n');
}

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All questions passed validation!\n');
} else if (errors.length === 0) {
  console.log('✅ No critical errors found. Review warnings above.\n');
} else {
  console.log('❌ Critical errors found. Please fix before deploying.\n');
  process.exit(1);
}
