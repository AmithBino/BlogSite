<template>
    <div class="page-container">
   <header class="header-container">
       <HeaderPage/>
       <h1>About Us</h1>
 </header>
    <AboutContent/>
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
   import AboutContent from './Aboutcontent.vue'
   export default {
       name: "AboutPage",
       components:{
           HeaderPage,
           FooterPage,
           ClientPage,
           AboutContent
       },
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

.clientlogo {
  margin-top: 150px;
}
</style>