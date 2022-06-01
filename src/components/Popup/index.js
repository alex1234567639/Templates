import PopupComponent from './Popup.vue';

/**
 * 彈窗
 * @param {*} content 彈窗內容
 * @param {*} type 彈窗類型
 */

const Popup = {
    install(Vue) {
        // 建立popup實例
        const PopupWindow = Vue.extend(PopupComponent)
        // 將popup掛載到div
        let instance = new PopupWindow({
            el: document.createElement('div')
        });
        // 加到body中
        document.body.appendChild(instance.$el);
        // 绑定到vue原型上,以供全局使用
        Vue.prototype.$popup = ((content,type) => {
            // 彈窗顯示的內容
            instance.content = content;
            // 類型決定彈窗顯示方式
            instance.type = type || 'msg';
            // 調用時顯示組件
            instance.show = true;
        })
    }
}

export default Popup;
