# Twilio App: Phase 5 Project for Flatiron School Software Development program 2022

[Twio App](https://enigmatic-wave-74156.herokuapp.com/profileform) is a web-based application that enables the user to send SMS (text messages) to any U.S. domestic mobile phone number.

## User story

- A user will be able to sign up for an account.
- A user will be able to login after signing up for an account.
- A user will be able to send SMS text messages from the Send SMS page.
- A user will be able to send SMS text messages from the Send SMS page.
- A user will be able to view, update/ resend and delete their SMS text messages from the SMS history page. 
- A user will be able to create user profiles of themself from the New Profile page.
- A user will be able to view, update and delete their user profile from the User Profile page. 


## Requirements
- A Twilio account - [Sign up for free Twilio](https://www.twilio.com/try-twilio)

- [Ruby version 3.0.4](https://rvm.io/rubies/installing) 


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

