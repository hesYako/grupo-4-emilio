for(var o = 0; o < this._menu.length;o++){
    if(produto == this._menu[o]){
        if(this._quantidade == 0){
            console.log("Falta no menu")
        }        
        }
        else if(this._quantidade >= quantidadeSujerida){
             this._quantidade = this._quantidade - quantidadeSujerida
             this._valor = quantidadeSujerida * this._preco
        }
        else if(quantidadeSujerida == 0){
            console.log("pedido nulo")
        }

        else{
            console.log("nada a ser feito")
        }

    }