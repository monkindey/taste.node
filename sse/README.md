### SSE
> 服务器发送事件，即服务端向客户端发送通知

### 原理
1. 建立连接
浏览器主动发出请求，生成`EventSource`实例化对象
```javascript
es = new EventSource('/msg')
```
EventSource(url) 里面的url应该是跟后端约定好的接口，
详情可以看`index.js`

2. 监听message事件

### 参考链接
1. [SSE：服务器发送事件](http://javascript.ruanyifeng.com/htmlapi/eventsource.html)
2. [EventSource MDN](https://developer.mozilla.org/zh-CN/docs/Server-sent_events/EventSource)