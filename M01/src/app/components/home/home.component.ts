import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './../dialogs/confirm-dialog/confirm-dialog.component';
import { MyAlertService } from './../../services/myAlert.service';
import { Sonuc } from './../../models/Sonuc';
import { AlertDialogComponent } from './../dialogs/alert-dialog/alert-dialog.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
ConfirmDialog: MatDialogRef<ConfirmDialogComponent>;
  ConfirmDialogRef: MatDialogRef<ConfirmDialogComponent, any>;
  constructor(
    public alert:MyAlertService,
    public MatDialog: MatDialog
  ) { }

  ngOnInit() {
  }
  AlertAc(p:boolean){

    var s:Sonuc=new Sonuc();
    s.islem=p;
    s.mesaj="Bu Bir Alert Test Mesajıdır";

    this.alert.AlertUygula(s)
  }

  ConfirmAc(){
this.ConfirmDialogRef=this.MatDialog.open(ConfirmDialogComponent, {
  width: '600 px'
});
  

this.ConfirmDialogRef.componentInstance.dialogMesaj = "Kayıt Silinecektir Onaylıyor musunuz?";
this.ConfirmDialogRef.afterClosed().subscribe(d=>{
     console.log(d);
     if (d){
       //Silme Rutini
     }
});
}

}

