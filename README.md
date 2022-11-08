## Description

REST API created with [Nest](https://github.com/nestjs/nest)
to easily CREATE, DELETE, and MODIFY rooms in a Room Booking service

We needed to create an app with the following HTTP requests methods:

1. POST : to create a room with an id, name, number, and occupant
2. GET : to get a list of all rooms
3. DELETE : to delete a specific room
4. PUT : to update a room’s occupant field.

Nest is a fast and easy way to do it. 

Once you run your application you can use the path below to see the Swagger documentation:

```bash
http://localhost:3000/api/
```
## Why using Nest

Nest extends the Node.js framework Express adding modular organization and other 
libraries to take care of repetitive tasks. It’s open-source and uses TypeScript.

We are using Nest framework for our api application for many reasons:

1. It's easy to get started with if you are familiar with typescript already.
2. It has a fast development speed.
3. It follows the MVC project structure.
4. It has an easy integration with other modules like MongoDB, Server-Static or Swagger in this case.

## Enviroment variables 

We need to set up your .env file with your MongoDB URL. 

Example:

```bash
MONGODB_URL=
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).