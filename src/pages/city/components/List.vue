<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>

            <div class="area">
                <div class="title border-topbottom">热门城市城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>

            <div class="area" v-for="(item,key) of cities" :key="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list" v-for="item1 of item" :key="item1.id">
                    <div class="item border-bottom">{{item1.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll';
export default {
    // name: 'CityList',
    props: {
        hot: Array,
        cities: Object
    },
    data () {
        return {

        }
    },
    mounted () { // DOM挂载完毕后执行
        this.scroll = new Bscroll(this.$refs.wrapper,{
            click: true
        })
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc
    .list
        overflow hidden
        position absolute
        top 1.58rem
        bottom 0
        left 0
        right 0
        .title
            line-height .54rem
            background #eeeeee
            padding-left .2rem
            color #666666
            font-size .26rem
        .button-list
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .button-wrapper
                float left
                width 33.33%
                .button
                    margin .1rem
                    padding .1rem 0
                    text-align center
                    border .02rem solid #cccccc
                    border-radius .06rem
        .item-list
            .item
                line-height .76rem
                padding-left .2rem

</style>
