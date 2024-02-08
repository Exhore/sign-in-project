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
import { FormComponent } from './home-page/components/form/form.component';
import { BlueTrialComponent } from './home-page/components/blue-trial/blue-trial.component';
import { PinkTrialComponent } from './home-page/components/pink-trial/pink-trial.component';
import { CommonModule } from '@angular/common';
import { SecondPageComponent } from './second-page/second-page.component';
import { infoTitleComponent } from './home-page/components/infoTitle/infoTitle.component';
import { HomePageComponent } from './home-page/home-page.component';

// route module
import { AppRoutingModule } from './app-routing.module';



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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




