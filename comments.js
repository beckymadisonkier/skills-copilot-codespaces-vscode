// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a client for interacting with GitHub API
const { Octokit } = require('@octokit/rest');
const octokit = new Octokit();

app.use(express.json());

app.post('/post-comment', async (req, res) => {
  const { owner, repo, pull_number, body } = req.body;
  const { GITHUB_TOKEN } = process.env;

  if (!owner || !repo || !pull_number || !body) {
    return res.status(400).send('Missing required parameters: owner, repo, pull_number, body');
  }

  try {
    const response = await octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
      owner,
      repo,
      issue_number: pull_number,
      body,
      headers: {
        authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Create a client for interacting with GitHub API
const { Octokit } = require('@octokit/rest');
const octokit = new Octokit();

const createComment = async (owner, repo, pull_number, body) => {
  const { GITHUB_TOKEN } = process.env;

  try {
    const response = await octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
      owner,
      repo,
      issue_number: pull_number,
      body,
      headers: {
        authorization: `token ${GITHUB_TOKEN}`,
      },
    });
  } catch (error) {
    console.log('Error creating comment:', error.message);
  }
}
module.exports = {
  createComment,
};

const createComment = async (owner, repo, pull_number, body) => {
  const { GITHUB_TOKEN } = process.env;

  try {
    const response = await octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/comments', {
      owner,
      repo,
      issue_number: pull_number,
      body,
      headers: {
        authorization: `token ${GITHUB_TOKEN}`,
      },
    });
  } catch (