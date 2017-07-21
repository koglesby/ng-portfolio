import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
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

  onChangeProject(direction: string) {
    var dest = this.projectService.changeProject(this.id, direction)
    this.router.navigate(['/projects']);
    setTimeout(() =>(this.router.navigate(['/projects', dest])), 400);
  }

}
