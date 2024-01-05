<?php

// incluir a conexão
include("conexao.php");

// obter dados
$obterDados = file_get_contents("php://input");

// extrair os dados do JSON
$extrair = json_decode($obterDados);

// separar os dados do JSON
$nomeCurso = mysqli_real_escape_string($conexao, $extrair->cursos->nomeCurso);
$valorCurso = mysqli_real_escape_string($conexao, $extrair->cursos->valorCurso);

// SQL com instrução preparada para evitar SQL Injection
$sql = "INSERT INTO cursos (nomeCurso, valorCurso) VALUES (?, ?)";
$stmt = mysqli_prepare($conexao, $sql);
mysqli_stmt_bind_param($stmt, "si", $nomeCurso, $valorCurso);
mysqli_stmt_execute($stmt);
mysqli_stmt_close($stmt);

// exportar os dados cadastrados
$curso = [
    'nomeCurso' => $nomeCurso,
    'valorCurso' => $valorCurso
];

// corrigindo a variável para exportação JSON
echo json_encode(['curso' => $curso]);

?>

