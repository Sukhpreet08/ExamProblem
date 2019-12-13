import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-input-view',
  templateUrl: './input-view.component.html',
  styleUrls: ['./input-view.component.css']
})
export class InputViewComponent implements OnInit {

  petInfoGroup = new FormGroup({
  name: new FormControl('', Validators.required),
  kind: new FormControl('', Validators.required),
  gender: new FormControl('', Validators.required)
});
constructor(private router: Router) { }

ngOnInit() {
  }

  onSubmit() {
    let extras: NavigationExtras=this.petInfoGroup.value;
    this.router.navigate(['output'], extras);
  }
}
