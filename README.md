# AngularPlayground
This project was created by request from Insight Global, for a position with a client that I am highly excited about!

## Development server
Feel free to clone the project if you would like. You should have node installed as well as the Angular CLI. Run `npm install` to install dependencies, and then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Live Deployment
I built the application and deployed it using Github pages. You can view the live application at [optimaldev.github.io/AngularPlayground](https://optimaldev.github.io/AngularPlayground).

## The Assignment
This project is to demonstrate a custom pipe that will take a value, that may be empty, and display the value or 'N/A' if the value is empty. To demonstrate this I created a simple table using bootstrap css, with a pre-defined object in the component class to populate the table cells. The notes field is the one that utilizes the pipe, called filterNotes in the project. The transform method takes a string or a number and returns a string. I used a simple ternary expression to look at the value being passed in, and if the value is unable to be interpreted as empty, it returns the value cast into a string (this seemed cleaner than returning a string or a number as the value is going to the template anyway). If the value is empty, the method returns 'N/A' as requested. 

## Improvements
It would be nice to add a simulation of async data fetching, or actually plug this into a HTTP data source using some simple JSON hosting service or a crypto API. It would also be nice to add a sort feature to the table's 'Price' and 'Name' columns. 
