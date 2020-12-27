/* Effelesy - Fast Layout and Substratum Engine * Developed by Ejaz Ali @ Stella Group * Version 0.1 * Saving Developers Time and Effort * Open Sourced Web Development ♥ */ 
var settings = {};var gvar = {};var editedelems = {};setTimeout(bootstrapFLSE(), 0); function bootstrapFLSE(){ var flseworkarea = document.createElement('FLSE'); flseworkarea.innerHTML = "<link href='flse.css' rel='stylesheet'/>"; document.body.appendChild(flseworkarea); var publicflseworkarea = document.createElement('publicFLSE'); document.body.appendChild(publicflseworkarea); setTimeout(function (){ window.setInterval(checkPage, 50)}, 1); } function checkPage(){ if (gvar["pagecontents"] != document.getElementsByTagName("html")[0].innerHTML){ console.log("change"); refreshFLSESettings(); } if (gvar["width"] != window.innerWidth){ console.log("repo"); rePositionPage(); } gvar["width"] = window.innerWidth; gvar["pagecontents"] = document.getElementsByTagName("html")[0].innerHTML; } function refreshFLSESettings(){ var target = document.getElementsByTagName('publicFLSE')[0]; var cservices = document.getElementsByTagName("cservice"); for (const item of cservices) { if (item.getAttribute("content") == 'script'){ if(document.getElementById('flseS_' + item.getAttribute('url')) == undefined){ var cservicescript = document.createElement('script'); cservicescript.setAttribute("src", item.getAttribute('url')); cservicescript.setAttribute("id", 'flseS_' + item.getAttribute('url')); target.appendChild(cservicescript); } } if (item.getAttribute("content") == 'theme'){ if(document.getElementById('flseT_' + item.getAttribute('url')) == undefined){ var cservicetheme = document.createElement('link'); cservicetheme.setAttribute("href", item.getAttribute('url')); cservicetheme.setAttribute("href", item.getAttribute('url')); cservicetheme.setAttribute("id", 'flseT_' + item.getAttribute('url')); target.appendChild(cservicescript); } } } rePositionPage(); } function rePositionPage(){ gvar["mobile"] = Math.min(window.innerWidth, window.innerWidth) < 768; if (gvar["mobile"] == true){ var mobileonly = document.getElementsByTagName("flsemobileonly"); var mobilehide = document.getElementsByTagName("flsemobilehide"); for (const item of mobileonly){ item.setAttribute("style",""); } for (const item of mobilehide){ item.setAttribute("style","display: none;"); } } else{ var mobileonly = document.getElementsByTagName("flsemobileonly"); var mobilehide = document.getElementsByTagName("flsemobilehide"); for (const item of mobileonly){ item.setAttribute("style","display: none;"); } for (const item of mobilehide){ item.setAttribute("style",""); } } }