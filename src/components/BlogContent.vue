<template>
    <div class="blog-container">
        <div class="blog-set">
            <div v-for="(blog,index) in displayedBlogs" :key="index" class="blod" >
                <div class = "blog-items">
                    <img :src="blog.image" alt="Author" class="blog-img">
                    <div class="details">
                        <h4>{{ blog.heading }}</h4>
                        <p>{{ blog.content }}</p>
                    </div>
                    <div class="other-details">
                        <p>{{ blog.category }}</p>
                        <p>{{ blog.comments }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "BlogContents",
    data(){
        return {
            blogs:[
                {
                    image: require("@/assets/b1.jpg"),
                    heading: "Dancing in the Spectrum: A Kaleidoscope of Colors and Beats",
                    content: "Step into a world of vibrant lights and electrifying energy as we dive into the heart of a pulsating club scene, where the dance floor becomes a mesmerizing canvas of colors.",
                    category: "Entertainment, Lifestyle",
                    comments: "05 Comments"
                },
                {
                    image: require("@/assets/b3.jpg"),
                    heading: "Unlocking Creativity: A Peek into the Graphic Design Workspace",
                    content: "Explore the essentials of a graphic designer's workspace, featuring Adobe's creative arsenal and the knowledge-packed 'Graphic Design Playbook'.",
                    category: "Creative, Technology",
                    comments: "06 Comments"
                },
                {
                    image: require("@/assets/b5.jpg"),
                    heading: "Designers' Library: Insights and Inspiration",
                    content: "Discover a curated collection of design wisdom, from the fundamentals of 'Graphic Design: The New Basics' to the nuances of 'Why Fonts Matter' on this bookshelf.",
                    category: "Inspiration, Book",
                    comments: "04 Comments"
                },
                {
                    image: require("@/assets/b6.jpg"),
                    heading: "Feast for the Senses: A Culinary Delight",
                    content: "Savor the medley of flavors and textures, from succulent strawberries to fluffy pancakes, in this mouthwatering culinary tableau.",
                    category: "Food",
                    comments: "07 Comments"
                },
                {
                    image: require("@/assets/b9.jpg"),
                    heading: "Morning Serenity: Embracing the Sunrise",
                    content: "In the embrace of nature, a girl gazes at the horizon as the rising sun bathes her in its gentle, golden light against a mountain backdrop",
                    category: "Nature, travel"
                }
            ],
            currentBlogIndex: 0,
            blogsPerPage: 5,
        };
    },
    computed: {
    displayedBlogs() {
      const startIndex = this.currentBlogIndex;
      const endIndex = startIndex + this.blogsPerPage;
      return this.blogs.slice(startIndex, endIndex);
    },
  },
};

</script>

<style scoped>
.blog-container{
    display:flex;
    flex-direction: row;
    align-items: flex-start;
}

.blog-items{
    width: 700px;
    height: 600px;
    background-color: black;
    margin-top: 140px;
    margin-left: 200px;
}
</style>