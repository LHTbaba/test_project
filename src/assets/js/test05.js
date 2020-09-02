// 订阅
document.body.addEventListener('click', function() {
  console.log('click1')
}, false)

document.body.addEventListener('click', function() {
  console.log('click2')
}, false)

// 发布
document.body.click(); // click1  click2