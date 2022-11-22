import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  onSubmit() {
    alert('hi');
    this.backendService.login()
    .subscribe(res=>{
        console.log(res)
    })
  }
//   loginBtn() {
//     alert('hi');
//   }
  constructor(private backendService: BackendService) {}
}
