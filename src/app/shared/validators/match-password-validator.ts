import { FormGroup, ValidatorFn } from "@angular/forms"

// export function matchPasswordValidator(passOneValue: string, passTwoValue: string): ValidatorFn {

//     return (control) => {
//         let passGroup = control as FormGroup
//         let passOne = passGroup.get(passOneValue)
//         let passTwo = passGroup.get(passTwoValue)
//         return passOne?.value === passTwo?.value ? null : { matchPasswordValidator: true }
//     }

// }