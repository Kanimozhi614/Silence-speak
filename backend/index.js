const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Dummy functions for translation (replace with actual logic)
const getSignLanguageTranslation = async (text) => {
    return `URL_to_sign_image_for_${text}`; // Replace with actual image URL
};

const translateSignLanguageToText = async (image) => {
    return "Translated text for the sign"; // Simulate translation
};

app.post('/text-to-sign', async (req, res) => {
    const { text } = req.body;
    const signImageUrl = await getSignLanguageTranslation(text);
    res.json({ sign: signImageUrl });
});

app.post('/sign-to-text', async (req, res) => {
    const { image } = req.body;
    const translatedText = await translateSignLanguageToText(image);
    res.json({ text: translatedText });
});

const server = http.createServer(app);
server.listen(5000, () => {
    console.log('Server running on port 5000');
});
