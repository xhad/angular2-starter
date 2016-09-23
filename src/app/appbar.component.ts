import { Component } from '@angular/core';

@Component({
	selector: 'AppBarComponent',
	styles: [
	`
	.app-bar {
		background-color: #eee;
	}

	`],
	template: 
	`
	<header class="row app-bar">
		<div class="col-xs-4">
			{{ title }}
		</div>
	</header>
	`
})

export class AppBarComponent {
	title = 'Python Course';
}