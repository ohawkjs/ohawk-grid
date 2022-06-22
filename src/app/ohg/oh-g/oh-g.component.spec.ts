import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhGComponent } from './oh-g.component';

describe('OhGComponent', () => {
  let component: OhGComponent;
  let fixture: ComponentFixture<OhGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OhGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
