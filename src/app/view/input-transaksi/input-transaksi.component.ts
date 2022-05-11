import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';
import { RumahItService } from 'src/app/service/rumah-it.service';

@Component({
  selector: 'input-transaksi',
  templateUrl: './input-transaksi.component.html',
  styleUrls: ['./input-transaksi.component.css']
})
export class InputTransaksiComponent implements OnInit {
  transaksiForm : any;
  list_perusahaan: any[] = [];
  list_barang: any[] = [];
  constructor(
    private fb: FormBuilder,
    private router : Router,
    private message : MessageService,
    private activatedRoute : ActivatedRoute,
    private rumahItService : RumahItService
  ) { }

  ngOnInit() {
    document.getElementById('loading').style.display = 'block';
    this.createForm();
    this.setCompany();
    this.setBarang();
  }

  createForm() {
    this.transaksiForm = this.fb.group({
      idCompany: new FormControl('', Validators.required),
      idBarang: new FormControl('', Validators.required),
      totalBarang: new FormControl('', Validators.required)
    })
  }

  async setCompany(){
    (await this.rumahItService.getCompany()).subscribe(
      data => {
        this.list_perusahaan = [];
        let procs = data;
        if (procs){
          for (const key in procs) {
            this.list_perusahaan.push({ label: procs[key]['nama'], value: procs[key]['id'] });
          }
        }
        document.getElementById('loading').style.display = 'none';
      },
      err => {
        this.message.setMessage('error', 'Terjadi Kesalahan', 'ERROR');
        document.getElementById('loading').style.display = 'none';
      }
    );


  }

  async setBarang(){
    (await this.rumahItService.getBarang()).subscribe(
      data => {
        this.list_barang = [];
        let procs = data;
        if (procs){
          for (const key in procs) {
            this.list_barang.push({ label: procs[key]['nama'], value: procs[key]['id'] });
          }
        }
        document.getElementById('loading').style.display = 'none';
      },
      err => {
        this.message.setMessage('error', 'Terjadi Kesalahan', 'ERROR');
        document.getElementById('loading').style.display = 'none';
      }
    );


  }
  
  async save(){
    (await this.rumahItService.saveTrans(this.transaksiForm.value)).subscribe(
      data =>{
        if(data){
          this.router.navigateByUrl(this.router.url.substring(0, this.router.url.indexOf('/input-transaksi')) + '/home');
          this.message.setMessage('success','Data Transaksi Berhasil disimpan','SUCCESS');
        }else{
          this.message.setMessage('error','Gagal Save Transaksi','ERROR');
        }
      },
      err => {
        this.message.setMessage('error','Terjadi Kesalahan','ERROR');
      }
    )
  }

  cancel(){
    this.router.navigateByUrl(this.router.url.substring(0, this.router.url.indexOf('/input-transaksi')) + '/home');
  }
}
