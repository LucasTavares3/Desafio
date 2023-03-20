import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacaletrasComponent } from './cacaletras.component';

describe('CacaletrasComponent', () => {
  let component: CacaletrasComponent;
  let fixture: ComponentFixture<CacaletrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CacaletrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CacaletrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
