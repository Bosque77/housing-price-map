INSERT INTO `mydb`.`Cities` (`city_name`, `state`)
VALUES 
  ('San Francisco', 'California'),
  ('New York', 'New York'),
  ('Los Angeles', 'California'),
  ('Chicago', 'Illinois'),
  ('Seattle', 'Washington'),
  ('Houston', 'Texas'),
  ('Miami', 'Florida'),
  ('Dallas', 'Texas');


INSERT INTO `mydb`.`Homes` (`street`, `sq_ft`, `num_of_bed`, `num_of_bath`, `year_built`, `lat`, `lng`, `zip`, `city_id`)
VALUES 
  ('123 Main St', 1200, 2, 1, 1990, 37.123, -122.456, '94107', 1),
  ('456 Elm St', 1500, 3, 2, 1980, 40.789, -73.012, '10001', 2),
  ('789 Oak St', 1700, 4, 3, 1970, 34.567, -118.910, '90001', 3),
  ('246 Birch St', 1300, 3, 1, 2000, 41.876, -87.654, '60601', 4),
  ('333 Pine St', 1400, 3, 2, 1985, 47.890, -122.123, '98107', 5),
  ('444 Cedar St', 1600, 4, 2, 1975, 29.456, -95.678, '77001', 6),
  ('555 Maple St', 1800, 4, 3, 1965, 25.123, -80.456, '33101', 7),
  ('666 Cedar St', 1700, 3, 2, 1990, 32.789, -96.654, '75001', 8);

INSERT INTO `mydb`.`Region_Statistics` (`region_name`, `location_description`, `avg_price_per_sq_ft`, `mean_housing_price`, `five_year_price_gradient`, `ten_year_price_gradient`, `median_housing_price`, `date`)
VALUES 
  ('Bay Area', 'San Francisco and surrounding cities', 500, 800000, 0.05, 0.10, 700000, '2022-01-01'),
  ('New York Metro', 'New York City and surrounding cities', 600, 900000, 0.06, 0.12, 800000, '2022-01-01'),
  ('Los Angeles Metro', 'Los Angeles and surrounding cities', 400, 700000, 0.04, 0.08, 600000, '2022-01-01'),
  ('Midwest', 'Chicago and surrounding cities', 300, 600000, 0.03, 0.06, 500000, '2022-01-01'),
  ('Pacific Northwest', 'Seattle and surrounding cities', 450, 750000, 0.04, 0.08, 650000, '2022-01-01'),
  ('Gulf Coast', 'Houston and surrounding cities', 350, 700000, 0.03, 0.06, 600000, '2022-01-01'),
  ('South Florida', 'Miami and surrounding cities', 500, 800000, 0.05, 0.10, 700000, '2022-01-01'),
  ('North Texas', 'Dallas and surrounding cities', 400, 700000, 0.04, 0.08, 600000, '2022-01-01');


INSERT INTO `mydb`.`Region_Statistics_has_Cities` (`city_id`, `region_statistic_id`)
VALUES 
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5),
  (6, 6),
  (7, 7),
  (8, 8);


INSERT INTO `mydb`.`Region_Statistics` (`region_name`, `location_description`, `avg_price_per_sq_ft`, `mean_housing_price`, `five_year_price_gradient`, `ten_year_price_gradient`, `median_housing_price`, `date`)
VALUES 
  ('Texas Triangle', 'Houston and Dallas', 375, 700000, 0.037, 0.074, 650000, '2022-01-01');

INSERT INTO `mydb`.`Region_Statistics_has_Cities` (`city_id`, `region_statistic_id`)
VALUES 
  (6, 9),
  (8, 9);
