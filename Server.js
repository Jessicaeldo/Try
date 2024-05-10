const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/save-chat', (req, res) => {
    const chatContent = req.body.content;
    // Save chat content to your database or file storage here
    console.log('Chat content:', chatContent);
    res.status(200).send('Chat saved successfully!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
