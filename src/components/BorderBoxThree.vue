<template>
  <div class="border-box">
    <div class="border">
      <slot></slot>
      <div class="ladder-shaped6"></div>
      <div class="border-item top-left">
        <div class="ladder-shaped1"></div>
        <div class="ladder-shaped2"></div>
      </div>
      <div class="border-item top-right">
        <div class="ladder-shaped3"></div>
        <div class="ladder-shaped4"></div>
        <div class="ladder-shaped5"></div>
      </div>
      <div class="border-item bottom-left"></div>
      <div class="border-item bottom-right">
        <div class="ladder-shaped7"></div>
        <div class="ladder-shaped8"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'fs-border-3',
  props: ['title'],
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.border-box {
  height: 100%;

  .border {
    height: calc(100% - 1rem);
    position: relative;
    min-height: 10rem;
    padding: 3rem;
    box-sizing: border-box;
    .container{
      color: #4dda92;
      font-size: 3rem;
      font-weight: 700;
    }

    .border-item {
      border: 1rem solid #03a8ef;
      position: absolute;
    }

    .top-left {
      width: 40%;
      height: 30%;
      border-right: none;
      border-bottom: none;
      top: 0;
      left: 0;

      .ladder-shaped1 {
        width: 30%;
        border-top: 1rem solid #03a8ef;
        border-right: 1rem solid transparent;
        border-left: 1rem solid transparent;
        border-bottom: 1rem solid transparent;
        position: absolute;
        top: -0.1rem;
        left: 0;
      }

      .ladder-shaped2 {
        width: 20%;
        height: 30%;
        position: absolute;
        top: -0.5rem;
        left: -0.1rem;
        border-top: 1rem solid transparent;
        border-right: 1rem solid transparent;
        border-left: 1rem solid #03a8ef;
        border-bottom: 1rem solid transparent;
      }
    }

    .top-right {
      width: 50%;
      height: 20%;
      border-left: none;
      border-bottom: none;
      right: 0;
      top: 0;

      .ladder-shaped3 {
        width: 10%;
        border-top: 1rem solid #03a8ef;
        border-right: 1rem solid transparent;
        border-left: 1rem solid transparent;
        border-bottom: 1rem solid transparent;
        position: absolute;
        left: 5rem;
        top: -0.1rem;
      }

      .ladder-shaped4 {
        width: 30%;
        border-top: 1rem solid #03a8ef;
        border-right: 1rem solid transparent;
        border-left: 1rem solid transparent;
        border-bottom: 1rem solid transparent;
        position: absolute;
        right: -0.1rem;
        top: -0.1rem;
      }

      .ladder-shaped5 {
        width: 20%;
        height: 20%;
        border-top: 1rem solid transparent;
        border-right: 1rem solid #03a8ef;
        border-left: 1rem solid transparent;
        border-bottom: 1rem solid transparent;
        position: absolute;
        right: -0.1rem;
        top: -0.2rem;
      }
    }

    .bottom-left {
      width: 30%;
      height: 50%;
      border-right: none;
      border-top: none;
      bottom: 0;
      left: 0;

    }

    .bottom-right {
      width: 60%;
      height: 60%;
      border-left: none;
      border-top: none;
      bottom: 0;
      right: 0;
      .ladder-shaped7{
        width: 20%;
        border-top: 1rem solid transparent;
        border-right: 1rem solid transparent;
        border-left: 1rem solid transparent;
        border-bottom: 1rem solid #03a8ef;
        position: absolute;
        bottom: -0.1rem;
        right: -0.1rem;
      }
      .ladder-shaped8{
        width: 20%;
        height: 20%;
        border-top: 1rem solid transparent;
        border-right: 1rem solid #03a8ef;
        border-left: 1rem solid transparent;
        border-bottom: 1rem solid transparent;
        position: absolute;
        bottom: -0.2rem;
        right: -0.1rem;
      }
    }
  }

  .ladder-shaped6 {
    width: 20%;
    height: 15%;
    border-top: 1rem solid transparent;
    border-right: 1rem solid #03a8ef;
    border-left: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    position: absolute;
    bottom: 15%;
    left: -22%;
  }
}</style>