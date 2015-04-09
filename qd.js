/**
 * Created by Alex on 5/4/15.
 */
(function () {

    function setContent(ids, text) {
        if (ids.length > 1 && Array.isArray(ids)) {
            ids.map(function (el, i) {
                el.innerHTML = '<strong>' + text[i] + '</strong>';
            });
        } else {
            ids.innerHTML = '<strong>' + text + '</strong>';
        }
    }

    function setClass(ids, name) {
        if (ids.length > 1 && Array.isArray(ids)) {
            ids.map(function (el) {
                el.className = name;
            });
        } else {
            ids.className = name;
        }
    }

    function solveQuadratic() {
        var a = parseInt(document.getElementById("a").value, 10),
            b = parseInt(document.getElementById("b").value, 10),
            c = parseInt(document.getElementById("c").value, 10),
            solution = document.getElementById("solution"),
            solution2 = document.getElementById("solution2"),
            dang = "alert alert-danger",
            success = "alert alert-success",
            x, dis = (b * b) - (4 * a * c), x1, x2;

        setContent([solution, solution2], ['', '']);
        setClass(solution2, '');
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            setContent(solution, "Make sure all the values are numbers!");
            setClass(solution, dang);
        } else if ((b * b) < 4 * a * c && b !== 0) {
            setClass(solution, dang);
            setContent(solution, "The solution is not a real number!");
        } else if (a === 0 && b === 0) {
            setClass(solution, dang);
            setContent(solution, "Both a and b cannot be 0!");
        }
        else if (a === 0 && b !== 0) {
            x = -c / b;
            setClass(solution, success);
            setContent(solution, "x = " + x);
        }
        else if (a !== 0 && b === 0) {
            x = Math.sqrt(-c / a);
            setClass(solution, success);
            setContent(solution, "x = " + x);
        }
        else if (a === 0 && c === 0) {
            setClass(solution, success);
            setContent(solution, "x = 0");
        } else {
            x1 = (-b + Math.sqrt(dis)) / (2 * a);
            x2 = (-b - Math.sqrt(dis)) / (2 * a);
            setClass([solution, solution2], success);
            setContent([solution, solution2], ["x1 = " + x1, "x2 = " + x2]);
        }
    }

    document.getElementById("forms").onkeydown = function (e) {
        if (e.which == 13 || e.keyCode == 13) {
            document.getElementById("calc").click();
            return false;
        }
        return true;
    };

    document.getElementById("calc").onclick = solveQuadratic;

})();