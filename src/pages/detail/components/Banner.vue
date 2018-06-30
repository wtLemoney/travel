<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1705/ed/edd4063a442f30c1a3.img.jpg_600x330_4e335e78.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">还砂浆发地方都是</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;10</span>
                </div>
            </div>
        </div>
        <common-gallary v-show="showGalarry" @close="handleGallaryClose"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    data () {
        return {
            showGalarry: false
        }
    },
    components: {
        CommonGallary
    },
    methods: {
        handleBannerClick() {
            this.showGalarry = true;
        },
        handleGallaryClose() {
            this.showGalarry = false;
        }
    }
}
</script>

<style lang='stylus'>

    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute 
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem
            .banner-number
                margin-top .14rem
                padding 0 .4rem
                height .32rem
                line-height .32rem
                border-radius .2rem
                background rgb(0,0,0,.8)
                font-size .24rem
                .banner-icon
                    font-size .24rem
</style>
