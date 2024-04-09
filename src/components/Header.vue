<script>
export default {
  name: "Header-component",
  computed: {
    countBasket() {
      return this.$store.getters.countBasket;
    },
  },
  methods: {
    scrollTo(id) {
        this.$router.push({name: "home", hash: `#${id}`})
    },
    profile(){
      const user = this.$store.getters.getUser;

      if (this.$store.getters.isValidUser && user?.name && user?.phone){
        this.$router.push('/profile')
      }else{
        this.$emit("openRegistration")
      }
    }
  }
}
</script>

<template>
<!--Логотип выравненный по левую сторону-->
    <nav class="header">
      <div style=" position: relative;
       margin-right: 30px;
   overflow:hidden;
    width: 200px;
        height: 95px;">
        <img class="logo" alt="logo" :src="require('@/assets/logo.png')" style="  position: absolute;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
    width: 200px;
    height: 250px;
   object-fit:cover;">
      </div>

      <div class="menu">
        <ul class="nav" >
          <li><a @click="scrollTo('popular')">Популярное</a></li>
          <li><a @click="scrollTo('catalog')">Каталог</a></li>
          <li><a @click="scrollTo('about')">О нас</a></li>
          <li><a @click="scrollTo('footer')">Контакты</a></li>
        </ul>
      </div>
      <div style="padding-block: 10px;display: flex;
  flex-flow: row nowrap;    gap: 10px;">
        <img style="cursor: pointer" alt="профиль" width="46" height="46" :src="require('@/assets/profile icon.png')" @click="profile()" >
        <img style="" alt="поиск" width="46" height="46" :src="require('@/assets/find.png')">
       <a href="/#/basket">
        <template v-if="countBasket===0">
          <img style="" alt="корзина" width="46" height="46" :src="require('@/assets/basket.png')">
        </template>
        <template v-else>
          <v-badge :content="countBasket" >
            <img style="" alt="корзина" width="46" height="46" :src="require('@/assets/basket.png')">
          </v-badge>
        </template>
      </a>
      </div>
    </nav>
</template>

<style scoped>

.header {
  position: relative;
  z-index: 2;
  margin: 12px 25px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.menu  a {
  text-decoration: none;
  color: #4F3960;
  font-family: Inconsolata, sans-serif;
  font-size: 20px;
}
.menu {
  flex-grow: 1;
  padding-top: 20px;
}
.menu ul {
  display: flex;
  margin: 0;
  padding: 10px 0;
  list-style: none;
  text-align: left;
}
.menu  li {
  padding-right: 40px ;
}

</style>