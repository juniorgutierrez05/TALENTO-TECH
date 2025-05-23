# Imprimir mensaje
print("¡Hola, bienvenido al laboratorio de Python!")

# Declarar variables
numero_entero = 10
numero_decimal = 3.14
texto = "Python es divertido"

# Operaciones matemáticas
suma = numero_entero + numero_decimal
multiplicacion = numero_entero * 2

# Concatenación
print("Mensaje:", texto)
print("La suma es:", suma)

#CONDICIONALES Y BUCLES

# Número par o impar
numero = int(input("Ingresa un número: "))
if numero % 2 == 0:
    print("Es par")
else:
    print("Es impar")

# Bucle for - cuadrados
numeros = [1, 2, 3, 4, 5]
for n in numeros:
    print(f"El cuadrado de {n} es {n ** 2}")

# Bucle while - pedir hasta que se escriba "salir"
entrada = ""
while entrada != "salir":
    entrada = input("Escribe 'salir' para terminar: ")


#LISTAS Y DICCIONARIOS

# Lista de estudiantes
estudiantes = ["Laura", "Pedro", "Ana"]
for nombre in estudiantes:
    print("Estudiante:", nombre)

# Diccionario con datos de contacto
contacto = {"nombre": "Carlos", "correo": "carlos@email.com"}
for clave, valor in contacto.items():
    print(clave, ":", valor)

# Agregar elementos a lista y actualizar diccionario
nuevo_estudiante = input("Ingresa el nombre de un estudiante: ")
estudiantes.append(nuevo_estudiante)

nuevo_correo = input("Ingresa nuevo correo para Carlos: ")
contacto["correo"] = nuevo_correo

print("Lista actualizada:", estudiantes)
print("Contacto actualizado:", contacto)


#SCRIPT DE CALCULADORA Y JUEGO DE ADIVINANZA

# Calculadora básica
num1 = float(input("Número 1: "))
num2 = float(input("Número 2: "))
operacion = input("Operación (+, -, *, /): ")

if operacion == "+":
    print("Resultado:", num1 + num2)
elif operacion == "-":
    print("Resultado:", num1 - num2)
elif operacion == "*":
    print("Resultado:", num1 * num2)
elif operacion == "/":
    if num2 != 0:
        print("Resultado:", num1 / num2)
    else:
        print("No se puede dividir por cero")
else:
    print("Operación inválida")

# Juego de adivinanza
import random
secreto = random.randint(1, 10)
intento = 0
while True:
    adivina = int(input("Adivina el número (1-10): "))
    intento += 1
    if adivina < secreto:
        print("Más alto")
    elif adivina > secreto:
        print("Más bajo")
    else:
        print(f"¡Correcto! Lo lograste en {intento} intentos.")
        break

