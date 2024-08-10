let ladoa, ladob, ladoc, resultado

window.alert("Diga os lados do triangulo")
ladoa= parseInt(prompt("diga o primeiro lado"))
ladob= parseInt(prompt("diga o segundo lado"))
ladoc= parseInt(prompt("diga o primeiro lado"))

resultado = ladoav+ ladob

if(ladoc > resultado)
    window.alert("O valor digitado não forma um triangulo pois o valor digitado é  maior q ladoa e ladob, digite novamente")
if(ladoa == ladob & ladoa == ladoc)
    window.alert(`os numeros informa que o triangulo é equilatero ${ladoa} ${ladob} ${ladoc}`)
else if(ladoa == ladob || ladoa == ladoc )
    window.alert(`os numeros informa que seu triangulo é isoceles ${ladoa} ${ladob} ${ladoc}`)
else
window.alert(`os numeros informa que seu triangulo é escaleno ${ladoa} ${ladob} ${ladoc}`)