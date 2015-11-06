/**
 * @author yanbin01 <yanbin01@baidu.com>
 * @date 2015-10-26
 */

'use strict';
module.exports = function(ret, settings, conf, opt){
    var reg = /PLACEHOLDER_OFFLINE_ROUTER/ig;
    fis.util.map(ret.src, function(subpath, file){
        if(file.isHtmlLike) {
            var content = file.getContent();
            content = content.replace(reg, function(m, blank_space, value){
                var arr_router = file.dirname.split('/');
                //console.log(file.dirname);
                var count;
                if(arr_router.indexOf('page') > 0) {
                    count = arr_router.length - arr_router.indexOf('page');
                    var dot = [];
                    for(var i = 0; i < count; i++) {
                        dot.push('..')
                    }
                    return dot.join('/');
                }
            });
            file.setContent(content);
        }
    });

};