# bookshop-js

A simple book store API in need of input validation/sanitization.

This is a part of the University of Wyoming's Secure Software Design Course (Spring 2023). This is the base repository to be forked and updated for various assignments. Alternative language versions are available in:

- [Go](https://github.com/andey-robins/bookshop-go)
- [Rust](https://github.com/andey-robins/bookshop-rs)

## Versioning

`bookshop-js` is built with:

- node version v16.19.0
- npm version 9.6.2
- nvm version 0.39.3

## Usage

Start the api using `npm run dev`

I recommend using [`httpie`](https://httpie.io) for testing of HTTP endpoints on the terminal. Tutorials are available elsewhere online, and you're free to use whatever tools you deem appropriate for testing your code.

## Changes Made

Implemented a validator function that uses a regex to check for forbidden characters in an input. The validator function is called in each handler file function to ensure proper inputs are taken in. There might be a simpler way to implement the validator in the main index file?



## Analysis of Existing Code

The first problem with this program is the general lack of input validation. This allows users to do the following:

- Input any type value into any field. (Already fixed)
- Crash the server if the request is malformed.
- Crash the server if requested data does not exist.
- To fix this, it would be best to implement additional error handlers to check for malformed requests as well as a check to see if requested data exists.

The next major issue is the lack of client confidentiality:

- There is no type of encryption for the customer names/addresses fields in the databses, it's simply stored in plain text.
- To fix this, it would be best to implement some form of text encryption within the database.

The third major issue is a lack of API privacy

- It would be best to setup a private API key for the store owners to use.

## Statement of Help Received

- Worked with Ric Nisley: Discussed ideas for how to implement input validation, came up with the regex validator together (Probably implemented differently in our individual projects)

## Final Notes/Comments

- Initially attempted the project in GoLang, however the GoLang implementation would not auto generate the database and the server would not communicate with the database. Could have been a configuration error on my end?