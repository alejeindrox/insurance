# Insurance

Insurance is an application to show data through an API  with a system of users also has a UI to see the API without using postman.


## Getting Started


### Prerequisites

Insurance requires [Node.js](https://nodejs.org/) v6+ to run.


### Installing

Clone repository:
```sh
$  git clone https://github.com/alejeindrox/insurance.git insurance
$ cd insurance/
```
And install server dependencies
```sh
$ npm install
```
Or using Yarn
```sh
$ yarn
```
To use the user interface you must install the client dependencies:
```sh
$ npm client-install
```
Or using Yarn
```sh
$ yarn client-install
```
And it's ready to work.


### Development Environment

Inside of the folder from project use:
```sh
$ npm server
```
Or using Yarn
```sh
$ yarn server
```
And now you can use postman ponting https://localhost:5000/
You can start server and client at the same time with the command:
```sh
$ npm dev
```
Or using Yarn
```sh
$ yarn dev
```
Open your browser and enter in https://localhost:3000/
You must use Redux extension in this environment.


### Production Environment (Heroku)

In the production enviroment use the command:
```sh
$ npm heroku-postbuild
```
Or using Yarn
```sh
$ yarn heroku-postbuild
```
And now it's already compiled for deployment.


## Pages API

  - /api/account/login
  - /api/account/logout
  - /api/account/verify
  - /api/clients
  - /api/clients/id/:id
  - /api/clients/name/:name
  - /api/clients/email/:email
  - /api/policies
  - /api/policies/userbyid/:id/all
  - /api/policies/userbyname/:name/all
  - /api/policies/userbyemail/:email/all
  - /api/policies/:id/user


### Pages API Information

  - Login: Login user using email and name of a client and return token for authorization (Method POST).
  - Logout: Logout user using a token in the header (Method GET).
  - Verify: Verify user using a token in the header (Method GET).
  - Clients: Show all clients (Method GET).
  - Clients/id: Show one client using id like parameter URL and the token in the header (Method GET).
  - Clients/name: Show one client using name like parameter URL and the token in the header (Method GET).
  - Clients/email: Show one client using email like parameter URL and the token in the header (Method GET).
  - Policies: Show all policies (Method GET).
  - Policies/userbyid: Show all policies of a user by user id, using id like parameter URL and the token in the header "only client with admin role" (Method GET).
  - Policies/userbyname: Show all policies of a user by user name, using name like parameter URL and the token in the header  "only client with admin role" (Method GET).
  - Policies/userbyemail: Show all policies of a user by user email, using email like parameter URL and the token in the header  "only client with admin role" (Method GET).
  - Policies/user: Show one policy and its client by id policy, using id like parameter URL and the token in the header  "only client with admin role" (Method GET).


### Pages Client

  - /
  - /login
  - /clients
  - /policies/client
  - /policy
  - /about


### Pages Client Information

  - Home: Show all Clients and Policy.
  - Login: Login user using email and name of a client.
  - Clients: Find client using id , name or email of a client.
  - Policies/client: Find all policies of a client using id , name or email of a client.
  - Policy: Find one policy and its client using id of a policy.
  - About: Show information about developer.


## Resources

Insurance uses a number of open source projects to work properly:


### Server

* [Express](https://expressjs.com) - Is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [Mongoose](https://mongoosejs.com) - A JavaScript library to connect with MongoDB.
* [Concurrently](https://github.com/kimmobrunfeldt/concurrently) - Run multiple commands concurrently.
* [Body-Parser](https://github.com/expressjs/body-parser) - Node.js body parsing middleware.
* [Babel](https://babeljs.io) - Compile Ecmascript code to Javascript code.
* [Nodemon](https://nodemon.io) - Simple monitor script for use during development of a node.js app.

Insurance uses the MongoDB service in the [MLAB](https://mlab.com) cloud to save and manage the database


### Client

* [React](https://reactjs.org) - A JavaScript library for building user interfaces.
* [Material UI](https://material-ui.com) - React Components that Implement Google's Material Design.
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
* [Redux](https://redux.js.org/) - Redux is a predictable state container for JavaScript apps.
* [Moment](https://momentjs.com) - Parse, validate, manipulate, and display dates in Javascript.
* [react-table](https://react-table.js.org) - A lightweight, fast and extendable datagrid built for React.

And of course Insurance itself is open source with a public repository on GitHub.


## Authors

* **Alejandro López** - *Initial work* - [alejeindrox](https://github.com/alejeindrox)


## License

This project is licensed under the MIT License.