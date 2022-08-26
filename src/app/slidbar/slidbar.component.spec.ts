import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidbarComponent } from './slidbar.component';

describe('SlidbarComponent', () => {
  let component: SlidbarComponent;
  let fixture: ComponentFixture<SlidbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
