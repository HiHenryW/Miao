# Miao

## Building and running on localhost

First install dependencies:

```sh
npm install
```

Run development server:

```sh
npm run start-dev
```

Run client in hot module reloading mode:

```sh
npm run web-start
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

Navigate to `http://localhost:8080/` in your browser which should now be displaying the client.

## Deployment

Checkout the deployment branch:

```sh
git checkout master-deployment
```

The main difference between the master-deployment and master branches is in the base urls for axios requests on the client side.

Login to Heroku:

```sh
heroku login
```

Make sure any changes made are committed and pushed to the master-deployment branch.

Deploy updated code to Heroku:

```sh
git push heroku master-deployment:master
```

## Credits

Made with [createapp.dev](https://createapp.dev/)

Icons made by [Those Icons](https://www.flaticon.com/authors/those-icons) and [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/)
