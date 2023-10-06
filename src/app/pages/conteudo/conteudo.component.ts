import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';
@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})

export class ConteudoComponent implements OnInit{
  constructor(private route:ActivatedRoute){}
  

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
    this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }
  photoCover:string =''
  contentTitle:string=''
  contentDescription:string=''
  private id: any ="0"

  setValuesToComponent(id:any){
    const result = dataFake.filter(article => article.id = id)[id-1]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photo
    
  }
  
}
