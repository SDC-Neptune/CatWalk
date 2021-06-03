# FEC
Front End Capstone - Grand Canyon

# STARTING THE APPLICATION
Run the following commands:
  1. "npm install"
  2. "npm run start"
  3. "npm run build"

Follow the next step to add your Github Api Token.

# GITHUB API TOKEN
When cloning the repo, make sure to create a config.js file in the server folder. In here, copy and paste the following code:

module.exports = {
  TOKEN: YOUR_TOKEN_HERE
};

Update the token with your github API token, and make sure to put into .gitignore.

# BEFORE YOU PUSH
Run the following command:
  1. "npm run linter"