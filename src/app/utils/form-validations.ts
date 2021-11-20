/**
 * Type for ValidationErrors
 *
 */
export type ValidationErrors = {
    [key: string]: string;
};

/**
 * Constant for messages errors
 */
export const MessagesErrors: any = {
    required: {
        en: 'Required field',
        es: 'Campo requerido',
    },
    minlength: {
        en: 'Required minimum length',
        es: 'Tamaño mínimo requerido',
    },
    maxlength: {
        en: 'Required maximum length',
        es: 'Tamaño máximo requerido',
    },
    email: {
        en: 'Please enter correct email',
        es: 'Ingrese una direccion de correo valida',
    },
    noStrongPassword: {
        en: 'No strong password',
        es: 'La contraseña no cumple las politicas de seguridad',
    },
    passwordsNotMatch: {
        en: 'unequal password',
        es: 'Contraseñas desiguales',
    },
};
