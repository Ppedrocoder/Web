
function soma(){
    var numero1= parseInt(document.getElementById('numero1').value,10);
    var numero2= parseInt(document.getElementById('numero2').value,10)
    var result=numero1+numero2
    document.getElementById('result').innerHTML=result
    
}
function sub(){
    var numero1= parseInt(document.getElementById('numero1').value,10);
    var numero2= parseInt(document.getElementById('numero2').value,10)
    var result=numero1-numero2
    document.getElementById('result').innerHTML=result
    
}
function divisao(){
    var numero1= parseInt(document.getElementById('numero1').value,10);
    var numero2= parseInt(document.getElementById('numero2').value,10)
    var result=numero1/numero2
    document.getElementById('result').innerHTML=result
    
}
function mult(){
    var numero1= parseInt(document.getElementById('numero1').value,10);
    var numero2= parseInt(document.getElementById('numero2').value,10)
    var result=numero1*numero2
    document.getElementById('result').innerHTML=result
    
}

document.getElementById('botao1').addEventListener("click", function(){
    var input1= document.getElementById('numero1').value
    var input2= document.getElementById('numero2').value
    if (input1==""||input1==null||input1==undefined||input2==""||input2==null||input2==undefined){
        document.getElementById('result').innerHTML="RESULTADO"
        return
    }
    soma()
})
document.getElementById('botao2').addEventListener("click", function(){
    var input1= document.getElementById('numero1').value
    var input2= document.getElementById('numero2').value
    if (input1==""||input1==null||input1==undefined||input2==""||input2==null||input2==undefined){
        document.getElementById('result').innerHTML="RESULTADO"
        return
    }
    sub()
})
document.getElementById('botao3').addEventListener("click", function(){
    var input1= document.getElementById('numero1').value
    var input2= document.getElementById('numero2').value
    if (input1==""||input1==null||input1==undefined||input2==""||input2==null||input2==undefined){
        document.getElementById('result').innerHTML="RESULTADO"
        return
    }
    divisao()
})
document.getElementById('botao4').addEventListener("click", function(){
    var input1= document.getElementById('numero1').value
    var input2= document.getElementById('numero2').value
    if (input1==""||input1==null||input1==undefined||input2==""||input2==null||input2==undefined){
        document.getElementById('result').innerHTML="RESULTADO"
        return
    }
    mult()
})