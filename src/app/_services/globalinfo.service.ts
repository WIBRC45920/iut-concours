import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {EtudiantModel} from "../_models/etudiant.model";
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalinfoService {

 private url = 'http://192.168.137.166:8080/';
 private idUser!: number;

  constructor(private  http: HttpClient) { }

  getApiUrl(): string{
    return this.url;
  }

  getIdUser(){
    return this.idUser;
  }

  setidUder(id: number){
    this.idUser = id;
  }
  getUserByID(): Observable<any>{
    // console.log(this.getIdUser());
    return this.http.get<EtudiantModel>(this.getApiUrl() + 'etudiants/' + this.idUser , { observe: "body" })
    .pipe(
      retry(2)
    );
  }
}
