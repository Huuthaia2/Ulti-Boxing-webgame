function extractHostname(url) {
    var hostname;
    //find & remove protocol (http, ftp, etc.) and get hostname

    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    //find & remove port number
    hostname = hostname.split(':')[0];
    //find & remove "?"
    hostname = hostname.split('?')[0];

    return hostname;
}

function extractRootDomain(url) {
    var domain = extractHostname(url),
        splitArr = domain.split('.'),
        arrLen = splitArr.length;

    //extracting the root domain here
    if (arrLen > 2) {        
        if( (splitArr[arrLen - 2] === "com" || splitArr[arrLen - 2] === "net" || splitArr[arrLen - 2] === "co") && arrLen >= 3){
            domain = splitArr[arrLen - 3] + '.' + splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
        }else{
            domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];    
        }
    }
    return domain;
}


// return topmost browser window of current window & boolean to say if cross-domain exception occurred
const getClosestTop = () => {
    let oFrame  = window,
        bException = false;

    try {
        while (oFrame.parent.document !== oFrame.document) {
            if (oFrame.parent.document) {
                oFrame = oFrame.parent;
            } else {
                //chrome/ff set exception here
                bException = true;
                break;
            }
        }
    } catch(e){
        // Safari needs try/catch so sets exception here
        bException = true;
    }

    return {
        'topFrame': oFrame,
        'err': bException
    };
};

// get best page URL using info from getClosestTop
const getBestPageUrl = ({err:crossDomainError, topFrame}) => {
    let sBestPageUrl = '';

    if (!crossDomainError) {
        // easy case- we can get top frame location
        sBestPageUrl = topFrame.location.href;
    } else {
        try {
            try {
                // If friendly iframe
                sBestPageUrl = window.top.location.href;
            } catch (e) {
                //If chrome use ancestor origin array
                let aOrigins = window.location.ancestorOrigins;
                //Get last origin which is top-domain (chrome only):
                sBestPageUrl = aOrigins[aOrigins.length - 1];
            }
        } catch (e) {
            sBestPageUrl = topFrame.document.referrer;
        }
    }

    return sBestPageUrl;
};

// To get page URL, simply run following within an iframe on the page:
const TOPFRAMEOBJ = getClosestTop();
const PAGE_URL = getBestPageUrl(TOPFRAMEOBJ);


//////////////////////////////////////////////////////////////

function showMoreGames(){
    if( document.querySelector("#more-games-button") !== null ){
		document.querySelector("#more-games-button").style.display = "none";
    }
}


function hideMoreGames(){
    if( document.querySelector("#more-games-button") !== null ){
        document.querySelector("#more-games-button").style.display = "none";

    }
}

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  
  

  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
    //xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

