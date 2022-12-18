
function sendMessageToContentScript(message, callback)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response)
        {
            if(callback) callback(response);
        });
    });
}


function save() {

    var speedNum = 0;
    $("#button").click(function(){
        speedNum = 1
        });

    $("#button2").click(function(){
        speedNum = 0
    });

    $("#ok").click(function(){
        // sendMessageToContentScript({cmd:speedNum, value:'tocontent'}, function(response)
        // {
            var bg = chrome.extension.getBackgroundPage();
            bg.topopup(speedNum); // 访问bg的函数
            if (speedNum>0)
                alert("开启修改navigator");
            else
                alert("关闭修改navigator");
        // });
    })
}

save();


chrome.storage.sync.get('navigatorisopen', function(result) {
    if (result.navigatorisopen === 1)
        $("#button").click();
    if (result.navigatorisopen === 0)
        $("#button2").click();
});


