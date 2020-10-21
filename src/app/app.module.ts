import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {SavedDetailsComponent} from './saved-details/saved-details.component';

@NgModule({
  imports: [
    BrowserModule, 
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component:ListComponent},
      { path: 'savedProviders', component: SavedDetailsComponent},

    ])
  ],
  declarations: [
     AppComponent,
        ListComponent,
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
