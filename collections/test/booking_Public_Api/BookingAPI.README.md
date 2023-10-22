### BookingAPI
   - Status
  - GET Status JSON `{{endpoint}}/hotel-api/1.0/status`

  
<details>
<summary>Description</summary>

Operation to check the working condition of our API

</details>
 
 ---
  - GET Status XML `{{endpoint}}/hotel-api/1.0/status`

  
<details>
<summary>Description</summary>

Operation to check the working condition of our API

</details>
 
 ---
  - Availability
  - Availability JSON
  - POST Availability by hotel code `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```json
{
    "stay": {
        "checkIn": "2020-06-15",
        "checkOut": "2020-06-16"
    },
    "occupancies": [
        {
            "rooms": 1,
            "adults": 2,
            "children": 0
        }
    ],
    "hotels": {
        "hotel": [
            77,
            168,
            264,
            265,
            297,
            311
        ]
    }
}
  ```
  
<details>
<summary>Description</summary>

Hotel code list search. 

In 'examples' you can find different cases of requests and responses.

</details>
 
 ---
  - POST Availability by geolocation `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```json
{
    "stay": {
        "checkIn": "2020-06-15",
        "checkOut": "2020-06-16"
    },
    "occupancies": [
        {
            "rooms": 1,
            "adults": 1,
            "children": 0
        }
    ],
    "geolocation": {
        "latitude": 39.57119,
        "longitude": 2.646633999999949,
        "radius": 20,
        "unit": "km"
    }
}
  ```
  
<details>
<summary>Description</summary>

GPS and ratio search. 

In 'examples' you can find different cases of requests and responses.

</details>
 
 ---
  - POST Filter by room type `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```json
{
    "stay": {
        "checkIn": "2020-06-15",
        "checkOut": "2020-06-16"
    },
    "occupancies": [
        {
            "rooms": 1,
            "adults": 2,
            "children": 0
        }
    ],
    "hotels": {
        "hotel": [
            77,
            168,
            264,
            265,
            297,
            311
        ]
    },
    "rooms": {
        "included": true,
        "room": [
            "DBT.ST"
        ]
    }
}
  ```
  
<details>
<summary>Description</summary>

Availability filtering by room type.

</details>
 
 ---
  - POST Filter by keyword `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```json
{
    "stay": {
        "checkIn": "2020-06-15",
        "checkOut": "2020-06-16"
    },
    "occupancies": [
        {
            "rooms": 1,
            "adults": 1,
            "children": 0
        }
    ],
    "hotels": {
        "hotel": [
            77,
            168,
            264,
            265,
            297,
            311
        ]
    },
    "keywords": {
        "keyword": [
            34,
            38,
            100
        ]
    }
}
  ```
  
<details>
<summary>Description</summary>

Availability filtering by keyword.

</details>
 
 ---
  - POST Filter by accommodation type `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```json
{
    "stay": {
        "checkIn": "2020-06-15",
        "checkOut": "2020-06-16"
    },
    "occupancies": [
        {
            "rooms": 1,
            "adults": 1,
            "children": 0
        }
    ],
    "hotels": {
        "hotel": [
            77,
            168,
            264,
            265,
            297,
            311
        ]
    },
    "accommodations": [
        "HOTEL",
        "HOSTEL"
    ]
}
  ```
  
<details>
<summary>Description</summary>

Availability filtering by accommodation type.

</details>
 
 ---
  - POST Filter by board code  `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```json
{
    "stay": {
        "checkIn": "2020-06-15",
        "checkOut": "2020-06-16"
    },
    "occupancies": [
        {
            "rooms": 1,
            "adults": 1,
            "children": 0
        }
    ],
    "hotels": {
        "hotel": [
            77,
            168,
            264,
            265,
            297,
            311
        ]
    },
    "boards": {
        "included": true,
        "board": [
            "RO",
            "BB"
        ]
    }
}
  ```
  
<details>
<summary>Description</summary>

Availability filtering by board code.

