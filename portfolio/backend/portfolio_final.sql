-- MariaDB dump 10.19  Distrib 10.4.27-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: portfolio
-- ------------------------------------------------------
-- Server version	10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `datos_personales`
--

DROP TABLE IF EXISTS `datos_personales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `datos_personales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `edad` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datos_personales`
--

LOCK TABLES `datos_personales` WRITE;
/*!40000 ALTER TABLE `datos_personales` DISABLE KEYS */;
INSERT INTO `datos_personales` VALUES (1,'Mathias','Salva',26);
/*!40000 ALTER TABLE `datos_personales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `educacion`
--

DROP TABLE IF EXISTS `educacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `educacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `type` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `educacion`
--

LOCK TABLES `educacion` WRITE;
/*!40000 ALTER TABLE `educacion` DISABLE KEYS */;
INSERT INTO `educacion` VALUES (1,'Universidad Técnologica Nacional - FRBA','Estudiante de la carrera Ingeniería en Sistemas','2020-04-01',NULL,3),(2,'ISFDyT N°42 Leopoldo Marechal','Profesor de Inglés graduado en todos los niveles de educación primaria y secundaria.','2015-04-01','2019-12-31',2),(3,'EEST N°42 José C. Paz','Graduado con el título Técnico en Eléctronica','2010-04-01','2014-12-31',1);
/*!40000 ALTER TABLE `educacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experiencia`
--

DROP TABLE IF EXISTS `experiencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `experiencia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `description` varchar(1024) DEFAULT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experiencia`
--

LOCK TABLES `experiencia` WRITE;
/*!40000 ALTER TABLE `experiencia` DISABLE KEYS */;
INSERT INTO `experiencia` VALUES (1,'InvGate- Soporte Técnico Nivel 2','A cargo de la resolución de incidencias y cumplimiento de pedidos de servicios escalados desde el nivel 1 de soporte. Así como también a cargo de llevar a cabo tareas relacionadas a clientes muy importantes de la empresa. Con acceso al repositorio de código de las aplicaciones a las cuales se les da soporte, para interpretar el código PHP que compone a las aplicaciones y rastrear la raíz de inconvenientes. Además, acceso a base de datos SQL para la creación de consultas.','2019-08-26',NULL),(2,'Avaya - Help Desk Specialist','Atención y solución de inconvenientes de usuarios internos de la empresa tanto por teléfono como por chat. Los análisis eran de índole superficial y apegándose a un proceso de resolución y, en todo caso, escalación a equipos correspondientes ya sea especialistas de las herramientas o equipos de campo para inconvenientes con los dispositivos de los usuarios.','2017-12-31','2021-07-12'),(3,'Atento - Soporte Técnico Lexmark','Resolución de incidentes relacionados a impresoras Lexmark mediante atención telefónica. Los usuarios eran clientes finales o bien técnicos en el área que precisaban obtener información precisa de los manuales de los equipos los cuales usábamos como guía para la solución de incidencias.','2016-11-01','2017-01-31');
/*!40000 ALTER TABLE `experiencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyectos`
--

DROP TABLE IF EXISTS `proyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proyectos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` varchar(1024) DEFAULT NULL,
  `img_id` varchar(2048) DEFAULT NULL,
  `repository` varchar(1024) NOT NULL,
  `site` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyectos`
--

LOCK TABLES `proyectos` WRITE;
/*!40000 ALTER TABLE `proyectos` DISABLE KEYS */;
INSERT INTO `proyectos` VALUES (1,'Tic-Tac-Toe','Un tic-tac-toe sin interfaz gráfica realizado puramente con Python 3 a modo de práctica','','https://github.com/MattSalva/tictoc',''),(2,'Portfolio','Un portfolio personal con un backend armado en Java con Spring Boot y un frontend armado en Angular, ambos montados en infraestructura red, con una base de datos MySQL',NULL,'https://github.com/MattSalva/portfolio-BackEnd','https://frontend-mathiassalva.web.app/'),(3,'Hangman','Un \"hangman\" (\"ahorcado\") simple. Armado completamente en Python 3 a modo de práctica personal.',NULL,'https://github.com/MattSalva/hangman',NULL),(4,'Py-Memorygame','Un memory game realizado con Python 3 a modo de práctica para poder simular partidas del conocido juego de memoria, utilizando una base de datos de flashcards y un script simple para iterar sobre las mismas',NULL,'https://github.com/MattSalva/py-memorygame',NULL),(5,'Py-Banking','Aplicación diseñada con Python 3 que simula el funcionamiento de una entidad bancaria para la creación y utilización de tarjetas de crédito. Utilizando los números de las mismas para identificar su validez.',NULL,'https://github.com/MattSalva/py_banking',NULL),(6,'Py-Browser','Una aplicación hecha con Python 3 que simula la funcionalidad de un navegador web. Aplicación sin interfaz que guarda las páginas, permite ingresar URLs y navegar hacia delante y atrás en las páginas.','fu3jsosghr2q4siueqog','https://github.com/MattSalva/py-browser','');
/*!40000 ALTER TABLE `proyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'mathiassalva','52ec91f5387da8df34b4ca54c40b5462'),(2,'flavia','81dc9bdb52d04dc20036dbd8313ed055');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-11 22:30:58
