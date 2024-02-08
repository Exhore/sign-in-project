// imports the necessary modules for animations, forms, and material components
import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';

// components
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BlueTrialComponent } from './blue-trial/blue-trial.component';
import { PinkTrialComponent } from './pink-trial/pink-trial.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';
import { infoTitleComponent } from './infoTitle/infoTitle.component';
import { HomePageComponent } from './home-page/home-page.component';



// routes
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'GifSearch', component: SecondPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    infoTitleComponent,
    BlueTrialComponent,
    PinkTrialComponent,
    SecondPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSliderModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




