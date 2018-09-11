sap.ui.define([
    "sap/ui/base/Object"
], function (Object) {
    "use strict";
    return Object.extend("pae.logistica.controller.CameraSettings", {

        cameraSettings: function (srcType) {
            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: srcType,
                encodingType: Camera.EncodingType.JPEG,
                mediaType: Camera.MediaType.PICTURE,
                allowEdit: true,
                correctOrientation: true
            }
            return options;
        },
        openCamera: function (selection) {
            var srcType = Camera.PictureSourceType.CAMERA;
            var options = cameraSettings(srcType);
            var func = createNewFileEntry;

            navigator.camera.getPicture(function cameraSuccess(imageUri){
                displayImage(imageUri);
                func(imageUri);
            }, function cameraError(error){
                console.debug("No se puede obtener la imagen: " + error + "app");
            }, options);
        },

        displayImage: function(imgUri){
            var elem = document.getElementById('imageFile');
            elem.src = imgUri;
        }
    });
});