
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
require("chartkick/chart.js")

import jQuery from 'jquery';
 global.jQuery = jQuery;

 import $ from 'jquery';
 global.$ = $;

import charts from "../jquery/jquery.charts";
  global.charts = charts;

import notice from "../jquery/jquery.notice";
  global.notice = notice;  

import alertify from 'alertifyjs';
  global.alertify = alertify;
  
require('alertifyjs/build/css/alertify.css');
require('alertifyjs/build/css/themes/bootstrap.css');

//import "../jquery/jquery-1.6.1.min"
//import "../jquery/jquery.charts"
//import "../jquery/jquery.notice"


// require("@rails/ujs").start()
// require("turbolinks").start()
// require("@rails/activestorage").start()
// require("channels")
// require("chartkick/chart.js")


// import "../jquery/jquery-1.6.1.min"
// import chars from "../jquery/jquery.charts";
// import "../jquery/jquery.notice"

//require("jquery")

// import "bootstrap"
// import "../stylesheets/application"

//var jQuery = require('jquery')

// import jQuery from 'jquery';

// include jQuery in global and window scope (so you can access it globally)
// in your web browser, when you type $('.div'), it is actually refering to global.$('.div')

// global.$ = global.jQuery = jQuery;
// window.$ = window.jQuery = jQuery;

// Rails.start()
// Turbolinks.start()
// ActiveStorage.start()                  // Mexi nessas 3