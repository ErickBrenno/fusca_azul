import { Injectable } from '@angular/core';
import { Item } from './Item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itens : Item[]


  constructor() { 
    this.itens = [
      new Item(1,"Pneu",10,20,5),
      new Item(2,"Freio a Disco",80,100,50),
      new Item(3,"Retrovisor",200,320,50),
      new Item(4,"Valvula",100,10,30),
      new Item(5,"Volante",6,50,5),
      

    ]
  }


  getItens(){
    return this.itens;
  }
  getItem(i:number){
    return this.itens[i]
  }

  addItem(codigo:number, peca:string, estoque:number, maxEstoque:number,minEstoque:number){
    this.itens.push(new Item(codigo,peca,estoque,maxEstoque,minEstoque))
  }

  editItem(i:number, estoque: number){
    this.itens[i].estoque = estoque;
  }
  


}
