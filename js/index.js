/**
 * Created by Fly on 2018/3/30.
 */
// var a=document.querySelectorAll('.banner .marker')
// document.onclick=function () {
//     alert(1);
//     alert(a.CSS.width);
//
// }


$(function(){  //第一行
    window.addEventListener('scroll',function () {
        // 头部热点轮播
        (function () {    // 头部热点轮播
            var $banner=$(' .toolbar .container .navbar ul.navbar-nav');
            var $li=$banner.children();
            $banner.append($li.eq(0).clone());
            var num=0;
            (function request() {
                num++;
                $banner.animate({top:-num*$li.eq(0).height()},function () {
                    if (num==$li.length){
                        num=0;
                        $banner.css({top:0})
                    }

                });
                setTimeout(request,2000);
            })();
        })();

        // /*给nav 添加背景   主要是JS操作*/
        (function () {
            var $transform=$('.header .toolbar-bot .nav-bg').eq(0);
            var $li=$('.header .toolbar-bot .container .navbar>ul>li.nav-till');
            // hover变背景色 // hover变背景色
            $li.hover(function(){
                $transform.addClass('transform');
            },function(){
                $transform.removeClass('transform');
            });
            //滚动监听
            window.addEventListener('scroll', function(){
                //console.log(  $(document).scrollTop() );
                var scrollT = $(document).scrollTop();

                if(scrollT > 10){
                    $transform.css({opacity: 1,transform:'rotateX(0deg)'});
                }else{
                    $transform[0].style.cssText = '';

                }
            },true);


        })();



        // 遮罩轮播
        (function () {    // 遮罩轮播
            var $banner=$('.banner .marker .container .content .wrap ul');
            var $li=$banner.children();
            $banner.append($li.eq(0).clone());
            var num=0;
            (function request() {
                num++;
                $banner.animate({top:-num*$li.eq(0).height()},function () {
                    if (num==$li.length){
                        num=0;
                        $banner.css({top:0})
                    }

                });
                setTimeout(request,2000);
            })();
        })();
        //视频banner轮播

        //=========视频弹窗========

        //波浪
        (function(){    //==========================波浪===================
            var canvas = document.getElementById('wave');
            var ctx =  canvas.getContext('2d');
            var  w =  canvas.width =  canvas.parentNode.offsetWidth;
            var  h =  canvas.height =  canvas.parentNode.offsetHeight;

            var waveDefault = h/2;//默认高度
            var waveBo = waveDefault/4;//波浪最大高度
            var colors = ["rgba(0,222,255, 0.2)",
                "rgba(157,192,249, 0.2)",
                "rgba(0,168,255, 0.2)"];
            var num=0;
            (function requestA(){
                ctx.clearRect(0,0,w,h);//擦除画布
                num++;
                for(var i=0;i<colors.length;i++){
                    var angle = (num+i*50)*Math.PI/180;
                    var sinHeight = Math.sin( angle )*waveBo;//左边
                    var cosHeight = Math.cos( angle )*waveBo;//右边
                    ctx.fillStyle=colors[i];   //绘制边框
                    ctx.beginPath();//开始路径
                    ctx.moveTo(0,waveDefault+sinHeight);//(x,y)移动画笔
                    ctx.bezierCurveTo(w/2,waveDefault-waveBo+sinHeight,w/2,waveDefault-waveBo+cosHeight,w,waveDefault+cosHeight);
                    ctx.lineTo(w,h);     //右下角
                    ctx.lineTo(0,h);    //左下角
                    ctx.lineTo(0,waveDefault+sinHeight);//移动画笔
                    ctx.fill();          //画 填充
                }
                requestAnimationFrame(requestA);
            })();
        })();
        //开放式视频创收应用
        (function(){
            var $revenue_content = $('.partners-revenue ul.revenue-content');
            var $h4 = $('.partners-revenue ul.revenue-content li h4');
            var arr = [106536169,340,36];
            var onoff = true;
            $(window).scroll(function(){
                var top =  $revenue_content.eq(0)[0].getBoundingClientRect().top;
                //console.log( top );
                if(top < 200 && onoff){
                    onoff = false;
                    for(var i=0;i<arr.length;i++){
                        requestA(arr[i],5000,i);
                    }


                }
                function requestA(number,duration,index){
                    var init_t = new Date();
                    (function run(){
                        var current_t =  new Date();
                        var percent = (current_t-init_t)/duration;//动画进度
                        if(percent>1){
                            percent = 1;
                        }else{
                            requestAnimationFrame(run);
                        }
                        var value = (number*percent).toFixed(0);
                        //console.log( 'ok')
                        switch (index) {
                            case 0:
                                var one = parseInt(value/1000000);
                                var two = parseInt(value%1000000/1000);
                                var three = (value%1000);
                                $h4.eq(index).html(one+','+two+','+three);
                                break;
                            case 1:
                                $h4.eq(index).html(value);
                                break;
                            case 2://5
                                $h4.eq(index).html(value/10);
                                break;
                        }
                    })();
                };

            });
        })();
        //客户服务
        (function(){
            var $wrap = $('.partners-server .server-content');
            var wrapW = $wrap.innerWidth();
            var $img = $wrap.find('img');
            var imgW = $img.innerWidth();
            var scrollMaxW =  imgW - wrapW;
            var num=0;
            var onoff = true;
            (function requestA(){
                if(onoff){
                    num+=2;
                    if(num>scrollMaxW){
                        onoff =  false;
                    }
                }else{
                    num-=2;
                    if(num<0){
                        num = 0;
                        onoff =  true;
                    }
                }
                $img.css({left:-num});
                requestAnimationFrame(requestA);
            })();


        })();
        //案例   周出去

        // canvas 圆
        (function(){
            var canvas = document.getElementById('circle');
            var ctx = canvas.getContext('2d');
            var w = canvas.width = canvas.parentNode.offsetWidth;
            var h = canvas.height = canvas.parentNode.offsetHeight;
            var r = 200;//小圆半径
            var R = Math.sqrt( Math.pow(w/2,2)+Math.pow(h,2) );//圆的最大半径
            var offset = 125;//圆与圆之间距离
            var num = Math.floor( (R-r)/offset) ;

            var arr = [];
            for(var i=0;i<=num;i++){
                var obj = {};
                obj.r = offset*i + r;
                arr.push(obj);

            }
            //动画
            (function requestA(){
                ctx.clearRect(0,0,w,h);
                for(var i=0;i<arr.length;i++){
                    if( arr[i].r > R ){
                        arr[i].r = r;
                    }else{
                        arr[i].r++;
                    }
                    arr[i].opacity = (R-arr[i].r)/R;
                    draw(arr[i]);
                }
                requestAnimationFrame(requestA);
            })();

            //绘制canvas
            function draw(obj){
                ctx.beginPath();
                ctx.lineWidth = obj.r/100;//线条宽度
                ctx.strokeStyle = 'rgba(255,255,255,'+obj.opacity+')';//绘制边框颜色
                ctx.arc(w/2,h,obj.r,0,360*Math.PI/180,true);//绘制圆路径
                ctx.stroke();
            };


        })();



    },true);




    //案例
    (function(){
        var $tab_wrap = $('.cases .cases-top .text .tab-content');
        var $tab_panes = $('.cases .cases-top .text .tab-content .tab-pane');
        var $tab_images = $('.cases .cases-top .picture ul li');
        var $tab_btns = $('.cases .cases-content a.nav-item');

        var h =  $tab_panes.eq(0).innerHeight();
        $tab_wrap.css({height:h});
        var num = 0;
        var timer;

        $tab_btns.click(function(){
            clearTimeout(timer);
            $tab_btns.eq(num).removeClass('active');
            $tab_panes.stop(true,true).eq(num).show().animate({top:'-100%',opacity:0},500);
            $tab_images.eq(num).fadeOut(500);//图片
            num = $(this).index();
            $tab_btns.eq(num).addClass('active');
            // console.log(  $tab_images );
            $tab_images.eq(num).fadeIn(500);
            $tab_panes.eq(num).css({top:'-100%'}).show().animate({top:0,opacity:1},500);
            timer = setTimeout(requestA,3000);

        });
        requestA();
        function requestA(){
            clearTimeout(timer);
            $tab_btns.eq(num).removeClass('active');
            $tab_panes.stop(true,true).eq(num).show().animate({top:'100%',opacity:0},500);
            $tab_images.eq(num).fadeOut(500);//图片
            num++;
            num %= $tab_btns.length;
            //$txt_pane.eq(num).addClass('active');
            $tab_btns.eq(num).addClass('active');
            $tab_images.eq(num).fadeIn(1200);
            $tab_panes.eq(num).css({top:'-100%'}).fadeIn().animate({top:0,opacity:1},500);
            timer = setTimeout(requestA,3000);
        };

    })();
    //视频banner轮播
    (function(){   //视频banner轮播
        var $video = $('.banner .bg-video video');
        var length = $video.length;
        var num = 0;
        var $oldVideo,$currentVideo,$oldline;
        var onoff = true;
        var arr = ['vote_bg_video.mp4','magic_bg_video.mp4','shelves_video.mp4','trading_video.mp4'];

        $oldVideo = $video.eq(num%length);

        //按钮
        var $tab = $('.banner .marker ul.tab li');
        var timer;
        var $line= $('.banner .marker ul.tab li a i');

        reqeuest();
        function reqeuest(){
            var  progress = $oldVideo[0].currentTime/$oldVideo[0].duration;//视频播放进度
            $oldline = $line.eq(num);
            $oldline.css({width:progress*100+'%'});

            // console.log(progress);

            if(progress > 0.90 && onoff){
                //下一个视频
                onoff = false;
                $currentVideo = $video.eq( (num+1)%length );
                $currentVideo[0].src = 'video/'+arr[(num+1)%arr.length];
                $currentVideo[0].play();//播放

                $oldline.css({width:0});

                $currentVideo.animate({opacity:1},500);

                $oldVideo.animate({opacity:0},500,function(){

                    $oldVideo[0].pause();//暂停
                    $oldVideo[0].src = '';

                    $oldVideo =  $currentVideo;//更新$oldVideo
                    onoff = true;
                });
                num++;
                num%=arr.length;
                //下一个video 加载src
            }

            timer = requestAnimationFrame( reqeuest );
        }

        $tab.click(function(){
            cancelAnimationFrame(timer);
            $oldVideo[0].pause();//暂停
            $oldVideo[0].src = '';
            $oldline.css({width:0});
            num = $(this).index();

            //console.log( num  )
            $oldVideo =  $video.eq( num%length );
            $oldVideo[0].src = 'video/'+arr[num%arr.length];
            console.log('video/'+arr[num%arr.length]);

            //console.log(1);

            $oldVideo[0].play();//重播
            onoff = true;
            reqeuest();
        })
    })();
    //视频弹窗
    (function () {//=========视频弹窗========
        var $btn=$('.banner .marker .btn-group .btn-right a');
        var $videowrap=$('.banner .video-wrap');
        var $wrap=$('.banner .video-wrap .container .wrap');
        var $video=$('.banner .video-wrap .container .wrap video');
        var $close=$('.banner .video-wrap .container .wrap .close');
        var $sys=$('.system .container-fluid');
        $btn.click(function () {
            $video[0].currentTime=0;  //重播

            //$videowrap.css({top:$btn.offset().top,left:$btn.offset().left});

            $btn.animate({width:0,opacity:0},500,function () {
                $videowrap.css({display:'block'});
                $sys.css({display:'none'});
                $videowrap.animate({
                    top:'300px',
                    left:'500px'},500);    //向右移动动画
                $videowrap.animate({

                    width: '200%',
                    height: '200%',
                    left: '-900px',
                    top: '-200px',
                    background:'#232B5C',
                    zIndex:'10',
                    //borderRadius: '50%'
                },300,function () {
                    $wrap.css({display:'block'});
                    $video[0].play();   //播放视频

                });    //圆圈放大动画


            });

        });        //点击btn即可体验的时候宽度和透明度变为0，再返回一个回调函数动画
        //==========关闭地址===========
        $close.click(function () {
            $wrap.css({display:'none'});
            $video[0].pause();   //关闭视频
            $sys.css({display:'block'});
            $videowrap.animate({
                width: '50px',
                height: '50px',
                left: '530px',
                top: '330px',

                background:'#232B5C',
                //borderRadius: '50%'
            },500);
            $videowrap.animate({top:'350px', left:'420px'},500,function () {
                $videowrap.css({display:'none'});
                $btn.animate({width:'140px',opacity:1},500);

            });

        });
    })();





















})












