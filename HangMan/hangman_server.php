<?php
$hasla = array(
    "Fantomas",
    "Super Szamson",
    "Has�o"
);
 
shuffle($hasla); //mieszamy tablic�
 
 
if ($_POST['action']=='startGame') {
    echo $hasla[array_rand($hasla, 1)];//wypisujemy randomowe has�o
}
?>