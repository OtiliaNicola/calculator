const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

buttons.forEach( (btn) => {
    
    btn.addEventListener("click", () => {
        
        const btnPushed = btn.textContent;

        if(btn.id === "c") {
            screen.textContent = "0";
            return;
        }

        if(btn.id === "delete"){
            if (screen.textContent.length === 1 || screen.textContent === "ERROR"){
                screen.textContent = "0";
            } else {
                screen.textContent = screen.textContent.slice(0,-1);
            } return;
        }

        if(btn.id === "same") {
            try {
                screen.textContent = eval(screen.textContent);
            } catch {
                screen.textContent = "ERROR";
            }
            return;
        }
        
        if(screen.textContent === "0" || screen.textContent === "ERROR"){
            screen.textContent = btnPushed;
        } else {
            screen.textContent = screen.textContent + btnPushed;
        }
    })
})