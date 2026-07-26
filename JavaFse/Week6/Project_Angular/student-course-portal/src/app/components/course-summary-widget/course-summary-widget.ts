import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-summary-widget.html',
  styleUrl: './course-summary-widget.css'
})
export class CourseSummaryWidget implements OnInit {

  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {

    this.loadCourses();

  }

  loadCourses(): void {

    this.courseService.getCourses().subscribe({

      next: (courses: Course[]) => {

        this.courses = courses;

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  addSampleCourse(): void {

    const newCourse = {

      name: 'AI Fundamentals',

      code: 'AI601',

      credits: 3,

      gradeStatus: 'pending' as const

    };

    this.courseService.createCourse(newCourse).subscribe({

      next: () => {

        this.loadCourses();

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

}