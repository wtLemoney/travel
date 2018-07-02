<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
        
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
    data () {
        return {
            list: [{
                title: '成人票',
                children: [{
                    title: '成人单人套餐',
                    children: [{
                        title: '成人单人半价'
                    }]
                }]
            },{
                title: '学生票'
            }]
        }
    },
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    }
}
</script>

<style lang='stylus' scoped>

    .content
        height 50rem
 
</style>
