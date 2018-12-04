//判断http跳https
/*
var url = window.location.href;
if(url.indexOf("https") < 0) {
	url = url.replace("http:", "https:");
	window.location.replace(url);
}
*/
//统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?96c6c513af98d359be3b246c7f25ecfb";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();