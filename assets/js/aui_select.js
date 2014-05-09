$(function(){
// sgd select
	$('.dropdown-menu li a').on( "click", function(e) {
		var $target = $(e.currentTarget)
		var selectedItem = $target.text();
		$target.closest('.btn-group').find('[data-bind="label"]').text(selectedItem);
		var $searchInput = $target.parent().siblings().find('.typeahead');
		if ($searchInput.length > 0) {
			$searchInput.val("");
			resetSearch($searchInput);
		}
		return true;
	});

	$('.dropdown-menu li input[type="text"]').on( "click", function(e) {
		e.stopPropagation();
	});

	$('.dropdown-menu li').on( "click", function(e) {
		var $target = $(e.currentTarget);
		if ($target.find('input[type="checkbox"]').length > 0) {
			e.stopPropagation();
		}		
	});

	$('.dropdown-toggle .checkbox').on( "click", function(e) {
		var $target = $(e.target);
		//if the checkbox is clicked prevent menu from opening
		if ((e.offsetX > 1 && e.offsetX < 15 && !$target.is('.caret'))  
		    || $target.is('input[type="checkbox"]')) { //stopping menu event causes checkbox event to be fired. Event needs to not be propagated after this
			e.stopPropagation();
		}	
	 });

	$('[data-toggle="dropdown"]').on('click', function() {
		var $list = $($(this).closest('.btn-group').children('ul'));
		var $searchInput = $($list.find('.typeahead'));
		var $items = $list.find('a'); 
		if($list.find('.twitter-typeahead').length == 0) {
			$searchInput.typeahead({
  				hint: true,
  				highlight: true,
  				minLength: 1
			},
			{
  				name: 'items',
 				displayKey: 'value',
  				source: filter($items)
			});	
			}

	});

	 $('.typeahead').on('keyup', function(e) {
    	    if (e.keyCode == 8) {
		if($(this).val() == null || $(this).val().length == 0 ) {
		    resetSearch(this);
		}
    	     }
 	});

	function resetSearch($element) {
	    var $list = $($($element).closest('.btn-group').children('ul'));
	    var $items = $list.find('a'); 
            $.each($items, function(i, item) {
	         $(item).show();
	    });
	}

	var filter = function(items) {
  	    return function findMatches(searchString) {

    	        var matches = [];

    	        var regex = new RegExp(searchString, 'i');
 
    	        $.each(items, function(i, item) {
    	            var str = $(item).text();
                    if (!regex.test(str)) {
	                $(item).hide()
                    } else {
                        $(item).show();
                    }
    	});
  };
};


});
