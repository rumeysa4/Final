
import { Ogrenci } from './../../models/Ogrenci';

import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { Ders } from './../../models/Ders';
import { AlertDialogComponent } from '../dialogs/alert-dialog/alert-dialog.component';
import { ApiService } from './../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Kayit } from 'src/app/models/kayit';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { Sonuc } from 'src/app/models/Sonuc';
import { OgrsecDialogComponent } from '../ogrsec-dialog/ogrsec-dialog.component';

@Component({
  selector: 'app-ogrencilistele',
  templateUrl: './ogrencilistele.component.html',
  styleUrls: ['./ogrencilistele.component.css']
})
export class OgrencilisteleComponent implements OnInit {
  secDers: Ders;
  dersId: string;
  ogrId: string = "";
  kayitlar: Kayit[];
  dataSource: any;
  ogrenciler: Ogrenci[];
  displayedColumns = ['ogrNo', 'ogrAdsoyad', 'ogrDogTarih', 'islemler'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  confirmDialogRef: MatDialogRef<ConfirmDialogComponent>;
  ogrDialogRef: MatDialogRef<unknown, any>;
  alert: any;

  constructor(
    public route: ActivatedRoute,
    public apiServis: ApiService,
    
    public matDialog: MatDialog
  ) { }

  ngOnInit() {

    this.route.params.subscribe((p: any) => {
      if (p) {
        this.dersId = p.dersId;
        this.DersGetir();
        this.KayitListele();
      }
    });
  }
  DersGetir() {
    this.apiServis.DersById(this.dersId).subscribe(d => {
      this.secDers = d;
    });
  }
  KayitListele() {
    this.apiServis.DersOgrenciListele(this.dersId).subscribe(d => {
      
      this.dataSource = new MatTableDataSource(this.kayitlar);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  KayitSil(kayit: Kayit) {
    this.confirmDialogRef = this.matDialog.open(ConfirmDialogComponent, {
      width: "400px"
    });
    this.confirmDialogRef.componentInstance.dialogMesaj = kayit.ogrBilgi.ogrAdsoyad + "Adlı Kişinin Kaydı Silinecektir Onaylıyor musunuz?";
    { } this.confirmDialogRef.afterClosed().subscribe(d => {
      if (d) {
        this.apiServis.KayitSil(kayit.kayitId).subscribe(s => {
          
          if (s.islem) {
            this.KayitListele();
          }
        });
      }
    });
  }
  Ekle() {
    this.ogrDialogRef = this.matDialog.open(OgrsecDialogComponent, {
      width: "500px;"
    });

    this.ogrDialogRef.afterClosed().subscribe(d => {
      if (d) {
        var kayit = new Kayit();
        kayit.kayitOgrId = d.ogrId;
        kayit.kayitDersId = this.dersId;
        this.apiServis.KayitEkle(kayit).subscribe(s => {
          this.alert.AlertUygula(s);
          if (s.islem) {
            this.KayitListele();
          }
        });

      }
    });

 
}
  
  }

function ogrsecDialogComponent(ogrsecDialogComponent: any, arg1: { width: string; }): MatDialogRef<unknown, any> {
  throw new Error('Function not implemented.');
}

