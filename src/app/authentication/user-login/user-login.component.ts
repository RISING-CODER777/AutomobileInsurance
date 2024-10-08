import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordDialogComponent } from '../forgot-password-dialog/forgot-password-dialog.component'; // Adjust the path as needed

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog // Inject MatDialog
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    const username = this.loginForm.get('username')?.value;
    const passwordHash = this.loginForm.get('password')?.value;

    if (username && passwordHash) {
      this.authService.login(username, passwordHash).subscribe({
        next: (response: any) => {
          if (response && response.token) {
            this.authService.setToken(response.token);
            this.router.navigate(['']);
          } else {
            this.openDialog("Invalid username or password"); // Show dialog on invalid response
          }
        },
        error: (error: any) => {
          this.openDialog("Invalid username or password"); // Show dialog on error
        },
        complete: () => {
          console.log('Request completed');
        }
      });
    } else {
      this.openDialog("Please fill in all fields"); // Show dialog on empty form
    }
  }

  openDialog(message: string): void {
    this.dialog.open(ForgotPasswordDialogComponent, {
      data: { message } // Pass message to dialog
    });
  }

  hide = true;
}
