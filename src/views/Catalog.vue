<script>
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: "Catalog",
  components: {CardProduct},
  data() {
    return {
      page: 0,
      itemsPerPage: 6,
    }
  },
  computed: {
    displayData() {
      //разбитый по страницам массив
      let listingProducts = []

      // Рассчитываем начальный и конечный индексы элементов для текущей страницы
      for (let i = 1; i <= Math.ceil(this.$store.getters.getProducts.length / this.itemsPerPage); i++) {
        let startIndex = (i - 1) * this.itemsPerPage;
        let endIndex = startIndex + this.itemsPerPage;
        listingProducts.push(this.$store.getters.getProducts.slice(startIndex, endIndex))
      }
      return listingProducts
    }
  },
}
</script>

<template>
  <div style="text-align: left; margin-left: 20%;    margin-block: 100px;">
    <h1>Каталог</h1>
  </div>
  <div class="catalog-container">
    <div style="" class="catalog-menu">
      <h2 class="title">Каталог</h2>
      <ul class="navigation">

        <li><a href="#" class="link">Весенние букеты</a></li>
        <li><a href="#" class="link">Сваебные букеты</a></li>
        <li><a href="#" class="link">Дизайнерские букеты</a></li>
        <li><a href="#" class="link">Монобукеты</a></li>
        <li><a href="#" class="link">Цветы в коробке</a></li>
        <li><a href="#" class="link">Корзина с цветами</a></li>
      </ul>
      <div class="filter">
        <h3 class="filter-title">Фильтр</h3>
        <div class="filter-item">
          <h4 class="filter-subtitle">Размер</h4>
          <ul>
            <li><label class="filter-label">
              <input type="radio" name="size" class="filter-input"/>Большой
            </label></li>
            <li><label class="filter-label">
              <input type="radio" name="size" class="filter-input"/>Средний
            </label></li>
            <li><label class="filter-label">
              <input type="radio" name="size" class="filter-input"/>Маленький
            </label></li>
          </ul>
        </div>
        <div class="filter-item">
          <h4 class="filter-subtitle">Цвет</h4>
          <div class="color-picker">
            <div class="color-option">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                <ellipse cx="7" cy="7.5" rx="7" ry="7.5" fill="#D9D9D9"/>
              </svg>
            </div>
            <div class="color-option">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                <ellipse cx="7" cy="7.5" rx="7" ry="7.5" fill="#785C75"/>
              </svg>
            </div>
            <div class="color-option">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                <ellipse cx="7" cy="7.5" rx="7" ry="7.5" fill="#F5A3C5"/>
              </svg>
            </div>
            <div class="color-option">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                <ellipse cx="7" cy="7.5" rx="7" ry="7.5" fill="#ECA082"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="catalog-content">
      <div style="" class="catalog-sort">
        <div class="catalog-sort-content">
          <span class="black-text">Сортировать по: </span>
          <span class="gray-text">лучшей цене</span>
        </div>
      </div>
      <div class="catalog-products">
        <v-carousel selected-class="selected-class" style="height: 100%" v-model="page" hide-delimiter-background :show-arrows="false" color="#ab91a8">
          <v-carousel-item
              v-for="(products,i) in displayData"
              :key="i"
          >
            <div
                style="height: 100%; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;padding-bottom: 75px;padding-top: 20px;">

              <card-product v-for="(product,i) in products"
                            :key="i"
                            :title="product.title"
                            :price="product.price"
                            :description="product.description"
                            :image_src="product.img_src"
                            :id="product.id"
              />
            </div>

          </v-carousel-item>
        </v-carousel>
      </div>
    </div>


  </div>
</template>

<style scoped>

.catalog-products >>> .v-btn--active{
  color: #785C75 !important;
}

.catalog-products >>> .v-btn--icon .v-icon {
  --v-icon-size-multiplier: 2;
}

.catalog-products >>> .v-btn--active > .v-btn__overlay, .v-btn[aria-haspopup=menu][aria-expanded=true] > .v-btn__overlay {
  opacity: 0;
}

.catalog-products >>> .v-carousel__controls{
  gap:31px
}

h1 {
  color: #000;
  font-family: Source Serif Pro;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-variant: small-caps;
}

.catalog-container {
  display: grid;
  grid-template-columns: 2fr 5fr;
  gap: 20px;
}

.catalog-menu {
  background-color: rgba(255, 253, 253, 082);
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding: 32px 80px 77px 11px;
  height: 900px;
  border: #D9D9D947 solid 6px;
  margin-left: 100px;
}

@media (max-width: 991px) {
  .catalog-menu {
    padding: 0 20px;
  }
}

.catalog-menu ul {
  padding-left: 30px;
}

.catalog-products {
  width: 100%;
}

.title {
  font-family: Source Serif Pro;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-variant: small-caps;
  margin: 0 0 0 80px;
}

@media (max-width: 991px) {
  .title {
    margin-left: 10px;
    white-space: initial;
  }
}

.link {
  color: #000;
  text-decoration-line: underline;
  text-align: start;
  margin-top: 39px;
  width: 100%;
  font: 400 20px Inter, sans-serif;
}

.filter {
  color: #000;
}

@media (max-width: 991px) {
  .filter {
    margin-top: 40px;
  }
}

.filter-title {
  color: #000;
  font-family: Source Serif Pro;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 30px 0px 30px 80px;
}

@media (max-width: 991px) {
  .filter-title {
    margin: 40px 0 0 10px;
  }
}

.filter-subtitle {
  margin-left: 50px;
  text-align: left;
  font-family: Playfair Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.filter-label {
  color: #000;
  text-decoration-line: underline;
  align-self: start;
  width: 100%;
  font: 400 20px Inter, sans-serif;
}

.color-picker {
  display: flex;
  margin-top: 32px;
  margin-left: 40px;
  width: 100%;
  justify-content: flex-start;
  gap: 20px;
}

@media (max-width: 991px) {
  .color-picker {
    justify-content: center;
    margin-top: 40px;
  }
}

.color-option {
}

.catalog-content {
  display: grid;
  grid-template-rows: 90px 1fr;
}

li {
  line-height: 3;
  list-style: none;
  text-align: left;
  padding: 0;
}

.filter-input {
  appearance: none;
}

.catalog-sort {
  justify-content: center;
  color: rgba(0, 0, 0, 0.6);
  margin-left: 30px;
  height: 92px;
  width: 100%;
  text-align: start;
  font: small-caps 400 36px Source Serif Pro, -apple-system, Roboto, Helvetica, sans-serif;
}

@media (max-width: 991px) {
  .catalog-sort {

  }
}

.catalog-sort-content {
  background-color: #e7e0e7;
  padding-block: 20px;
  padding-left: 5px;
}

.black-text {
  color: rgba(0, 0, 0, 1);
}

.gray-text {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-line: underline;
}
</style>