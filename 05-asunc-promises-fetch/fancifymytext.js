const fancify = document.getElementById("idFancyShmancy");
const boring = document.getElementById("idBoringBetty");
fancify.addEventListener("change", fancifyOption);
boring.addEventListener("change", boringOption);

/**
 * This function should send an alert to the user.
 */
function sendAlert() {
  alert("Something Changed");
}

/**
 * This function should set the font size of the text area to 24pt.
 */
function makeTextBig() {
  document.getElementById("myTextArea").style.fontSize = "24px";
}

/**
 * When the user selects the "Fancy Shmancy" radio button.
 * It should set the text color to blue,
 * the font weight to "bold",
 * and the text decoration to "underline".
 */
function fancifyOption() {
  document.getElementById("myTextArea").style.color = "blue";
  document.getElementById("myTextArea").style.fontWeight = "bold";
  document.getElementById("myTextArea").style.textDecoration = "underline";
}

/**
 * When the user selects the "Boring Betty" radio button.
 * It should set the text color to black,
 * the font weight to "normal",
 * and the text decoration to "none".
 */
function boringOption() {
  document.getElementById("myTextArea").style.color = "black";
  document.getElementById("myTextArea").style.fontWeight = "normal";
  document.getElementById("myTextArea").style.textDecoration = "none";
}

/**
 * This function should convert the text in the text area to all caps.
 * It should also add "-Moo" to the end of the text.
 */
function moo() {
  // Replace with the actual ID of your textarea
  var textarea = document.getElementById("myTextArea");
  // Convert the text to all caps
  var text = textarea.value.toUpperCase();

  // Use a regular expression to split the text into sentences
  var sentences = text.split(/([.!?]+)/);

  // Process each sentence and add "-Moo" to the last words while preserving punctuation
  // += 2 to skip over the punctuation
  for (var i = 0; i < sentences.length; i += 2) {
    // The sentence to process (skip over the punctuation)
    var sentence = sentences[i];

    // If the sentence contains more than one word
    if (/\s/.test(sentence)) {
      // Split the sentence into words
      var words = sentence.split(/\s+/);

      // Add "-Moo" to the last word
      words[words.length - 1] += "-Moo";

      // Join the words back together to form the sentence
      sentences[i] = words.join(" ");
    }
  }

  // Join the sentences back together
  text = sentences.join("");

  // Set the modified text back to the textarea
  textarea.value = text;
}
