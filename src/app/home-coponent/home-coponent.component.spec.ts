import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCoponentComponent } from './home-coponent.component';

describe('HomeCoponentComponent', () => {
  let component: HomeCoponentComponent;
  let fixture: ComponentFixture<HomeCoponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCoponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCoponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
