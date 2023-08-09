<template>
    <div class="header">
    <img alt="Vue logo" src="@/assets/logob.png">
    <div class="nav">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/about">About</router-link>
        <router-link class="link" to="/portfolio">Portfolio</router-link>
        <router-link class="link" to="/services">Services</router-link>
        <router-link class="link" to="/blog">Blog</router-link>
        <router-link class="link" to="/contact">Contact</router-link>
    </div>
</div>
</template>
<script>

export default {
    name:'HeaderHome',
}
</script>
<style>
    .header{
        margin-top: 30px;
    }
    .nav a.link{
        float: left;
        color: black;
        padding-top: 30px;
        padding-left: 40px;
        text-align: center;
        font-size: 16px;
        text-decoration: none;
    }
    .nav a.link:hover{
        color: #EEBD56;
    }
    img{
         width: 130px;
         height: auto;
         float: left;
        padding-left:100px ;
        padding-right: 80px;
}
</style>