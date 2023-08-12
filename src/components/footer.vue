<template>
    <footer class="footer">
      <div class="logo">
        <img src="@/assets/logow.png" alt="Logo" />
      </div>
      <div class="nav-foot">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
        <router-link class="nav-link" to="/services">Services</router-link>
        <router-link class="nav-link" to="/blog">Blog</router-link>
        <router-link class="nav-link" to="/contact">Contact</router-link>
    </div>
    <div class="socialicon">
          <a class="insta" href="https://www.instagram.com">
            <img src="@/assets/instagramw.png" alt="Instagram">
          </a>
          <a href="https://www.facebook.com/">
            <img src="@/assets/facebookw.png" alt="Facebook">
          </a>
          <a href="https://www.pinterest.com">
            <img src="@/assets/pinterestw.png" alt="Pinterest">
          </a>
          <a href="https://www.behance.net/">
            <img src="@/assets/behancew.png" alt="Behance">
          </a>
        </div>
        <p>Copyright ©2023 All rights reserved</p>
    </footer>
  </template>
  
  <script>
  export default {
      name: "FooterPage",
  }
  </script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center; 
    position:relative ;
  height: 450px;
  background-color: #021017;
  margin-top: 150px;
}

.logo img {
  height: 50px;
  width: auto;
  padding-top: 90px;
}

.nav-foot {
  float: left;
  margin-top: 50px;
}
.nav-foot a.nav-link{
        float: left;
        color: #ffff;
        padding-left: 40px;
        text-align: center;
        font-size: 16px;
        text-decoration: none;
    }
.socialicon {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 20px;
  margin-left: -100px;
}
.socialicon a {
  margin-bottom: 10px;
  text-decoration: none;
}

.socialicon img {
  width: 30px;
  height: auto;
  margin-right: -100px;
}
p{
    font-size: 16px;
    padding-top: 20px;
    font-family:'Courier New', Courier, monospace;
    color: #B2B2B2;
}
</style>
