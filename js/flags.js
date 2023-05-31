var SELECTED
var PREVIOUS
var STREAK = 0
countries = [
  ["af", "Afghanistan"],
  ["al", "Albania"],
  ["dz", "Algeria"],
  ["ad", "Andorra"],
  ["ao", "Angola"],
  ["aq", "Antarctica"],
  ["ag", "Antigua and Barbuda"],
  ["ar", "Argentina"],
  ["am", "Armenia"],
  ["au", "Australia"],
  ["at", "Austria"],
  ["az", "Azerbaijan"],
  ["bs", "Bahamas"],
  ["bh", "Bahrain"],
  ["bd", "Bangladesh"],
  ["bb", "Barbados"],
  ["by", "Belarus"],
  ["be", "Belgium"],
  ["bz", "Belize"],
  ["bj", "Benin"],
  ["bt", "Bhutan"],
  ["bo", "Bolivia"],
  ["ba", "Bosnia and Herzegovina"],
  ["bw", "Botswana"],
  ["br", "Brazil"],
  ["bn", "Brunei Darussalam"],
  ["bg", "Bulgaria"],
  ["bf", "Burkina Faso"],
  ["bi", "Burundi"],
  ["cv", "Cabo Verde"],
  ["kh", "Cambodia"],
  ["cm", "Cameroon"],
  ["ca", "Canada"],
  ["cf", "Central African Republic"],
  ["td", "Chad"],
  ["cl", "Chile"],
  ["cn", "China"],
  ["co", "Colombia"],
  ["km", "Comoros"],
  ["cr", "Costa Rica"],
  ["hr", "Croatia"],
  ["cu", "Cuba"],
  ["cy", "Cyprus"],
  ["cz", "Czech Republic"],
  ["ci", "Côte d'Ivoire"],
  ["cd", "Democratic Republic of the Congo"],
  ["dk", "Denmark"],
  ["dj", "Djibouti"],
  ["dm", "Dominica"],
  ["do", "Dominican Republic"],
  ["ec", "Ecuador"],
  ["eg", "Egypt"],
  ["sv", "El Salvador"],
  ["gq", "Equatorial Guinea"],
  ["er", "Eritrea"],
  ["ee", "Estonia"],
  ["sz", "Eswatini"],
  ["et", "Ethiopia"],
  ["fm", "Federated States of Micronesia"],
  ["fj", "Fiji"],
  ["fi", "Finland"],
  ["fr", "France"],
  ["ga", "Gabon"],
  ["gm", "Gambia"],
  ["ge", "Georgia"],
  ["de", "Germany"],
  ["gh", "Ghana"],
  ["gr", "Greece"],
  ["gl", "Greenland"],
  ["gd", "Grenada"],
  ["gt", "Guatemala"],
  ["gn", "Guinea"],
  ["gw", "Guinea-Bissau"],
  ["gy", "Guyana"],
  ["ht", "Haiti"],
  ["va", "Vatican City"],
  ["hn", "Honduras"],
  ["hu", "Hungary"],
  ["is", "Iceland"],
  ["in", "India"],
  ["id", "Indonesia"],
  ["ir", "Iran"],
  ["iq", "Iraq"],
  ["ie", "Ireland"],
  ["il", "Israel"],
  ["it", "Italy"],
  ["jm", "Jamaica"],
  ["jp", "Japan"],
  ["jo", "Jordan"],
  ["kz", "Kazakhstan"],
  ["ke", "Kenya"],
  ["ki", "Kiribati"],
  ["kw", "Kuwait"],
  ["kg", "Kyrgyzstan"],
  ["la", "Laos"],
  ["lv", "Latvia"],
  ["lb", "Lebanon"],
  ["ls", "Lesotho"],
  ["lr", "Liberia"],
  ["ly", "Libya"],
  ["li", "Liechtenstein"],
  ["lt", "Lithuania"],
  ["lu", "Luxembourg"],
  ["mg", "Madagascar"],
  ["mw", "Malawi"],
  ["my", "Malaysia"],
  ["mv", "Maldives"],
  ["ml", "Mali"],
  ["mt", "Malta"],
  ["mh", "Marshall Islands"],
  ["mr", "Mauritania"],
  ["mu", "Mauritius"],
  ["mx", "Mexico"],
  ["md", "Moldova"],
  ["mc", "Monaco"],
  ["mn", "Mongolia"],
  ["me", "Montenegro"],
  ["ma", "Morocco"],
  ["mz", "Mozambique"],
  ["mm", "Myanmar"],
  ["na", "Namibia"],
  ["nr", "Nauru"],
  ["np", "Nepal"],
  ["nl", "Netherlands"],
  ["nz", "New Zealand"],
  ["ni", "Nicaragua"],
  ["ne", "Niger"],
  ["ng", "Nigeria"],
  ["kp", "North Korea"],
  ["mk", "North Macedonia"],
  ["no", "Norway"],
  ["om", "Oman"],
  ["pk", "Pakistan"],
  ["pw", "Palau"],
  ["pa", "Panama"],
  ["pg", "Papua New Guinea"],
  ["py", "Paraguay"],
  ["pe", "Peru"],
  ["ph", "Philippines"],
  ["pl", "Poland"],
  ["pt", "Portugal"],
  ["pr", "Puerto Rico"],
  ["qa", "Qatar"],
  ["cg", "Republic of the Congo"],
  ["ro", "Romania"],
  ["ru", "Russia"],
  ["rw", "Rwanda"],
  ["kn", "Saint Kitts and Nevis"],
  ["lc", "Saint Lucia"],
  ["vc", "Saint Vincent and the Grenadines"],
  ["ws", "Samoa"],
  ["sm", "San Marino"],
  ["st", "Sao Tome and Principe"],
  ["sa", "Saudi Arabia"],
  ["sn", "Senegal"],
  ["rs", "Serbia"],
  ["sc", "Seychelles"],
  ["sl", "Sierra Leone"],
  ["sg", "Singapore"],
  ["sk", "Slovakia"],
  ["si", "Slovenia"],
  ["sb", "Solomon Islands"],
  ["so", "Somalia"],
  ["za", "South Africa"],
  ["kr", "South Korea"],
  ["ss", "South Sudan"],
  ["es", "Spain"],
  ["lk", "Sri Lanka"],
  ["ps", "State of Palestine"],
  ["sd", "Sudan"],
  ["sr", "Suriname"],
  ["se", "Sweden"],
  ["ch", "Switzerland"],
  ["sy", "Syria"],
  ["tw", "Taiwan"],
  ["tj", "Tajikistan"],
  ["tz", "Tanzania"],
  ["th", "Thailand"],
  ["tl", "Timor-Leste"],
  ["tg", "Togo"],
  ["tk", "Tokelau"],
  ["to", "Tonga"],
  ["tt", "Trinidad and Tobago"],
  ["tn", "Tunisia"],
  ["tr", "Turkey"],
  ["tm", "Turkmenistan"],
  ["tv", "Tuvalu"],
  ["ug", "Uganda"],
  ["ua", "Ukraine"],
  ["ae", "United Arab Emirates"],
  ["gb", "United Kingdom"],
  ["us", "United States of America"],
  ["uy", "Uruguay"],
  ["uz", "Uzbekistan"],
  ["vu", "Vanuatu"],
  ["ve", "Venezuela"],
  ["vn", "Vietnam"],
  ["ye", "Yemen"],
  ["zm", "Zambia"],
  ["zw", "Zimbabwe"]
]

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


