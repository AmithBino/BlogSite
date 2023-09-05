<template>
<div class="page-container">
   <header class="header-container">
       <HeaderPage/>
       <h1>Our Work</h1>
 </header>
 
 <div class="content-container">
    <img src="@/assets/img5.jpg" alt="Work image" class="workimg">
    
</div>
<div class="projinfo">
    <h4>Project Info</h4>
    <p>Made after a can't fruitful, fowl of greater saying years there saw you sea does</p>
    <h5>Rating</h5>
    <div class="rating">
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
    </div>
    <h6>Client</h6>
    <p class="client">: iaunh</p>
    <h2>Website</h2>
    <p class="website">: iaunh.com</p>
    <h3>Completed</h3>
    <p class="date">: 12 September 2023</p>
</div>
<p class="workcnt">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
</p>

<div class="worktext">
<p class="workcnt2">
    Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis 
    iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae 
    ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
     voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
      qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit 
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
       magnam aliquam quaerat voluptatem.
</p>
</div>


</div>
<FooterPage/>
   </template>
   
   <script>
   import HeaderPage from './Header.vue'
   import FooterPage from './footer.vue'
   export default {
       name: "WorkPage",
       components:{
           HeaderPage,
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

.content-container {
 display: flex;
 flex-direction: row;
 padding-top: 100px;
}

.workimg{
    width: 40%;
    height: auto;
    margin-left: 22%;
}

.workcnt{
    max-width: 40%;
    text-align: justify;
    margin-left: 300px;
    margin-top: -330px;
}
.workcnt2{
    max-width: 40%;
    text-align: justify;
    margin-left: 300px;
    margin-top: 10px;
}

.projinfo{
    background-color: #f8faff;
    height: 320px;
    width: 320px;
    flex-shrink: 0; 
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 62%;
  margin-top: 60px;
}

.projinfo h4{
    font-size: 18px;
    margin-left: 20px;
    margin-top: 30px;
}
.projinfo p{
    font-size: 14px;
    text-align: left;
    max-width: 90%;
    margin-left: 20px;
    margin-top: 0;
}
.projinfo h5{
    font-size: medium;
    margin-left: 20px;
}
.projinfo h6{
    font-size: medium;
    margin-left: 20px;
    margin-top: 15px;
}
.projinfo h2{
    font-size: medium;
    margin-left: 20px;
    margin-top: 10px;
}
.projinfo h3{
    font-size: medium;
    margin-left: 20px;
    margin-top: 10px;
}
.rating {
  display: inline-block;
  font-size: 24px;
  color: gold;
  margin-left: 130px;
  margin-top: -52px;
}
.projinfo .client{
    margin-left: 130px;
    margin-top: -56px;
}
.projinfo .website{
    margin-left: 130px;
    margin-top: -32px;
}
.projinfo .date{
    margin-left: 130px;
    margin-top: -36px;
}
</style>