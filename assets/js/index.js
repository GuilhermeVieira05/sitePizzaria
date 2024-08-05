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
        pizzaDiv.classList.add(`pizza-${pizza.sabor}`, 'pizza-item');
        pizzaDiv.innerHTML = `<h2 class="pizza-title">${pizza.sabor}</h2><p class="pizza-description">${pizza.descricao}</p><p class="pizza-price">Preço: R$ ${pizza.preco}</p>`;
        pizzasDiv.appendChild(pizzaDiv);
      });
    } catch (error) {
      console.error('Erro ao buscar pizzas:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', fetchPizzas);