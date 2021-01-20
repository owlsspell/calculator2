document.getElementById('calculate').addEventListener("click", function () {
    const squareArea = 4;



    const indexH = document.getElementById('length').selectedIndex;
    const indexW = document.getElementById('width').selectedIndex;
    const options1 = document.getElementById('length').options;
    const options2 = document.getElementById('width').options;
    const length = options1[indexH].value;
    const width = options2[indexW].value; 
    let packs = length * width / squareArea;

    function say () {
        document.getElementById('result').innerHTML = ` You will need ${six} packs of 6pcs, ${eigth} packs of 8pcs. Останется ${Math.abs(lishnee)} шт.`;
    }

    let eigth = 0;
    let six = 0;
    let ostatok = packs % 8;
    let lishnee = 6 - ostatok;

    if (ostatok > 0 && packs < 6) {
        document.getElementById('result').innerHTML = `Хватит и 1 пачки на 6шт. Останется ${Math.abs(lishnee)} шт.`;
    }

    if (packs % 8 == 0) {
        eigth = packs / 8;
        console.log(` Нужно взять ${eigth} пачек по 8`);
        say();;
    } else if ((packs % 8 !== 0 && packs % 6 !== 0) || (ostatok % 8 == 6)) {
        if (packs >= 8) {
            while (packs > 6) {
                packs = packs - 8;
                eigth++
            }
            say();

            if (packs < 8 && packs != 0 && packs > 0) {
                six++;
                say();
            }
        }



    } else if (packs % 6 == 0) {
        six = packs / 6;
        say();
    }






});
