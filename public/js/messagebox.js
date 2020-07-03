document
  .getElementById("message-text")
  .addEventListener("keypress", function (e) {
    if (e.which == 13 && !e.shiftKey && e.target.value.trim()) {
      if (/<script>/.test(e.target.value)) {
        alert("Сообщение не может содержать «<script>»");
      } else {
        console.log(e.target.value);
        e.target.value = "";
      }
      e.preventDefault();
    }
  });
