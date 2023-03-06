//Enrique note: 
//This code controlls the extension client side

var initialImg = "../assets/project.png"
//document.getElementById("appImage").src= initialImg

var mainImg = ""

//Initial loading stage
document.getElementById("urlImgCheck").checked = false;
document.getElementById("configProperties").checked = false;
check_uncheck_IMGURL(document.getElementById("urlImgCheck").checked)
check_uncheck_Properties(document.getElementById("configProperties").checked)

var firstTime = false

chrome.storage.sync.get(/* String or Array */["imgURL","pText","credits"], function(items){
	//alert(items[0])
	console.log("LOGGGGGIIINNNNGGG HERE")
	console.log(items)
	console.log(items.imgURL)
	document.getElementById("appImage").src= items.imgURL;
	document.getElementById("pStatus").innerHTML= items.pText;
	if (items.credits === undefined) {
		console.log("This is undefined");
		firstTime = true
		firstTimeUser()
		document.getElementById("extPayMessage").innerHTML = "🪙 "+ 0;
	}else{
		document.getElementById("extPayMessage").innerHTML = "🪙 "+items.credits;
		firstTime = false
	}
	
	console.log("Credits:")
	console.log(items.credits)
	hasMoney(items.credits);
	//console.log(items.some(item => item.name === 'imgURL'));
    //  items = [ { "yourBody": "myBody" } ]
});

async function firstTimeUser(){
	chrome.storage.sync.set({ "credits": 0 }, function(){
		//  A data saved callback omg so fancy
	});
}

function hasMoney(credits){
	if(credits<=0){
		console.log("doesntHasMoney")
		document.getElementById("auto-fillLevels").disabled = true
		document.getElementById("auto-fillStats").disabled = true
		chrome.storage.sync.set({ "pText": "You are broke! 📉 add credit to continue" }, function(){
			//  A data saved callback omg so fancy
		});
		chrome.storage.sync.set({ "imgURL": "../assets/broken.png" }, function(){
			//  A data saved callback omg so fancy
		});
	}else{
		console.log("HasMoney")
		document.getElementById("auto-fillLevels").disabled = false
		document.getElementById("auto-fillStats").disabled = false
	}
}


//Click on Properties button 
document.getElementById("auto-fillProperties").addEventListener("click", () => {
	/* Auto fill form */
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			myMessage: "auto-fillProperties",
			custom1Key: document.getElementById('custom1Key').value,
			custom2Key: document.getElementById('custom2Key').value,
			custom1Value: document.getElementById('custom1Val').value,
			custom2Value: document.getElementById('custom2Val').value
		}, function (response) {
			//console.log(response.status);
			console.log(response);
		});
	});
});

//Click on Levels button 
document.getElementById("auto-fillLevels").addEventListener("click", () => {
	/* Auto fill form */
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			myMessage: "auto-fillLevels"
			//type: document.getElementById('type').value,
			//name: document.getElementById('name').value


		}, function (response) {
			//console.log(response.status);
			console.log(response);
		});
	});
});

//Click on Stats button 
document.getElementById("auto-fillStats").addEventListener("click", () => {
	/* Auto fill form */
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			myMessage: "auto-fillStats"
			//type: document.getElementById('type').value,
			//name: document.getElementById('name').value


		}, function (response) {
			//console.log(response.status);
			console.log(response);
		});
	});
});

// Click on IMG URL Save button
document.getElementById("urlImgButton").addEventListener("click", () => {
	/* Auto fill form */
	console.log(document.getElementById('urlImgCheckValue').value);
	document.getElementById("appImage").src="../assets/waitTIme.gif";
	console.log("Geting variable1")
	var newIMGURL = document.getElementById('urlImgCheckValue').value;

	document.getElementById("pStatus").innerHTML = "Getting image .. (This can take a minute)";
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		 chrome.tabs.sendMessage(tabs[0].id, {
			myMessage: "urlImgButton",
			urlImg: newIMGURL

		}, function (response) {
			console.log('Here!');
			console.log(response);
			try{
				if (response.status == "END_IMG_GET"){
					console.log('Her2e!');
					document.getElementById("appImage").src= newIMGURL;
					document.getElementById("pStatus").innerHTML = "<b>Done!</b>, Image loaded";
					document.getElementById('urlImgCheck').click();
					chrome.storage.sync.set({ "imgSRC": newIMGURL }, function(){
						//  A data saved callback omg so fancy
					});
				}
			}catch(error){
				alert("NO URL SET");
			}
			//chrome.runtime.lastError;
			//console.log('somethingwent wrong@');
		});
	});
});
//BUENA

