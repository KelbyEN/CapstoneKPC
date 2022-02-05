/* eslint-disable no-prototype-builtins */
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";

import dotenv from "dotenv";
dotenv.config();

const router = new Navigo(window.location.origin);

/*allows the HTML code to show inside the specified element*/
function render(st) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;
  router.updatePageLinks();
  addEventListeners(st);
}
/*allows navigation between pages by clicking on each title in the nav menu*/
function addEventListeners(st) {
  document.querySelectorAll("nav a").forEach((navLink) =>
    navLink.addEventListener("click", (event) => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );

  //button for the coupon*
  if (st.view === "Cards") {
    document.getElementById("myBtn").addEventListener("click", function () {
      alert("Use code NEW for 10% off!");
    });

    //   if (st.view === "Cards") {
    //     var image = (document.getElementById("myBtna").src = "anxietyin.jpg");
    //     alert("OnLoad image" + assets / images / anxietyin.jpg);
    //   }
    //

    // add menu toggle to bars icon in nav bar
    document
      .querySelector(".fa-bars")
      .addEventListener("click", () =>
        document.querySelector("nav > ul").classList.toggle("hidden--mobile")
      );
  }

  //  ADD ROUTER HOOKS HERE ...
  router.hooks({
    before: (done, params) => {
      const page =
        params && params.hasOwnProperty("page")
          ? capitalize(params.page)
          : "Home";

      if (page === "Home") {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st.%20louis`
          )
          .then((response) => {
            state.Home.weather = {};
            state.Home.weather.city = response.data.name;
            state.Home.weather.temp = response.data.main.temp;
            state.Home.weather.feelsLike = response.data.main.feels_like;
            state.Home.weather.description = response.data.weather[0].main;
            done();
          })
          .catch((err) => console.log(err));
      }
    },
  });

  router
    .on({
      "/": () => render(state.Home),
      ":page": (params) => {
        let page = capitalize(params.page);
        render(state[page]);
      },
    })
    .resolve();
}
