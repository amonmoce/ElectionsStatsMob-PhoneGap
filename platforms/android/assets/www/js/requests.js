function req(action){

  if(action == 'getPresidentialsByCountry'){
    var country = document.getElementById('countryPresidential');
    var whichData = document.getElementById('whichDataPresidentialForCountry');
    country = country.options[country.selectedIndex].value;
    whichData = whichData.options[whichData.selectedIndex].value;
    action += '?country=' + country + '&whichData='+ whichData;
    req_res(action, 'PresidentialsByCountry');

  }
  if(action == 'getPresidentialsByYear'){
    var year = document.getElementById('yearPresidential');
    var whichData = document.getElementById('whichDataPresidentialForYear');
    year = year.options[year.selectedIndex].value;
    whichData = whichData.options[whichData.selectedIndex].value;
    action += '?year=' + year + '&whichData='+ whichData;
    req_res(action, 'PresidentialsByYear');
  }

  if(action == 'getParliamentariesByCountry'){
    var country = document.getElementById('countryParliamentaries');
    var whichData = document.getElementById('whichDataParliamentariesForCountry');
    country = country.options[country.selectedIndex].value;
    whichData = whichData.options[whichData.selectedIndex].value;
    action += '?country=' + country + '&whichData='+ whichData;
    req_res(action, 'ParliamentariesByCountry');
  }

  if(action == 'getParliamentariesByYear'){
    var year = document.getElementById('yearParliamentaries');
    var whichData = document.getElementById('whichDataParliamentariesForYear');
    year = year.options[year.selectedIndex].value;
    whichData = whichData.options[whichData.selectedIndex].value;
    action += '?year=' + year + '&whichData='+ whichData;
    req_res(action, 'ParliamentariesByYear');
  }
}

function req_res(action, div_id){
  var xmlhttp = new XMLHttpRequest();
  var url = "https://blooming-hollows-1907.herokuapp.com/ElectionsStats/default/";
  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
          var res = xmlhttp.responseText;
          document.getElementById(div_id).innerHTML = res.replace("<a href='/ElectionsStats/default/index'>Go back</a>", " ");
      }
  };
  xmlhttp.open("GET", url+action, true);
  xmlhttp.send();
}
