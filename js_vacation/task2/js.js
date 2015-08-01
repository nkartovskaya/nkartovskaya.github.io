/**
 * Created by ProFi on 20.07.2015.
 */
function ageCalculation() {
    const YEAR = 2015;
    var yearBorn=document.getElementById('yearBorn').value;
    var ageFirst=YEAR-yearBorn-1;
    var ageSecond=YEAR-yearBorn;
    document.getElementById('ageFirst').value=ageFirst;
    document.getElementById('ageSecond').value=ageSecond;
}
