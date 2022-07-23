contentLoadstart();

function contentLoadstart() {
  setTimeout(contentLoadone, 100);
}

function contentLoadone() {
  include("/components/store/pack/contents/com.rarefrostbites.15.survival_grounds/pi.html", "", "div.pi", 0);
  include("/components/store/pack/mfa/000001/pa.html", "", "div.pa", 0);
  include("/components/store/pack/contents/com.rarefrostbites.15.survival_grounds/d.html", "", "div.d", 0);
  include("/components/store/pack/contents/com.rarefrostbites.15.survival_grounds/share.html", "", "div.holder", 0);
  setTimeout(contentLoadtwo, 10);
}

function contentLoadtwo() {
  include("/components/store/pack/contents/com.rarefrostbites.15.survival_grounds/pps.html", "", "div.pps", 50);
  include("/components/store/pack/contents/com.rarefrostbites.15.survival_grounds/Pack Information.html", "", "div.pi-b1", 0);
  // include("/components/store/pack/contents/com.rarefrostbites.15.survival_grounds/Changelogs.html", "", "div.chlgs-b1", 0);
  include("/components/store/pack/contents/com.rarefrostbites.15.survival_grounds/pr.html", "", "div.pr", 0);
  include("/components/store/pack/mfa/000001/2.html", "", "div.mfa", 60);
  setTimeout(initializeLanguage, 2000);
  setTimeout(PackLanguage, 2000);
}

function contentLoadembed_p() {
  include("/components/store/pack/contents/com.rarefrostbites.15.survival_grounds/iframeembed.html", "", "div.iframe", 0);
  include("/components/store/pack/contents/com.rarefrostbites.15.survival_grounds/embedcode.html", "", "div.btn", 0);
}




"use strict";

const languagePack = {
  "en-gb": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "en-us": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "es-es": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "fil-ph": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Masiyahan sa iyong pagsasanay, maraming mga hadlang ang naghihintay para sa iyo! Sumali sa aming kampanya nang sama-sama!"
  },
  "hi-in": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "अपने प्रशिक्षण का आनंद लें, कई बाधाएं आपकी प्रतीक्षा कर रही हैं! एक साथ हमारे अभियान में शामिल हों!"
  },
  "id-id": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "ja-jp": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "あなたのトレーニングを楽しんでください、多くの障害があなたを待っています！一緒にキャンペーンに参加しましょう！"
  },
  "km-kh": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "ko-kr": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "훈련을 즐기십시오. 많은 장애물이 당신을 기다리고 있습니다! 함께 캠페인에 참여하세요!"
  },
  "ms-my": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "my-mm": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "pt-pt": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Aproveite seu treinamento, muitos obstáculos estão esperando por você! Junte-se à nossa campanha!"
  },
  "ru-ru": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "vi-vn": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  },
  "zh-cn": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "享受你的训练，许多障碍等着你！一起加入我们的活动！"
  },
  "zh-tw": {
    "pt": "RareFrostbites Survival Grounds",
    "pa": "RareFrostbites Team",
    "pd": "Enjoy your training, many obstacles are waiting for you! Join to our campaign together!"
  }
}



