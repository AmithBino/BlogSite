<template>
  <h2 class="slider-title">Our Clients</h2>
  <div class="slider-area" @mouseenter="pauseAnimation" @mouseleave="resumeAnimation">
    <div class="wrapper">
      <div class="item"><img alt="" src="@/assets/c1.png"></div>
      <div class="item"><img alt="" src="@/assets/c2.png"></div>
      <div class="item"><img alt="" src="@/assets/c3.png"></div>
      <div class="item"><img alt="" src="@/assets/c4.png"></div>
      <div class="item"><img alt="" src="@/assets/c5.png"></div>
      <div class="item"><img alt="" src="@/assets/c6.png"></div>
      <div class="item"><img alt="" src="@/assets/c7.png"></div>
      <div class="item"><img alt="" src="@/assets/c8.png"></div>
      <div class="item"><img alt="" src="@/assets/c9.png"></div>
      <div class="item"><img alt="" src="@/assets/c10.png"></div>
      <div class="item"><img alt="" src="@/assets/c11.png"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientPage',
  methods: {
    pauseAnimation() {
      const wrapper = document.querySelector('.wrapper');
      wrapper.classList.add('paused');
    },
    resumeAnimation() {
      const wrapper = document.querySelector('.wrapper');
      wrapper.classList.remove('paused');
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.slider-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.slider-area {
  text-align: center;
  font-family: impact;
  text-transform: uppercase;
  letter-spacing: 10px;
  margin: 10px 0 30px 0;
  color: #fff;
}

.wrapper {
  display: flex;
  width: 750px;
  height: 60px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 40px;
  padding: 2.5rem;
  background: #FFFAF4;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.wrapper.paused .item {
  animation-play-state: paused;
}
.item {
  flex: 0 0 auto;
  animation: rotate 15s linear infinite;
  padding-right: 30px;
}

@keyframes rotate {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-980px);
  }
}

@media (max-width: 767px) {
  .slider-area {
    font-size: 30px;
  }
  .wrapper {
    width: 95%;
    border-radius: 0;
    padding: 0;
  }
}
</style>