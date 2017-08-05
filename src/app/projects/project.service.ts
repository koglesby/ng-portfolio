import { Project } from './project.model';
import { Router, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { Subject } from 'rxjs/Rx';
export class ProjectService {

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
      '../assets/chess.png',
      'https://github.com/8th-Rank-Pawns/chess-app',
      'http://chess-app-8th-rank-pawns.herokuapp.com'
    ),
    new Project(
      'Online Marketplace',
      'A two-sided, video-streaming marketplace platform that' +
      ' features credit card payment capabilities, user role' +
      ' management, complex user interfaces, and advanced' +
      ' database relationships.',
      '../assets/flixter.png',
      'https://github.com/koglesby/flixter',
      'http://flixter-kevin-oglesby.herokuapp.com'
    ),
    new Project(
      'Yelp Clone',
      'A Yelp clone that integrates with the Google Maps API ' +
      'and includes features like user comments, star ratings, ' +
      'image uploading, and user authentication.',
      '../assets/nomster.png',
      'https://github.com/koglesby/nomly',
      'http://nomly-kevin-oglesby.herokuapp.com'
    ),
    new Project(
      'Quote Generator',
      'A database-powered quote generator with a mobile-first' +
      ' design, using the Ruby on Rails framework, HTML, and CSS.' +
      'Uses Git and GitHub for version control, and launched on Heroku.',
      '../assets/splurty.png',
      'https://github.com/koglesby/splurty',
      'http://splurty-kevin-oglesby.herokuapp.com/'
    ),
    new Project(
      'Single Page App',
      'This single-page to-do application features a ' +
      'fluid user interface that allows users to rapidly add' +
      ' dynamic content by using JavaScript.',
      '../assets/todo.png',
      'https://github.com/koglesby/todo',
      'http://todo-kevin-oglesby.herokuapp.com'
    ),
    new Project(
      'Test Driven Development',
      'An Instagram clone that was built using industry-standard, test-driven ' +
      'development following numerous red/green/refactor cycles.',
      '../assets/grammable.png',
      'https://github.com/koglesby/grammable',
      'http://grammable-kevin-oglesby.herokuapp.com/'
    ),
    new Project(
      'Angular 4 App',
      'A single-page application built using the Angular 4 framework. ' +
      'Integrated with firebase to store and retrieve recipe and ' +
      'shopping list data in real time.',
      '../assets/reciperoost.png',
      'https://github.com/koglesby/reciperoost',
      'http://ng-reciperoost-deployment.s3-website-us-west-1.amazonaws.com/'
    )
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

  projectActivated = new Subject();
  
  navigatedProject = new Subject();
}