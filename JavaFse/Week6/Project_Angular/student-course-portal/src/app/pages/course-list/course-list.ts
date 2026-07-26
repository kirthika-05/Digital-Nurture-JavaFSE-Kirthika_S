import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports:[

CommonModule,

CourseCard,

FormsModule

],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {
errorMessage = '';
  isLoading = true;
 searchTerm = '';
  courses: Course[] = [];

constructor(

private courseService: CourseService,

private router: Router,

private route: ActivatedRoute

) {}
  ngOnInit(): void {

  this.courseService.getCourses().subscribe({

next:(courses)=>{

this.courses=courses;

},

error:(err)=>{

this.errorMessage=err.message;

this.isLoading=false;

},

complete:()=>{

this.isLoading=false;

}

});

}

  // trackBy improves performance by allowing Angular
  // to reuse existing DOM elements instead of recreating them.
  trackByCourseId(index:number,course:any){

    return course.id;

  }

  updateSearch(): void {

this.router.navigate(

['/courses'],

{

queryParams:{

search:this.searchTerm

}

}

);

}

}