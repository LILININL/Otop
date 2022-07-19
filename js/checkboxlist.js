$('.icon-item-list').on('change', function() {
    $('.icon-item-list').not(this).prop('checked',false);
});