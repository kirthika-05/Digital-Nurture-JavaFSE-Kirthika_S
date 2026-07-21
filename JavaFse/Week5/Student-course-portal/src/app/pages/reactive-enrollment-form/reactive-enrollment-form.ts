import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormArray,
  FormControl
} from '@angular/forms';
function noCourseCode(control: AbstractControl): ValidationErrors | null {

  const value = control.value;

  if (value && value.toString().startsWith('XX')) {

    return {
      noCourseCode: true
    };

  }

  return null;

}
function simulateEmailCheck(
  control: AbstractControl
): Promise<ValidationErrors | null> {

  return new Promise((resolve) => {

    setTimeout(() => {

      if (control.value?.includes('test@')) {

        resolve({
          emailTaken: true
        });

      } else {

        resolve(null);

      }

    }, 800);

  });

}

@Component({

selector:'app-reactive-enrollment-form',

standalone:true,

imports:[
CommonModule,
ReactiveFormsModule
],

templateUrl:'./reactive-enrollment-form.html',

styleUrl:'./reactive-enrollment-form.css'

})

export class ReactiveEnrollmentForm implements OnInit{

enrollForm!:FormGroup;

constructor(private fb:FormBuilder){}

ngOnInit(){
   

this.enrollForm=this.fb.group({

studentName:[
'',
[
Validators.required,
Validators.minLength(3)
]
],

studentEmail:[

'',

[
Validators.required,
Validators.email
],

[
simulateEmailCheck
]

],

courseId: [

  null,

  [
    Validators.required,
    noCourseCode
  ]

],

preferredSemester:[
'Odd',
Validators.required
],

agreeToTerms:[
false,
Validators.requiredTrue
],

additionalCourses:this.fb.array([])

});

}
get additionalCourses(): FormArray<FormControl> {

  return this.enrollForm.get(
    'additionalCourses'
  ) as FormArray<FormControl>;

}
onSubmit(){

console.log(this.enrollForm.value);

console.log(this.enrollForm.getRawValue());

}
addCourse(): void {

  this.additionalCourses.push(
    new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  );

}

removeCourse(index:number){

  this.additionalCourses.removeAt(index);

}
/*
value
Returns enabled controls only.

getRawValue()
Returns all controls including disabled controls.
*/

}