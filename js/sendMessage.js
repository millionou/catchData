console.log("in sendmessage.js");

const sendMessage = chrome.runtime.sendMessage;
const onMessage = chrome.runtime.onMessage;
// var tab1Url = "file:///"+"F:/test/saizi.html";
// var tab2Url = "file:///"+"F:/test/shitou.html";
// var tab3Url = "file:///"+"F:/test/wolf.html";
// var tab4Url = "file:///"+"F:/test/zheng.html";
// var tab5Url = "file:///"+"F:/test/muyugroup.html";

var today = new Date(); 
var year  = today.getFullYear();
var month = (today.getMonth()+1 < 10) ? ("0" + (today.getMonth()+1)): (today.getMonth()+1);
var day   = (today.getDate() < 10) ? ("0" + today.getDate()) : today.getDate();
var yesterdayStr = "/" + year + "-" + month + "-" + (day-1);


var dataUrl = "http://moonlight.heywoodsminiprogram.com/dashboard/statistics/idkey/";
var tab1Url = dataUrl + "5" + yesterdayStr;//骰子
var tab2Url = dataUrl + "3" + yesterdayStr;//石头剪刀布
var tab3Url = dataUrl + "7" + yesterdayStr;//狼人杀
var tab4Url = dataUrl + "6" + yesterdayStr;//真心话大冒险
var tab5Url = "http://moonlight.heywoodsminiprogram.com/muyugroup" + yesterdayStr;//木鱼


function sendDataToPopup(){
	if (window.location.href == tab1Url){
		var saiziData = {
			pot1:0,
			pot2:0,
			pot3:0,
			pot4:0,
			pot5:0,
			pot6:0
		};

		var potsElements = document.getElementsByTagName('tr');
		var potCount = [];
		var sum = 0;
		for (var i = 0; i < potsElements.length-2; i++){
			potCount[i] = potsElements[i+1].cells[2].innerHTML;
			console.log(potCount[i]);
			sum = sum + Number(potCount[i]);
		}

		sendMessage({tabUrl: tab1Url,saizisum : sum }, function(res) {
			console.log(res);
		});

		console.log(sum);
	}else if(window.location.href == tab2Url){
		var tdElements = document.getElementsByTagName('td');
		var serveCounts;
		var finishCounts;
		for (var i = 0; i < tdElements.length; i++){
			if(tdElements[i].innerHTML == "发起场数"){
				serveCounts = tdElements[i].nextSibling.nextSibling.innerHTML;
			}else if(tdElements[i].innerHTML == "完成场数"){
				finishCounts = tdElements[i].nextSibling.nextSibling.innerHTML;
			}
		}
		if ( serveCounts && finishCounts)
		{
			sendMessage({tabUrl : tab2Url,
						serveCounts : serveCounts,
						finishCounts : finishCounts
						 }, function(res) {
								console.log(res);
							}
						);		
		}
		console.log("发起场数:" + serveCounts);
		console.log("完成场数:" + finishCounts);
	}else if(window.location.href == tab3Url){
		var tdElements = document.getElementsByTagName('td');
		var serveCounts;
		for (var i = 0; i < tdElements.length; i++){
			if(tdElements[i].innerHTML == "快速开始"){
				serveCounts = tdElements[i].nextSibling.nextSibling.innerHTML;
			}
		}
		if ( serveCounts )
		{
			sendMessage({tabUrl : tab3Url,
						serveCounts : serveCounts
						 }, function(res) {
								console.log(res);
							}
						);		
		}
		console.log("快速开始:" + serveCounts);
	}else if(window.location.href == tab4Url){
		var tdElements = document.getElementsByTagName('td');
		var clickCounts;
		for (var i = 0; i < tdElements.length; i++){
			if(tdElements[i].innerHTML == "“停止点击”"){
				clickCounts = tdElements[i].nextSibling.nextSibling.innerHTML;
			}
		}
		if ( clickCounts )
		{
			sendMessage({tabUrl : tab4Url,
						clickCounts : clickCounts
						 }, function(res) {
								console.log(res);
							}
						);		
		}
		console.log("“停止点击”:" + clickCounts);
	}else if(window.location.href == tab5Url){
		var bodyElements = document.getElementsByTagName('body');
		var muyustr;
		// for (var i = 0; i < tdElements.length; i++){
		// 	if(tdElements[i].innerHTML == "“停止点击”"){
		// 		clickCounts = tdElements[i].nextSibling.nextSibling.innerHTML;
		// 	}
		// }
		muyustr = bodyElements[0].innerHTML;
		if ( muyustr )
		{
			sendMessage({tabUrl : tab5Url,
						 muyustr : muyustr
						 }, function(res) {
								console.log(res);
							}
						);		
		}
		console.log("muyustr:" + muyustr);
	}
	
	//window.alert(saiziData.pot5);

}

//alert(window.location.href);
sendDataToPopup();
