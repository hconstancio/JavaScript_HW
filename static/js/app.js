// Create variables that will hold the information for the search to be used with the button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state");
var $searchBtn = document.querySelector("#search");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");


// Adding the event listener for the Search BUTTON, - This will get activated when clicking it!
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filter to dataSet
var tableData = data;

// Render the filtered addresses to tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    // Get get the current address object and its fields
    var address = tableData[i];
    console.log(address)
    var fields = Object.keys(address);
    // Create a new row and set the index to i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // Insert a new cell for every field in the address object and add the curreny value to the current address field 
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format user's search by removing leading and trailing whitespaces and loweringcase all strings
  var filterDate = $dateInput.value;
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filterShape = $shapeInput.value.trim().toLowerCase();

  // Add all information that matches the filter based on the search
  if (filterDate != "")
  {
    tableData = tableData.filter(function(address) 
    {
      var addressDate = address.datetime; 
    
    // Only if matches, the address is added
    return addressDate === filterDate;
    });
  }
  else {tableData};
  
  if(filterState != "")
  {
    tableData = tableData.filter(function(address)
    {
      var addressState = address.state;
      return addressState === filterState;
    });
  }
  else{tableData};

  if(filterCity != "")
  {
    tableData = tableData.filter(function(address)
    {
      var addressCity = address.city;
      return addressCity === filterCity;
    });
  }

  else{tableData};

  if(filterCountry != "")
  {
    tableData = tableData.filter(function(address)
    {
      var addressCountry = address.country;
      return addressCountry === filterCountry;
    });
  }
  else{tableData};

  if(filterShape != "")
  {
    tableData = tableData.filter(function(address)
    {
      var addressShape = address.shape;
      return addressShape === filterShape;
    });
  }
  else{tableData};

renderTable();

}

// Render the table when loading the page
renderTable();


$(document).ready(function() {
  $('#table').DataTable();
});