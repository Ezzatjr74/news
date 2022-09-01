import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgydetComponent } from './egydet.component';

describe('EgydetComponent', () => {
  let component: EgydetComponent;
  let fixture: ComponentFixture<EgydetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgydetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgydetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
