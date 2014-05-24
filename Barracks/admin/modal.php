<!DOCTYPE html>
<html>
<head>
    <!-- META -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" />
    <!-- TITLE -->
    <title>Barracks</title>

    <link rel="shortcut icon" href="http://dev.axisj.com/ui/axisj.ico" type="image/x-icon" />
    <link rel="icon" href="http://dev.axisj.com/ui/axisj.ico" type="image/x-icon" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="http://dev.axisj.com/ui/AXJ.png" />
    <link rel="apple-touch-icon-precomposed" href="http://dev.axisj.com/ui/AXJ.png" />
    <meta property="og:image" content="http://dev.axisj.com/samples/_img/axisj_sns.png" />
    <meta property="og:site_name" content="Axis of Javascript - axisj.com" />
    <meta property="og:description" id="meta_description" content="Javascript UI Library based on JQuery" />

    <link href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="http://dev.axisj.com/ui/cocker/AXJ.min.css" />

    <link rel="stylesheet" href="ui/cocker/admin.css" />

    <script type="text/javascript" src="http://dev.axisj.com/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="http://dev.axisj.com/dist/AXJ.min.js"></script>

	<script type="text/javascript">
	var fnObj = {
		pageStart: function(){

		}
	};
    axdom(window).ready(fnObj.pageStart);
	</script>
</head>
<body>
<div id="AXPage" class="bodyHeightDiv">
    <div class="ax-modal-header">
        <div class="ax-col-12">
            <div class="ax-unit">
                <h1>컨텐츠 제목</h1>
                <p class="desc">컨텐츠 상세 설명을 넣어주세요.</p>
            </div>
        </div>
        <div class="ax-clear"></div>
    </div>
	<div class="ax-modal-body">
        <div class="ax-wrap">
            <div class="ax-layer">
                <div class="ax-col-12">

                </div>
            </div>
        </div>
    </div>
    <div class="ax-modal-footer">
        <div class="ax-wrap">
            <div class="ax-col-12">
                <div class="ax-unit center">
                    <button type="button" class="AXButton" onclick="parent.myModal.close();">확인</button>
                    <button type="button" class="AXButton" onclick="parent.myModal.close();">취소</button>
                </div>
            </div>
            <div class="ax-clear"></div>
        </div>
    </div>
</div>
</body>
</html>
