<template>
    <ul class="list">
        <li @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleLetterClick" 
            :ref="item"
            class="item" v-for="(item,key) of letters" :key="key">{{item}}</li>
    </ul>
</template>

<script>
export default {
    props: {
        cities: Object
    },
    data () {
        return {
            touchStatus: false,
            startY: 0,
            timmer: null
        }
    },
    updated () { // 页面数据更新并完成渲染
        this.startY = this.$refs['A'][0].offsetTop;// 写在这是为了性能优化
    },
    computed: {
        letters() {
            const letters = [];
            for(let i in this.cities) {
                letters.push(i);
            }
            return letters;
        }
    },
    methods: {
        handleLetterClick (e) {
            // console.log(e.target.innerText);
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true;
        },
        handleTouchMove (e) {// 算出手指滑动的高度
            if(this.touchStatus) {
                if(this.timer) {
                    clearTimeout(this.timer);
                }
                this.timer = setTimeout(()=>{ // 函数节流
                    // const startY = this.$refs['A'][0].offsetTop;// 不包含页面header高度79
                    const touchY = e.touches[0].clientY-79;//clientY是距页面顶部
                    const index = Math.floor((touchY-this.startY)/20);// 每个字母的高度为20
                    // console.log(index);
                    if (index >=0 && index < this.letters.length) {
                        this.$emit('change',this.letters[index]);
                    }
                },100);
                
            }
        },
        handleTouchEnd () {
            this.touchStatus = false;
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute 
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            line-height .4rem
            text-align center
            color $bgColor

 
</style>
