import { Component, OnInit } from '@angular/core';
import { TextBibleService } from '../text-bible.service';
import { Versicule } from '../Versicule';

@Component({
  selector: 'app-list-versicules',
  templateUrl: './list-versicules.component.html',
  styleUrl: './list-versicules.component.css'
})
export class ListVersiculesComponent implements OnInit {

  Verses: Versicule [] = [];

  constructor(private service:TextBibleService) { }

  ngOnInit(): void {
    this.LoadVerses()
  }

  LoadVerses(){
    this.service.getTextHolyBible().subscribe({
      next: data => this.Verses = data
    })
  }


}
