    let brasil, franca
  
    brasil = parseFloat(prompt('Que horas são aqui no Brasil?'));
    franca = horabrasil + 5;

    if (horafranca >= 24) {
     horafranca -= 24; 
    }
    
    alert(`A hora aqui no Brasil é: ${horabrasil.toFixed(2)} e na França é: ${horafranca.toFixed(2)}`);