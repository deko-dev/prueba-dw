import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'prueba';
  themeDark: boolean = false;
  private  readonly mql = window.matchMedia('(prefers-color-scheme: dark)');
  constructor() {
    this.mql.matches && this.setTheme();
  }

  ngOnInit() {
    this.mql.onchange = () => this.setTheme();
  }

  setTheme(){
    document.body.classList.toggle('dark');
    this.themeDark = !this.themeDark;
    document.querySelector('#imgTheme')?.classList.toggle('dark');
  }
}
