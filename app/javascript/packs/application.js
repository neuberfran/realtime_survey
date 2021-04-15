// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// import Rails from "@rails/ujs"
// import Turbolinks from "turbolinks"
// import * as ActiveStorage from "@rails/activestorage"     // mexi nessas 4 e ..........     
// import "channels"

import "../jquery/jquery-1.6.1.min"
import "../jquery/jquery.charts"
import "../jquery/jquery.notice"


require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("chartkick/chart.js")
//require("jquery")

// import "bootstrap"
// import "../stylesheets/application"

var jQuery = require('jquery')

// include jQuery in global and window scope (so you can access it globally)
// in your web browser, when you type $('.div'), it is actually refering to global.$('.div')
global.$ = global.jQuery = jQuery;
window.$ = window.jQuery = jQuery;

// Rails.start()
// Turbolinks.start()
// ActiveStorage.start()                  // Mexi nessas 3
