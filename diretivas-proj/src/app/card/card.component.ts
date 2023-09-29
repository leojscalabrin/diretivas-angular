import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  produtos:string[] = []
  //menuType: admin ou superadmin
  menuType:string = "admin"

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "fonte"
    ]
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  adicionar() {
    this.produtos.push("ednaldo")
  }

  remover(index: number) {
    this.produtos.splice(index, 1)
  }

}
