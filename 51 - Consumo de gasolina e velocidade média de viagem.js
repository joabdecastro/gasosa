//Consumo de gasolina e velocidade media de viagem
// Funçõo : Determinar a velocidade media necessaria para um condutor atingir uma determinada distancia entre 2 pontos, levando em consideraçâo a capacidade do tanque de combustivel, a velocidade na estrada ou na cidade, o preço da gasolina atual e a quantidade de vezes a se abastecer.
// Autor : welldsvieira'
// Data : 24/12/2022
// Se��o de Declara��es 
var
resp1: inteiro
veiculo ,resp ,resp2: caracter
tanque, kmlitro_estrada , kmlitro_cidade , gasolina_preco: real
distancia_pontos, vm, espaco_inicial, espaco_final, tempo_inicial, tempo_final, litros_consumidos, vezes_abastecer: real
dinheiro_gasolina: real
inicio
// DADOS
veiculo <- "Crosser Xtz 150 - 2015"
tanque  <- 12
kmlitro_estrada <- 38
kmlitro_cidade  <- 35
gasolina_preco  <- 5.59

//VELOCIDADE MEDIA
escrevaL("Qual a dist�ncia em Km do seu ponto ao seu destino ?")
leia(dista	ncia_pontos)

escrevaL("Em quantas horas voc� chegar� ao seu destino ?")
leia(tempo_final)

espaco_inicial <- 0
tempo_inicial  <- 0
espaco_final <- distancia_pontos
tempo_final  <- tempo_final

vm <- ((espaco_inicial-espaco_final)/(tempo_final-tempo_inicial*60))

limpatela
escrevaL("A sua velocidade media e: ", abs(vm):3:1 , " Km/hora")

escrevaL("Deseja realizar o calculo de gasolina ? [s/n]")
leia(resp)

if(resp = "s") entao
   escrevaL("A maior parte do percurso, ser� na cidade ou na estrada ?")
   escrevaL("[1] - Cidade ")
   escrevaL("[2] - Estrada")
   leia(resp1)
fimse

   dinheiro_gasolina <- espaco_final/(kmlitro_cidade*gasolina_preco)
   
escolha resp1
        caso 1
        escrevaL("Considerando o consumo de ", kmlitro_cidade  , " litros de gasolina por Km na cidade, e voc� percorrer� uma dist�ncia de: ")
        escrevaL(espaco_final , "Km, ent�o voc� precisar� gastar ", dinheiro_gasolina*100:4:2 ," reais em combustivel para poder ir e voltar.")

        caso 2
        escrevaL("Considerando o consumo de ", kmlitro_estrada  , " litros de gasolina por Km na estrada, e voc� percorrer� uma dist�ncia de: ")
        escrevaL(espaco_final , "Km, ent�o voc� precisar� gastar ", dinheiro_gasolina*100:4:2 ," reais em combustivel para poder ir e voltar.")
fimescolha

escrevaL("Deseja saber quantas vezes ter� que abastecer ? [s/n]")
leia(resp2)

limpatela

se (resp2 = "s") entao
     litros_consumidos <- (dinheiro_gasolina/gasolina_preco)*100
     escrevaL("Ser�o consumidos nessa viagem ", abs(litros_consumidos):4:2, " litros de gasolina para ir e voltar.")
     
     se (litros_consumidos < 12) entao
     escreva("Xiii meu patr�o, n�o vai gastar nem um tanque, relaxe !")
                   senao
                        se (litros_consumidos >= 12) e (litros_consumidos <= 24)  entao
                        escrevaL("Ser� necess�rio abastecer 2 vezes.")
                                       senao
                                            se (litros_consumidos >24) entao
                                            escrevaL("Ser� necess�rio abastecer + de 2 vezes.")
                                            fimse
                        fimse
     fimse
fimse

fimalgoritmo
