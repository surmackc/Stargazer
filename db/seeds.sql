USE stargazer;

INSERT INTO users (name, email, password)
    VALUES 
    ('Kevin Surmacewicz', 'email@gmail.com', 'password'),
    ('Nikki Aaron', 'email@gmail.com', 'password'),
    ('Tristan Benedict-Hall', 'email@gmail.com', 'password'),
    ('Aaron Brinkley', 'email@gmail.com', 'password');

INSERT INTO events (name, description, date, lat, lon)
    VALUES 
    ('Event1', 'A great event', '2018-02-28 18:00:00', 37.222222, -77.111111), 
    ('Event2', 'A wonderful event', '2018-03-01 19:00:00', 36.222222, -76.222222), 
    ('Event3', 'A stunning event', '2018-03-03 18:00:00', 67.777777, -77.999999);
    
INSERT INTO locations (name, description, lat, lon)
    VALUES 
    ('Place1', 'A great place', 37.222222, -77.111111), 
    ('Place2', 'A wonderful place', 36.222222, -76.222222), 
    ('Place3', 'A stunning place', 67.777777, -77.999999);
