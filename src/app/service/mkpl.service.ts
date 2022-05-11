import { Injectable, Optional, Inject } from '@angular/core';
import { api, k } from '../const/variable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { Marketplace } from '../models/marketplace.model';

@Injectable({
  providedIn: 'root'
})

export class MkplService {
  private _refresh$ = new Subject<void>();

  constructor(
    private http: HttpClient,
    @Optional() @Inject('auth') private authService: any,
    @Optional() @Inject('config') private configService: any
  ) { }

  get refreshNeeded$() {
    return this._refresh$;
  }

  async createMarketPlace(body: Marketplace) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authService.getAccessToken()
      })
    };

    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(body), k);
    return this.http.post(await this.configService.getConfig('url') + api[8] + '/marketplace', ciphertext.toString(), header);
  }

  async updateMarketPlace(body: Marketplace, uuid: string) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authService.getAccessToken()
      })
    };

    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(body), k);
    return this.http.put(await this.configService.getConfig('url') + api[8] + '/marketplace/' + uuid, ciphertext.toString(), header);
  }

  async getMarketList() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authService.getAccessToken()
      })
    };

    return this.http.get(await this.configService.getConfig('url') + api[8] + '/marketplace', header);
  }

  async getDetailByUuid(uuid: string) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authService.getAccessToken()
      })
    };

    return this.http.get(await this.configService.getConfig('url') + api[8] + '/marketplace/' + uuid, header);
  }

  async getUserDetail(user_uuid: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authService.getAccessToken()
      })
    };
    return this.http.get(await this.configService.getConfig('url') + api[2] + '/user/' + user_uuid, httpOptions);
  }

}
