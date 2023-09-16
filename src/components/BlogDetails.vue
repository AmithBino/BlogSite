<template>
    <div class="bg-container">
   <header class="hdr-container">
       <HeaderPage/>
 </header>
 <div class="all-container">
    <div class="main-blog">
        <h1>Dancing in the Spectrum: A Kaleidoscope of Colors and Beats</h1>
        <div class="date-auth">
            <p>February 03, 2023</p>
            <p class="author">Liam Max</p>
        </div>
        <img src="@/assets/b1.jpg" alt="blog-img" class="blog-ig">
        <p class="para1">Step into a world of vibrant lights and electrifying energy as we dive into the heart of a pulsating club scene, where the dance floor becomes a mesmerizing canvas of colors.</p>
        <p class="para2">"In the midst of the pulsating beats and neon lights, dancers come alive, each movement a stroke of color on the canvas of the night. Colors blend, bodies groove, and the music orchestrates a beautiful chaos," says a club regular, encapsulating the magic of the moment.</p>
        <p class="para3">In this kaleidoscope, everyone dances in their unique hue, painting a tapestry of diversity and unity, a celebration of life and music. Amidst the intoxicating symphony of electronic beats, bodies entwine like notes on a sheet, merging into a living, breathing masterpiece that transcends language and culture.</p>
        <div class="quote-block">
            <div class="quote-line"></div>
            <div class="quote-content">
                <p class="quote-text">The fusion of music, light, and dance fosters an atmosphere of acceptance and belonging, where every individual finds their unique place in the ever-changing kaleidoscope of the club's energy.</p>
            </div>
        </div>
        <p class="para4">"The dance floor is a sanctuary where judgments fade, and self-expression reigns supreme," notes a DJ, emphasizing the liberating power of the music. As the night unfolds, the spectrum of emotions and colors deepens, from the fiery reds of passion to the cool blues of serenity, creating a visual and emotional feast.</p>
        <p class="para5">"Dancing here is like painting a moving canvas with your soul," raves a first-time visitor, awestruck by the kaleidoscopic experience. In this world, we rediscover the essence of human connection and the universality of joy, where dance transcends boundaries, and the colors of our spirits intertwine in harmonious rhythm.</p>
        <p class="para6">Step into this kaleidoscope of colors and beats, and let your soul dance freely in the mesmerizing spectrum of life.</p>
        <div class="blog-line"></div>
        <p class="share">Share this Blog</p>
        <div class="socialicon">
        <a href="https://www.facebook.com/">
          <img src="@/assets/fb.png" alt="Fb" class="fb" >
        </a>
        <a href="https://twitter.com/">
          <img src="@/assets/Twitter.png" alt="Twitter" class="tr" >
        </a>
        <a  href="https://www.reddit.com//">
          <img src="@/assets/reddit.png" alt="Reddit" class="rt">
        </a>
        <a  href="https://www.threads.net/">
          <img src="@/assets/threads.png" alt="Threads" class="td">
        </a>
      </div>
    </div>
    <div class="side-container">
        <div class="recent-post">
          <div class="recent-details">
            <h2>Recent Post</h2>
            <div class="line"></div>
            <div class="recent">
                <div class="recent-image">
                <img src="@/assets/s1.jpg" alt="recent blog1" class="blog1-img">
                <img src="@/assets/s2.jpg" alt="recent blog2" class="blog1-img">
                <img src="@/assets/s3.jpg" alt="recent blog3" class="blog1-img">
                <img src="@/assets/s4..jpg" alt="recent blog4" class="blog1-img">
                </div>
                <div class="recent-details">
                <p class="recent-heading1">
                    <router-link :to="{ name: 'BlogDetail', params: { id: index } }" class="blog-heading">Coding Creativity Unleashed</router-link>
                </p>
                <p class="recent-time1">2 hours ago</p>
                <p class="recent-heading2">
                    <router-link :to="{ name: 'BlogDetail', params: { id: index } }" class="blog-heading">Sunny, Cozy Haven</router-link>
                </p>
                <p class="recent-time1">4 hours ago</p>
                <p class="recent-heading3">
                    <router-link :to="{ name: 'BlogDetail', params: { id: index } }" class="blog-heading">Labyrinthine Garden Vista</router-link>
                </p>
                <p class="recent-time1">8 hours ago</p>
                <p class="recent-heading4">
                    <router-link :to="{ name: 'BlogDetail', params: { id: index } }" class="blog-heading">Geometric Abstract Sculpture</router-link>
                </p>
                <p class="recent-time1">12 hours ago</p>
                </div>
            </div>
            <div class="newsletter-box">
                <h2>Subscribe to Our Newsletter</h2>
                <input v-model="subscriberName" type="text" placeholder="Enter your name" required/>
                <input v-model="subscriberEmail" type="email" placeholder="Enter your email" required/>
                <button @click="subscribe">Subscribe</button>
            </div>
          </div>
        </div>
    </div>
  </div>
   <FooterPage/>
</div>

   </template>
   
   <script>
   import HeaderPage from './Header.vue'
   import FooterPage from './footer.vue'
   export default {
       name: "BlogDetail",
       emits: [],
       components:{
           HeaderPage,
           FooterPage
       },
       data(){
          return{
            subscriberName: "",
            subscriberEmail: "",
            emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          };
       },
       methods: {
      subscribe() {
        if (!this.subscriberName || !this.subscriberEmail) {
        alert('Please fill in both name and email.');
        return; 
        }

        if (!this.emailRegex.test(this.subscriberEmail)) {
        alert('Please enter a valid email address.');
        return;
      }

      this.subscriberName = "";
      this.subscriberEmail = "";
    },
    },
   };
   </script>

