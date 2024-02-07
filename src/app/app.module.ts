import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';

import { MatCardModule } from '@angular/material/card';
import { FormComponent } from './form/form.component';
import { BlueTrialComponent } from './blue-trial/blue-trial.component';
import { PinkTrialComponent } from './pink-trial/pink-trial.component';
import { AppRoutingModule } from './app-routing.module';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FormComponent,
    BlueTrialComponent,
    PinkTrialComponent,
    SegundaPaginaComponent
  ],
  imports: [
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




