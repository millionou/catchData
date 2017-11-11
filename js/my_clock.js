const sendMessage = chrome.runtime.sendMessage;
const onMessage = chrome.runtime.onMessage;
const query = chrome.tabs.query;
// var tab1Url = "file:///"+"F:/test/saizi.html";
// var tab2Url = "file:///"+"F:/test/shitou.html";
// var tab3Url = "file:///"+"F:/test/wolf.html";
// var tab4Url = "file:///"+"F:/test/zheng.html";
// var tab5Url = "file:///"+"F:/test/muyugroup.html";

var today = new Date(); 
var year  = today.getFullYear();
var month = (today.getMonth()+1 < 10) ? ("0" + (today.getMonth()+1)) : (today.getMonth()+1);
var day   = (today.getDate() < 10) ? ("0" + today.getDate()) : today.getDate();
var yesterdayStr = "/" + year + "-" + month + "-" + (day-1);


var dataUrl = "http://moonlight.heywoodsminiprogram.com/dashboard/statistics/idkey/";
var tab1Url = dataUrl + "5" + yesterdayStr;//骰子
var tab2Url = dataUrl + "3" + yesterdayStr;//石头剪刀布
var tab3Url = dataUrl + "7" + yesterdayStr;//狼人杀
var tab4Url = dataUrl + "6" + yesterdayStr;//真心话大冒险
var tab5Url = "http://moonlight.heywoodsminiprogram.com/muyugroup" + yesterdayStr;//木鱼


function createNewTab(){
	// var today = new Date(); 
	// var year  = today.getFullYear();
	// var month = (today.getMonth()+1 < 10) ? ("0" + today.getMonth()) : today.getMonth();
	// var day   = (today.getDate() < 10) ? ("0" + today.getDate()) : today.getDate();
//	var tab1Url = "http://www.baidu.com/" + year + "-" + month + "-" + day;
//	var tab2Url = "http://moonlight.heywoodsminiprogram.com/dashboard/statistics/idkey/5/" + year + "-" + month + "-" + day;

	console.log("Enter createNewTab");
	chrome.tabs.create({
		index :0,
		url : tab1Url,
		active : false,
		pinned : false
	},
		function(tab){
			console.log("create tab1Url");
		}
	);

	chrome.tabs.create({
		index :1,
		url : tab2Url,
		active : false,
		pinned : false
	},
		function(tab){
			console.log("create tab2Url");
		}
	);

	chrome.tabs.create({
		index :2,
		url : tab3Url,
		active : false,
		pinned : false
	},
		function(tab){
			console.log("create tab3Url");
		}
	);

	chrome.tabs.create({
		index :3,
		url : tab4Url,
		active : false,
		pinned : false
	},
		function(tab){
			console.log("create tab4Url");
		}
	);

	chrome.tabs.create({
		index :4,
		url : tab5Url,
		active : false,
		pinned : false
	},
		function(tab){
			console.log("create tab4Url");
		}
	);
	// chrome.tabs.executeScript(null,{
	// 		code: "document.body.bgColor = 'red'"
	// 	},function(ttt){
	// 		console.log(ttt);
	// 	});
	// for(var i=0; i<3; i++){
	// 	chrome.tabs.query({
	// 		index : i
	// 		},function(t){
	// 			console.log(t);
	// 			if (t[0].url == tab1Url){
	// 				chrome.tabs.executeScript(t[0].id,{
	// 				file:'js/sendMessage.js',
	// 				allFrames:true,
	// 				runAt:'document_end'
	// 			},function(ttt){
	// 				console.log(ttt);
	// 			})
	// 			}
				
	// 		});		
	// }	


	chrome.tabs.query({
//		index : 0
		url : tab1Url
		},function(t){
			console.log(t);
//			if (t[0].url == tab1Url){
				chrome.tabs.executeScript(t[0].id,{
				file:'js/sendMessage.js',
				allFrames:true,
				runAt:'document_end'
			},function(ttt){
				console.log(ttt);
			})
//			}
			
		});	

	chrome.tabs.query({
//		index : 0
		url : tab2Url
		},function(t){
			console.log(t);
//			if (t[0].url == tab1Url){
				chrome.tabs.executeScript(t[0].id,{
//	 			code: "document.body.bgColor = 'red'",
				file:'js/sendMessage.js',
				allFrames:true,
				runAt:'document_end'
			},function(ttt){
				console.log(ttt);
			})
//			}
			
		});	

	chrome.tabs.query({
//		index : 0
		url : tab3Url
		},function(t){
			console.log(t);
//			if (t[0].url == tab1Url){
				chrome.tabs.executeScript(t[0].id,{
//	 			code: "document.body.bgColor = 'red'",
				file:'js/sendMessage.js',
				allFrames:true,
				runAt:'document_end'
			},function(ttt){
				console.log(ttt);
			})
//			}
			
		});	

	chrome.tabs.query({
//		index : 0
		url : tab4Url
		},function(t){
			console.log(t);
//			if (t[0].url == tab1Url){
				chrome.tabs.executeScript(t[0].id,{
//	 			code: "document.body.bgColor = 'red'",
				file:'js/sendMessage.js',
				allFrames:true,
				runAt:'document_end'
			},function(ttt){
				console.log(ttt);
			})
//			}
			
		});	

	chrome.tabs.query({
//		index : 0
		url : tab5Url
		},function(t){
			console.log(t);
//			if (t[0].url == tab1Url){
				chrome.tabs.executeScript(t[0].id,{
//	 			code: "document.body.bgColor = 'red'",
				file:'js/sendMessage.js',
				allFrames:true,
				runAt:'document_end'
			},function(ttt){
				console.log(ttt);
			})
//			}
			
		});	

	
	



}
var saizisum;
var str;
function copyData(){
	str = "骰子总数：\t" + saizisum;
	// window.clipboardData.clearData();
//	window.clipboardData.setData('Text',str);
	window.copy(str);
}

