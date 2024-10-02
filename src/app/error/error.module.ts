import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';


@NgModule({
  declarations: [
    ErrorComponent,
    AccessDeniedComponent,
    PageNotFoundComponent,
    InternalServerErrorComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
})
export class ErrorModule { }
