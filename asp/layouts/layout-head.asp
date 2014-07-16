<!-- META -->
<meta charset="utf-8">
<meta name="Generator" content="AXU" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />    
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1.0, minimum-scale=1">	
<meta name="apple-mobile-web-app-capable" content="yes">

<!-- TITLE -->
<title>AXU</title>	

<!-- CSS -->
<link href="/axj/axicon/axicon.css" rel="stylesheet" />
<link href="/axj/axisj/ui/arongi/AXJ.min.css" rel="stylesheet" />    	

<!-- LESS -->
<link rel="stylesheet/less" type="text/css" href="layouts/css/layout.less" />    
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="/axj/axisj/dist/AXJ.min.js"></script>	

<!-- WebFont -->
<link href='http://fonts.googleapis.com/css?family=Open+Sans:300,600,400&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Titillium+Web:400,200,300,600' rel='stylesheet' type='text/css'>
<script type="text/javascript">
    
    WebFontConfig = {
        google: {
            families: ['Open+Sans:300,600,400:latin,latin-ext','Titillium+Web:400,200,300,600:latin']
        },
        custom: {
            families: [ "NanumBarunGothic","NanumBarunGothicBold" ],
            urls: [ "/layouts/css/NanumBarunGothic.css" ]        
        }
        /*
        typekit: {
            id: 'myKitId'
        },
        ascender: {
            key: 'myAscenderKey',
            families: [ 'AscenderSans:bold,bolditalic,italic,regular' ]
        },
        monotype: {
            projectId: 'YourProjectId'
        }
        */
    };

    function webfontInit(){
        (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
        })();    
    }
    
</script>		

<!-- AXSlideViewer -->
<script type="text/javascript">    
    var AXSlideViewer, slideItemIndex = 0;
    var AXSliderObj = [];	
	var AXSV = {
    	pageStart: function(){
         if($(".ax-slide-viewer").length){

            AXSlideViewer = new AXSlideViewer();
            AXSlideViewer.setConfig({
                id:"AXSlideViewer",
                fitToHeight: false,
            });                 
            
            $(".ax-slide-viewer").each(function(){
                 
                 $(this).find("a").each(function(fidx, F){               
                 
                    var aNode = jQuery(F);
                    aNode.data("index", slideItemIndex);
                    slideItemIndex++;
                    var imgNode = aNode.find("img");
                
                    AXSliderObj.push(
                        {
                            title: imgNode.attr("title")||"AXU", 
                            url:imgNode.attr("src")
                            //description: imgNode.attr("desc")||"...", 
                        }
                    );
                    //events                        
                    jQuery(F).bind("click", function(){
                        AXSlideViewer.open({id:"AXSlideViewer", list:AXSliderObj, selectedIndex:jQuery(this).data("index")});
                    });
                 });
            });

             
         } 				    	    
    	}
    }
	$(document.body).ready(function(){
		AXSV.pageStart.delay(0.1);
	});  
</script>

<!-- AXTopDownMenu -->
<script type="text/javascript">
    
</script>

<!-- AXContext -->
<script type="text/javascript">
    
</script>