</details>
 
 ---
  - POST Filter by review rating `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```json
{
    "stay": {
        "checkIn": "2020-06-15",
        "checkOut": "2020-06-16"
    },
    "occupancies": [
        {
            "rooms": 1,
            "adults": 1,
            "children": 0
        }
    ],
    "hotels": {
        "hotel": [
            77,
            168,
            264,
            265,
            297,
            311
        ]
    },
    "reviews": [
        {
            "type": "HOTELBEDS",
            "maxRate": 5,
            "minRate": 1,
            "minReviewCount": 3
        }
    ]
}
  ```
  
<details>
<summary>Description</summary>

Availability filtering by Hotelbeds or TripAdvisor rating. 

In 'examples' you can find different cases of requests and responses.

</details>
 
 ---
  - POST Other filters `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```json
{
    "stay": {
        "checkIn": "2020-06-15",
        "checkOut": "2020-06-16"
    },
    "occupancies": [
        {
            "rooms": 1,
            "adults": 1,
            "children": 0
        }
    ],
    "hotels": {
        "hotel": [
            77,
            168,
            264,
            265,
            297,
            311
        ]
    },
    "filter": {
        "minRate": 100,
        "maxRate": 1700,
        "minCategory": 3,
        "maxCategory": 5,
        "maxRooms": 3,
        "maxRatesPerRoom": 3,
        "paymentType": "AT_HOTEL",
        "packaging": true,
        "hotelPackage": "YES",
        "contract": "CG-FIT B2B"
    }
}
  ```
  
<details>
<summary>Description</summary>

Other filters available in the request:
-minRate/maxRate[price limit]
-minCategory/maxCategory[1~5]
-paymentType[AT_WEB/AT_HOTEL/BOTH]
-maxRatesPerRoom[integer]
-packaging[TRUE/FALSE]
-hotelPackage[YES/NO/BOTH]

</details>
 
 ---
  - POST Availability with inclusions `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```json
{
    "stay": {
        "checkIn": "2020-06-15",
        "checkOut": "2020-06-16"
    },
    "occupancies": [
        {
            "rooms": 1,
            "adults": 2,
            "children": 0
        }
    ],
    "hotels": {
        "hotel": [
            1092,
            39860,
            100338
        ]
    },
    "inclusions": [
        "RESIDENT_RATES"
    ]
}
  ```
  
<details>
<summary>Description</summary>

Hotel code list search. 

In 'examples' you can find different cases of requests and responses.

</details>
 
 ---
  - Availability XML
  - POST Availability by hotel code `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```xml
<availabilityRQ xmlns="http://www.hotelbeds.com/schemas/messages" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<stay checkIn="2020-06-15" checkOut="2020-06-16"/>
	<occupancies>
		<occupancy rooms="1" adults="2" children="0"/>
	</occupancies>
	<hotels>
		<hotel>77</hotel>
		<hotel>168</hotel>
		<hotel>264</hotel>
		<hotel>265</hotel>
		<hotel>265</hotel>
		<hotel>297</hotel>
		<hotel>311</hotel>
	</hotels>
</availabilityRQ>
  ```
  
<details>
<summary>Description</summary>

Hotel code list search. 

In 'examples' you can find different cases of requests and responses.

</details>
 
 ---
  - POST Availability by geolocation `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```xml
<availabilityRQ xmlns="http://www.hotelbeds.com/schemas/messages" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<stay checkIn="2020-06-15" checkOut="2020-06-16"/>
	<occupancies>
		<occupancy rooms="1" adults="2" children="0"/>
	</occupancies>
	<geolocation latitude="39.57119" longitude="2.646633999999949" radius="20" unit="km"/>
