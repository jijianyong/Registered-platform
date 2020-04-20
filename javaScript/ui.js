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

/**
 * 显示选项卡内容
 * @param {string} header  Tab组件，所有选项卡item
 * @param {string} content  Tab组件，内容区域，所有item
 * @param {string} focus  高亮显示
 */
$.fn.UiTab = function(header,content,focus) {
    var ui = $(this);
    var tabs = $(header);
    var cons = $(content);
    var focus = focus || '';

    tabs.on("click", function() {
        var index = $(this).index();
        // debugger;
        tabs.removeClass(focus+'item-focus').eq(index).addClass(focus+'item-focus');
        cons.hide().eq(index).show();
        return false;
    })
}

// ui-backTop 返回顶部
$.fn.UiBackTop = function() {
    var ui = $(this);
    var windowHeigh = $(window).height()/2;
    var el = $('<a href="#" class="ui-backTop">返回顶部</a>');
    ui.append(el);

    $(window).on('scroll', function() {
        var top = $(window).scrollTop();
        console.log("A:"+top);
        console.log("B:"+windowHeigh);
        if(top > windowHeigh){
            el.show();
        }else {
            el.hide();
        }
    })
}


// 页面的脚本逻辑
$(function() {
    $('.ui-search').UiSearch();
    $('.content-tab').UiTab('.caption > .item','.block > .item');
    $('.content-tab .block .item').UiTab('.block-caption > a','.block-content > .block-wrap','block-caption-');
    $('body').UiBackTop();
})


