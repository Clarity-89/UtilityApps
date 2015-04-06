/**
 * Created by Alex on 5/4/15.
 */
window.onload = function () {
    function solveQuadratic() {
        var a = parseInt(document.getElementById("a").value, 10),
            b = parseInt(document.getElementById("b").value, 10),
            c = parseInt(document.getElementById("c").value, 10),
            solution = document.getElementById("solution"),
            solution2 = document.getElementById("solution2"),
            x, dis = (b * b) - (4 * a * c), x1, x2;
        solution.innerHTML = null;
        solution2.innerHTML = null;
        solution2.className = '';
        if ((b * b) < 4 * a * c) {
            solution.className = "alert alert-danger";
            solution.innerHTML = "<strong>The solution is not a real number!</strong>"
        } else if (a === 0 && b === 0) {
            solution.className = "alert alert-danger";
            solution.innerHTML = "<strong>Both a and b cannot be 0!</strong>";
        }
        else if (a === 0 && b !== 0) {
            x = -c / b;
            solution.className = "alert alert-success";
            solution.innerHTML = "<strong>x = " + x + "</strong>";
            console.log(x);
        }
        else if (a !== 0 && b === 0) {
            x = Math.sqrt(-c / a);
            solution.className = "alert alert-success";
            solution.innerHTML = "<strong>x = " + x + "</strong>";
        }
        else if (a === 0 && c === 0) {
            solution.className = "alert alert-info";
            solution.innerHTML = "<strong>x = 0</strong>";
        } else {
            x1 = (-b + Math.sqrt(dis)) / (2 * a);
            x2 = (-b - Math.sqrt(dis)) / (2 * a);
            solution.className = "alert alert-success";
            solution.innerHTML = "<strong> x1 = " + x1 + "</strong>";
            solution2.className = "alert alert-success";
            solution2.innerHTML = "<strong> x2 = " + x2 + "</strong>";
        }
    }
    document.getElementById("calc").onclick = solveQuadratic;
};