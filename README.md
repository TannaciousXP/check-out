#Check-out

##This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To run
```
npm install
npm start
```

Open http://localhost:3000 to view it in the browser.

## Actions
-reducers name and functions

## Components
The two main components are entry and expand which is under the polymorphism of OOP, they are flexible enough to be reusable
- Enrty
- Expand

The sub components are for the expand component to apply the code and list the items
- Item
- Form

## Containers
Three sections for the checkout
- Subtotal - there all the entries live
- Esttoal - the total amount with expandable element
- Discount - the expandable element for applying the code

## Reducers
- redux handlers

## Util
- helper funcs and where the database lives

### Description
Abstracted and modularized the code so the functions are flexiable enough to be resused. The reducers were made to handle larger inputs, and added extra feature to list the applied discount code.

### ToDo:
- add testing