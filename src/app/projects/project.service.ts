import { Project } from './project.model';
import { Router, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { Subject } from 'rxjs/Rx';
export class ProjectService {

  projectActivated = new Subject<number>();
  navigatedProject = new Subject<number>();

  // public name: string;
  // public description: string;
  // public imagePath: string;
  // public sourcePath: string;
  // public prodPath: string;

  private projects: Project[] = [
    new Project(
      'Agile Team Project',
      'Worked on an Agile team of 5 developers to build a Ruby on Rails' +
      ' chess application that enforces the rules of the game. ' +
      'Under the guidance of a senior software engineer, we ' +
      'had weekly Agile team meetings, code reviews and sprint planning.',
      '../assets/chess.jpg',
      'https://github.com/8th-Rank-Pawns/chess-app',
      'http://chess-app-8th-rank-pawns.herokuapp.com'
    ),
    new Project(
      'Single Page Portfolio',
      "You're looking at this app right now! Whoa, so meta! This app was built from scratch using the Angular 4 framework" +
      " and features a responsive design which incorporates Angular animations, " +
      "and makes use of observables and services in order to pass data between components" +
      " and allow for simple project additions and edits.",
      '../assets/portfolio.jpg',
      'https://github.com/koglesby/ng-portfolio',
      ''
    ),
    new Project(
      'MEAN Stack Message Board',
      'A simple message board app built using the MEAN stack - consisting of the ' +
      'JavaScript-based tech: MongoDB, Express.js, Angular 4, and Node.js.',
      '../assets/mean-mess.png',
      'https://github.com/koglesby/mean-messenger',
      'http://meanmessenger-env.us-east-1.elasticbeanstalk.com'
    ),
    new Project(
      'Angular + Rails',
      'A freelancing app which combines the Angular front-end framework ' +
      'with two Rails 5 API apps functioning as a backend. This architecture allows for' +
      ' automatic updates of page elements without page refresh, while' +
      ' leveraging the power and flexibility of the Rails.',
      '../assets/freelance-camp.jpg',
      'https://github.com/koglesby/freelance-camp',
      'http://koglesby-freelance-camp.herokuapp.com/home'
    ),
    new Project(
      'Test Driven Development',
      'An Instagram clone that was built using industry-standard, test-driven ' +
      'development following numerous red/green/refactor cycles.',
      '../assets/grammable.jpg',
      'https://github.com/koglesby/grammable',
      'http://grammable-kevin-oglesby.herokuapp.com/'
    ),
    new Project(
      'Angular + Firebase',
      'A single-page application built using the Angular 4 framework. ' +
      'Integrated with Firebase to store and retrieve recipe and ' +
      'shopping list data in real time.',
      '../assets/reciperoost.jpg',
      'https://github.com/koglesby/reciperoost',
      'http://ng-reciperoost-deployment.s3-website-us-west-1.amazonaws.com/'
    ),
    new Project(
      'Online Marketplace',
      'A two-sided, video-streaming marketplace platform that' +
      ' features credit card payment capabilities, user role' +
      ' management, complex user interfaces, and advanced' +
      ' database relationships.',
      '../assets/flixter.jpg',
      'https://github.com/koglesby/flixter',
      'http://flixter-kevin-oglesby.herokuapp.com'
    ),
    new Project(
      'Yelp Clone',
      'A Yelp clone that integrates with the Google Maps API ' +
      'and includes features like user comments, star ratings, ' +
      'image uploading, and user authentication.',
      '../assets/nomster.jpg',
      'https://github.com/koglesby/nomly',
      'http://nomly-kevin-oglesby.herokuapp.com'
    ),
    new Project(
      'Single Page To-Do App',
      'This single-page to-do application features a ' +
      'fluid user interface that allows users to rapidly add' +
      ' dynamic content by using JavaScript.',
      '../assets/todo.png',
      'https://github.com/koglesby/todo',
      'http://todo-kevin-oglesby.herokuapp.com'
    ),
    new Project(
      'Quote Generator',
      'This is the first full Web App that I built. It is a database-powered quote generator with a mobile-first' +
      ' design, using the Ruby on Rails framework, HTML, and CSS. ' +
      ' It uses Git and GitHub for version control, and was launched on Heroku.',
      '../assets/splurty.png',
      'https://github.com/koglesby/splurty',
      'http://splurty-kevin-oglesby.herokuapp.com/'
    )

    // new Project(
    //   'Ionic App',
    //   'This project was built using the Ionic framework, and uses firebase, ' +
    //   'and has been compiled into an apk',
    //   '../assets/reciperoost-mobile.png',
    //   'https://github.com/koglesby/reciperoost-mobile',
    //   ''
    // ),

  ];
  
  getProjectsLength() {
    return this.projects.length;
  }
  
  getProjects() {
    return this.projects.slice();
  }
  
  getProject(index: number) {
    return this.projects[index];
  }
  
  changeProject(id: number, direction: string) {
    if (direction == 'forward') {
      return (this.projects[id + 1] ? id + 1 : 0 );
    } else {
      return (this.projects[id - 1] ? id - 1 : this.projects.length - 1);
    }
  }

}