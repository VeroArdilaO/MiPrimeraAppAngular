import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miprimercomponente',
  templateUrl: './miprimercomponente.component.html',
  styleUrls: ['./miprimercomponente.component.css']
})
export class MiprimercomponenteComponent implements OnInit {
  img = "https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page=,"
  constructor() { }

  ngOnInit(): void {
  }

}
