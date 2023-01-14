

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        //https://www.whitehouse.gov/contact/
        try {
            var t = document.querySelector('table');
            var htmlTableList = t.getElementsByTagName("tr");
            var noOfRowsOnTableClient = (htmlTableList.length)-1;

            for (var i = 0; i < noOfRowsOnTableClient; i++) {
                htmlTableList[i+1].querySelector('input[placeholder="Character"]').value = request.type;
                htmlTableList[i+1].querySelector('input[placeholder="Male"]').value = request.name;
                console.log('hey! 1: '+i);
            };
            sendResponse({ status: "Success!" });
        } catch (error) {
            console.log(error)
            sendResponse({ status: "Exception occurred!" });
        }
    }
);