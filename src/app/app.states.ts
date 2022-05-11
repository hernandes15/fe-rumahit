import { Routes } from '@angular/router';
import { HomeMenuComponent } from './view/home-menu/home-menu.component';
import { InputPerusahaanComponent } from './view/input-perusahaan/input-perusahaan.component';
import { InputTransaksiComponent } from './view/input-transaksi/input-transaksi.component';
import { LoginComponent } from './view/login/login.component';


export const appStates : Routes = [ 
  { path: '', component:LoginComponent },
  { path: 'home', component:HomeMenuComponent },
  { path: 'input-perusahaan', component:InputPerusahaanComponent },
  { path: 'input-transaksi', component:InputTransaksiComponent }
]