</availabilityRQ>
  ```
  
<details>
<summary>Description</summary>

GPS and ratio search. 

In 'examples' you can find different cases of requests and responses.

</details>
 
 ---
  - POST Filter by room type `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```xml
<availabilityRQ xmlns="http://www.hotelbeds.com/schemas/messages" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<stay checkIn="2020-06-15" checkOut="2020-06-16"/>
	<occupancies>
		<occupancy rooms="1" adults="2" children="0"/>
	</occupancies>
	<hotels>
		<hotel>77</hotel>
		<hotel>168</hotel>
		<hotel>264</hotel>
		<hotel>265</hotel>
		<hotel>265</hotel>
		<hotel>297</hotel>
		<hotel>311</hotel>
	</hotels>
	<rooms included="True">
		<room>DBT.ST</room>
	</rooms>
</availabilityRQ>
  ```
  
<details>
<summary>Description</summary>

Availability filtering by room type.

</details>
 
 ---
  - POST Filter by keyword `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```xml
<availabilityRQ xmlns="http://www.hotelbeds.com/schemas/messages" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<stay checkIn="2020-06-15" checkOut="2020-06-16"/>
	<occupancies>
		<occupancy rooms="1" adults="2" children="0"/>
	</occupancies>
	<hotels>
		<hotel>77</hotel>
		<hotel>168</hotel>
		<hotel>264</hotel>
		<hotel>265</hotel>
		<hotel>265</hotel>
		<hotel>297</hotel>
		<hotel>311</hotel>
	</hotels>
	<keywords>
		<keyword>34</keyword>
		<keyword>38</keyword>
		<keyword>100</keyword>
	</keywords>
</availabilityRQ>
  ```
  
<details>
<summary>Description</summary>

Availability filtering by keyword.

</details>
 
 ---
  - POST Filter by accommodation type `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```xml
<availabilityRQ xmlns="http://www.hotelbeds.com/schemas/messages" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">	
	<stay checkIn="2020-06-15" checkOut="2020-06-16"/>	
	<occupancies>
		<occupancy rooms="1" adults="2" children="0"/>
	</occupancies>
	<hotels>
		<hotel>77</hotel>
		<hotel>168</hotel>
		<hotel>264</hotel>
		<hotel>265</hotel>
		<hotel>265</hotel>
		<hotel>297</hotel>
		<hotel>311</hotel>
	</hotels>
	<accommodations>
		<accommodation>HOTEL</accommodation>
		<accommodation>HOSTEL</accommodation>
	</accommodations>
</availabilityRQ>

  ```
  
<details>
<summary>Description</summary>

Availability filtering by accommodation type.

</details>
 
 ---
  - POST Filter by board code `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```xml
<availabilityRQ xmlns="http://www.hotelbeds.com/schemas/messages" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<stay checkIn="2020-06-15" checkOut="2020-06-16"/>
	<occupancies>
		<occupancy rooms="1" adults="2" children="0"/>
	</occupancies>
	<hotels>
		<hotel>77</hotel>
		<hotel>168</hotel>
		<hotel>264</hotel>
		<hotel>265</hotel>
		<hotel>265</hotel>
		<hotel>297</hotel>
		<hotel>311</hotel>
	</hotels>
	<boards included="true">
		<board>RO</board>
		<board>BB</board>
	</boards>
</availabilityRQ>
  ```
  
<details>
<summary>Description</summary>

Availability filtering by board code.

</details>
 
 ---
  - POST Filter by review rating `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```xml
<availabilityRQ xmlns="http://www.hotelbeds.com/schemas/messages" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<stay checkIn="2020-06-15" checkOut="2020-06-16"/>
	<occupancies>
		<occupancy rooms="1" adults="2" children="0"/>
	</occupancies>
	<hotels>
		<hotel>77</hotel>
		<hotel>168</hotel>
		<hotel>264</hotel>
		<hotel>265</hotel>
		<hotel>265</hotel>
		<hotel>297</hotel>
		<hotel>311</hotel>
	</hotels>
	<reviews>
		<review type="HOTELBEDS" maxRate="5" minRate="1" minReviewCount="3"/>
	</reviews>
</availabilityRQ>
  ```
  
<details>
<summary>Description</summary>

Availability filtering by Hotelbeds or TripAdvisor rating. 

In 'examples' you can find different cases of requests and responses.

