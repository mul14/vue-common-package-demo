# vue-common-package-demo

Clone this repo. Then create new Vue app using Vue CLI side-by-side with this repo.

```
~/Code
  - vue-app
  - vue-common-package-demo
```

```sh
vue create vue-app
```

Update `dependencies` on `vue-app/package.json`

```json
dependencies: {
  "vue-common-package-demo": "link:../vue-common-package-demo"
}
```

Use `yarn`/`npm` to update `node_modules`.

Replace `vue-app/src/App.vue` with this code

```vue
<template>
  <div>
    <h1>The v-if/v-show directives are not working.</h1>
    <Demo />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import { Demo } from 'vue-common-package-demo'

export default defineComponent({
  components: {
    Demo
  }
})
</script>
```

Run the vue-app

```
yarn serve
```

Try to click toggle button. The warnings and errors will show up.

![image](https://user-images.githubusercontent.com/113989/111115984-ee547380-8597-11eb-860c-988678396658.png)
