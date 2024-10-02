import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-admin-bottom-sheet',
  templateUrl: './add-admin-bottom-sheet.component.html',
  styleUrls: ['./add-admin-bottom-sheet.component.scss'],
})
export class AdminBottomSheetComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<AdminBottomSheetComponent>,
  ) {}

  close(): void {
    this.bottomSheetRef.dismiss(); // Close the bottom sheet
  }

}
