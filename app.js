const express = require('express');
const app = express();
const cors =require('cors');
const port = 3000;

const data = {
  briyani: {
    "statusCode": 0,
    "data": {
    "statusMessage": "done successfully",
    "pageOffset": {
    "nextOffset": "CJpqEJtYKID4uoC2+pLJSjDIDjgE",
    "widgetOffset": {
    "restaurantCountWidget": "",
    "inlineFacetFilter": "",
    "collectionV5RestaurantListWidget_SimRestoRelevance_food": "8",
    "collectionV5MastheadWidget": ""
    }
    },
    "cards": [
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
    "collectionId": "83639",
    "title": "Biryani",
    "description": "Taste these delectable classics, delectable biryanis to make your day.",
    "imageId": "COLLECTIONS/IMAGES/MERCH/2025/3/7/6b765643-8f10-4176-b1f4-5e096d4182c0_biryani nv (3) (1).png",
    "aspectRatio": "3.44",
    "cta": {
    "link": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani,biryani,ads_pc_biryani",
    "type": "collectionv2"
    },
    "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
    "count": "264 restaurants"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
    "sortConfigs": [
    {
    "key": "relevance",
    "title": "Relevance (Default)",
    "selected": true,
    "defaultSelection": true
    },
    {
    "key": "deliveryTimeAsc",
    "title": "Delivery Time"
    },
    {
    "key": "modelBasedRatingDesc",
    "title": "Rating"
    },
    {
    "key": "costForTwoAsc",
    "title": "Cost: Low to High"
    },
    {
    "key": "costForTwoDesc",
    "title": "Cost: High to Low"
    }
    ],
    "restaurantCount": 264,
    "facetList": [
    {
    "label": "10 Mins Delivery",
    "id": "isRestaurantBolt",
    "selection": "SELECT_TYPE_SINGLESELECT",
    "facetInfo": [
    {
    "label": "10 Mins Delivery",
    "id": "isRestaurantBoltfacetquery0",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_FLATTENED",
    "subLabel": "Filterby",
    "icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
    "selectedIcon": "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
    },
    {
    "label": "Veg/Non-Veg",
    "id": "isVeg",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Non Veg",
    "id": "isVegfacetquery0",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Pure Veg",
    "id": "isVegfacetquery1",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "subLabel": "Filterby",
    "openFilter": true
    },
    {
    "label": "Ratings",
    "id": "rating",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Ratings",
    "id": "ratingfacetquery0",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Ratings 4.0+",
    "id": "ratingfacetquery1",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Ratings 4.5+",
    "id": "ratingfacetquery2",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "subLabel": "Filterby",
    "openFilter": true
    },
    {
    "label": "Delivery Time",
    "id": "deliveryTime",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Less than 30 mins",
    "id": "deliveryTimefacetquery0",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Less than 45 mins",
    "id": "deliveryTimefacetquery1",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "subLabel": "Filterby",
    "openFilter": true
    },
    {
    "label": "Cost For Two",
    "id": "costForTwo",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Less than Rs. 300",
    "id": "costForTwofacetquery0",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Rs.300 - Rs.600",
    "id": "costForTwofacetquery1",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Greater than Rs. 600",
    "id": "costForTwofacetquery2",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "subLabel": "Filterby",
    "openFilter": true
    }
    ]
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
    "layout": {
    "rows": 1,
    "widgetPadding": {
    "left": 16,
    "right": 16
    },
    "scrollBar": {},
    "widgetTheme": {
    "defaultMode": {
    "backgroundColour": "#FFFFFF",
    "theme": "THEME_TYPE_LIGHT"
    },
    "darkMode": {
    "backgroundColour": "#1B3028",
    "theme": "THEME_TYPE_DARK"
    }
    }
    },
    "id": "restaurantCountWidget",
    "gridElements": {
    "infoWithStyle": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
    "text": "264 Restaurants to explore",
    "headerStyling": {
    "textSize": 15,
    "textColor": "text_color_highest_emphasis",
    "textFontName": "FONT_NAME_HEADER_H5",
    "maxLines": 1
    }
    }
    }
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "1013620",
    "name": "Big Bowl",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/24/cf06adc4-a816-4170-b023-83a41f36db89_1013620.jpg",
    "locality": "Koramangala",
    "areaName": "80 Feet Road",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Chinese",
    "Tibetan",
    "Desserts"
    ],
    "avgRating": 4.5,
    "parentId": "434792",
    "avgRatingString": "4.5",
    "totalRatingsString": "66",
    "promoted": true,
    "adTrackingId": "cid=26533709~p=0~adgrpid=26533709#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1013620~eid=6419182c-329c-4c55-9450-2d6f0041602f~srvts=1742232045616~collid=83639",
    "sla": {
    "deliveryTime": 47,
    "lastMileTravel": 6.7,
    "serviceability": "SERVICEABLE",
    "slaString": "45-50 mins",
    "lastMileTravelString": "6.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-18 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textExtendedBadges": {},
    "textBased": {},
    "imageBased": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹129",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "26533709",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=1013620&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "3241",
    "name": "Meghana Foods",
    "cloudinaryImageId": "iivuhjc2mswi9lublktf",
    "locality": "Residency Road",
    "areaName": "Residency Road",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Biryani",
    "Andhra",
    "South Indian",
    "Chinese",
    "Seafood"
    ],
    "avgRating": 4.7,
    "parentId": "635",
    "avgRatingString": "4.7",
    "totalRatingsString": "83K+",
    "sla": {
    "deliveryTime": 21,
    "lastMileTravel": 2.4,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "2.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-17 23:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Biryani.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "Rxawards/_CATEGORY-Biryani.png",
    "description": "Delivery!"
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.3",
    "ratingCount": "21K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=3241&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "1037841",
    "name": "Mr Phillys American Cheeseburgers",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/31/12d5c064-567b-4def-9a06-62f1c3bf51f5_1037841.jpg",
    "locality": "Central Bangalore",
    "areaName": "Central Bangalore",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Burgers",
    "American",
    "Biryani",
    "Fast Food"
    ],
    "avgRating": 4.6,
    "parentId": "516779",
    "avgRatingString": "4.6",
    "totalRatingsString": "49",
    "promoted": true,
    "adTrackingId": "cid=26339631~p=12~adgrpid=26339631#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1037841~eid=2711ace0-112c-4328-ae58-24f45df137f3~srvts=1742232045616~collid=83639",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 4.2,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "4.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-18 04:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "26339631",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=1037841&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "102334",
    "name": "Dindigul Thalappakatti",
    "cloudinaryImageId": "ogidjgqgh5w4otvuiipj",
    "locality": "Mg Road",
    "areaName": "Indiranagar",
    "costForTwo": "₹650 for two",
    "cuisines": [
    "Biryani",
    "Barbecue",
    "South Indian",
    "Chinese",
    "North Indian"
    ],
    "avgRating": 4.4,
    "parentId": "332",
    "avgRatingString": "4.4",
    "totalRatingsString": "8.9K+",
    "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-17 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textExtendedBadges": {},
    "textBased": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹179",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=102334&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "30532",
    "name": "Hotel Empire",
    "cloudinaryImageId": "10f8b483521b9359d9c8fcd37f23c9d3",
    "locality": "Infantry Road ",
    "areaName": "Infantry Road",
    "costForTwo": "₹450 for two",
    "cuisines": [
    "Kebabs",
    "Biryani"
    ],
    "avgRating": 4.5,
    "parentId": "475",
    "avgRatingString": "4.5",
    "totalRatingsString": "19K+",
    "promoted": true,
    "adTrackingId": "cid=26538123~p=13~adgrpid=26538123#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=30532~eid=5a12a5b0-19e7-4567-b575-2a36c4633bc0~srvts=1742232045616~collid=83639",
    "sla": {
    "deliveryTime": 34,
    "lastMileTravel": 2.5,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "2.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-18 02:45:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "15% OFF",
    "subHeader": "ABOVE ₹3000",
    "discountTag": "FLAT DEAL",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.3",
    "ratingCount": "19K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "26538123",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=30532&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "146304",
    "name": "Hyderabad Biryaani House",
    "cloudinaryImageId": "x8eohfwwu23rwryact16",
    "locality": "Victoria Road",
    "areaName": "Ashok Nagar",
    "costForTwo": "₹499 for two",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Chinese",
    "Tandoor"
    ],
    "avgRating": 4.4,
    "parentId": "2403",
    "avgRatingString": "4.4",
    "totalRatingsString": "8.9K+",
    "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 2.7,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "2.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-17 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textExtendedBadges": {},
    "textBased": {},
    "imageBased": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹229",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=146304&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "41099",
    "name": "Nagarjuna - Since 1984",
    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/3/3/9a2fadcb-1c9d-4fb2-b651-1af9521d9ced_6e8d69fa-962d-42f6-a715-98dd100d27f9.png",
    "locality": "Koramangala",
    "areaName": "Koramangala",
    "costForTwo": "₹600 for two",
    "cuisines": [
    "Andhra",
    "South Indian",
    "Biryani",
    "Beverages",
    "Desserts"
    ],
    "avgRating": 4.5,
    "parentId": "509973",
    "avgRatingString": "4.5",
    "totalRatingsString": "32K+",
    "promoted": true,
    "adTrackingId": "cid=26287546~p=15~adgrpid=26287546#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=41099~eid=51a1f034-e654-436c-9b19-44ef53f43678~srvts=1742232045616~collid=83639",
    "sla": {
    "deliveryTime": 39,
    "lastMileTravel": 7,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "7.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-17 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Andhra.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "Rxawards/_CATEGORY-Andhra.png",
    "description": "Delivery!"
    }
    }
    ]
    },
    "textExtendedBadges": {},
    "textBased": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.2",
    "ratingCount": "15K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "26287546",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=41099&source=collection&query=Biryani",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    }
    ],
    "firstOffsetRequest": true,
    "nextFetch": 3
    },
    "tid": "1e614ade-cb34-451d-b34e-cc9289e8c728",
    "sid": "jim07d90-5c2e-40e3-9e25-7fab3245fcad",
    "deviceId": "17fb36c2-a590-69ac-c84b-c7f953153cb1",
    "csrfToken": "sQarQGi0GaOJ-ZYZzHcs8JDiXvqzs17RRMJmeWX4"
    },
  pizza: {
    "statusCode": 0,
    "data": {
    "statusMessage": "done successfully",
    "pageOffset": {
    "nextOffset": "CJhqEK9SKICoh4qlovvKfjDFDjgE",
    "widgetOffset": {
    "restaurantCountWidget": "",
    "inlineFacetFilter": "",
    "collectionV5RestaurantListWidget_SimRestoRelevance_food": "8",
    "collectionV5MastheadWidget": ""
    }
    },
    "cards": [
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
    "collectionId": "83631",
    "title": "Pizza",
    "description": "Cheesilicious pizzas to make every day extraordinary.",
    "imageId": "COLLECTIONS/IMAGES/MERCH/2024/8/20/60f66049-cfcc-4f0b-891f-624938aac2bc_Pizza (6).png",
    "aspectRatio": "3.44",
    "cta": {
    "link": "swiggy://collectionV2?collection_id=83631&tags=layout_CCS_Pizza,pizza,ads_pc_pizza",
    "type": "collectionv2"
    },
    "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
    "count": "111 restaurants"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
    "sortConfigs": [
    {
    "key": "relevance",
    "title": "Relevance (Default)",
    "selected": true,
    "defaultSelection": true
    },
    {
    "key": "deliveryTimeAsc",
    "title": "Delivery Time"
    },
    {
    "key": "modelBasedRatingDesc",
    "title": "Rating"
    },
    {
    "key": "costForTwoAsc",
    "title": "Cost: Low to High"
    },
    {
    "key": "costForTwoDesc",
    "title": "Cost: High to Low"
    }
    ],
    "restaurantCount": 111,
    "facetList": [
    {
    "label": "Veg/Non-Veg",
    "id": "isVeg",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Non Veg",
    "id": "isVegfacetquery0",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Pure Veg",
    "id": "isVegfacetquery1",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "subLabel": "Filterby",
    "openFilter": true
    },
    {
    "label": "Ratings",
    "id": "rating",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Ratings",
    "id": "ratingfacetquery0",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Ratings 4.0+",
    "id": "ratingfacetquery1",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Ratings 4.5+",
    "id": "ratingfacetquery2",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "subLabel": "Filterby",
    "openFilter": true
    },
    {
    "label": "Delivery Time",
    "id": "deliveryTime",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Less than 30 mins",
    "id": "deliveryTimefacetquery0",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Less than 45 mins",
    "id": "deliveryTimefacetquery1",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "subLabel": "Filterby",
    "openFilter": true
    },
    {
    "label": "Cost For Two",
    "id": "costForTwo",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Less than Rs. 300",
    "id": "costForTwofacetquery0",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Rs.300 - Rs.600",
    "id": "costForTwofacetquery1",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Greater than Rs. 600",
    "id": "costForTwofacetquery2",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "subLabel": "Filterby",
    "openFilter": true
    }
    ]
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
    "layout": {
    "rows": 1,
    "widgetPadding": {
    "left": 16,
    "right": 16
    },
    "scrollBar": {},
    "widgetTheme": {
    "defaultMode": {
    "backgroundColour": "#FFFFFF",
    "theme": "THEME_TYPE_LIGHT"
    },
    "darkMode": {
    "backgroundColour": "#1B3028",
    "theme": "THEME_TYPE_DARK"
    }
    }
    },
    "id": "restaurantCountWidget",
    "gridElements": {
    "infoWithStyle": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
    "text": "111 Restaurants to explore",
    "headerStyling": {
    "textSize": 15,
    "textColor": "text_color_highest_emphasis",
    "textFontName": "FONT_NAME_HEADER_H5",
    "maxLines": 1
    }
    }
    }
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "23847",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/23f109d4-5a1c-4b5c-be08-47be37d366c2_23847.JPG",
    "locality": "MG Road",
    "areaName": "Brigade Road",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
    ],
    "avgRating": 4.5,
    "parentId": "2456",
    "avgRatingString": "4.5",
    "totalRatingsString": "6.0K+",
    "promoted": true,
    "adTrackingId": "cid=26534984~p=0~adgrpid=26534984#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=23847~eid=aaa5ef71-38e3-40b7-bb68-bfd5945a9ddc~srvts=1742232253303~collid=83631",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 2.4,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "2.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-17 22:59:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Pizza.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Pizza.png"
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹999",
    "discountTag": "FLAT DEAL",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.0",
    "ratingCount": "4.9K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "26534984",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=23847&source=collection&query=Pizza",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "342643",
    "name": "The Pizza Bakery - Wood Fired Sourdough",
    "cloudinaryImageId": "0335dd45be555d0a4187255e57d2ca88",
    "locality": "Church Street",
    "areaName": "Central Bangalore",
    "costForTwo": "₹700 for two",
    "cuisines": [
    "Pizzas",
    "Pastas",
    "Italian",
    "Desserts",
    "Continental"
    ],
    "avgRating": 4.6,
    "parentId": "522292",
    "avgRatingString": "4.6",
    "totalRatingsString": "6.1K+",
    "sla": {
    "deliveryTime": 33,
    "lastMileTravel": 1.7,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "1.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-17 23:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Pizza.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "Rxawards/_CATEGORY-Pizza.png",
    "description": "Delivery!"
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.3",
    "ratingCount": "2.3K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=342643&source=collection&query=Pizza",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "712380",
    "name": "Chicago Pizza",
    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/29/ed81bf6c-fea4-48b1-ab55-39b7078bb8d4_7e705458-5c68-4f79-a674-de882a1cc279.jpg",
    "locality": "khb colony",
    "areaName": "Koramangala",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Pizzas",
    "Fast Food",
    "Italian"
    ],
    "avgRating": 4.1,
    "parentId": "60277",
    "avgRatingString": "4.1",
    "totalRatingsString": "466",
    "promoted": true,
    "adTrackingId": "cid=26481482~p=1~adgrpid=26481482#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=712380~eid=583c3995-fd4e-4040-b621-0b4bb8a40ca4~srvts=1742232253303~collid=83631",
    "sla": {
    "deliveryTime": 49,
    "lastMileTravel": 6.7,
    "serviceability": "SERVICEABLE",
    "slaString": "45-50 mins",
    "lastMileTravelString": "6.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-18 01:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹119",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.8",
    "ratingCount": "615"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "26481482",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=712380&source=collection&query=Pizza",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "53503",
    "name": "Brik Oven - Original Sourdough Pizzas",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/21/1999d787-3984-4db9-b817-55ffc0c3b0e8_53503.jpg",
    "locality": "Church Street",
    "areaName": "Church Street",
    "costForTwo": "₹700 for two",
    "cuisines": [
    "Italian",
    "Pizzas",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.4,
    "parentId": "488952",
    "avgRatingString": "4.4",
    "totalRatingsString": "12K+",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 1.8,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "1.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-18 01:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Pizza.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "Rxawards/_CATEGORY-Pizza.png",
    "description": "Delivery!"
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹200 OFF",
    "subHeader": "ABOVE ₹1199",
    "discountTag": "FLAT DEAL",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.4",
    "ratingCount": "7.2K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=53503&source=collection&query=Pizza",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "770772",
    "name": "Olio - The Wood Fired Pizzeria",
    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/12/e7d33ad6-afcd-45b4-9d9e-31c64084ff2a_bf73d399-0434-48fc-9bc4-7b19e183889e.jpg_compressed",
    "locality": "Ali Askar Road",
    "areaName": "Central Bangalore",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Pizzas",
    "Pastas",
    "Italian",
    "Fast Food",
    "Snacks",
    "Beverages",
    "Desserts"
    ],
    "avgRating": 4.3,
    "parentId": "11633",
    "avgRatingString": "4.3",
    "totalRatingsString": "824",
    "promoted": true,
    "adTrackingId": "cid=26493845~p=7~adgrpid=26493845#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=770772~eid=5b089c75-994c-4175-a63e-6a7476077500~srvts=1742232253303~collid=83631",
    "sla": {
    "deliveryTime": 44,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "40-45 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-18 06:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹99",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "26493845",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=770772&source=collection&query=Pizza",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "10575",
    "name": "Pizza Hut",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/5b9c53df-e0cb-48fc-ac31-f02735592edc_10575.jpg",
    "locality": "Richmond Town",
    "areaName": "Central Bangalore",
    "costForTwo": "₹600 for two",
    "cuisines": [
    "Pizzas"
    ],
    "avgRating": 4.3,
    "parentId": "721",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 34,
    "lastMileTravel": 2.7,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "2.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-18 03:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.1",
    "ratingCount": "1.9K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=10575&source=collection&query=Pizza",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "1009125",
    "name": "Caro Napoli Pizza",
    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/21/1509ce30-9111-4aac-90fb-4d8b6b9cdd0f_fe2e1456-16c6-4201-af3e-2a11dda68d84.jpg",
    "locality": "Hoysala Nagar",
    "areaName": "Indiranagar",
    "costForTwo": "₹600 for two",
    "cuisines": [
    "Pizzas",
    "Pastas",
    "Italian",
    "Desserts"
    ],
    "avgRating": 3.9,
    "parentId": "576432",
    "avgRatingString": "3.9",
    "totalRatingsString": "37",
    "promoted": true,
    "adTrackingId": "cid=25881564~p=9~adgrpid=25881564#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1009125~eid=ee7688d4-8edd-40ac-b713-9b9e2229903e~srvts=1742232253303~collid=83631",
    "sla": {
    "deliveryTime": 40,
    "lastMileTravel": 5.7,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "5.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-18 04:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹108",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "25881564",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=1009125&source=collection&query=Pizza",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    }
    ],
    "firstOffsetRequest": true,
    "nextFetch": 3
    },
    "tid": "1e614ade-cb34-451d-b34e-cc9289e8c728",
    "sid": "jim07d90-5c2e-40e3-9e25-7fab3245fcad",
    "deviceId": "17fb36c2-a590-69ac-c84b-c7f953153cb1",
    "csrfToken": "SeAQCbjDiEYl-M9rafFifD1-pVt1YsG4EWULl-xk"
},
  burger: {
    "statusCode": 0,
    "data": {
    "statusMessage": "done successfully",
    "pageOffset": {
    "nextOffset": "CJxqENNSKIDI+NzhouK9RjDGDjgE",
    "widgetOffset": {
    "restaurantCountWidget": "",
    "inlineFacetFilter": "",
    "collectionV5RestaurantListWidget_SimRestoRelevance_food": "8",
    "collectionV5MastheadWidget": ""
    }
    },
    "cards": [
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
    "collectionId": "83637",
    "title": "Burger",
    "description": "Satisfy your cravings with these fresh and flavoursome burgers.",
    "imageId": "COLLECTIONS/IMAGES/MERCH/2024/7/2/6f256b56-e319-488b-8003-9ccca21d4f14_pic",
    "aspectRatio": "3.44",
    "cta": {
    "link": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger,burger,layout_Burger,ads_pc_burger",
    "type": "collectionv2"
    },
    "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
    "count": "66 restaurants"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
    "sortConfigs": [
    {
    "key": "relevance",
    "title": "Relevance (Default)",
    "selected": true,
    "defaultSelection": true
    },
    {
    "key": "deliveryTimeAsc",
    "title": "Delivery Time"
    },
    {
    "key": "modelBasedRatingDesc",
    "title": "Rating"
    },
    {
    "key": "costForTwoAsc",
    "title": "Cost: Low to High"
    },
    {
    "key": "costForTwoDesc",
    "title": "Cost: High to Low"
    }
    ],
    "restaurantCount": 66,
    "facetList": [
    {
    "label": "Veg/Non-Veg",
    "id": "isVeg",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Non Veg",
    "id": "isVegfacetquery0",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Pure Veg",
    "id": "isVegfacetquery1",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "subLabel": "Filterby",
    "openFilter": true
    },
    {
    "label": "Ratings",
    "id": "rating",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Ratings",
    "id": "ratingfacetquery0",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Ratings 4.0+",
    "id": "ratingfacetquery1",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Ratings 4.5+",
    "id": "ratingfacetquery2",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "subLabel": "Filterby",
    "openFilter": true
    },
    {
    "label": "Delivery Time",
    "id": "deliveryTime",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Less than 30 mins",
    "id": "deliveryTimefacetquery0",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Less than 45 mins",
    "id": "deliveryTimefacetquery1",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "subLabel": "Filterby",
    "openFilter": true
    },
    {
    "label": "Cost For Two",
    "id": "costForTwo",
    "selection": "SELECT_TYPE_MULTISELECT",
    "facetInfo": [
    {
    "label": "Less than Rs. 300",
    "id": "costForTwofacetquery0",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Rs.300 - Rs.600",
    "id": "costForTwofacetquery1",
    "analytics": {},
    "openFilter": true
    },
    {
    "label": "Greater than Rs. 600",
    "id": "costForTwofacetquery2",
    "analytics": {},
    "openFilter": true
    }
    ],
    "viewType": "VIEW_TYPE_HALF_CARD",
    "subLabel": "Filterby",
    "openFilter": true
    }
    ]
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
    "layout": {
    "rows": 1,
    "widgetPadding": {
    "left": 16,
    "right": 16
    },
    "scrollBar": {},
    "widgetTheme": {
    "defaultMode": {
    "backgroundColour": "#FFFFFF",
    "theme": "THEME_TYPE_LIGHT"
    },
    "darkMode": {
    "backgroundColour": "#1B3028",
    "theme": "THEME_TYPE_DARK"
    }
    }
    },
    "id": "restaurantCountWidget",
    "gridElements": {
    "infoWithStyle": {
    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
    "text": "Restaurants to explore",
    "headerStyling": {
    "textSize": 15,
    "textColor": "text_color_highest_emphasis",
    "textFontName": "FONT_NAME_HEADER_H5",
    "maxLines": 1
    }
    }
    }
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "1037841",
    "name": "Mr Phillys American Cheeseburgers",
    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/5/4/cd3bf660-3b8b-4516-9098-3e7e4a83dd28_2e82c871-3868-45a7-bdee-45ba4741c45f.jpg",
    "locality": "Central Bangalore",
    "areaName": "Central Bangalore",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Burgers",
    "American",
    "Biryani",
    "Fast Food"
    ],
    "avgRating": 4.6,
    "parentId": "516779",
    "avgRatingString": "4.6",
    "totalRatingsString": "49",
    "promoted": true,
    "adTrackingId": "cid=26339631~p=1~adgrpid=26339631#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1037841~eid=09eb6227-7608-4e53-a64f-7a9f5253bc63~srvts=1742232414681~collid=83637",
    "sla": {
    "deliveryTime": 33,
    "lastMileTravel": 4.2,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "4.2 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-18 04:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "26339631",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=1037841&source=collection&query=Burger",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "43836",
    "name": "McDonald's",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
    "locality": "MG Road",
    "areaName": "Ashok Nagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Beverages",
    "Cafe",
    "Desserts"
    ],
    "avgRating": 4.4,
    "parentId": "630",
    "avgRatingString": "4.4",
    "totalRatingsString": "25K+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 1.3,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "1.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-18 02:45:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Burger.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textExtendedBadges": {},
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "Rxawards/_CATEGORY-Burger.png",
    "description": "Delivery!"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹99",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=43836&source=collection&query=Burger",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "279735",
    "name": "Easybites By Empire",
    "cloudinaryImageId": "67aa20d5bff8c2d59a5ebd3e700daa25",
    "locality": "Castel Street",
    "areaName": "Ashok Nagar",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "Snacks",
    "Fast Food",
    "Beverages"
    ],
    "avgRating": 4.4,
    "parentId": "443171",
    "avgRatingString": "4.4",
    "totalRatingsString": "4.6K+",
    "promoted": true,
    "adTrackingId": "cid=26538142~p=3~adgrpid=26538142#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=279735~eid=040ed698-a5d3-4edb-8e15-b343132cceb3~srvts=1742232414681~collid=83637",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 2.1,
    "serviceability": "SERVICEABLE",
    "slaString": "25-30 mins",
    "lastMileTravelString": "2.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-17 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "UPTO ₹40",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "26538142",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=279735&source=collection&query=Burger",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "5938",
    "name": "Burger King",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/21d5d712-09a3-42d0-b1b2-310e44cc5dfe_5938.jpg",
    "locality": "Tasker Town",
    "areaName": "Shivaji Nagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 4.4,
    "parentId": "166",
    "avgRatingString": "4.4",
    "totalRatingsString": "38K+",
    "sla": {
    "deliveryTime": 31,
    "lastMileTravel": 2.7,
    "serviceability": "SERVICEABLE",
    "slaString": "30-35 mins",
    "lastMileTravelString": "2.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-18 03:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Burger.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Delivery!",
    "imageId": "Rxawards/_CATEGORY-Burger.png"
    }
    }
    ]
    },
    "textExtendedBadges": {},
    "textBased": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "--"
    }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=5938&source=collection&query=Burger",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "397214",
    "name": "Basco And Fry",
    "cloudinaryImageId": "citgpwjjpxkvzos2a1je",
    "locality": "Indiranagar",
    "areaName": "Indiranagar",
    "costForTwo": "₹800 for two",
    "cuisines": [
    "Burgers",
    "Mexican",
    "Barbecue",
    "American"
    ],
    "avgRating": 4.5,
    "parentId": "241845",
    "avgRatingString": "4.5",
    "totalRatingsString": "6.6K+",
    "promoted": true,
    "adTrackingId": "cid=26477107~p=11~adgrpid=26477107#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=397214~eid=cfbbff26-fa7c-42f2-a85f-8d69cfc7f2b1~srvts=1742232414681~collid=83637",
    "sla": {
    "deliveryTime": 42,
    "lastMileTravel": 6,
    "serviceability": "SERVICEABLE",
    "slaString": "40-45 mins",
    "lastMileTravelString": "6.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-17 23:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.0",
    "ratingCount": "129"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "26477107",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=397214&source=collection&query=Burger",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "3369",
    "name": "Truffles",
    "cloudinaryImageId": "umqlmm1ltapmcbbyvxnu",
    "locality": "St. Marks Road",
    "areaName": "St. Marks Road",
    "costForTwo": "₹450 for two",
    "cuisines": [
    "American",
    "Desserts",
    "Continental",
    "Italian"
    ],
    "avgRating": 4.6,
    "parentId": "218065",
    "avgRatingString": "4.6",
    "totalRatingsString": "144K+",
    "sla": {
    "deliveryTime": 23,
    "lastMileTravel": 0.9,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "0.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-18 00:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "Rxawards/_CATEGORY-Burger.png",
    "description": "Delivery!"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "textBased": {},
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "imageId": "Rxawards/_CATEGORY-Burger.png",
    "description": "Delivery!"
    }
    }
    ]
    },
    "textExtendedBadges": {}
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.5",
    "ratingCount": "20K+"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=3369&source=collection&query=Burger",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    },
    {
    "card": {
    "card": {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
    "id": "3013",
    "name": "Backyard Burgers and Grill",
    "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/12/b2930a05-9228-4552-83a7-39f27bb03650_dbaeafde-623f-4dae-bfd2-b10ca7e9b64c.jpg",
    "locality": "Indiranagar",
    "areaName": "Indiranagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "Snacks",
    "American",
    "Beverages",
    "Desserts",
    "Fast Food",
    "Arabian",
    "Indian",
    "Salads",
    "Korean"
    ],
    "avgRating": 4.1,
    "parentId": "388154",
    "avgRatingString": "4.1",
    "totalRatingsString": "1.7K+",
    "promoted": true,
    "adTrackingId": "cid=25885385~p=12~adgrpid=25885385#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=3013~eid=aab53b23-799d-408e-9fab-42133b16c014~srvts=1742232414681~collid=83637",
    "sla": {
    "deliveryTime": 38,
    "lastMileTravel": 6.9,
    "serviceability": "SERVICEABLE",
    "slaString": "35-40 mins",
    "lastMileTravelString": "6.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2025-03-18 03:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textExtendedBadges": {},
    "textBased": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹195",
    "logoCtx": {
    "text": "BENEFITS"
    }
    },
    "orderabilityCommunication": {
    "title": {},
    "subTitle": {},
    "message": {},
    "customIcon": {},
    "commsStyling": {}
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {},
    "externalRatings": {
    "aggregatedRating": {
    "rating": "4.6",
    "ratingCount": "216"
    },
    "source": "GOOGLE",
    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    "campaignId": "25885385",
    "requestContexts": [
    "no_rush_dynamic_delfee"
    ]
    },
    "analytics": {},
    "cta": {
    "link": "swiggy://menu?restaurant_id=3013&source=collection&query=Burger",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
    "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
    "sectionId": "MENU_RETURN_FOOD"
    }
    }
    }
    ],
    "firstOffsetRequest": true,
    "nextFetch": 3
    },
    "tid": "1e614ade-cb34-451d-b34e-cc9289e8c728",
    "sid": "jim07d90-5c2e-40e3-9e25-7fab3245fcad",
    "deviceId": "17fb36c2-a590-69ac-c84b-c7f953153cb1",
    "csrfToken": "AHYKhzdYGGTY-VPmcK-dqB_Yr071XxZCmtiC_XJ8"
    },
    dosa:{
        "statusCode": 0,
        "data": {
        "statusMessage": "done successfully",
        "pageOffset": {
        "nextOffset": "CIlkEOskKICwh5rK4MaFFDCdEjgE",
        "widgetOffset": {
        "restaurantCountWidget": "",
        "inlineFacetFilter": "",
        "collectionV5RestaurantListWidget_SimRestoRelevance_food": "11",
        "collectionV5MastheadWidget": ""
        }
        },
        "cards": [
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
        "collectionId": "80424",
        "title": "Dosa",
        "description": "Satisfy your cravings for South Indian breakfast with these crispy & buttery Dosas.",
        "imageId": "COLLECTIONS/IMAGES/MERCH/2024/7/2/f14add80-0688-4ec5-b436-450e5207091b_pic",
        "aspectRatio": "3.44",
        "cta": {
        "link": "swiggy://collectionV2?collection_id=80424&tags=layout_CCS_Dosa,ads_pc_dosa,dosa,layout_BAU_Contextual",
        "type": "collectionv2"
        },
        "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        "count": "46 restaurants"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
        "sortConfigs": [
        {
        "key": "relevance",
        "title": "Relevance (Default)",
        "selected": true,
        "defaultSelection": true
        },
        {
        "key": "deliveryTimeAsc",
        "title": "Delivery Time"
        },
        {
        "key": "modelBasedRatingDesc",
        "title": "Rating"
        },
        {
        "key": "costForTwoAsc",
        "title": "Cost: Low to High"
        },
        {
        "key": "costForTwoDesc",
        "title": "Cost: High to Low"
        }
        ],
        "restaurantCount": 46,
        "facetList": [
        {
        "label": "Veg/Non-Veg",
        "id": "isVeg",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
        {
        "label": "Non Veg",
        "id": "isVegfacetquery0",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Pure Veg",
        "id": "isVegfacetquery1",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
        },
        {
        "label": "Ratings",
        "id": "rating",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
        {
        "label": "Ratings",
        "id": "ratingfacetquery0",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Ratings 4.0+",
        "id": "ratingfacetquery1",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Ratings 4.5+",
        "id": "ratingfacetquery2",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
        },
        {
        "label": "Delivery Time",
        "id": "deliveryTime",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
        {
        "label": "Less than 30 mins",
        "id": "deliveryTimefacetquery0",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Less than 45 mins",
        "id": "deliveryTimefacetquery1",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
        },
        {
        "label": "Cost For Two",
        "id": "costForTwo",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
        {
        "label": "Less than Rs. 300",
        "id": "costForTwofacetquery0",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Rs.300 - Rs.600",
        "id": "costForTwofacetquery1",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Greater than Rs. 600",
        "id": "costForTwofacetquery2",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
        }
        ]
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        "layout": {
        "rows": 1,
        "widgetPadding": {
        "left": 16,
        "right": 16
        },
        "scrollBar": {},
        "widgetTheme": {
        "defaultMode": {
        "backgroundColour": "#FFFFFF",
        "theme": "THEME_TYPE_LIGHT"
        },
        "darkMode": {
        "backgroundColour": "#1B3028",
        "theme": "THEME_TYPE_DARK"
        }
        }
        },
        "id": "restaurantCountWidget",
        "gridElements": {
        "infoWithStyle": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
        "text": "Restaurants to explore",
        "headerStyling": {
        "textSize": 15,
        "textColor": "text_color_highest_emphasis",
        "textFontName": "FONT_NAME_HEADER_H5",
        "maxLines": 1
        }
        }
        }
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "102334",
        "name": "Dindigul Thalappakatti",
        "cloudinaryImageId": "ogidjgqgh5w4otvuiipj",
        "locality": "Mg Road",
        "areaName": "Indiranagar",
        "costForTwo": "₹650 for two",
        "cuisines": [
        "Biryani",
        "Barbecue",
        "South Indian",
        "Chinese",
        "North Indian"
        ],
        "avgRating": 4.4,
        "parentId": "332",
        "avgRatingString": "4.4",
        "totalRatingsString": "8.9K+",
        "promoted": true,
        "adTrackingId": "cid=26289649~p=1~adgrpid=26289649#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=102334~eid=b1c26d6e-4214-49fa-87de-e0001ed162af~srvts=1742232585333~collid=80424",
        "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹179",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26289649",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=102334&source=collection&query=Dosa",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "836274",
        "name": "Chalukya Samrat Cafe Since 1977",
        "cloudinaryImageId": "89ce1d7a14b39e6850bc2b92b945ae8c",
        "locality": "Shanthala Nagar",
        "areaName": "Central Bangalore",
        "costForTwo": "₹500 for two",
        "cuisines": [
        "Cafe",
        "Fast Food",
        "Indian",
        "Chinese"
        ],
        "avgRating": 4.5,
        "parentId": "496536",
        "avgRatingString": "4.5",
        "totalRatingsString": "1.4K+",
        "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹75 OFF",
        "subHeader": "ABOVE ₹399",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=836274&source=collection&query=Dosa",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "41099",
        "name": "Nagarjuna - Since 1984",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/3/3/519eb4c9-a66c-498d-b1b5-3c39ba42079c_796e52fc-c1eb-4a60-8685-c1e61dec0b64.png",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹600 for two",
        "cuisines": [
        "Andhra",
        "South Indian",
        "Biryani",
        "Beverages",
        "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "509973",
        "avgRatingString": "4.5",
        "totalRatingsString": "32K+",
        "promoted": true,
        "adTrackingId": "cid=26287546~p=3~adgrpid=26287546#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=41099~eid=254c3c45-0c10-4a2d-8fb8-1ef2f0cfabeb~srvts=1742232585333~collid=80424",
        "sla": {
        "deliveryTime": 39,
        "lastMileTravel": 7,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "7.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "Rxawards/_CATEGORY-Andhra.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "Rxawards/_CATEGORY-Andhra.png",
        "description": "Delivery!"
        }
        }
        ]
        },
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.2",
        "ratingCount": "15K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26287546",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=41099&source=collection&query=Dosa",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "501638",
        "name": "IDC Kitchen",
        "cloudinaryImageId": "13b931688e7de32494e77a2bb2f43b44",
        "locality": "Residency Road",
        "areaName": "Residency Road",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "South Indian"
        ],
        "avgRating": 4.6,
        "parentId": "105824",
        "avgRatingString": "4.6",
        "totalRatingsString": "1.8K+",
        "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        }
        ]
        },
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.3",
        "ratingCount": "2.7K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=501638&source=collection&query=Dosa",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "684427",
        "name": "Cafe Amudham",
        "cloudinaryImageId": "4a752eab41d8483a070eb0b7840c7cc2",
        "locality": "Wilson Garden",
        "areaName": "Jayanagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "South Indian",
        "Snacks"
        ],
        "avgRating": 4.6,
        "parentId": "396620",
        "avgRatingString": "4.6",
        "totalRatingsString": "8.8K+",
        "promoted": true,
        "adTrackingId": "cid=26289840~p=4~adgrpid=26289840#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=684427~eid=27669752-d434-419d-aa7e-611c1e0044c3~srvts=1742232585333~collid=80424",
        "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "description": "",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        }
        ]
        }
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.3",
        "ratingCount": "3.6K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26289840",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=684427&source=collection&query=Dosa",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "884006",
        "name": "Paragon Restaurant Since 1939",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/13/069de1d3-5d52-470e-92b0-021b17642b51_884006.jpg",
        "locality": "Shanthala Nagar",
        "areaName": "Central Bangalore",
        "costForTwo": "₹700 for two",
        "cuisines": [
        "Kerala",
        "South Indian",
        "Indian",
        "Chinese"
        ],
        "avgRating": 4.5,
        "parentId": "518652",
        "avgRatingString": "4.5",
        "totalRatingsString": "1.6K+",
        "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:30:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=884006&source=collection&query=Dosa",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "1050",
        "name": "Nagarjuna Chimney",
        "cloudinaryImageId": "hirj3b66f3uphbdinhev",
        "locality": "Jayanagar",
        "areaName": "Jayanagar",
        "costForTwo": "₹800 for two",
        "cuisines": [
        "Seafood",
        "Andhra",
        "Biryani",
        "South Indian",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4.5,
        "parentId": "143166",
        "avgRatingString": "4.5",
        "totalRatingsString": "32K+",
        "promoted": true,
        "adTrackingId": "cid=26183129~p=6~adgrpid=26183129#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1050~eid=c0b22889-4c71-4371-8f62-9d1c45af32c8~srvts=1742232585333~collid=80424",
        "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "Rxawards/_CATEGORY-Andhra.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textExtendedBadges": {},
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "Rxawards/_CATEGORY-Andhra.png",
        "description": "Delivery!"
        }
        }
        ]
        }
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "3.8",
        "ratingCount": "11K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26183129",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=1050&source=collection&query=Dosa",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "421765",
        "name": "Karavali Fine Dine",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/11/12/321eb416-0c29-4ed2-96a9-7b4a2621b3cb_a83bd36e-69cd-44d8-94a9-e712971e4f8f.jpg",
        "locality": "Residency Road",
        "areaName": "Brigade Road",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Mangalorean",
        "Seafood",
        "Chinese",
        "Coastal"
        ],
        "avgRating": 4.3,
        "parentId": "115032",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.4K+",
        "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.5",
        "ratingCount": "3.8K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=421765&source=collection&query=Dosa",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "612902",
        "name": "Madras Curd Rice Company",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/3/7/eede1455-19c2-4c98-a0fa-c13f84aaa04b_de01766d-bdff-4122-83a3-e880096d5c01.jpg_compressed",
        "locality": "Subhash Nagar",
        "areaName": "Indiranagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "South Indian",
        "Indian"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "356962",
        "avgRatingString": "4.3",
        "totalRatingsString": "2.7K+",
        "promoted": true,
        "adTrackingId": "cid=25886216~p=9~adgrpid=25886216#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=612902~eid=1867d610-e22d-4719-8b9e-4f1b78f37422~srvts=1742232585333~collid=80424",
        "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 6.2,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "6.2 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 01:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "pureveg",
        "imageId": "v1695133679/badges/Pure_Veg111.png"
        }
        }
        ]
        },
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "25886216",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=612902&source=collection&query=Dosa",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "252412",
        "name": "Anjappar",
        "cloudinaryImageId": "dodszdsezbr9reoqwotm",
        "locality": "Brigade Road",
        "areaName": "Brigade Road",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Chettinad",
        "Thalis",
        "Biryani",
        "Chinese",
        "Tandoor",
        "South Indian"
        ],
        "avgRating": 4.2,
        "parentId": "61",
        "avgRatingString": "4.2",
        "totalRatingsString": "4.4K+",
        "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:30:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹75",
        "discountTag": "POCKET HERO",
        "discountCalloutInfo": {
        "message": "Free Delivery",
        "logoCtx": {
        "logo": "v1655895371/free_delivery_logo_hqipbo.png"
        }
        },
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "3.8",
        "ratingCount": "994"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=252412&source=collection&query=Dosa",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        }
        ],
        "firstOffsetRequest": true,
        "nextFetch": 3
        },
        "tid": "1e614ade-cb34-451d-b34e-cc9289e8c728",
        "sid": "jim07d90-5c2e-40e3-9e25-7fab3245fcad",
        "deviceId": "17fb36c2-a590-69ac-c84b-c7f953153cb1",
        "csrfToken": "7JAhp6sMREGs-tPlms0MtaQLj_5-LMMsJWuuAE-c"
        },
    noodels:{
            "statusCode": 0,
            "data": {
            "statusMessage": "done successfully",
            "pageOffset": {
            "nextOffset": "CP3//////////wEQBCABKIC48Ka269nudTgE",
            "widgetOffset": {
            "collectionV5FilterAndSortWidget": "",
            "collectionV5RestaurantListWidget": "14",
            "collectionV5MastheadWidget": ""
            }
            },
            "cards": [
            {
            "card": {
            "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
            "collectionId": "80463",
            "title": "Noodles",
            "description": "Dive into these delicious & flavoursome noodles for a perfect meal.",
            "imageId": "COLLECTIONS/IMAGES/MERCH/2024/7/17/704633a9-82d9-418b-8d0d-a2afc61c0bbd_noodles.png",
            "aspectRatio": "3.44",
            "cta": {
            "link": "swiggy://collectionV2?collection_id=80463&tags=layout_BAU_Contextual,noodles",
            "type": "collectionv2"
            },
            "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
            "count": "252 restaurants"
            }
            }
            },
            {
            "card": {
            "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.FilterSortWidget",
            "sortConfigs": [
            {
            "key": "relevance",
            "title": "Relevance (Default)",
            "selected": true,
            "defaultSelection": true
            },
            {
            "key": "deliveryTimeAsc",
            "title": "Delivery Time"
            },
            {
            "key": "modelBasedRatingDesc",
            "title": "Rating"
            },
            {
            "key": "costForTwoAsc",
            "title": "Cost: Low to High"
            },
            {
            "key": "costForTwoDesc",
            "title": "Cost: High to Low"
            }
            ],
            "restaurantCount": 252
            }
            }
            },
            {
            "card": {
            "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
            "id": "6924",
            "name": "FreshMenu",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/e21b723c-7a5a-43fc-87b6-f3902d008ce2_6924.jpg",
            "locality": "Johnson Market",
            "areaName": "Richmond Road",
            "costForTwo": "₹250 for two",
            "cuisines": [
            "Continental",
            "Chinese",
            "Oriental",
            "Asian",
            "Healthy Food",
            "Fast Food",
            "Indian",
            "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "398",
            "avgRatingString": "4.3",
            "totalRatingsString": "60K+",
            "promoted": true,
            "adTrackingId": "cid=26418217~p=1~adgrpid=26418217#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=6924~eid=4da9ad53-44ad-430e-945d-2646ae96f673~srvts=1742232654392~collid=80463",
            "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 2.3,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "2.3 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-03-17 23:59:00",
            "opened": true
            },
            "badges": {
            "textExtendedBadges": [
            {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
            }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "textBased": {},
            "imageBased": {},
            "textExtendedBadges": {
            "badgeObject": [
            {
            "attributes": {
            "fontColor": "#7E808C",
            "iconId": "guiltfree/GF_Logo_android_3x",
            "description": "",
            "shortDescription": "options available"
            }
            }
            ]
            }
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹59",
            "logoCtx": {
            "text": "BENEFITS"
            }
            },
            "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
            "aggregatedRating": {
            "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "26418217",
            "requestContexts": [
            "no_rush_dynamic_delfee"
            ]
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=6924&source=collection&query=Noodles",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
            }
            }
            },
            {
            "card": {
            "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
            "id": "836274",
            "name": "Chalukya Samrat Cafe Since 1977",
            "cloudinaryImageId": "7a5d73bfc2f0b293750e0497fddacc63",
            "locality": "Shanthala Nagar",
            "areaName": "Central Bangalore",
            "costForTwo": "₹500 for two",
            "cuisines": [
            "Cafe",
            "Fast Food",
            "Indian",
            "Chinese"
            ],
            "avgRating": 4.5,
            "parentId": "496536",
            "avgRatingString": "4.5",
            "totalRatingsString": "1.4K+",
            "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 1.4,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.4 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-03-17 23:00:00",
            "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "textBased": {},
            "imageBased": {},
            "textExtendedBadges": {}
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "₹75 OFF",
            "subHeader": "ABOVE ₹399",
            "discountTag": "FLAT DEAL",
            "logoCtx": {
            "text": "BENEFITS"
            }
            },
            "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
            "aggregatedRating": {
            "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "requestContexts": [
            "no_rush_dynamic_delfee"
            ]
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=836274&source=collection&query=Noodles",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
            }
            }
            },
            {
            "card": {
            "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
            "id": "393840",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Chikka Lakshmaiah Layout",
            "areaName": "Adugodi",
            "costForTwo": "₹250 for two",
            "cuisines": [
            "Chinese",
            "Asian",
            "Tibetan",
            "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "61955",
            "avgRatingString": "4.3",
            "totalRatingsString": "5.5K+",
            "promoted": true,
            "adTrackingId": "cid=26533874~p=2~adgrpid=26533874#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=393840~eid=52fe6085-fd7b-4589-9318-070431032b15~srvts=1742232654392~collid=80463",
            "sla": {
            "deliveryTime": 54,
            "lastMileTravel": 6.6,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "6.6 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-03-18 02:00:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
            {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
            "description": "Delivery!"
            }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "textBased": {},
            "imageBased": {
            "badgeObject": [
            {
            "attributes": {
            "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
            "description": "Delivery!"
            }
            }
            ]
            },
            "textExtendedBadges": {}
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹129",
            "logoCtx": {
            "text": "BENEFITS"
            }
            },
            "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
            "aggregatedRating": {
            "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "26533874",
            "requestContexts": [
            "no_rush_dynamic_delfee"
            ]
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=393840&source=collection&query=Noodles",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
            }
            }
            },
            {
            "card": {
            "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
            "id": "17118",
            "name": "Social",
            "cloudinaryImageId": "uvdkvtb6ibzjn1aol15k",
            "locality": "Church Street",
            "areaName": "Church Street",
            "costForTwo": "₹500 for two",
            "cuisines": [
            "Chinese",
            "Fast Food",
            "Biryani",
            "Pizzas",
            "Salads",
            "Kebabs",
            "Juices",
            "Desserts",
            "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "2146",
            "avgRatingString": "4.4",
            "totalRatingsString": "8.8K+",
            "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-03-17 23:30:00",
            "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "textBased": {},
            "imageBased": {},
            "textExtendedBadges": {}
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹199",
            "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
            },
            "logoCtx": {
            "text": "BENEFITS"
            }
            },
            "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
            "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "15K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "requestContexts": [
            "no_rush_dynamic_delfee"
            ]
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=17118&source=collection&query=Noodles",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
            }
            }
            },
            {
            "card": {
            "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
            "id": "392828",
            "name": "Big Bowl",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_392828.JPG",
            "locality": "Chikka Lakshmaiah Layout",
            "areaName": "Adugodi",
            "costForTwo": "₹250 for two",
            "cuisines": [
            "North Indian",
            "Chinese",
            "Tibetan",
            "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "434792",
            "avgRatingString": "4.4",
            "totalRatingsString": "3.1K+",
            "promoted": true,
            "adTrackingId": "cid=26533749~p=4~adgrpid=26533749#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=392828~eid=df26af1a-ad27-4a53-8b90-f987f2395def~srvts=1742232654392~collid=80463",
            "sla": {
            "deliveryTime": 50,
            "lastMileTravel": 5.6,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "5.6 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-03-18 02:00:00",
            "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "textBased": {},
            "imageBased": {},
            "textExtendedBadges": {}
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹129",
            "logoCtx": {
            "text": "BENEFITS"
            }
            },
            "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
            "aggregatedRating": {
            "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "26533749",
            "requestContexts": [
            "no_rush_dynamic_delfee"
            ]
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=392828&source=collection&query=Noodles",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
            }
            }
            },
            {
            "card": {
            "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
            "id": "588012",
            "name": "SMOOR",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/18/67c1f259-4791-40ac-b552-4153de288966_588012.jpg",
            "locality": "Lavelle Road",
            "areaName": "Lavelle Road",
            "costForTwo": "₹450 for two",
            "cuisines": [
            "Asian",
            "Burgers",
            "Italian",
            "Thai",
            "Sushi",
            "Salads",
            "Pastas",
            "Pizzas",
            "Mexican",
            "Chinese"
            ],
            "avgRating": 4.6,
            "parentId": "3506",
            "avgRatingString": "4.6",
            "totalRatingsString": "1.3K+",
            "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 1.1,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "1.1 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-03-18 01:00:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
            {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
            "description": "Delivery!"
            }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "textBased": {},
            "imageBased": {
            "badgeObject": [
            {
            "attributes": {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
            "description": "Delivery!"
            }
            }
            ]
            },
            "textExtendedBadges": {}
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100",
            "logoCtx": {
            "text": "BENEFITS"
            }
            },
            "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
            "aggregatedRating": {
            "rating": "4.4",
            "ratingCount": "520"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "requestContexts": [
            "no_rush_dynamic_delfee"
            ]
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=588012&source=collection&query=Noodles",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
            }
            }
            },
            {
            "card": {
            "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
            "id": "102334",
            "name": "Dindigul Thalappakatti",
            "cloudinaryImageId": "ogidjgqgh5w4otvuiipj",
            "locality": "Mg Road",
            "areaName": "Indiranagar",
            "costForTwo": "₹650 for two",
            "cuisines": [
            "Biryani",
            "Barbecue",
            "South Indian",
            "Chinese",
            "North Indian"
            ],
            "avgRating": 4.4,
            "parentId": "332",
            "avgRatingString": "4.4",
            "totalRatingsString": "8.9K+",
            "promoted": true,
            "adTrackingId": "cid=26289649~p=6~adgrpid=26289649#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=102334~eid=f3f0d1ba-85a0-4c1a-b4da-ae4ded965e80~srvts=1742232654392~collid=80463",
            "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-03-17 23:59:00",
            "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "textBased": {},
            "imageBased": {},
            "textExtendedBadges": {}
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹179",
            "logoCtx": {
            "text": "BENEFITS"
            }
            },
            "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
            "aggregatedRating": {
            "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "26289649",
            "requestContexts": [
            "no_rush_dynamic_delfee"
            ]
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=102334&source=collection&query=Noodles",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
            }
            }
            },
            {
            "card": {
            "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
            "id": "396108",
            "name": "Suzy Q",
            "cloudinaryImageId": "als9xfk5lkrvizbq3lhx",
            "locality": "Cunningham Road",
            "areaName": "Cunningham Road",
            "costForTwo": "₹800 for two",
            "cuisines": [
            "Indian",
            "Continental",
            "Seafood",
            "Asian",
            "Chaat",
            "Desserts"
            ],
            "avgRating": 4.5,
            "parentId": "454247",
            "avgRatingString": "4.5",
            "totalRatingsString": "1.7K+",
            "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 1.8,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "1.8 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-03-17 23:30:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
            {
            "imageId": "newg.png",
            "description": "Gourmet"
            }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "textBased": {},
            "imageBased": {
            "badgeObject": [
            {
            "attributes": {
            "imageId": "newg.png",
            "description": "Gourmet"
            }
            }
            ]
            },
            "textExtendedBadges": {}
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80",
            "logoCtx": {
            "text": "BENEFITS"
            }
            },
            "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
            "aggregatedRating": {
            "rating": "4.4",
            "ratingCount": "3.7K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "requestContexts": [
            "no_rush_dynamic_delfee"
            ]
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=396108&source=collection&query=Noodles",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
            }
            }
            },
            {
            "card": {
            "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
            "id": "231617",
            "name": "Asean - On The Edge",
            "cloudinaryImageId": "r3rrhxap8e8xgf1ksurb",
            "locality": "MG Road",
            "areaName": "Central Bangalore",
            "costForTwo": "₹1000 for two",
            "cuisines": [
            "Asian",
            "Thai",
            "Burmese",
            "Vietnamese",
            "Malaysian",
            "Chinese"
            ],
            "avgRating": 4.5,
            "parentId": "21865",
            "avgRatingString": "4.5",
            "totalRatingsString": "637",
            "promoted": true,
            "adTrackingId": "cid=26544988~p=9~adgrpid=26544988#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=231617~eid=d4a3bdb0-e7d5-46c3-8a18-0ca0472a8305~srvts=1742232654393~collid=80463",
            "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 1.5,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "1.5 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-03-17 23:15:00",
            "opened": true
            },
            "badges": {
            "imageBadges": [
            {
            "imageId": "newg.png",
            "description": "Gourmet"
            }
            ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "textBased": {},
            "imageBased": {
            "badgeObject": [
            {
            "attributes": {
            "imageId": "newg.png",
            "description": "Gourmet"
            }
            }
            ]
            },
            "textExtendedBadges": {}
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50",
            "logoCtx": {
            "text": "BENEFITS"
            }
            },
            "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
            "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "1.6K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "26544988",
            "requestContexts": [
            "no_rush_dynamic_delfee"
            ]
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=231617&source=collection&query=Noodles",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
            }
            }
            },
            {
            "card": {
            "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
            "id": "52686",
            "name": "Chung Wah",
            "cloudinaryImageId": "bvxyn0fn9cenyvuj5d4q",
            "locality": "Ashok Nagar",
            "areaName": "Central Bangalore",
            "costForTwo": "₹800 for two",
            "cuisines": [
            "Chinese"
            ],
            "avgRating": 4.6,
            "parentId": "271",
            "avgRatingString": "4.6",
            "totalRatingsString": "7.1K+",
            "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-03-17 23:00:00",
            "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "textExtendedBadges": {},
            "textBased": {},
            "imageBased": {}
            }
            },
            "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
            "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "1.3K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "requestContexts": [
            "no_rush_dynamic_delfee"
            ]
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=52686&source=collection&query=Noodles",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
            }
            }
            },
            {
            "card": {
            "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
            "id": "41095",
            "name": "Nandhini Deluxe",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/3/5c59424c-bad5-4539-8575-729df00bc3f2_41095.jpg",
            "locality": "Gandhi Nagar",
            "areaName": "Malleshwaram",
            "costForTwo": "₹550 for two",
            "cuisines": [
            "Andhra",
            "Biryani",
            "Chinese",
            "North Indian",
            "South Indian"
            ],
            "avgRating": 4.3,
            "parentId": "2451",
            "avgRatingString": "4.3",
            "totalRatingsString": "7.0K+",
            "promoted": true,
            "adTrackingId": "cid=26019543~p=10~adgrpid=26019543#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=41095~eid=83035b12-0133-455d-a715-30c8083f78b7~srvts=1742232654393~collid=80463",
            "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-03-17 23:59:00",
            "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "textExtendedBadges": {},
            "textBased": {},
            "imageBased": {}
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75",
            "logoCtx": {
            "text": "BENEFITS"
            }
            },
            "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
            "aggregatedRating": {
            "rating": "--"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "26019543",
            "requestContexts": [
            "no_rush_dynamic_delfee"
            ]
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=41095&source=collection&query=Noodles",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
            }
            }
            },
            {
            "card": {
            "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
            "id": "70499",
            "name": "Imperial Restaurant Since 1954",
            "cloudinaryImageId": "bc2f7e70b995b4095617b21adcde553b",
            "locality": "Residency Road",
            "areaName": "Central Bangalore",
            "costForTwo": "₹400 for two",
            "cuisines": [
            "Tandoor",
            "Biryani",
            "Kerala",
            "South Indian",
            "Chinese",
            "Beverages"
            ],
            "avgRating": 4.5,
            "parentId": "472273",
            "avgRatingString": "4.5",
            "totalRatingsString": "12K+",
            "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 2.3,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.3 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-03-17 23:59:00",
            "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "imageBased": {},
            "textExtendedBadges": {},
            "textBased": {}
            }
            },
            "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
            "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "8.2K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "requestContexts": [
            "no_rush_dynamic_delfee"
            ]
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=70499&source=collection&query=Noodles",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
            }
            }
            },
            {
            "card": {
            "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
            "id": "881628",
            "name": "Wagh Bakri Tea Lounge",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/8/7e2661ea-ef93-4da1-9f68-a0f377f0730d_881628.jpg",
            "locality": "KHB Colony",
            "areaName": "Koramangala",
            "costForTwo": "₹400 for two",
            "cuisines": [
            "Beverages",
            "Snacks",
            "Cafe",
            "Bakery"
            ],
            "avgRating": 3.8,
            "veg": true,
            "parentId": "225010",
            "avgRatingString": "3.8",
            "totalRatingsString": "55",
            "promoted": true,
            "adTrackingId": "cid=26381015~p=11~adgrpid=26381015#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=881628~eid=c52c6fb4-5276-471f-a4b5-08c69b0063ce~srvts=1742232654393~collid=80463",
            "sla": {
            "deliveryTime": 51,
            "lastMileTravel": 7.1,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "7.1 km",
            "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
            "nextCloseTime": "2025-03-17 23:59:00",
            "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
            "entityBadges": {
            "textBased": {},
            "imageBased": {},
            "textExtendedBadges": {}
            }
            },
            "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80",
            "logoCtx": {
            "text": "BENEFITS"
            }
            },
            "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
            },
            "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
            }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
            "aggregatedRating": {
            "rating": "--"
            }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            "campaignId": "26381015",
            "requestContexts": [
            "no_rush_dynamic_delfee"
            ]
            },
            "analytics": {},
            "cta": {
            "link": "swiggy://menu?restaurant_id=881628&source=collection&query=Noodles",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget"
            }
            }
            }
            ],
            "firstOffsetRequest": true,
            "nextFetch": 3
            },
            "tid": "1e614ade-cb34-451d-b34e-cc9289e8c728",
            "sid": "jim07d90-5c2e-40e3-9e25-7fab3245fcad",
            "deviceId": "17fb36c2-a590-69ac-c84b-c7f953153cb1",
            "csrfToken": "cziLLN5Gg9IK-ow-U8XHL59a9jtBMqaOyx0nc4is"
        },
      rolls:{
        "statusCode": 0,
        "data": {
        "statusMessage": "done successfully",
        "pageOffset": {
        "nextOffset": "CJ5qEOskKICQhfWF0JHMLDDCEDgE",
        "widgetOffset": {
        "restaurantCountWidget": "",
        "collectionV5RestaurantListWidget_SimRestoRelevance_food": "10",
        "inlineFacetFilter": "",
        "collectionV5MastheadWidget": ""
        }
        },
        "cards": [
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
        "collectionId": "83669",
        "title": "Rolls",
        "description": "Crunchy & crispy rolls that are perfect for all your moods. ",
        "imageId": "COLLECTIONS/IMAGES/MERCH/2024/7/17/2259e432-fed2-4cc3-b0e9-faaac21b48d4_Rolls (2).png",
        "aspectRatio": "3.44",
        "cta": {
        "link": "swiggy://collectionV2?collection_id=83669&tags=layout_CCS_Rolls,roll,ads_pc_rolls",
        "type": "collectionv2"
        },
        "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        "count": "307 restaurants"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
        "sortConfigs": [
        {
        "key": "relevance",
        "title": "Relevance (Default)",
        "selected": true,
        "defaultSelection": true
        },
        {
        "key": "deliveryTimeAsc",
        "title": "Delivery Time"
        },
        {
        "key": "modelBasedRatingDesc",
        "title": "Rating"
        },
        {
        "key": "costForTwoAsc",
        "title": "Cost: Low to High"
        },
        {
        "key": "costForTwoDesc",
        "title": "Cost: High to Low"
        }
        ],
        "restaurantCount": 307,
        "facetList": [
        {
        "label": "10 Mins Delivery",
        "id": "isRestaurantBolt",
        "selection": "SELECT_TYPE_SINGLESELECT",
        "facetInfo": [
        {
        "label": "10 Mins Delivery",
        "id": "isRestaurantBoltfacetquery0",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_FLATTENED",
        "subLabel": "Filterby",
        "icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
        },
        {
        "label": "Veg/Non-Veg",
        "id": "isVeg",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
        {
        "label": "Non Veg",
        "id": "isVegfacetquery0",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Pure Veg",
        "id": "isVegfacetquery1",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
        },
        {
        "label": "Ratings",
        "id": "rating",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
        {
        "label": "Ratings",
        "id": "ratingfacetquery0",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Ratings 4.0+",
        "id": "ratingfacetquery1",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Ratings 4.5+",
        "id": "ratingfacetquery2",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
        },
        {
        "label": "Delivery Time",
        "id": "deliveryTime",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
        {
        "label": "Less than 30 mins",
        "id": "deliveryTimefacetquery0",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Less than 45 mins",
        "id": "deliveryTimefacetquery1",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
        },
        {
        "label": "Cost For Two",
        "id": "costForTwo",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
        {
        "label": "Less than Rs. 300",
        "id": "costForTwofacetquery0",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Rs.300 - Rs.600",
        "id": "costForTwofacetquery1",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Greater than Rs. 600",
        "id": "costForTwofacetquery2",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
        }
        ]
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        "layout": {
        "rows": 1,
        "widgetPadding": {
        "left": 16,
        "right": 16
        },
        "scrollBar": {},
        "widgetTheme": {
        "defaultMode": {
        "backgroundColour": "#FFFFFF",
        "theme": "THEME_TYPE_LIGHT"
        },
        "darkMode": {
        "backgroundColour": "#1B3028",
        "theme": "THEME_TYPE_DARK"
        }
        }
        },
        "id": "restaurantCountWidget",
        "gridElements": {
        "infoWithStyle": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
        "text": "307 Restaurants to explore",
        "headerStyling": {
        "textSize": 15,
        "textColor": "text_color_highest_emphasis",
        "textFontName": "FONT_NAME_HEADER_H5",
        "maxLines": 1
        }
        }
        }
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "6924",
        "name": "FreshMenu",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/e21b723c-7a5a-43fc-87b6-f3902d008ce2_6924.jpg",
        "locality": "Johnson Market",
        "areaName": "Richmond Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Continental",
        "Chinese",
        "Oriental",
        "Asian",
        "Healthy Food",
        "Fast Food",
        "Indian",
        "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "398",
        "avgRatingString": "4.3",
        "totalRatingsString": "60K+",
        "promoted": true,
        "adTrackingId": "cid=26418217~p=3~adgrpid=26418217#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=6924~eid=566c1447-5141-4253-b50a-f7a7ed7d3ce5~srvts=1742233382182~collid=83669",
        "sla": {
        "deliveryTime": 39,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "description": "",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        }
        ]
        },
        "textBased": {},
        "imageBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹59",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26418217",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=6924&source=collection&query=Roll",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "672074",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/5cc80528-07c3-4cb7-995f-db3843e8f22e_672074.JPG",
        "locality": "Ashok Nagar",
        "areaName": "Sobha Mall",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "sandwich",
        "Salads",
        "wrap",
        "Healthy Food"
        ],
        "avgRating": 4.3,
        "parentId": "2",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.7K+",
        "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 03:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        },
        {
        "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textExtendedBadges": {},
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        }
        },
        {
        "attributes": {
        "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
        "description": "Delivery!"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹119",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=672074&source=collection&query=Roll",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "279735",
        "name": "Easybites By Empire",
        "cloudinaryImageId": "d69e799b0e0d77a9635d910df94e08de",
        "locality": "Castel Street",
        "areaName": "Ashok Nagar",
        "costForTwo": "₹150 for two",
        "cuisines": [
        "Snacks",
        "Fast Food",
        "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "443171",
        "avgRatingString": "4.4",
        "totalRatingsString": "4.6K+",
        "promoted": true,
        "adTrackingId": "cid=26538142~p=6~adgrpid=26538142#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=279735~eid=c1ecb984-665b-4a6c-aec7-45be03a27c95~srvts=1742233382182~collid=83669",
        "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26538142",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=279735&source=collection&query=Roll",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "17376",
        "name": "Glen's Bakehouse",
        "cloudinaryImageId": "m6jahioyu7zrodei5pcq",
        "locality": "Lavelle Road",
        "areaName": "Ashok Nagar",
        "costForTwo": "₹500 for two",
        "cuisines": [
        "Desserts",
        "Bakery",
        "Beverages",
        "Continental",
        "Italian"
        ],
        "avgRating": 4.7,
        "parentId": "3220",
        "avgRatingString": "4.7",
        "totalRatingsString": "25K+",
        "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        }
        }
        ]
        },
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.4",
        "ratingCount": "10K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=17376&source=collection&query=Roll",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "10820",
        "name": "California Burrito",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/0e28a355-210c-4fe3-9d60-596c7fc89ec6_10820.jpg",
        "locality": "Koramangala",
        "areaName": "Koramangala",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Mexican",
        "American",
        "Salads",
        "Continental",
        "Keto",
        "Healthy Food",
        "Beverages",
        "Snacks",
        "Desserts",
        "Fast Food"
        ],
        "avgRating": 4.6,
        "parentId": "1252",
        "avgRatingString": "4.6",
        "totalRatingsString": "42K+",
        "promoted": true,
        "adTrackingId": "cid=26019444~p=9~adgrpid=26019444#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=10820~eid=7cd51bef-b442-4c70-a63f-bc55ef59e47c~srvts=1742233382182~collid=83669",
        "sla": {
        "deliveryTime": 38,
        "lastMileTravel": 6.4,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "6.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 01:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textExtendedBadges": {},
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
        "description": "Delivery!"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.3",
        "ratingCount": "2.2K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26019444",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=10820&source=collection&query=Roll",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "43836",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
        "locality": "MG Road",
        "areaName": "Ashok Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "25K+",
        "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 02:45:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        },
        {
        "imageId": "Rxawards/_CATEGORY-Burger.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        }
        },
        {
        "attributes": {
        "description": "Delivery!",
        "imageId": "Rxawards/_CATEGORY-Burger.png"
        }
        }
        ]
        },
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=43836&source=collection&query=Roll",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "29784",
        "name": "CakeZone Patisserie",
        "cloudinaryImageId": "bpjrjyyc7dohgpf4bp4r",
        "locality": "Magrath Road",
        "areaName": "Indiranagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Bakery",
        "Desserts",
        "Sweets",
        "Ice Cream"
        ],
        "avgRating": 4.5,
        "parentId": "7003",
        "avgRatingString": "4.5",
        "totalRatingsString": "38K+",
        "promoted": true,
        "adTrackingId": "cid=26491925~p=10~adgrpid=26491925#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=29784~eid=6c41e0cf-cba2-49af-ab75-ca45a2866793~srvts=1742233382182~collid=83669",
        "sla": {
        "deliveryTime": 43,
        "lastMileTravel": 5.6,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "5.6 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 02:00:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "description": "",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "2.6",
        "ratingCount": "9"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26491925",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=29784&source=collection&query=Roll",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "3369",
        "name": "Truffles",
        "cloudinaryImageId": "pw6bof8c9kb7ilwzjfao",
        "locality": "St. Marks Road",
        "areaName": "St. Marks Road",
        "costForTwo": "₹450 for two",
        "cuisines": [
        "American",
        "Desserts",
        "Continental",
        "Italian"
        ],
        "avgRating": 4.6,
        "parentId": "218065",
        "avgRatingString": "4.6",
        "totalRatingsString": "144K+",
        "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 00:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        },
        {
        "imageId": "Rxawards/_CATEGORY-Burger.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        }
        },
        {
        "attributes": {
        "imageId": "Rxawards/_CATEGORY-Burger.png",
        "description": "Delivery!"
        }
        }
        ]
        },
        "textExtendedBadges": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.5",
        "ratingCount": "20K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=3369&source=collection&query=Roll",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "712380",
        "name": "Chicago Pizza",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/15/b87ec958-6501-4035-9d83-27657f7aee24_749632db-fa7e-4741-ae54-cf97791c4a01.jpeg",
        "locality": "khb colony",
        "areaName": "Koramangala",
        "costForTwo": "₹500 for two",
        "cuisines": [
        "Pizzas",
        "Fast Food",
        "Italian"
        ],
        "avgRating": 4.1,
        "parentId": "60277",
        "avgRatingString": "4.1",
        "totalRatingsString": "466",
        "promoted": true,
        "adTrackingId": "cid=26481482~p=12~adgrpid=26481482#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=712380~eid=6ada1b12-ea41-4cf8-b6d7-5909a58b92c7~srvts=1742233382182~collid=83669",
        "sla": {
        "deliveryTime": 52,
        "lastMileTravel": 6.7,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "6.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 01:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹119",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.8",
        "ratingCount": "615"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26481482",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=712380&source=collection&query=Roll",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        }
        ],
        "firstOffsetRequest": true,
        "nextFetch": 3
        },
        "tid": "1e614ade-cb34-451d-b34e-cc9289e8c728",
        "sid": "jim07d90-5c2e-40e3-9e25-7fab3245fcad",
        "deviceId": "17fb36c2-a590-69ac-c84b-c7f953153cb1",
        "csrfToken": "EChKDmqFiYxi-gVaG60KI_R91KPQyB2K_FkNR_qo"
        },
      southIndian:{
        "statusCode": 0,
        "data": {
        "statusMessage": "done successfully",
        "pageOffset": {
        "nextOffset": "CI5kEOskKICItpqFtryELDDDDjgE",
        "widgetOffset": {
        "restaurantCountWidget": "",
        "inlineFacetFilter": "",
        "collectionV5RestaurantListWidget_SimRestoRelevance_food": "8",
        "collectionV5MastheadWidget": ""
        }
        },
        "cards": [
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
        "collectionId": "83634",
        "title": "South Indian",
        "description": "Explore hot & spicy dishes that are a specialty of South India.",
        "imageId": "COLLECTIONS/IMAGES/MERCH/2024/8/20/a2d9550b-f4cf-4dbc-87ec-42c82405964a_South Indian (2).png",
        "aspectRatio": "3.44",
        "cta": {
        "link": "swiggy://collectionV2?collection_id=83634&tags=layout_CCS_SouthIndian,south%20indian,layout_SouthIndian,ads_pc_south_indian",
        "type": "collectionv2"
        },
        "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        "count": "124 restaurants"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
        "sortConfigs": [
        {
        "key": "relevance",
        "title": "Relevance (Default)",
        "selected": true,
        "defaultSelection": true
        },
        {
        "key": "deliveryTimeAsc",
        "title": "Delivery Time"
        },
        {
        "key": "modelBasedRatingDesc",
        "title": "Rating"
        },
        {
        "key": "costForTwoAsc",
        "title": "Cost: Low to High"
        },
        {
        "key": "costForTwoDesc",
        "title": "Cost: High to Low"
        }
        ],
        "restaurantCount": 124,
        "facetList": [
        {
        "label": "10 Mins Delivery",
        "id": "isRestaurantBolt",
        "selection": "SELECT_TYPE_SINGLESELECT",
        "facetInfo": [
        {
        "label": "10 Mins Delivery",
        "id": "isRestaurantBoltfacetquery0",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_FLATTENED",
        "subLabel": "Filterby",
        "icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
        },
        {
        "label": "Veg/Non-Veg",
        "id": "isVeg",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
        {
        "label": "Non Veg",
        "id": "isVegfacetquery0",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Pure Veg",
        "id": "isVegfacetquery1",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
        },
        {
        "label": "Ratings",
        "id": "rating",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
        {
        "label": "Ratings",
        "id": "ratingfacetquery0",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Ratings 4.0+",
        "id": "ratingfacetquery1",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Ratings 4.5+",
        "id": "ratingfacetquery2",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
        },
        {
        "label": "Delivery Time",
        "id": "deliveryTime",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
        {
        "label": "Less than 30 mins",
        "id": "deliveryTimefacetquery0",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Less than 45 mins",
        "id": "deliveryTimefacetquery1",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
        },
        {
        "label": "Cost For Two",
        "id": "costForTwo",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
        {
        "label": "Less than Rs. 300",
        "id": "costForTwofacetquery0",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Rs.300 - Rs.600",
        "id": "costForTwofacetquery1",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Greater than Rs. 600",
        "id": "costForTwofacetquery2",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
        }
        ]
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        "layout": {
        "rows": 1,
        "widgetPadding": {
        "left": 16,
        "right": 16
        },
        "scrollBar": {},
        "widgetTheme": {
        "defaultMode": {
        "backgroundColour": "#FFFFFF",
        "theme": "THEME_TYPE_LIGHT"
        },
        "darkMode": {
        "backgroundColour": "#1B3028",
        "theme": "THEME_TYPE_DARK"
        }
        }
        },
        "id": "restaurantCountWidget",
        "gridElements": {
        "infoWithStyle": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
        "text": "124 Restaurants to explore",
        "headerStyling": {
        "textSize": 15,
        "textColor": "text_color_highest_emphasis",
        "textFontName": "FONT_NAME_HEADER_H5",
        "maxLines": 1
        }
        }
        }
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "3241",
        "name": "Meghana Foods",
        "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
        "locality": "Residency Road",
        "areaName": "Residency Road",
        "costForTwo": "₹500 for two",
        "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "Chinese",
        "Seafood"
        ],
        "avgRating": 4.7,
        "parentId": "635",
        "avgRatingString": "4.7",
        "totalRatingsString": "83K+",
        "promoted": true,
        "adTrackingId": "cid=26286853~p=2~adgrpid=26286853#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=3241~eid=7e188a58-9b48-4c79-a22e-3f40b1c50cc0~srvts=1742233555254~collid=83634",
        "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "Rxawards/_CATEGORY-Biryani.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "Rxawards/_CATEGORY-Biryani.png",
        "description": "Delivery!"
        }
        }
        ]
        },
        "textExtendedBadges": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.3",
        "ratingCount": "21K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26286853",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=3241&source=collection&query=South%20Indian",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "451468",
        "name": "Kentacky Chicken Corner",
        "cloudinaryImageId": "tltk4uz2na8q44tinrnf",
        "locality": "Richmond Town",
        "areaName": "Richmond Road",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "North Indian",
        "Andhra",
        "Seafood",
        "Indian"
        ],
        "avgRating": 4.3,
        "parentId": "271532",
        "avgRatingString": "4.3",
        "totalRatingsString": "585",
        "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:45:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        }
        }
        ]
        },
        "textExtendedBadges": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "3.9",
        "ratingCount": "458"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=451468&source=collection&query=South%20Indian",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "583",
        "name": "Hotel Empire",
        "cloudinaryImageId": "r4mw2xp0djz0pscwmiop",
        "locality": "Jayanagar",
        "areaName": "Jayanagar",
        "costForTwo": "₹450 for two",
        "cuisines": [
        "Kebabs",
        "Biryani"
        ],
        "avgRating": 4.4,
        "parentId": "475",
        "avgRatingString": "4.4",
        "totalRatingsString": "71K+",
        "promoted": true,
        "adTrackingId": "cid=26538119~p=5~adgrpid=26538119#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=583~eid=bd6ce278-eea2-4aff-9b18-dee71c6c9458~srvts=1742233555254~collid=83634",
        "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 02:45:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "Delivery!",
        "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
        }
        }
        ]
        },
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "15% OFF",
        "subHeader": "ABOVE ₹3000",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.2",
        "ratingCount": "37K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26538119",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=583&source=collection&query=South%20Indian",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "884006",
        "name": "Paragon Restaurant Since 1939",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/13/069de1d3-5d52-470e-92b0-021b17642b51_884006.jpg",
        "locality": "Shanthala Nagar",
        "areaName": "Central Bangalore",
        "costForTwo": "₹700 for two",
        "cuisines": [
        "Kerala",
        "South Indian",
        "Indian",
        "Chinese"
        ],
        "avgRating": 4.5,
        "parentId": "518652",
        "avgRatingString": "4.5",
        "totalRatingsString": "1.6K+",
        "sla": {
        "deliveryTime": 38,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:30:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=884006&source=collection&query=South%20Indian",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "868477",
        "name": "Haldiram's Restaurant",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/9/8f7b719f-6dc8-439a-aaa9-e41c91e3e037_868477.jpg",
        "locality": "Sampige Road",
        "areaName": "Malleshwaram",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "South Indian",
        "South American",
        "Fast Food"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "351771",
        "avgRatingString": "4.3",
        "totalRatingsString": "440",
        "promoted": true,
        "adTrackingId": "cid=25885728~p=11~adgrpid=25885728#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=868477~eid=7d727c1e-b7e0-47bd-822a-e76f257b98c0~srvts=1742233555254~collid=83634",
        "sla": {
        "deliveryTime": 39,
        "lastMileTravel": 6.6,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "6.6 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 01:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textExtendedBadges": {},
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
        "description": "Delivery!"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "ABOVE ₹2000",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "25885728",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=868477&source=collection&query=South%20Indian",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "421765",
        "name": "Karavali Fine Dine",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/3/552e8c0a-b2e6-432e-8593-f7695555d68c_421765.s.jpg",
        "locality": "Residency Road",
        "areaName": "Brigade Road",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Mangalorean",
        "Seafood",
        "Chinese",
        "Coastal"
        ],
        "avgRating": 4.3,
        "parentId": "115032",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.4K+",
        "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textExtendedBadges": {},
        "textBased": {},
        "imageBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.5",
        "ratingCount": "3.8K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=421765&source=collection&query=South%20Indian",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "684427",
        "name": "Cafe Amudham",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/27/cbdfa376-8c8c-4ca8-aaca-6c1982eff13c_684427 (1) (1).jpg",
        "locality": "Wilson Garden",
        "areaName": "Jayanagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "South Indian",
        "Snacks"
        ],
        "avgRating": 4.6,
        "parentId": "396620",
        "avgRatingString": "4.6",
        "totalRatingsString": "8.8K+",
        "promoted": true,
        "adTrackingId": "cid=26289840~p=12~adgrpid=26289840#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=684427~eid=de14e6f2-ac2a-4389-8fb1-007336daa3e0~srvts=1742233555254~collid=83634",
        "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "description": "",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        }
        ]
        }
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.3",
        "ratingCount": "3.6K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26289840",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=684427&source=collection&query=South%20Indian",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        }
        ],
        "firstOffsetRequest": true,
        "nextFetch": 3
        },
        "tid": "1e614ade-cb34-451d-b34e-cc9289e8c728",
        "sid": "jim07d90-5c2e-40e3-9e25-7fab3245fcad",
        "deviceId": "17fb36c2-a590-69ac-c84b-c7f953153cb1",
        "csrfToken": "WWVn7FAJMRJn-PMEjH2yD5HTYKuoRqQ2lHzf2Cck"
        },
      parota:{
        "statusCode": 0,
        "data": {
        "statusMessage": "done successfully",
        "pageOffset": {
        "nextOffset": "CP3//////////wEQBCABKICwwtGE1476CjgE",
        "widgetOffset": {
        "collectionV5FilterAndSortWidget": "",
        "collectionV5RestaurantListWidget": "14",
        "collectionV5MastheadWidget": ""
        }
        },
        "cards": [
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
        "collectionId": "80477",
        "title": "Parotta",
        "description": "Bring home a plate of flaky & soft Parottas for a perfect meal. ",
        "imageId": "COLLECTIONS/IMAGES/MERCH/2024/7/17/737da51e-af45-4ca8-bbac-2ee26be41455_parotta.png",
        "aspectRatio": "3.44",
        "cta": {
        "link": "swiggy://collectionV2?collection_id=80477&tags=layout_BAU_Contextual,parotta",
        "type": "collectionv2"
        },
        "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        "count": "100 restaurants"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.FilterSortWidget",
        "sortConfigs": [
        {
        "key": "relevance",
        "title": "Relevance (Default)",
        "selected": true,
        "defaultSelection": true
        },
        {
        "key": "deliveryTimeAsc",
        "title": "Delivery Time"
        },
        {
        "key": "modelBasedRatingDesc",
        "title": "Rating"
        },
        {
        "key": "costForTwoAsc",
        "title": "Cost: Low to High"
        },
        {
        "key": "costForTwoDesc",
        "title": "Cost: High to Low"
        }
        ],
        "restaurantCount": 100
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "30532",
        "name": "Hotel Empire",
        "cloudinaryImageId": "rr7pmwfukwldpp3eaxo3",
        "locality": "Infantry Road ",
        "areaName": "Infantry Road",
        "costForTwo": "₹450 for two",
        "cuisines": [
        "Kebabs",
        "Biryani"
        ],
        "avgRating": 4.5,
        "parentId": "475",
        "avgRatingString": "4.5",
        "totalRatingsString": "19K+",
        "promoted": true,
        "adTrackingId": "cid=26538123~p=7~adgrpid=26538123#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=30532~eid=68d0ede5-db7d-4646-a7c3-670c8b38f485~srvts=1742233773337~collid=80477",
        "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 02:45:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "Delivery!",
        "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
        }
        }
        ]
        },
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "15% OFF",
        "subHeader": "ABOVE ₹3000",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.3",
        "ratingCount": "19K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26538123",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=30532&source=collection&query=PAROTTA",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "69354",
        "name": "No 10 Fort Cochin",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/2/fb008b88-c4e4-4f64-9712-3282a54218e2_69354.jpg",
        "locality": "St. Marks Road",
        "areaName": "St. Marks Road",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Seafood",
        "Kerala",
        "Biryani",
        "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "9085",
        "avgRatingString": "4.4",
        "totalRatingsString": "11K+",
        "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
        "description": "bolt!"
        }
        }
        ]
        },
        "textExtendedBadges": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.3",
        "ratingCount": "3.4K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=69354&source=collection&query=PAROTTA",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "102334",
        "name": "Dindigul Thalappakatti",
        "cloudinaryImageId": "ogidjgqgh5w4otvuiipj",
        "locality": "Mg Road",
        "areaName": "Indiranagar",
        "costForTwo": "₹650 for two",
        "cuisines": [
        "Biryani",
        "Barbecue",
        "South Indian",
        "Chinese",
        "North Indian"
        ],
        "avgRating": 4.4,
        "parentId": "332",
        "avgRatingString": "4.4",
        "totalRatingsString": "8.9K+",
        "promoted": true,
        "adTrackingId": "cid=26289649~p=9~adgrpid=26289649#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=102334~eid=e5221a0d-edfa-4952-984e-a38fc90575d5~srvts=1742233773337~collid=80477",
        "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textExtendedBadges": {},
        "textBased": {},
        "imageBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹179",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26289649",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=102334&source=collection&query=PAROTTA",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "884006",
        "name": "Paragon Restaurant Since 1939",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/13/069de1d3-5d52-470e-92b0-021b17642b51_884006.jpg",
        "locality": "Shanthala Nagar",
        "areaName": "Central Bangalore",
        "costForTwo": "₹700 for two",
        "cuisines": [
        "Kerala",
        "South Indian",
        "Indian",
        "Chinese"
        ],
        "avgRating": 4.5,
        "parentId": "518652",
        "avgRatingString": "4.5",
        "totalRatingsString": "1.6K+",
        "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:30:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textExtendedBadges": {},
        "textBased": {},
        "imageBased": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=884006&source=collection&query=PAROTTA",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "684427",
        "name": "Cafe Amudham",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/27/cbdfa376-8c8c-4ca8-aaca-6c1982eff13c_684427 (1) (1).jpg",
        "locality": "Wilson Garden",
        "areaName": "Jayanagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "South Indian",
        "Snacks"
        ],
        "avgRating": 4.6,
        "parentId": "396620",
        "avgRatingString": "4.6",
        "totalRatingsString": "8.8K+",
        "promoted": true,
        "adTrackingId": "cid=26289840~p=11~adgrpid=26289840#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=684427~eid=e10335d8-6b9d-428a-87f9-e430f63b196e~srvts=1742233773337~collid=80477",
        "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "shortDescription": "options available",
        "fontColor": "#7E808C",
        "iconId": "guiltfree/GF_Logo_android_3x",
        "description": ""
        }
        }
        ]
        }
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.3",
        "ratingCount": "3.6K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26289840",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=684427&source=collection&query=PAROTTA",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "396108",
        "name": "Suzy Q",
        "cloudinaryImageId": "als9xfk5lkrvizbq3lhx",
        "locality": "Cunningham Road",
        "areaName": "Cunningham Road",
        "costForTwo": "₹800 for two",
        "cuisines": [
        "Indian",
        "Continental",
        "Seafood",
        "Asian",
        "Chaat",
        "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "454247",
        "avgRatingString": "4.5",
        "totalRatingsString": "1.7K+",
        "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:30:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.4",
        "ratingCount": "3.7K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=396108&source=collection&query=PAROTTA",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "906629",
        "name": "Madurai Pandyan Mess",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/10/7e12262a-3176-43aa-bcf3-dbe40c407dcf_906629.jpg",
        "locality": "Subedar Chatram Road",
        "areaName": "Malleshwaram",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Chettinad"
        ],
        "avgRating": 4.4,
        "parentId": "526883",
        "avgRatingString": "4.4",
        "totalRatingsString": "331",
        "promoted": true,
        "adTrackingId": "cid=26536148~p=13~adgrpid=26536148#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=906629~eid=caa6e3c7-d6d0-4765-9f29-0376e0709f15~srvts=1742233773337~collid=80477",
        "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 4.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 00:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹150",
        "discountTag": "SAVE BIG",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26536148",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=906629&source=collection&query=PAROTTA",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "396750",
        "name": "The Biryani Life",
        "cloudinaryImageId": "wvjsuvqrd6ahqqyhmnrt",
        "locality": "Residency Road",
        "areaName": "Central Bangalore",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 3.8,
        "parentId": "8496",
        "avgRatingString": "3.8",
        "totalRatingsString": "436",
        "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹159",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=396750&source=collection&query=PAROTTA",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "200767",
        "name": "Sharief Bhai Biryani",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/ca3b7b5c-1fbd-478d-929b-5f1dc2936177_200767.jpg",
        "locality": "2nd Stage",
        "areaName": "Indiranagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Biryani",
        "South Indian",
        "Kebabs",
        "Ramzan Special",
        "Sweets",
        "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "469102",
        "avgRatingString": "4.3",
        "totalRatingsString": "20K+",
        "promoted": true,
        "adTrackingId": "cid=26525452~p=14~adgrpid=26525452#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=200767~eid=181f3476-4262-4584-8997-68f11fa914af~srvts=1742233773337~collid=80477",
        "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 5.9,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "5.9 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "Rxawards/_CATEGORY-Biryani.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "Delivery!",
        "imageId": "Rxawards/_CATEGORY-Biryani.png"
        }
        }
        ]
        },
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.1",
        "ratingCount": "1.3K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26525452",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=200767&source=collection&query=PAROTTA",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "421765",
        "name": "Karavali Fine Dine",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/3/552e8c0a-b2e6-432e-8593-f7695555d68c_421765.s.jpg",
        "locality": "Residency Road",
        "areaName": "Brigade Road",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Mangalorean",
        "Seafood",
        "Chinese",
        "Coastal"
        ],
        "avgRating": 4.3,
        "parentId": "115032",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.4K+",
        "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.5",
        "ratingCount": "3.8K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=421765&source=collection&query=PAROTTA",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "31194",
        "name": "Tasty Magic",
        "cloudinaryImageId": "lzjfzl3tqhgtudfb7icc",
        "locality": "BTM Layout",
        "areaName": "BTM Layout",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Chinese",
        "Arabian",
        "North Indian",
        "Desserts",
        "Biryani",
        "South Indian"
        ],
        "avgRating": 3.8,
        "parentId": "202073",
        "avgRatingString": "3.8",
        "totalRatingsString": "4.9K+",
        "promoted": true,
        "adTrackingId": "cid=25885214~p=16~adgrpid=25885214#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=31194~eid=191cea72-cf50-46e6-88d3-badbeedb939c~srvts=1742233773337~collid=80477",
        "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 6.6,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "6.6 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 02:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "3.8",
        "ratingCount": "2.9K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "25885214",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=31194&source=collection&query=PAROTTA",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "748103",
        "name": "Thenga Manga by Chef Pillai",
        "cloudinaryImageId": "2d77b522e8d5845b1f4a72fa68bb5d18",
        "locality": "Brigade Road",
        "areaName": "Central Bangalore",
        "costForTwo": "₹500 for two",
        "cuisines": [
        "Chinese",
        "Biryani"
        ],
        "avgRating": 4.1,
        "parentId": "447109",
        "avgRatingString": "4.1",
        "totalRatingsString": "680",
        "sla": {
        "deliveryTime": 39,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textExtendedBadges": {},
        "textBased": {},
        "imageBased": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "3.1",
        "ratingCount": "120"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=748103&source=collection&query=PAROTTA",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "718106",
        "name": "Suvaii- A Pandyan Legacy",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/05290256-23a1-4da2-807a-6bb7d38a4c7b_718106.jpg",
        "locality": "Indiranagar",
        "areaName": "Indiranagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Chettinad",
        "South Indian",
        "Indian",
        "Tandoor",
        "briyani"
        ],
        "avgRating": 4.1,
        "parentId": "432329",
        "avgRatingString": "4.1",
        "totalRatingsString": "1.0K+",
        "promoted": true,
        "adTrackingId": "cid=26506826~p=21~adgrpid=26506826#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=718106~eid=48413fef-bf6e-44e6-910c-62f482b6106d~srvts=1742233773338~collid=80477",
        "sla": {
        "deliveryTime": 41,
        "lastMileTravel": 6.2,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "6.2 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textExtendedBadges": {},
        "textBased": {},
        "imageBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.2",
        "ratingCount": "3.6K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26506826",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=718106&source=collection&query=PAROTTA",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget"
        }
        }
        }
        ],
        "firstOffsetRequest": true,
        "nextFetch": 3
        },
        "tid": "1e614ade-cb34-451d-b34e-cc9289e8c728",
        "sid": "jim07d90-5c2e-40e3-9e25-7fab3245fcad",
        "deviceId": "17fb36c2-a590-69ac-c84b-c7f953153cb1",
        "csrfToken": "6hrpAKUCPq9i-OFV8mKVQ7Cezlu7qGOi5jBcmeI0"
        },
      pavbaji:{
        "statusCode": 0,
        "data": {
        "statusMessage": "done successfully",
        "pageOffset": {
        "nextOffset": "CLlkEPQ1KICY0/zExNC3JDC+ETgE",
        "widgetOffset": {
        "restaurantCountWidget": "",
        "collectionV5RestaurantListWidget_Contextual": "11",
        "inlineFacetFilter": "",
        "collectionV5MastheadWidget": ""
        }
        },
        "cards": [
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
        "collectionId": "80362",
        "title": "Pav Bhaji",
        "description": "Flavourful Pav Bhaji that will remind you of the streets of Mumbai in every bite.",
        "imageId": "COLLECTIONS/IMAGES/MERCH/2024/7/17/3d4ace6a-faa4-481b-aed2-dd52b5e04b18_pav bhaji.png",
        "aspectRatio": "3.44",
        "cta": {
        "link": "swiggy://collectionV2?collection_id=80362&tags=layout_PavBhaji_Contextual,pav_bhaji",
        "type": "collectionv2"
        },
        "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        "count": "20 restaurants"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
        "sortConfigs": [
        {
        "key": "relevance",
        "title": "Relevance (Default)",
        "selected": true,
        "defaultSelection": true
        },
        {
        "key": "deliveryTimeAsc",
        "title": "Delivery Time"
        },
        {
        "key": "modelBasedRatingDesc",
        "title": "Rating"
        },
        {
        "key": "costForTwoAsc",
        "title": "Cost: Low to High"
        },
        {
        "key": "costForTwoDesc",
        "title": "Cost: High to Low"
        }
        ],
        "restaurantCount": 20,
        "facetList": [
        {
        "label": "Veg/Non-Veg",
        "id": "isVeg",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
        {
        "label": "Non Veg",
        "id": "isVegfacetquery0",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Pure Veg",
        "id": "isVegfacetquery1",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
        },
        {
        "label": "Ratings",
        "id": "rating",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
        {
        "label": "Ratings",
        "id": "ratingfacetquery0",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Ratings 4.0+",
        "id": "ratingfacetquery1",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Ratings 4.5+",
        "id": "ratingfacetquery2",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
        },
        {
        "label": "Delivery Time",
        "id": "deliveryTime",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
        {
        "label": "Less than 30 mins",
        "id": "deliveryTimefacetquery0",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Less than 45 mins",
        "id": "deliveryTimefacetquery1",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
        },
        {
        "label": "Cost For Two",
        "id": "costForTwo",
        "selection": "SELECT_TYPE_MULTISELECT",
        "facetInfo": [
        {
        "label": "Less than Rs. 300",
        "id": "costForTwofacetquery0",
        "analytics": {},
        "openFilter": true
        },
        {
        "label": "Rs.300 - Rs.600",
        "id": "costForTwofacetquery1",
        "analytics": {},
        "openFilter": true
        }
        ],
        "viewType": "VIEW_TYPE_HALF_CARD",
        "subLabel": "Filterby",
        "openFilter": true
        }
        ]
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        "layout": {
        "rows": 1,
        "widgetPadding": {
        "left": 16,
        "right": 16
        },
        "scrollBar": {},
        "widgetTheme": {
        "defaultMode": {
        "backgroundColour": "#FFFFFF",
        "theme": "THEME_TYPE_LIGHT"
        },
        "darkMode": {
        "backgroundColour": "#1B3028",
        "theme": "THEME_TYPE_DARK"
        }
        }
        },
        "id": "restaurantCountWidget",
        "gridElements": {
        "infoWithStyle": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
        "text": "Restaurants to explore",
        "headerStyling": {
        "textSize": 15,
        "textColor": "text_color_highest_emphasis",
        "textFontName": "FONT_NAME_HEADER_H5",
        "maxLines": 1
        }
        }
        }
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "892962",
        "name": "Arambam - Flavours of South",
        "cloudinaryImageId": "bcb08f30ebb9ceb640efbbe3a0899b0f",
        "locality": "Dr Rajkumar Road",
        "areaName": "Rajajinagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "South Indian",
        "Healthy Food"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "581903",
        "avgRatingString": "4.2",
        "totalRatingsString": "183",
        "promoted": true,
        "adTrackingId": "cid=26536164~p=0~adgrpid=26536164#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=892962~eid=d5facefd-1857-47d5-9e1f-a2609a5ba23a~srvts=1742235775652~collid=80362",
        "sla": {
        "deliveryTime": 45,
        "lastMileTravel": 9.7,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "9.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 02:00:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "brand",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "fontColor": "#7E808C",
        "iconId": "guiltfree/GF_Logo_android_3x",
        "description": "",
        "shortDescription": "brand"
        }
        }
        ]
        },
        "textBased": {},
        "imageBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "maxDuration": "3000",
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26536164",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=892962&source=collection&query=Pav%20bhaji",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "750396",
        "name": "Daily Kitchen - Homely Meals",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750396.JPG",
        "locality": "Lakshmi Road",
        "areaName": "Central Bangalore",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Home Food",
        "Indian",
        "North Indian",
        "Thalis"
        ],
        "avgRating": 4.5,
        "parentId": "444382",
        "avgRatingString": "4.5",
        "totalRatingsString": "610",
        "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 2.6,
        "serviceability": "SERVICEABLE",
        "slaString": "10-20 mins",
        "lastMileTravelString": "2.6 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 02:00:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "options available",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "fontColor": "#7E808C",
        "iconId": "guiltfree/GF_Logo_android_3x",
        "description": "",
        "shortDescription": "options available"
        }
        }
        ]
        },
        "textBased": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹100",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "maxDuration": "3000",
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=750396&source=collection&query=Pav%20bhaji",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "737438",
        "name": "Haldiram's Restaurant",
        "cloudinaryImageId": "1abb89624b491497c8cff182d95ac457",
        "locality": "Basaveshwara Nagar",
        "areaName": "Basaveshwara Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "North Indian",
        "South Indian",
        "Biryani",
        "Chinese",
        "Chaat",
        "Thalis",
        "Bakery",
        "Sweets",
        "Beverages",
        "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "351771",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.3K+",
        "promoted": true,
        "adTrackingId": "cid=26316461~p=1~adgrpid=26316461#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=737438~eid=f14683bf-a57b-4df6-9a27-14b13f72b887~srvts=1742235775652~collid=80362",
        "sla": {
        "deliveryTime": 51,
        "lastMileTravel": 8.8,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "8.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-17 23:59:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Thali.png",
        "description": "Delivery!"
        }
        }
        ]
        },
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "ABOVE ₹2000",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "maxDuration": "3000",
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "4.0",
        "ratingCount": "740"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26316461",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=737438&source=collection&query=Pav%20bhaji",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "502999",
        "name": "BOX8 - Desi Meals",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/6cc5a30b-6c1e-4535-9108-48994526fe60_502999.jpg",
        "locality": "Lakshmi Road",
        "areaName": "Central Bangalore",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "North Indian",
        "Biryani",
        "Thalis",
        "Home Food"
        ],
        "avgRating": 4.6,
        "parentId": "10655",
        "avgRatingString": "4.6",
        "totalRatingsString": "2.1K+",
        "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 2.6,
        "serviceability": "SERVICEABLE",
        "slaString": "10-20 mins",
        "lastMileTravelString": "2.6 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 02:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png",
        "description": "Delivery!"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "Delivery!",
        "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png"
        }
        }
        ]
        },
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "maxDuration": "3000",
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=502999&source=collection&query=Pav%20bhaji",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "887060",
        "name": "Madras Curd Rice Company",
        "cloudinaryImageId": "bcb08f30ebb9ceb640efbbe3a0899b0f",
        "locality": "Dr Rajkumar Rd",
        "areaName": "Rajajinagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "South Indian",
        "Indian"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "356962",
        "avgRatingString": "4.1",
        "totalRatingsString": "150",
        "promoted": true,
        "adTrackingId": "cid=26524354~p=2~adgrpid=26524354#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=887060~eid=c4233f26-65b7-421c-b8ee-54bd427b919a~srvts=1742235775652~collid=80362",
        "sla": {
        "deliveryTime": 44,
        "lastMileTravel": 9.7,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "9.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 02:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        }
        ]
        },
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "maxDuration": "3000",
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26524354",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=887060&source=collection&query=Pav%20bhaji",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "991399",
        "name": "PALOODA",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/21/9469177a-d0e1-4014-99b7-70b6ab9b2bf6_efd41250-b10c-4ea3-9d59-b3ffbef57900.jpg",
        "locality": "BTM",
        "areaName": "BTM",
        "costForTwo": "₹500 for two",
        "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
        ],
        "avgRating": 2.9,
        "parentId": "320709",
        "avgRatingString": "2.9",
        "totalRatingsString": "24",
        "sla": {
        "deliveryTime": 39,
        "lastMileTravel": 6.9,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "6.9 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 02:50:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textExtendedBadges": {},
        "textBased": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "maxDuration": "3000",
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=991399&source=collection&query=Pav%20bhaji",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "781328",
        "name": "Millet Express",
        "cloudinaryImageId": "bcb08f30ebb9ceb640efbbe3a0899b0f",
        "locality": "Dr Rajkumar Road",
        "areaName": "Rajajinagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Healthy Food",
        " South Indian"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "10639",
        "avgRatingString": "4.2",
        "totalRatingsString": "1.1K+",
        "promoted": true,
        "adTrackingId": "cid=25886150~p=3~adgrpid=25886150#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=781328~eid=426803c1-976c-49b0-b1cf-21a31319a814~srvts=1742235775652~collid=80362",
        "sla": {
        "deliveryTime": 44,
        "lastMileTravel": 9.7,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "9.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 02:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ],
        "textExtendedBadges": [
        {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "shortDescription": "brand",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "pureveg",
        "imageId": "v1695133679/badges/Pure_Veg111.png"
        }
        }
        ]
        },
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "iconId": "guiltfree/GF_Logo_android_3x",
        "description": "",
        "shortDescription": "brand",
        "fontColor": "#7E808C"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹69",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "maxDuration": "3000",
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "25886150",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=781328&source=collection&query=Pav%20bhaji",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "963434",
        "name": "Kailasam",
        "cloudinaryImageId": "06cc9c06d5a5e78d9e66da858373d918",
        "locality": "20th Main Road",
        "areaName": "BTM",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Chinese",
        "South Indian",
        "Ice Cream",
        "Juices"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "564418",
        "avgRatingString": "4.4",
        "totalRatingsString": "272",
        "sla": {
        "deliveryTime": 40,
        "lastMileTravel": 7.6,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "7.6 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 01:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textExtendedBadges": {},
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        }
        ]
        }
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "maxDuration": "3000",
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=963434&source=collection&query=Pav%20bhaji",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "203708",
        "name": "Marwadi Chaat Tiffin Services",
        "cloudinaryImageId": "bdfamuctdoyotermeosy",
        "locality": "BTM Layout",
        "areaName": "BTM Layout",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "North Indian"
        ],
        "avgRating": 3.6,
        "parentId": "132854",
        "avgRatingString": "3.6",
        "totalRatingsString": "1.2K+",
        "promoted": true,
        "adTrackingId": "cid=26397957~p=4~adgrpid=26397957#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=203708~eid=10553bad-c7d5-47bd-aaec-0c583915ec3f~srvts=1742235775652~collid=80362",
        "sla": {
        "deliveryTime": 57,
        "lastMileTravel": 9.3,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "9.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-24 00:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textExtendedBadges": {},
        "textBased": {},
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "pureveg",
        "imageId": "v1695133679/badges/Pure_Veg111.png"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹100",
        "logoCtx": {
        "text": "BENEFITS"
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "maxDuration": "3000",
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "2.6",
        "ratingCount": "220"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "26397957",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=203708&source=collection&query=Pav%20bhaji",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        },
        {
        "card": {
        "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
        "id": "906913",
        "name": "Swathi Cafe",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/e1457531-4bbd-4517-b23a-00c251a2ea79_906913 SS.jpg",
        "locality": "Rajajinagar",
        "areaName": "Rajajinagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "South Indian",
        "Beverages",
        "Desserts",
        "Cafe"
        ],
        "avgRating": 4.3,
        "parentId": "527064",
        "avgRatingString": "4.3",
        "totalRatingsString": "153",
        "sla": {
        "deliveryTime": 40,
        "lastMileTravel": 7.6,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "7.6 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2025-03-18 00:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "textBased": {},
        "imageBased": {},
        "textExtendedBadges": {}
        }
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {},
        "commsStyling": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "maxDuration": "3000",
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "3.8",
        "ratingCount": "13K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "requestContexts": [
        "no_rush_dynamic_delfee"
        ]
        },
        "analytics": {},
        "cta": {
        "link": "swiggy://menu?restaurant_id=906913&source=collection&query=Pav%20bhaji",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
        },
        "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
        }
        }
        }
        ],
        "firstOffsetRequest": true,
        "nextFetch": 3
        },
        "tid": "1e614ade-cb34-451d-b34e-cc9289e8c728",
        "sid": "jim07d90-5c2e-40e3-9e25-7fab3245fcad",
        "deviceId": "17fb36c2-a590-69ac-c84b-c7f953153cb1",
        "csrfToken": "3ybboxtoR8sX-mSYta2zZvQrUTop5z4aX1Ysenbg"
        }


    
};

app.use(cors({
  origin: 'https://food-hunt-one.vercel.app/briyani',
}));

app.get('/',(req,res)=>{
  res.send('Welcome to the FoodHunt');
});


app.get('/briyani', (req, res) => {
  res.json(data.briyani);
});

app.get('/pizza', (req, res) => {
  res.json(data.pizza);
});

app.get('/burger', (req, res) => {
  res.json(data.burger);
});

app.get('/dosa', (req, res) => {
  res.json(data.dosa);
});

app.get('/noodels', (req, res) => {
  res.json(data.noodels);
});

app.get('/rolls', (req, res) => {
  res.json(data.rolls);
});

app.get('/southIndian', (req, res) => {
  res.json(data.southIndian);
});

app.get('/parota', (req, res) => {
  res.json(data.parota);
});

app.get('/pavbaji', (req, res) => {
  res.json(data.pavbaji);
});




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
