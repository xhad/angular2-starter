import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AppBarComponent } from './appbar.component.ts';

@NgModule({
	imports: [BrowserModule],
	declarations: [
		AppComponent, 
		CoursesComponent, 
		AppBarComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule {}