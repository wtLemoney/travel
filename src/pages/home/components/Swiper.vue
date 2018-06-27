<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper"><!--v-if解决每次刷新页面，显示的是数组的最后一张图片的问题，这是因为在数组还是空的时候页面就加载了-->
            <!-- slides -->
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination', // 轮播图片中下方的点
                loop: true, // 支持循环轮播
            }
        }
    },
    computed: {
        showSwiper() {
            return this.list.length;
        }
    }
}
</script>

<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet-active // 不受scoped影响
    background #fff
.wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 30% //防止抖动
    .swiper-img
        width 100%
 
</style>
