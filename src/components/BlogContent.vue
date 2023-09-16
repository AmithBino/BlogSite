<template>
    <div class="main-continer">
    <div class="blog-container">
        <div class="blog-set">
            <div v-for="(blog,index) in filteredBlogs" :key="index" class="blog" >
                <div class = "blog-items">
                    <img :src="blog.image" alt="Author" class="blog-img">
                    <div class="details">
                        <h4><router-link :to="{ name: 'BlogDetail', params: { id: index } }" class="blog-heading"> {{ blog.heading }} </router-link></h4>
                        <p>{{ blog.content }}</p>
                    </div>
                    <div class="other-details">
                        <div class="item-width">
                        <img src= "@/assets/blog.png" alt="blog-image" class="blog-tag">
                        <p class="blog-category"> {{ blog.category }} &nbsp;&nbsp;| </p>
                        <img src= "@/assets/chat.png" alt="comment-image" class="cmnt-tag">
                        <p class="blog-comments">  {{ blog.comments }}</p>
                        </div>
                        <img src="@/assets/calendar.png" alt="calendar-image" class="date-img">
                        <p class="blog-date">{{ blog.date }}</p>
                    </div>  
                </div>
            </div>
            
            <div class="pagination">
                <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">←</button>
                <span v-for="page in totalPages" :key="page">
                  <button @click="goToPage(page)" :class="{ 'active': page === currentPage }">{{ page }}</button>
                </span>
                <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">→</button>
            </div>
        </div>
        <div class="side-container">
        <div class="search">
            <div class="search-bar">
            <input v-model="searchKeyword" type="text" placeholder="Search Keyword">
            <button @click="search"  class="search-button">Search</button>
            </div>
        </div>  
        <div class="recent-post">
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
</template>

<script>
export default{
    name: "BlogContents",
    emits: [],
    data(){
        return {
            blogs:[
                {
                    image: require("@/assets/b1.jpg"),
                    heading: "Dancing in the Spectrum: A Kaleidoscope of Colors and Beats",
                    content: "Step into a world of vibrant lights and electrifying energy as we dive into the heart of a pulsating club scene, where the dance floor becomes a mesmerizing canvas of colors.",
                    category: "Entertainment, Lifestyle",
                    comments: "05 Comments",
                    date:"Feb 03, 2023",
                },
                {
                    image: require("@/assets/b3.jpg"),
                    heading: "Unlocking Creativity: A Peek into the Graphic Design Workspace",
                    content: "Explore the essentials of a graphic designer's workspace, featuring Adobe's creative arsenal and the knowledge-packed 'Graphic Design Playbook'.",
                    category: "Creative, Technology",
                    comments: "06 Comments",
                    date:"Jan 26, 2023",
                },
                {
                    image: require("@/assets/b5.jpg"),
                    heading: "Designers' Library: Insights and Inspiration",
                    content: "Discover a curated collection of design wisdom, from the fundamentals of 'Graphic Design: The New Basics' to the nuances of 'Why Fonts Matter' on this bookshelf.",
                    category: "Inspiration, Book",
                    comments: "04 Comments",
                    date:"Jun 12, 2023",
                },
                {
                    image: require("@/assets/b6.jpg"),
                    heading: "Feast for the Senses: A Culinary Delight",
                    content: "Savor the medley of flavors and textures, from succulent strawberries to fluffy pancakes, in this mouthwatering culinary tableau.",
                    category: "Food",
                    comments: "07 Comments",
                    date:"Nov 26, 2022",
                },
                {
                    image: require("@/assets/b9.jpg"),
                    heading: "Morning Serenity: Embracing the Sunrise",
                    content: "In the embrace of nature, a girl gazes at the horizon as the rising sun bathes her in its gentle, golden light against a mountain backdrop",
                    category: "Nature, travel",
                    comments: "07 Comments",
                    date:"May 28, 2023",
                },
                {
                    image: require("@/assets/b8.jpg"),
                    heading: "Wearable Innovation: A Glimpse of the Future",
                    content: "A sleek smartwatch rests confidently in a man's hand, promising a world of connectivity, health tracking, and convenience at your wrist.",
                    category: "Technology, Fashion",
                    comments: "05 Comments",
                    date:"Jun 19, 2023",
                },
                {
                    image: require("@/assets/b2.jpg"),
                    heading: "Capturing Moments: Chasing the Sunset",
                    content: "In the soft glow of a smartphone screen, a sunset's beauty is frozen in time, its radiant hues preserved amidst a world of blur",
                    category: "Nature, Photography",
                    comments: "04 Comments",
                    date:"Jun 11, 2023",
                },
                {
                    image: require("@/assets/b10.jpg"),
                    heading: "Arctic Encounter: The Polar Bear Greeting",
                    content: "A remarkable moment frozen in time - a polar bear stands on two legs, extending a friendly 'hello' amidst the icy wilderness.",
                    category: "Nature, Wildlife",
                    comments: "08 Comments",
                    date:"Sep 08, 2023",
                },
                {
                    image: require("@/assets/b4.jpg"),
                    heading: "Elegance in the Details: High Heels and a Hint of Confidence",
                    content: "A fashion-forward statement: a woman's legs, clad in chic black and white checkered pants and stylish heels, grace a chair, exuding confidence and style.",
                    category: "Fashion",
                    comments: "08 Comments",
                    date:"Sep 05, 2023",
                },
                {
                    image: require("@/assets/b7.jpg"),
                    heading: "Journey of Passion: Footsteps on the Path",
                    content: "Two sets of feet, shod in sturdy shoes, stand side by side on a path marked with the powerful words, 'Passion led us here.",
                    category: "Passion",
                    comments: "07 Comments",
                    date:"Aug 15, 2023",
                },
            ],
            currentBlogIndex: 0,
            blogsPerPage: 5,
            currentPage: 1,
            searchKeyword: "",
            searching: false,
            subscriberName: "",
            subscriberEmail: "",
            emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        };
    },
    computed: {
    displayedBlogs() {
        const startIndex = this.currentBlogIndex;
      const endIndex = startIndex + this.blogsPerPage;
      return this.blogs.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.blogs.length / this.blogsPerPage);
    },
    filteredBlogs() {
      const keyword = this.searchKeyword.toLowerCase().trim();

      if (this.searching) {
      if ( keyword === "") {
        return this.displayedBlogs;
      } else{
        const filtered = this.displayedBlogs.filter((blog) =>
        blog.category.toLowerCase().includes(keyword) ||
        blog.heading.toLowerCase().includes(keyword)
      );
      return filtered.length === 0 ? this.displayedBlogs: filtered;
      }
      }else {
        return this.displayedBlogs; 
      }
    },
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.currentBlogIndex = (page - 1) * this.blogsPerPage;
        window.scrollTo(0, 0);
      }
    },
    search() {
      this.searching = true;
      this.currentBlogIndex = 0;
      this.currentPage = 1;
    },
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

