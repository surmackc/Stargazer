USE db_name;

INSERT INTO table_name (name, value, date)
  VALUES 
  ('AName', 100, CURRENT_TIME), 
  ('AnotherName', 200, CURRENT_TIME), 
  ('YetAnotherName', 300, CURRENT_TIME);

SELECT * from table_name;