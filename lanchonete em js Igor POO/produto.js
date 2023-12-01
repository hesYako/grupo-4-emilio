module.exports = class produto{
    constructor(nome,preco,quantidade,tipo,calorias){
        this._nome = nome
        this._preco = preco
        this._quantidade = quantidade
        this._tipo = tipo
        this._calorias = calorias

    }
    getNome(){
        return(this._nome)
    }
    getPreco(){
        return(this._preco)
    }
    getQuantidade(){
        return(this._quantidade)
    }
    getTipo(){
        return(this._tipo)
    }
    getCalorias(){
        return(this._calorias)
    }

    setNome(nome){
        this._nome = nome
    }
    setPreco(preco){
        this._preco = preco
    }
    setQuantidade(quantidade){
        this._quantidade = quantidade
    }
    setTipo(tipo){
        this._tipo = tipo
    }
    setCalorias(calorias){
        this._calorias = calorias
    }
}