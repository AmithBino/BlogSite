<template>
    <div class="spage-container">
   <header class="header-container">
       <HeaderPage/>
       <h1>Our Services</h1>
 </header>

    
</div>
<ServiceContent/>
<TestimonialPage/>
<FooterPage/>
   </template>
   
   <script>
   import HeaderPage from './Header.vue'
   import FooterPage from './footer.vue'
   import ServiceContent from './ServiceCnt.vue'
   import TestimonialPage from './Testimonials.vue'
   export default {
       name: "ServicesPage",
       components:{
           HeaderPage,
           FooterPage,
           ServiceContent,
           TestimonialPage
       },
   }
   </script>

<style>
body {
 margin: 0;
 padding: 0;
}

.spage-container {
 display: flex;
 flex-direction: column;
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

/* .content-container {
 flex: 1;
} */

</style>