</details>
 
 ---
  - POST Other filters `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```xml
<availabilityRQ xmlns="http://www.hotelbeds.com/schemas/messages" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<stay checkIn="2020-06-15" checkOut="2020-06-16"/>
	<occupancies>
		<occupancy rooms="1" adults="2" children="0"/>
	</occupancies>
	<hotels>
		<hotel>77</hotel>
		<hotel>168</hotel>
		<hotel>264</hotel>
		<hotel>265</hotel>
		<hotel>265</hotel>
		<hotel>297</hotel>
		<hotel>311</hotel>
	</hotels>
	<filter
		minRate="100.000"
		maxRate="1700.000"
		minCategory="3"
		maxCategory="5"
		maxRooms="3"
		maxRatesPerRoom="3"
		paymentType="AT_HOTEL"
		packaging="TRUE"
		hotelPackage="YES"
		contract="CG-FIT B2B"/>
</availabilityRQ>
  ```
  
<details>
<summary>Description</summary>

Other filters available in the request:
-minRate/maxRate[price limit]
-minCategory/maxCategory[1~5]
-paymentType[AT_WEB/AT_HOTEL/BOTH]
-maxRatesPerRoom[integer]
-packaging[TRUE/FALSE]
-hotelPackage[YES/NO/BOTH]

</details>
 
 ---
  - POST Availability with inclusions `{{endpoint}}/hotel-api/1.0/hotels`

  
  *Body*:
  ```xml
<availabilityRQ xmlns="http://www.hotelbeds.com/schemas/messages" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<stay checkIn="2020-06-15" checkOut="2020-06-16"/>
	<occupancies>
		<occupancy rooms="1" adults="2" children="0"/>
	</occupancies>
	<hotels>
		<hotel>39860</hotel>
		<hotel>1092</hotel>
		<hotel>100338</hotel>
	</hotels>
	<inclusions>
		<inclusion>RESIDENT_RATES</inclusion>
	</inclusions>
</availabilityRQ>
  ```
  
<details>
<summary>Description</summary>

Hotel code list search. 

In 'examples' you can find different cases of requests and responses.

</details>
 
 ---
  - CheckRate
  - CheckRate JSON
  - POST CheckRate `{{endpoint}}/hotel-api/1.0/checkrates`

  
  *Body*:
  ```json
{
    "rooms": [
        {
            "rateKey": "20190315|20190316|W|1|311|DBT.ST|PVP-SHORTSTAY|AI||1~2~0||N@08870BAE87754721542353710729AAES00000010000000007221346"
        }
    ]
}
  ```
  
<details>
<summary>Description</summary>

Standard CheckRate operation. In 'examples' you can find different cases of requests and responses.

</details>
 
 ---
  - CheckRate XML
  - POST CheckRate `{{endpoint}}/hotel-api/1.0/checkrates`

  
  *Body*:
  ```xml
<checkRateRQ xmlns="http://www.hotelbeds.com/schemas/messages" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<rooms>
		<room rateKey="20190315|20190316|W|1|311|DBT.ST|PVP-SHORTSTAY|AI||1~2~0||N@08870BAE87754721542353710729AAES00000010000000007221346"/>
	</rooms>
