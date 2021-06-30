import router from "../router";
import store from "../store";
import App from "../App.vue";
import Vue from "vue";

function vueRender({ loading }) {
  return new Vue({
    el: "#app",
    data() {
      return {
        loading
      };
    },
    render(h) {
      return h(App, {
        props: {
          loading: this.loading
        }
      });
    },
    router,
    store
  });
}

let app = null;

export default function render({ loading }) {
  if (!app) {
    app = vueRender({ loading });
  } else {
    app.loading = loading;
  }
}
