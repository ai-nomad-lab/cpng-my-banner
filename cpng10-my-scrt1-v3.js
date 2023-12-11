var showBanner = true;
var overHeight = false;

function clkDynCpng() {
		a1017();
		window.open(clickCpngLink, "_blank");
}

document.addEventListener("DOMContentLoaded", function() {
    var imgElement = document.querySelector("img.cpngImgClass");
    imgElement.src = cpngImgLink;
  });

document.addEventListener("DOMContentLoaded", function() {
		document.getElementById("cpngText1Content").innerHTML = customCpngText1;
		document.getElementById("cpngText2Content").innerHTML = customCpngText2;
		document.getElementById("cpngText3Content").innerHTML = customCpngText3;

		var cpngAdsLinks = document.querySelectorAll(".cpngAdsClick");
		cpngAdsLinks.forEach(function(element) {
			element.setAttribute("href", clickCpngLink);
			element.addEventListener("click", function() {
					a1017();
			});
		});   
	});

function a1000(a1001, a1002, a1003) {
    var a1004 = "";
    if (a1003) {
        var a1005 = new Date();
        a1005.setTime(a1005.getTime() + (a1003 * 24 * 60 * 60 * 1000));
        a1004 = "; expires=" + a1005.toUTCString();
    }
    document.cookie = a1001 + "=" + a1002 + a1004 + "; path=/";
}

function a1006(a1001) {
    var a1007 = a1001 + "=";
    var a1008 = document.cookie.split(';');
    for (var i = 0; i < a1008.length; i++) {
        var a1009 = a1008[i];
        while (a1009.charAt(0) === ' ') {
            a1009 = a1009.substring(1, a1009.length);
        }
        if (a1009.indexOf(a1007) === 0) {
            return a1009.substring(a1007.length, a1009.length);
        }
    }
    return null;
}

  var a1010 = a1006("lastVisit");
  var a1011 = new Date().getTime();
  var a1012 = a1011 - a1010;

  if (a1012 <= termTimes) {
    var a1013 = document.getElementById("cpngDiv");
    a1013.style.display = "none";
  } else if (a1010 == null || a1012 > termTimes) {
    // document.body.classList.add("cpng_cant_scroll");
  }


  function a1014() {
    var a1015 = document.getElementById("countdown");
    var a1016 = parseInt(a1015.innerHTML);
   
    if (a1016 > 1) {
			a1016--;
      a1015.innerHTML = a1016;
    } else {
      a1015.innerHTML = "X";
      clearInterval(interval);
			showBanner = false;
    }
  }

  function a1017() {
      document.body.classList.remove("cpng_cant_scroll");
      var a1018 = new Date().getTime();
      var a1019 = a1006("lastVisit");
      a1000("lastVisit", a1018, 365);

      var a1020 = document.getElementById("cpngDiv");
      a1020.style.display = "none";
			showBanner = false;
  }
 
  document.getElementById("countdown").onclick = function() {
      var a1021 = document.getElementById("countdown").innerHTML;

      if (a1021 === "X") {
          a1017();
      }
  }

document.querySelector(".cpngAdsClick").addEventListener("click", function() {
    a1017();
});

	var divToHide = document.getElementById("cpngDiv");
	divToHide.style.display = "none";

	function checkScroll_5sec_cpng() {
		var halfPageHeight = document.documentElement.scrollHeight * 4 / 10;

		if (showBanner && (window.scrollY + window.innerHeight > halfPageHeight) ) {
				
				document.getElementById("cpngDiv").style.display = "block";		
				document.body.classList.add("cpng_cant_scroll");
				
				if (!overHeight){
					var interval = setInterval(a1014, 1000);
				}
				overHeight = true;
			}
	}
	
	document.addEventListener('DOMContentLoaded', function() {
		checkScroll_5sec_cpng();
		window.addEventListener('scroll', checkScroll_5sec_cpng); // 스크롤 이벤트 등록
	});
