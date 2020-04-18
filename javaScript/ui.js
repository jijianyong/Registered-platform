// ui-search 定义
$.fn.UiSearch = function() {
    var ui = $(this);
    // 点击后，下拉框显示
    $('.ui-search-selected',ui).on('click',function() {
        $('.ui-search-select-list').show();
        return false; // 阻止冒泡事件
    });
    // 点击后，显示框内容改变
    $('.ui-search-select-list span',ui).on('click',function() {
        $('.ui-search-selected span:first').text($(this).text());
        $('.ui-search-select-list').hide();
        return false;// 阻止冒泡事件
    })
    // 点击内容区域后，下拉框隐藏
    $('body').on('click',function() {
        $('.ui-search-select-list').hide();
    });
}

// 页面的脚本逻辑
$(function() {
    $('.ui-search').UiSearch();
})


