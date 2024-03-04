import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalDateComponent } from './cal-date/cal-date.component';
import { AgePipePipe } from './age-pipe.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, CalDateComponent, AgePipePipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
