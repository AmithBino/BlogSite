<template>
    <router-link to="/">
            <img alt="Vue logo" src="@/assets/logow.png">
    </router-link>
    <div class="nav">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
        <router-link class="nav-link" to="/services">Services</router-link>
        <router-link class="nav-link" to="/blog">Blog</router-link>
        <router-link class="nav-link" to="/contact">Contact</router-link>
    </div>
</template>
<script>

export default {
    name:'HeaderPage',
}
</script>
<style>
    .nav a.nav-link{
        float: left;
        color: #ffff;
        padding-top: 30px;
        padding-left: 40px;
        text-align: center;
        font-size: 16px;
        text-decoration: none;
    }
    .nav a.nav-link:hover{
        color: #EEBD56;
    } 
    img{
         width: 130px;
         height: auto;
         float: left;
        padding-left:100px ;
        padding-right: 80px;
        padding-top: 20px;
}
</style>