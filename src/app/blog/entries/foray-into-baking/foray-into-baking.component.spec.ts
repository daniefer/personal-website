import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForayIntoBakingComponent } from './foray-into-baking.component';

describe('ForayIntoBakingComponent', () => {
  let component: ForayIntoBakingComponent;
  let fixture: ComponentFixture<ForayIntoBakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForayIntoBakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForayIntoBakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
