let websock: any = null;
let global_callback: any = null;
const serverPort = "8888"; // webSocket连接端口
const wsuri = "ws://" + window.location.hostname + ":" + serverPort + "/wsdemo";
function createWebSocket(callback: any) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (websock == null || typeof websock !== WebSocket) {
    initWebSocket(callback);
  }
}
function initWebSocket(callback: any) {
  global_callback = callback;
  // 初始化websocket
  websock = new WebSocket(wsuri);
  websock.onmessage = function (e: any) {
    websocketonmessage(e);
  };
  websock.onclose = function (e: any) {
    websocketclose(e);
  };
  websock.onopen = function () {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    websocketOpen();
  };
  // 连接发生错误的回调方法
  websock.onerror = function () {
    console.log("WebSocket连接发生错误");
    //createWebSocket();啊，发现这样写会创建多个连接，加延时也不行
  };
}
// 实际调用的方法
function sendSock(agentData: any) {
  if (websock.readyState === websock.OPEN) {
    // 若是ws开启状态
    websocketsend(agentData);
  } else if (websock.readyState === websock.CONNECTING) {
    // 若是 正在开启状态，则等待1s后重新调用
    setTimeout(function () {
      sendSock(agentData);
    }, 1000);
  } else {
    // 若未开启 ，则等待1s后重新调用
    setTimeout(function () {
      sendSock(agentData);
    }, 1000);
  }
}
function closeSock() {
  websock.close();
}
// 数据接收
function websocketonmessage(msg: any) {
  // console.log("收到数据："+JSON.parse(e.data));
  // console.log("收到数据："+msg);
  // global_callback(JSON.parse(msg.data));
  // 收到信息为Blob类型时
  let result: any = null;
  // debugger
  if (msg.data instanceof Blob) {
    const reader = new FileReader();
    reader.readAsText(msg.data, "UTF-8");
    reader.onload = (e: any) => {
      console.log(e);
      if (typeof reader.result === "string") {
        result = JSON.parse(reader.result);
      }
      //console.log("websocket收到", result);
      global_callback(result);
    };
  } else {
    // result = JSON.parse(msg.data);
    console.log("websocket收到", msg.data);
    global_callback(msg.data);
  }
}
// 数据发送
function websocketsend(agentData: any) {
  console.log("发送数据：" + agentData);
  websock.send(agentData);
}
// 关闭
function websocketclose(e: any) {
  console.log("connection closed (" + e.code + ")");
}
function websocketOpen(e: any) {
  console.log(e);
  console.log("连接打开");
}
export { sendSock, createWebSocket, closeSock };

