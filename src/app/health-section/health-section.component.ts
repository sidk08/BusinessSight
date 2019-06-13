import { Component, OnInit } from '@angular/core';
import { Server } from '../shared/serverStatus';

const SAMPLE_SERVERS:Server[] = [
  {id:1, name:'dev-web', isOnline:true},
  {id:2, name:'dev-mail', isOnline:false},
  {id:3, name:'prod-web', isOnline:true},
  {id:4, name:'prod-mail', isOnline:true}
]

@Component({
  selector: 'app-health-section',
  templateUrl: './health-section.component.html',
  styleUrls: ['./health-section.component.scss']
})
export class HealthSectionComponent implements OnInit {

  constructor() { }

  servers = SAMPLE_SERVERS;

  ngOnInit() {
  }

}
