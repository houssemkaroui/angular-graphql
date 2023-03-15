import { FilmsService } from './films.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import {Film} from './films'
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
@Component({
    selector: 'app-Films',
    templateUrl: './Films.component.html',
    styleUrls: ['./Films.component.css']
})
export class FilmsComponent  {
    // error: any;
     public data!: any;
     isModalOpen = false
     displayedColumns = ['title', 'director', 'releaseDate', 'producers','Options'];
     listeFilms!: MatTableDataSource<Film>;

     constructor(private router: Router, private filmsService: FilmsService,public dialog: MatDialog) { }
     @ViewChild(MatPaginator)paginator!: MatPaginator;
     openDialog(i:number,item:any) {
        const dialogRef = this.dialog.open(ModalComponent,{
          data: { pageValue: item.vehicleConnection.vehicles },
          width: '800px',

        });
        dialogRef.afterClosed().subscribe(result => {
        });
      }
 
  
    
    CharacterList (i:number,item:any) {
         console.log(item)
       this.router.navigate(['/Characters'], { queryParams: { data: JSON.stringify(item.characterConnection.characters) } });

    }
    ngOnInit(): void {
      this.filmsService.filmsList().subscribe(Response=> { 
         const liste = Response.data
         const films: any[] = (liste as { allFilms: any }).allFilms.films;
         this.listeFilms = new MatTableDataSource<Film>(films )
         this.listeFilms.paginator = this.paginator;
 
       })
 
     }
}

