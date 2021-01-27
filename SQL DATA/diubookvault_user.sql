-- MySQL dump 10.13  Distrib 5.7.32, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: diubookvault
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.36-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(250) DEFAULT NULL,
  `firstname` varchar(250) DEFAULT NULL,
  `lastname` varchar(250) DEFAULT NULL,
  `address` longtext,
  `password` varchar(250) DEFAULT NULL,
  `apartment` longtext,
  `town` varchar(250) DEFAULT NULL,
  `district` varchar(250) DEFAULT NULL,
  `postCode` varchar(45) DEFAULT NULL,
  `phone_number` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=15545455 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1513,'sdas15-13@diu.edu.bd','sdas','sdas',NULL,'1234',NULL,NULL,NULL,NULL,NULL),(155936,'rashid15-5936@diu.edu.bd','Rakib','Rashid',NULL,'123456789',NULL,NULL,NULL,NULL,NULL),(155937,'ul15-5937@diu.edu.bd','Rat','Ul',NULL,'1234',NULL,NULL,NULL,NULL,NULL),(155938,'ratul15-5938@diu.edu.bd','Ratul','Ul',NULL,'1234',NULL,NULL,NULL,NULL,NULL),(159143,'tafsir15-9143@diu.edu.bd','Tafsir','Ahamed',NULL,'123456789',NULL,NULL,NULL,NULL,NULL),(159192,'ahanaf15-9192@diu.edu.bd','Ahanaf','Adil',NULL,'1234',NULL,NULL,NULL,NULL,NULL),(1604046,'rath@gmail.com','Ratul','Bhowmick','Dhaka','123414',NULL,NULL,NULL,NULL,NULL),(15156651,'rashid15-156651@diu.edu.bd','Rashid','Rakib',NULL,'1234',NULL,NULL,NULL,NULL,NULL),(15545454,'a15-545454@diu.edu.bd','A','asd',NULL,'1234',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-26 22:51:50
