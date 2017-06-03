<template>
    <div>
        <div style="padding-bottom:60px;">
            <div style="text-align:center;margin-top:5px;">
                <a @click="moreBtn" style="background: #aaaaaa;color: #fff;padding: 2px 11px;">查看更多</a>
            </div>
            <window :imgs="imgs" :msg="msg_list" :client="client" :conversation="conversation"></window>
            <console v-on:send="sendTextMsg" v-on:sendImg="sendImgMsg"></console>
        </div>
    </div>
</template>
<script>
import Console from './Console.vue'
import Window from './Window.vue'
    var conversation=null;
    var Iterator=null
    export default{
      props: ['client','conversation','appid','appkey','imgs'],
       name:'Leancloud',
        data(){
            return{
                msg_list:[],
                is_scroll:true
            }
        },
        methods:{
            moreBtn(){
            //获取更多聊天记录
                var that = this
                Iterator.next().then((res)=>{
                    var h = document.body.scrollHeight
                    console.log(document.body.scrollHeight-h)
                    var msg_list=that.formartMsgs(res.value)
                    console.log(res)
                    that.msg_list=msg_list.concat(that.msg_list)
                    setTimeout(()=>{
                        window.scrollTo(0,document.body.scrollHeight-h)
                    },100)
                })
            },
            sendImgMsg(param){
                var that = this
                conversation.send(param).then(msg=>{
                    console.log(msg)
                    if(!msg.content){
                        msg.content={
                            _lctype:msg.type,
                            _lctext:msg._lctext,
                            _lcfile:msg._lcfile,
                            _lcattrs:msg._lcattrs
                        }
                    }
                    that.updateMsgList(msg)
                });
            },
            sendTextMsg(param){
                console.log(param)
                var that = this
                conversation.send(new AV.TextMessage(param)).then((msg)=>{
                    console.log(msg)
                    if(!msg.content){
                        msg.content={
                            _lctype:msg.type,
                            _lctext:msg._lctext,
                        }
                    }
                    that.updateMsgList(msg)
                })
            },
            formartMsgs(msg_list){
                var res=[];
             for(var i=0 ;i< msg_list.length;i++){
                    res.push(this.formartMsg(msg_list[i]))
                }
                return res;
            },
            formartMsg(msg){
                    return {
                        cid:msg.cid,
                        content:msg.content,
                        id:msg.id,
                        timestamp:msg.timestamp,
                        from:msg.from,
                    }
            },
            updateMsgList(msg){
               var msg = this.formartMsg(msg)
               this.msg_list.push(msg)
               setTimeout(()=>{
                    window.scrollTo(0,document.body.scrollHeight)
               },500)
            }
        },
        mounted(){
            var that = this
             AV.init({
                 appId: that.appid,
                 appKey:that.appkey,
             });
            var Realtime = AV.Realtime;
                var realtime = new Realtime({
                  appId: that.appid,
                  region: 'cn',
                  plugins: [AV.TypedMessagesPlugin], // 注册富媒体消息插件
                });
                realtime.createIMClient(that.client).then((client)=>{
                    //获取聊天会话
                    return client.getConversation(that.conversation)
                }).then((con)=>{
                    //获取聊天记录
                    conversation=con
                    Iterator = con.createMessagesIterator({limit:20})
                    Iterator.next().then((result)=>{
                        console.log(result.value)
                        that.msg_list = that.formartMsgs(result.value)
                    })
                    setTimeout(()=>{
                        window.scrollTo(0,document.body.scrollHeight)
                    },500)
                    return con.on('message',(msg)=>{
                        that.updateMsgList(msg)
                    })
                }).catch((error)=>{
                      console.log(error)
                })
        },
        components:{
            'console': Console,
            'window':Window
        }
    }

</script>
