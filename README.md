# leancloud

> A Vue.js project

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

```
<script src=./static/js/realtime.browser.js></script>
<script type=text/javascript src=/static/js/manifest.js></script>
<script type=text/javascript src=/static/js/vendor.js></script>
<script type=text/javascript src=/static/js/app.js></script>
```

引用css 主要依赖了 weui

```
  <link href=./static/css/weui.min.css rel=stylesheet>
  <link href=./static/css/style.css rel=stylesheet>
```

```
  <!--
    imgs  用户头像显示 {'用户idclient' :'头像url' }
    appid leancloud appid
    client 登录会话的客户标示
    conversation leancloud 会话id
  -->
<div id=leancloud>
    <index :imgs="{'oH5YI0bHn9u4i0ZGYpeNEKXNyrKU':'http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epX1gYw1MfD4ImvORhkAiaqvzrWTJkc5sykm22oEajcia73LWpgZNTEmJAwqqNSXJHMKgIf0FRvLmfg/0'}"
           :appid="'hcxb7Yo8Q6QM35OdyokwEtcq-gzGzoHsz'" :client="'oH5YI0XfttbEfZ8644zm9CdfJcmw'"
           :conversation="'590e76e28d6d81005824cd18'"></index>
</div>
```


