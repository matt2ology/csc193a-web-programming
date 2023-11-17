/*
 * Starter file
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
   * TODO: Write a function comment using JSDoc.
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
  }

  /**
   * This function is called in response to the reset button being clicked.
   * It clear the input text field.
   */
  function handleReset() {
    let inputText = document.getElementById("input-text");
    inputText.value = "";
  }
})();
