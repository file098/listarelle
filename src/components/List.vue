<template>
  <div class="list-row">
    <div class="row" v-on:click="toggle()">
      <span>{{ list.name }}</span>
      <span>{{ list.items.length }}</span>
    </div>
    <div v-if="show">
      <ItemComponent
        v-for="(item, index) in list.items"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ListModel } from "@/models/ListModel";
import ItemComponent from "@/components/Item.vue";

export default {
  name: "ListComponent",
  components: {
    ItemComponent,
  },
  props: {
    list: {
      type: ListModel,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped lang="scss">
.list-row {
  display: flex;
  flex-flow: column;
  padding: 10px 0;
  border-bottom: 1px solid darkslategrey;

  .row {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    text-align: start;
    cursor: pointer;
    & > * {
      width: 50%;
    }
  }
}
</style>
