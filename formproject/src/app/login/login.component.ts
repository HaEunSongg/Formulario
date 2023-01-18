import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthDTO } from "src/app/auth.dto";

import {
  Validators,
  FormBuilder,
  FormGroup,
} from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/user/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})

export class LoginComponent implements OnInit {
  loginUser: AuthDTO;

  loginFormUser!: FormGroup
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private userService: UserService
  ) {
    localStorage.clear();
    this.loginUser = new AuthDTO("", "", "", "");
  }

  ngOnInit(): void {
    this.loginFormUser = this.fb.group({
      password: ['', [Validators.required]]
    })
  }

  loginUsuario(): void {
    if (this.loginFormUser.invalid) {
      return;
    }
    this.loginUser = this.loginFormUser.value;
    this.userService.login(this.loginUser).subscribe((res) => {
      console.log(res);
    });

    this.route.navigateByUrl('map')
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

}
