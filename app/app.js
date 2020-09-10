import Vue from 'nativescript-vue';
import { isAndroid, isIOS } from "tns-core-modules/platform";
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

if (isIOS) {
    GMSServices.provideAPIKey('AIzaSyBkjr6oE_v2YWk4QyP1bBvv4UrLV1NbpjI');
}

Vue.registerElement('MapView', () => require('nativescript-google-maps-sdk').MapView);
Vue.registerElement(
    'CardView',
    () => require('@nstudio/nativescript-cardview').CardView
  );
Vue.filter('fonticon', fonticon);
Vue.registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);
Vue.registerElement('BarcodeScanner', () => require('nativescript-barcodescanner').BarcodeScannerView)

new Vue({
    mounted() {
        this.$store.commit("load");
    },
    render: h => h('frame', [h(Home)]),
    store: store

}).$start();
