window.addEventListener("DOMContentLoaded", delegation);
let position = 0;

function delegation() {
  login();
  menu();
  header();
  navigation();
}

function login() {
  const login = document.querySelector(".login");
  if (login) {
    console.log("init");
    document.querySelector(".orange").addEventListener("click", () => {
      document.querySelector(".forgot").classList.remove("hide");
    });
    document.querySelector(".close").addEventListener("click", () => {
      document.querySelector(".forgot").classList.add("hide");
    });
    document.querySelectorAll(".primary").forEach(button => {
      button.addEventListener("click", () => {
        document.querySelector(".forgot").classList.add("hide");
      });
    });
  }
}

function menu() {
  console.log("init");
  const navigation = document.querySelector(".navigation");
  if (navigation) {
    const burger = document.querySelector(".burger_icon");
    const dropdown = document.querySelector(".dropdown");
    const genres_menu = document.querySelector(".genres_menu");
    burger.addEventListener("click", function () {
      if (dropdown.classList.contains("hide")) {
        dropdown.classList.remove("hide");
        setTimeout(() => {
          dropdown.classList = "dropdown remove_opacity";
        }, 100);
      } else {
        dropdown.classList = "dropdown add_opacity";
        setTimeout(() => {
          dropdown.classList.add("hide");
        }, 500);
      }
    });
    document.querySelectorAll(".dropdown p, .genres_menu p").forEach(x => {
      x.addEventListener("click", () => {
        dropdown.classList.add("hide");
        genres_menu.classList.add("hide");
      });
    });
    document.querySelectorAll(" ul > li:nth-child(6)").forEach(li => {
      li.addEventListener("click", () => {
        document.querySelector(".genres_menu").classList.remove("hide");
      });
    });
    document.querySelectorAll(".menu_elements").forEach(el => {
      el.addEventListener("click", () => {
        document.querySelector(".dropdown").classList.add("hide");
      });
    });
  }
}

function header() {
  const frontpage = document.querySelector(".frontpage");
  if (frontpage) {
    console.log("header");
    document.querySelector("main").addEventListener("scroll", () => {
      const container = document.querySelector("main");
      position = container.scrollTop / (container.scrollHeight - container.clientHeight);
      console.log(position);

      if (position < 0.01) {
        document.querySelector("main").classList.add("enlarge_site");
        document.querySelector("header img").classList.add("enlarge_title");
        document.querySelectorAll(".burger img").forEach(img => {
          img.classList.add("bigger");
        });
      } else {
        document.querySelector("header img").classList.remove("enlarge_title");
        document.querySelector("main").classList.remove("enlarge_site");
        document.querySelectorAll(".burger img").forEach(img => {
          img.classList.remove("bigger");
        });
      }
    });
  }
}

function navigation() {
  const index = document.querySelector(".frontpage");
  document.querySelectorAll(".menu_elements").forEach(menuEl => {
    menuEl.addEventListener("click", e => {
      const target = e.target.getAttribute("data-name");
      if (document.querySelector(target)) {
        document.querySelector("#" + e.target.getAttribute("data-name")).scrollIntoView({ behavior: "smooth" });
      } else {
        location.href = "/index.html#" + e.target.getAttribute("data-name");
      }
    });
  });
  if (index) {
    document.querySelector(".top.all").addEventListener("click", () => {
      document.querySelector("main").scrollTo(0, 0);
      window.scrollTo(0, 0);
    });
  }
}
