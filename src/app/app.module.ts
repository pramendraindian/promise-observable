import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConcatMapExComponent } from './components/concat-map-ex/concat-map-ex.component';
import { LiveSearchExComponent } from './components/live-search-ex/live-search-ex.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForkJoinExComponent } from './components/fork-join-ex/fork-join-ex.component';
import { FlatMapExComponent } from './components/flat-map-ex/flat-map-ex.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcatMapExComponent,
    LiveSearchExComponent,
    ForkJoinExComponent,
    FlatMapExComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
