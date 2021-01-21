var height = $(window).height();
var width = $(window).width();
console.log(height);
console.log(width);


// 1200px;
if(width>=1200){
  var marginLeft = ((width - 1200)/2) + "px";
  console.log(marginLeft);
  $('.menu').css('margin-left',marginLeft);
  $('.content').css('margin-left',marginLeft);

  // Изображение точек
  var imgRight = ((width - 1200)/2) - 50 + "px";
  $('.content__imgPoint').css('right',imgRight);

  // Красный фон
  var imgRight1 = ((width - 1200)/2)  + "px";
  $('.content__imgBg').css('right',imgRight1);

  // Девушка
  var imgRight2 = ((width - 1200)/2) - 80 + (($('.content__imgPoint').width())/2) + "px";
  $('.content__imgGirl').css('right',imgRight2);

  // Клиенты
  var imgRight3 = ((width - 1200)/2)  + ($('.content__imgBg').width()) - (($('.content__imgClients').width())/2)  +  "px";
  $('.content__imgClients').css('right',imgRight3);

  // Продажи
  var imgRight4 = ((width - 1200)/2) - 180  + "px";
  $('.content__imgSale').css('right',imgRight4);


  // Изображение графика
  var imgRight5 = ((width - 1200)/2) - 50 + "px";
  $('.content__imgChart').css('right',imgRight5);


  // Изображение треугольника
  var imgRight3 = ((width - 1200)/2)  + ($('.content__imgBg').width()) -160  +  "px";
  $('.content__imgTriangle').css('right',imgRight3);



  var logoLeft = ((width - 1200)/2-50)+ "px";
  $('.menu__image').css('left',logoLeft);

  var contentImgMarginLeft = ((width - 1200)/2) + 276 + "px";
  $('.content__img').css('margin-left',contentImgMarginLeft);
} else if(width<1199 && width>=991){
  var marginLeft = ((width - 991)/2) + "px";
  console.log(marginLeft);
  $('.menu').css('margin-left',marginLeft)
  $('.content').css('margin-left',marginLeft)

  // Изображение точек
  var imgRight = ((width - 991)/2) - 50 + "px";
  $('.content__imgPoint').css('right',imgRight);
  $('.content__imgPoint').css('width','10%');

  // Красный фон
  var imgRight1 = ((width - 991)/2)  + "px";
  $('.content__imgBg').css('right',imgRight1);
  $('.content__imgBg').css('width','35%');

  // Девушка
  var imgRight2 = ((width - 991)/2) - 80 + (($('.content__imgPoint').width())/2) + "px";
  $('.content__imgGirl').css('right',imgRight2);
  $('.content__imgGirl').css('width','43%');


  // Клиенты
  var imgRight3 = ((width - 991)/2)  + ($('.content__imgBg').width()) - (($('.content__imgClients').width())/2)  +  "px";
  $('.content__imgClients').css('right',imgRight3);
  $('.content__imgClients').css('width','15%');


  // Продажи
  var imgRight4 = ((width - 991)/2) - 180  + "px";
  $('.content__imgSale').css('right',imgRight4);
  $('.content__imgSale').css('width','20%');


  // Изображение графика
  var imgRight5 = ((width - 991)/2) - 50 + "px";
  $('.content__imgChart').css('right',imgRight5);
  $('.content__imgChart').css('width','25%');


  // Изображение треугольника
  var imgRight3 = ((width - 991)/2)  + ($('.content__imgBg').width()) -160  +  "px";
  $('.content__imgTriangle').css('right',imgRight3);
  $('.content__imgTriangle').css('width','10%');



  var logoLeft = ((width - 991)/2 - 20)+ "px";
  $('.menu__image').css('left',logoLeft)

  var contentImgMarginLeft = ((width - 991)/2) + 276 + "px";
  $('.content__img').css('margin-left',contentImgMarginLeft)

  $('.menu__navList').css('margin-left','10px');
  $('.menu__navList').css('font-size','13px');

} else if(width<990 && width>=768){
  var marginLeft = ((width - 768)/2) + "px";
  console.log(marginLeft);
  $('.menu').css('margin-left',marginLeft)
  $('.content').css('margin-left',marginLeft)

  // Изображение точек
  var imgRight = ((width - 768)/2) - 50 + "px";
  $('.content__imgPoint').css('right',imgRight);
  $('.content__imgPoint').css('width','10%');

  // Красный фон
  var imgRight1 = ((width - 768)/2)  + "px";
  $('.content__imgBg').css('right',imgRight1);
  $('.content__imgBg').css('width','35%');

  // Девушка
  var imgRight2 = ((width - 768)/2) - 80 + (($('.content__imgPoint').width())/2) + "px";
  $('.content__imgGirl').css('right',imgRight2);
  $('.content__imgGirl').css('width','43%');


  // Клиенты
  var imgRight3 = ((width - 768)/2)  + ($('.content__imgBg').width()) - (($('.content__imgClients').width())/2)  +  "px";
  $('.content__imgClients').css('right',imgRight3);
  $('.content__imgClients').css('width','15%');


  // Продажи
  var imgRight4 = ((width - 768)/2) - 180  + "px";
  $('.content__imgSale').css('right',imgRight4);
  $('.content__imgSale').css('width','20%');


  // Изображение графика
  var imgRight5 = ((width - 768)/2) - 50 + "px";
  $('.content__imgChart').css('right',imgRight5);
  $('.content__imgChart').css('width','25%');


  // Изображение треугольника
  var imgRight3 = ((width - 768)/2)  + ($('.content__imgBg').width()) -160  +  "px";
  $('.content__imgTriangle').css('right',imgRight3);
  $('.content__imgTriangle').css('width','10%');



  var logoLeft = ((width - 768)/2-50)+ "px";
  $('.menu__image').css('left',logoLeft)

  var contentImgMarginLeft = ((width - 768)/2) + 276 + "px";
  $('.content__img').css('margin-left',contentImgMarginLeft)
  $('.menu__navList').css('margin-left','10px');
  $('.menu__navList').css('font-size','13px');
  $('.content__header').css('margin-top','180px');
  $('.content__header').css('font-size','30px');
  $('.content__header').css('width','40%');
  $('.content__paragraph').css('font-size','17px');
  $('.content__paragraph').css('width','40%');
  $('.content__input').css('width','20%');
  $('.content__input').css('font-size','15px');
}
