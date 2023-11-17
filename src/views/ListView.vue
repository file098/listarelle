<template>
  <div class="home">
    <ListComponent v-for="(list, index) in lists" :key="index" :list="list" />
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ListModel } from "@/models/ListModel";
import { Item } from "@/models/ItemModel";
import ListComponent from "@/components/List.vue";
import FooterComponent from "@/components/Footer.vue";

export default defineComponent({
  name: "ListView",
  components: {
    ListComponent,
    FooterComponent,
  },
  data() {
    return {
      lists: [
        new ListModel(1, "List 1", [
          new Item(1, "Description 1"),
          new Item(2, "Description 2"),
        ]),
        new ListModel(1, "List 1", [
          new Item(1, "Description 1"),
          new Item(2, "Description 2"),
        ]),
        new ListModel(1, "List 1", [
          new Item(1, "Description 1"),
          new Item(2, "Description 2"),
        ]),
      ],
    };
  },
});
</script>
<style>
body {
  font: 600 1em sans-serif;
}
</style>
