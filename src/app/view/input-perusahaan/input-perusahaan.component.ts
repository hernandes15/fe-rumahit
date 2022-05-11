import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'src/app/service/message.service';
import { RumahItService } from 'src/app/service/rumah-it.service';

@Component({
  selector: 'input-perusahaan',
  templateUrl: './input-perusahaan.component.html',
  styleUrls: ['./input-perusahaan.component.css']
})
export class InputPerusahaanComponent implements OnInit {
  perusahaanForm : any;
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
    this.perusahaanForm = this.fb.group({
      kode: new FormControl('', Validators.required),
      nama: new FormControl('', Validators.required)
    })
  }
  
  async save(){
    (await this.rumahItService.saveCompany(this.perusahaanForm.value)).subscribe(
      data =>{
        if(data){
          this.router.navigateByUrl(this.router.url.substring(0, this.router.url.indexOf('/input-perusahaan')) + '/home');
          this.message.setMessage('success','Data Perusahaan Berhasil disimpan','SUCCESS');
        }else{
          this.message.setMessage('error','Gagal Save Perusahaan','ERROR');
        }
      },
      err => {
        this.message.setMessage('error','Terjadi Kesalahan','ERROR');
      }
    )
  }

  

  cancel(){
    this.router.navigateByUrl(this.router.url.substring(0, this.router.url.indexOf('/input-perusahaan')) + '/home');
  }
}
