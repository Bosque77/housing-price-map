export const cities = [
  { city_id: 1, city_name: "San Francisco", state: "California" },
  { city_id: 2, city_name: "New York", state: "New York" },
  { city_id: 3, city_name: "Berkley", state: "California" },
  { city_id: 4, city_name: "Atlanta", state: "Georgia" },
  { city_id: 8, city_name: "Dallas", state: "Texas" },
];

export const regions = [
  {
    region_id: 1,
    region_name: "Bay Area",
    cities: ["San Francisco", "Berkley"],
    region_description: `
      The Bay Area is a metropolitan region located in Northern California, USA, that encompasses the cities and surrounding areas surrounding the San Francisco Bay. The region is known for its diverse culture, innovative technology industry, and stunning natural beauty.

      The Bay Area is home to several major cities, including San Francisco, Oakland, and San Jose, as well as many smaller towns and suburbs. `,
  },
  {
    region_id: 2,
    region_name: "New York",
    cities: ["New York City"],
    region_description: `
    New York is a bustling metropolitan region located in the northeastern part of the United States, known for its iconic skyline, diverse culture, and vibrant energy. 
    The region is home to the city of New York, which is made up of five boroughs: Manhattan, Brooklyn, Queens, the Bronx, and Staten Island. 
    `,
  },
  {
    region_id: 3,
    region_name: "Texas Triangle",
    cities: ["Dallas"],
    region_description: `
    The Texas Triangle is a region in the southern part of the United States that encompasses several major cities, 
    including Houston, Dallas, and Austin, as well as many smaller towns and suburbs.
    `,
  },
];

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

export const cities_for_a_region = ["San Francisco", "Berkley"];

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
    city: "San Fancisco",
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
    city: "New York",
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
    city: "Los Angeles",
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
    city: "Chicago",
    city_id: 4,
  },
];
