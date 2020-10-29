## Postgres with Node


This is a REST-ful backend API server for a simple company/invoice tracker

### Setting up and running application
1. npm init
2. npm install express
3. npm install pg
4. npm install slugify
4. Type psql on terminal and create database: CREATE DATABASE biztime;
5. In your psql terminal, type: \c biztime
6. Exit, and then type psql < data.sql to populate database
7. Start app: nodemon server.js


### Manually testing routes
Open insomnia and manually test the different routes. The files companies.test.js and invoices.test.js can help you on working these routes with insomnia.
Example: 
http://localhost:3000/companies (GET request)
http://localhost:3000/companies/apple (GET request)

http://localhost:3000/companies (POST request)
{"name": "Test", "description": "adding one input"}


### Running Tests