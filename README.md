# Product Info


This microservice creates a visually appealing UI to access information from, and post carts data to, the Greenfield API.  It is adaptive and works well with any sized device, including specific handling for mobile.

## Tech Framework Used
#### Built With
- react
- reactstrap
- material UI
#### Compiled and Transpiled with
- webpack
- babel
## Installation
1. clone this repo
2. run npm install in the root directory
3. navigate to /node_modules/react-inner-image-zoom/lib/InnerImageZoom/InnerImageZoom.js and set the initial state of isActive to true on line 255
4. run npm start to start the server on port 3001
5. navigate to http://localhost:3001/index.html to view the product detail microservice
## Future Enhancements
The product and cart ids are currently hardcoded. In the future, they will be set via a url parameter.