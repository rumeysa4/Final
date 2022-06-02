import { Sonuc } from './../models/Sonuc';
import { Ders } from './../models/Ders';
import { Ogrenci } from './../models/Ogrenci';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kayit } from '../models/kayit';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = "http://localhost:60510/api/";

constructor(
  public http: HttpClient
) { }
 
 OgreciListe(){
   return this.http.get<Ogrenci[]>( this.apiUrl+"ogrenciliste"); 
 }
 OgrenciById(ogrId:string){
  return this.http.get(this.apiUrl+"ogrencibyid/" +ogrId); 
 }
 OgrenciEkle(ogr:Ogrenci){
   return this.http.post(this.apiUrl+"ogrenciekle",ogr);
 }
 OgrenciDuzenle(ogr:Ogrenci){
  return this.http.put(this.apiUrl+"ogrenciduzenle",ogr);
 }
 OgrenciSil(ogrId:string){
  return this.http.delete(this.apiUrl+"ogrencisil/" +ogrId); 
 }










 DersListe(){
  return this.http.get<Ders[]>(this.apiUrl+"derslistele"); 
}
DersById(dersId:string){
 return this.http.get<Ders>(this.apiUrl+"dersbyid/" +dersId); 
}
DersEkle(ders:Ders){
  return this.http.post<Sonuc>(this.apiUrl+"dersekle",ders);
}
DersDuzenle(ders:Ders){
 return this.http.put<Sonuc>(this.apiUrl+"dersduzenle",ders);
}
DersSil(dersId:string){
 return this.http.delete<Sonuc>(this.apiUrl+"derssil/" +dersId); 

}


OgrenciDersListele(ogrId:string){
  return this.http.get(this.apiUrl + "ogrenciderslistele/"+ogrId);
}

DersOgrenciListele(dersId:string){
  return this.http.get(this.apiUrl + "dersogrencilistele/"+dersId);
}
KayitEkle(kayit:Kayit){
  return this.http.post<Sonuc>(this.apiUrl+"kayitekle",kayit);
}
KayitSil(kayit:string){
 return this.http.delete<Sonuc>(this.apiUrl+"kayitsil/" +kayit); 

}
}
