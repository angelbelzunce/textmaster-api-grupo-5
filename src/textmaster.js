const express = require('express');
const morgan = require('morgan');
const os = require('os');

const app = express();
app.use(morgan('combined'));

const PORT = process.env.PORT || 3000;

// Funciones auxiliares
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

// Rutas de la API
app.get('/', (req, res) => {
  res.send(`Bienvenido a TextMaster API. Servidor: ${os.hostname()}`);
});

app.get('/health', (req, res) => {
  res.json({
    status: 'UP',
    uptime: process.uptime()
  });
});

app.get('/reverse', (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).json({ error: 'Falta el parámetro text' });
  res.send(reverseText(text));
});

app.get('/analyze', (req, res) => {
  const { text } = req.query;
  if (!text) return res.status(400).json({ error: 'Falta el parámetro text' });
  res.json(analyzeText(text));
});

app.get('/transform', (req, res) => {
  const { text, action } = req.query;
  if (!text || !action) return res.status(400).json({ error: 'Faltan parámetros' });
  if (action === 'upper') return res.send(text.toUpperCase());
  if (action === 'lower') return res.send(text.toLowerCase());
  res.status(400).json({ error: 'Acción no válida' });
});

// Iniciar servidor solo si no estamos corriendo Jest
if (process.env.JEST_WORKER_ID === undefined) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
  });
}

module.exports = { app, reverseText, analyzeText };
