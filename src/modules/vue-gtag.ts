import VueGtag from 'vue-gtag-next'
import { UserModule } from '@/types'

export const install: UserModule = ({ app }) => {
  app.use(VueGtag, {
    property: {
      id: 'G-CH6M9284GP',
      params: {
        user_id: '210581495',
        linker: {
          domain: ['ochner.com.br'],
        },
      },
    },
  })
}
