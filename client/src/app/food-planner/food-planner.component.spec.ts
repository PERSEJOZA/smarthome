import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FoodPlannerComponent } from "./food-planner.component";

describe("FoodPlannerComponent", () => {
  let component: FoodPlannerComponent;
  let fixture: ComponentFixture<FoodPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FoodPlannerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
