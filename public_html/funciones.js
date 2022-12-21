function sumar(){
    //Envolvemos todo el codigo en un bloque
    //try y catch para procesar la excepcion
    //en caso que haya ocurrido aloguna
    try {
        
        //pedimos el valor del operador a
        var a = prompt("Valor a:", "");
        
        //validamos parametro a, !a revisa si la cadena esta vacida o nula
        if(!a || isNaN(a)){
            throw new Error("Valor invalido de a:" + a);
        }
        
        //pedimos el valor del operador b
        var b = prompt("Valor b:", "");
        
        //validamos parametro b, !b revisa si la cadena esta vacia o nula
        if(!b || isNaN(b)){
            throw new Error("Valor invalido de b:" + b);
        }
        
        /**
         * si no hay problema, hacemos la suma
         * necesitamos convertir a int los parametros
         * partseInt convierte a entero, si no es entero
         * no va a realizar la suma sino concatena los valores
         */
        
        var c = parseInt(a) + parseInt(b);
        alert("la suma es:" + c);
        
    }catch(e){
        alert("El error es:" + e.message);
    }
}

