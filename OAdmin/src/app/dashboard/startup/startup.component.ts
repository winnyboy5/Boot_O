import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { Globals } from 'src/app/shared/globals';

@Component({
  selector: 'boo-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit {

  isLinear = false;
  startUpForm: FormGroup;
  secondFormGroup: FormGroup;
  requirements: any;

  styleCtrl: FormControl;
  routingCtrl: FormControl;
  prefixCtrl: FormControl;

  building = false;

  constructor(private _formBuilder: FormBuilder, private userService: UserService, private router: Router, private globals: Globals) { }

  ngOnInit() {

    this.createFormControl();
    this.createForm();

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.userService.getConfig().subscribe(
      data => {
        console.log(data);
        if (data && !data.booInit) {
          this.router.navigate(['/dashboard']);
        }
      });

    this.globals.loader = true;
    this.userService.getRequirements().subscribe(
      data => {
        console.log(data);
        this.requirements = data;
        setTimeout(() => {
          this.globals.loader = false;
        });
      });

  }

  createForm() {
    this.startUpForm = this._formBuilder.group({
      styleCtrl: this.styleCtrl,
      routingCtrl: this.routingCtrl,
      prefixCtrl: this.prefixCtrl
    });
  }

  createFormControl() {
    this.styleCtrl = new FormControl('css', Validators.required);
    this.routingCtrl = new FormControl(true, Validators.required);
    this.prefixCtrl = new FormControl('app', Validators.required);
  }

  startInit() {
    this.globals.loader = true;
    if (this.startUpForm.value) {
      this.userService.loadInit(this.startUpForm.value).subscribe(
        data => {
          console.log(data);
          this.building = true;
          setTimeout(() => {
            this.globals.loader = false;
          });
        });
    }
  }

}
