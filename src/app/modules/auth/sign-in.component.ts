import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

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
    private fb: FormBuilder
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
  public onSubmit(event: Event): void {
    // Prevent default action
    event.preventDefault();
    // Stop propagation
    event.stopPropagation();

    // TODO: Desconmentar el comido de abajo cuando se implemente el servicio de autenticación
    // Send data of sign in
    console.log(this.signInForm.value);
  }

}
