import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  // Version of app
  public readonly version: string = environment.version;

  // Form for sign in
  signInForm!: FormGroup;
    
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialize form
    this.initForm();
  }

  /**
   * Method for initialize the form
   */
  public initForm(): void {
    this.signInForm = this.fb.group({
      email: ['', Validators.compose(
        [Validators.email, Validators.required]
      )],
      password: ['', Validators.required]
    })
  }

  /**
   * Method for get form field
   * 
   * @param field
   * @returns AbstractControl
   */
  public formField(field: any): AbstractControl | null{
    return this.signInForm.get(field);
  }

  /**
   * Method for submit the form
   * @param event
   * @returns void
   */
  public async onSubmit(event: Event): Promise<any> {
    // Prevent default action
    event.preventDefault();
    // Stop propagation
    event.stopPropagation();

    // Send data of sign in
    try {
      // Send login
      const responseLogin = await this.authService.login(this.signInForm.value);
      // Save token in local storage
      localStorage.setItem('token', responseLogin.token);
      // Save expiration date in local storage
      localStorage.setItem('expire_in', responseLogin.expire_in);
      // Save user in local storage
      // localStorage.setItem('user', JSON.stringify(responseLogin.user));
      // Redirect to dashboard
      this.router.navigateByUrl('dashboard/roles');
    } catch (error) {
      
    }
  }

}
