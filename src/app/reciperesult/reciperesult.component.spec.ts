import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciperesultComponent } from './reciperesult.component';

describe('ReciperesultComponent', () => {
  let component: ReciperesultComponent;
  let fixture: ComponentFixture<ReciperesultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciperesultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciperesultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
