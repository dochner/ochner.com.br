import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default"
declare module "../../node_modules/.pnpm/nuxt@3.12.1_@opentelemetry+api@1.8.0_@unocss+reset@0.61.0_eslint@9.4.0_floating-vue@5.2.2_typ_titu6yzci77xc4mcvmhqcmmm3a/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}