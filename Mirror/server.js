const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(bodyParser.json());

app.post('/mirror', async (req, res) => {
    const { url, teamName } = req.body;

    try {
        // Trigger GitHub Action using GitHub API
        await axios.post(https://api.github.com/repos/IndianCyberForce/Mirror/actions/workflows/mirror.yml/dispatches, {
            ref: 'main',
            inputs: {
                url: url,
                team_name: teamName
            },
        }, {
            headers: {
                Authorization: token ${process.env.GITHUB_TOKEN}, // Use your token here
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
