import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBottomSheetComponent } from './add-admin-bottom-sheet.component';

describe('AdminBottomSheetComponent', () => {
  let component: AdminBottomSheetComponent;
  let fixture: ComponentFixture<AdminBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBottomSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
