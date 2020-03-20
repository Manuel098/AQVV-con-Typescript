import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{
  MatButtonToggleModule, MatIconModule, MatProgressSpinnerModule, MatInputModule, MatCardModule,
  MatToolbarModule, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatDialogModule,
  MatOptionModule, MatCheckboxModule, MatBadgeModule, MatButtonModule, MatRadioModule
}from '@angular/material';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { InitialBodyComponent } from './initial-body/initial-body.component';
import { SetPersonComponent } from './set-person/set-person.component';
import { HeaderComponent } from './header/header.component';
import { DeleteComponent } from "./modals/delete/delete.component";
import { AddUserComponent } from './modals/add-user/add-user.component';
import { StartGameComponent } from './start-game/start-game.component';
import { MessageComponent } from './modals/message/message.component';


const material = [
  MatButtonModule, MatButtonToggleModule, MatIconModule, ReactiveFormsModule, MatCardModule,
  MatBadgeModule, MatSelectModule, MatCheckboxModule, MatOptionModule, MatProgressSpinnerModule,
  MatToolbarModule, MatFormFieldModule, MatSidenavModule, MatRadioModule, MatInputModule, MatDialogModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InitialBodyComponent,
    SetPersonComponent,
    DeleteComponent,
    AddUserComponent,
    StartGameComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    material,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeleteComponent, AddUserComponent, MessageComponent]
})
export class AppModule { }
