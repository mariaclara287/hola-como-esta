Descripción del comportamiento raro observado.
R\\ Al hacer clic en Ocultar reloj, el componente desaparece de la pantalla, pero los mensajes tick continúan apareciendo

-El contador sube de 0 a 1 y después queda en 1, aunque continúa mostrando un mensaje cada segundo. 

La primera vez que se cambia el tamaño aparece un mensaje; después de varios cambios, el mismo comienza a imprimirse varias veces.

Al seleccionar Usuario 2, el botón cambia correctamente, pero el nombre mostrado continúa siendo el de Usuario 1.

El console.log que usaron para confirmar la causa.
R\\ console.log(tick);

.console.log("valor real vs valor del efecto:", contador, contador + 1);

-console.log("resize");

-console.log(id: id);

console.log("🟢 MONTADO / EFECTO");
console.log("🔵 ACTUALIZADO");
console.log("🔴 LIMPIEZA");


