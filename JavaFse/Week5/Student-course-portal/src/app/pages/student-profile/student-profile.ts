import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile implements OnInit, OnDestroy, DoCheck {
  studentName = 'Kirthika S';
  studentEmail = 'kirthika@gmail.com';
  profileImageUrl = 'https://via.placeholder.com/120';
  isEditing = false;
  isSaveDisabled = false;

  ngOnInit(): void {
    console.log('StudentProfile: ngOnInit called - component initialized');
  }

  ngDoCheck(): void {
    console.log('StudentProfile: ngDoCheck called - change detection ran');
  }

  ngOnDestroy(): void {
    console.log('StudentProfile: ngOnDestroy called - component destroyed');
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
    console.log('StudentProfile: toggleEdit called, isEditing =', this.isEditing);
  }

  saveProfile(): void {
    this.isSaveDisabled = true;
    console.log('StudentProfile: Profile saved', this.studentName, this.studentEmail);
    this.isEditing = false;
    this.isSaveDisabled = false;
  }
}