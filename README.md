# Twilio App - Project 5 Flatiron School 2022

Web application that enables the user to send SMS (text messages) to any U.S. domestic mobile phone number. 

## Setup

To run the app locally, install the Rails and React dependencies and set up thek
database:

```sh
bundle install
rails db:create db:migrate db:seed
npm install --prefix client
```

Install Heroku CLI (if you don't already have it):

```sh
brew tap heroku/brew && brew install heroku
```

