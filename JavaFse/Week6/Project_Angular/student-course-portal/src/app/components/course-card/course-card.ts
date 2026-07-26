import {
Component,
Input
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment';
import { Router } from '@angular/router';

@Component({

selector:'app-course-card',

standalone:true,

imports:[CommonModule],

templateUrl:'./course-card.html',

styleUrl:'./course-card.css'

})

export class CourseCard {

  @Input()
  course: any;

  constructor(
  private enrollmentService: EnrollmentService,
  private router: Router
) {}
  toggleEnrollment(): void {

    if (this.enrollmentService.isEnrolled(this.course.id)) {

      this.enrollmentService.unenroll(this.course.id);

    } else {

      this.enrollmentService.enroll(this.course.id);

    }

  }

  isEnrolled(): boolean {

    return this.enrollmentService.isEnrolled(this.course.id);

  }
goToDetails(): void {

  this.router.navigate([
    '/courses',
    this.course.id
  ]);

}
}
