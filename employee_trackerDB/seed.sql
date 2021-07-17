use employee_trackerDB;

INSERT INTO department
    (name)
VALUES
   1 ('Legal'),
    2('HR'),
    3('Sales'),
    4('Production'),
    5('Accounting'),
    6('Advertising'),


INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Lawyer', 150000, 1),
    ('HR Manger', 75000, 2),
    ('Sales Person', 60000, 3),
    ('Production Manager', 75000, 4),
    ('Account Manager', 110000, 5),
    ('Accountant', 90000, 5),
    ('Sales Manager', 75000, 3),
    ('Production Line', 40000, 4),
    ('Creative Director', 190000, 6);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Tahut', 'Derbew', 1, NULL),
    ('Fatima', 'Abubaker', 2, NULL),
    ('Kanan', 'Neguse', 3, NULL),
    ('Aster', 'Aweke', 4, NULL),
    ('Tilhaun', 'Gessese', 5, NULL),
    ('Teddy', 'Afro', 6, NULL),
    ('Haile', 'Silase', 5, NULL),
    ('Aida', 'Dese', 2, NULL);
    ('Tzshey', 'Teklo', 3, NULL);
    ('Negusse', 'Dejene', 4, NULL);
    ('Mohammed', 'Hasssen', 1, NULL);