</checkRateRQ>
  ```
  
<details>
<summary>Description</summary>

Standard CheckRate operation. In 'examples' you can find different cases of requests and responses.

</details>
 
 ---
  - Booking
  - Booking JSON
  - POST Booking `{{endpoint}}/hotel-api/1.0/bookings`

  
  *Body*:
  ```json
{
    "holder": {
        "name": "HolderFirstName",
        "surname": "HolderLastName"
    },
    "rooms": [
        {
            "rateKey": "20190315|20190316|W|1|311|DBT.ST|PVP-SHORTSTAY|AI||1~2~0||N@08870BAE87754721542353710729AAES00000010000000007221346",
            "paxes": [
                {
                    "roomId": 1,
                    "type": "AD",
                    "name": "First Adult Name",
                    "surname": "Surname"
                },
                {
                    "roomId": 1,
                    "type": "AD",
                    "name": "Second Adult Name",
                    "surname": "Surname"
                }
            ]
        }
    ],
    "clientReference": "IntegrationAgency",
    "remark": "Booking remarks are to be written here.",
    "tolerance": 2
}
  ```
  
<details>
<summary>Description</summary>

Standard Booking operation. In 'examples' you can find different cases of requests and responses.

</details>
 
 ---
  - POST Booking (creditCard) `{{secure_endpoint}}/hotel-api/1.0/bookings`

  
  *Body*:
  ```json
{
    "holder": {
        "name": "HolderFirstName",
        "surname": "HolderLastName"
    },
    "rooms": [
        {
            "rateKey": "20190615|20190616|W|1|1533|DBL.ST|CG BAR RO|RO||1~2~0||N@03DE28CA7DB742F1542362926996AAES0000008000000000725fb2",
            "paxes": [
                {
                    "roomId": 1,
                    "type": "AD",
                    "name": "First Adult Name",
                    "surname": "Surname"
                },
                {
                    "roomId": 1,
                    "type": "AD",
                    "name": "Second Adult Name",
                    "surname": "Surname"
                }
            ]
        }
    ],
    "clientReference": "IntegrationAgency",
    "remark": "Booking remarks are to be written here.",
    "tolerance": 2,
    "paymentData": {
        "paymentCard": {
            "cardHolderName": "CardHolderName",
            "cardType": "VI",
            "cardNumber": "4444333322221111",
            "expiryDate": "0320",
            "cardCVC": "123"
        },
        "contactData": {
            "email": "integration@hotelbeds.com",
            "phoneNumber": "654654654"
        }
    }
}
  ```
  
<details>
<summary>Description</summary>

AT_HOTEL booking example

</details>
 
 ---
  - POST Booking (prepaymentCard) `{{secure_endpoint}}/hotel-api/1.0/bookings`

  
  *Body*:
  ```json
{
    "holder": {
        "name": "HolderFirstName",
        "surname": "HolderLastName"
    },
    "rooms": [
        {
            "rateKey": "20190615|20190616|W|1|1533|DBL.ST|CG BAR RO|RO||1~2~0||N@03DE28CA7DB742F1542362926996AAES0000008000000000725fb2",
            "paxes": [
                {
                    "roomId": 1,
                    "type": "AD",
                    "name": "First Adult Name",
                    "surname": "Surname"
                },
                {
                    "roomId": 1,
                    "type": "AD",
                    "name": "Second Adult Name",
                    "surname": "Surname"
                }
            ]
        }
    ],
    "clientReference": "IntegrationAgency",
    "remark": "Booking remarks are to be written here.",
    "tolerance": 2,
    "paymentData": {
        "paymentCard": {
            "cardHolderName": "CardHolderName",
            "cardType": "VI",
            "cardNumber": "4444333322221111",
            "expiryDate": "0320",
            "cardCVC": "123"
        },
        "contactData": {
            "email": "integration@hotelbeds.com",
            "phoneNumber": "654654654"
        },
        "billingAddress": {
            "address1": "Cambridge Science Park",
            "address2": "Milton Road",
            "city": "Cambridge",
            "state": "Cambridgeshire",
            "postalCode": "CB4 0FZ",
            "countryCode": "GB"
        },
        "webPartner": "1",
        "device": {
            "id": "abcd",
            "ip": "123.12.12.12.21"
        }
    }
}
  ```
  
<details>
<summary>Description</summary>

Standard Booking operation. In 'examples' you can find different cases of requests and responses.

</details>
 
 ---
  - Booking XML
  - POST Booking `{{endpoint}}/hotel-api/1.2/bookings`

  
  *Body*:
  ```xml
