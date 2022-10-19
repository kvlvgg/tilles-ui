# tillies-ui

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## `deploy`

- ssh axie@axielabs.io или под рутом, если есть права ssh root@axielabs.io
- cd ./tillies-ui для деплоя на прод или cd ./tillies-ui-test для деплоя на тест
- на тестовом стенде разворачиваем любые ветки, на проде только мастер!
- git checkout -b your-branch-name
- git pull
- тест: docker-compose stop tillies-ui-test && docker-compose up -d --build tillies-ui-test
- прод: docker-compose stop tillies-ui && docker-compose up -d --build tillies-ui

конфиги nginx лежат: /etc/nginx/nginx.conf и /etc/nginx/conf.d/

## `credentials`

- https://test.axielabs.io/

- user: testuser / axietestpassword1

- https://axielabs.io/

- user: admin / AxIEl@bZZZ22

- Swagger: admin / axiepassword
  [Axielabs API Swagger](https://axielabs.io/api/docs)

  [Axielabs Figma](https://www.figma.com/file/zZlxUlURjenwhSoQCvvDLF/BEv1?node-id=639%3A31318)
  [Axielabs Referral](https://www.figma.com/file/aWm1NgMgV4hha7etRmVMfJ/AxieLabs_DS?node-id=1126%3A387373)
  [Axielabs Match Automatic](https://www.figma.com/file/aWm1NgMgV4hha7etRmVMfJ/AxieLabs_DS?node-id=881%3A589469)

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
