<template>
    <div>
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>  
</template>







<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import {mapState} from 'vuex'

import axios from 'axios'
export default {
    data () {
        return {
            lastCity: '',
            // city: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: []
        }
    },
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getHomeInfo() {
            axios.get('/api/index.json?city='+this.city).then(this.getHomeInfoSucc);
        },
        getHomeInfoSucc(res) {
            res = res.data;
            console.log(res);
            if(res.ret && res.data) {
                const data = res.data;
                // this.city = data.city;
                // console.log(data.city);
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList;
            }
            
        }

    },
    mounted() { // 页面挂在完成之后
        this.lastCity = this.city;
        this.getHomeInfo();
    },
    activated() {//使用keep-alive多出来的钩子函数，解决页面城市改变时，重新发送ajax请求
        if(this.lastCity !== this.city) {
           this.lastCity = this.city;
           this. getHomeInfo();
        } 
    }
}
</script>

<style>
 
</style>
