import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostpwComponent } from './lostpw.component';

describe('LostpwComponent', () => {
  let component: LostpwComponent;
  let fixture: ComponentFixture<LostpwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostpwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostpwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
