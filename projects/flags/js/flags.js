var SELECTED
var PREVIOUS
var STREAK = 0
countries = [
  "af",
  "al",
  "dz",
  "ad",
  "ao",
  "aq",
  "ag",
  "ar",
  "am",
  "au",
  "at",
  "az",
  "bs",
  "bh",
  "bd",
  "bb",
  "by",
  "be",
  "bz",
  "bj",
  "bt",
  "bo",
  "ba",
  "bw",
  "br",
  "bn",
  "bg",
  "bf",
  "bi",
  "cv",
  "kh",
  "cm",
  "ca",
  "cf",
  "td",
  "cl",
  "cn",
  "co",
  "km",
  "cr",
  "hr",
  "cu",
  "cy",
  "cz",
  "ci",
  "cd",
  "dk",
  "dj",
  "dm",
  "do",
  "ec",
  "eg",
  "sv",
  "gq",
  "er",
  "ee",
  "sz",
  "et",
  "fm",
  "fj",
  "fi",
  "fr",
  "ga",
  "gm",
  "ge",
  "de",
  "gh",
  "gr",
  "gl",
  "gd",
  "gt",
  "gn",
  "gw",
  "gy",
  "ht",
  "va",
  "hn",
  "hu",
  "is",
  "in",
  "id",
  "ir",
  "iq",
  "ie",
  "il",
  "it",
  "jm",
  "jp",
  "jo",
  "kz",
  "ke",
  "ki",
  "kw",
  "kg",
  "la",
  "lv",
  "lb",
  "ls",
  "lr",
  "ly",
  "li",
  "lt",
  "lu",
  "mg",
  "mw",
  "my",
  "mv",
  "ml",
  "mt",
  "mh",
  "mr",
  "mu",
  "mx",
  "md",
  "mc",
  "mn",
  "me",
  "ma",
  "mz",
  "mm",
  "na",
  "nr",
  "np",
  "nl",
  "nz",
  "ni",
  "ne",
  "ng",
  "kp",
  "mk",
  "no",
  "om",
  "pk",
  "pw",
  "pa",
  "pg",
  "py",
  "pe",
  "ph",
  "pl",
  "pt",
  "pr",
  "qa",
  "cg",
  "ro",
  "ru",
  "rw",
  "kn",
  "lc",
  "vc",
  "ws",
  "sm",
  "st",
  "sa",
  "sn",
  "rs",
  "sc",
  "sl",
  "sg",
  "sk",
  "si",
  "sb",
  "so",
  "za",
  "kr",
  "ss",
  "es",
  "lk",
  "ps",
  "sd",
  "sr",
  "se",
  "ch",
  "sy",
  "tw",
  "tj",
  "tz",
  "th",
  "tl",
  "tg",
  "tk",
  "to",
  "tt",
  "tn",
  "tr",
  "tm",
  "tv",
  "ug",
  "ua",
  "ae",
  "gb",
  "us",
  "uy",
  "uz",
  "vu",
  "ve",
  "vn",
  "ye",
  "zm",
  "zw"
]

