import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeMotcleComponent } from './edit-employe-motcle.component';

describe('EditEmployeMotcleComponent', () => {
  let component: EditEmployeMotcleComponent;
  let fixture: ComponentFixture<EditEmployeMotcleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeMotcleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmployeMotcleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
