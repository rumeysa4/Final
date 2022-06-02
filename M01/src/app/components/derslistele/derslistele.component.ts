import { MatTableDataSource } from '@angular/material/table';
import { MyAlertService } from 'src/app/services/myAlert.service';
import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kayit } from 'src/app/models/kayit';
import { Ogrenci } from 'src/app/models/Ogrenci';

@Component({
  selector: 'app-derslistele',
  templateUrl: './derslistele.component.html',
  styleUrls: ['./derslistele.component.css']
})
export class DerslisteleComponent implements OnInit {
kayitlar: Kayit[];
secOgrenci: Ogrenci;
ogrId:string;
displayedColumns=['dersKodu','dersAdi','dersKredi','islemler'];
dataSource: any;

  constructor(
    public apiService:ApiService,
    public alert:MyAlertService,
    public route:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe (p=>{
      if(p) {
        this.ogrId = p['ogrId'];
        
      }
    });
  }

}
