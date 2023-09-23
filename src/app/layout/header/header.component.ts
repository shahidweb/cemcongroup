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
    { type: 'text', path: '/', name: 'About us', },
    {
      type: 'text', path: '/', name: 'Product', subMenu: [
        { path: '/', name: 'Track Fitting' },
        { path: '/', name: 'Carriage and Wagon Stock' },
      ]
    },
    { type: 'text', path: '/', name: 'Career', },
    { type: 'text', path: '/', name: 'Contact', },
    { type: 'btn', path: '/', name: 'Request Quote', },
  ]

}
