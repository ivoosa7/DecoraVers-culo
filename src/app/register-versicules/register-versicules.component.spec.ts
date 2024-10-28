import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVersiculesComponent } from './register-versicules.component';

describe('RegisterVersiculesComponent', () => {
  let component: RegisterVersiculesComponent;
  let fixture: ComponentFixture<RegisterVersiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterVersiculesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterVersiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
