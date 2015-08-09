var numberLine = new Array();
for (i = 2; i < 11; i++) {
    if (i%(i-1) > 0) {
        numberLine[i] = i;
    }
}
console.log(numberLine);
