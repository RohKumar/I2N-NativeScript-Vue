<template>
  <Page>
    <ActionBar title=""></ActionBar>

    <GridLayout columns="*" rows="auto, auto, auto, auto">
      <BarcodeScanner
          row="1"
          height="300"
          formats="QR_CODE, EAN_13, UPC_A"
          beepOnScan="true"
          reportDuplicates="true"
          preferFrontCamera="false"
          @scanResult="onScanResult"
          v-if="isIOS">
      </BarcodeScanner>

      <Button row="2" class="btn btn-primary btn-rounded-sm" text="Scan" @tap="doScanWithBackCamera"></Button>

    </GridLayout>
  </Page>
</template>

<script>
  import { isIOS, isAndroid } from 'tns-core-modules/platform'
  import * as Toast from 'nativescript-toast';
  import {BarcodeScanner} from "nativescript-barcodescanner";
  import RewardsService from '../../services/rewardsService';

  const rewardsService =  new RewardsService();
  export default {
    data() {
      return {
        isIOS
      }
    },
    
    methods: {

      scan(front) {
        let that = this;
        new BarcodeScanner().scan({
          cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
          cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
          message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
          preferFrontCamera: front,     // Android only, default false
          showFlipCameraButton: true,   // default false
          showTorchButton: true,        // iOS only, default false
          torchOn: false,               // launch with the flashlight on (default false)
          resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
          beepOnScan: true,             // Play or Suppress beep on scan (default true)
          openSettingsIfPermissionWasPreviouslyDenied: true, // On iOS you can send the user to the settings app if access was previously denied
          closeCallback: () => {
            console.log("Scanner closed @ " + new Date().getTime());
          }
        }).then(
            function (result) {
              console.log("--- scanned: " + result.text);
              // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
              setTimeout(function () {
                if (isAndroid) {
                  that.toastMessage(`onScanResult: ${result.text}`);
                }
              // Make api call and give points
                const reqObj = {
                  id: result.text,
                  points: 5
                };
                rewardsService.rewardPoints(reqObj).then((res) => {
                  const response = res.content.toJSON();
                  that.toastMessage(res.content.toJSON());
                  if (response.status === 200) {
                    if (isAndroid) {
                      that.toastMessage(response.message);
                    }
                  }
                })
              }, 500);
            },
            function (errorMessage) {
              console.log("No scan. " + errorMessage);
            }
        );
      },
      onScanResult(evt) {
        console.log(`onScanResult: ${evt.text} (${evt.format})`);
      },
      doScanWithBackCamera() {
        this.scan(false);
      },
      doScanWithFrontCamera() {
        this.scan(true);
      },
      toastMessage(message) {
        const toast = Toast.makeText(message);
        toast.show();
      },
    }
  }
</script>

<style scoped>
  ActionBar {
    background-color: #53ba82;
    color: #ffffff;
  }
  .message {
    vertical-align: center;
    text-align: center;
    font-size: 20;
    color: #333333;
  }
</style>