<bookingRQ xmlns="http://www.hotelbeds.com/schemas/messages" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <holder name="HolderFirstName" surname="HolderLastName"/>
    <clientReference>IntegrationAgency</clientReference>
    <rooms>
        <room rateKey="20160615|20160620|W|52|1|DBL.ST|ID_B2B_25|RO|EM4TIES|1~1~0||N@1884739731">
            <paxes>
                <pax roomId="1" type="AD" name="Adult Name" surname="Surname"/>
            </paxes>
        </room>
    </rooms>
    <remark>Booking remarks are to be written here.</remark>
    <tolerance>2.00</tolerance>
</bookingRQ>
  ```
  
<details>
<summary>Description</summary>

Standard Booking operation. In 'examples' you can find different cases of requests and responses.

</details>
 
 ---
  - POST Booking (creditCard) `{{secure_endpoint}}/hotel-api/1.0/bookings`

  
  *Body*:
  ```xml
<bookingRQ xmlns="http://www.hotelbeds.com/schemas/messages" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<holder name="HolderFirstName" surname="HolderLastName"/>
	<clientReference>IntegrationAgency</clientReference>
	<rooms>
		<room rateKey="20171219|20171220|W|1|182125|DBT.ST|CG-TODOS1|BB||1~2~0||N@7087EB1490BC48E683817263207680D7">
			<paxes>
				<pax roomId="1" type="AD" name="First Adult Name" surname="Surname"/>
				<pax roomId="1" type="AD" name="Second Adult Name" surname="Surname"/>
			</paxes>
		</room>
	</rooms>
	<remark>Booking remarks are to be written here.</remark>
	<tolerance>2.00</tolerance>
	<paymentData>
		<paymentCard>
			<cardHolderName>CardHolderName</cardHolderName>
			<cardType>VI</cardType>
			<cardNumber>4444333322221111</cardNumber>
			<expiryDate>0320</expiryDate>
			<cardCVC>123</cardCVC>
		</paymentCard>
		<contactData>
			<email>integration@hotelbeds.com</email>
			<phoneNumber>654654654</phoneNumber>
		</contactData>
	</paymentData>
</bookingRQ>
  ```
  
<details>
<summary>Description</summary>

AT_HOTEL booking example

</details>
 
 ---
  - POST Booking (prepaymentCard) `{{secure_endpoint}}/hotel-api/1.0/bookings`

  
  *Body*:
  ```xml
<bookingRQ xmlns="http://www.hotelbeds.com/schemas/messages" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
	<holder name="HolderFirstName" surname="HolderLastName"/>
	<clientReference>IntegrationAgency</clientReference>
	<rooms>
		<room rateKey="20160615|20160620|W|52|1|DBL.ST|ID_B2B_25|RO|EM4TIES|1~1~0||N@1884739731">
			<paxes>
				<pax roomId="1" type="AD" name="Adult Name" surname="Surname"/>
			</paxes>
		</room>
	</rooms>
	<remark>Booking remarks are to be written here.</remark>
	<tolerance>2.00</tolerance>
	<paymentData>
		<paymentCard>
			<cardHolderName>CardHolderName</cardHolderName>
			<cardType>VI</cardType>
			<cardNumber>4444333322221111</cardNumber>
			<expiryDate>0320</expiryDate>
			<cardCVC>123</cardCVC>
		</paymentCard>
		<contactData>
			<email>integration@hotelbeds.com</email>
			<phoneNumber>654654654</phoneNumber>
		</contactData>
		<billingAddress>
			<address1>Cambridge Science Park</address1>
			<address2>Milton Road</address2>
			<city>Cambridge</city>
			<state>Cambridgeshire</state>
			<postalCode>CB4 0FZ</postalCode>
			<countryCode>GB</countryCode>
		</billingAddress>
		<webPartner>1</webPartner>
		<device id="abcd" ip="123.12.12.12.21"/>
	</paymentData>
