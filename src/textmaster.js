const express = require('express');
const morgan = require('morgan');
const os = require('os');

const app = express();
app.use(morgan('combined'));

const PORT = process.env.PORT || 3000;

// Funciones auxiliares para testear
function reverseText(text) {
  return text.split('').reverse().join('');
}

function analyzeText(text) {
  const wordCount = text.trim().split(/\s+/).length;
  const hasNumbers = /\d/.test(text);
  return {
    length: text.length,
    word_count: wordCount,
    has_numbers: hasNumbers
  };
}

// Aquí irán los endpoints (más adelante)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = { reverseText, analyzeText };