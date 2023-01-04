import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeMotcleComponent } from './list-employe-motcle.component';

describe('ListEmployeMotcleComponent', () => {
  let component: ListEmployeMotcleComponent;
  let fixture: ComponentFixture<ListEmployeMotcleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployeMotcleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmployeMotcleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
