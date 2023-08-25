<template>
    <div class="page-container">
   <header class="header-container">
       <HeaderPage/>
       <h1>About Us</h1>
 </header>
 <div class="about-container">
    <img src="@/assets/profile.png" alt="Your Image" class="left-image">
    <p class="firstab">ABOUT ME</p>
    <h1>Creative Art Director</h1>
    <h2 class="sub-title">And Designer</h2>
   </div>
   <div class="aboutus">
        <p class="aboutme">I have worked on projects ranging from branding, web design, illustration, animation, and more.
         I have a passion for creating innovative and engaging visual solutions that communicate the essence of a brand or a message.
         I am always eager to learn new skills and explore new challenges.
    </p>
    </div>
   <div class="buttonclass">
   <button type="butto" @click="downloadCV" class="dwndbutton">Download CV</button>
    </div>
    <div class="clientlogo">
      <ClientPage/>
    </div>
   <FooterPage/>
</div>

   </template>
   
   <script>
   import HeaderPage from './Header.vue'
   import FooterPage from './footer.vue'
   import ClientPage from './Client.vue'
   export default {
       name: "AboutPage",
       components:{
           HeaderPage,
           FooterPage,
           ClientPage
       },
       methods: {
        downloadCV() {
            const pdfUrl = require('@/assets/cv.pdf'); 
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.target = '_blank';
            link.download = 'liam_max.pdf';
            link.click();
        }
    }
   }
   </script>

<style>
body {
 margin: 0;
 padding: 0;
}

.page-container {
 display: flex;
 flex-direction: column;
 min-height: 100vh;
}

.header-container {
 position: relative;
 background-image: url('../assets/bg.jpg');
 background-size: 100%;
 background-position: top left;
 background-repeat: no-repeat;
 height: 50vh;
 flex-direction: column;
 justify-content: center;
 margin: 0; 
 padding-top: 30px;
}

.header-container h1{
   margin-top: 150px;
   color: aliceblue;
   font-size: 40px;
}
.left-image {
  width: 400px;
  height: auto;
  float: left;
  margin-left: 30px;
  margin-top: 0px;
}

.about-container {
  display: flex; 
  align-items: center; 
  margin-top: 50px;
}
.firstab {
    text-align: top;
    margin-bottom: 300px;
    margin-left: 30px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 18px;
    color: #7E7474;
}
h1{
    text-align: top;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 38px;
    margin-top: -160px;
    margin-left: -85px;
    font-style: bold;
    color: #252B48;
    
}
.sub-title {
    font-size: 38px;
    margin-left: -342px;
    margin-top: -50px;
    color: #252B48;
}

.aboutme {
  margin-top: 10px;
  margin-left: 640px;
  text-align: left;
  position: relative;
  top: -210px;
  margin-right: 270px;
  color: #445069;
}
.buttonclass{
    margin-top: -180px;
    margin-left: 60px;
}
.dwndbutton {
  display: inline-block;
  padding: 14px 26px;
  background-image: linear-gradient(to right, #3A1078, #2F58CD);
  color: white;
  border-radius: 4px;
  text-decoration: none;
  transition: background-image 0.3s ease;
}

.dwndbutton:hover {
  background-image: linear-gradient(to right, #2F58CD, #3A1078);
}

.clientlogo {
  margin-top: 150px;
}
</style>