//Click on IMG URL check 
checkbox = document.getElementById("urlImgCheck");
checkbox.addEventListener('change', function() {
	check_uncheck_IMGURL(this.checked)
});

function check_uncheck_IMGURL(inputCheckValidation){
if (inputCheckValidation==true) {
		console.log("Checkbox is checked..");
		document.getElementById("urlImgCheckValue").style.display = 'block';
		document.getElementById("urlImgButton").style.display = 'block';
	  } else {
		console.log("Checkbox is not checked..");
		document.getElementById("urlImgCheckValue").style.display = 'none';
		document.getElementById("urlImgButton").style.display = 'none';}
}

//Click on Properties check 
checkbox = document.getElementById("configProperties");
checkbox.addEventListener('change', function() {
	check_uncheck_Properties(this.checked)
});

function check_uncheck_Properties(inputCheckValidation){
if (inputCheckValidation==true) {
		console.log("Checkbox is checked..");
		document.getElementById("auto-fillProperties").disabled = false;	
		document.getElementById("customFieldsDiv").style.display = 'block';
	  } else {
		console.log("Checkbox is not checked..");
		document.getElementById("auto-fillProperties").disabled = true;
		document.getElementById("customFieldsDiv").style.display = 'none';
		}
}

// // Extension Pay *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-
//3/3/2023
// importScripts('ExtPay.js') // or `import` / `require` if using a bundler
//importScripts('ExtPay.js')

// To test payments, replace 'sample-extension' with the ID of
// the extension you registered on ExtensionPay.com. You may
// need to uninstall and reinstall the extension.
// And don't forget to change the ID in popup.js too!
var extpayT1 = ExtPay('automatic-nft-trait-generator');
var credits = 0
chrome.storage.sync.get(["credits"], function(items){
	credits = items.credits
});
// chrome.storage.sync.get(["credits"], function(items){
// 	console.log("items")
// 	console.log(items)
// 	credits = items.credits
// });
var trialStarted = false


extpayT1.startBackground(); // this line is required to use ExtPay in the rest of your extension

extpayT1.getUser().then(user => {
	console.log("user")
	console.log(user)
	if (user.trialStartedAt!=null || user.paid==true) {
		document.getElementById("extPayMessage").innerHTML = "🪙 "+credits;
		document.getElementById("extPayTrial").disabled = true
		//freeTrialCredits();
		//extpay.openPaymentPage()
        // ...
		//document.getElementById("extPayMessage").innerHTML = "👁️ NFT's available to analyze: "+credits;

    } else {
        
    }
})

function addCredits(n){
	console.log("credits")
	credits = credits + n;
	console.log(credits)
	document.getElementById("extPayTrial").disabled = true
	document.getElementById("extPayMessage").innerHTML = "🪙 "+credits;
	chrome.storage.sync.set({ "credits": credits }, function(){
		//  A data saved callback omg so fancy
	});
}



// function minusCredit(n){
// 	credits = credits - n;
// 	document.getElementById("extPayMessage").innerHTML = credits;
// 	chrome.storage.sync.set({ "credits": credits }, function(){
// 		//  A data saved callback omg so fancy
// 	});
// }

//3/4/23
// Click on extPat FREE  button
document.getElementById("extPayTrial").addEventListener("click", () => {
	/* Auto fill form */
	extpayT1.openTrialPage("5 NFT's");
});

extpayT1.onTrialStarted.addListener(user => {
    console.log('User Trial');
	addCredits(5);
	//freeTrialCredits(5)
})

// Click on extPat T1 $4.99  button
document.getElementById("extPayTierOne").addEventListener("click", () => {
	/* Auto fill form */
	extpayT1.openPaymentPage();
});

extpayT1.onPaid.addListener(user => {
    console.log('user paid!')
	addCredits(30);
})

// Click on extPat T2 $9.99  button
// document.getElementById("extPayTierTwo").addEventListener("click", () => {
// 	/* Auto fill form */
// 	extpayT2.openPaymentPage();
// });

// Click on Login
// document.getElementById("extPayTierlogin").addEventListener("click", () => {
// 	/* Auto fill form */
// 	extpayT1.openLoginPage();
// });

