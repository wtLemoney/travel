<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper :options="swiperOption"><!--v-if解决每次刷新页面，显示的是数组的最后一张图片的问题，这是因为在数组还是空的时候页面就加载了-->
                <!-- slides -->
                <swiper-slide v-for="(item,index) of imgs" :key="index">
                    <img class="gallary-img" :src="item">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        imgs: {
            type: Array,
            default() {
                return ['http://img1.qunarzz.com/sight/p0/1705/72/7225b86775faa6f7a3.img.jpg_350x240_c5790f09.jpg',
                'http://img1.qunarzz.com/sight/p0/1705/88/88cad9d12b3f6d2a3.img.jpg_350x240_610e8eee.jpg']
            }
        }
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction', // 分页
                observeParents: true, // 
                observer: true, // 解决点击进来不能轮播的问题，使其重新刷新
            }
        }
    },
    methods: {
        handleGallaryClick() {
            this.$emit('close');
        }
    }
}
</script>

<style lang='stylus' scoped>
    .container >>> .swiper-container
        overflow inherit
    .container
        display flex
        flex-direction column
        justify-content center
        z-index 10
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background #000
        .wrapper
            // overflow hidden
            height 0
            width 100%
            padding-bottom 100%
            .gallary-img
                width 100%
            .swiper-pagination
                color #fff
                bottom -1rem
 
</style>
