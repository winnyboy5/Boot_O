import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatStepperModule} from '@angular/material';


import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { StartupComponent } from './startup/startup.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/user.service';
import { MaterialSkinModule } from '../material-skin/material-skin.module';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    HttpClientModule,
    MaterialSkinModule
  ],
  providers: [UserService],
  declarations: [UserDashboardComponent, StartupComponent]
})
export class DashboardModule { }
