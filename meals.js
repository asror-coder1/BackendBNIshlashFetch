let path = new URLSearchParams(window.location.search);
let url = "https://www.themealdb.com/api/json/v1/1";
let list = document.querySelector(".list");
let title = document.querySelector(".category");
let category = path.get("c");

title.innerHTML = category + "meals";

fetch(url + `/filter.php?c=${category}`)
  .then((res) => res.json())
  .then((data) => renderMeals(data.meals, list))
  .catch((err) => console.log(err));

function renderMeals(arr, parent) {
  parent.innerHTML = "";

  arr.forEach((el) => {
    parent.insertAdjacentHTML(
      "beforeend",
      ` <li class="meal">
        <img src="${el.strMealThumb}" alt="${el.strCategory}" class="categories__img" />
        <h2 class="categories__title">${el.strMeal}</h2>
      </li>
      `
    );
  });
}
