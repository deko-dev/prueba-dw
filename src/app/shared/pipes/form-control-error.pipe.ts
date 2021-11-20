import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { MessagesErrors } from 'src/app/utils/form-validations';

@Pipe({
  name: 'formControlError'
})
export class FormControlErrorPipe implements PipeTransform {

  /**
   * Handler error pipe
   * @param field (required)
   * @param lang (optional; default = 'es')
   * @returns message
   */
  transform(field: ValidationErrors | null | undefined): String {
    try {
        if (field) {
            // Get first error
            let error = Object.keys(field)[0];
            // validate if exist min length error
            if (error === 'minlength') {
                let length = field['minlength']['requiredLength'];
                return `${MessagesErrors[error]['es']}: ${length}`;
            }
            // validate if exist max length error
            if (error === 'maxlength') {
                let length = field['maxlength']['requiredLength'];
                return `${MessagesErrors[error]['es']}: ${length}`;
            }
            // message
            return MessagesErrors[error]['es'];
        } else {
            return '';
        }
    } catch (error) {
        return `Error de campo detectado`;
    }
  }

}
