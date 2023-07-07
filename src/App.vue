<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>
<template>
  <header>
    
    <div class="headerhome">
      <div class="headercontainer">
        <li>
          <RouterLink class="navbar-brand" to="/homes">
            <img alt="logo1" style="color: #000000;" src="./imgs/logop1.png"/>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/homes">
            <p class="texthome">Home</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink class="navbar-brand" to="/abouts">
            <p class="texthome">About</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink class="navbar-brand" to="/">
            <p class="texthome">Menu</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink class="navbar-brand" to="/">
            <p class="texthome">Shop</p>
          </RouterLink>
        </li>
        <li>
          <RouterLink class="navbar-brand" to="/contact">
            <p class="texthome">Contact</p>
          </RouterLink>
        </li> 
      </div> 
    </div>   
    
    

    
    <!-- <div class="footer">
      <div class="footer-left">
        <h1>The Coffee</h1>
        <h2>The art of coffee in your cup</h2>
        <p>Lorem ipsum sit amet, consecterur adipiscing alit, sed do 
          eiusmod tempor incididumt ut labore et dolore magna aliqua.
        </p>
        <button>RESERVE HERE</button>
      </div>
     
        <img id="bgr1" alt="bgr" src="./imgs/p1.png"/> 
      
    </div>  -->
  </header>
  <RouterView />
</template>




<style scoped>
.template {
  width: 100%;
  height: 100%;
}
.headerhome {
  background: #ffffff;
}
.headercontainer {
  display: flex;
  justify-content: space-between;
  padding: 35px;
  text-align: center;
  margin-left: 7%;
  margin-right: 7%;
}
.headerhome li {
  list-style: none;
}
.texthome{
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  color: black;
}

@media only screen and (max-width: 740px) {
  .headercontainer {
    margin-left: 0%;
    margin-right: 0%;
  }
  .headercontainer {
    display: block;
    padding: 15px;
    text-align: left;
    margin-left: 0%;
    margin-right: 0%;
  }
  .texthome{
    font-size: 15px;
    text-decoration: none;
    color: black;
  }
}

</style>
