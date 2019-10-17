<template>
  <div class="m-hcity">
    <dl>
      <dt>{{title}}</dt>
      <dd v-for="item in cityList" :key="item.id">
        {{item.name}}
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props:['title', 'cityList']
}
</script>

<style lang="scss">
  @import "@/assets/css/changecity/hot.scss"
</style>