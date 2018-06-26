<template>
    <div class="icons">
        <swiper>
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
    data () {
        return {
            iconList:[{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc: '景点门票'
            },
            {
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                desc: '水上乐园'
            },
            {
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                desc: '必游榜单'
            },
            {
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',
                desc: '成都定制游'
            },
            {
                id: '0005',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
                desc: '情迷九寨'
            },
            {
                id: '0006',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                desc: '蓉城七景'
            },
            {
                id: '0007',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
                desc: '成都周边'
            },
            {
                id: '0008',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
                desc: 'Q+精选'
            },
            {
                id: '0009',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                desc: '演出'
            },
            ]
        }
    },
    computed: {
        pages () {
            const pages = [];
            this.iconList.forEach((item,index) => {
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
