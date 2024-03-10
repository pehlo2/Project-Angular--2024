import { ValidatorFn } from "@angular/forms";

export function appEmailValidator(): ValidatorFn {
  const regExp = new RegExp(`[\\w.\\-+]{6,}@[\\w\\-.]+\.[\\w\\-]+$`);

  return (control) => {
    return control.value === "" || regExp.test(control.value)
      ? null
      : { appEmailValidator: true };
  };
}