import {createStore} from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
    plugins: [createPersistedState()],
    state: {
        products: [
            {
                id: 1,
                title: "Love stori",
                description: "чудесный микс из роз, пионов и гипсофилов",
                price: 6200,
                img_src: require('@/assets/love stori.png'),
                diameter: "20-25",
                height: "50",
            },
            {
                id: 2,
                title: "Фантазия",
                description: "Эта элегантная орхидея привнесет в ваш дом нотку экзотики. Цветки большого размера с причудливой структурой и яркими цветами. Легко ухаживать и будет радовать вас долгое время.",
                price: 5800,
                img_src: require('@/assets/fantazi.png'),
                diameter: "20-25",
                height: "50",
            },
            {
                id: 3,
                title: "Italia",
                description: "Свежие и яркие тюльпаны в различных оттенках. Отличный способ поднять настроение и создать атмосферу весны.",
                price: 4800,
                img_src: require('@/assets/italia.png'),
                diameter: "20-25",
                height: "50",
            },
            {
                id: 4,
                title: "Enchanted Harmony",
                description: "Насыщенный микс. белые розы, орхидеи и медовики",
                price: 4200,
                img_src: require('@/assets/Enchanted Harmony.png'),
                diameter: "20-25",
                height: "50",
            },
            {
                id: 5,
                title: "Цветущее великолепие",
                description: "Пионовидные розы, георгины, гортензия",
                price: 2800,
                img_src: require('@/assets/Blooming Splendor.png'),
                diameter: "20-25",
                height: "50",
            },
            {
                id: 6,
                title: "Яркие изысканности",
                description: "Яркие орхидеи и гортензии",
                price: 3800,
                img_src: require('@/assets/Vibrant Exquisites.png'),
                diameter: "20-25",
                height: "50",
            },
            {
                id: 7,
                title: "Пион 'Розовое облако'",
                description: "Изящный пион с прекрасными розовыми цветками и нежным ароматом. Создайте романтическую атмосферу с помощью этого цветка.",
                price: 14.99,
                img_src: require('@/assets/flower7.png'),
                diameter: "20-25",
                height: "50",
            },
            {
                id: 8,
                title: "Азалия 'Весенний вихрь'",
                description: "Яркая азалия с обильным цветением и множеством цветов в оттенках розового и фиолетового. Прекрасно смотрится в саду или на балконе.",
                price: 28.99,
                img_src: require('@/assets/flower8.png'),
                diameter: "20-25",
                height: "50",
            },
            {
                id: 9,
                title: "Нарциссы 'Весенний аромат' (пучок из 20 штук)",
                description: "Ароматные нарциссы с яркими желтymi цветками и нежными лепестками. Прекрасно подойдут для создания весеннего настроения.",
                price: 14.99,
                img_src: require('@/assets/flower9.png'),
                diameter: "20-25",
                height: "50",
            },
            {
                id: 10,
                title: "Пионы 'Розовый вальс' (3 штуки)",
                description: "Изысканные пионы с нежными розовыми цветками. Каждый цветок – настоящий шедевр природы.",
                price: 29.99,
                img_src: require('@/assets/flower10.png'),
                diameter: "20-25",
                height: "50",
            },
            {
                id: 11,
                title: "Каллы 'Летний бриз' (микс, 7 штук)",
                description: "Яркие и экзотические каллы в разнообразных оттенках. Привнесите нотку тропиков в свой дом.",
                price: 16.99,
                img_src: require('@/assets/flower11.png'),
                diameter: "20-25",
                height: "50",
            },
            {
                id: 12,
                title: "Амариллис 'Королевский красавец'",
                description: "Великолепный амариллис с крупными цветками яркого красного цвета. Создайте роскошную атмосферу в вашем интерьере.",
                price: 21.99,
                img_src: require('@/assets/flower12.png'),
                diameter: "20-25",
                height: "50",
            },
            {
                id: 13,
                title: "Фикус 'Зеленое благополучие'",
                description: "Популярное комнатное растение с глянцевыми зелеными листьями. Фикус привнесет свежесть и уют в ваш дом.",
                price: 18.99,
                img_src: require('@/assets/flower13.png'),
                diameter: "20-25",
                height: "50",
            },
            {
                id: 14,
                title: "Астры 'Полевая гармония' (микс, 12 штук)",
                description: "Красочные астры в разнообразных оттенках. Прекрасно подойдут для букетов и декорации.",
                price: 11.99,
                img_src: require('@/assets/flower14.png'),
                diameter: "20-25",
                height: "50",
            },
            {
                id: 15,
                title: "Эустома 'Леди роза' (белая)",
                description: "Изящная эустома с нежными белыми цветками и легким ароматом. Идеально подойдет для свадебных и романтических событий.",
                price: 15.99,
                img_src: require('@/assets/flower15.png'),
                diameter: "20-25",
                height: "50",
            },
            {
                id: 16,
                title: "Крокусы 'Весенний привет' (пучок из 25 штук)",
                description: "Маленькие и нежные крокусы, которые первыми радуют глаза после долгой зимы. Украсьте свою грядку или горшок с их помощью.",
                price: 9.99,
                img_src: require('@/assets/flower16.png'),
                diameter: "20-25",
                height: "50",
            },
            {
                id: 17,
                title: "Камелия 'Розовая принцесса'",
                description: "Красивый кустарник с роскошными розовыми цветками. Камелия добавит изысканности и шарма в ваш сад.",
                price: 24.99,
                img_src: require('@/assets/flower17.png'),
                diameter: "20-25",
                height: "50",
            },
            {
                id: 18,
                title: "Камелия 'Розовая принцесса'",
                description: "Красивый кустарник с роскошными розовыми цветками. Камелия добавит изысканности и шарма в ваш сад.",
                price: 24.99,
                img_src: require('@/assets/flower18.png'),
                diameter: "20-25",
                height: "50",
            }
        ],
        basket: [],
        user: {
            name: 'Ангелина',
            phone: '',
        }
    },
    getters: {
        getUser: (state) => {
            return state.user
        },
        isAuthenticated: (state) => !!state.user?.name && !!state.user?.phone,

        getProductById: (state) => (id) => {
            return state.products.find(product => product.id == id)
        },
        getProducts: (state) => {
            return state.products
        },
        getBasket: (state) => {
            return state.basket
        },
        countBasket: (state) => {
            return state.basket.length
        },
        totalCost: (state) => {
            return state.basket.reduce((acc, productId) => {
                const product = state.products.find(product => product.id == productId)
                return acc + product.price;
            }, 0)
        }
    },
    mutations: {
        login(state, user) {
            state.user = user
        },
        logout(state) {
            state.user = {
                name: '',
                phone: '',
            }
        },
        clearBasket(state) {
            state.basket = []
        },
        addToBasket(state, productId) {
            state.basket.push(productId)
        },
        deleteFromBasket(state, productId) {
            const index = state.basket.indexOf(productId)
            if (index > -1) { // only splice array when item is found
                state.basket.splice(index, 1); // 2nd parameter means remove one item only
            }
        },
        register(state, user) {
            state.user = user
        },
        editName(state, name) {
            state.user.name = name
        }

    },
    actions: {
        login({commit}, user) {
            commit('login', user)
        },
        logout({commit}) {
            commit('logout')
        },
        register({commit}, user) {
            /*
            запрос на регистрацию
            */
            commit('register', user)
        },
        editName({commit}, name) {
            commit('editName', name)
        }
    },
    modules: {}
})
