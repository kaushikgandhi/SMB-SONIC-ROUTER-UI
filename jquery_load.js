function jquery_inits(){
	 var constWgtDefaultSize = {height: "350px", width: "250px"},
                constIncrementPixels = 10;

            //apply default size
            $(".wgt").css(constWgtDefaultSize);

            //------------------------------------------------------sortable
            $("#sortable").sortable({
                revert: true,
                placeholder: "ui-state-highlight",
                update: function( event, ui ) {
                    var title = ui.item.text();
                    $(ui.item).removeClass("wgt-master").css({height:"", width: ""}).addClass("wgt");

                    $(".wgt").flip();
                }
            });

            //-------------------------------------------------- Dragabble

            $( "ul, li" ).disableSelection();

          
            //reset
            $("#wgtResizeReset").on("click", function(){
                $(".wgt").css(constWgtDefaultSize);
            });

            //increase
            $("#wgtResizeInc").on("click", function(){
                var height = $(".wgt").outerHeight() + constIncrementPixels,
                    width = $(".wgt").outerWidth() + constIncrementPixels;

                $(".wgt").css({height: height+"px", width: width+"px"});
            });

              //decrease
            $("#wgtResizeDec").on("click", function(){
                var height = $(".wgt").outerHeight() - constIncrementPixels,
                    width = $(".wgt").outerWidth() - constIncrementPixels;

                $(".wgt").css({height: height+"px", width: width+"px"});
            });

            //Widget Selector
            $("#wgtSelector").on("click", function(evt){
                //$( "#draggable").slideToggle();
                var pos = $("#wgtSelector").position();
                $( "#draggable").css({top: pos.top + 55, left: pos.left + 40 - $( "#draggable").width()/2}).show();
            });

            $(".wgt").flip();

            //global resize
            $(window).on("resize", function(){
                $( "#draggable").hide();
            });
            //global body click
            $(document).click(function (e) {
                //TODO: add flag condition to exec only if the flag is true
                if (!$(e.target).is('#wgtSelector')) {
                     $( "#draggable").hide();
                }
            });
            //enable tooltips
            $('[data-toggle="tooltip"]').tooltip();
}