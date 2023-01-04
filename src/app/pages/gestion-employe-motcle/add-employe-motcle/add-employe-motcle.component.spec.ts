import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeMotcleComponent } from './add-employe-motcle.component';

describe('AddEmployeMotcleComponent', () => {
  let component: AddEmployeMotcleComponent;
  let fixture: ComponentFixture<AddEmployeMotcleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeMotcleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeMotcleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
