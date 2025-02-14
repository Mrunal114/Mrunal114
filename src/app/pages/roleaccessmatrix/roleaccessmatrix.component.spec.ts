import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleaccessmatrixComponent } from './roleaccessmatrix.component';

describe('RoleaccessmatrixComponent', () => {
  let component: RoleaccessmatrixComponent;
  let fixture: ComponentFixture<RoleaccessmatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleaccessmatrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoleaccessmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
