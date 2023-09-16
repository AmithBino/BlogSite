<template>
    <div class="header">
        <header class="sticky-headerhome" v-show="isSticky">
      <router-link to="/">
        <img alt="Vue logo" src="@/assets/logob.png">
      </router-link>
      <div class="nav">
        <router-link class="link" to="/" :class="{ active: $route.path === '/' }">Home</router-link>
        <router-link class="link" to="/about" :class="{ active: $route.path === '/about' }">About</router-link>
        <router-link class="link" to="/portfolio" :class="{ active: $route.path === '/portfolio' }">Portfolio</router-link>
        <router-link class="link" to="/services" :class="{ active: $route.path === '/services' }">Services</router-link>
        <router-link class="link" to="/blog" :class="{ active: $route.path === '/blog' }">Blog</router-link>
        <router-link class="link" to="/contact"  :class="{ active: $route.path === '/contact' }">Contact</router-link>
      </div>
    </header>
    <router-link to="/">
            <img alt="Vue logo" src="@/assets/logob.png">
    </router-link>
    <div class="nav">
        <router-link class="link" to="/" :class="{ active: $route.path === '/' }">Home</router-link>
        <router-link class="link" to="/about" :class="{ active: $route.path === '/about' }">About</router-link>
        <router-link class="link" to="/portfolio" :class="{ active: $route.path === '/portfolio' }">Portfolio</router-link>
        <router-link class="link" to="/services" :class="{ active: $route.path === '/services' }">Services</router-link>
        <router-link class="link" to="/blog" :class="{ active: $route.path === '/blog' }">Blog</router-link>
        <router-link class="link" to="/contact"  :class="{ active: $route.path === '/contact' }">Contact</router-link>
    </div>
</div>
</template>
<script>

export default {
    name:'HeaderHome',
    data() {
    return {
      isSticky: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isSticky = window.scrollY > 100;
    }
  }
}
</script>
<style>
    .header{
        margin-top: 30px;
    }
    .nav a.link{
        float: left;
        color: black;
        padding-top: 30px;
        padding-left: 40px;
        text-align: center;
        font-size: 16px;
        text-decoration: none;
    }
    .nav a.link.active{
        color: #EEBD56;
    }
    img{
         width: 130px;
         height: auto;
         float: left;
        padding-left:100px ;
        padding-right: 80px;
        margin-top: -6px;
}
.sticky-headerhome {
    position: fixed;
    top: 0;
    width: 100%;
    height: 10vh; 
    background-color: #ffff; 
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000; 
  }
  .sticky-headerhome .link {
        float: left;
        color: black;
        padding-top: 30px;
        padding-left: 40px;
        padding-bottom: 20px;
        text-align: center;
        font-size: 16px;
        text-decoration: none;
  }
  .sticky-headerhome img{
    padding-bottom:20px ;
  }
  .sticky-headerhome .nav a.link.active {
    color: #EEBD56;
  }
</style>