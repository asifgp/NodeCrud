import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssertFormComponent } from './add-assert-form.component';

describe('AddAssertFormComponent', () => {
  let component: AddAssertFormComponent;
  let fixture: ComponentFixture<AddAssertFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssertFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
