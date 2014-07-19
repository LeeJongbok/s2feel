$(document).ready(function(){
     $('#hover-act').hover(function(){
     	$('#hover-act').hide();
     }, function(){
     		$('#hover-act').show();
     });

	 $('#click-act').click(function(){
	 	$(this).hide();

	 });  
     
});
$(document).ready(function(){
     $('#loading-example-btn').click(function () {
    var btn = $(this)
    btn.button('loading')
      });
  });
	 
