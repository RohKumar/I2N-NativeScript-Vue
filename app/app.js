import Vue from 'nativescript-vue';
import { isAndroid, isIOS } from "tns-core-modules/platform";
import Home from './components/Home';
const application = require("tns-core-modules/application");
import store from './store/index';

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;



import { TNSFontIcon, fonticon } from './nativescript-fonticon';
import {configureOAuthProviders} from "./auth-service";
configureOAuthProviders();

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
Vue.registerElement('MDCardView', () => require('nativescript-material-cardview').CardView);
Vue.filter('fonticon', fonticon);
Vue.registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);
Vue.registerElement('BarcodeScanner', () => require('nativescript-barcodescanner').BarcodeScannerView)
Vue.registerElement(
    "CreditCardView",
    () => require("nativescript-stripe").CreditCardView
);
application.on(application.launchEvent, args => {
    if (args.ios) {
        STPPaymentConfiguration.sharedConfiguration().publishableKey = "pk_live_51HIjyZCqZt8HTd8OSlOW4zP5kqeAx4Du71OrEMKrO4fiHcTyhoBwI1BFCQWTRsATw4eO1TGC9z20BAAlj7NTdYNz00vh3KDyYT";
    }
});
new Vue({
    mounted() {
        this.$store.commit("load");
    },
    render: h => h('frame', [h(Home)]),
    store: store

}).$start();
