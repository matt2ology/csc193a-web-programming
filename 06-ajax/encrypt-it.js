/*
 * Starter file
 * We use this anonymous function to create a private namespace for our code,
 * so that we don't expose our variables to the global scope.
 * This is a good practice to follow, even if you don't have any variables.
 */
(function () {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * init is the function called when the HTML document has been loaded on the page.
   */
  function init() {
    console.log("Window loaded!");
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    let button = document.getElementById("encrypt-it");
    button.addEventListener("click", handleClick);

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  /**
   * This function is called in response to the button being clicked.
   */
  function handleClick() {
    console.log("Button clicked!");
    let inputText = document.getElementById("input-text");
    let outputParagraph = document.getElementById("result");
    let encryptedText = shiftCipher(inputText.value);
    outputParagraph.textContent = encryptedText;
  }

  /**
   * This function is called in response to the reset button being clicked.
   * It clear the input text field.
   */
  function handleReset() {
    let inputText = document.getElementById("input-text");
    inputText.value = "";
  }

  /**
   * This function takes a string and encrypts it using a Caesar cipher.
   *
   * @param {string} text - the text to be encrypted
   * @returns {string} - the encrypted text
   * @example shiftCipher("abc") returns "bcd"
   */
  function shiftCipher(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        result += String.fromCharCode((charCode - 65 + 1) % 26 + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        result += String.fromCharCode((charCode - 97 + 1) % 26 + 97);
      } else {
        result += text.charAt(i);
      }
    }
    return result;
  }
})();
