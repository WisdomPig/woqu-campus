if(typeof Zepto==="undefined"){throw new Error("Parallax.js's script requires Zepto")}!function(g){var y,r,v,h,x,i,n,w,l,b,a,c,f,q=false,e=true;g.fn.parallax=function(z){f=g.extend({},g.fn.parallax.defaults,z);return this.each(function(){b=g(this);a=b.find(".page");s()})};g.fn.parallax.defaults={direction:"vertical",swipeAnim:"default",drag:true,loading:false,indicator:false,arrow:false,onchange:function(){},orientationchange:function(){}};function s(){if(f.loading){g(".wrapper").append('<div class="parallax-loading"><i class="ui-loading ui-loading-white"></i></div>')}else{e=false}i=0;x="stay";n=a.length;w=g(window).width();l=g(window).height();c=g("[data-animation]");for(var z=0;z<n;z++){g(a[z]).attr("data-id",z+1)}b.addClass(f.direction).addClass(f.swipeAnim);a.css({width:w+"px",height:l+"px"});f.direction==="horizontal"?b.css("width",w*a.length):b.css("height",l*a.length);if(f.swipeAnim==="cover"){b.css({width:w,height:l});a[0].style.display="block"}if(!f.loading){g(a[i]).addClass("current");f.onchange(i,a[i],x);d()}}function u(z){if(e===true){event.preventDefault();return false}q=true;f.direction==="horizontal"?y=z.pageX:y=z.pageY;if(f.swipeAnim==="default"){b.addClass("drag");h=b.css("-webkit-transform").replace("matrix(","").replace(")","").split(",");f.direction==="horizontal"?h=parseInt(h[4]):h=parseInt(h[5])}if((f.swipeAnim==="cover"&&f.drag)){a.addClass("drag")}v=1}function k(z){if(e===true||q===false){event.preventDefault();return false}event.preventDefault();f.direction==="horizontal"?r=z.pageX:r=z.pageY;t();if(f.drag&&!o()){p()}v=2}function j(z){if(e===true||v!==2){}else{q=false;f.direction==="horizontal"?r=z.pageX:r=z.pageY;if(f.swipeAnim==="default"&&!o()){b.removeClass("drag");if(Math.abs(r-y)<=50){m(i);x="stay"}else{if(r>=y){m(i-1);x="backward"}else{if(r<y){m(i+1);x="forward"}}}}else{if(f.swipeAnim==="cover"&&!o()){if(Math.abs(r-y)<=50&&r>=y&&f.drag){m(i,"keep-backward");x="stay"}else{if(Math.abs(r-y)<=50&&r<y&&f.drag){m(i,"keep-forward");x="stay"}else{if(Math.abs(r-y)>50&&r>=y&&f.drag){m(i-1,"backward");x="backward"}else{if(Math.abs(r-y)>50&&r<y&&f.drag){m(i+1,"forward");x="forward"}else{if(Math.abs(r-y)>50&&r>=y&&!f.drag){m(i-1,"backward");x="backward"}else{if(Math.abs(r-y)>50&&r<y&&!f.drag){m(i+1,"forward");x="forward"}}}}}}}}if(f.indicator){g(g(".parallax-h-indicator ul li, .parallax-v-indicator ul li").removeClass("current").get(i)).addClass("current")}v=3}}function p(){if(f.swipeAnim==="default"){var A=h+r-y;f.direction==="horizontal"?b.css("-webkit-transform","matrix(1, 0, 0, 1, "+A+", 0)"):b.css("-webkit-transform","matrix(1, 0, 0, 1, 0, "+A+")")}else{if(f.swipeAnim==="cover"){var A=r-y,z=g(a[i-1]),B=g(a[i+1]);g(a).css({"z-index":0});if(f.direction==="horizontal"&&r>=y){z.css({"z-index":2,display:"block","-webkit-transform":"translateX("+(A-w)+"px)"})}else{if(f.direction==="horizontal"&&r<y){B.css({"z-index":2,display:"block","-webkit-transform":"translateX("+(w+A)+"px)"})}else{if(f.direction==="vertical"&&r>=y){z.css({"z-index":2,display:"block","-webkit-transform":"translateY("+(A-l)+"px)"})}else{if(f.direction==="vertical"&&r<y){B.css({"z-index":2,display:"block","-webkit-transform":"translateY("+(l+A)+"px)"})}}}}}}}function m(z,A){i=z;if(f.swipeAnim==="default"){var B=0;f.direction==="horizontal"?B=z*(-w):B=z*(-l);f.direction==="horizontal"?b.css({"-webkit-transform":"matrix(1, 0, 0, 1, "+B+", 0)"}):b.css({"-webkit-transform":"matrix(1, 0, 0, 1, 0, "+B+")"})}else{if(f.swipeAnim==="cover"){if(A==="keep-backward"&&f.drag){a.removeClass("drag");f.direction==="horizontal"?g(a[i-1]).css({"-webkit-transform":"translateX(-100%)"}):g(a[i-1]).css({"-webkit-transform":"translateY(-100%)"})}else{if(A==="keep-forward"&&f.drag){a.removeClass("drag");f.direction==="horizontal"?g(a[i+1]).css({"-webkit-transform":"translateX(100%)"}):g(a[i+1]).css({"-webkit-transform":"translateY(100%)"})}else{if(A==="forward"&&f.drag){a.removeClass("drag");g(a[i-1]).addClass("back");a[i].style.webkitTransform="translate(0, 0)"}else{if(A==="backward"&&f.drag){a.removeClass("drag");g(a[i+1]).addClass("back");a[i].style.webkitTransform="translate(0, 0)"}else{if(A==="forward"&&!f.drag){b.addClass("animate");g(a[i-1]).addClass("back");g(a[i]).addClass("front").show()}else{if(A==="backward"&&!f.drag){b.addClass("animate");g(a[i+1]).addClass("back");g(a[i]).addClass("front").show()}}}}}}}}e=true;setTimeout(function(){e=false},300)}function t(){if(f.direction==="horizontal"){if(r>=y){b.removeClass("forward").addClass("backward")}else{if(r<y){b.removeClass("backward").addClass("forward")}}}else{if(r>=y){b.removeClass("forward").addClass("backward")}else{if(r<y){b.removeClass("backward").addClass("forward")}}}}function o(){if(f.direction==="horizontal"){if((r>=y&&i===0)||(r<=y&&i===n-1)){return true}}else{if((r>=y&&i===0)||(r<=y&&i===n-1)){return true}}return false}function d(){c.css({"-webkit-animation":"none",display:"none"});g(".current [data-animation]").each(function(C,F){var A=g(F),E=A.attr("data-animation"),D=A.attr("data-duration")||500,B=A.attr("data-timing-function")||"ease",z=A.attr("data-delay")?A.attr("data-delay"):0;if(E==="followSlide"){if(f.direction==="horizontal"&&x==="forward"){E="followSlideToLeft"}else{if(f.direction==="horizontal"&&x==="backward"){E="followSlideToRight"}else{if(f.direction==="vertical"&&x==="forward"){E="followSlideToTop"}else{if(f.direction==="vertical"&&x==="backward"){E="followSlideToBottom"}}}}}A.css({display:"block","-webkit-animation-name":E,"-webkit-animation-duration":D+"ms","-webkit-animation-timing-function":"ease","-webkit-animation-timing-function":B,"-webkit-animation-delay":z+"ms","-webkit-animation-fill-mode":"both"})})}g(document).on("touchstart",".page",function(z){u(z.changedTouches[0])}).on("touchmove",".page",function(z){k(z.changedTouches[0])}).on("touchend",".page",function(z){j(z.changedTouches[0])}).on("webkitAnimationEnd webkitTransitionEnd",".pages",function(){if(x!=="stay"){setTimeout(function(){g(".back").hide().removeClass("back");g(".front").show().removeClass("front");b.removeClass("forward backward animate")},10);g(a.removeClass("current").get(i)).addClass("current");f.onchange(i,a[i],x);d()}});g(".page *").on("webkitAnimationEnd",function(){event.stopPropagation()});g(window).on("load",function(){if(f.loading){g(".parallax-loading").remove();e=false;g(a[i]).addClass("current");f.onchange(i,a[i],x);d()}if(f.indicator){e=false;var A=f.direction==="horizontal"?"parallax-h-indicator":"parallax-v-indicator";g(".wrapper").append("<div class="+A+"></div>");var z="<ul>";for(var B=1;B<=n;B++){if(B===1){z+='<li class="current"></li>'}else{z+="<li></li>"}}z+="</ul>";g("."+A).append(z)}if(f.arrow){a.append('<span class="parallax-arrow"></span>');g(a[n-1]).find(".parallax-arrow").remove()}});window.addEventListener("onorientationchange" in window?"orientationchange":"resize",function(){if(window.orientation===180||window.orientation===0){f.orientationchange("portrait")}if(window.orientation===90||window.orientation===-90){f.orientationchange("landscape")}},false)}(Zepto);

