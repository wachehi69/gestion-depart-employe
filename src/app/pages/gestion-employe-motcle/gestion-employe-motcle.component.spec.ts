import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEmployeMotcleComponent } from './gestion-employe-motcle.component';

describe('GestionEmployeMotcleComponent', () => {
  let component: GestionEmployeMotcleComponent;
  let fixture: ComponentFixture<GestionEmployeMotcleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEmployeMotcleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEmployeMotcleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
