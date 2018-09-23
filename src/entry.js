import Vue from "vue";
import router from "./router/index";
import "normalize.css";
import "./entry.hooks";
import "./assets/scss/common.scss";
import Layout from "./Layout";
import "animate.css";


// eslint-disable-next-line
new Vue({
  el: "#layout",
  router,
  render: c => c(Layout)
});
