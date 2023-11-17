<template>
  <div class="row">
    <span></span>
    <span class="">{{ item.text }}</span>
  </div>
</template>

<script lang="ts">
import { Item } from "@/models/ItemModel";

export default {
  name: "ItemComponent",
  props: {
    item: {
      type: Item,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  text-align: start;
  & > * {
    width: 50%;
  }
}
</style>
