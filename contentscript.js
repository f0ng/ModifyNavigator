// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
// {
//     // 从存储中读取数据
//     if(request.cmd === 1
//
//         alert(isopen);
//     // console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
//
//     // sendResponse('我收到了你的消息！');
// });

var isopen = 0;
chrome.storage.sync.get('navigatorisopen', function(result) {
    isopen = result['navigatorisopen'];
    // alert( "isopen:" + isopen );
    if( isopen > 0 ) {
        // alert(request.value);
        var actualCode = '(' + function () {
            'use strict';
            var navigator = window.navigator;
            var modifiedNavigator;
            if ('userAgent' in Navigator.prototype) {
                // Chrome 43+ moved all properties from navigator to the prototype,
                // so we have to modify the prototype instead of navigator.
                modifiedNavigator = Navigator.prototype;
                Navigator.userAgent = 'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; MIX 2 Build/OPR1.170623.027) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.2.2';

            } else {
                // Chrome 42- defined the property on navigator.
                modifiedNavigator = Object.create(navigator);
                Object.defineProperty(window, 'navigator', {
                    value: modifiedNavigator,
                    configurable: false,
                    enumerable: false,
                    writable: false
                });
            }
            // Pretend to be Windows XP
            Object.defineProperties(modifiedNavigator, {
                userAgent: {
                    value: 'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; MIX 2 Build/OPR1.170623.027) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.2.2',
                    configurable: false,
                    enumerable: true,
                    writable: false
                },
                appVersion: {
                    value: 'Mozilla/5.0 (Linux; U; Android 8.0.0; zh-cn; MIX 2 Build/OPR1.170623.027) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/61.0.3163.128 Mobile Safari/537.36 XiaoMi/MiuiBrowser/10.2.2',
                    configurable: false,
                    enumerable: true,
                    writable: false
                },
                platform: {
                    value: 'Android',
                    configurable: false,
                    enumerable: true,
                    writable: false
                },
            });
        } + ')();';
        var s = document.createElement('script');
        s.id = "a";
        s.textContent = actualCode;
        document.documentElement.appendChild(s);
        s.remove(); // 删除节点
        // chrome.runtime.sendMessage({greeting: isopen}, function(response) {
        //     console.log(response);
        // });
    }
});


