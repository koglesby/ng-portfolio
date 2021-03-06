import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    trigger('projectTransition', [
      state('set', style({transform: 'translateX(0)', opacity: 1})),
      state('changing-left', style({transform: 'translateX(-600px)', opacity: 0})),
      state('changing-right', style({transform: 'translateX(600px)', opacity: 0})),
      transition('set => changing-left', animate('160ms ease-in-out', keyframes([
          style({
            transform: 'translateX(0) scaleX(1) scaleY(1)',
            opacity: 1,
            // offset: 0
          }),
          style({
            transform: 'translateX(-600px) scaleX(0) scaleY(0.75)',
            opacity: 0,
            // offset: 1
          })
        ]))
      ),
      transition('set => changing-right', animate('160ms ease-in-out', keyframes([
          style({
            transform: 'translateX(0) scaleX(1) scaleY(1)',
            opacity: 1,
            // offset: 0
          }),
          style({
            transform: 'translateX(600px) scaleX(0) scaleY(0.75)',
            opacity: 0,
            // offset: 1
          })
        ]))
      ),
      transition('changing-left => set', animate('160ms ease-in-out', keyframes([
        style({
          transform: 'translateX(600px) scaleX(0) scaleY(0.75)',
          opacity: 0,
          // offset: 0
        }),
        style({
          transform: 'translateX(0) scaleX(1) scaleY(1)',
          opacity: 1,
          // offset: 1
        })
      ]))
      ),
      transition('changing-right => set', animate('160ms ease-in-out', keyframes([
          style({
            transform: 'translateX(-600px) scaleX(0) scaleY(0.75)',
            opacity: 0,
            // offset: 0
          }),
          style({
            transform: 'translateX(0) scaleX(1) scaleY(1)',
            opacity: 1,
            // offset: 1
          })
        ]))
      )
    ])
  ]
})
export class ProjectComponent implements OnInit, OnDestroy {

  projects: Project[];

  // project: Project;
  id: number = 0;
  subscription: Subscription;
  navSubscription: Subscription;
  
  state = 'set';

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    this.projects = this.projectService.getProjects();

    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        (+params['id'] < this.projectService.getProjectsLength()) ? this.id = +params['id'] : this.router.navigate(['/projects/0']);
        // For redirecting from invalid project id.^^
        this.projectService.projectActivated.next(this.id);
        // this.project = this.projectService.getProject(this.id);
      }
    );
    this.navSubscription = this.projectService.navigatedProject.subscribe(
      (index) => {
        if (this.id == index || (index == null && this.id == 0)) {
          this.state = 'set'
        } else if (this.id < index) {
          this.state = 'changing-right'
        } else {
          this.state = 'changing-left';
        }
        setTimeout(() => ( this.state = 'set'), 30)
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.navSubscription.unsubscribe();
  }

  onChangeProject(direction: string) {
    direction == 'forward' ? this.state = 'changing-left' : this.state = 'changing-right';
    var projId = this.projectService.changeProject(this.id, direction);
    setTimeout(() => {
      this.router.navigate(['/projects', projId]);
      this.state = 'set';
    }, 30);
    
  }

  loading: boolean = true;
  onLoad() {
    this.loading = false;
  }
  
}
