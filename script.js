var valores = [true, 5, false, "hola", "adios", 2];
            var resultado = valores[3] > valores[4];
            alert(resultado);
//colocar document.writte () en cada uno de los alert para que se muestre como resultado
            // Combinar valores booleanos
            var valor1 = valores[0];
            var valor2 = valores[2];

            // Obtener un resultado TRUE
            var resultado = valor1 || valor2;
            document.write("<h3> Este es el segundo resultado:"+resultado); 

            // Obtener un resultado FALSE
            resultado = valor1 && valor2;
          document.write("<br>Este es el Tercer resultado:"+resultado);

            // Operaciones matemáticas
            var num1 = valores[1];
            var num2 = valores[5];

            var suma = num1 + num2;
            document.write("<br>Este es el cuarto resultado:"+ suma);

            var resta = num1 - num2;
            document.write("<br>Este es el quinto resultado"+resta);

            var multiplicacion = num1 * num2;
            document.write("<br>Este es sexto resultado"+multiplicacion);

            var division = num1 / num2;
            document.write("<br>Este es el septimo resultado"+division);

            var modulo = num1 % num2;
            document.write("<br>Este es el octavo resultado"+modulo);