</bookingRQ>
  ```
  
<details>
<summary>Description</summary>

Standard Booking operation. In 'examples' you can find different cases of requests and responses.

</details>
 
 ---
  - Post booking
  - Post booking  JSON
  - GET BookingDetail `{{endpoint}}/hotel-api/1.0/bookings/{{bookingReference}}`

  
<details>
<summary>Description</summary>

The BookingDetail operation retuns all the information of the requested booking.

</details>
 
 ---
  - GET BookingList `{{endpoint}}/hotel-api/1.0/bookings?from=1&to=25&start={{fromDate}}&end={{toDate}}`

  
<details>
<summary>Description</summary>

The BookingList operation returns a list of bookings based on the search criteria.

</details>
 
 ---
  - DELETE BookingCancellation `{{endpoint}}/hotel-api/1.0/bookings/{{bookingReference}}?cancellationFlag=CANCELLATION`

  
  *Body*:
  
<details>
<summary>Description</summary>

The BookingCancellation operation cancels a booking or simulates a booking cancellation.

</details>
 
 ---
  - PUT BookingChange `{{endpoint}}/hotel-api/1.0/bookings/{{bookingReference}}`

  
  *Body*:
  ```json
{
    "mode": "SIMULATION",
    "booking": {
        "reference": "52-1274417",
        "clientReference": "INTEGRATIONAGENCY",
        "creationDate": "2017-08-31",
        "status": "CONFIRMED",
        "modificationPolicies": {
            "cancellation": true,
            "modification": true
        },
        "creationUser": "wuupfvswdqfz342cejxfv3ku",
        "holder": {
            "name": "INTEGRATIONTESTFIRSTNAME",
            "surname": "INTEGRATIONTESTLASTNAME"
        },
        "hotel": {
            "checkOut": "2017-09-20",
            "checkIn": "2017-09-15",
            "code": 1,
            "name": "Villa Dorada",
            "categoryCode": "3EST",
            "categoryName": "3 STARS",
            "destinationCode": "SAL",
            "destinationName": "Salou Area / Costa Dorada",
            "zoneCode": 10,
            "zoneName": "Salou",
            "latitude": "41.06865947991072",
            "longitude": "1.1524744666303377",
            "rooms": [
                {
                    "status": "CONFIRMED",
                    "id": 1,
                    "code": "DBT.ST-3",
                    "name": "Double or Twin MONOPARENTAL 1 ADULT 2 CHILDREN",
                    "paxes": [
                        {
                            "roomId": 1,
                            "type": "AD",
                            "name": "First Adult Name",
                            "surname": "Surname"
                        },
                        {
                            "roomId": 1,
                            "type": "CH",
                            "age": 6,
                            "name": "Second Child Name"
                        },
                        {
                            "roomId": 1,
                            "type": "CH",
                            "age": 5,
                            "name": "First Child Name"
                        }
                    ],
                    "rates": [
                        {
                            "rateClass": "NOR",
                            "net": "302.26",
                            "rateComments": "1x Double or Twin Estimated total amount of taxes & fees for this booking: 2.50 Euro   payable on arrival  \r. Car park NO   . Key Collection 14:00 – 00:00. Check-in hour 14:00 – 00:00. . This rate is not applicable to Spain, Italy & Portugal market/country or passport holders otherwise the reservation will not be accepted or supplement fees can be charged on arrival.",
                            "paymentType": "AT_WEB",
                            "packaging": false,
                            "boardCode": "RO",
                            "boardName": "ROOM ONLY",
                            "cancellationPolicies": [
                                {
                                    "amount": "141.00",
                                    "from": "2017-09-14T23:59:00+02:00"
                                },
                                {
                                    "amount": "70.50",
                                    "from": "2017-09-12T23:59:00+02:00"
                                }
                            ],
                            "rooms": 1,
                            "adults": 1,
                            "children": 2
                        }
                    ]
                }
            ],
            "totalNet": "302.26",
            "currency": "EUR",
            "supplier": {
                "name": "HOTELBEDS PRODUCT,S.L.U.",
                "vatNumber": "ESB38877676"
            }
        },
        "totalNet": 302.26,
        "pendingAmount": 302.26,
        "currency": "EUR"
    }
}
  ```
  
<details>
<summary>Description</summary>

The BookingChange operation can be used to change (or simulate) different values of a booking or to partially cancel a booking (i.e: cancel a room of a two room reservation).

In 'examples' you can find different cases of requests and responses.

</details>
 
 ---
  - Post booking XML
  - GET BookingDetail `{{endpoint}}/hotel-api/1.0/bookings/{{bookingReference}}`

  
<details>
<summary>Description</summary>

The BookingDetail operation retuns all the information of the requested booking.

</details>
 
 ---
  - GET BookingList `{{endpoint}}/hotel-api/1.0/bookings?start={{startDate}}&end={{endDate}}&from=1&to=25`

  
<details>
<summary>Description</summary>

The BookingList operation returns a list of bookings based on the search criteria.

</details>
 
 ---
  - DELETE BookingCancellation `{{endpoint}}/hotel-api/1.0/bookings/{{bookingReference}}?cancellationFlag=CANCELLATION&language=ENG`

  
  *Body*:
  
<details>
<summary>Description</summary>

The BookingCancellation operation cancels a booking or simulates a booking cancellation.

</details>
 
 ---
  - PUT BookingChange `{{endpoint}}/hotel-api/1.0/bookings/{{bookingReference}}`

  
  *Body*:
  ```xml
