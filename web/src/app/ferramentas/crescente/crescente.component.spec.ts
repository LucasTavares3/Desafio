import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrescenteComponent } from './crescente.component';

describe('CrescenteComponent', () => {
  let component: CrescenteComponent;
  let fixture: ComponentFixture<CrescenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrescenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrescenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
