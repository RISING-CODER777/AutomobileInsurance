import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ClaimsApprovalComponent } from './claims-approval/claims-approval.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewApprovalComponent } from './new-approval/new-approval.component';
import { AdminBottomSheetComponent } from './templates/add-admin-bottom-sheet/add-admin-bottom-sheet.component';
import { ClaimsApprovalBottomSheetComponent } from './templates/claims-approval-bottom-sheet/claims-approval-bottom-sheet.component';
import { NewApprovalBottomSheetComponent } from './templates/new-approval-bottom-sheet/new-approval-bottom-sheet.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AdminOptionsComponent } from './admin-options/admin-options.component';
import { AdminPlansComponent } from './admin-plans/admin-plans.component';
import { AddAdminDialogComponent } from './templates/add-admin-dialog/add-admin-dialog.component';
import { ConfirmDialogComponent } from './templates/confirm-dialog/confirm-dialog.component';
import { EditAdminDialogComponent } from './templates/edit-admin-dialog/edit-admin-dialog.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    NewApprovalComponent,
    ClaimsApprovalComponent,
    NewApprovalBottomSheetComponent,
    ClaimsApprovalBottomSheetComponent,
    AdminBottomSheetComponent,
    AdminOptionsComponent,
    AdminPlansComponent,
    AddAdminComponent,
    AddAdminDialogComponent,
    EditAdminDialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxChartsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatGridListModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBottomSheetModule,
    MatInputModule
  ],
  providers: [],
})
export class AdminModule { }
