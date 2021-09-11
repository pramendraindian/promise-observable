import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConcatMapExComponent } from './components/concat-map-ex/concat-map-ex.component';
import { SwitchMapExComponent } from './components/switch-map-ex/switch-map-ex.component';
import { LazySearchExComponent } from './components/lazy-search-ex/lazy-search-ex.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConcatMapExComponent,
    SwitchMapExComponent,
    LazySearchExComponent
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
