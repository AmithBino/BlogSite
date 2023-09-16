<template>
     <div class="page-container">
    <header class="header-container">
        <HeaderPage/>
        <h1>Contact Us</h1>
  </header>
  
  <div class="formcontainer">
    <FormPage/>
    </div>
    <FooterPage/>
</div>

    </template>
    
    <script>
    import HeaderPage from './Header.vue'
    import FormPage from './form.vue'
    import FooterPage from './footer.vue'
    export default {
        name: "ContactPage",
        components:{
            HeaderPage,
            FormPage,
            FooterPage
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

.formcontainer {
  flex: 1;
  margin-top: 200px;
}

</style>