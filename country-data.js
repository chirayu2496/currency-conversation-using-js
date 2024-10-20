const countryData = [
    {
      "currency_code": "AED",
      "currency_name": "UAE Dirham",
      "country_name": "United Arab Emirates",
      "country_iso": "AE",
      "country_flag": "https://flagsapi.com/AE/flat/64.png"
    },
    {
      "currency_code": "AFN",
      "currency_name": "Afghan Afghani",
      "country_name": "Afghanistan",
      "country_iso": "AF",
      "country_flag": "https://flagsapi.com/AF/flat/64.png"
    },
    {
      "currency_code": "ALL",
      "currency_name": "Albanian Lek",
      "country_name": "Albania",
      "country_iso": "AL",
      "country_flag": "https://flagsapi.com/AL/flat/64.png"
    },
    {
      "currency_code": "AMD",
      "currency_name": "Armenian Dram",
      "country_name": "Armenia",
      "country_iso": "AM",
      "country_flag": "https://flagsapi.com/AM/flat/64.png"
    },
    {
      "currency_code": "AOA",
      "currency_name": "Angolan Kwanza",
      "country_name": "Angola",
      "country_iso": "AO",
      "country_flag": "https://flagsapi.com/AO/flat/64.png"
    },
    {
      "currency_code": "ARS",
      "currency_name": "Argentine Peso",
      "country_name": "Argentina",
      "country_iso": "AR",
      "country_flag": "https://flagsapi.com/AR/flat/64.png"
    },
    {
      "currency_code": "AUD",
      "currency_name": "Australian Dollar",
      "country_name": "Australia",
      "country_iso": "AU",
      "country_flag": "https://flagsapi.com/AU/flat/64.png"
    },
    {
      "currency_code": "AWG",
      "currency_name": "Aruban Florin",
      "country_name": "Aruba",
      "country_iso": "AW",
      "country_flag": "https://flagsapi.com/AW/flat/64.png"
    },
    {
      "currency_code": "AZN",
      "currency_name": "Azerbaijani Manat",
      "country_name": "Azerbaijan",
      "country_iso": "AZ",
      "country_flag": "https://flagsapi.com/AZ/flat/64.png"
    },
    {
      "currency_code": "BAM",
      "currency_name": "Bosnia and Herzegovina Mark",
      "country_name": "Bosnia and Herzegovina",
      "country_iso": "BA",
      "country_flag": "https://flagsapi.com/BA/flat/64.png"
    },
    {
      "currency_code": "BBD",
      "currency_name": "Barbados Dollar",
      "country_name": "Barbados",
      "country_iso": "BB",
      "country_flag": "https://flagsapi.com/BB/flat/64.png"
    },
    {
      "currency_code": "BDT",
      "currency_name": "Bangladeshi Taka",
      "country_name": "Bangladesh",
      "country_iso": "BD",
      "country_flag": "https://flagsapi.com/BD/flat/64.png"
    },
    {
      "currency_code": "BGN",
      "currency_name": "Bulgarian Lev",
      "country_name": "Bulgaria",
      "country_iso": "BG",
      "country_flag": "https://flagsapi.com/BG/flat/64.png"
    },
    {
      "currency_code": "BHD",
      "currency_name": "Bahraini Dinar",
      "country_name": "Bahrain",
      "country_iso": "BH",
      "country_flag": "https://flagsapi.com/BH/flat/64.png"
    },
    {
      "currency_code": "BIF",
      "currency_name": "Burundian Franc",
      "country_name": "Burundi",
      "country_iso": "BI",
      "country_flag": "https://flagsapi.com/BI/flat/64.png"
    },
    {
      "currency_code": "BMD",
      "currency_name": "Bermudian Dollar",
      "country_name": "Bermuda",
      "country_iso": "BM",
      "country_flag": "https://flagsapi.com/BM/flat/64.png"
    },
    {
      "currency_code": "BND",
      "currency_name": "Brunei Dollar",
      "country_name": "Brunei",
      "country_iso": "BN",
      "country_flag": "https://flagsapi.com/BN/flat/64.png"
    },
    {
      "currency_code": "BOB",
      "currency_name": "Bolivian Boliviano",
      "country_name": "Bolivia",
      "country_iso": "BO",
      "country_flag": "https://flagsapi.com/BO/flat/64.png"
    },
    {
      "currency_code": "BRL",
      "currency_name": "Brazilian Real",
      "country_name": "Brazil",
      "country_iso": "BR",
      "country_flag": "https://flagsapi.com/BR/flat/64.png"
    },
    {
      "currency_code": "BSD",
      "currency_name": "Bahamian Dollar",
      "country_name": "Bahamas",
      "country_iso": "BS",
      "country_flag": "https://flagsapi.com/BS/flat/64.png"
    },
    {
      "currency_code": "BTN",
      "currency_name": "Bhutanese Ngultrum",
      "country_name": "Bhutan",
      "country_iso": "BT",
      "country_flag": "https://flagsapi.com/BT/flat/64.png"
    },
    {
      "currency_code": "BWP",
      "currency_name": "Botswana Pula",
      "country_name": "Botswana",
      "country_iso": "BW",
      "country_flag": "https://flagsapi.com/BW/flat/64.png"
    },
    {
      "currency_code": "BYN",
      "currency_name": "Belarusian Ruble",
      "country_name": "Belarus",
      "country_iso": "BY",
      "country_flag": "https://flagsapi.com/BY/flat/64.png"
    },
    {
      "currency_code": "BZD",
      "currency_name": "Belize Dollar",
      "country_name": "Belize",
      "country_iso": "BZ",
      "country_flag": "https://flagsapi.com/BZ/flat/64.png"
    },
    {
      "currency_code": "CAD",
      "currency_name": "Canadian Dollar",
      "country_name": "Canada",
      "country_iso": "CA",
      "country_flag": "https://flagsapi.com/CA/flat/64.png"
    },
    {
      "currency_code": "CDF",
      "currency_name": "Congolese Franc",
      "country_name": "Democratic Republic of the Congo",
      "country_iso": "CD",
      "country_flag": "https://flagsapi.com/CD/flat/64.png"
    },
    {
      "currency_code": "CHF",
      "currency_name": "Swiss Franc",
      "country_name": "Switzerland",
      "country_iso": "CH",
      "country_flag": "https://flagsapi.com/CH/flat/64.png"
    },
    {
      "currency_code": "CLP",
      "currency_name": "Chilean Peso",
      "country_name": "Chile",
      "country_iso": "CL",
      "country_flag": "https://flagsapi.com/CL/flat/64.png"
    },
    {
      "currency_code": "CNY",
      "currency_name": "Chinese Renminbi",
      "country_name": "China",
      "country_iso": "CN",
      "country_flag": "https://flagsapi.com/CN/flat/64.png"
    },
    {
      "currency_code": "COP",
      "currency_name": "Colombian Peso",
      "country_name": "Colombia",
      "country_iso": "CO",
      "country_flag": "https://flagsapi.com/CO/flat/64.png"
    },
    {
      "currency_code": "CRC",
      "currency_name": "Costa Rican Colon",
      "country_name": "Costa Rica",
      "country_iso": "CR",
      "country_flag": "https://flagsapi.com/CR/flat/64.png"
    },
    {
      "currency_code": "CUP",
      "currency_name": "Cuban Peso",
      "country_name": "Cuba",
      "country_iso": "CU",
      "country_flag": "https://flagsapi.com/CU/flat/64.png"
    },
    {
      "currency_code": "CVE",
      "currency_name": "Cape Verdean Escudo",
      "country_name": "Cape Verde",
      "country_iso": "CV",
      "country_flag": "https://flagsapi.com/CV/flat/64.png"
    },
    {
      "currency_code": "CZK",
      "currency_name": "Czech Koruna",
      "country_name": "Czech Republic",
      "country_iso": "CZ",
      "country_flag": "https://flagsapi.com/CZ/flat/64.png"
    },
    {
      "currency_code": "DJF",
      "currency_name": "Djiboutian Franc",
      "country_name": "Djibouti",
      "country_iso": "DJ",
      "country_flag": "https://flagsapi.com/DJ/flat/64.png"
    },
    {
      "currency_code": "DKK",
      "currency_name": "Danish Krone",
      "country_name": "Denmark",
      "country_iso": "DK",
      "country_flag": "https://flagsapi.com/DK/flat/64.png"
    },
    {
      "currency_code": "DOP",
      "currency_name": "Dominican Peso",
      "country_name": "Dominican Republic",
      "country_iso": "DO",
      "country_flag": "https://flagsapi.com/DO/flat/64.png"
    },
    {
      "currency_code": "DZD",
      "currency_name": "Algerian Dinar",
      "country_name": "Algeria",
      "country_iso": "DZ",
      "country_flag": "https://flagsapi.com/DZ/flat/64.png"
    },
    {
      "currency_code": "EGP",
      "currency_name": "Egyptian Pound",
      "country_name": "Egypt",
      "country_iso": "EG",
      "country_flag": "https://flagsapi.com/EG/flat/64.png"
    },
    {
      "currency_code": "ERN",
      "currency_name": "Eritrean Nakfa",
      "country_name": "Eritrea",
      "country_iso": "ER",
      "country_flag": "https://flagsapi.com/ER/flat/64.png"
    },
    {
      "currency_code": "ETB",
      "currency_name": "Ethiopian Birr",
      "country_name": "Ethiopia",
      "country_iso": "ET",
      "country_flag": "https://flagsapi.com/ET/flat/64.png"
    },
    {
      "currency_code": "FJD",
      "currency_name": "Fiji Dollar",
      "country_name": "Fiji",
      "country_iso": "FJ",
      "country_flag": "https://flagsapi.com/FJ/flat/64.png"
    },
    {
      "currency_code": "FKP",
      "currency_name": "Falkland Islands Pound",
      "country_name": "Falkland Islands",
      "country_iso": "FK",
      "country_flag": "https://flagsapi.com/FK/flat/64.png"
    },
    {
      "currency_code": "FOK",
      "currency_name": "Faroese Króna",
      "country_name": "Faroe Islands",
      "country_iso": "FO",
      "country_flag": "https://flagsapi.com/FO/flat/64.png"
    },
    {
      "currency_code": "GBP",
      "currency_name": "Pound Sterling",
      "country_name": "United Kingdom",
      "country_iso": "GB",
      "country_flag": "https://flagsapi.com/GB/flat/64.png"
    },
    {
      "currency_code": "GEL",
      "currency_name": "Georgian Lari",
      "country_name": "Georgia",
      "country_iso": "GE",
      "country_flag": "https://flagsapi.com/GE/flat/64.png"
    },
    {
      "currency_code": "GGP",
      "currency_name": "Guernsey Pound",
      "country_name": "Guernsey",
      "country_iso": "GG",
      "country_flag": "https://flagsapi.com/GG/flat/64.png"
    },
    {
      "currency_code": "GHS",
      "currency_name": "Ghanaian Cedi",
      "country_name": "Ghana",
      "country_iso": "GH",
      "country_flag": "https://flagsapi.com/GH/flat/64.png"
    },
    {
      "currency_code": "GIP",
      "currency_name": "Gibraltar Pound",
      "country_name": "Gibraltar",
      "country_iso": "GI",
      "country_flag": "https://flagsapi.com/GI/flat/64.png"
    },
    {
      "currency_code": "GMD",
      "currency_name": "Gambian Dalasi",
      "country_name": "The Gambia",
      "country_iso": "GM",
      "country_flag": "https://flagsapi.com/GM/flat/64.png"
    },
    {
      "currency_code": "GNF",
      "currency_name": "Guinean Franc",
      "country_name": "Guinea",
      "country_iso": "GN",
      "country_flag": "https://flagsapi.com/GN/flat/64.png"
    },
    {
      "currency_code": "GTQ",
      "currency_name": "Guatemalan Quetzal",
      "country_name": "Guatemala",
      "country_iso": "GT",
      "country_flag": "https://flagsapi.com/GT/flat/64.png"
    },
    {
      "currency_code": "GYD",
      "currency_name": "Guyanese Dollar",
      "country_name": "Guyana",
      "country_iso": "GY",
      "country_flag": "https://flagsapi.com/GY/flat/64.png"
    },
    {
      "currency_code": "HKD",
      "currency_name": "Hong Kong Dollar",
      "country_name": "Hong Kong",
      "country_iso": "HK",
      "country_flag": "https://flagsapi.com/HK/flat/64.png"
    },
    {
      "currency_code": "HNL",
      "currency_name": "Honduran Lempira",
      "country_name": "Honduras",
      "country_iso": "HN",
      "country_flag": "https://flagsapi.com/HN/flat/64.png"
    },
    {
      "currency_code": "HRK",
      "currency_name": "Croatian Kuna",
      "country_name": "Croatia",
      "country_iso": "HR",
      "country_flag": "https://flagsapi.com/HR/flat/64.png"
    },
    {
      "currency_code": "HTG",
      "currency_name": "Haitian Gourde",
      "country_name": "Haiti",
      "country_iso": "HT",
      "country_flag": "https://flagsapi.com/HT/flat/64.png"
    },
    {
      "currency_code": "HUF",
      "currency_name": "Hungarian Forint",
      "country_name": "Hungary",
      "country_iso": "HU",
      "country_flag": "https://flagsapi.com/HU/flat/64.png"
    },
    {
      "currency_code": "IDR",
      "currency_name": "Indonesian Rupiah",
      "country_name": "Indonesia",
      "country_iso": "ID",
      "country_flag": "https://flagsapi.com/ID/flat/64.png"
    },
    {
      "currency_code": "ILS",
      "currency_name": "Israeli New Shekel",
      "country_name": "Israel",
      "country_iso": "IL",
      "country_flag": "https://flagsapi.com/IL/flat/64.png"
    },
    {
      "currency_code": "IMP",
      "currency_name": "Manx Pound",
      "country_name": "Isle of Man",
      "country_iso": "IM",
      "country_flag": "https://flagsapi.com/IM/flat/64.png"
    },
    {
      "currency_code": "INR",
      "currency_name": "Indian Rupee",
      "country_name": "India",
      "country_iso": "IN",
      "country_flag": "https://flagsapi.com/IN/flat/64.png"
    },
    {
      "currency_code": "IQD",
      "currency_name": "Iraqi Dinar",
      "country_name": "Iraq",
      "country_iso": "IQ",
      "country_flag": "https://flagsapi.com/IQ/flat/64.png"
    },
    {
      "currency_code": "IRR",
      "currency_name": "Iranian Rial",
      "country_name": "Iran",
      "country_iso": "IR",
      "country_flag": "https://flagsapi.com/IR/flat/64.png"
    },
    {
      "currency_code": "ISK",
      "currency_name": "Icelandic Króna",
      "country_name": "Iceland",
      "country_iso": "IS",
      "country_flag": "https://flagsapi.com/IS/flat/64.png"
    },
    {
      "currency_code": "JEP",
      "currency_name": "Jersey Pound",
      "country_name": "Jersey",
      "country_iso": "JE",
      "country_flag": "https://flagsapi.com/JE/flat/64.png"
    },
    {
      "currency_code": "JMD",
      "currency_name": "Jamaican Dollar",
      "country_name": "Jamaica",
      "country_iso": "JM",
      "country_flag": "https://flagsapi.com/JM/flat/64.png"
    },
    {
      "currency_code": "JOD",
      "currency_name": "Jordanian Dinar",
      "country_name": "Jordan",
      "country_iso": "JO",
      "country_flag": "https://flagsapi.com/JO/flat/64.png"
    },
    {
      "currency_code": "JPY",
      "currency_name": "Japanese Yen",
      "country_name": "Japan",
      "country_iso": "JP",
      "country_flag": "https://flagsapi.com/JP/flat/64.png"
    },
    {
      "currency_code": "KES",
      "currency_name": "Kenyan Shilling",
      "country_name": "Kenya",
      "country_iso": "KE",
      "country_flag": "https://flagsapi.com/KE/flat/64.png"
    },
    {
      "currency_code": "KGS",
      "currency_name": "Kyrgyzstani Som",
      "country_name": "Kyrgyzstan",
      "country_iso": "KG",
      "country_flag": "https://flagsapi.com/KG/flat/64.png"
    },
    {
      "currency_code": "KHR",
      "currency_name": "Cambodian Riel",
      "country_name": "Cambodia",
      "country_iso": "KH",
      "country_flag": "https://flagsapi.com/KH/flat/64.png"
    },
    {
      "currency_code": "KID",
      "currency_name": "Kiribati Dollar",
      "country_name": "Kiribati",
      "country_iso": "KI",
      "country_flag": "https://flagsapi.com/KI/flat/64.png"
    },
    {
      "currency_code": "KMF",
      "currency_name": "Comorian Franc",
      "country_name": "Comoros",
      "country_iso": "KM",
      "country_flag": "https://flagsapi.com/KM/flat/64.png"
    },
    {
      "currency_code": "KRW",
      "currency_name": "South Korean Won",
      "country_name": "South Korea",
      "country_iso": "KR",
      "country_flag": "https://flagsapi.com/KR/flat/64.png"
    },
    {
      "currency_code": "KWD",
      "currency_name": "Kuwaiti Dinar",
      "country_name": "Kuwait",
      "country_iso": "KW",
      "country_flag": "https://flagsapi.com/KW/flat/64.png"
    },
    {
      "currency_code": "KYD",
      "currency_name": "Cayman Islands Dollar",
      "country_name": "Cayman Islands",
      "country_iso": "KY",
      "country_flag": "https://flagsapi.com/KY/flat/64.png"
    },
    {
      "currency_code": "KZT",
      "currency_name": "Kazakhstani Tenge",
      "country_name": "Kazakhstan",
      "country_iso": "KZ",
      "country_flag": "https://flagsapi.com/KZ/flat/64.png"
    },
    {
      "currency_code": "LAK",
      "currency_name": "Lao Kip",
      "country_name": "Laos",
      "country_iso": "LA",
      "country_flag": "https://flagsapi.com/LA/flat/64.png"
    },
    {
      "currency_code": "LBP",
      "currency_name": "Lebanese Pound",
      "country_name": "Lebanon",
      "country_iso": "LB",
      "country_flag": "https://flagsapi.com/LB/flat/64.png"
    },
    {
      "currency_code": "LKR",
      "currency_name": "Sri Lanka Rupee",
      "country_name": "Sri Lanka",
      "country_iso": "LK",
      "country_flag": "https://flagsapi.com/LK/flat/64.png"
    },
    {
      "currency_code": "LRD",
      "currency_name": "Liberian Dollar",
      "country_name": "Liberia",
      "country_iso": "LR",
      "country_flag": "https://flagsapi.com/LR/flat/64.png"
    },
    {
      "currency_code": "LSL",
      "currency_name": "Lesotho Loti",
      "country_name": "Lesotho",
      "country_iso": "LS",
      "country_flag": "https://flagsapi.com/LS/flat/64.png"
    },
    {
      "currency_code": "LYD",
      "currency_name": "Libyan Dinar",
      "country_name": "Libya",
      "country_iso": "LY",
      "country_flag": "https://flagsapi.com/LY/flat/64.png"
    },
    {
      "currency_code": "MAD",
      "currency_name": "Moroccan Dirham",
      "country_name": "Morocco",
      "country_iso": "MA",
      "country_flag": "https://flagsapi.com/MA/flat/64.png"
    },
    {
      "currency_code": "MDL",
      "currency_name": "Moldovan Leu",
      "country_name": "Moldova",
      "country_iso": "MD",
      "country_flag": "https://flagsapi.com/MD/flat/64.png"
    },
    {
      "currency_code": "MGA",
      "currency_name": "Malagasy Ariary",
      "country_name": "Madagascar",
      "country_iso": "MG",
      "country_flag": "https://flagsapi.com/MG/flat/64.png"
    },
    {
      "currency_code": "MKD",
      "currency_name": "Macedonian Denar",
      "country_name": "North Macedonia",
      "country_iso": "MK",
      "country_flag": "https://flagsapi.com/MK/flat/64.png"
    },
    {
      "currency_code": "MMK",
      "currency_name": "Burmese Kyat",
      "country_name": "Myanmar",
      "country_iso": "MM",
      "country_flag": "https://flagsapi.com/MM/flat/64.png"
    },
    {
      "currency_code": "MNT",
      "currency_name": "Mongolian Tögrög",
      "country_name": "Mongolia",
      "country_iso": "MN",
      "country_flag": "https://flagsapi.com/MN/flat/64.png"
    },
    {
      "currency_code": "MOP",
      "currency_name": "Macanese Pataca",
      "country_name": "Macau",
      "country_iso": "MO",
      "country_flag": "https://flagsapi.com/MO/flat/64.png"
    },
    {
      "currency_code": "MRU",
      "currency_name": "Mauritanian Ouguiya",
      "country_name": "Mauritania",
      "country_iso": "MR",
      "country_flag": "https://flagsapi.com/MR/flat/64.png"
    },
    {
      "currency_code": "MUR",
      "currency_name": "Mauritian Rupee",
      "country_name": "Mauritius",
      "country_iso": "MU",
      "country_flag": "https://flagsapi.com/MU/flat/64.png"
    },
    {
      "currency_code": "MVR",
      "currency_name": "Maldivian Rufiyaa",
      "country_name": "Maldives",
      "country_iso": "MV",
      "country_flag": "https://flagsapi.com/MV/flat/64.png"
    },
    {
      "currency_code": "MWK",
      "currency_name": "Malawian Kwacha",
      "country_name": "Malawi",
      "country_iso": "MW",
      "country_flag": "https://flagsapi.com/MW/flat/64.png"
    },
    {
      "currency_code": "MXN",
      "currency_name": "Mexican Peso",
      "country_name": "Mexico",
      "country_iso": "MX",
      "country_flag": "https://flagsapi.com/MX/flat/64.png"
    },
    {
      "currency_code": "MYR",
      "currency_name": "Malaysian Ringgit",
      "country_name": "Malaysia",
      "country_iso": "MY",
      "country_flag": "https://flagsapi.com/MY/flat/64.png"
    },
    {
      "currency_code": "MZN",
      "currency_name": "Mozambican Metical",
      "country_name": "Mozambique",
      "country_iso": "MZ",
      "country_flag": "https://flagsapi.com/MZ/flat/64.png"
    },
    {
      "currency_code": "NAD",
      "currency_name": "Namibian Dollar",
      "country_name": "Namibia",
      "country_iso": "NA",
      "country_flag": "https://flagsapi.com/NA/flat/64.png"
    },
    {
      "currency_code": "NGN",
      "currency_name": "Nigerian Naira",
      "country_name": "Nigeria",
      "country_iso": "NG",
      "country_flag": "https://flagsapi.com/NG/flat/64.png"
    },
    {
      "currency_code": "NIO",
      "currency_name": "Nicaraguan Córdoba",
      "country_name": "Nicaragua",
      "country_iso": "NI",
      "country_flag": "https://flagsapi.com/NI/flat/64.png"
    },
    {
      "currency_code": "NOK",
      "currency_name": "Norwegian Krone",
      "country_name": "Norway",
      "country_iso": "NO",
      "country_flag": "https://flagsapi.com/NO/flat/64.png"
    },
    {
      "currency_code": "NPR",
      "currency_name": "Nepalese Rupee",
      "country_name": "Nepal",
      "country_iso": "NP",
      "country_flag": "https://flagsapi.com/NP/flat/64.png"
    },
    {
      "currency_code": "NZD",
      "currency_name": "New Zealand Dollar",
      "country_name": "New Zealand",
      "country_iso": "NZ",
      "country_flag": "https://flagsapi.com/NZ/flat/64.png"
    },
    {
      "currency_code": "OMR",
      "currency_name": "Omani Rial",
      "country_name": "Oman",
      "country_iso": "OM",
      "country_flag": "https://flagsapi.com/OM/flat/64.png"
    },
    {
      "currency_code": "PAB",
      "currency_name": "Panamanian Balboa",
      "country_name": "Panama",
      "country_iso": "PA",
      "country_flag": "https://flagsapi.com/PA/flat/64.png"
    },
    {
      "currency_code": "PEN",
      "currency_name": "Peruvian Sol",
      "country_name": "Peru",
      "country_iso": "PE",
      "country_flag": "https://flagsapi.com/PE/flat/64.png"
    },
    {
      "currency_code": "PGK",
      "currency_name": "Papua New Guinean Kina",
      "country_name": "Papua New Guinea",
      "country_iso": "PG",
      "country_flag": "https://flagsapi.com/PG/flat/64.png"
    },
    {
      "currency_code": "PHP",
      "currency_name": "Philippine Peso",
      "country_name": "Philippines",
      "country_iso": "PH",
      "country_flag": "https://flagsapi.com/PH/flat/64.png"
    },
    {
      "currency_code": "PKR",
      "currency_name": "Pakistani Rupee",
      "country_name": "Pakistan",
      "country_iso": "PK",
      "country_flag": "https://flagsapi.com/PK/flat/64.png"
    },
    {
      "currency_code": "PLN",
      "currency_name": "Polish Złoty",
      "country_name": "Poland",
      "country_iso": "PL",
      "country_flag": "https://flagsapi.com/PL/flat/64.png"
    },
    {
      "currency_code": "PYG",
      "currency_name": "Paraguayan Guaraní",
      "country_name": "Paraguay",
      "country_iso": "PY",
      "country_flag": "https://flagsapi.com/PY/flat/64.png"
    },
    {
      "currency_code": "QAR",
      "currency_name": "Qatari Riyal",
      "country_name": "Qatar",
      "country_iso": "QA",
      "country_flag": "https://flagsapi.com/QA/flat/64.png"
    },
    {
      "currency_code": "RON",
      "currency_name": "Romanian Leu",
      "country_name": "Romania",
      "country_iso": "RO",
      "country_flag": "https://flagsapi.com/RO/flat/64.png"
    },
    {
      "currency_code": "RSD",
      "currency_name": "Serbian Dinar",
      "country_name": "Serbia",
      "country_iso": "RS",
      "country_flag": "https://flagsapi.com/RS/flat/64.png"
    },
    {
      "currency_code": "RUB",
      "currency_name": "Russian Ruble",
      "country_name": "Russia",
      "country_iso": "RU",
      "country_flag": "https://flagsapi.com/RU/flat/64.png"
    },
    {
      "currency_code": "RWF",
      "currency_name": "Rwandan Franc",
      "country_name": "Rwanda",
      "country_iso": "RW",
      "country_flag": "https://flagsapi.com/RW/flat/64.png"
    },
    {
      "currency_code": "SAR",
      "currency_name": "Saudi Riyal",
      "country_name": "Saudi Arabia",
      "country_iso": "SA",
      "country_flag": "https://flagsapi.com/SA/flat/64.png"
    },
    {
      "currency_code": "SBD",
      "currency_name": "Solomon Islands Dollar",
      "country_name": "Solomon Islands",
      "country_iso": "SB",
      "country_flag": "https://flagsapi.com/SB/flat/64.png"
    },
    {
      "currency_code": "SCR",
      "currency_name": "Seychellois Rupee",
      "country_name": "Seychelles",
      "country_iso": "SC",
      "country_flag": "https://flagsapi.com/SC/flat/64.png"
    },
    {
      "currency_code": "SDG",
      "currency_name": "Sudanese Pound",
      "country_name": "Sudan",
      "country_iso": "SD",
      "country_flag": "https://flagsapi.com/SD/flat/64.png"
    },
    {
      "currency_code": "SEK",
      "currency_name": "Swedish Krona",
      "country_name": "Sweden",
      "country_iso": "SE",
      "country_flag": "https://flagsapi.com/SE/flat/64.png"
    },
    {
      "currency_code": "SGD",
      "currency_name": "Singapore Dollar",
      "country_name": "Singapore",
      "country_iso": "SG",
      "country_flag": "https://flagsapi.com/SG/flat/64.png"
    },
    {
      "currency_code": "SHP",
      "currency_name": "Saint Helena Pound",
      "country_name": "Saint Helena",
      "country_iso": "SH",
      "country_flag": "https://flagsapi.com/SH/flat/64.png"
    },
    {
      "currency_code": "SLE",
      "currency_name": "Sierra Leonean Leone",
      "country_name": "Sierra Leone",
      "country_iso": "SL",
      "country_flag": "https://flagsapi.com/SL/flat/64.png"
    },
    {
      "currency_code": "SOS",
      "currency_name": "Somali Shilling",
      "country_name": "Somalia",
      "country_iso": "SO",
      "country_flag": "https://flagsapi.com/SO/flat/64.png"
    },
    {
      "currency_code": "SRD",
      "currency_name": "Surinamese Dollar",
      "country_name": "Suriname",
      "country_iso": "SR",
      "country_flag": "https://flagsapi.com/SR/flat/64.png"
    },
    {
      "currency_code": "SSP",
      "currency_name": "South Sudanese Pound",
      "country_name": "South Sudan",
      "country_iso": "SS",
      "country_flag": "https://flagsapi.com/SS/flat/64.png"
    },
    {
      "currency_code": "STN",
      "currency_name": "São Tomé and Príncipe Dobra",
      "country_name": "São Tomé and Príncipe",
      "country_iso": "ST",
      "country_flag": "https://flagsapi.com/ST/flat/64.png"
    },
    {
      "currency_code": "SYP",
      "currency_name": "Syrian Pound",
      "country_name": "Syria",
      "country_iso": "SY",
      "country_flag": "https://flagsapi.com/SY/flat/64.png"
    },
    {
      "currency_code": "SZL",
      "currency_name": "Eswatini Lilangeni",
      "country_name": "Swaziland",
      "country_iso": "SZ",
      "country_flag": "https://flagsapi.com/SZ/flat/64.png"
    },
    {
      "currency_code": "THB",
      "currency_name": "Thai Baht",
      "country_name": "Thailand",
      "country_iso": "TH",
      "country_flag": "https://flagsapi.com/TH/flat/64.png"
    },
    {
      "currency_code": "TJS",
      "currency_name": "Tajikistani Somoni",
      "country_name": "Tajikistan",
      "country_iso": "TJ",
      "country_flag": "https://flagsapi.com/TJ/flat/64.png"
    },
    {
      "currency_code": "TMT",
      "currency_name": "Turkmenistan Manat",
      "country_name": "Turkmenistan",
      "country_iso": "TM",
      "country_flag": "https://flagsapi.com/TM/flat/64.png"
    },
    {
      "currency_code": "TND",
      "currency_name": "Tunisian Dinar",
      "country_name": "Tunisia",
      "country_iso": "TN",
      "country_flag": "https://flagsapi.com/TN/flat/64.png"
    },
    {
      "currency_code": "TOP",
      "currency_name": "Tongan Paʻanga",
      "country_name": "Tonga",
      "country_iso": "TO",
      "country_flag": "https://flagsapi.com/TO/flat/64.png"
    },
    {
      "currency_code": "TRY",
      "currency_name": "Turkish Lira",
      "country_name": "Turkey",
      "country_iso": "TR",
      "country_flag": "https://flagsapi.com/TR/flat/64.png"
    },
    {
      "currency_code": "TTD",
      "currency_name": "Trinidad and Tobago Dollar",
      "country_name": "Trinidad and Tobago",
      "country_iso": "TT",
      "country_flag": "https://flagsapi.com/TT/flat/64.png"
    },
    {
      "currency_code": "TVD",
      "currency_name": "Tuvaluan Dollar",
      "country_name": "Tuvalu",
      "country_iso": "TV",
      "country_flag": "https://flagsapi.com/TV/flat/64.png"
    },
    {
      "currency_code": "TWD",
      "currency_name": "New Taiwan Dollar",
      "country_name": "Taiwan",
      "country_iso": "TW",
      "country_flag": "https://flagsapi.com/TW/flat/64.png"
    },
    {
      "currency_code": "TZS",
      "currency_name": "Tanzanian Shilling",
      "country_name": "Tanzania",
      "country_iso": "TZ",
      "country_flag": "https://flagsapi.com/TZ/flat/64.png"
    },
    {
      "currency_code": "UAH",
      "currency_name": "Ukrainian Hryvnia",
      "country_name": "Ukraine",
      "country_iso": "UA",
      "country_flag": "https://flagsapi.com/UA/flat/64.png"
    },
    {
      "currency_code": "UGX",
      "currency_name": "Ugandan Shilling",
      "country_name": "Uganda",
      "country_iso": "UG",
      "country_flag": "https://flagsapi.com/UG/flat/64.png"
    },
    {
      "currency_code": "USD",
      "currency_name": "United States Dollar",
      "country_name": "United States",
      "country_iso": "US",
      "country_flag": "https://flagsapi.com/US/flat/64.png"
    },
    {
      "currency_code": "UYU",
      "currency_name": "Uruguayan Peso",
      "country_name": "Uruguay",
      "country_iso": "UY",
      "country_flag": "https://flagsapi.com/UY/flat/64.png"
    },
    {
      "currency_code": "UZS",
      "currency_name": "Uzbekistani So'm",
      "country_name": "Uzbekistan",
      "country_iso": "UZ",
      "country_flag": "https://flagsapi.com/UZ/flat/64.png"
    },
    {
      "currency_code": "VES",
      "currency_name": "Venezuelan Bolívar Soberano",
      "country_name": "Venezuela",
      "country_iso": "VE",
      "country_flag": "https://flagsapi.com/VE/flat/64.png"
    },
    {
      "currency_code": "VND",
      "currency_name": "Vietnamese Đồng",
      "country_name": "Vietnam",
      "country_iso": "VN",
      "country_flag": "https://flagsapi.com/VN/flat/64.png"
    },
    {
      "currency_code": "VUV",
      "currency_name": "Vanuatu Vatu",
      "country_name": "Vanuatu",
      "country_iso": "VU",
      "country_flag": "https://flagsapi.com/VU/flat/64.png"
    },
    {
      "currency_code": "WST",
      "currency_name": "Samoan Tālā",
      "country_name": "Samoa",
      "country_iso": "WS",
      "country_flag": "https://flagsapi.com/WS/flat/64.png"
    },
    {
      "currency_code": "YER",
      "currency_name": "Yemeni Rial",
      "country_name": "Yemen",
      "country_iso": "YE",
      "country_flag": "https://flagsapi.com/YE/flat/64.png"
    },
    {
      "currency_code": "ZAR",
      "currency_name": "South African Rand",
      "country_name": "South Africa",
      "country_iso": "ZA",
      "country_flag": "https://flagsapi.com/ZA/flat/64.png"
    },
    {
      "currency_code": "ZMW",
      "currency_name": "Zambian Kwacha",
      "country_name": "Zambia",
      "country_iso": "ZM",
      "country_flag": "https://flagsapi.com/ZM/flat/64.png"
    },
    {
      "currency_code": "ZWL",
      "currency_name": "Zimbabwean Dollar",
      "country_name": "Zimbabwe",
      "country_iso": "ZW",
      "country_flag": "https://flagsapi.com/ZW/flat/64.png"
    }
  ];

export default countryData;