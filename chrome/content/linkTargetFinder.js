var linkTargetFinder = function () {
    var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
    return {
	init : function () {
	    gBrowser.addEventListener("load", function () {
		var autoRun = prefManager.getBoolPref("extensions.linktargetfinder.autorun");
		if (autoRun) {
		    linkTargetFinder.run();
		}
	    }, false);
	},
	
	// function next(v)
	// {
	//     switch(v)
	//     {
	//     case 'SA': val='A'
	// 	break;
	//     case 'A': val='N'
	// 	break;
	//     case 'N': val='D'
	// 	break;
	//     case 'D': val='SD'
	// 	break;
	//     default: val='SA'
	//     }
	// },



	run : function () {
	    switch(window.val)
	    {
	    case 'SA': window.val='A'
	    	break;
	    case 'A': window.val='N'
	    	break;
	    case 'N': window.val='D'
	    	break;
	    case 'D': window.val='SD'
	    	break;
	    default: window.val='SA'
	    }

	    var radios = content.document.getElementsByTagName('input');
	    for (i = 0; i < radios.length; i++) {
		if (radios[i].type == 'radio' && radios[i].value == window.val) {
		    radios[i].checked='true';
		}
	    }
	    //alert('Now val is'+window.val);	    
	}
    };
}();
window.addEventListener("load", linkTargetFinder.init, false);