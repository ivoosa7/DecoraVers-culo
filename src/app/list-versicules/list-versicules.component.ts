import { Component, OnInit } from '@angular/core';
import { TextBibleService } from '../text-bible.service';
import { Versicule } from '../Versicule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-versicules',
  templateUrl: './list-versicules.component.html',
  styleUrl: './list-versicules.component.css'
})
export class ListVersiculesComponent implements OnInit {

  Verses: Versicule [] = [];

  constructor(private service:TextBibleService,
              private router:Router
  ) { }

  ngOnInit(): void {
    this.LoadVerses()
  }

  LoadVerses(){
    this.service.getTextHolyBible().subscribe({
      next: data => this.Verses = data
    })
  }

  goToRegister(id: Number){
    this.router.navigate(['/Register', id]);
  }


}
