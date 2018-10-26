// Copyright 2016 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and


var url = document.getElementById("sensorAddress").value + "data.csv"

// limitations under the License.
function reloadGetAddress() {
    var input = document.getElementById("sensorAddress").value;
    
    
   
    document.getElementById("status").innerHTML = '<div class="connectionbuttonOK"> <div class="connectvalid"><i class="mdsmall material-icons connectOK">check</i></div> <p class="connectiontext" id="ipadd"></p> </div>';
    
    document.getElementById("ip").innerHTML = input;
    
     document.getElementById("ipadd").innerHTML = input;
}

function getName() {
    var name = document.getElementById("sensorName").value;
    
   
     document.getElementById("name").innerHTML = name;
}

function noLogo() {
    document.getElementById("logo").style.display = 'none';
}

(function() {
  'use strict';

  var app = {
    isLoading: true,
    visibleCards: {},
    selectedCities: [],
    spinner: document.querySelector('.loader'),
    cardTemplate: document.querySelector('.cardTemplate'),
    container: document.querySelector('.main'),
    addDialog: document.querySelector('.dialog-container'),
     
       setupDialog: document.querySelector('.setup-container'),
       doneDialog: document.querySelector('.done-container'),
    daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  };


    
    
   document.getElementById('butAdd').addEventListener('click', function() {
    // Open/show the add new city dialog
    app.toggleAddDialog(true);
  });

  document.getElementById('butAddCity').addEventListener('click', function() {
     app.toggleSetupDialog(true);
      getName();
    app.toggleAddDialog(false);
  });

  document.getElementById('butAddCancel').addEventListener('click', function() {
    // Close the add new city dialog
    app.toggleAddDialog(false);
      
  });

    document.getElementById('butAddCancelSetup').addEventListener('click', function() {
    // Close the add new city dialog
    app.toggleSetupDialog(false);
      
  });
    
    
    document.getElementById('butNext').addEventListener('click', function() {
   reloadGetAddress();
        app.toggleDoneDialog(true);
        
    app.toggleSetupDialog(false);
         
      
  });
    
     document.getElementById('butDone').addEventListener('click', function() {
   
        app.toggleDoneDialog(false);
        
    noLogo();
         
      
  });
      
    
    
    
    app.toggleAddDialog = function(visible) {
    if (visible) {
      app.addDialog.classList.add('dialog-container--visible');
    } else {
      app.addDialog.classList.remove('dialog-container--visible');
    }
  };
    
    
    
       app.toggleSetupDialog = function(visible) {
    if (visible) {
      app.setupDialog.classList.add('dialog-container--visible');
    } else {
      app.setupDialog.classList.remove('dialog-container--visible');
    }
  };
    
    
    
     app.toggleDoneDialog = function(visible) {
    if (visible) {
      app.doneDialog.classList.add('dialog-container--visible');
    } else {
      app.doneDialog.classList.remove('dialog-container--visible');
    }
  };
    
    
    
    
  /*****************************************************************************
   *
   * Event listeners for UI elements
   *
   ****************************************************************************/

  document.getElementById('butRefresh').addEventListener('click', function() {
    // Refresh all of the forecasts
    app.updateForecasts();
  });


})();

function createCard() {
   
}





var chart = c3.generate({
    data: {
        url: 'data.csv',
        type: 'line'
    }
});

