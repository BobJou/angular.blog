import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meu-title',
  templateUrl: './meu-title.component.html',
  styleUrls: ['./meu-title.component.css','./meu-title.responsive.component.css']
})
export class MeuTitleComponent {
  @Input() menuTitulo:string =""
}
