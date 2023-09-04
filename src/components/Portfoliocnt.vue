<template>
    <div class="about-container">
      <div class="left-content">
        <p class="firstab">OUR PORTFOLIO</p>
        <h1>Check Out Our {{ currentFilter }} Works</h1>
      </div>
      <div class="button-container">
        <button @click="filterImages('All')">All</button>
        <button @click="filterImages('Upcoming')">Upcoming</button>
        <button @click="filterImages('Popular')">Popular</button>
        <button @click="filterImages('Recent')">Recent</button>
      </div>
  
      <transition name="fade" mode="out-in">
        <div :key="currentFilter" class="image-container">
          <div class="row" v-for="(image, index) in filteredImages" :key="index">
            <img
              v-for="(image, imgIndex) in image"
              :key="imgIndex"
              :src="require(`@/assets/${image.url}`)"
              :alt="image.alt"
              class="portfolio-image"
            />
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: "PortfolioContent",
    data() {
      return {
        images: [
          { id: 1, url: "img1.jpg", alt: "Image 1", tags: ["All", "Upcoming"] },
          { id: 2, url: "img2.jpg", alt: "Image 2", tags: ["All", "Popular"] },
          { id: 3, url: "img3.jpg", alt: "Image 3", tags: ["All", "Recent"] },
          { id: 4, url: "img4.jpg", alt: "Image 4", tags: ["All", "Upcoming"] },
          { id: 5, url: "img5.jpg", alt: "Image 5", tags: ["All", "Popular"] },
          { id: 6, url: "img6.jpg", alt: "Image 6", tags: ["All", "Recent"] },
          // Add more images with appropriate tags
        ],
        currentFilter: "All",
      };
    },
    computed: {
      filteredImages() {
        const images = this.images.filter((image) => image.tags.includes(this.currentFilter));
        const rows = [];
        for (let i = 0; i < images.length; i += 3) {
          rows.push(images.slice(i, i + 3));
        }
        return rows;
      },
    },
    methods: {
      filterImages(filter) {
        this.currentFilter = filter;
      },
    },
  };
  </script>
  
  <style scoped>
  .about-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px ;
    margin-left: 150px;
  }
  
  .firstab {
    text-align: left;
    margin-left: 30px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
    font-size: 18px;
    color: #7e7474;
  }
  
  h1 {
    text-align: left;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 38px;
    margin-top: 10px;
    margin-left: 30px;
    font-weight: bold;
    color: #252b48;
  }
  
  .button-container {
    text-align: center;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30px;
    margin-top: 10px;
  }
  
  button {
    margin: 5px;
    background-color: white;
    border: none;
    font-size: 16px;
  }
  
  button:hover {
    color: blueviolet;
  }
  
  .image-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: -80px;
  }
  
  .row {
    display: flex;
    justify-content: center;
    margin:0;
  }
  
  .portfolio-image {
    height: 210px;
    width: 30%;
    margin: 20px -20px;
    transition: transform 0.3s ease;
  }
  
  .portfolio-image:hover {
    transform: scale(1.05);
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  </style>