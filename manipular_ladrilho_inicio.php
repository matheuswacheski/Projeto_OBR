<?php 
if($_SERVER["REQUEST_METHOD"] == "POST"){

    if(isset($_POST["alternancia_tentativa_inicio_5"])){
        $pontuacao_ladrilho_inicio = $_POST["alternancia_tentativa_inicio_5"];
    }else if(isset($_POST["alternancia_tentativa_inicio_3"])){
        $pontuacao_ladrilho_inicio = $_POST["alternancia_tentativa_inicio_3"];
    }else if(isset($_POST["alternancia_tentativa_inicio_1"])){
        $pontuacao_ladrilho_inicio = $_POST["alternancia_tentativa_inicio_1"];
    }else{
        $pontuacao_ladrilho_inicio = 0;
    }

    header("Location: pista_a.html");
    exit();
}
?>