languages = [
  ["Abkhazian", "ab"],
  ["Afar", "aa"],
  ["Afrikaans", "af"],
  ["Akan", "ak"],
  ["Albanian", "sq"],
  ["Amharic", "am"],
  ["Arabic", "ar"],
  ["Aragonese", "an"],
  ["Armenian", "hy"],
  ["Assamese", "as"],
  ["Avaric", "av"],
  ["Avestan", "ae"],
  ["Aymara", "ay"],
  ["Azerbaijani", "az"],
  ["Bambara", "bm"],
  ["Bashkir", "ba"],
  ["Basque", "eu"],
  ["Belarusian", "be"],
  ["Bengali", "bn"],
  ["Bislama", "bi"],
  ["Bosnian", "bs"],
  ["Breton", "br"],
  ["Bulgarian", "bg"],
  ["Burmese", "my"],
  ["Catalan, Valencian", "ca"],
  ["Chamorro", "ch"],
  ["Chechen", "ce"],
  ["Chichewa, Chewa, Nyanja", "ny"],
  ["Chinese", "zh"],
  ["Old Slavonic", "cu"],
  ["Chuvash", "cv"],
  ["Cornish", "kw"],
  ["Corsican", "co"],
  ["Cree", "cr"],
  ["Croatian", "hr"],
  ["Czech", "cs"],
  ["Danish", "da"],
  ["Divehi, Dhivehi, Maldivian", "dv"],
  ["Dutch, Flemish", "nl"],
  ["Dzongkha", "dz"],
  ["English", "en"],
  ["Esperanto", "eo"],
  ["Estonian", "et"],
  ["Ewe", "ee"],
  ["Faroese", "fo"],
  ["Fijian", "fj"],
  ["Finnish", "fi"],
  ["French", "fr"],
  ["Western Frisian", "fy"],
  ["Fulah", "ff"],
  ["Gaelic, Scottish Gaelic", "gd"],
  ["Galician", "gl"],
  ["Ganda", "lg"],
  ["Georgian", "ka"],
  ["German", "de"],
  ["Greek, Modern", "el"],
  ["Kalaallisut, Greenlandic", "kl"],
  ["Guarani", "gn"],
  ["Gujarati", "gu"],
  ["Haitian, Haitian Creole", "ht"],
  ["Hausa", "ha"],
  ["Hebrew", "he"],
  ["Herero", "hz"],
  ["Hindi", "hi"],
  ["Hiri Motu", "ho"],
  ["Hungarian", "hu"],
  ["Icelandic", "is"],
  ["Ido", "io"],
  ["Igbo", "ig"],
  ["Indonesian", "id"],
  ["Interlingua", "ia"],
  ["Interlingue, Occidental", "ie"],
  ["Inuktitut", "iu"],
  ["Inupiaq", "ik"],
  ["Irish", "ga"],
  ["Italian", "it"],
  ["Japanese", "ja"],
  ["Javanese", "jv"],
  ["Kannada", "kn"],
  ["Kanuri", "kr"],
  ["Kashmiri", "ks"],
  ["Kazakh", "kk"],
  ["Central Khmer", "km"],
  ["Kikuyu, Gikuyu", "ki"],
  ["Kinyarwanda", "rw"],
  ["Kirghiz, Kyrgyz", "ky"],
  ["Komi", "kv"],
  ["Kongo", "kg"],
  ["Korean", "ko"],
  ["Kuanyama, Kwanyama", "kj"],
  ["Kurdish", "ku"],
  ["Lao", "lo"],
  ["Latin", "la"],
  ["Latvian", "lv"],
  ["Limburgan, Limburger, Limburgish", "li"],
  ["Lingala", "ln"],
  ["Lithuanian", "lt"],
  ["Luba-Katanga", "lu"],
  ["Luxembourgish, Letzeburgesch", "lb"],
  ["Macedonian", "mk"],
  ["Malagasy", "mg"],
  ["Malay", "ms"],
  ["Malayalam", "ml"],
  ["Maltese", "mt"],
  ["Manx", "gv"],
  ["Maori", "mi"],
  ["Marathi", "mr"],
  ["Marshallese", "mh"],
  ["Mongolian", "mn"],
  ["Nauru", "na"],
  ["Navajo, Navaho", "nv"],
  ["North Ndebele", "nd"],
  ["South Ndebele", "nr"],
  ["Ndonga", "ng"],
  ["Nepali", "ne"],
  ["Norwegian", "no"],
  ["Norwegian Bokmål", "nb"],
  ["Norwegian Nynorsk", "nn"],
  ["Sichuan Yi, Nuosu", "ii"],
  ["Occitan", "oc"],
  ["Ojibwa", "oj"],
  ["Oriya", "or"],
  ["Oromo", "om"],
  ["Ossetian, Ossetic", "os"],
  ["Pali", "pi"],
  ["Pashto, Pushto", "ps"],
  ["Persian", "fa"],
  ["Polish", "pl"],
  ["Portuguese", "pt"],
  ["Punjabi, Panjabi", "pa"],
  ["Quechua", "qu"],
  ["Romanian, Moldavian, Moldovan", "ro"],
  ["Romansh", "rm"],
  ["Rundi", "rn"],
  ["Russian", "ru"],
  ["Northern Sami", "se"],
  ["Samoan", "sm"],
  ["Sango", "sg"],
  ["Sanskrit", "sa"],
  ["Sardinian", "sc"],
  ["Serbian", "sr"],
  ["Shona", "sn"],
  ["Sindhi", "sd"],
  ["Sinhala, Sinhalese", "si"],
  ["Slovak", "sk"],
  ["Slovenian", "sl"],
  ["Somali", "so"],
  ["Southern Sotho", "st"],
  ["Spanish, Castilian", "es"],
  ["Sundanese", "su"],
  ["Swahili", "sw"],
  ["Swati", "ss"],
  ["Swedish", "sv"],
  ["Tagalog", "tl"],
  ["Tahitian", "ty"],
  ["Tajik", "tg"],
  ["Tamil", "ta"],
  ["Tatar", "tt"],
  ["Telugu", "te"],
  ["Thai", "th"],
  ["Tibetan", "bo"],
  ["Tigrinya", "ti"],
  ["Tonga", "to"],
  ["Tsonga", "ts"],
  ["Tswana", "tn"],
  ["Turkish", "tr"],
  ["Turkmen", "tk"],
  ["Twi", "tw"],
  ["Uighur, Uyghur", "ug"],
  ["Ukrainian", "uk"],
  ["Urdu", "ur"],
  ["Uzbek", "uz"],
  ["Venda", "ve"],
  ["Vietnamese", "vi"],
  ["Volapük", "vo"],
  ["Walloon", "wa"],
  ["Welsh", "cy"],
  ["Wolof", "wo"],
  ["Xhosa", "xh"],
  ["Yiddish", "yi"],
  ["Yoruba", "yo"],
  ["Zhuang, Chuang", "za"],
  ["Zulu", "zu"]
]

selectlang = document.getElementById("lang-select")
languages.forEach(language => {
  var option = document.createElement("option")
  option.value = language[1]
  option.text = language[0]
  selectlang.appendChild(option)
})

var regionNames = new Intl.DisplayNames(
  ['en'], {type: 'region'}
);

function changeLang(el) {
  regionNames = new Intl.DisplayNames(
    [el.value], {type: 'region'}
  );
  for (let i = 0; i < 4; i++) {
    btn = document.getElementById("btn"+i)
    btn.innerText = regionNames.of(countries[btn.value].toUpperCase())
  }
}

function openLangChanger() {
  document.getElementById("lang-picker").style.display = "flex"
}

function closeLangChanger() {
  document.getElementById("lang-picker").style.display = ""
}


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
    document.getElementById("flag").classList.remove("fi-" + countries[PREVIOUS])
  }
  SELECTED = Math.floor(Math.random() * countries.length)
  document.getElementById("flag").classList.add("fi-" + countries[SELECTED])
  randomselection = [SELECTED]
  for (let i = 0; i < 3; i++) {
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
    btn.innerText = regionNames.of(countries[randomselection[i]].toUpperCase())
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
