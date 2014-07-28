var pageID = "siteMenu";

var fnObj = {
    pageStart:function(){
        //로그인 인포 
        jQuery("#login-button").click(function(){
            if(jQuery(".login-widget-box").css('display') == 'none'){
                jQuery(".login-widget-box").css('display','block');
            }else{
                jQuery(".login-widget-box").css('display','none');
            }
        });
        //언어선택
        jQuery("#lang-button").click(function(){
            if(jQuery(".lang-list").css('display') == 'none'){
                jQuery(".lang-list").css('display','block');
            }else{
                jQuery(".lang-list").css('display','none');
            }
        });
        fnObj.menu.bind(); 
        
        //Language Context
		AXContextMenu.setConfig({responsiveMobile:1024});
		AXContextMenu.bind({
			id:"listMobileMenu",
			menu:[
				{userType:0, label:"<i class='axi axi-keyboard-o fa-lg'></i> English", className:"context-icon-none", onclick:function(){
					doChangeLangType('en');
					return false;
				}},
				{userType:0, label:"<i class='axi axi-keyboard-o fa-lg'></i> 한국어", className:"context-icon-none", onclick:function(){
					doChangeLangType('ko');
					return false;
				}}
			]
		});              
    },
    menu: {
        mxMenu: new AXMobileMenu(),
        dxMenu: new AXTopDownMenu(),
        bind: function(){
            // 데스크탑 메뉴 설정
            window.dxMenu = fnObj.menu.dxMenu;
            dxMenu.setConfig({
                menuBoxID:"menuBox",
                parentMenu:{
                    className:"parentMenu"
                },
                childMenu:{
                    className:"childMenu",
                    align:"center",
                    valign:"top",
                    margin:{top:0, left:0},
                    arrowClassName:"varrow2",
                    arrowMargin:{top:1, left:0}
                },
                childsMenu:{
                    className:"childsMenu",
                    align:"left",
                    valign:"top",
                    margin:{top:-4, left:0},
                    arrowClassName:"harrow",
                    arrowMargin:{top:13, left:1}
                },
                onComplete: function(){
                    //myMenu.setHighLightMenu(0);
                    //myMenu.setHighLightMenu([0,1,3,2]);
                    dxMenu.setHighLightOriginID("ID1245");
                }
            });

            // 모바일 메뉴 설정
            window.mxMenu = fnObj.menu.mxMenu;
            mxMenu.setConfig({
                reserveKeys:{
                    primaryKey:"menuID",
                    labelKey:"label",
                    urlKey:"url",
                    targetKey:"target",
                    addClassKey:"ac",
                    subMenuKey:"cn"
                },
                menuBoxID:"menuBox",
                parentMenu:{
                    className:"parentMenu"
                },
                childMenu:{
                    className:"childMenu"
                },
                childsMenu:{
                    className:"childsMenu"
                },
                onclick: function(){ // 메뉴 클릭 이벤트
                    //location.href = this.url; 원하는 링크를 구현하세요
                    mxMenu.close(); // 모바일 메뉴를 닫습니다.
                }
            });
            mxMenu.setHighLightOriginID("ID1245");


            axdom("#mx-menu-handle").bind("click", function(){
                mxMenu.open();
            });

        }
    },
	listMobileMenuOpen:function(e){
		var event = window.event || e;
		AXContextMenu.open({id:"listMobileMenu"}, event); // event 직접 연결 방식				
	} 
};

jQuery(document).ready(fnObj.pageStart);   

