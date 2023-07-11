## Supermarket List API

API in Node.js using Express and Mongoose to connect a MongoDB Database
The main objective is to make life easier for application users who go to the supermarket and forget the items they went to buy.
So this API aims to organize this shopping list. 

### Technologies used

- Node.js
- Express
- Mongoose
- MongoDB
- Nodemon

### Required Technologies

- Node.js installed (https://nodejs.org)
- MongoDB instance running:
Ex: Running with docker
```
docker run --name supermarket-list -p 27017:27017 -d mongo
```

### Steps to run the project

1. Clone the repository:

```
git clone https://github.com/gustavorenedev/supermarket-list-api.git
```

2. Navigate to the repository:

```
cd supermarket-list-api
```

3. Install the dependecies:

```
npm install
```

4. Run the API:

```
npm run start:dev
```

### Available endpoints

- [GET]/list-items
- [POST]/list-item
- [DELETE]/list-item/:id
- [PUT]/list-item/:id