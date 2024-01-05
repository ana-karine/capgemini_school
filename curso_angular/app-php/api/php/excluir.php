<?php
include("conexao.php");

$obterDados = file_get_contents("php://input");
$extrair = json_decode($obterDados);

$idCurso = mysqli_real_escape_string($conexao, $extrair->cursos->idCurso);

$sql = "DELETE FROM cursos WHERE idCurso=?";
$stmt = mysqli_prepare($conexao, $sql);
mysqli_stmt_bind_param($stmt, "i", $idCurso);
mysqli_stmt_execute($stmt);
mysqli_stmt_close($stmt);
mysqli_close($conexao);

// Retorne a resposta JSON única
echo json_encode(['cursos' => $response]);
?>

