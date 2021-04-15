// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
