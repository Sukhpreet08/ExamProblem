import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-output-view',
  templateUrl: './output-view.component.html',
  styleUrls: ['./output-view.component.css']
})
export class OutputViewComponent implements OnInit {
data:any;
  constructor(private router:Router) {
    this.data=this.router.getCurrentNavigation().extras;
    if (this.data.hasOwnProperty("replaceUrl")){
      this.router.navigateByUrl('/');
    }

  }

  ngOnInit() {
  }

}
