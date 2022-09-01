import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsadetComponent } from './usadet.component';

describe('UsadetComponent', () => {
  let component: UsadetComponent;
  let fixture: ComponentFixture<UsadetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsadetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsadetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
