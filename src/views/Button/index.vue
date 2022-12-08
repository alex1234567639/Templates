<template>
  <div>
    <Header />
    <div class="button-box">
      <button class="button"> Button </button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header/index'
export default {
  components: {
    Header
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.button-box {
  padding: 90px 20px;
  & .button {
    @apply cursor-pointer;
    border: 1px solid black;
    outline: none;
    width: 180px;
    height: 60px;
    line-height: 60px;
    border-radius: 10px;
    font-size: 20px;
    letter-spacing: 3px;
  }
}
</style>