//page transition
$('.pages').parallax({
    direction: 'vertical',
    swipeAnim: 'cover',
    drag:      true,
    loading:   false,
    indicator: false,
    arrow:     false,
    onchange: function(index, element, direction) {
        $('.job_detail_wrapper').hide();
        $('#current').html(index + 1);
    },
    orientationchange: function(orientation) {
        alert(orientation)
    }
});

//job detail
$('.job_btn').click(function() {
    $(this).next().show();
});
$('.close').click(function() {
    $(this).parent().hide();
});

//treatment eraser
function createCanvas(parent, width, height) {
    var canvas = {};
    canvas.node = document.createElement('canvas');
    canvas.context = canvas.node.getContext('2d');
    canvas.node.width = width || 100;
    canvas.node.height = height || 100;
    parent.appendChild(canvas.node);
    return canvas;
}

function init(container, width, height, fillColor) {
    var canvas = createCanvas(container, width, height);
    var ctx = canvas.context;

    ctx.fillCircle = function(x, y, radius, fillColor) {
        this.fillStyle = fillColor;
        this.beginPath();
        this.moveTo(x, y);
        this.arc(x, y, radius, 0, Math.PI * 2, false);
        this.fill();
    };
    ctx.clearTo = function(fillColor) {
        ctx.fillStyle = fillColor;
        ctx.fillRect(0, 0, width, height);
    };
    ctx.clearTo(fillColor || "#909090");

    $(canvas.node).on('touchmove', function(e) {
        e.stopPropagation(); 
        if (!canvas.isDrawing) {
           return;
        }
        var x = e.changedTouches[0].clientX - $(e.target).offset().left + 70;
        var y = e.changedTouches[0].clientY - $(e.target).offset().top + 100;
        var radius = 80;
        var fillColor = '#ff0000';
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillCircle(x, y, radius, fillColor);
    });
    $(canvas.node).on('touchstart', function(e) {
        e.stopPropagation(); 
        canvas.isDrawing = true;
    });
    $(canvas.node).on('touchend', function(e) {
        e.stopPropagation(); 
        canvas.isDrawing = false;
    });
}

$('.mask').each(function() {
    init(this, 256, 284, '#909090');
});