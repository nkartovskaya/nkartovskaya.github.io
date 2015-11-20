<?
$kuda='nkartovskaya@gmail.com';//куда отправлять почту?
$zagolovok='сообщение с сайта Виниловый рай';
$headers='Content-type: text; charset="utf-8"';

if (isset($_POST['ok'])){
	//если существует переменная, значит начнем получать информацию из формы
	$name=$_POST['name'];
	$email=$_POST['email'];
	$topic=$_POST['topic'];
	$text=$_POST['text'];

	$messages=$text."\n".$email."\n".$topic."\n".$name;

	if (mail($kuda,$zagolovok,$messages,$headers)){echo "Ваше сообщение доставлено.";}
	
	}


?>