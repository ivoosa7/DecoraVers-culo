import { Component, OnInit } from '@angular/core';
import { TextBibleService } from '../text-bible.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
              private router: Router,
              private activeRouter: ActivatedRoute
              ){
    this.formGroupVerses = formBuilder.group({
              id        : [''],
              text      : [''],
              book      : [''],
              chapter   : [''], 
              verse     : [''],
              testament : ['']
    })
              }

  ngOnInit(): void {
    const id = Number(this.activeRouter.snapshot.paramMap.get("id"))
    this.loadVerses(id)
  }

  loadVerses(id: Number){
    this.service.getVersesById(id).subscribe({
      next: data => this.formGroupVerses.setValue(data)
    });
  }

  saveNewTextHolyBible(){
    this.service.registerNewTextHolyBible(this.formGroupVerses.value).subscribe({
      next: () => this.router.navigate(['Versicules'])
    });
  }

}
