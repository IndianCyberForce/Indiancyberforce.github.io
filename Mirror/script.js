const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/mirror', async (req, res) => {
    const { url, teamName } = req.body;

    try {
        // Trigger GitHub Action (replace YOUR_TOKEN and YOUR_REPO)
        await axios.post(https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/actions/workflows/mirror.yml/dispatches, {
            ref: 'main',
            inputs: {
                url: url,
                team_name: teamName
            },
        }, {
            headers: {
                Authorization: token YOUR_TOKEN,
                Accept: 'application/vnd.github.v3+json',
            }
        });

        res.json({ message: 'Mirroring started', url });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error triggering GitHub Action');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(Server running on port ${PORT});
});
