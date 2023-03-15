import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './Characters/Characters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FilmsComponent} from './Films/Films.component'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ModalComponent} from './modal/modal.component'
@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    FilmsComponent,
    ModalComponent
  ],
  imports: [
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    BrowserAnimationsModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
