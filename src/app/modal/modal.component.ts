import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Vehicule} from './vehicule'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  listevehicule!: MatTableDataSource<Vehicule>;
  liste :any
  @ViewChild(MatPaginator)paginator!: MatPaginator;
  displayedColumns = ['crew', 'model', 'name', 'vehicleClass'];

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.liste = data
  }


  ngOnInit(): void {
    console.log(this.liste,"ffffffffffffffffff")
    this.listevehicule = new MatTableDataSource<Vehicule>(this.liste.pageValue )
    this.listevehicule.paginator = this.paginator;
    setTimeout(() =>  this.listevehicule.paginator = this.paginator);

  }

}
