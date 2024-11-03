import { Component, OnInit } from '@angular/core';
import { TextBibleService } from '../text-bible.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-versicules',
  templateUrl: './register-versicules.component.html',
  styleUrl: './register-versicules.component.css'
})
export class RegisterVersiculesComponent implements OnInit{

  formGroupVerses: FormGroup

  constructor (
              private service: TextBibleService,
              private formBuilder: FormBuilder,
              private router: Router
              ){
    this.formGroupVerses = formBuilder.group({
              id : [''],
              text: [''],
              book: [''],
              chapter: [''], 
              verse: [''] ,
              testament: ['']
    })
              }

  ngOnInit(): void {

  }

  save(){
    this.service.registerNewTextHolyBible(this.formGroupVerses.value).subscribe({
      next: () => this.router.navigate(['Versicules'])
    })
  }

}
