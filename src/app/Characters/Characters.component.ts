import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {Character} from './characters'
@Component({
  selector: 'app-Characters',
  templateUrl: './Characters.component.html',
  styleUrls: ['./Characters.component.css']
})
export class CharactersComponent implements OnInit {

  dataString:any

  constructor(private route: ActivatedRoute) { }
  @ViewChild(MatPaginator)paginator!: MatPaginator;
  displayedColumns = ['name', 'gender', 'homeworld', 'eyeColor','skinColor'];
  characters!: MatTableDataSource<Character>;

  ngOnInit(): void {
    this.dataString = this.route.snapshot.queryParamMap.get('data');
    this.characters = new MatTableDataSource<Character>(JSON.parse(this.dataString))
    console.log(this.characters)
    setTimeout(() => this.characters.paginator = this.paginator);


  }
}
