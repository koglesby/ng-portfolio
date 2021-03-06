import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProjectComponent } from './projects/project/project.component';
import { ProjectService } from './projects/project.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'skills-tools', component: SkillsComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [
      { path: '', redirectTo: '/projects/0', pathMatch: 'full' },
      { path: ':id', component: ProjectComponent },
    ],
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ProjectComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
