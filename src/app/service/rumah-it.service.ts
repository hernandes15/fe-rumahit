import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RumahItService {

  private global = 'http://localhost:8082';
  private urlLogin = this.global + '/login';
  private urlCsv = this.global + '/csv';
  private urlCom = this.global + '/save-company';
  private urlTrans = this.global + '/save-transaksi';
  private urlGetCom = this.global + '/find-company';
  private urlGetBarang = this.global + '/find-barang';
  
  constructor(private http: HttpClient) { }

  public login (body : any){

    const header = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }

    return this.http.post(this.urlLogin, body, header);
  }

  public saveCompany (body : any){

    const header = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }

    return this.http.post(this.urlCom, body, header);
  }

  public saveTrans (body : any){

    const header = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }

    return this.http.post(this.urlTrans, body, header);
  }

  public getCompany (){
    return this.http.get(this.urlGetCom);
  }

  public getBarang (){
    return this.http.get(this.urlGetBarang);
  }

  public csv (){
    return this.http.get(this.urlCsv);
  }

}