var testbtn = document.getElementById("testBtn");
var copy = document.getElementById("copy");

onMessage.addListener(function(n, t, e) {
				if (n.tabUrl == tab1Url){
					saizisum = n.saizisum
					console.log("receive message ...." + saizisum);
					//document.getElementById("saiziid").innerHTML = '骰子总数：' +  saizisum;
					document.getElementById("saiziid").innerHTML = saizisum;
					e("Success");
//				"FILL_THE_BLANK" === n.action && (console.log("Fill the login information of MP..."), accountInput.value = n.account, passwordInput.value = n.password, loginButton.click(), e("Success."))
				}else if(n.tabUrl == tab2Url){
					//document.getElementById("fingerid").innerHTML = '发起场数：' +  n.serveCounts + '\n完成场数：' + n.finishCounts;
					document.getElementById("fingerserveid").innerHTML = n.serveCounts ;
					document.getElementById("fingerfinishid").innerHTML = n.finishCounts;
					e("Success");
				}else if(n.tabUrl == tab3Url){
					//document.getElementById("wolfid").innerHTML = '快速开始：' +  n.serveCounts;
					document.getElementById("wolfid").innerHTML = n.serveCounts;
					e("Success");
				}else if(n.tabUrl == tab4Url){
					// document.getElementById("zhengid").innerHTML = '“停止点击”:' +  n.clickCounts ;
					document.getElementById("zhengid").innerHTML = n.clickCounts ;
					e("Success");
				}else if(n.tabUrl == tab5Url){
					var str = n.muyustr;
					var muyuCountsStr  = '敲击总数为:';
					var muyuPeoplesStr  = '敲击人数为:';
					var muyuGroupsStr  = '敲击群数为:';
					var muyuKnockCounts;
					var muyuKnockPeoples;
					var muyuknockGroups;

					muyuKnockCounts = (str.substring(str.indexOf(muyuCountsStr)+muyuCountsStr.length,
						                                   str.indexOf('<br>' + muyuPeoplesStr))); 

					muyuKnockPeoples = (str.substring(str.indexOf(muyuPeoplesStr)+muyuPeoplesStr.length,
						                                   str.indexOf('<br>' + muyuGroupsStr))); 


					muyuknockGroups = (str.substring(str.indexOf(muyuGroupsStr)+muyuGroupsStr.length)); 

					// document.getElementById("muyuid").innerHTML = muyuCountsStr + muyuKnockCounts + '<br>' + muyuPeoplesStr + muyuKnockPeoples+ '<br>' + muyuGroupsStr + muyuknockGroups;
					document.getElementById("dayid").innerHTML = yesterdayStr.substring(1) ;//去掉‘/’
					document.getElementById("muyuclickid").innerHTML = muyuKnockCounts ;
					document.getElementById("muyupeopleid").innerHTML = muyuKnockPeoples;
					document.getElementById("muyugroudid").innerHTML =muyuknockGroups;
					e("Success");
				}
})
testbtn.addEventListener("click",createNewTab,false);
//copy.addEventListener("click",copyData,false);
copy.addEventListener("click",copyData,false);













// function my_clock(el){
// 	var today = new Date();
// 	var h = today.getHours();
// 	var m = today.getMinutes();
// 	var s = today.getSeconds();

// 	m = ( m >= 10) ? m : ('0'+ m);
// 	s = ( s >= 10) ? s : ('0'+ s);
// 	el.innerHTML = h + ":" + m + ":" + s;
// 	setTimeout(function(){my_clock(el)},1000);
// }

// var clock_div = document.getElementById('clock_div');
// my_clock(clock_div);

// clock_div.innerHTML = "121212";
