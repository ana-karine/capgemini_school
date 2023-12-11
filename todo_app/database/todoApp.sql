-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 11, 2023 at 11:03 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todoApp`
--

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(15, 'Projeto Alfa', 'Descrição Projeto Alfa ', '2023-11-30 00:00:00', '2023-11-30 00:00:00'),
(16, 'Projeto Beta', 'Descrição Projeto Beta', '2023-11-30 00:00:00', '2023-11-30 00:00:00'),
(17, 'Projeto Gama', 'Descrição Projeto Gama', '2023-11-30 00:00:00', '2023-11-30 00:00:00'),
(19, 'Projeto X', 'Descrição Projeto X', '2023-12-11 00:00:00', '2023-12-11 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `idProject` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `completed` tinyint(1) NOT NULL,
  `notes` varchar(255) DEFAULT NULL,
  `deadline` date NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `idProject`, `name`, `description`, `completed`, `notes`, `deadline`, `createdAt`, `updatedAt`) VALUES
(35, 15, 'Tarefa 1', 'Descrição Tarefa 1', 0, 'Notas 1', '2023-11-27', '2023-11-30 00:00:00', '2023-11-30 00:00:00'),
(36, 15, 'Tarefa 2', 'Descrição Tarefa 2', 0, 'Notas 2', '2023-11-30', '2023-11-30 00:00:00', '2023-11-30 00:00:00'),
(37, 15, 'Tarefa 3', 'Descrição Tarefa 3', 1, 'Notas 3', '2023-12-04', '2023-11-30 00:00:00', '2023-11-30 00:00:00'),
(39, 16, 'Tarefa Beta 1', 'Descrição da tarefa Beta 1', 1, 'Notas tarefa beta 1', '2023-12-01', '2023-11-30 00:00:00', '2023-11-30 00:00:00'),
(41, 19, 'Tarefa 1 - projeto X', 'Descrição: tarefa 1 - projeto X', 1, 'Notas tarefa 1 - projeto X', '2023-11-10', '2023-12-11 00:00:00', '2023-12-11 00:00:00'),
(42, 19, 'Tarefa 2 - projeto X', 'Descrição: tarefa 2 - projeto X', 1, 'Notas: tarefa 2 - projeto X', '2023-12-10', '2023-12-11 00:00:00', '2023-12-11 00:00:00'),
(44, 19, 'Tarefa 3 - projeto X', 'Descrição: tarefa 3 - projeto X', 0, 'Notas: tarefa 3 - projeto X', '2023-12-11', '2023-12-11 00:00:00', '2023-12-11 00:00:00'),
(45, 19, 'Tarefa 4 - projeto X', 'Descrição: tarefa 4 - projeto X', 0, 'Notas: tarefa 4 - projeto X', '2023-12-12', '2023-12-11 00:00:00', '2023-12-11 00:00:00'),
(46, 19, 'Tarefa 5 - projeto X', 'Descrição: tarefa 5 - projeto X', 0, 'Notas: tarefa 5 - projeto X', '2023-12-13', '2023-12-11 00:00:00', '2023-12-11 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_projects` (`idProject`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `fk_projects` FOREIGN KEY (`idProject`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
