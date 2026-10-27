let display = document.getElementById("display");

    function press(value) {
        display.innerText += value;
    }

    function calculate() {
        const expr = display.innerText.trim();
        if (!expr) return;
        try {
            const result = eval(expr);
            display.innerText = result;
            // Show the last completed calculation as a history line.
            document.getElementById("history").innerText = expr + " = " + result;
        } catch {
            display.innerText = "Error";
        }
    }

    
    function removeChar() {
        display.innerText = display.innerText.slice(0, -1);
    }

    function clearDisplay() {
        display.innerText = "";
    }

    // Keyboard support: digits/operators type, Enter calculates,
    // Backspace deletes, Escape clears.
    document.addEventListener("keydown", function (e) {
        if (/^[0-9.]$/.test(e.key) || "+-*/%".includes(e.key)) {
            press(e.key);
        } else if (e.key === "Enter" || e.key === "=") {
            e.preventDefault();
            calculate();
        } else if (e.key === "Backspace") {
            removeChar();
        } else if (e.key === "Escape") {
            clearDisplay();
        }
    });