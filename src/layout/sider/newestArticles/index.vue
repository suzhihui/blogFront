<template>
    <div class="newest-articles">
        <p class="newest-articles__title">最新文章</p>
        <ul class="newest-articles__items-container">
            <li
                v-for="item in newestArticle"
                :key="item._id"
                class="newest-articles__item"
            >
                <a @click="goToDetailPage(item._id)"> {{ item.title }} </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'newest-article',
    computed: {
        newestArticle() {
            return this.$store.state.home.newestArticle
        },
    },
    methods: {
        goToDetailPage(id) {
            this.$router.push({ path: `/article/detail/${id}` })
        },
    }
}
</script>
<style lang="stylus" scoped>
.newest-articles
    margin-top 45px
    padding 20px
    border-radius 5px
    border 1px solid transparent
    box-shadow: 0px 1px 3px #888
    .newest-articles__title
        font-size 20px
    .newest-articles__items-container
        margin 0
        padding 0
        .newest-articles__item
            padding 5px
            list-style-type square
            color #828282
            font-size 0.9em
        .newest-articles__item:hover
            cursor pointer
@media (max-width: 960px)
    .newest-articles
        box-shadow none
</style>