<bookingChangeRQ xmlns="http://www.hotelbeds.com/schemas/messages" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <mode>SIMULATION</mode>
    <booking reference="52-1274418" clientReference="INTEGRATIONAGENCY" creationDate="2017-08-31" status="CONFIRMED" creationUser="wuupfvswdqfz342cejxfv3ku" totalNet="302.26" pendingAmount="302.26" currency="EUR">
        <modificationPolicies cancellation="true" modification="true"/>
        <holder name="INTEGRATIONTESTFIRSTNAME" surname="INTEGRATIONTESTLASTNAME"/>
        <hotel checkOut="2017-09-20" checkIn="2017-09-15" code="1" name="Villa Dorada" categoryCode="3EST" categoryName="3 STARS" destinationCode="SAL" destinationName="Salou Area / Costa Dorada" zoneCode="10" zoneName="Salou" latitude="41.06865947991072" longitude="1.1524744666303377" totalNet="302.26" currency="EUR">
            <rooms>
                <room status="CONFIRMED" id="1" code="DBT.ST-3" name="Double or Twin MONOPARENTAL 1 ADULT 2 CHILDREN">
                    <paxes>
                        <pax roomId="1" type="AD" name="First Adult Name" surname="Surname"/>
                        <pax roomId="1" type="CH" age="6" name="Second Child Name"/>
                        <pax roomId="1" type="CH" age="5" name="First Child Name"/>
                    </paxes>
                    <rates>
                        <rate rateClass="NOR" net="302.26" rateComments="1x Double or Twin Estimated total amount of taxes &amp; fees for this booking: 2.50 Euro   payable on arrival  &#xd;. Car park NO   . Key Collection 14:00 – 00:00. Check-in hour 14:00 – 00:00. . This rate is not applicable to Spain, Italy &amp; Portugal market/country or passport holders otherwise the reservation will not be accepted or supplement fees can be charged on arrival." paymentType="AT_WEB" packaging="false" boardCode="RO" boardName="ROOM ONLY" rooms="1" adults="1" children="2">
                            <cancellationPolicies>
                                <cancellationPolicy amount="141.00" from="2017-09-14T23:59:00+02:00"/>
                                <cancellationPolicy amount="70.50" from="2017-09-12T23:59:00+02:00"/>
                            </cancellationPolicies>
                        </rate>
                    </rates>
                </room>
            </rooms>
            <supplier name="HOTELBEDS PRODUCT,S.L.U." vatNumber="ESB38877676"/>
        </hotel>
    </booking>
</bookingChangeRQ>
  ```
  
<details>
<summary>Description</summary>

The BookingChange operation can be used to change (or simulate) different values of a booking or to partially cancel a booking (i.e: cancel a room of a two room reservation).

In 'examples' you can find different cases of requests and responses.

</details>
 
 ---