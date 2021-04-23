export class Item{
    codigo: number
    peca: string
    estoque: number
    maxEstoque: number
    minEstoque: number

    constructor(codigo:number, peca:string, estoque:number, maxEstoque:number, minEstoque:number){
        this.codigo = codigo
        this.peca = peca
        this.estoque = estoque
        this.maxEstoque = maxEstoque
        this.minEstoque = minEstoque
    }

}