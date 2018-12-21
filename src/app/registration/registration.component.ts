import { OnInit, Component } from "@angular/core";
import { User } from '../models/user.model';
import { MatCardModule, MatInputModule } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(private fb: FormBuilder,
    private myroute: Router,
    private obj: AuthService,
    private router: Router,) { }
  
  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword: ['', Validators.required]
    });
  }

  register() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.obj.savereg(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {this.myroute.navigate(['/login']);
        })
  }
}