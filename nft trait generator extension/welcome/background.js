//const vision = require('@google-cloud/vision');

chrome.runtime.onInstalled.addListener(async () => {
    let url = chrome.runtime.getURL("welcome/hello.html");
    let tab = await chrome.tabs.create({ url });
    console.log(`Created tab ${tab.id}`);
});


//2/1/23

var CONTEXT_MENU_ID = "Automatic_NFT_trait_generator_context_menu";
function getword(info, tab) {
    if (info.menuItemId !== CONTEXT_MENU_ID) {
        return;
    }
    //console.log(info.srcUrl)
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            myMessage: "imgContextMenu",
            urlImg: info.srcUrl
            //type: document.getElementById('type').value,
            //name: document.getElementById('name').value


        }, function (response) {
            //console.log(response.status);
            //console.log(response);
        });
    });
    console.log("Word " + info.selectionText + " was clicked.");
    //   chrome.tabs.create({  
    //     url: "http://www.google.com/search?q=" + info.menuItemId
    //   });
}


chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "Automatic_NFT_trait_generator_context_menu",
        title: "Automatic NFT trait generator",
        contexts: ["image"]
    });
});

chrome.contextMenus.onClicked.addListener(getword)



// // Extension Pay *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
//3/3/23


// importScripts('./ExtPay.js')

// importScripts('./ExtPay.js') // or `import` / `require` if using a bundler

// import './ExtPay.js';

// (async () => {
//     const src = chrome.extension.getURL('./ExtPay.js');
//     const contentScript = await import(src);
//     contentScript.main();
//   })();

//  var extpay = ExtPay('sample-extension'); // Careful! See note below
//  extpay.startBackground(); 

// extpay.getUser().then(user => {
//     if (user.paid) {
//         console.log("PAID")
//         // ...
//     } else {
//         console.log("NOT PAID")
//         // ...
//     }
// })


