/** 
 * ini Module buat berdiri sendiri, jika akan dijalankan lewat angular server
 * ng s
*/

import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from '../app.component';
import { AppCommonModule } from '../app.common.module';
import { appStates } from '../app.states';


@NgModule({
  imports: [
    AppCommonModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appStates)
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  providers: [],
  exports: [RouterModule]
})

export class AppModule { }
