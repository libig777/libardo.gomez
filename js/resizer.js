////<script language="JavaScript">
////<!--
//function autoResize(id){
//    var newheight;
//    var newwidth;
//
//    if(document.getElementById){
//        newheight=document.getElementById(id).contentWindow.document .body.scrollHeight;
//        newwidth=document.getElementById(id).contentWindow.document .body.scrollWidth;
//    }
//
//    document.getElementById(id).height= (newheight) + "px";
//    document.getElementById(id).width= (newwidth) + "px";
//}
////-->
////</script>

<script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js?ver=1.3.2'></script>
<script type='text/javascript'>
    
    $(function(){
    
        var iFrames = $('iframe');
      
    	function iResize() {
    	
    		for (var i = 0, j = iFrames.length; i < j; i++) {
    		  iFrames[i].style.height = iFrames[i].contentWindow.document.body.offsetHeight + 'px';}
    	    }
    	    
        	if ($.browser.safari || $.browser.opera) { 
        	
        	   iFrames.load(function(){
        	       setTimeout(iResize, 0);
               });
            
        	   for (var i = 0, j = iFrames.length; i < j; i++) {
        			var iSource = iFrames[i].src;
        			iFrames[i].src = '';
        			iFrames[i].src = iSource;
               }
               
        	} else {
        	   iFrames.load(function() { 
        	       this.style.height = this.contentWindow.document.body.offsetHeight + 'px';
        	   });
        	}
        
        });

</script>