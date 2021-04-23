import { ItemService } from './../itens/item.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {


id: number = 0
inscricao?: Subscription;
item:any;


  constructor(
    private itemService:ItemService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params)=>{
        this.id = params['id']
        this.item = this.itemService.getItem(this.id);
        if(this.item == null){
          this.router.navigate(['']);
        }
      }
    )
  }


  onSubmit(form:any){
    
  let codigo : number = 0
  let peca : string = ''
  let estoque: number = 0
  let maxEstoque: number =0
  let minEstoque: number = 0

  codigo = Number(form.value.codigo)
  peca = form.value.nome
  estoque = Number(form.value.estoque)
  maxEstoque = Number(form.value.maxEstoque)
  minEstoque = Number(form.value.minEstoque)




this.itemService.editItem(this.id,estoque)
  }

}
