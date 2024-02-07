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
There is for the moment no production build on our servers. The project is built
and then deployed on Shopify's CDN.

During production build, the discussion react app is being built with
react-script and reduced to minimized js and css.
Once this process is completed, the remaining js and css files are copied to the
shopify theme app with the name script.js and stylesheet.css.

With the shopify CLI, the theme app is built and deployed on Shopify's CDN.

# Shopify theme app: summary
The shopify theme app is mainly a liquid file that does two things
- It imports the js and css through `script` and `link` tags
- It sets settings stored in the app metafield of the merchant into the local
  storage of the client browser.

## Settings being stored in local storage
- `colorTheme`: the theme selected by the merchant. 4 values are accepted:
  `blue-gradient`; `red-gradient`; `yellow-gradient`; `green-gradient`; `blue`;
  `red`; `yellow` and `green`.
- `chatPlacement`: where should be discussion displayed: values accepted are
  `left` and `right`.
