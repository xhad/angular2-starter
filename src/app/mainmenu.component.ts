import { Component } from '@angular/core';

@Component({
  selector: 'MainMenuComponent',
  styles: [
  `
  .main-menu {
    position: absolute;
    padding: 20px;
    margin: 0;
    height: 5%;
    width: 100%;
    height: 60%;
    background-color: #e9e9e9;
  }
  `],
  template:
  `
  <div class="main-menu">
  MainMenu
  </div>
  `
})

export class MainMenuComponent {}
