<template>
    <div>
        <router-link v-show="showAbs"
        tag="div" to="/" class="header-abs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    methods : {
        handleScroll() {
            const top = document.documentElement.scrollTop;
            if(top>60) {
                let opacity = top/140;
                opacity = opacity>1?1:opacity;
                this.opacityStyle = {
                    opacity
                };
                this.showAbs = false;
            }else {
                this.showAbs = true;
            }
            // console.log(document.documentElement.scrollTop);// 不是window.
            
        }
    },
    activated () {
        window.addEventListener('scroll',this.handleScroll);// 这个性能很不好
    },
    deactivated (){ //页面即将被隐藏，或显示别的页面的时候执行
        window.removeEventListener('scroll',this.handleScroll); // 解绑全局事件
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .header-abs
        position absolute 
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        line-height .8rem
        text-align center
        border-radius 50%
        background-color rgba(0,0,0,.8)
        .header-abs-back
            color #fff  
            font-size .4rem
    .header-fixed
        z-index 10
        position fixed
        top 0
        left 0
        right 0
        height $headerHeight // .86rem
        line-height $headerHeight
        text-align center
        color #ffffff
        background $bgColor
        font-size .32rem
        .header-fixed-back
            position absolute 
            top 0
            left 0
            width .64rem
            text-align center
            font-size .4rem
            color #fff
 
</style>
