import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { CourseDetail } from './course-detail';

describe('CourseDetail', () => {

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [CourseDetail],

      providers: [

        provideRouter([]),

        provideHttpClient(),

        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1'
              }
            }
          }
        }

      ]

    }).compileComponents();

  });

  it('should create', () => {

    const fixture = TestBed.createComponent(CourseDetail);

    expect(fixture.componentInstance).toBeTruthy();

  });

});