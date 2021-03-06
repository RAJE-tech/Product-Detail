# Raje Tech Brick And Click Product Info

>This microservice creates a visually appealing UI to access information from, and post carts data to, the Greenfield API (https://gist.github.com/teddim/e9b76cd5b4fb617afeb6dfb65796d416#file-products_api-md).  It is responsive and works well with any sized device, including specific handling for mobile.

## Acheivements and Optimizations

- handles several complex user interactions

![Imgur](https://i.imgur.com/TTOR9o1.gif)

- responds to url parameters with the corresponding product

![Imgur](https://i.imgur.com/vlMFkuG.gif)

- responds gracefully to resizing

![Imgur](https://i.imgur.com/8JXzJ1l.gif)

## Tech Framework Used
#### Built With
- react
- reactstrap
- material UI
- react router
- react media
- express
#### Compiled and Transpiled with
- webpack 
- babel
## Installation
1. clone this repo
2. run npm install in the root directory
3. navigate to /node_modules/react-inner-image-zoom/lib/InnerImageZoom/InnerImageZoom.js and set the initial state of isActive to true on line 255 (awaiting merge of my contribution to open source InnerImageZoom compenent which will deprecate the need for this change)
4. run npm start to start the server on port 3001
5. navigate to http://localhost:3001/index.html to view the product detail microservice

## License
[MIT](https://choosealicense.com/licenses/mit/)
