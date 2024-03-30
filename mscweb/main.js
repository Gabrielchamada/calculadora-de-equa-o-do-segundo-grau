//event of button
const btn_calculate_click = document.getElementById("Btn_calculate");

btn_calculate_click.addEventListener("click", 
    function x_value(){

        //value delta
        const value_A = parseFloat(document.getElementById("A_value").value);
        const value_B = parseFloat(document.getElementById("B_value").value);
        const value_C = parseFloat(document.getElementById("C_value").value);
        const delta = (value_B**2 - 4 * value_A * value_C);
        //value x
        var raiz = Math.sqrt(delta);
        const x_one = (-value_B + raiz / 2 * value_A);
        const x_two = (-value_B - raiz / 2 * value_A);
        //innerhtml of delta
        document.getElementById("delta_value").innerHTML="Delta: " + delta;
        document.getElementById("x_one_value").innerHTML="valor do primeiro x: x+ = " + x_one;
        document.getElementById("x_two_value").innerHTML="valor do segundo x: x- = " + x_two;
    }   
);