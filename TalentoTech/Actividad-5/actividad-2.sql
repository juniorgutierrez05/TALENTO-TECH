CREATE TABLE Estudiantes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50),
  edad INT,
  ciudad VARCHAR(50)
);

INSERT INTO Estudiantes (nombre, edad, ciudad) VALUES
('Juan', 20, 'Bogotá'),
('Ana', 22, 'Medellín'),
('Luis', 19, 'Cali'),
('Marta', 23, 'Barranquilla');

-- Todos los registros
SELECT * FROM Estudiantes;

-- Filtrar por ciudad
SELECT * FROM Estudiantes WHERE ciudad = 'Bogotá';

-- Estudiantes mayores de 20 años
SELECT * FROM Estudiantes WHERE edad > 20;


