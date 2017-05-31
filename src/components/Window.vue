<template>
    <div>
        <div>
            <template v-for="item in msg">
                 <template v-if="item.content._lctype == -1">
                <text-msg :content="item.content._lctext"
                          :img="imgs[item.from]"
                          :myself="item.from==client">

                </text-msg>
                 </template>
                <template v-if="item.content._lctype == -2">
                    <img-msg :src="item.content._lcfile.url"
                              :img="imgs[item.from]"
                              :myself="item.from==client">

                    </img-msg>
                </template>
            </template>
        </div>
    </div>
</template>
<script>
import TextMsg from './TextMsg'
import ImgMsg from './ImgMsg'
    export default{
        props: ['msg','client','conversation','imgs'],
        data(){
            return{
            }
        },
        components:{
            'text-msg':TextMsg,
            'img-msg':ImgMsg
        }
    }



</script>
