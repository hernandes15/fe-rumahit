import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/service/message.service';
import { RumahItService } from 'src/app/service/rumah-it.service';
@Component({
  selector: 'home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent implements OnInit {
  constructor(
    private router : Router,
    private rumahItService : RumahItService,
    private message : MessageService
  ) { }

  ngOnInit() {
    // document.getElementById('loading').style.display = 'block';
  }
  
  inputPerusahaan(){
    this.router.navigateByUrl(this.router.url.substring(0, this.router.url.indexOf('/home')) + '/input-perusahaan');
  }

  inputTransaksi(){
    this.router.navigateByUrl(this.router.url.substring(0, this.router.url.indexOf('/home')) + '/input-transaksi');
  }

  async csv(){
    
    (await this.rumahItService.csv()).subscribe(
      data =>{
        if(data){
          this.message.setMessage('success','Berhasil Download CSV','SUCCESS');
        }else{
          this.message.setMessage('error','Gagal Download CSV','ERROR');
        }
      },
      err => {
        console.log(err);
        this.message.setMessage('error','Terjadi Kesalahan','ERROR');
      }
    )
  }
}
