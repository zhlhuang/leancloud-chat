<template>
    <div class="console">
        <div class="weui-flex">
            <div class=weui-flex__item>
                <div class="console_item">
                    <a onclick="$('#file').click()" href="javascript:;" class="weui-btn weui-btn_default weui-btn_mini">图</a>
                    <input style="position: absolute;left: -1000px;" @change="sendImg" value="图片"  type="file"
                           id="file">
                </div>
            </div>
            <div class="weui-flex__item weui-flex__item_4">
                <div class="console_item">
                    <input v-model="msg" class="weui-input">
                </div>
            </div>
            <div class=weui-flex__item>
                <div class="console_item">
                    <a @click="send" style="" class="weui-btn weui-btn_primary weui-btn_mini"
                       href="javascript:;">发送</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.console {
    position: fixed;
    width: 100%;
    bottom: 0%;
}

.console .weui-flex {
    background: #fff;
    padding-top: 8px;
}

.weui-flex__item_4 {
    flex: 4
}

.console_item {
    padding: 5px 5px;
}

.console .weui-input {
    width: 100%;
    border: 1px solid #e7e7e7;
    background: #fff;
    height: 1.8rem;
}

.console .weui-btn {
    padding: 0px;
    width: 100%;
}




</style>
<script>
    export default{
        name:'Console',
        data(){
            return{
                msg:''
            }
        },
        methods:{
            sendImg(e){
                let file_url=$('#file')[0]
                console.log(file_url.files[0])
                var file = new AV.File(new Date().getTime()+'', file_url.files[0]);
                file.save().then(()=>{
                      var message = new AV.ImageMessage(file);
                      message.setText('图片信息');
                      message.setAttributes({ location: '广州' });
                      this.$emit('sendImg',message)
                })
            },
            send(){
                if(!this.msg){
                    alert('发送内容不能为空')
                    return ;
                }
                this.$emit('send',this.msg)
                this.msg=''
            }
        },
        components:{
        }
    }
</script>
