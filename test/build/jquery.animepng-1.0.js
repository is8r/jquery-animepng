/*
 * //////////////////////////////////////////////////////////////////////
 * Animepng
 * 
 * @description this jquery plugin was png and jpg and gif tilemap animetion.
 * @version 1.0
 * @date December-2011
 * @author Yu Ishihara - http://hommebrew.com/
 * @requires jQuery v1.4.1 or later
 * @example http://is8r.github.com/jquery-plugin/animepng/
 * 
 * @howtouse
   //head
  <script type="text/javascript"><!--
  $(function() {
      $('.anime').animepng({
        src:'./images/char_sandogasa.png',
        width:32,
        height:48,
        fps:4
      });
  });
  // --></script>

   //body
   <div class="anime"></div>
 
 * //////////////////////////////////////////////////////////////////////
*/
jQuery(function(e){e.fn.animepng=function(t){return t=e.extend({direction:"x",posx:0,posy:0,loop:!0,length:30,width:32,height:32,frame:0,fps:30,src:"",timer:null},t),this.each(function(){function i(){var e,r;t.direction=="x"?(e=-t.width*t.frame,r=t.posy):t.direction=="y"&&(e=t.posx,r=-t.height*t.frame),n.css("background-position",e+"px "+r+"px"),t.frame++,t.frame>t.length-1&&(t.loop||clearInterval(t.timer),t.frame=0)}var n=e(this);if(n.attr("isReady")!=undefined)return;n.attr("isReady","true"),n.css("background","url("+t.src+")"),n.css("width",t.width),n.css("height",t.height);var r=1/t.fps*1e3;t.timer=setInterval(i,r)})}});