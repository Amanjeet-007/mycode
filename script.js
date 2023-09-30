const btn = document.getElementById("calculate");
                const bill = document.getElementById("bill");
                const tip = document.getElementById("tip");
                const total = document.getElementById("TOTAL");

                function CalculateTotal(){
                    const billv = bill.value;
                    const tipv = tip.value;
                    const totalv = billv - (billv/100 * (tipv));
                    total.innerText= totalv.toFixed(2);

                } 
                btn.addEventListener("click",CalculateTotal);