function checkMoreGames( szGameId,szAlignment ,aTags,aTagsToRemove,iLimit,szColor){
    var url = 'https://api.codethislab.com/gd/gd_list.json';
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
      alert('CORS not supported');
      return;
    }

    // Response handlers.
    xhr.onload = function() {
      var szRet = xhr.response;
      var aGames = JSON.parse(szRet);
      
      if( aGames.length === 0 ){
            return;
        }
        
        //ADD JUST GAMES WITH SELECTED TAG
        var aGamesToAdd = [];
        /*
        if(szGameId !== "f2520bae00624e93a4f4614732fa259e"){
            aGamesToAdd.push({ 
		"title": "four colors multiplayer",
		"id":"f2520bae00624e93a4f4614732fa259e",
		"tag":["cards","multiplayer"],
		"img": "https://img.gamedistribution.com/f2520bae00624e93a4f4614732fa259e-512x384.jpeg", 
		"url": "https://html5.gamedistribution.com/f2520bae00624e93a4f4614732fa259e/" 
            });
        }*/
    
        for(var t=0;t<aTags.length;t++){
            for(var k=0;k<aGames.length;k++){
                if(aGames[k].tag.indexOf(aTags[t]) !== -1 && aGamesToAdd.indexOf(aGames[k]) === -1 && aGames[k].id !== szGameId && aGames[k].id !== "f2520bae00624e93a4f4614732fa259e"){
                    aGamesToAdd.push(aGames[k]);
                }
            }
        }
        
        
        var aGamesToAppend = new Array();
        for(var k=0;k<aGames.length;k++){
            if(aGamesToAdd.indexOf(aGames[k]) === -1 && aGames[k].id !== szGameId){
                aGamesToAppend.push(aGames[k]);
            }
        };

        
        aGamesToAdd = aGamesToAdd.concat(aGamesToAppend);
        //REMOVE SOME GAMES BY TAG EVENTUALLY
        var iCont = 0;
        while(iCont<aGamesToAdd.length){
            var bIncrease = true;
            for(var k=0;k<aGamesToAdd[iCont].tag.length;k++){
                var szTag = aGamesToAdd[iCont].tag[k];
                if(aTagsToRemove.indexOf(szTag) !== -1){
                    aGamesToAdd.splice(iCont,1);
                    bIncrease = false;
                    break;
                }
            }
            
            if(bIncrease){
                iCont++;
            }
        }

        
        //SET A LIMIT TO GAMES NUMBER
        if(iLimit>0){
            var iIteration = aGamesToAdd.length-iLimit;
            for(var j=0;j<iIteration;j++){
                var iRandIndex = Math.floor(Math.random()*aGamesToAdd.length);
                aGamesToAdd.splice(iRandIndex,1);
            }

        }
		
		
        // var szUrlBut = "https://api.codethislab.com/gd/images/moregames_"+szColor+".png";
        // var szUrlExitBut = "https://api.codethislab.com/gd/images/moregames_exit_"+szColor+".png";
		
        // var elemDiv = document.createElement('div');
		// elemDiv.id ="more-games-button";
		// elemDiv.className = szAlignment;
		// elemDiv.style.cssText = 'background-image:url('+szUrlBut+');';
		// document.body.appendChild(elemDiv);        
        

        // document.querySelector("#more-games-button").addEventListener("click", function(){
        //     var szHTML = "<div class='more-games-dialog-wrapper'>";
        //         szHTML += "<div class='more-games-dialog-block'></div>";
        //         szHTML += "<div class='more-games-dialog-content'>";
        //             szHTML += "<div class='more-games-dialog-scrolling'>";
        //             for( var i = 0; i < aGamesToAdd.length; i++ ){
        //                 szHTML += "<div class='more-games-dialog-tile' data-url='" + aGamesToAdd[i].url + "'>";
        //                     szHTML += "<img src='"+aGamesToAdd[i].img+"' />";
        //                 szHTML += "</div>";
        //             }
        //             szHTML += "</div>";

                   
        //             szHTML += "<div class='more-games-dialog-logo'></div>";                      
        //         szHTML += "</div>";      
        //         szHTML += "<div class='more-games-dialog-exit' style='background-image:url("+szUrlExitBut+");'>";
        //         szHTML += "</div>";              
        //     szHTML += "</div>";

		// 	document.body.insertAdjacentHTML( 'beforeend', szHTML );
           

        //     setTimeout( function(){
        //         document.querySelector(".more-games-dialog-block").classList.add("more-games-dialog-block-show");

        //         setTimeout( function(){
        //             document.querySelector(".more-games-dialog-content").classList.add("more-games-dialog-content-show");
        //             document.querySelector(".more-games-dialog-exit").classList.add("more-games-dialog-exit-show");
        //         },100);

        //     },100);
        // });

        // document.querySelector("#more-games-button").style.display = "block";


    };

    xhr.onerror = function(evt) {
      trace('Woops, there was an error making the request '+JSON.stringify(evt));
    };

    xhr.send();
}


document.addEventListener("DOMContentLoaded", () =>{
	
	document.addEventListener("click", function(e) {
		console.log(e);
		if(e.target && e.target.offsetParent && e.target.offsetParent.className=="more-games-dialog-tile"){
			var url = e.target.offsetParent.dataset.url;//document.querySelector(".more-games-dialog-tile").getAttribute("data-url");
			console.log("url "+url);
			
			var argumenturl = "";
			
			if(window.location.href.indexOf("?") >0 ){
				argumenturl = window.location.href.split("?")[1];
				argumenturl = "?" + argumenturl;
			}

			if ( window.parent && window.parent.location.href.indexOf("gamedistribution") !== -1 ){
				window.parent.location.href = url + argumenturl;
			}else{
				window.location.href = url + argumenturl;
			}			
		}else if(e.target && e.target.className.indexOf("more-games-dialog-exit") !== -1){
				document.querySelector(".more-games-dialog-content").classList.remove("more-games-dialog-content-show");
				document.querySelector(".more-games-dialog-exit").classList.remove("more-games-dialog-exit-show");
				
				setTimeout( function(){
					document.querySelector(".more-games-dialog-block").classList.remove("more-games-dialog-block-show");
					setTimeout( function(){
						document.querySelector(".more-games-dialog-wrapper").remove();
					},500);
				},100);      
		}
        
    });
    
	
});


