<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="toggle">Click me to show/hide</button>
    <div v-show="isOpen">Lorem ipsum using v-show</div>
    <div v-if="isOpen">Lorem ipsum using v-if</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface ComponentData {
  title: string;
  isOpen: boolean,
}

export default defineComponent({
  name: "DemoComponent",

  data(): ComponentData {
    return {
      title: "Demo Component",
      isOpen: true,
    };
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
});
</script>
