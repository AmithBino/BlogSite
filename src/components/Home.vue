<template>
    <HeaderHome/>
    <img src="@/assets/bg.png" alt="Your Image" class="right-image">
  <div class="homepage-container">

  <div class="left-content">
    <div class="text-content">
        <p class="first">HEY THERE !</p>
        <h5 class="name">I AM LIAM MAX</h5>
        <p class="position">CREATIVE ART DIRECTOR & DESIGNER</p>

        <div class="social-icons">
          <a class="insta" href="https://www.instagram.com">
            <img src="@/assets/instagram.png" alt="Instagram">
          </a>
          <a href="https://www.facebook.com/">
            <img src="@/assets/facebook.png" alt="Facebook">
          </a>
          <a href="https://www.pinterest.com">
            <img src="@/assets/pinterest.png" alt="Pinterest">
          </a>
          <a href="https://www.behance.net/">
            <img src="@/assets/behance.png" alt="Behance">
          </a>
        </div>
        <div class="work">
          <router-link to="/portfolio">
            See my Work
           </router-link>
           </div>
      </div>
    </div>
</div>
<FooterPage/>
</template>

<script>
import HeaderHome from './HeaderHome.vue'
import FooterPage from './footer.vue'
export default {
  name: 'HomePage',
  components:{
    HeaderHome,
    FooterPage,
  },
}
</script>

<style scoped>
.homepage-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 150px;
  margin-left: -400px;
  padding-left: 100px;
}
.right-image {
  width: 450px;
  height: auto;
  float: right;
  margin-right: 80px;
  margin-top: 30px;
}
.left-content {
  display: flex;
  align-items: center;
  margin-left: 0px;
}
.text-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.first{
  color: #61677A ;
  margin:0;
  margin-bottom: 26px;
}
.name{
  font-size:50px ;
  margin: 0;
  margin-bottom: 26px;
  color: #070A52;
}
.position{
  margin:0;
  font-size:19px ;
  color: #61677A ;
}
.social-icons {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 30px;
  margin-left: -100px;
}
.social-icons a {
  margin-bottom: 10px;
  text-decoration: none;
  color: #070A52;
}

.social-icons img {
  width: 30px;
  height: auto;
  margin-right: -100px;
}
.social-icons img:hover {
  width: 34px;
  height: auto;
}
.work {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.work a {
  display: inline-block;
  padding: 10px 20px;
  background-image: linear-gradient(to right, #3A1078, #2F58CD);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: background-image 0.3s ease;
}

.work a:hover {
  background-image: linear-gradient(to right, #2F58CD, #3A1078);
}
</style>