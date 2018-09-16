import Vue from "vue";
import router from "./router/index";
import "normalize.css";
import "./entry.hooks";
import "./assets/scss/common.scss";
import Layout from "./Layout";
import "animate.css";

if (process.env.NODE_ENV === "development") {
  require("./mock/index");
}

/* eslint-disable */
new Vue({
  el: "#layout",
  router,
  render: c => c(Layout)
});
