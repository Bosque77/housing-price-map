
--- Data manipulation queries ---
--- Project Group: 83 ---





-- *****  queries for Homes ****

-- display Homes table with : character being used to 
-- denote the variables that will have data from the backend programming language

SELECT Homes.home_id, Homes.street, Homes.sq_ft, Homes.num_of_bed, Homes.num_of_bath FROM Homes
WHERE Homes.city = :city_id;

-- insert new home into Homes with : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO Homes (street, sq_ft, num_of_bed, num_of_bath, year_built, lat, lng, zip, city_id)
VALUES(:street, :sq_ft, :num_of_bed, :num_of_bath, :year_built, :lat, :lng, :zip, (SELECT Cities.city_id FROM Cities WHERE city_name = :city_name));

-- update home in Homes with : character being used to 
-- denote the variables that will have data from the backend programming language
UPDATE Homes
SET street = :street,
    sq_ft = :sq_ft,
    num_of_bed = :num_of_bed,
    num_of_bath = :num_of_bath,
    year_built = :year_built,
    lat = :lat,
    lng = :lng,
    zip = :zip,
    city_id = (SELECT Cities.city_id FROM Cities WHERE city_name = :city_name)
WHERE customer_id = :customer_id_input;

-- delete home in Homes : character being used to 
-- denote the variables that will have data from the backend programming language
DELETE FROM Homes
WHERE Homes.home_id = :home_id;





-- ***** queries for Region_Statistics_has_Cities *****

-- display Region_Statistics_has_Cities table
SELECT * FROM Region_Statistics_has_Cities;

-- insert new relationship into Region_Statistics_has_Cities with : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO Region_Statistics_has_Cities (city_id, region_statistic_id)
VALUES (:city_id, :region_statistic_id)

-- update relationship in Region_Statistics_has_Cities with : character being used to 
-- denote the variables that will have data from the backend programming language
UPDATE Region_Statistics_has_Cities
SET city_id = :city_id,
    region_statistic_id = :region_statistic_id
WHERE region_statistics_has_cities_id = :region_statistics_has_cities_id;

-- delete relationship in Region_Statistics_has_Cities : character being used to 
-- denote the variables that will have data from the backend programming language
DELETE FROM Region_Statistics_has_Cities
WHERE Region_Statistics_has_Cities.region_statistics_has_cities_id = :region_statistics_has_cities_id;

-- ***** queries for Cities *****

-- display Cities table
SELECT * FROM Cities;

-- insert new city into Cities with : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO Cities (city_name, state)
VALUES (:city_name, :state);

-- update city in Cities with : character being used to 
-- denote the variables that will have data from the backend programming language
UPDATE Cities
SET city_name = :city_name,
    state = :state
WHERE Cities.city_id = :city_id;

-- delete city in Cities : character being used to 
-- denote the variables that will have data from the backend programming language
DELETE FROM Cities
WHERE Cities.city_id = :city_id;






-- ***** queries for Region_Statistics ******

-- display Region_Statistics table : character being used to 
-- denote the variables that will have data from the backend programming language
SELECT * FROM Region_Statistics
WHERE Region_Statistics.region_name = :region_name;

-- insert new statistic into Region_Statistics with : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO Region_Statistics (region_name, location_description, avg_price_per_sq_ft, mean_housing_price, five_year_price_gradient, ten_year_price_gradient, median_housing_price, date)
VALUES (:region_name, :location_description, :avg_price_per_sq_ft, :mean_housing_price, :five_year_price_gradient, :ten_year_price_gradient, :median_housing_price, :date)

-- update statistic in Region_Statistics with : character being used to 
-- denote the variables that will have data from the backend programming language
UPDATE Region_Statistics
SET region_name = :region_name,
    location_description = :location_description,
    avg_price_per_sq_ft = :avg_price_per_sq_ft,
    mean_housing_price = :mean_housing_price,
    five_year_price_gradient = :five_year_price_gradient,
    ten_year_price_gradient = :ten_year_price_gradient,
    median_housing_price = :median_housing_price,
    date = :date
WHERE Region_Statistics.region_statistics_id = :region_statistics_id;

-- delete statistic in Region_Statistics : character being used to 
-- denote the variables that will have data from the backend programming language
DELETE FROM Region_Statistics
WHERE Region_Statistics.region_statistics_id = :region_statistics_id;





-- ***** queries for Zillow_Estimates ******

-- display Zillow_Estimates table
SELECT * FROM Zillow_Estimates
WHERE Zillow_Estimates.home_id = :home_id;

-- insert new estimate into Zillow_Estimates with : character being used to 
-- denote the variables that will have data from the backend programming language
INSERT INTO Zillow_Estimates (zestimate, date, home_id)
VALUES (:zestimate, :date, :home_id);

-- update estimate in Zillow_Estimates with : character being used to 
-- denote the variables that will have data from the backend programming language
UPDATE Zillow_Estimates
SET zestimate = :city_name,
    date = :state,
    home_id = :home_id
WHERE Zillow_Estimates.zillow_price_id = :zillow_price_id;

-- delete estimate in Zillow_Estimates : character being used to 
-- denote the variables that will have data from the backend programming language
DELETE FROM Zillow_Estimates
WHERE Zillow_Estimates.zillow_price_id = :zillow_price_id;
