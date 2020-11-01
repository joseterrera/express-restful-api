## Postgres with Node
This is a REST-ful backend API server for a simple 
company/invoice tracker.

It connects Postgres with Nodejs. We use a node package "pg" to connect and execute sql queries from a node/express app. 

### Setting up and running application
1. npm init
2. npm install express
3. npm install pg
4. npm install slugify
5. Type psql on terminal and create database: CREATE DATABASE biztime;
6. In your psql terminal, type: \c biztime
7. Exit, and then type psql < data.sql to populate database
8. Start app: nodemon server.js


### Manually testing routes
Open insomnia and manually test the different routes. The files companies.test.js and invoices.test.js can help you on working these routes with insomnia.
Example: 
http://localhost:3000/companies (GET request)
http://localhost:3000/companies/apple (GET request)

http://localhost:3000/companies (POST request)
your json input:
```json
{"name": "Test", "description": "adding one input"}
```

http://localhost:3000/companies/apple (PUT request)
your json input:
```json
{ "name": "AppleEdit", "description": "NewDescrip"}
```

http://localhost:3000/companies/apple (DELETE request)


#### For invoices 

http://localhost:3000/invoices (GET request)

http://localhost:3000/invoices/1 (GET a specific one)

http://localhost:3000/invoices (POST request)
your input:

```json
{ "amt": 500, "comp_code": "ibm" }
```

http://localhost:3000/invoices/6 (DELETE request for specific invoice)
your input:

```json
{ "amt": 300, "paid": true }
```
Changing false to true, will adjust the value of paid_date on the output.



### Running Tests
Do I have to go to routes directory?
1. Create a database for your tests: createdb biztime_test
2. Seed your testing database: psql biztime_test < data.sql
3. instal `npm i supertest`
4. Run `jest`