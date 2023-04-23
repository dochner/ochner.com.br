---
title: Integrando uma aplicação Vite com netlifycms
hero_image: /images/netlify_cms_logo.png
date: 2023-04-23T17:42:22.300Z
---
[﻿[toc]]

#﻿# Configurando o Netlify CMS

O primeiro passo é configurar o Netlify CMS em seu aplicativo. Isso envolve definir as coleções e campos que você deseja gerenciar por meio do CMS, bem como configurar a forma como o CMS se conecta e interage com seu repositório Git.

Crie um arquivo chamado `config.yml` em public/admin/ com o seguinte conteúdo:

`﻿``yml
backend:
  name: git-gateway
  branch: main
media_folder: /public/images
public_folder: /images
collections:
  - name: posts
    label: Posts
    folder: pages/posts
    create: true
    slug: "{{slug}}"
    fields:
      - { label: Title, name: title, widget: string }
      - { label: Description, name: description, widget: text, required: false }
      - { label: Hero Image, name: hero_image, widget: image, required: false }
      - { label: Draft, name: draft, widget: boolean, required: false }
      - { label: Date, name: date, widget: datetime }
      - { label: Body, name: body, widget: markdown }
`﻿``

Este arquivo de configuração define uma coleção chamada "posts" que gerencia os posts do seu aplicativo. Ele inclui campos como título, descrição, imagem de destaque, estado de rascunho, data e corpo do post.

Também inclui configurações para o backend, definindo o tipo de provedor de autenticação Git que você está usando (neste caso, o Git Gateway) e a ramificação padrão que o Netlify CMS deve usar ao interagir com seu repositório Git.

#﻿# Adicionando o widget de identidade do Netlify

Para permitir que os usuários façam login e gerenciem conteúdo em seu aplicativo usando o Netlify CMS, você precisará adicionar o widget de identidade do Netlify. Isso permitirá que os usuários façam login usando credenciais do Netlify Identity ou provedores de autenticação externos, como o Google ou o GitHub.

Para fazer isso vamos criar um arquivo chamado `index.html` dentro da pasta `/public/admin/` 

`﻿``html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager</title>
    <!-- Include the script that enables Netlify Identity on this page. -->
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </head>
  <body>
    <!-- Include the script that builds the page and powers Decap CMS -->
    <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
  </body>
</html>
`﻿``

#﻿# Adicionando redirecionamento após o login

Para que o redirecionamento para a página de administração ocorra após o login, precisamos adicionar um trecho de código ao arquivo `index.html` do nosso projeto.

`﻿``html
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on('init', (user) => {
      if (!user) {
        window.netlifyIdentity.on('login', () => {
          document.location.href = '/admin/'
        })
      }
    })
  }
</script>
`﻿``



## Testando a integração

Agora, basta executar a nossa aplicação e acessar a página de administração em /admin. Você deve ser redirecionado para a página de login do Netlify Identity.

Após o login, você será redirecionado de volta para a página de administração, onde poderá criar, editar e excluir conteúdo.




