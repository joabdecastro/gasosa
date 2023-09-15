function executar(){
    //VARIAVEIS PUXADAS DO HTML
    let distancia = document.getElementById('distancia').value
    let tanque = document.getElementById('tanque').value
    let consumo = document.getElementById('consumo').value
    let precoGasolina = document.getElementById('precoGasolina').value 
    let tempo = document.getElementById('tempo').value

    let res = document.getElementById('res')

    let combustivelnecessario = distancia/consumo
    let vm = distancia/tempo

    let pagar = combustivelnecessario * precoGasolina

    let vezesabastecer = combustivelnecessario / tanque

    if(distancia.length == 0, tanque.length == 0, consumo.length == 0, precoGasolina.length == 0, tempo.length == 0){
        alert('Verifique os dados em tente novamente!')
    } else {
        
        //let abastecer = distancia/consumo
 
        // CONSUMO DE GASOLINA 

        //const estrada = 38
        //const rodovia = 35
    
        res.innerHTML = `Velocidade média de: <strong>${vm.toFixed([2])} km/h</strong>` 
        res.innerHTML += `<br>Combustuvel Necessario para chagar ao destino é: <strong>${combustivelnecessario.toFixed([2])} litros</strong>`
        res.innerHTML += `<br>Você terá que abastecer: <strong>R$${pagar.toFixed([2])}</strong>`
        res.innerHTML += `<br>Você terá que abastecer ao menos: <strong>R$${vezesabastecer.toFixed([2])} vezes</strong>`
        //res.innerHTML += `${abastecer}`
        //let cont = 0
        //for(cont = 0; combustivelnecessario > tanque; cont++)
        //console.log(cont)
        }
        
    

        }
