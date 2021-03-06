import { Project } from './project.model';

export const projectData = [
  // public name: string;
  // public description: string;
  // public imagePath: string;
  // public sourcePath: string;
  // public prodPath: string;
  new Project(
    'Angular | Single Page Portfolio',
    "You're looking at this app right now! This app was built from scratch using the Angular 4 framework" +
    ' and features a responsive design which incorporates Angular animations, ' +
    'and makes use of observables and services to pass data between components' +
    ' and allow for simple project additions and edits.',
    '../assets/portfolio.jpg',
    'https://github.com/koglesby/ng-portfolio',
    ''
  ),
  new Project(
    'Agile Team Project | Chess App',
    'A Rails chess application that enforces the rules of the game. ' +
    'Contributed to this project on an Agile team of five code bootcamp student' +
    'developers under guidance of a senior software engineer. Built using test driven development, linting with Rubocop, and a CI/CD pipeline deploying to Heroku.',
    '../assets/chess.jpg',
    'https://github.com/8th-Rank-Pawns/chess-app',
    'http://chess-app-8th-rank-pawns.herokuapp.com'
  ),
  new Project(
    'Node | Chat App',
    'A chat app that uses an express server with socket.io to send messages in real time. Also includes a feature which incorporates Google\'s geolocation api.',
    '../assets/node-chat.jpg',
    'https://github.com/koglesby/node-chat-app',
    'https://koglesby-node-chat.herokuapp.com/'
  ),
  new Project(
    'Advanced Sass | Site Mockup',
    'An elegant website mockup with a responsive design, ' +
    'built following BEM Notation and 7-1 Sass architecture, ' +
    'featuring css animations, a custom grid, and a pure CSS Popup.',
    '../assets/natours.jpg',
    'https://github.com/koglesby/natours',
    'https://koglesby.github.io/natours/'
  ),
  new Project(
    'MERN Stack | Developer Network',
    'Full stack social network application built using Node.js, Express, React, Redux and MongoDB. ' +
    'Backend api tested during development using Postman. Routes and endpoints protected with JSON Web Tokens.',
    '../assets/devconnect.jpg',
    'https://github.com/koglesby/devconnect',
    'https://devconnect-koglesby.herokuapp.com/'
  ),
  new Project(
    'React + Redux | Burger-Builder',
    'Create custom burgers with automatic price adjustment. Employs a firebase backend with' +
    'user authentication and forms for contact information. Built using the React library with ' +
    'highly reusable components and Redux for state management.',
    '../assets/burgerbuilder.jpg',
    'https://github.com/koglesby/burger-builder',
    'https://koglesby-react-burger-builder.firebaseapp.com/'
  ),
  new Project(
    'Rails | Online Marketplace',
    'A two-sided, video-streaming marketplace platform that' +
    ' features credit card payment capabilities, user role' +
    ' management, complex user interfaces, and advanced' +
    ' database relationships.',
    '../assets/flixter.jpg',
    'https://github.com/koglesby/flixter',
    'http://flixter-kevin-oglesby.herokuapp.com'
  ),
  new Project(
    'Rails | Yelp Clone',
    'A Yelp clone that integrates with the Google Maps API ' +
    'and includes features like user comments, star ratings, ' +
    'image uploading, and user authentication.',
    '../assets/nomster.jpg',
    'https://github.com/koglesby/nomly',
    'http://nomly-kevin-oglesby.herokuapp.com'
  ),
  // new Project(
  //   'React Native Places App',
  //   'Built using React Native and Redux, this mobile app makes use of native device features, allowing' +
  //     ' users to quickly take a picture or select one from their library to upload and share, and add a location ' +
  //     "using the device's currrent position or one selected from a map view component.",
  //   '../assets/reactnativeplaces.jpg',
  //   'https://github.com/koglesby/react-native-places',
  //   ''
  // ),
  // new Project(
  //   'MEAN Stack Message Board',
  //   'A simple message board app built using the MEAN stack - consisting of the ' +
  //   'JavaScript-based tech: MongoDB, Express.js, Angular 4, and Node.js.',
  //   '../assets/mean-mess.png',
  //   'https://github.com/koglesby/mean-messenger',
  //   ''
  // ),
  // new Project(
  //   'Angular + Rails Freelancing App',
  //   'A freelancing app which combines the Angular front-end framework ' +
  //     'with two Rails 5 API apps functioning as a backend. This architecture allows for' +
  //     ' automatic updates of page elements without page refresh, while' +
  //     ' leveraging the power and flexibility of the Rails.',
  //   '../assets/freelance-camp.jpg',
  //   'https://github.com/koglesby/freelance-camp',
  //   'http://koglesby-freelance-camp.herokuapp.com/home'
  // ),
  // new Project(
  //   'Instagram Clone / TDD',
  //   'An Instagram clone that was built using industry-standard, test-driven ' +
  //     'development following numerous red/green/refactor cycles.',
  //   '../assets/grammable.jpg',
  //   'https://github.com/koglesby/grammable',
  //   'http://grammable-kevin-oglesby.herokuapp.com/'
  // ),
  // new Project(
  //   'Single Page To-Do App',
  //   'This single-page to-do application features a ' +
  //   'fluid user interface that allows users to rapidly add' +
  //   ' dynamic content by using JavaScript.',
  //   '../assets/todo.png',
  //   'https://github.com/koglesby/todo',
  //   'http://todo-kevin-oglesby.herokuapp.com'
  // ),
  // new Project(
  //   'Quote Generator',
  //   'This is the first full Web App that I built. It is a database-powered quote generator with a mobile-first' +
  //     ' design, using the Ruby on Rails framework, HTML, and CSS. ' +
  //     ' It uses Git and GitHub for version control, and was launched on Heroku.',
  //   '../assets/splurty.png',
  //   'https://github.com/koglesby/splurty',
  //   'http://splurty-kevin-oglesby.herokuapp.com/'
  // ),
  // new Project(
  //   'Ionic App',
  //   'This project was built using the Ionic framework, and uses firebase, ' +
  //   'and has been compiled into an apk',
  //   '../assets/reciperoost-mobile.png',
  //   'https://github.com/koglesby/reciperoost-mobile',
  //   ''
  // ),
];
