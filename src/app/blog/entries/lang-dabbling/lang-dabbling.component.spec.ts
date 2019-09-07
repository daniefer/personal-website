import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangDabblingComponent } from './lang-dabbling.component';

describe('LangDabblingComponent', () => {
  let component: LangDabblingComponent;
  let fixture: ComponentFixture<LangDabblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangDabblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangDabblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
