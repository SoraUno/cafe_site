// アニメーションさせたいクラス
var container = $(".long_text");
// アニメーションスピード
var speed = 15;

$('.long_text').each(function(){
    var txt = $(this).html();
    $(this).html(
      txt.replace(/<br>/g,'')
    );
  });

// テキストの間にスペースを入れます
var content = $(container).html();
var text = $.trim(content);
var newHtml = "";

// スペースで区切ったテキストを、テキストの数だけspanで囲む
text.split("").forEach(function(v) {
 newHtml += '<span>' + v + '</span>';
});

// spanで囲んだテキスト群をHTMLに戻す
$(container).html(newHtml);

// 1文字ずつ表示
var txtNum = 0;
setInterval(function() {
  $(container).find('span').eq(txtNum).css({opacity: 1});
 txtNum++
}, speed);


// hoverアニメーション
// $(document).ready(function () {

    $('a').on('mouseover', function () {
      $(this).children('.card_text').stop().animate({'bottom' : 0}, 200, 'linear');
    });
    $('a').on('mouseout', function () {
      $(this).children('.card_text').stop().animate({'bottom' : "-25px"}, 200, 'linear');
    });
//   });