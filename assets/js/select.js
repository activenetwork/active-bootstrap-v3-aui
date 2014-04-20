$(function(){
// sgd select
	$('[data-dropdown-type="select"] li').on( "click", function(e) {
		var $target = $(e.currentTarget)
		var selectedItem = $target.text();
		$target.closest('.btn-group').find('[data-bind="label"]').text(selectedItem);
		return true;
	});
});