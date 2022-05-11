import { FormArray, FormControl } from "@angular/forms";

export function noWhitespaceValidator(control: FormControl) {
    let isWhitespace = false;
    if (typeof control.value === 'object') {
      isWhitespace = (control.value['value'] || '').trim().length === 0 || (control.value).startsWith(" ", 0);
    } else if (typeof control.value === 'string') {
      isWhitespace = (control.value || '').trim().length === 0 || (control.value).startsWith(" ", 0);
    }

    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}

export function noZero(control: FormControl) {
    let isZero = false;
    if (typeof control.value === 'object') {
      isZero = (control.value['value'] || '').trim().startsWith("0", 0);
    } else if (typeof control.value === 'string') {
      isZero = (control.value || '').trim().startsWith("0", 0);
    }

    const isValid = !isZero;
    return isValid ? null : { 'zero': true };
}

export function noString(control: FormControl) {
    let isString = false;

    isString = typeof control.value === 'string' && control.value !== '';

    const isValid = !isString;
    return isValid ? null : { 'isString': true };
}

export function alphaNumeric(control: FormControl) {
    let isAlphaNumeric = false;

    isAlphaNumeric = !(control.value || '').trim().match(/^[0-9a-z]+$/) && !((control.value || '').trim() == '');

    const isValid = !isAlphaNumeric;
    return isValid ? null : { 'alphaNumeric': true };
}

export function alphaNumericUnderscoreNoSpace(control: FormControl) {
  let isAlphaNumericUnderscoreNoSpace = false;

  isAlphaNumericUnderscoreNoSpace = !(control.value || '').trim().match(/^[a-zA-Z]+[a-zA-Z0-9]*(?:[_][a-zA-Z0-9]+)*$/) || (control.value as string).indexOf(' ') >= 0;

  const isValid = !isAlphaNumericUnderscoreNoSpace;
  return isValid ? null : { 'alphaNumericUnderscoreNoSpace': true };
}

export function email(control: FormControl) {
  let isEmail = false;

  isEmail = !(control.value || '').trim().match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) && !((control.value || '').trim() == '');

  const isValid = !isEmail;
  return isValid ? null : { 'isEmail': true };
}

export function alphabet(control: FormControl) {
  let isAlphabet = false;

  isAlphabet = (((control.value || '').trim().startsWith('\''))
  || !(control.value || '').trim().match(/^[a-zA-Z' ]+$/))
  && !((control.value || '').trim() == '');

  const isValid = !isAlphabet;
  return isValid ? null : { 'alphabet': true };
}

export function greaterThanOrEqualsZero(control: FormControl) {
  let greaterThanOrEqualsZero = false;

  if (control.value == null) {
    return;
  }

  greaterThanOrEqualsZero = parseInt(control.value) < 0;

  const isValid = !greaterThanOrEqualsZero;
  return isValid ? null : { 'greaterThanOrEqualsZero': true };
}

export function _keyUpNumber(event: any) {
  const pattern = /[0-9\+\-\ ]/;
  let inputChar = String.fromCharCode(event.key);

  if (!pattern.test(inputChar)) {
    // invalid character, prevent input
    event.preventDefault();
  }
}

export function _keyUpAlphaNumeric(event: any) {
  const pattern = /^[0-9a-z]+$/;
  let inputChar = String.fromCharCode(event.key);

  if (!pattern.test(inputChar)) {
    // invalid character, prevent input
    event.preventDefault();
  }
}
export function isNameExistFormArray() { //Collateral
  return (formArray: FormArray) => {
    let valid: boolean = true;
    formArray.value.forEach((x, index) => {
      if (formArray.value.findIndex(y => y.name == x.name) != index)
        valid = false;
    });
    return valid ? null : { duplicate: true };
  };
}
export function isNameExist (index){ // Collateral
  return (formControl: FormControl) => {
    let valid: boolean = true;
    if (index) {
      const formArray =
        formControl.parent && formControl.parent.parent
          ? (formControl.parent.parent as FormArray)
          : null;
      if (formArray) {
        console.log(formControl.value);
        formArray.value.forEach((x, i) => {
          if(x.name == formControl.value && index < i) valid = false;
          else if (x.name == formControl.value && index > i) valid = false;
        });
      }
    }
    return valid ? null : { duplicate: true };
  };
}
