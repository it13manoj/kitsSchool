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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `degination` varchar(100) NOT NULL,
  `discription` varchar(255) NOT NULL,
  `type` enum('Teacher','Student','Director','Principle','HOD','Pion','Gard','Driver','Parent') DEFAULT NULL,
  `gender` varchar(100) DEFAULT NULL,
  `dob` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `contact` varchar(100) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `social_link` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'HI','sfdasd','sdfsadf','Student','1','2013-10-10','ffsafdf','5656253','sadf','safsdf','asdf',NULL,'2025-06-21 13:31:42','2025-06-21 13:31:42'),(14,'Manoj','graduate','abcd','Student','Male','2025-06-26','abcd','12345','it13manoj@gmail.com','$2b$10$zbNIEWP/ULk6CU8UpcezK.xnpH8Ikq.gtXlLVJby9FMnnMYMXJB7C','',NULL,'2025-06-29 07:31:35','2025-06-29 07:31:35'),(15,'Teacher','Teacher','Tech','Teacher','Male','2025-06-28','abcd','12345','teacher@gmail.com','$2b$10$q8S9N82NJvZx.IdJHTnHDexFxn0QAZnUOPt/5Z/DOFXXEGzdUM1AK','',NULL,'2025-06-29 11:37:34','2025-06-29 11:37:34'),(16,'Alok','graduate','abcd','Teacher','Male','2025-07-01','abcd','12345','alok@gmail.com','$2b$10$0k4ETDLpSnv.Dlb7qwolS.n1G/FHI/75UYvf4tw4KL6Tro3MaUd0q','',NULL,'2025-07-01 04:10:34','2025-07-01 04:10:34'),(17,'Teacher2','P.G','Test','Teacher','Male','2025-07-05','ara','9876541230','teacher2@gmail.com','$2b$10$WpNCg8p.h0o5qUYPw2IG0eWe/KLHevKxXO6OchUXlUCLyjoWqV1ti','',NULL,'2025-07-08 03:52:37','2025-07-08 03:52:37'),(18,'Rahul','graduate','abcd','Student','Male','2025-06-26','abcd','12345','rahul@gmail.com','$2b$10$zbNIEWP/ULk6CU8UpcezK.xnpH8Ikq.gtXlLVJby9FMnnMYMXJB7C','',NULL,'2025-06-29 07:31:35','2025-06-29 07:31:35'),(19,'student2','intermidate','I am a Student','Student','Female','2019-01-01','buxar','9876541230','student2@gmail.com','$2b$10$eI5dLVFt0FepIIxnSguYYe4WAPeQGEp.wAmRqHlXf6AnPWMu5n8om','',NULL,'2025-07-11 10:04:22','2025-07-11 10:04:22'),(20,'Manoj Kumar Sharma','azdfc','sdfsf','Driver','Male','2025-07-11','PTL CHOWK MOHALI','25426354675','manoj@gmail.com','$2b$10$GnEtnHzsLqca954EOEBar.bpjomU9y4SEkBO3ZYtgd.jcU50u1DQq','',NULL,'2025-07-11 18:07:26','2025-07-11 18:07:26'),(21,'Manoj ','azdfc','sdfsf','Driver','Male','2025-07-11','PTL CHOWK MOHALI','25426354675','manoj1@gmail.com','$2b$10$WpE87m/YtdlAJnVtmxG0NOeQqBdE67160Wryfc2HmT1rFv/bR4niS','',NULL,'2025-07-11 18:07:59','2025-07-11 18:07:59'),(39,'Deepak kumar','student','A student of class one','Student','Male','2014-06-13','buxar','784587125','student1@gmail.com','$2b$10$itVJIHRgD5FpoYy3hbOpzu33.8TEC1omP8j8j4tBjTwr8WGzd0tEK','',NULL,'2025-07-14 09:02:33','2025-07-14 09:02:33'),(40,'Deepu kumar','student','A student of class one','Student','Male','2014-06-06','buxar','784587125','student3@gmail.com','$2b$10$OrdKk85euDLtnNKce2NreerddgcWWwzH/YhvYMyiLu1U4X62sP8Pu','',NULL,'2025-07-14 09:03:31','2025-07-14 09:03:31'),(41,'pooja kumari','student','A student of class two','Student','Female','2014-06-11','buxar','784587125','student4@gmail.com','$2b$10$cEcXoBhQ2xklAAT.szOPOeMSVQeNnxy0OaU6GMZqNzSbzlJBnhMoa','',NULL,'2025-07-14 09:04:36','2025-07-14 09:04:36'),(42,'principle','principle','principle','Principle','Male','2025-07-18','buxar','9784926360','principle@gmail.com','$2b$10$P9lAS5KkAbUaeuuSPJWFROkGnMPF1dyAVjRJz.af9Q1/cqKV4whGa','',NULL,'2025-07-16 13:34:38','2025-07-16 13:34:38');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-02 23:10:01
