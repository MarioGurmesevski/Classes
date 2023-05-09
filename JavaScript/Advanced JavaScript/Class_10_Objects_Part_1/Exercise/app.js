//Exercise 1

const movie = {
  title: "Saving Private Ryan",
  director: "Steven Spielberg",
  country: "USA",
  year: 1999,
  productionInfo: {
    budget: "70 million",
    producer: "Ian Bryce",
  },
};

const movieid = document.getElementById("container");

function movieFunction({
  title,
  director,
  country,
  year,
  productionInfo: { budget, producer },
}) {
  movieid.innerHTML += `<li>Title:${title} Director:${director} Country:${country} Year:${year} Budget:${budget} Producer:${producer}</li>`;
}

movieFunction(movie);

//Exercise 2

const fruits = ["apples", "oranges", "lemons"];

const vegetables = ["broccoli", "carrots", "cabbage"];

const nuts = ["peanuts", "almonds", "walnuts", "hazelnuts"];

const plants = [...fruits, ...vegetables, ...nuts];
console.log(plants);
