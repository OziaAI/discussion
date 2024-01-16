# Discussion
Discussion is the frontend layer of the conversation stack based on React.
The javascript runner used for this project is npm.

# Environment variable that needs to be set
- BACKEND\_PATH: the URI path to the backend Wingman

# How to run ?

## In development mode

### For Foundxtion and nixOS users
In a terminal, do the following commands:
```zsh
cd tools/;
nix-shell --run zsh;
cd ..;
npm install;
npm start;
```

### For other distributions
You can launch the entire conversation stack in development mode using the
provided docker-compose file in the conversation repository. This usage
simplifies the setting of the environment variables needed.

## In production mode
For the moment, no method other than using the docker compose file in
conversation repository is available. You will need to deploy Discussion along with
the entire conversation stack.
