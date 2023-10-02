import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeReadComponent } from './recipe-read.component';

describe('RecipeReadComponent', () => {
  let component: RecipeReadComponent;
  let fixture: ComponentFixture<RecipeReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
