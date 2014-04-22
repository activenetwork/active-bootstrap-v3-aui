$(function(){
// sgd select
	$('[data-dropdown-type="select"] li a').on( "click", function(e) {
		var $target = $(e.currentTarget)
		var selectedItem = $target.text();
		$target.closest('.btn-group').find('[data-bind="label"]').text(selectedItem);
		return true;
	});

	$('[data-dropdown-type="select"] li input').on( "click", function(e) {
		return false;
	});
});
