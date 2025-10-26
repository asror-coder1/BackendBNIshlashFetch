let list = document.querySelector(".categories");

let url = "https://www.themealdb.com/api/json/v1/1";

fetch(url + "/categories.php")
  .then((response) => response.json())
  .then((data) => renderCatigories(data.categories, list))
  .catch((err) => {
    let erMessage = document.createElement("h2");
    erMessage.innerHTML = "Xatolik bor";
    erMessage.classList.add("error");
    document.body.appendChild(erMessage);
  });

function renderCatigories(arr, parent) {
  parent.innerHTML = "";

  let filteredArr = arr.filter((el) => {
    return el.strCategory !== "Pork";
  });
  
  filteredArr.forEach((el) => {
    parent.insertAdjacentHTML(
      "beforeend",
      `
      <li class="category">
        <img src="${el.strCategoryThumb}" alt="${
        el.strCategory
      }" class="categories__img" />
        <h2 class="categories__title">${el.strCategory}</h2>
        <p class="categories__description">
          ${
            el.strCategoryDescription.length <= 100
              ? el.strCategoryDescription
              : el.strCategoryDescription.substring(0, 100) + "..."
          }
        </p>
      </li>
      `
    );
  });
}
