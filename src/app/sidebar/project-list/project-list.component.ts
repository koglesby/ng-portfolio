import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../projects/project.service';
import { Project } from '../../projects/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  // projects: Project[];

  // constructor(private projectService: ProjectService) { }

  ngOnInit() {
    // this.projects = this.projectService.getProjects();
  }

}
