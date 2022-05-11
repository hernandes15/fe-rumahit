import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';
import { RumahItService } from 'src/app/service/rumah-it.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : any;
  constructor(
    private fb: FormBuilder,
    private router : Router,
    private message : MessageService,
    private activatedRoute : ActivatedRoute,
    private rumahItService : RumahItService
  ) { }

  ngOnInit() {
    // document.getElementById('loading').style.display = 'block';
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  
  async login(){

    (await this.rumahItService.login(this.loginForm.value)).subscribe(
      data =>{
        if(data){
          this.router.navigateByUrl(this.router.url + '/home');
        }else{
          this.message.setMessage('error','Username tidak ditemukan','ERROR');
        }
      },
      err => {
        this.message.setMessage('error','Terjadi Kesalahan','ERROR');
      }
    )
    
  }

}
