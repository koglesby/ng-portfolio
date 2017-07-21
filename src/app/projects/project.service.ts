import { Project } from './project.model';
import { Router, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
export class ProjectService {
  // constructor(private route: ActivatedRoute, private router: Router) {}
  private projects: Project[] = [
    new Project(
      'spaghett!',
      'suppp',
      'bubonic'
    ),
    new Project(
      'Second one',
      'yupppp',
      'funnn'
    ),
    new Project(
      'Third one',
      'hahahah',
      'another string'
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
  
}