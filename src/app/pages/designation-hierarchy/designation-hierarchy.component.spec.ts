import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationHierarchyComponent } from './designation-hierarchy.component';

describe('DesignationHierarchyComponent', () => {
  let component: DesignationHierarchyComponent;
  let fixture: ComponentFixture<DesignationHierarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignationHierarchyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignationHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
