export const cities = [
  { city_id: 1, city_name: "San Francisco", state: "California" },
  { city_id: 2, city_name: "New York", state: "New York" },
  { city_id: 3, city_name: "Los Angeles", state: "California" },
  { city_id: 4, city_name: "Chicago", state: "Illinois" },
  { city_id: 5, city_name: "Seattle", state: "Washington" },
  { city_id: 6, city_name: "Houston", state: "Texas" },
  { city_id: 7, city_name: "Miami", state: "Florida" },
  { city_id: 8, city_name: "Dallas", state: "Texas" },
  { city_id: 9, city_name: "Berkley", state: "California" },
];


export const region = [
  { region_id: 1, region_name: "Bay Area" },
  { region_id: 2, region_name: "New York Metro" },
  { region_id: 3, region_name: "Los Angeles Metro" },
]

export const region_has_cities = [
  { region_has_cities_id: 1, region_id: 1, city_id: 1 },
  { region_has_cities_id: 2,  region_id: 2, city_id: 2 },
  { region_has_cities_id: 3,  region_id: 1, city_id: 9 },
];

// const region_has_cities = [
//   { region_has_cities_id: 1, region_name: "Bay Area", city_name: "San Francisco" },
//   { region_has_cities_id: 2, region_name: "New York Metro", city_name: "New York" },
//   { region_has_cities_id: 3, region_name: "Bay Area", city_name: "Berkley" },
// ];

export const region_statistics = [
  {
    region_statistic_id: 1,
    region_id: "Bay Area",
    location_description: "San Francisco and surrounding cities",
    avg_price_per_sq_ft: 500,
    mean_housing_price: 800000,
    five_year_price_gradient: 0.05,
    ten_year_price_gradient: 0.1,
    median_housing_price: 700000,
    date: "2022-01-01",
  },
  {
    region_statistic_id: 2,
    region_name: "New York Metro",
    location_description: "New York City and surrounding cities",
    avg_price_per_sq_ft: 600,
    mean_housing_price: 900000,
    five_year_price_gradient: 0.06,
    ten_year_price_gradient: 0.12,
    median_housing_price: 800000,
    date: "2022-01-01",
  },
  {
    region_statistic_id: 3,
    region_name: "Los Angeles Metro",
    location_description: "Los Angeles and surrounding cities",
    avg_price_per_sq_ft: 400,
    mean_housing_price: 700000,
    five_year_price_gradient: 0.04,
    ten_year_price_gradient: 0.08,
    median_housing_price: 600000,
    date: "2022-01-01",
  },
  {
    region_statistic_id: 4,
    region_name: "Midwest",
    location_description: "Chicago and surrounding cities",
    avg_price_per_sq_ft: 300,
    mean_housing_price: 600000,
    five_year_price_gradient: 0.03,
    ten_year_price_gradient: 0.06,
    median_housing_price: 500000,
    date: "2022-01-01",
  },
  {
    region_statistic_id: 5,
    region_name: "Pacific Northwest",
    location_description: "Seattle and surrounding cities",
    avg_price_per_sq_ft: 450,
    mean_housing_price: 750000,
    five_year_price_gradient: 0.04,
    ten_year_price_gradient: 0.08,
    median_housing_price: 650000,
    date: "2022-01-01",
  },
  {
    region_statistic_id: 6,
    region_name: "Gulf Coast",
    location_description: "Houston and surrounding cities",
    avg_price_per_sq_ft: 350,
    mean_housing_price: 700000,
    five_year_price_gradient: 0.03,
    ten_year_price_gradient: 0.06,
    median_housing_price: 600000,
    date: "2022-01-01",
  },
  {
    region_statistic_id: 7,
    region_name: "South Florida",
    location_description: "Miami and surrounding cities",
    avg_price_per_sq_ft: 500,
    mean_housing_price: 800000,
    five_year_price_gradient: 0.05,
    ten_year_price_gradient: 0.1,
    median_housing_price: 700000,
    date: "2022-01-01",
  },
  {
    region_statistic_id: 8,
    region_name: "North Texas",
    location_description: "Dallas and surrounding cities",
    avg_price_per_sq_ft: 400,
    mean_housing_price: 700000,
    five_year_price_gradient: 0.04,
    ten_year_price_gradient: 0.08,
    median_housing_price: 600000,
    date: "2022-01-01",
  },
  {
    region_statistic_id: 9,
    region_name: "Texas Triangle",
    location_description: "Houston and Dallas",
    avg_price_per_sq_ft: 375,
    mean_housing_price: 700000,
    five_year_price_gradient: 0.037,
    ten_year_price_gradient: 0.074,
    median_housing_price: 650000,
    date: "2022-01-01",
  },
];



