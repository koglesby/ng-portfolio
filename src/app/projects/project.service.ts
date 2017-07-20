import { Project } from './project.model';
export class ProjectService {
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
  
  getNextProject(id: number) {
    if (this.projects[id + 1]) {
      return this.projects[id + 1]
    } else {
      return this.projects[id];
    }
  }
}