<style scoped>

.main-container{
    display: flex;
    flex-direction: row;
    align-items: normal;
}
.blog-container{
    display:flex;
    flex-direction: row;
    align-items: flex-start;
}

.blog-items{
    width: 700px;
    height: 620px;
    background-color: white;
    margin-top: 140px;
    margin-left: 200px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    align-items: flex-start;
}
.blog-img{
    width:100%;
    margin-left:-100px;
    height: 350px;
    margin-bottom: 40px;;
}

.blog-heading{
    text-decoration: none;
    color:#082032;
}

.blog-heading:hover{
    color:black;
}
.blog-tag{
    height: 20px;
    width: 20px;
    margin-left: -66px;
    margin-top: -5px;
}
.date-img{
    height: 20px;
    width: 20px;
    margin-top: -5px;
    margin-right: 10px;
}
.cmnt-tag{
    height: 20px;
    width: 20px;
    margin-left: -80px;
    margin-top: -5px;
}
.details h4{
    font-weight: bold;
    font-size: 22px;
    text-align: left;
    margin-left: 30px;
}

.details p{
    text-align: left;
    color: #526D82;
    margin-left: 30px;
}
.other-details{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    color: #526D82;
}
.item-width{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 60%;
    /* background-color: #526D82; */
}

.other-details .blog-category {
    margin-left: -70px;
}
.other-details .blog-comments {
    margin-left: -70px; 
}
.other-details .blog-date{
    margin-left:0px;
    margin-left: -70px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: -50px;
  margin-left: 70%;
}

.pagination button {
  background-color: #fff;
  border: 1px solid #ccc;
  color: #333;
  cursor: pointer;
  padding: 5px 10px;
  margin: 0 5px;
}

.pagination button.active {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
}

.pagination button[disabled] {
  cursor: not-allowed;
}

.side-container{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
}

.search{
    width: 400px;
    height: 180px;
    background-color: #F4F9F9;
    margin-top: 170px;
    margin-left: 80px;
}

.search-bar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}

.search-bar input {
  flex-grow: 1;
  width: 300px;
  height: 50px;
  padding-left: 20px ;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 9%;
  margin-top: 30px;
  text-align: left;
}

.search-button {
  background: linear-gradient(to right, #007bff, #00aaff);
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-top: 18px;
  margin-left:9%;
  padding: 16px 137px;
  cursor: pointer;
  font-size: 16px;
}

.search-button:hover {
  background: linear-gradient(to right, #00aaff, #007bff);
}
.recent-post{
    width: 400px;
    height: 570px;
    background-color: #F4F9F9;
    margin-top: 60px;
    margin-left: 80px;
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