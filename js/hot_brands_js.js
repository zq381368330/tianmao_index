$(function(){
	$(".hot_brands_items .hot_brands_items_img").mouseover(function(){
		$(this).siblings().fadeIn(80).mouseleave(function(){
			$(this).fadeOut(80);
		});
	});
	$(".hot_brands_items_mask li").click(function() {
		$(this).css({
			"color": "#D20B0B",
			"font-size": "20px"
		})
	});
	$(".channel_module_column_item").mouseenter(function(){
		$(this).children(".channel_module_column_item_img").children(".channel_module_column_item_img_src").stop().animate({
			height:150,
			width:150,
		
		},300);
	});
	$(".channel_module_column_item").mouseleave(function() {
		$(this).children(".channel_module_column_item_img").children(".channel_module_column_item_img_src").stop().animate({
			height: 135,
			width: 135,

		}, 300);
	});
	$(".hot_brands_items_mask_enter").hover(function(){
		$(this).css({
			"background-color":"#EA5F8D"
		});

	},function(){
		$(this).css({
			"background-color":"FF0000"
		});
	})

	
});