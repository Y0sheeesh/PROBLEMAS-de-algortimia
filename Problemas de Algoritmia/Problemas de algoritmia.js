//Author:@Erick Velazquez Velazquez


//PROBLEMA1



function PROBLEMA1(){
    var input = document.querySelector('problema1-input').value;

    var array = input.split(' ').reverse();

    var resul = '';

    array.forEach(function (pal, i){
        if(i != 0 || i != array.length) resul += ' ';
        resul += pal;
    });

    document.querySelector('problema1-output').textContent = resul;
}
//PROBLEMA2

function PROBLEMA2(){
    var x1 = parseInt(document.getElementById('prol2-x1').value);
    var x2 = parseInt(document.getElementById('prol2-x2').value);
    var x3 = parseInt(document.getElementById('prol2-x3').value);
    var x4 = parseInt(document.getElementById('prol2-x4').value);
    var x5 = parseInt(document.getElementById('prol2-x5').value);

    var y1 = parseInt(document.getElementById('prol2-y1').value);
    var y2 = parseInt(document.getElementById('prol2-y2').value);
    var y3 = parseInt(document.getElementById('prol2-y3').value);
    var y4 = parseInt(document.getElementById('prol2-y4').value);
    var y5 = parseInt(document.getElementById('prol2-y5').value);

    document.getElementById('prol2-output').innerHTML = (x1*y1)+(x2*y2)+(x3*y3)+(x4*y4)+(x5*y5)

}

//PROBLEMA3

function PROBLEMA3(){

    
    var alfabeto = ['A', 'B', 'C', 'D', 'E', 
        'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'];

    
    var problema3_input = document.querySelector('problema3-input').value;

    var problema3_palabras = problema3_input.split(',');

    

    problema3_palabras = problema3_palabras.map(function (palabra){
        
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    
    var problema3_res = '';
    
    problema3_palabras.forEach(function (palabra, i){
        
        var letras_unicas = [];
        var palabra_array = palabra.split('');

        
        alfabeto.forEach(function (letra, J){
            
            palabra_array.forEach(function (letras_palabras, k){

                
                if(letras_palabras == letra){
                    if(letras_unicas.indexOf(letra)<0){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        problema3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });
    document.querySelector('problema3-output').textContent = problema3_res
}