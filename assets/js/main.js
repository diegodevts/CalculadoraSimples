function calculadora(){
  
return {


inicia(){
  this.pressBotao();
  this.apagarTudo();
  this.apagar();
  this.realizaConta();
  this.porcentagem();
},



pressBotao(){
  document.addEventListener('click', function(v){

    const il = v.target

     if(il.classList.contains('btn-num')){
      
      document.querySelector('.display').value += il.innerText
       
     }
 
})
},


apagarTudo(){
  document.addEventListener('click', (t) =>{
    const tg = t.target

    if(tg.classList.contains('btn-clear')){
      document.querySelector('.display').value = ''

    }
  })

},


apagar(){
  document.addEventListener('click', (t)=>{
    const tg= t.target
    if(tg.classList.contains('btn-del')){
    document.querySelector('.display').value = document.querySelector('.display').value.slice(0, -1)
    }
  })
},


realizaConta(){

  document.addEventListener('click', (t)=>{

const tg = t.target

if(tg.classList.contains('btn-eq')){
  
try{
  let conta = document.querySelector('.display').value
    conta2= eval(conta)
  
 
  if(!conta2 || '.' === conta.charAt(0)){
    alert('conta inválida')
    document.querySelector('.display').value = ''
  }else{
  document.querySelector('.display').value = conta2
  }
}
catch(e){
  alert('conta inválida')
}
}
 

})




}
}
}





const calc = calculadora();

calc.inicia();