function changeSize1() {
  document.getElementById("iframe").style.minWidth = "300px";
  document.getElementById("iframe").style.minHeight = "400px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0035\u002e\u0073\u0075\u0072\u0076\u0069\u0076\u0061\u006c\u005f\u0067\u0072\u006f\u0075\u006e\u0064\u0073\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u0020\u0053\u0075\u0072\u0076\u0069\u0076\u0061\u006c\u0020\u0047\u0072\u006f\u0075\u006e\u0064\u0073\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0033\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0034\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize2() {
  document.getElementById("iframe").style.minWidth = "320px";
  document.getElementById("iframe").style.minHeight = "500px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0035\u002e\u0073\u0075\u0072\u0076\u0069\u0076\u0061\u006c\u005f\u0067\u0072\u006f\u0075\u006e\u0064\u0073\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u0020\u0053\u0075\u0072\u0076\u0069\u0076\u0061\u006c\u0020\u0047\u0072\u006f\u0075\u006e\u0064\u0073\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0033\u0032\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0035\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize3() {
  document.getElementById("iframe").style.minWidth = "400px";
  document.getElementById("iframe").style.minHeight = "600px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0035\u002e\u0073\u0075\u0072\u0076\u0069\u0076\u0061\u006c\u005f\u0067\u0072\u006f\u0075\u006e\u0064\u0073\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u0020\u0053\u0075\u0072\u0076\u0069\u0076\u0061\u006c\u0020\u0047\u0072\u006f\u0075\u006e\u0064\u0073\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0034\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0036\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize4() {
  document.getElementById("iframe").style.minWidth = "500px";
  document.getElementById("iframe").style.minHeight = "700px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0035\u002e\u0073\u0075\u0072\u0076\u0069\u0076\u0061\u006c\u005f\u0067\u0072\u006f\u0075\u006e\u0064\u0073\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u0020\u0053\u0075\u0072\u0076\u0069\u0076\u0061\u006c\u0020\u0047\u0072\u006f\u0075\u006e\u0064\u0073\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0035\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0037\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}


function changeSize5() {
  document.getElementById("iframe").style.minWidth = "600px";
  document.getElementById("iframe").style.minHeight = "800px";
  document.getElementById("iframe_c").value = "\u003c\u0069\u0066\u0072\u0061\u006d\u0065\u00a0\u0073\u0072\u0063\u003d\u0022\u0068\u0074\u0074\u0070\u0073\u003a\u002f\u002f\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0070\u0061\u0067\u0065\u0073\u002e\u0064\u0065\u0076\u002f\u0065\u006d\u0062\u0065\u0064\u0073\u002f\u0073\u0074\u006f\u0072\u0065\u002f\u0063\u006f\u006d\u002e\u0072\u0061\u0072\u0065\u0066\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u002e\u0031\u0035\u002e\u0073\u0075\u0072\u0076\u0069\u0076\u0061\u006c\u005f\u0067\u0072\u006f\u0075\u006e\u0064\u0073\u0022\u00a0\u0069\u0064\u003d\u0022\u0069\u0066\u0072\u0061\u006d\u0065\u0022\u00a0\u0074\u0069\u0074\u006c\u0065\u003d\u0022\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u0020\u0053\u0075\u0072\u0076\u0069\u0076\u0061\u006c\u0020\u0047\u0072\u006f\u0075\u006e\u0064\u0073\u00a0\u002d\u00a0\u0052\u0061\u0072\u0065\u0046\u0072\u006f\u0073\u0074\u0062\u0069\u0074\u0065\u0073\u00a0\u0054\u0065\u0061\u006d\u00a0\u007c\u00a0\u0052\u0046\u0042\u00a0\u0053\u0074\u006f\u0072\u0065\u0022\u00a0\u006c\u006f\u0061\u0064\u0069\u006e\u0067\u003d\u0022\u006c\u0061\u007a\u0079\u0022\u00a0\u0066\u0072\u0061\u006d\u0065\u0062\u006f\u0072\u0064\u0065\u0072\u003d\u0022\u0030\u0022\u00a0\u0073\u0074\u0079\u006c\u0065\u003d\u0022\u006d\u0069\u006e\u002d\u0077\u0069\u0064\u0074\u0068\u003a\u00a0\u0036\u0030\u0030\u0070\u0078\u003b\u00a0\u006d\u0069\u006e\u002d\u0068\u0065\u0069\u0067\u0068\u0074\u003a\u00a0\u0038\u0030\u0030\u0070\u0078\u003b\u0022\u003e\u003c\u002f\u0069\u0066\u0072\u0061\u006d\u0065\u003e";
}