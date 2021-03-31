import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //indexte tanıması için
  templateUrl: './app.component.html', //datasını yöneticeği yer
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Batu';
}
