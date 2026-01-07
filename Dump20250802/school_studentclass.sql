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
-- Table structure for table `studentclass`
--

DROP TABLE IF EXISTS `studentclass`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentclass` (
  `id` int NOT NULL AUTO_INCREMENT,
  `studentid` int DEFAULT NULL,
  `teacherid` int DEFAULT NULL,
  `classesid` int DEFAULT NULL,
  `subjectid` int DEFAULT NULL,
  `timeid` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `studentid` (`studentid`),
  KEY `teacherid` (`teacherid`),
  KEY `classesid` (`classesid`),
  KEY `subjectid` (`subjectid`),
  KEY `timeid` (`timeid`),
  CONSTRAINT `studentclass_ibfk_1` FOREIGN KEY (`studentid`) REFERENCES `users` (`id`),
  CONSTRAINT `studentclass_ibfk_2` FOREIGN KEY (`teacherid`) REFERENCES `users` (`id`),
  CONSTRAINT `studentclass_ibfk_3` FOREIGN KEY (`classesid`) REFERENCES `classes` (`id`),
  CONSTRAINT `studentclass_ibfk_4` FOREIGN KEY (`subjectid`) REFERENCES `subject` (`id`),
  CONSTRAINT `studentclass_ibfk_5` FOREIGN KEY (`timeid`) REFERENCES `time` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentclass`
--

LOCK TABLES `studentclass` WRITE;
/*!40000 ALTER TABLE `studentclass` DISABLE KEYS */;
INSERT INTO `studentclass` VALUES (6,18,15,1,1,1,'2025-07-02 03:02:32','2025-07-14 09:08:22'),(7,14,15,1,1,1,'2025-07-02 03:17:25','2025-07-14 09:08:22'),(10,18,15,1,1,1,'2025-07-11 19:05:51','2025-07-14 09:08:22'),(11,19,16,2,5,1,'2025-07-13 09:39:37','2025-07-14 09:08:22'),(12,1,16,2,5,1,'2025-07-13 09:39:37','2025-07-14 09:08:22'),(13,39,17,4,4,1,'2025-07-14 09:08:22','2025-07-14 09:08:22'),(14,40,17,4,4,1,'2025-07-14 09:08:22','2025-07-14 09:08:22'),(15,41,17,4,4,1,'2025-07-14 09:08:22','2025-07-14 09:08:22');
/*!40000 ALTER TABLE `studentclass` ENABLE KEYS */;
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
