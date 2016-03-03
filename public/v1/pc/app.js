;(function(){
  //Init full page
  $('#fullpage').fullpage({
      anchors: ['page-1', 'page-2', 'page-3', 'page-4', 'page-5'],
      navigation: true,
      navigationPosition: 'right',

      onLeave: function(index, nextIndex){
          $("#menu>.nav_item:eq(" + --index +")").removeClass("active");
          $("#menu>.nav_item:eq(" + --nextIndex + ")").addClass("active");
      }
  });

})();