// extpay.getUser().then(user => {
//     if (user.paid) {
//         console.log("PAID")
//         // ...
//     } else {
//         console.log("NOT PAID")
//         // ...
//     }
// })

// var checkbox = document.getElementById("urlImgCheck");
// checkbox.addEventListener('change', () => {
// 	if (this.checked) {
// 		console.log("Checkbox is checked..");
// 		document.getElementById("urlImgCheckValue").style.display = 'block';
// 		// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
// 		// 	chrome.tabs.sendMessage(tabs[0].id, {
// 		// 		myMessage: "auto-fillStats"
// 		// 		//type: document.getElementById('type').value,
// 		// 		//name: document.getElementById('name').value
	
	
// 		// 	}, function (response) {
// 		// 		//console.log(response.status);
// 		// 		console.log(response);
// 		// 		console.log(response);
// 		// 	});
// 		// });
// 		// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
// 		// 	chrome.tabs.sendMessage(tabs[0].id, {
// 		// 		myMessage: "urlImgCheck"
// 		// 		//type: document.getElementById('type').value,
// 		// 		//name: document.getElementById('name').value
	
	
// 		// 	}, function (response) {
// 		// 		//console.log(response.status);
// 		// 		console.log(response);
// 		// 	});
// 		// });
// 	  } else {
// 		console.log("Checkbox is not checked..");
// 		document.getElementById("urlImgCheckValue").style.display = 'none';
// 		// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
// 		// 	chrome.tabs.sendMessage(tabs[0].id, {
// 		// 		myMessage: "urlImgCheck2"
// 		// 		//type: document.getElementById('type').value,
// 		// 		//name: document.getElementById('name').value
	
	
// 		// 	}, function (response) {
// 		// 		//console.log(response.status);
// 		// 		console.log(response);
// 		// 	});
// 		// });
// 	  }

// 	// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
// 	// 	chrome.tabs.sendMessage(tabs[0].id, {
			
// 	// 	});
// 	// });
	
  
// });

// document.getElementById("urlImgCheck").addEventListener("change", () => {
// 	/* Auto fill form */
// 	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
// 		chrome.tabs.sendMessage(tabs[0].id, {
// 			myMessage: "urlImgCheck"
// 			//type: document.getElementById('type').value,
// 			//name: document.getElementById('name').value


// 		}, function (response) {
// 			//console.log(response.status);
// 			console.log(response);
// 			console.log("Enrique here");
// 			if (this.checked) {
// 				    console.log("Checkbox is checked..");
// 					document.getElementById("urlImgCheckValue").style.display = 'block';
// 				  } else {
// 				    console.log("Checkbox is not checked..");
// 					document.getElementById("urlImgCheckValue").style.display = 'none';
// 				  }
				  
// 		});
// 	});
// });

// var checkbox = document.getElementById("urlImgCheck");
// checkbox.addEventListener('change', function() {
//   if (this.checked) {
//     console.log("Checkbox is checked..");
// 	document.getElementById("urlImgCheckValue").style.display = 'block';
//   } else {
//     console.log("Checkbox is not checked..");
// 	document.getElementById("urlImgCheckValue").style.display = 'none';
//   }
// });

// //document.querySelector("input[name=urlImgCheck]").addEventListener('change', function() {
// //var emailInput = document.getElementById("urlImgCheck")
// //var emailInput = document.querySelector("input[type=checkbox]");
// console.log("HELLOOA");
// console.log(emailInput);
// emailInput.addEventListener("change", () => {
// 	alert('HEY!');
// 	console.log("HELLOOA");
// 	/* Auto fill form */
// 	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		
// 		chrome.tabs.sendMessage(tabs[0].id, {
// 			//myMessage: "auto-fillStats"
// 			//type: document.getElementById('type').value,
// 			//name: document.getElementById('name').value
			


// 		}, function (response) {
// 			//console.log(response.status);
// 			console.log(response);
// 		});
// 	});
// });

// function myFunction() {
// 	// Get the checkbox
// 	var checkBox = document.getElementById("urlImgCheck");
// 	// Get the output text
// 	var text = document.getElementById("urlImgCheckValue");

// 	// If the checkbox is checked, display the output text
// 	if (checkBox.checked == true) {
// 		text.style.display = "block";
// 	} else {
// 		text.style.display = "none";
// 	}
// }