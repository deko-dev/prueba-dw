import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationTypeItem } from 'src/app/utils/general-interfaces';
import { Navigation } from 'src/app/utils/navigation/data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Constant for save the navigation items
  public readonly sidenavItems: NavigationTypeItem[] = Navigation;

  // Variable for sabe the current path
  public currentPath: any = this._aRoute.snapshot.children[0].url[0].path;

  constructor(
    private _router: Router,
    private _aRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.currentPath);
  } 


  /**
   * Method for redirect to the page
   * 
   * @param path: String
   * @return void
   */
  public onRedirectTo(path: string): void {
    // TODO: Testing
    console.log(path);
    // Validate if the path is not empty
    if(path.length === 0){
      return;
    }

    // Redirect to the path
    // this._router.navigateByUrl(path);
  }

}
