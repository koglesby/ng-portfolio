import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { Params, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  
  project: Project;
  id: number;

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.project = this.projectService.getProject(this.id);
      }
    );
  }
  
  onNextProject() {
    var proj= this.projectService.getNextProject(this.id);
    console.log(proj);
    this.router.navigate(['about']);
  }
}
