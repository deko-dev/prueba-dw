import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationTypeItem } from 'src/app/utils/general-interfaces';
import { Navigation } from 'src/app/utils/navigation/data';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Constant for version app
  public readonly version: string  = environment.version;
  
  // Constant for save the navigation items
  public readonly sidenavItems: NavigationTypeItem[] = Navigation;

  // Variable for sabe the current path
  public currentPath: any;

  constructor(
    private _router: Router,
    private _aRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // Save the current path
    this.currentPath = this.getCurrentPath();
  } 

  /**
   * Method for get the current path
   */
  public getCurrentPath(): string {
    return this._aRoute.snapshot.children[0].url[0].path
  }

  /**
   * Method for redirect to the page
   * 
   * @param path: String
   * @return void
   */
  public onRedirectTo(path: string): void {
    // Validate if the path is not empty
    if(path.length === 0){
      return;
    }
    // Validate if current path is the same of the path
    if(this.currentPath === path){
      return;
    }
    // Redirect to the path
    this._router.navigateByUrl(`dashboard/${path}`);
    // Save the current path
    this.currentPath = path;
    this.changeDetector.markForCheck();
  }

  /**
   * Method for back to the previous page
   * @return void
   */
  public onBackPage(): void {
    window.history.back();
  }

  /**
   * Method for logout user
   */
  public onLogout(): void {
    // Remove the token of local storage
    localStorage.removeItem('token');
    // Remove the expire time of local storage
    localStorage.removeItem('expire_in');
    // Remove data user of local storage
    localStorage.removeItem('user');
    // Redirect to the login page
    this._router.navigateByUrl('/auth/sign-in');
  }
}
