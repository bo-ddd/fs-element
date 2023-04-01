<template>
  <div class="border-box">
    <div class="border">
      <slot></slot>
      <div class="horn-border top-left"></div>
      <div class="horn-border top-right"></div>
      <div class="horn-border bottom-left"></div>
      <div class="horn-border bottom-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'fs-border-2',
  props: ['title'],
  data() {
    return {
    }
  },
}
</script>

<style scoped lang="scss">
.border-box {
  height: 100%;

  .horn-border {
    width: 5rem;
    height: 5rem;
    border: 0.5rem solid #8dfdff;
    position: absolute;
  }

  .top-left {
    border-radius: 2rem 0;
    top: -0.5rem;
    left: -0.5rem;
    border-bottom: none;
    border-right: none;
  }

  .top-right {
    border-radius: 0 2rem;
    top: -0.5rem;
    right: -0.5rem;
    border-bottom: none;
    border-left: none;
  }

  .bottom-left {
    border-radius: 0 2rem;
    bottom: -0.5rem;
    left: -0.5rem;
    border-top: none;
    border-right: none;
  }

  .bottom-right {
    border-radius: 2rem 0;
    bottom: -0.5rem;
    right: -0.5rem;
    border-top: transparent;
    border-left: transparent;
  }

  .border {
    height: calc(100% - 1rem);
    border: 0.5rem solid #2f6eb3;
    border-radius: 2rem;
    position: relative;
    box-sizing: border-box;
    min-height: 10rem;
    padding: 3rem;
    .container {
      color: #4dda92;
      font-size: 3rem;
      font-weight: 700;
    }
  }
}
</style>