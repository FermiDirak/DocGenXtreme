# Document Generator Xtreme

A tRoLl Document Generator (Xtreme)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Make React front end stuffs in client/
paste the keys and stuffs into `keys.js`. Follow `keys.example.js` as an example.

`npm install`

### Prerequisites

What things you need to install the software and how to install them
Install `yarn`
```
npm install node; npm install express && npm i nodemon -g
yarn  && yarn dev //starts server
```

## Deployment *HEROKU*

How this works

Thid project uses an Express backend with the REACT front end. We have a proxy entry in package.json

"proxy": "http://localhost:5000/"
This tells Webpack development server to proxy our API requests to our API server, given that our Express server is running on localhost:5000


Add additional notes about how to deploy this on a live system

## Contributing

To start:
```
git clone https://github.com/FermiDirak/DocGenXtreme.git
git branch <YOUR_NAME>
git checkout <YOUR_NAME>
git push --set-upstream origin <YOUR_NAME>

... make your changes ...

git push
```

Push to master once code in working state
```
git checkout master
git merge <YOUR_BRANCH_NAME>
git push origin master
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc