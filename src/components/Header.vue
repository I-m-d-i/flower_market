<script>
export default {
  name: "Header-component",
  computed: {
    countBasket() {
      return this.$store.getters.countBasket;
    },
  },
}
</script>

<template>
<!--Логотип выравненный по левую сторону-->
    <nav class="header">
      <img class="logo" alt="logo" width="175" height="163" style="background-color: #81637D">
      <div class="menu">
        <ul class="nav" >
          <li><a>Популярное</a></li>
          <li><a>Каталог</a></li>
          <li><a>О нас</a></li>
          <li><a>Контакты</a></li>
        </ul>
      </div>
      <div style="padding-block: 10px;display: flex;
  flex-flow: row nowrap;    gap: 10px;">
        <img style="" alt="find" width="46" height="46" :src="require('@/assets/find.png')">
        <img style="" alt="favorite" width="46" height="46" :src="require('@/assets/favorite.png')">
       <a href="/#/basket">
        <template v-if="countBasket===0">
          <img style="" alt="basket" width="46" height="46" :src="require('@/assets/basket.png')">
        </template>
        <template v-else>
          <v-badge :content="countBasket" >
            <img style="" alt="basket" width="46" height="46" :src="require('@/assets/basket.png')">
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
  margin: 21px 40px 0;
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
.logo {
  margin-right: 30px;
}
</style>