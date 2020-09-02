// 主体，发送消息
function sendMsg(msg) {
  console.log(msg)
}

// 代理，对消息进行过滤
function proxySendMsg(msg) {
  // 无消息则直接返回
  if (typeof msg === 'undefined') {
      console.log('deny')
      return
  }
  
  // 有消息则进行过滤
  msg = ('' + msg).replace(/泥\s*煤/g, '')

  sendMsg(msg)
}


sendMsg('泥煤呀泥 煤呀'); // 泥煤呀泥 煤呀
proxySendMsg('泥煤呀泥 煤'); // 呀
proxySendMsg(); // deny