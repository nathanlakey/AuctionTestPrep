// Georgia Question Review - Potential Answer/Explanation Mismatches
// Run this to see the full details of flagged Georgia questions

import { questionBank } from './src/data/questionBank.js';

const georgiaQuestions = questionBank['Georgia'];

console.log('🔍 GEORGIA QUESTIONS - DETAILED REVIEW\n');
console.log('Questions flagged for potential answer/explanation mismatch:\n');
console.log('═══════════════════════════════════════════\n');

const flaggedQuestions = [4, 9, 10, 12, 15, 16, 22, 23, 28, 29, 33];

flaggedQuestions.forEach(qNum => {
  const q = georgiaQuestions[qNum - 1];
  if (!q) return;
  
  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`QUESTION ${qNum} (ID: ${q.id})`);
  console.log(`Topic: ${q.topic}`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
  
  console.log(`❓ ${q.question}\n`);
  
  console.log('OPTIONS:');
  q.options.forEach((opt, idx) => {
    const marker = idx === q.correctAnswer ? '✅' : '  ';
    console.log(`${marker} ${idx}: ${opt}`);
  });
  
  console.log(`\n📖 Explanation: ${q.explanation}\n`);
  console.log(`Current correct answer: ${q.correctAnswer} - "${q.options[q.correctAnswer]}"`);
  console.log('\n');
});

console.log('\n\n📝 ACTION NEEDED:\n');
console.log('Review each question above and verify:');
console.log('1. Does the explanation match the marked correct answer?');
console.log('2. If not, determine which answer is actually correct');
console.log('3. Update either the correctAnswer index or the explanation\n');
