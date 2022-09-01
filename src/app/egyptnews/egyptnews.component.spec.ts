import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgyptnewsComponent } from './egyptnews.component';

describe('EgyptnewsComponent', () => {
  let component: EgyptnewsComponent;
  let fixture: ComponentFixture<EgyptnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgyptnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EgyptnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
