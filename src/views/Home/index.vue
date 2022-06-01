<template>
  <div class="home">
    <Header />
  </div>
</template>

<script>
import Header from '../../../src/components/Header/index'

export default {
  components: {
    Header
  },
  name: "home",
  data() {
    return {}
  },
  methods: {}
}
</script>


<style lang="scss" scoped>
.home {
  @apply h-screen;
  .email {
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
    margin: 10px;
    cursor: pointer;
    display: inline-block;
  }
}

@media (max-width: 768px) {

}

@media (max-width: 1024px) {

}
</style>
