import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba';

  setTheme(theme: string){
    window.matchMedia('(prefers-color-scheme: dark)').matches ? theme = 'dark' : theme = 'light';
    console.log(theme);
  }
}
