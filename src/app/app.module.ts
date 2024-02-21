import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatasetComponent } from './components/dataset/dataset.component';
import { UploadComponent } from './components/upload/upload.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AppComponent, DatasetComponent, UploadComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
