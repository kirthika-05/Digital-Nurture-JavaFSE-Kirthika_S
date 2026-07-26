import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { CourseList } from './course-list';

describe('CourseList', () => {

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [CourseList],

      providers: [

        provideRouter([]),

        provideHttpClient()

      ]

    }).compileComponents();

  });

  it('should create', () => {

    const fixture = TestBed.createComponent(CourseList);

    expect(fixture.componentInstance).toBeTruthy();

  });

});