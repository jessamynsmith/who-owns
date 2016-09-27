who-owns
========

Find out who owns a brand. Check out the live app:
https://who-owns.herokuapp.com/


Development
-----------

Fork the project on github and git clone your fork, e.g.:

    git clone https://github.com/<username>/who-owns.git

Ensure you have node installed (I recommend using homebrew on OSX), then use npm to install JavaScript dependencies:

    npm install

Run server:

    ionic serve


Continuous Integration and Deployment
-------------------------------------

This project is already set up for deployment using Heroku.

Make a new Heroku app.

Set config variables:

    heroku config:set NPM_CONFIG_PRODUCTION=false
