import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from './router.animations';
import { Subscription } from 'rxjs/Rx';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    trigger('routerTransition', [
      state('set', style({transform: 'tanslateX(0)'})),
      state('changing-left', style({transform: 'tanslateX(0)'})),
      state('changing-right', style({transform: 'tanslateX(0)'})),
      transition('changing-left => set', animate('200ms ease-in-out', keyframes([
        style({
          transform: 'translateX(500px) scaleY(0)',
          opacity: 0,
          offset: 0
        }),
        style({
          transform: 'translateX(0) scaleY(1)',
          opacity: 1,
          offset: 1
        })
      ]))
      ),
      transition('changing-right => set', animate('200ms ease-in-out', keyframes([
          style({
            transform: 'translateX(-500px) scaleY(0)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(0) scaleY(1)',
            opacity: 1,
            offset: 1
          })
        ]))
      )
    ])
  ]
})
export class ProjectComponent implements OnInit, OnDestroy {
  project: Project;
  id: number;
  subscription: Subscription;
  
  state = 'set';

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.projectService.projectActivated.next(this.id);
        this.project = this.projectService.getProject(this.id);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onChangeProject(direction: string) {
    direction == 'forward' ? this.state = 'changing-left' : this.state = 'changing-right';
    var projId = this.projectService.changeProject(this.id, direction);
    setTimeout(() =>(
      this.router.navigate(['/projects', projId]),
      this.state = 'set'
    ), 0);
  }
  
}
