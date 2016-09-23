import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContentComponent } from './content.component';
import { AppBarComponent } from './appbar.component.ts';
import { MainMenuComponent } from './mainmenu.component.ts';
import { FooterComponent } from './footer.component';
import { ApiService } from './api.service.ts';

@NgModule({
	imports: [BrowserModule],
	declarations: [
		AppComponent,
		ContentComponent,
		AppBarComponent,
		MainMenuComponent,
		FooterComponent
	],
	providers: [ApiService],
	bootstrap: [AppComponent]
})

export class AppModule {}