<style>
body {
 margin: 0;
 padding: 0;
}

.bg-container {
 display: flex;
 flex-direction: column;
 min-height: 100vh;
}

.hdr-container {
 position: sticky;
  top: 0;
  background-color: #27005D;
  height: 10vh;
  z-index: 100;
}
.all-container{
    display: flex;
    flex-direction:row;
    align-items: flex-start;
}
.main-blog{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 65.8%;
    margin-left: -70px;
}
.blog-heading{
    text-decoration: none;
    color:#082032;
}
.blog-ig{
    width: 700px;
    height: auto;
    margin-top: 0px;
    margin-left: 200px;
}
.main-blog h1{
    font-size: 24px;
    margin-left: 300px;
    margin-top: 100px;
    text-align: left;
}
.date-auth{
    display:flex ;
    flex-direction: row;
    align-items: flex-start;
}
.date-auth p{
    font-size: 14px;
    color: #A2B5BB;
    margin-left: 302px;
}
.date-auth .author{
    font-size: 14px;
    color: #A2B5BB;
    margin-left: 520px;
    cursor: pointer;
}
.main-blog .para1{
    text-align: left;
    margin-left: 300px;
    margin-top: 40px;
    line-height: 1.5em;
    font-size: 17px;
}
.main-blog .para2{
    text-align: left;
    margin-left: 300px;
    margin-top: 10px;
    line-height: 1.5em;
    font-size: 17px;
}
.main-blog .para3{
    text-align: left;
    margin-left: 300px;
    margin-top: 10px;
    line-height: 1.5em;
    font-size: 17px;
}
.quote-block {
  display: flex;
  align-items: center;
  margin-left: 300px;
}

.quote-content {
  padding: 10px;
}
.quote-text {
  color: #A2B5BB; 
  text-align: justify;
  line-height: 1.5em;
  font-family: "Ringside Regular A", "Ringside Regular B", Sans-serif, Arial;
  font-size: 17px;
}

.quote-line {
  height: 76px;
  width: 2px;
  background-color: #A2B5BB; 
}

.main-blog .para4{
    text-align: left;
    margin-left: 300px;
    margin-top: 10px;
    line-height: 1.5em;
    font-size: 17px;
}
.main-blog .para5{
    text-align: left;
    margin-left: 300px;
    margin-top: 10px;
    line-height: 1.5em;
    font-size: 17px;
}
.main-blog .para6{
    text-align: left;
    margin-left: 300px;
    margin-top: 10px;
    line-height: 1.5em;
    font-size: 17px;
    font-style: italic;
}
.blog-line {
  height: 1px;
  width: 70%;
  background-color: #A2B5BB; 
  margin-left: 295px;
}
.main-blog .share{
    text-align: center;
    margin-left: 60%;
    margin-top: 30px;
    line-height: 1.5em;
    color: #4C6793;
}

.socialicon {
display: flex;
flex-direction: row;
align-items: flex-start;
margin-top: 0px;
margin-left:  51%;
max-height: 50px;
}
.socialicon a{
margin-bottom: 10px;
text-decoration: none;
color: #070A52;
}

.socialicon .fb{
width: 26px;
height: auto;
padding-right: 20px;
padding-left: 20px;
}

.socialicon .tr{
width: 42px;
height: auto;
padding-right: 20px;
padding-left: 20px;
}

.socialicon .rt{
width: 26px;
height: auto;
padding-right: 20px;
padding-left: 20px;
}

.socialicon .td{
width: 42px;
height: auto;
padding-right: 20px;
padding-left: 20px;
}


.socialicon .fb:hover {
width: 28px;
height: auto;
}

.socialicon .rt:hover {
width: 28px;
height: auto;
}

.socialicon .tr:hover {
width: 44px;
height: auto;
}

.socialicon .td:hover {
width: 44px;
height: auto;
}
.recent-post{
    width: 400px;
    height: 570px;
    background-color: #F4F9F9;
    margin-top: 250px;
    margin-left: 80px;
}

.recent-details{
  margin-top: 0px;
}
.recent-post h2{
    text-align: left;
    margin-left: 30px;
    font-size: large;
}
.line{
    width: 350px;
    height: 1px;
    margin-left: 5.5%;
    background-color: #A2B5BB;
}

.recent{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

.recent-image{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.recent-details{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.blog1-img{
    width: 90px;
    height: 90px;
    margin-left: 40px;
    padding: 0%;
    margin-top: 30px;
}

.recent-details .recent-heading1{
    font-weight: bold;
    margin-top:45px;
    margin-left: 20px;
}

.recent-details .recent-time1{
    margin-left: 20px;
    margin-top: 0px;
}

.recent-details .recent-heading2{
    font-weight: bold;
    margin-top:50px;
    margin-left: 20px;
}

.recent-details .recent-heading3{
    font-weight: bold;
    margin-top:50px;
    margin-left: 20px;
}

.recent-details .recent-heading4{
    font-weight: bold;
    margin-top:50px;
    margin-left: 20px;
}

.newsletter-box {
  margin-top: 20px;
  padding: 20px;
  background-color: #F4F9F9;
  width: 360px;
  margin-top: 100px;
}

.newsletter-box h2 {
  font-size: 18px;
  margin-bottom: 30px;
  text-align: left;
}

.newsletter-box input {
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.newsletter-box button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.newsletter-box button:hover {
  background-color: #0056b3;
}
</style>