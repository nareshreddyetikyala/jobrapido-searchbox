import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, AppComponent, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
