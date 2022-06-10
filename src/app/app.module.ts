import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AntdModule } from './modules/antd/antd.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { OdCardComponent } from './components/od-card/od-card.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, OdCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AntdModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
