const produto = require("./produto");

module.exports = class agua extends produto{
    constructor(ingredientePrincipal,notaAvaliacao,tempoPreparo,nome,preco,quantidade,tipo,calorias){

        super(nome,preco,quantidade,tipo,calorias)

        this._ingrediente = ingredientePrincipal
        this._nota = notaAvaliacao
        this._tempoPreparo = tempoPreparo

        aaaaa
    }
}