function selectRandCountry() {
  if (SELECTED) {
    PREVIOUS = SELECTED
    document.getElementById("flag").classList.remove("fi-" + countries[PREVIOUS][0])
  }
  SELECTED = Math.floor(Math.random() * countries.length)
  document.getElementById("flag").classList.add("fi-" + countries[SELECTED][0])
  randomselection = [SELECTED]
  for (let i = 0; i < 3; i++) {i
    randomcountry = Math.floor(Math.random() * countries.length)
    while (randomselection.includes(randomcountry)) {
      randomcountry += 1
    }
    randomselection.push(randomcountry)
  }
  shuffle(randomselection)
  for (let i = 0; i < 4; i++) {
    btn = document.getElementById("btn"+i)
    btn.value = randomselection[i]
    btn.innerText = countries[randomselection[i]][1]
    if (btn.classList.contains("wrong")) {
      btn.classList.remove("wrong")
    }
  }
}

function incrementStreak() {
  STREAK += 1
  document.getElementById("streak").innerText = STREAK
}


function clickButton(button) {
  if (!SELECTED) {
    selectRandCountry()
    return
  }
  if (button.value == SELECTED) {
    selectRandCountry()
    incrementStreak()
  }
  else {
    button.classList.add("wrong")
    STREAK = -1
  }
}
