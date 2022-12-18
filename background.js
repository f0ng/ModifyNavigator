// chrome.browserAction.onClicked.addListener(function (activeTab) {
//     var newURL = "https://baidu.com/";
//     chrome.tabs.create({ url: newURL });
// });
//

// background.js
function test()
{
    alert('我是background！');
}


//background.js添加一个消息监听，并将收到的消息回馈给popup.js
chrome.extension.onMessage.addListener(function (request,sender,callback){
    // alert(request);
    callback(request)
});

function topopup(speedNum){
    chrome.storage.sync.set({'navigatorisopen': speedNum}, function() {
        console.log('保存成功' + speedNum);
    });
}

