/**
 * Created by ProFi on 21.07.2015.
 */

function calcWidthAreaCircle() {
    var radiusCircle = document.getElementById('radiusCircle').value;
    const PI = 3.14;
    var widthCircle = 2 * PI * radiusCircle;
    var areaCircle = PI * radiusCircle * radiusCircle;
    document.getElementById('widthCircle').value = widthCircle;
    document.getElementById('areaCircle').value = areaCircle;
}
