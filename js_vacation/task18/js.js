/**
 * Created by ProFi on 31.07.2015.
 */
function nameMonth() {
    var numMonth = parseInt(document.getElementById('numberMonth').value);
    {
        if (numMonth < 13) {
            switch (numMonth) {

                case
                1
                :
                    document.getElementById('nameMonth').value = 'January';
                    break
                case
                2
                :
                    document.getElementById('nameMonth').value = 'February';
                    break
                case
                3
                :
                    document.getElementById('nameMonth').value = 'March';
                    break
                case
                4
                :
                    document.getElementById('nameMonth').value = 'April';
                    break
                case
                5
                :
                    document.getElementById('nameMonth').value = 'May';
                    break
                case
                6
                :
                    document.getElementById('nameMonth').value = 'June';
                    break
                case
                7
                :
                    document.getElementById('nameMonth').value = 'July';
                    break
                case
                8
                :
                    document.getElementById('nameMonth').value = 'August';
                    break
                case
                9
                :
                    document.getElementById('nameMonth').value = 'September';
                    break
                case
                10
                :
                    document.getElementById('nameMonth').value = 'October';
                    break
                case
                11
                :
                    document.getElementById('nameMonth').value = 'November';
                    break
                case
                12
                :
                    document.getElementById('nameMonth').value = 'December';
                    break
            }
        } else {
            document.getElementById('nameMonth').value = 'Invalid month';
        }
    }
}

