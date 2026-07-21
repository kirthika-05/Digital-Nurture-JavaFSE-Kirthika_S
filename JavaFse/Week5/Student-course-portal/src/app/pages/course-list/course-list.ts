import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  isLoading = true;

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'ANG101',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java',
      code: 'JAVA201',
      credits: 4,
      gradeStatus: 'pending'
    },
    {
      id: 3,
      name: 'Python',
      code: 'PY301',
      credits: 2,
      gradeStatus: 'failed'
    }
  ];

  ngOnInit(): void {

    setTimeout(() => {

      this.isLoading = false;

    },1500);

  }

  // trackBy improves performance by allowing Angular
  // to reuse existing DOM elements instead of recreating them.
  trackByCourseId(index:number,course:any){

    return course.id;

  }

}