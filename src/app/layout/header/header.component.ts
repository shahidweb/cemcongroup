import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'CEMCON GROUP';
  navbar: any = [
    { type: 'text', path: '/', name: 'Home', },
    { type: 'text', path: 'about', name: 'About us' },
    { type: 'text', path: 'product', name: 'Product' },
    { type: 'text', path: 'career', name: 'Career' },
    { type: 'text', path: 'contact', name: 'Contact' },
    { type: 'btn', path: 'contact', name: 'Request Quote' },
  ]

}
