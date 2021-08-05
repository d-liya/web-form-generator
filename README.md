# Generating forms based on data base configuration

This project is built using React.js and node.js

## Scripts

### `npm start`

Runs the client app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `node app.js`

Runs the server app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

## How this works

The data.js file located inside the server folder act as the database and has a few sample form configurations.
These configurations are then sent from the server and rendered to the UI using pre defined React componenets.
All the actions and rules defined in the form configuration is written in the client side and using useFunction hook, it finds the correct actions and rules to trigger.
Rules are triggered onBlur and actions are triggered on onClick

### The general structure of a form configuration

{
order: 1, - This is used to find the order in which the components should render. <br>
elementName: "Profile", - This indicates the name of the element. <br>
tag: "header", - This indicated the type of the tag used ("header","field","button","select"). <br>
type: "number", - This is only for field tag and is used to indicate the type. <br>
range: [0, null], - range is for type:number to indicate upper and lower bounds. <br>
rules: ["notEmpty"], - This indicates the method names for a client side validation. <br>
list: ["Canada", "United States"] - This is only for select tag which is used to display the list of options. <br>
action: "submit", - This is only for button tags and uses onCLick to triiger the action. <br>
},
