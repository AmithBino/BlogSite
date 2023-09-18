<template>
    <div class="service-container">
    <p class="firstab">OUR BLOG</p>
    <h1>Latest Story From</h1>
    <h2 class="sub-title">Our Blog</h2>
   </div>
   <div class="blog-main">
    <div v-for="(blog,index) in displayBlogs" :key="index" class="blog" >
        <div class="blog-items">
            <img :src="blog.image" alt="Author" class="blog-img">

          <div class="auth-date">
            <div class="authr">
            <img src= "@/assets/dp.png" alt="profile-image" class="prof-pic">
            <p class="blog-author"> {{ blog.author }}</p>
            </div>
            <div class="datee">
            <img src= "@/assets/calendar.png" alt="date-image" class="date-pic">
            <p class="blog-dates">  {{ blog.date }}</p>
            </div>
        </div>
        <div class="detail-home">
                <h4><router-link :to="{ name: 'BlogDetail', params: { id: index } }" class="blog-heading"> {{ blog.heading }} </router-link></h4>
                <p>{{ blog.content }}</p>
        </div>
        <h5><router-link :to="{ name: 'BlogDetail', params: { id: index } }" class="blog-heading"> READ MORE </router-link></h5>
        <div class="line-home"></div>
        </div>
    </div>
   </div>
</template>

<script>
   export default {
       name: "BlogHome",
       data(){
        return{
            blogs:[
                {
                  image: require('@/assets/homeblog1.jpg'),
                  author: "Admin Post",
                  date: "Aug 14,2023",
                  heading: "Shall every fourth lesser have...",
                  content: "Have whose a two night earth she set you creeping replenish place whales move Forth first him seed green.",
                  button: "LEARN MORE"
                },
                {
                  image: require('@/assets/homeblog2.jpg'),
                  author: "Admin Post",
                  date: "Aug 14,2023",
                  heading: "Shall every fourth lesser have...",
                  content: "Have whose a two night earth she set you creeping replenish place whales move Forth first him seed green.",
                  button: "LEARN MORE"
                },
                {
                  image: require('@/assets/homeblog3.jpg'),
                  author: "Admin Post",
                  date: "Aug 14,2023",
                  heading: "Shall every fourth lesser have...",
                  content: "Have whose a two night earth she set you creeping replenish place whales move Forth first him seed green.",
                  button: "LEARN MORE"
                },
            ]
        }
       },
       computed: {
            displayBlogs() {
                return this.blogs;
            }
       },
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
      margin-left: -86px;
      font-style: bold;
      color: #252B48;
      
  }
  .sub-title {
      font-size: 38px;
      margin-left: -297px;
      margin-top: -50px;
      color: #252B48;
  }
  
  .blog-main{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-left: 140px;
    margin-top: -80px;
  }
  .blog-items{
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 540px;
    background-color: #F4F9F9;
    margin-left: 50px;
    align-items: flex-start;
}
  .blog-items img{
    height: 50%;
    width: 100%;
    margin-left: -100px;
    margin-top: -20px;
  }

  .auth-date{
    display: flex;
    flex-direction:row;
    align-items: flex-start;
  }

  .authr{
    display: flex;
    flex-direction:row;
    align-items: flex-start;
    margin-left: 20px;
  }
  .datee{
    display: flex;
    flex-direction:row;
    align-items: flex-start;
    margin-left: 100px;
  }

  .auth-date .prof-pic{
    height: 18px;
    width: 18px;
    margin-top: 4px;
  }

  .auth-date .date-pic{
    height: 18px;
    width: 18px;
    margin-top: 4px;
  }

  .auth-date .blog-author{
    font-size: 14px;
    margin-left: -70px;
    margin-top: 24px;
    color: #526D82;
  }

  .auth-date .blog-dates{
    font-size: 14px;
    margin-left: -70px;
    margin-top: 24px;
    color: #526D82;
  }

  .detail-home .blog-heading{
    font-size: 20px;
    text-align: left;
  }

  .detail-home p{
    max-width: 80%;
    text-align: justify;
    margin-left: 28px;
  }

  .blog-items h5{
    margin-left: 28px;
  }

  .line-home{
    height: 2.5px;
    width: 60px;
    background: linear-gradient(to right, #007bff, #00aaff);
    margin-left: 28px;
    margin-top: -16px;
  }

  .blog-items:hover{
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }
  </style>