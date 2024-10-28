import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVersiculesComponent } from './list-versicules.component';

describe('ListVersiculesComponent', () => {
  let component: ListVersiculesComponent;
  let fixture: ComponentFixture<ListVersiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListVersiculesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListVersiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
