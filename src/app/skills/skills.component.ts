import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  // icons: Item[] = [
  //   new Item(
  //     'angular-icon.svg',
  //     'https://www.google.com'
  //   ),
  //   new Item(
  //     'aws-icon.png',
  //     'https://www.google.com'
  //   ),
  //   new Item(
  //     'cordova-icon.png',
  //     'https://www.google.com'
  //   ),
  //   new Item(
  //     'firebase-icon.png',
  //     'https://www.google.com'
  //   ),
  //   new Item(
  //     'heroku-icon.png',
  //     'https://www.google.com'
  //   )
  // ];
  
  constructor() { }

  ngOnInit() {
  }

}
