function calcular() {
    const linhas = document.querySelectorAll('table tr');
    let togel = 0;
  
    linhas.forEach((linha, index) => {
      if (index > 0 && index < linhas.length - 1) {
        const preco = linha.querySelector(".num").value;
        const quantidade = linha.querySelector(".int").value;
        const total = preco * quantidade || 0;
        linha.querySelector(".tot").textContent = total.toFixed(2);
        togel += total;
      }
    });
    document.getElementById("total").textContent = togel.toFixed(2);
  }