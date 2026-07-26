import { TestBed } from '@angular/core/testing';

import { CourseCard } from './course-card';

describe('CourseCard', () => {

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [CourseCard]

    }).compileComponents();

  });

  it('should create', () => {

    const fixture = TestBed.createComponent(CourseCard);

    expect(fixture.componentInstance).toBeTruthy();

  });

});