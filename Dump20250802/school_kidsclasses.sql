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
-- Table structure for table `kidsclasses`
--

DROP TABLE IF EXISTS `kidsclasses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kidsclasses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `heading` varchar(100) NOT NULL,
  `discription` longtext,
  `image` varchar(255) DEFAULT NULL,
  `age_of_kids` varchar(100) DEFAULT NULL,
  `total_seat` varchar(100) DEFAULT NULL,
  `class_time` varchar(100) DEFAULT NULL,
  `tution_fee` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` enum('0','1') DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kidsclasses`
--

LOCK TABLES `kidsclasses` WRITE;
/*!40000 ALTER TABLE `kidsclasses` DISABLE KEYS */;
INSERT INTO `kidsclasses` VALUES (1,'Drawing Class','Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo',NULL,'3 - 6 Years','40 Seats','08:00 - 10:00','$290 / Month','2025-06-21 09:00:54','2025-06-24 13:58:14','0'),(2,'Language Learning','Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo',NULL,'3 - 6 Years','40 Seats','08:00 - 10:00','$290 / Month','2025-06-23 18:38:07','2025-06-24 13:58:14','0'),(3,'Basic Science','Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo',NULL,'3 - 6 Years','40 Seats','08:00 - 10:00','$290 / Month','2025-06-23 18:38:59','2025-06-24 13:58:14','0'),(4,'Drawing Class','Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo',NULL,'3 - 6 Years','40 Seats','08:00 - 10:00','$290 / Month','2025-06-24 09:21:35','2025-06-24 13:58:14','0'),(5,'Language Learning','Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo',NULL,'3 - 6 Years','40 Seats','08:00 - 10:00','$290 / Month','2025-06-24 09:21:57','2025-06-24 13:58:14','0'),(6,'Basic Science','Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo',NULL,'3 - 6 Years','40 Seats','08:00 - 10:00','$290 / Month','2025-06-24 09:22:13','2025-06-24 13:58:14','0'),(7,'Drawing Class','Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo',NULL,'3 - 6 Years','40 Seats','08:00 - 10:00\n','$290 / Month','2025-06-24 13:15:37','2025-06-24 13:15:37','1'),(8,'Language Learning','Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo',NULL,'3 - 6 Years','40 Seats','08:00 - 10:00\n','$290 / Month','2025-06-24 13:16:26','2025-06-24 13:16:26','1'),(9,'Basic Science','Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo',NULL,'3 - 6 Years','40 Seats','08:00 - 10:00\n','$290 / Month','2025-06-24 13:16:52','2025-06-24 13:16:52','1');
/*!40000 ALTER TABLE `kidsclasses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-02 23:10:02
