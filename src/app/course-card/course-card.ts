import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {
  @Input() courseName: string = '';
  @Input() teacher: string = '';

  @Output() enroll = new EventEmitter<void>();

  enrollCourse() {
    this.enroll.emit();
  }
}