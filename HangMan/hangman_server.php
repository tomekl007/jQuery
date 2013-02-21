<?php
$hasla = array(
    "Fantomas",
    "Super Szamson",
    "Has³o"
);
 
shuffle($hasla); //mieszamy tablicê
 
 
if ($_POST['action']=='startGame') {
    echo $hasla[array_rand($hasla, 1)];//wypisujemy randomowe has³o
}
?>