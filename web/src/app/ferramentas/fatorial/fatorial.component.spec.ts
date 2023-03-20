import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatorialComponent } from './fatorial.component';

describe('FatorialComponent', () => {
  let component: FatorialComponent;
  let fixture: ComponentFixture<FatorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FatorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
