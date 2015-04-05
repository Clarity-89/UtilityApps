/**
 * Created by Alex on 5/4/15.
 */
window.onload = function () {


    function solveQuadratic() {
        document.getElementById("solution").innerHTML = null;
        var a = parseInt(document.getElementById("a").value, 10);
        var b = parseInt(document.getElementById("b").value, 10);
        var c = parseInt(document.getElementById("c").value, 10),
            solution = document.getElementById("solution"),
            x, dis = (b * b) - (4 * a * c), x1, x2;
        console.log(a);
        console.log(b);
        if (a===0 && b===0){
          solution.innerHTML = "Both a and b cannot be 0!";
        }
        else if (a===0 && b!==0){
            x = -c/b;
            solution.innerHTML = "x = "+x;
            console.log(x);
        }
       else if (a!==0 && b ===0){
            x = Math.sqrt(-c/a);
            solution.innerHTML = "x = "+x;
        }
       else if (a===0 && c===0){
            solution.innerHTML = "x = 0";
        } else {
            x1 = (-b+Math.sqrt(dis))/(2*a);
            x2 = (-b-Math.sqrt(dis))/(2*a);
            solution.innerHTML = "x1 = "+x1 + " x2 = "+x2;

        }

    }

    document.getElementById("calc").onclick = solveQuadratic;

};