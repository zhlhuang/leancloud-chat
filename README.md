# leancloud

> 一个基于 leancloud 聊天是

## Build Setup

```
# 安装已开发依赖
 npm install

# 启动
npm run dev

# 构建
npm run build

```


引用js

```html 
<script src=./static/js/realtime.browser.js></script>
```

引用css 主要依赖了 weui

```html 
  <link href=./static/css/weui.min.css rel=stylesheet>
```

html
```html
<!-- 引入 vue-leancloud.js -->
<script src=./vue-leancloud.js></script>

  <!--
    imgs  用户头像显示 {'用户idclient' :'头像url' }
    appid leancloud appid
    client 登录会话的客户标示
    conversation leancloud 会话id
  -->
<div id=leancloud>
    <Leancloud
            :imgs="imgs"
            :appid="appid" :client="client"
            :conversation="conversation">
    </Leancloud>
</div>

<script>
    new Vue({
        el: "#leancloud",
        data: {
            imgs: {'{client_id}': 'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epX1gYw1MfD4ImvORhkAiaqvzrWTJkc5sykm22oEajcia73LWpgZNTEmJAwqqNSXJHMKgIf0FRvLmfg/0'},
            appid: '{leancloud appid}',
            client: '{client_id}',
            conversation: '{conversation_id}'
        },
        mounted: function () {
        }
    })
</script>
```


