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
      '',
      ''
    ),
    new Project(
      'Online Marketplace',
      'You can make online purchases',
      '../assets/flixter.png',
      '',
      ''
    ),
    new Project(
      'Yelp Clone',
      'A Yelp clone that integrates with the Google Maps API ' +
      'and includes features like user comments, star ratings, ' +
      'image uploading, and user authentication.',
      '../assets/nomster.png',
      '',
      ''
    )
  ];
  
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
  
}