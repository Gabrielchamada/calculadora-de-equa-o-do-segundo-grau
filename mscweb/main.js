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
        const x_one = ((-value_B + raiz) / (2 * value_A));
        const x_two = ((-value_B - raiz) / (2 * value_A));
        //innerhtml of values and examples
        document.getElementById("delta_value").innerHTML="Delta: " + delta;
        document.getElementById("x_one_value").innerHTML="valor do primeiro x: x+ = " + x_one;
        document.getElementById("x_two_value").innerHTML="valor do segundo x: x- = " + x_two;
        document.getElementById("delta_formula_exampleone").innerHTML="a fórmula irá ficar: Δ = " + value_B + "² - 4" + "." + value_A + "." + value_C;
        document.getElementById("delta_formula_exampletwo").innerHTML="resolvendo teremos: Δ = " + delta;
        document.getElementById("baskhara_formula_exampleone").innerHTML="a fórmula irá ficar: x = -" + value_B + " ± √" + delta + " /2." + value_A;
        document.getElementById("baskhara_formula_exampletwo").innerHTML="resolvendo teremos: x+ = " + x_one + "<br>" + "x- = " + x_two;
    }
);

//shadows on button
btn_calculate_click.addEventListener("mouseenter", 
    function animation_btn_enter(){
        btn_calculate_click.style.boxShadow = "5px 5px 5px black";
    }
);

btn_calculate_click.addEventListener("mouseleave", 
    function animation_btn_leave(){
        btn_calculate_click.style.boxShadow = "none";
    }
);
//examples visible or invisible
const example_div = document.getElementById("how");

btn_calculate_click.addEventListener("click", 
    function visible(){
            example_div.classList.toggle("hidden");
    }
);