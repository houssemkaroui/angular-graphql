import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Characters',
  templateUrl: './Characters.component.html',
  styleUrls: ['./Characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters!: any[];
  dataString:any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.dataString = this.route.snapshot.queryParamMap.get('data');
    this.characters = JSON.parse(this.dataString);
    console.log(this.characters); // { name: 'John', age: 30, gender: 'male' }

  }
}
