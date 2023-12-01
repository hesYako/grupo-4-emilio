const produto = require("./produto")

module.exports = class lanchonete extends produto{
    constructor(nome_estabelecimento,local_estabelecimento,horario_funcionamento,telefone_estabelecimento,quantidade){
        super(quantidade)
        this._nome = nome_estabelecimento
        this._local = local_estabelecimento
        this._horario = horario_funcionamento
        this._telefone = telefone_estabelecimento
        this._menu = []
    }

    getNome(){
        return(this._nome)
    }
    getLocal(){
        return(this._local)
    }
    getHorario(){
        return(this._horario)
    }
    getTelefone(){
        return(this._telefone)
    }
    getMenu(){
        return(this._menu)
    }

    setNome(nome){
        this._nome = nome
    }
    setLocal(local){
        this._local = local
    }   
    setHorario(horario){
        this._horario = horario
    }
    setTelefone(telefone){
        this._telefone = telefone
    }
    setMenu(itemParaSubstituir,itemSubstituto){
       if(itemParaSubstituir instanceof produto){
            this._menu.splice(itemParaSubstituir,1,itemSubstituto)
       }
       else{
        console.log("erro")
       }
    
       
    }



    adicionarAoMenu(item){
        this._menu.push(item)
    }

    removerDoMenu(item){
       if(item instanceof produto){
            this._menu.splice(item,1)
       }
    }

    venderProduto(produto1,quantidadeSujerida){
      if(produto1 instanceof produto){
        if(produto1._quantidade() > 0){
            
        }
      }
        }

       
        
        
        

    }

    

   
