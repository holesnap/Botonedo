function fbShare() {
  window.plugins.socialsharing.shareViaFacebook('Message via Facebook',
    null /* img */,
    null /* url */,
    null,
    function (errormsg) { alert("Error: Cannot Share") }
  );
};

function whatsappShare(e) {
  console.log(e);
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', "../audios/" + e);
  console.log(audioElement.getAttribute("src"));
  window.plugins.socialsharing.shareViaWhatsApp('Message via WhatsApp',
    audioElement.getAttribute("src"),
    "https://pointdeveloper.com/" /* url */,
    null,
    function (errormsg) { alert("Error: Cannot Share") }
  );
};

function twitterShare() {
  window.plugins.socialsharing.shareViaTwitter('Message via Twitter',
    null /* img */,
    'http://twitter.com/',
    null,
    function (errormsg) { alert("Error: Cannot Share") }
  );
};

function otherShare() {
  window.plugins.socialsharing.share(null, null, "www/pics/kevin.jpg", null);
};

function otherShare2() {
  window.plugins.socialsharing.share(null, null, "www/kevin.jpg", null);
};

function onDeviceReady() {
}


function domLoaded() {
  document.addEventListener("deviceready", onDeviceReady, false);

}