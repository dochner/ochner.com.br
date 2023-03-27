import { App } from "vue";
import { Router } from "vue-router";

export type AppContext = {
  app: App,
  router: Router
}

export type UserModule = (ctx: AppContext) => void
