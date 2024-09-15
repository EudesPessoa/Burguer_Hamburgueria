const btnMobile = document.getElementById("btn");
const nav = document.querySelector(".nav");
const navItens = document.querySelectorAll(".nav-itens");

function toggleMenu(event) {
  btnMobile.classList.toggle("active");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}
btnMobile.addEventListener("click", toggleMenu);

navItens.forEach((item) => {
  item.addEventListener("click", toggleMenu);
});

const lazyLoading = () => {
  var lazyImages = document.querySelectorAll(".lazy-load");
  lazyImages.forEach((img) => {
    if (
      img.getBoundingClientRect().top < window.innerHeight &&
      img.getAttribute("data-src")
    ) {
      img.src = img.getAttribute("data-src");
      img.removeAttribute("data-src");
      img.classList.add("loading");
    }
  });
};

const scrollScroll = () => {
  var headerMenu = document.getElementById("header");
  var scroll = this.scrollY;
  if (scroll > 50) {
    headerMenu.classList.add("menuFixo");
  } else {
    headerMenu.classList.remove("menuFixo");
  }
};

const filterMenu = (item) => {
  var filterElement = document.getElementsByClassName("card-price");
  for (i = 0; i < filterElement.length; i++) {
    arr1 = filterElement[i].className.split(" ");
    if (arr1.includes(item) == true) {
      filterElement[i].style.display = "flex";
    } else {
      filterElement[i].style.display = "none";
    }
  }
};

const filterBtnMenu = (item) => {
  var filterBtn10 = document.querySelector(".nav-menu-itens");
  for (const li of filterBtn10.querySelectorAll("li")) {
    if (item == li.id) {
      li.classList.add("active");
    } else {
      li.classList.remove("active");
    }
  }
};

const btnAll = document.querySelector("#btn-all");
const btnBurguer = document.querySelector("#btn-burguer");
const btnSucos = document.querySelector("#btn-sucos");
const btnBebidas = document.querySelector("#btn-bebidas");
const btnSobremesas = document.querySelector("#btn-sobremesas");

btnAll.addEventListener("click", () => {
  filterMenu("*");
  filterBtnMenu("btn-all");
  btnScrollStore();
});

btnBurguer.addEventListener("click", () => {
  filterMenu("burguer");
  filterBtnMenu("btn-burguer");
});

btnSucos.addEventListener("click", () => {
  filterMenu("sucos");
  filterBtnMenu("btn-sucos");
  window.scrollBy(0, 1);
  window.scrollBy(0, -1);
});

btnBebidas.addEventListener("click", () => {
  filterMenu("bebidas");
  filterBtnMenu("btn-bebidas");
  window.scrollBy(0, 1);
  window.scrollBy(0, -1);
});

btnSobremesas.addEventListener("click", () => {
  filterMenu("sobremesas");
  filterBtnMenu("btn-sobremesas");
  window.scrollBy(0, 1);
  window.scrollBy(0, -1);
});

window.onload = () => {
  lazyLoading();
};
window.onscroll = () => {
  lazyLoading();
  scrollScroll();
};
