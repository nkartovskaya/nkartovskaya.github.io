/**
 * Created by ProFi on 21.07.2015.
 */

function cos() {
    var i;
    for (i=1; i<1000; i=i+20) {
        document.getElementById('line').style.position='relative';
        document.getElementById('line').style.backgroundColor='red';
        document.getElementById('line').style.marginLeft=i;
    }

}