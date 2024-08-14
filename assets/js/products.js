let apiPizzas = 'http://localhost:3000/api/pizzas'

async function fetchPizzas() {
    try {
      const response = await fetch('http://localhost:3000/api/pizzas');
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      const pizzas = await response.json();
      const pizzasDiv = document.getElementById('pizzas');
      
      pizzas.forEach(pizza => {
        const pizzaDiv = document.createElement('div');
        pizzaDiv.classList.add("col-lg-4", "col-md-6", "col-sm-12", "col-12")
        let pizzaPrice = pizza.preco.replace(".", ",")
        pizzaDiv.innerHTML = `<div class="card" style="width=18rem;">
                                <div class="card-body">
                                  <div class=div__title>
                                  <h5 class="card-title">${pizza.sabor}</h5>
                                  </div>
                                  <p class="card-text">${pizza.descricao || "Sem descrição"}
                                  <p class="card-text"> Preço: R$ ${pizzaPrice}
                                  </div>
                                </div>`

        pizzaDiv.classList.add(`pizza-${pizza.sabor}`, 'pizza-item');
        pizzasDiv.appendChild(pizzaDiv);
      });
    } catch (error) {
      console.error('Erro ao buscar pizzas:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', fetchPizzas);