<?php 
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $pontuacao_inicio = $_POST["alternancia_tentativa_inicio"];

    echo "$pontuacao_inicio";
}
?>