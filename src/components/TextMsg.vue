<template>
    <div>
        <div v-if="myself" class="weui-flex msg_div">
            <div class="weui-flex__item weui-flex__item_5">
                <div style="text-align: right;">
                    <div class="msg_myself_text_div">
                            <span>
                                {{ content }}
                            </span>
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
                    <div class="msg_other_text_div">
                            <span>
                                {{ content }}
                            </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.msg_other_text_div {
    padding: 8px;
    text-align: left;
    background-color: #fff;
    display: inline-block;
}

.msg_myself_text_div {
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
     props: ['content','img','myself'],
        data(){
            return{
            }
        },
        components:{
        }
    }
</script>
