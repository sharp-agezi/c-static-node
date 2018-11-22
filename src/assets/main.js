import "./scss/index.scss";


$(function () {
    burialPoint();
    $('.confirmOrder').click(function () {
        addCar();
    })
    // 判断是否有视频src
    if ($('#my-video source').attr('src')) {

    } else {
        $('#my-video').hide();
    }
    setCookie('skuid', $("#skuId").val().trim(),'/')

})

// 点击3d图标跳转路径
$(".chakan").click(function () {
    var skuid = $("#skuId").val().trim();
    location.href = globalBase.url + '/paas/shop/paasstatic/c-static/templates/build/3Dexhibition.html'
});

//商品详情全局变量
let goodsInfor = {
    spectype: { //规格参数
        skuId: $('#skuId').val(), //skuId
        skuName: [], //sku
    },
    goodsCode: $('#goodsCode').val(),
    spectypeState: false, //默认是false，查看用户可选择了sku
    skuId: $('#skuId').val(), //加入购物车后的skuId
    goodsNum: 1, //商品数量，默认为1
    goodsState: 0, //默认为0,1是加入购物车，2是立即购买
    goodsStatic: 0, //商品是否收藏状态 0是未收藏
}

//加入购物车
function addCar() {
    $$.ajax({
        url: globalBase.hostname + '/web/oc/shopping/addShoppingGoods.json',
        type: 'post',
        data: {
            'skuId': $('#skuId').val(),
            'goodsNum': 1
        },
        success: function (res) {
            if (res.success) {
                Toast("心愿单添加成功!")
                // _close()
            } else {
                Toast(res.msg)
            }
        },
        error: function (err) {
            console.log(err)
        }
    })
}