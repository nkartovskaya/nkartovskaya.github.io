<?
$kuda='mail@yandex.ru';//куда отправлять почту?
$zagolovok='сообщение с сайта';
$headers='Content-type: text; charset="utf-8"';

if (isset($_POST['ok'])){
	//если существует переменная, значит начнем получать информацию из формы
	$fio=$_POST['fio'];
	$email=$_POST['email'];
	$tel=$_POST['tel'];
	$text=$_POST['text'];

	$messages=$text."\n".$email."\n".$tel."\n".$fio;

	if (mail($kuda,$zagolovok,$messages,$headers)){echo "Ваше сообщение доставлено.";}

	}


?>
