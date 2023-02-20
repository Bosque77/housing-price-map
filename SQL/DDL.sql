--- Data definition file ---
--- project Group: 83 ---

SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;

-- create Cities
CREATE OR REPLACE TABLE Cities (
    city_id INT(10) NOT NULL AUTO_INCREMENT UNIQUE,
    city_name VARCHAR(80) NOT NULL,
    state VARCHAR(45) NOT NULL,
    PRIMARY KEY (city_id)
);

-- create Homes
CREATE OR REPLACE TABLE Homes (
    home_id INT(10) NOT NULL AUTO_INCREMENT UNIQUE,
    street VARCHAR(80) NOT NULL,
    zip VARCHAR(45) NOT NULL,
    sq_ft INT(10) NOT NULL,
    num_of_bed INT(10) NOT NULL,
    num_of_bath INT(10) NOT NULL,
    year_built INT(4) NOT NULL,
    lat DECIMAL(6,3) NOT NULL,
    lng DECIMAL(6,3) NOT NULL,
    city_id INT(10) NOT NULL,
    PRIMARY KEY (home_id),
    FOREIGN KEY (city_id) REFERENCES Cities (city_id) ON DELETE CASCADE
);

-- create Zillow_Estimates
CREATE OR REPLACE TABLE Zillow_Estimates (
    zillow_price_id INT AUTO_INCREMENT UNIQUE NOT NULL,
    zestimate DECIMAL(10,2) NOT NULL,
    date DATE NOT NULL,
    home_id INT(10) NOT NULL,
    PRIMARY KEY (zillow_price_id),
    FOREIGN KEY (home_id) REFERENCES Homes (home_id) ON DELETE CASCADE
);

-- create Region_Statistics
CREATE OR REPLACE TABLE Region_Statistics (
    region_statistic_id INT(10) NOT NULL UNIQUE AUTO_INCREMENT,
    region_name VARCHAR(80),
    avg_price_per_sq_ft DECIMAL(10,2) NOT NULL,
    mean_housing_price DECIMAL(10,2) NOT NULL,
    five_year_price_gradient DECIMAL(10,2) NOT NULL,
    ten_year_price_gradient DECIMAL(10,2) NOT NULL,
    median_housing_price DECIMAL(10,2) NOT NULL,
    location_description VARCHAR(180) NOT NULL,
    date DATE,
    PRIMARY KEY (region_statistic_id)
);

-- create Region_Statistics_has_Cities
CREATE OR REPLACE TABLE Region_Statistics_has_Cities (
    region_statistics_has_cities_id INT NOT NULL UNIQUE AUTO_INCREMENT,
    city_id INT(10) NOT NULL,
    region_statistic_id INT(10) NOT NULL,
    PRIMARY KEY (region_statistics_has_cities_id),
    FOREIGN KEY (city_id) REFERENCES Cities (city_id) ON DELETE CASCADE,
    FOREIGN KEY (region_statistic_id) REFERENCES Region_Statistics (region_statistic_id)
);

-- insert sample data into Cities
INSERT INTO Cities (city_name, state)
VALUES ('San Francisco', 'California'),
       ('New York', 'New York'),
       ('Los Angeles', 'California'),
       ('Chicago', 'Illinois'),
       ('Seattle', 'Washington'),
       ('Houston', 'Texas'),
       ('Miami', 'Florida'),
       ('Dallas', 'Texas');

-- insert sample data into Homes
INSERT INTO Homes (street, sq_ft, num_of_bed, num_of_bath, year_built, lat, lng, zip, city_id)
VALUES
  ('123 Main St', 1200, 2, 1, 1990, 37.123, -122.456, 94107, (SELECT city_id FROM Cities WHERE city_name = 'San Francisco')),
  ('456 Elm St', 1500, 3, 2, 1980, 40.789, -73.012, 10001, (SELECT city_id FROM Cities WHERE city_name = 'New York')),
  ('789 Oak St', 1700, 4, 3, 1970, 34.567, -118.91, 90001, (SELECT city_id FROM Cities WHERE city_name = 'Los Angeles')),
  ('246 Birch St', 1300, 3, 1, 2000, 41.876, -87.654, 60601, (SELECT city_id FROM Cities WHERE city_name = 'Chicago')),
  ('333 Pine St', 1400, 3, 2, 1985, 47.89, -122.123, 98107, (SELECT city_id FROM Cities WHERE city_name = 'Seattle')),
  ('444 Cedar St', 1600, 4, 2, 1975, 29.456, -95.678, 77001, (SELECT city_id FROM Cities WHERE city_name = 'Houston')),
  ('555 Maple St', 1800, 4, 3, 1965, 25.123, -80.456, 33101, (SELECT city_id FROM Cities WHERE city_name = 'Miami')),
  ('666 Cedar St', 1700, 3, 2, 1990, 32.789, -96.654, 75001, (SELECT city_id FROM Cities WHERE city_name = 'Dallas'));

-- insert sample data into Zillow_Estimates
INSERT INTO Zillow_Estimates (zestimate, date, home_id)
VALUES
  (2245681, '2022-01-01', (SELECT home_id FROM Homes WHERE home_id = 1)),
  (1245341, '2022-01-01', (SELECT home_id FROM Homes WHERE home_id = 2)),
  (1245481, '2022-01-01', (SELECT home_id FROM Homes WHERE home_id = 3)),
  (7245681, '2022-01-01', (SELECT home_id FROM Homes WHERE home_id = 4)),
  (945681, '2022-01-01', (SELECT home_id FROM Homes WHERE home_id = 5)),
  (4245681, '2022-01-01', (SELECT home_id FROM Homes WHERE home_id = 6)),
  (3245681, '2022-01-01', (SELECT home_id FROM Homes WHERE home_id = 7)),
  (1245681, '2022-01-01', (SELECT home_id FROM Homes WHERE home_id = 8));


-- insert sample data into Region_Statistics
INSERT INTO Region_Statistics (region_name, location_description, avg_price_per_sq_ft, mean_housing_price, five_year_price_gradient, ten_year_price_gradient, median_housing_price, date)
VALUES
('Bay Area', 'San Francisco and surrounding cities', 500, 800000, 0.05, 0.1, 700000, '2022-01-01'),
('New York Metro', 'New York City and surrounding cities', 600, 900000, 0.06, 0.12, 800000, '2022-01-01'),
('Los Angeles Metro', 'Los Angeles and surrounding cities', 400, 700000, 0.04, 0.08, 600000, '2022-01-01'),
('Midwest', 'Chicago and surrounding cities', 300, 600000, 0.03, 0.06, 500000, '2022-01-01'),
('Pacific Northwest', 'Seattle and surrounding cities', 450, 750000, 0.04, 0.08, 650000, '2022-01-01'),
('Gulf Coast', 'Houston and surrounding cities', 350, 700000, 0.03, 0.06, 600000, '2022-01-01'),
('South Florida', 'Miami and surrounding cities', 500, 800000, 0.05, 0.1, 700000, '2022-01-01'),
('North Texas', 'Dallas and surrounding cities', 400, 700000, 0.04, 0.08, 600000, '2022-01-01'),
('Texas Triangle', 'Houston and Dallas', 375, 700000, 0.037, 0.074, 650000, '2022-01-01');


-- insert sample data into Region_Statistics_has_Cities
INSERT INTO Region_Statistics_has_Cities (city_id, region_statistic_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 9);

SET FOREIGN_KEY_CHECKS=1;
COMMIT;