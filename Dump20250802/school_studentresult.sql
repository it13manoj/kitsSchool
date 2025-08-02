-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: school
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `studentresult`
--

DROP TABLE IF EXISTS `studentresult`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentresult` (
  `id` int NOT NULL AUTO_INCREMENT,
  `marks` varchar(100) DEFAULT NULL,
  `classesid` int DEFAULT NULL,
  `studentid` int DEFAULT NULL,
  `subjectid` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `classesid` (`classesid`),
  KEY `studentid` (`studentid`),
  KEY `subjectid` (`subjectid`),
  CONSTRAINT `studentresult_ibfk_1` FOREIGN KEY (`classesid`) REFERENCES `classes` (`id`),
  CONSTRAINT `studentresult_ibfk_2` FOREIGN KEY (`studentid`) REFERENCES `users` (`id`),
  CONSTRAINT `studentresult_ibfk_3` FOREIGN KEY (`subjectid`) REFERENCES `subject` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentresult`
--

LOCK TABLES `studentresult` WRITE;
/*!40000 ALTER TABLE `studentresult` DISABLE KEYS */;
INSERT INTO `studentresult` VALUES (1,'55',1,14,1,'2025-07-02 18:11:00','2025-07-10 18:42:21'),(2,'35',1,14,2,'2025-07-10 12:58:46','2025-07-10 18:42:21'),(3,'60',1,14,3,'2025-07-10 12:58:46','2025-07-10 18:42:21'),(4,'50',1,14,4,'2025-07-10 12:58:46','2025-07-10 18:42:21'),(5,'78',1,14,5,'2025-07-10 12:58:46','2025-07-10 18:42:21'),(6,'65',1,14,6,'2025-07-10 12:59:57','2025-07-10 18:42:21'),(7,'23',1,18,1,'2025-07-11 07:51:58','2025-07-11 07:51:58'),(8,'80',1,18,2,'2025-07-11 07:51:58','2025-07-11 07:51:58'),(9,'54',1,18,3,'2025-07-11 07:51:58','2025-07-11 07:51:58'),(10,'30',1,18,4,'2025-07-11 07:51:58','2025-07-11 07:51:58'),(11,'90',1,18,5,'2025-07-11 07:51:58','2025-07-11 07:51:58'),(12,'40',1,18,6,'2025-07-11 07:51:58','2025-07-11 07:51:58');
/*!40000 ALTER TABLE `studentresult` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-02 23:10:00
