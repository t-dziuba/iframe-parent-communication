window.addEventListener("message", function (event) {
  if (event.origin !== "http://localhost:3000") return;

  document.getElementById("divChild").innerText =
    "Parent post a message: " + event.data;
});
function clickMe() {
  const user = {
    email: "any@email.com",
    access_token: "example-of-access-token",
  };
  parent.postMessage(JSON.stringify(user), "http://localhost:3000"); // parent address as second argument
}
