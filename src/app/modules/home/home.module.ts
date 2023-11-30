import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatDialogModule,
    MatIconModule,
    RouterLink
  ]
})
export class HomeModule { }
