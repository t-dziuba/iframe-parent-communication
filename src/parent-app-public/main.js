const iframe = document.getElementById("iframe-content");

function listenToUserEvents() {
  window.addEventListener(
    "message",
    (event) => {
      console.log("message detected", event.origin);
      // if not our target domain, we do nothing
      // for qa it will "https://ui.devint.gcp.openx.org" for devint https://ui.devint.gcp.openx.org

      if (event.origin !== "http://localhost:4000") return;

      console.log(`event on ${event.origin} detected`, event.data);
      const user = JSON.parse(event.data);

      if (user && user.access_token) {
        // do something with access token
        alert(`token: ${user.access_token}`);
      }
    },
    false
  );
}

function postMessageToIframe() {
  listenToUserEvents();
  iframe.contentWindow.postMessage(
    "start listening for login events",
    "http://localhost:4000" //address of iframe app
  );
}
