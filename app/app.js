import Vue from 'nativescript-vue';
import Home from './components/Home';

import store from './store/index';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;



import { TNSFontIcon, fonticon } from './nativescript-fonticon';

TNSFontIcon.debug = false;
TNSFontIcon.paths = {
    'fa': './fonts/font-awesome.css',
    'ion': './fonts/ionicons.css',
};
TNSFontIcon.loadCss();

Vue.registerElement('MapView', () => require('nativescript-google-maps-sdk').MapView);
Vue.filter('fonticon', fonticon);
Vue.registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);
Vue.registerElement('BarcodeScanner', () => require('nativescript-barcodescanner').BarcodeScannerView)
// Vue.registerElement('BarcodeView', () => require('nativescript-barcodeview').BarcodeView);
new Vue({

    render: h => h('frame', [h(Home)]),
    store: store

}).$start();
