import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingABlogComponent } from './building-a-blog.component';

describe('BuildingABlogComponent', () => {
  let component: BuildingABlogComponent;
  let fixture: ComponentFixture<BuildingABlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingABlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingABlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
