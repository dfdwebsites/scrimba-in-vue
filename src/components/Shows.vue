<template>
  <div class="show" v-if="show.image">
    <div class="series-title">{{ show.name }}</div>
    <div class="series-img">
      <a :href="show.url" target="_blank"><img :src="show.image.original" /></a>
    </div>
    <div class="series-summary" v-html="show.summary"></div>
  </div>
  <div class="show" v-else>
    <div class="series-title">{{ show.name }}</div>
    <div class="series-img">
      <a :href="show.url" target="_blank"
        ><img src="https://picsum.photos/200/300"
      /></a>
    </div>
    <div class="series-summary" v-html="show.summary"></div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "Shows",
  props: ["show"],
  methods: {},
};
</script>
