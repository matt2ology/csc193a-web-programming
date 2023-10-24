function showAlert() {
  document.getElementById("myTextArea").style.fontSize = "4em";
  document.getElementById("myTextArea").style.backgroundColor = "yellow";
}

function changeStyle() {
  if (document.getElementById("fancy").checked) {
    document.getElementById("myTextArea").style.fontWeight = "bold";
    document.getElementById("myTextArea").style.textDecoration = "underline";
    document.getElementById("myTextArea").style.color = "blue";
  } else {
    document.getElementById("myTextArea").style.fontWeight = "normal";
    document.getElementById("myTextArea").style.textDecoration = "none";
    document.getElementById("myTextArea").style.color = "black";
  }
}

function moo() {
  var textArea = document.getElementById("myTextArea");
  textArea.value = textArea.value.toUpperCase();
  var sentences = textArea.value.split(".");
  for (var i = 0; i < sentences.length - 1; i++) {
    var words = sentences[i].split(" ");
    words[words.length - 1] += "-Moo";
    sentences[i] = words.join(" ");
  }
  textArea.value = sentences.join(".");
}
