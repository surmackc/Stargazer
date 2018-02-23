CREATE DATABASE IF NOT EXISTS db_name;

USE db_name;

CREATE TABLE IF NOT EXISTS table_name (
  id INT AUTO_INCREMENT,
  name VARCHAR(35) NOT NULL UNIQUE,
  value INT NOT NULL DEFAULT 100,
  date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);