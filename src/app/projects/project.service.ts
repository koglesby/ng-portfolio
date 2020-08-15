import { Project } from './project.model';
import { Subject } from 'rxjs';

import { projectData } from './project-data';

export class ProjectService {
  projectActivated = new Subject<number>();
  navigatedProject = new Subject<number>();

  private projects: Project[] = projectData;

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
      return this.projects[id + 1] ? id + 1 : 0;
    } else {
      return this.projects[id - 1] ? id - 1 : this.projects.length - 1;
    }
  }
}
