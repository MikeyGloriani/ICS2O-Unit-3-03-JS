// Created by: Mikey Gloriani
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-3-03-JS/sw.js", {
    scope: "/ICS2O-Unit-3-03-JS/",
  })
}

/**
 * This function calculates the volume of a sphere
 */
 function calculate() {
  // input
  const radius = parseFloat(document.getElementById("radius").value)

  // process
  const Volume = (4/3)*(Math.PI) * (radius**3)

  // output
  document.getElementById("volume").innerHTML = "Volume is: " + Volume + " cm²"
}
