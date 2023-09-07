<template>
    <div class="service-container">
    <p class="firstab">OUR SERVICE</p>
    <h1>What Service We</h1>
    <h2 class="sub-title">Offer For You</h2>
   </div>
   <div class="services">
        <div class="web">
            <img src="@/assets/web.png" alt="web-dev" class="webimg">
            <h3>Web Development</h3>
            <p>Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for brought fish forth</p>
            <button>LEARN MORE</button>
        </div>
        <div class="ui">
            <img src="@/assets/ux.png" alt="web-dev" class="uiimg">
            <h4>UI/UX Development</h4>
            <p class="pui">Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for brought fish forth</p>
            <button>LEARN MORE</button>
        </div>
        <div class="app">
          <img src="@/assets/app.png" alt="web-dev" class="appimg">
            <h5>Mobile App Development</h5>
            <p class="papp">Fruit saw for brought fish forth had ave is man a that their Two he is dominion evening their Fruit saw for brought fish forth</p>
            <button>LEARN MORE</button>
        </div>
   </div>
</template>

<script>
   export default {
       name: "ServiceContent",
   }
   </script>

<style scoped>
.service-container {
    display: flex; 
    align-items: center; 
    margin-top: 100px;
    margin-left: 150px;
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
      margin-left: -100px;
      font-style: bold;
      color: #252B48;
      
  }
  .sub-title {
      font-size: 38px;
      margin-left: -284px;
      margin-top: -50px;
      color: #252B48;
  }
  .services{
    display: flex;
    flex-direction: row;
  }
  .web{
    background-color: #EFFFFD;
    height: 380px;
    width: 340px;
    flex-shrink: 0; 
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 12%;
  margin-top: -100px;
  }
  .ui{
    background-color: #EFFFFD;
    height: 380px;
    width: 340px;
    flex-shrink: 0; 
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-left: 4%;
    margin-top: -100px;
  }
  .app{
    background-color: #EFFFFD;
    height: 380px;
    width: 340px;
    flex-shrink: 0; 
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-left: 4%;
    margin-top: -100px;
    transition: background-color 0.3s ease;
  }
  .webimg{
    height: 70px;
    width: auto;
    margin-top: 20px;
    margin-left: 12%;
  }
  .web h3{
    font-size:18px ;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-left: 25%;
    margin-top: 30px;
  }
  .web p{
    max-width: 90%;
    text-align:center;
    margin-left: 5%;
  }
  .web button{
    background-color: transparent;
    cursor: pointer;
    font-size: 14px;
    font-weight:550;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 35%;
    margin-top: 20px;
    border: 3px solid transparent;
    border-image: linear-gradient(135deg, #82C3EC, #4B56D2, #472183) 1;
    border-image-slice: 1;
  }

  .web button:hover{
    border-image: linear-gradient(135deg, #472183, #4B56D2,#82C3EC ) 1;
    border-image-slice: 1;
    color: #241468;
  }

  .uiimg{
    height: 70px;
    width: auto;
    margin-top: 20px;
    margin-left: 12%;
  }
  .ui h4{
    font-size:18px ;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-left: 25%;
    margin-top: 30px;
  }
  .pui{
    max-width: 90%;
    text-align:center;
    margin-left: 5%;
  }
  .ui button{
    background-color: transparent;
    cursor: pointer;
    font-size: 14px;
    font-weight:550;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 35%;
    margin-top: 20px;
    border: 3px solid transparent;
    border-image: linear-gradient(135deg, #82C3EC, #4B56D2, #472183) 1;
    border-image-slice: 1;
  }

  .ui button:hover{
    border-image: linear-gradient(135deg, #472183, #4B56D2,#82C3EC ) 1;
    border-image-slice: 1;
    color: #241468;
  }

  .appimg{
    height: 70px;
    width: auto;
    margin-top: 20px;
    margin-left: 12%;
  }
  .app h5{
    font-size:18px ;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-left: 15%;
    margin-top: 30px;
  }
  .papp{
    max-width: 90%;
    text-align:center;
    margin-left: 5%;
  }
  .app button{
    background-color: transparent;
    cursor: pointer;
    font-size: 14px;
    font-weight:550;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 35%;
    margin-top: 20px;
    border: 3px solid transparent;
    border-image: linear-gradient(135deg, #82C3EC, #4B56D2, #472183) 1;
    border-image-slice: 1;
  }

  .app button:hover{
    border-image: linear-gradient(135deg, #472183, #4B56D2,#82C3EC ) 1;
    border-image-slice: 1;
    color: #241468;
  }
  </style>