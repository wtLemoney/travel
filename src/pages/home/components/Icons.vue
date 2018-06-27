<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon"  v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class='icon-img-content' :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                autoplay: false // 解决轮播图自动滚动
            }
        }
    },
    computed: {
        pages () {
            const pages = [];
            this.list.forEach((item,index) => {
                const page = Math.floor(index/8);
                if(!pages[page]) {
                    pages[page]=[];
                }
                pages[page].push(item);
            })
            return pages;
        }
    },
    components: {

    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
    .icons >>> .swiper-container // 解决图标只占一行时，拖动第二行不能左右滑动的问题
        height 0
        padding-bottom 50%  // 基于父元素宽度的百分比下内边距。
    .icons
        margin-top .1rem   
        .icon
            position relative
            overflow hidden
            float left 
            width 25%
            height 0
            padding-bottom 25%
            .icon-img
                position absolute 
                top 0
                left 0
                right 0
                bottom .44rem
                box-sizing border-box
                padding .1rem
                .icon-img-content
                    height 100%
                    display block
                    margin 0 auto
            .icon-desc
                position absolute
                left 0
                right 0
                bottom 0
                text-align center
                height .44rem
                line-height .44rem
                color $darkTextColor
                ellipsis()


</style>