export const zillow_estimates = [
  { zillow_estimate_id: 1, zestimate: 2245681, date: "2022-01-01", home_id: 1 },
  { zillow_estimate_id: 2, zestimate: 1245341, date: "2022-01-01", home_id: 2 },
  { zillow_estimate_id: 3, zestimate: 1245481, date: "2022-01-01", home_id: 3 },
  { zillow_estimate_id: 4, zestimate: 7245681, date: "2022-01-01", home_id: 4 },
  { zillow_estimate_id: 5, zestimate: 945681, date: "2022-01-01", home_id: 5 },
  { zillow_estimate_id: 6, zestimate: 4245681, date: "2022-01-01", home_id: 6 },
  { zillow_estimate_id: 7, zestimate: 3245681, date: "2022-01-01", home_id: 7 },
  { zillow_estimate_id: 8, zestimate: 1245681, date: "2022-01-01", home_id: 8 },
];

export const homes = [
  {
    home_id: 1,
    street: "123 Main St",
    sq_ft: 1200,
    num_of_bed: 2,
    num_of_bath: 1,
    year_built: 1990,
    lat: 37.123,
    lng: -122.456,
    zip: "94107",
    city_id: 1,
  },
  {
    home_id: 2,
    street: "456 Elm St from the burrow of the dog",
    sq_ft: 1500,
    num_of_bed: 3,
    num_of_bath: 2,
    year_built: 1980,
    lat: 40.789,
    lng: -73.012,
    zip: "10001",
    city_id: 2,
  },
  {
    home_id: 3,
    street: "789 Oak St",
    sq_ft: 1700,
    num_of_bed: 4,
    num_of_bath: 3,
    year_built: 1970,
    lat: 34.567,
    lng: -118.91,
    zip: "90001",
    city_id: 3,
  },
  {
    home_id: 4,
    street: "246 Birch St",
    sq_ft: 1300,
    num_of_bed: 3,
    num_of_bath: 1,
    year_built: 2000,
    lat: 41.876,
    lng: -87.654,
    zip: "60601",
    city_id: 4,
  },
  {
    home_id: 5,
    street: "333 Pine St",
    sq_ft: 1400,
    num_of_bed: 3,
    num_of_bath: 2,
    year_built: 1985,
    lat: 47.89,
    lng: -122.123,
    zip: "98107",
    city_id: 5,
  },
  {
    home_id: 6,
    street: "444 Cedar St",
    sq_ft: 1600,
    num_of_bed: 4,
    num_of_bath: 2,
    year_built: 1975,
    lat: 29.456,
    lng: -95.678,
    zip: "77001",
    city_id: 6,
  },
  {
    home_id: 7,
    street: "555 Maple St",
    sq_ft: 1800,
    num_of_bed: 4,
    num_of_bath: 3,
    year_built: 1965,
    lat: 25.123,
    lng: -80.456,
    zip: "33101",
    city_id: 7,
  },
  {
    home_id: 8,
    street: "666 Cedar St",
    sq_ft: 1700,
    num_of_bed: 3,
    num_of_bath: 2,
    year_built: 1990,
    lat: 32.789,
    lng: -96.654,
    zip: "75001",
    city_id: 8,
  },
];
