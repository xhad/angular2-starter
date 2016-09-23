import { Component } from '@angular/core';

@Component({
  selector: 'FooterComponent',
  styles: [
  `
  .footer {
    padding:10px;
  }
  `
  ],
  template:
    `
    <footer class="footer">
      <h4>Footer</h4>
    </footer>
    `
})

export class FooterComponent {}
