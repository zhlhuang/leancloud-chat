<template>
    <div>
        <div v-if="myself" class="weui-flex msg_div">
            <div class="weui-flex__item weui-flex__item_5">
                <div style="text-align: right;">
                    <div class="msg_myself_img_div">
                        <img style="display: inline-block;"  :src="src">
                    </div>
                </div>
            </div>
            <div class="weui-flex__item">
                <div style="text-align: center;">
                    <img class="msg_head_img"
                         :src="img">
                </div>
            </div>
        </div>
        <div v-else class="weui-flex msg_div">
            <div class="weui-flex__item">
                <div style="text-align: center;">
                    <img class="msg_head_img"
                         :src="img">
                </div>
            </div>
            <div class="weui-flex__item weui-flex__item_5">
                <div style="text-align: left;">
                    <div class="msg_other_img_div">
                        <img  :src="src">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .msg_other_img_div img{
    display: inline-block;width:100%;
}
.msg_myself_img_div img{
    display: inline-block;width:100%;
}
.msg_other_img_div {
    padding: 8px;
    width: 40%;
    text-align: left;
    background-color: #fff;
    display: inline-block;
}

.msg_myself_img_div {
    width: 40%;
    padding: 8px;
    text-align: left;
    background-color: #1aad19;
    color: #fff;
    display: inline-block;
}

.msg_head_img {
    width: 40px;
    height: 40px;
}

.msg_div {
    padding: 10px
}

.weui-flex__item_5 {
    flex: 5;
}
</style>
<script>
    export default{
     props: ['src','img','myself'],
        data(){
            return{
                msg:''
            }
        },
        components:{
        }
    }
</script>
