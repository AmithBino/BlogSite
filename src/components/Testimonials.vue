<template>
    <div class="testimonials-container">
    <p class="firstab">OUR TESTIMONIAL</p>
    <h1>Honourable Client Says</h1>
    <h2 class="subtitle">About Me</h2>
      <div class="testimonials">
        <!-- Display current testimonial -->
        <div v-for="(testimonial, index) in displayedTestimonials" :key="index" class="testimonial">
        <div class="testimonial-item">
          <p>{{ testimonial.text }}</p>
          <div class="author">
            <img :src="testimonial.image" alt="Author" class="author-img">
            <div class="details">
              <h4>{{ testimonial.name }}</h4>
              <p>{{ testimonial.position }}</p>
            </div>
          </div>
          <div class="stars">{{ testimonial.stars }}</div>
        </div>
        </div>
      <div class="left-container">
      <div
      class="arrow-left"
      @click="prevTestimonial"
      :class="{ disabled: currentTestimonialIndex === 0 }"
    >
      &#8249;
    </div>
  </div>
    <div
      class="arrow-right"
      @click="nextTestimonial"
      :class="{ disabled: currentTestimonialIndex >= testimonials.length - testimonialsPerPage }"
    >
      &#8250;
    </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TestimonialPage",
    data() {
      return {
        testimonials: [
          {
            name: "John Doe",
            position: "Aerotech, CEO",
            text: "Great product! Highly recommended.",
            stars: "★★★★★",
            image: require("@/assets/john.png"),
          },
          {
            name: "Jose Smith",
            position: "Connect, CTO",
            text: "Amazing service! Will definitely use again.",
            stars: "★★★★",
            image: require("@/assets/jose.png"),
          },
          {
            name: "Bob Johnson",
            position: "OnTech, COO",
            text: "Exceptional quality and value. Good Product!",
            stars: "★★★★★",
            image: require("@/assets/bob.png"),
          },
          {
            name: "Sarah Wilson",
            position: " Supreme, CTO",
            text: "The best experience I've had with a product!",
            stars: "★★★★",
            image: require("@/assets/sarah.png"),
          },
          {
            name: "Olivia Foster",
            position: "TechHub, CEO",
            text: "The best experience I've had with a product!",
            stars: "★★★★",
            image: require("@/assets/olivia.png"),
          },
          {
            name: "Emily Hayes",
            position: "INNTEL, CTO",
            text: "The best experience I've had with a product!",
            stars: "★★★★",
            image: require("@/assets/emily.png"),
          },
        ],
        currentTestimonialIndex: 0,
        testimonialsPerPage: 3,
      };
    },
    computed: {
    displayedTestimonials() {
      const startIndex = this.currentTestimonialIndex;
      const endIndex = startIndex + this.testimonialsPerPage;
      return this.testimonials.slice(startIndex, endIndex);
    },
  },
    methods: {
      prevTestimonial() {
      if (this.currentTestimonialIndex > 0) {
        this.currentTestimonialIndex -= this.testimonialsPerPage;
      }
    },
      nextTestimonial() {
      if (this.currentTestimonialIndex < this.testimonials.length - this.testimonialsPerPage) {
        this.currentTestimonialIndex += this.testimonialsPerPage;
      }
    },
    },
  };
  </script>
  
  <style scoped>
  .testimonials-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 150px ;
    margin-left: 150px;
  }
  .firstab {
      text-align: top;
      margin-bottom: 300px;
      margin-left: 30px;
      font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      font-size: 20px;
      color: #7E7474;
  }
  h1{
      text-align: top;
      font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      font-size: 38px;
      margin-top: -280px;
      margin-left: 30px;
      font-style: bold;
      color: #252B48;
      
  }
  .subtitle {
      font-size: 38px;
      margin-left: 30px;
      margin-top: -20px;
      color: #252B48;
  }
  
  .testimonials {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 50px;
    margin-left: 6%;
  }
  
  .testimonial-item {
    border: 2px solid #85F4FF;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #F9FCFB;
    border-radius: 10px;
    margin-right: 10px;
    height: 200px;
    width:250px;
    box-shadow: #85F4FF 0px 5px 15px;
    margin-left: 50px;
  }
  
  .stars {
    font-size: 24px;
    color: #ffcc00;
    margin-bottom: 10px;
  }
  
  .author {
    display: flex;
    align-items:flex-start;
    flex-direction: row;
  }
  
  .author-img {
    width: 60px;
    height: 60px;
    margin-left: -60px;
  }

  .author h4{
    margin-top: 30px;
    margin-left: -40px;
  }
  .author p{
    margin-top: -12px;
    margin-left: -40px;
  }
  .left-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
  
  .arrow-left{
    font-size: 100px;
    cursor: pointer;
    margin-left: -3250%;
    margin-top: -40px;
  }
  .arrow-right{
    font-size: 100px;
    cursor: pointer;  
    margin-top: -40px;
  }
  </style>