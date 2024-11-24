


fetch('https://api.sampleapis.com/coffee/hot')
fetch( 'https://api.sampleapis.com/coffee/iced')

  .then ((response) => {
   if (response.ok) {
      return response.json();
   } else{
      throw new Errror ("Can't fetch hot drinks.");
   }
  })

  .then(data => {
   console.log(data);
   displayCoffee(data)
  })
.catch(error => console.error('Error fetching coffee menu:', error));

function displayCoffee(data) {
   const coffee = data.coffee[0]
   const coffeeDiv = document.getElementById('coffee')

//coffee name
const coffeeName = coffee.strHot;
const heading = document.createElement("h3");
heading.innerHTML = coffeeName;
coffeeDiv.appendChild(heading);

//coffee image
const coffeeImg = document.createElement('img');
coffeeImg.src = coffee.strDrinkThumb;
coffeeDiv.appendChild(coffeeImg);
document.body.style.backgroundImage = "url ('" + coffee.strDrinkThumb + "')";

//coffee ingredients
const coffeeIngredients = document.createElement("ul");
coffee.Div.appendChild(coffeeIngredients);
const getIngredients = Object.keys(coffee)
.filter(function (ingredient) {
   if (coffee[ingredient] !=null) {
      ingredient[ingredient] = coffee[ingredient];
   }
      return ingredient;}, {}

);


}

















