<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
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
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination', // 轮播图片中下方的点
                loop: true, // 支持循环轮播
            },
            swiperList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/13/6332699c44387902.jpg_750x200_b7afa4f8.jpg'
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/fc/e47aa3e1c67bbc02.jpg_750x200_0f3eecf8.jpg'
            }]
        }
    },
    components: {

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
    padding-bottom 26.67% //防止抖动
    .swiper-img
        width 100%
 
</style>
