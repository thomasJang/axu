<!DOCTYPE html>
<html>
<head>
    <!--#include virtual="/axcms/admin/layouts/include-admin-head-codemirror.asp"-->

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />

    <title>AXISJ CODE</title>

    <link rel="shortcut icon" href="http://dev.axisj.com/ui/axisj.ico" type="image/x-icon" />
    <link rel="icon" href="http://dev.axisj.com/ui/axisj.ico" type="image/x-icon" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://dev.axisj.com/ui/AXJ.png" />
    <link rel="apple-touch-icon-precomposed" href="http://dev.axisj.com/ui/AXJ.png" />
    <meta property="og:image" content="http://dev.axisj.com/samples/_img/axisj_sns.png" />
    <meta property="og:site_name" content="Axis of Javascript - axisj.com" />
    <meta property="og:description" id="meta_description" content="Opensource FullStack Javascript UI Library" />

    <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="http://dev.axisj.com/ui/cocker/AXJ.min.css" />

    <link rel="stylesheet" href="/axcms/admin/ui/cocker/admin.css" />

    <script type="text/javascript" src="http://dev.axisj.com/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="http://dev.axisj.com/dist/AXJ.min.js"></script>
</head>
<body>
<div id="AXPage">
	<div class="" id="codeEditor"></div>
</div>
</body>
</html>
<script type="text/javascript">
    var page_menu_id = "m04";
    var fnObj = {
        pageStart: function(){
			fnObj.code.init();
			
			var h = fnObj.getAvailHeight();	
			fnObj.code.setSize(h);
        },
        pageResize: function(){
			var h = fnObj.getAvailHeight();
			fnObj.code.setSize(h);
			
        },
        getAvailHeight: function(){
	        var ch = axf.clientHeight();
	        return ch;
        },
		code: {
			target: null,
			init: function(){
				fnObj.code.target = CodeMirror(axf.getId("codeEditor"), {
			        value: "",
			        mode: "javascript",
			        theme: "eclipse",
			
			        indentUnit: 4,
			        smartIndent: true,
			        tabSize: 4,
			        indentWithTabs: true,
			
			        styleActiveLine: true,
			        lineNumbers: true,
			        lineWrapping: true,
			        matchBrackets: true,
			        foldGutter: true,
			        gutters: ["CodeMirror-lint-markers","CodeMirror-foldgutter"],
			
			        autoCloseBrackets:true,
			        autoCloseTags:true
				});
			},
			setSize: function(height){
				fnObj.code.target.setSize("100%", height);
			},
			setValue: function(value){
				fnObj.code.target.setValue(value);
			}
		}
    };
    axdom(window).resize(fnObj.pageResize);
    axdom(document.body).ready(fnObj.pageStart);
</script>