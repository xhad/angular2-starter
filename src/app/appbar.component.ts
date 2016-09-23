import { Component } from '@angular/core';

@Component({
	selector: 'AppBarComponent',
	styles: [
	`
	.app-bar {
		background-color: #ddd;
		padding: 10px;
	}

	`],
	template:
	`
	<header class="row middle-xs app-bar">
		<div class="col-xs-4 middle title">
		{{ title }} {{ menuView }}
		</div>
		<div class="col-xs-4">
		</div>
		<div class="col-xs-4 end-xs">
			<button (click)="toggleMenu()" class="material-icons">menu</button>
		</div>
	</header>
	<MainMenuComponent [(hidden)]="hideMenu"></MainMenuComponent>
	`
})

export class AppBarComponent {
	title = 'Angular Starter';
	hideMenu = true;

	toggleMenu() {
		if(this.hideMenu)
			this.hideMenu = false;
	  else
			this.hideMenu = true;
		}
}
