-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: competition_system_security_concept_v2_db
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `file` (
  `file_id` int NOT NULL AUTO_INCREMENT,
  `cloudinary_file_id` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `cloudinary_url` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `design_title` varchar(2000) COLLATE latin1_general_ci NOT NULL,
  `design_description` varchar(2000) COLLATE latin1_general_ci NOT NULL,
  `created_by_id` int DEFAULT NULL,
  PRIMARY KEY (`file_id`)
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file`
--

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file` DISABLE KEYS */;
INSERT INTO `file` VALUES (100,'Design/zam6qo8fqcalrdwrpc3f','http://res.cloudinary.com/dmofxxark/image/upload/v1624094037/Design/zam6qo8fqcalrdwrpc3f.png','rita design 1','rita design 1 description text 1 text 2 text 3 text 4 ....',100),(101,'Design/rhht2nad8n1yrs1xrs2b','http://res.cloudinary.com/dmofxxark/image/upload/v1624094038/Design/rhht2nad8n1yrs1xrs2b.png','rita design 2','rita design 2 description text 1 text 2 text 3 text 4 ....',100),(102,'Design/ovz07lyrrvo91waqfutq','http://res.cloudinary.com/dmofxxark/image/upload/v1624094040/Design/ovz07lyrrvo91waqfutq.png','rita design 3','rita design 3 description text 1 text 2 text 3 text 4 ....',100),(103,'Design/tztappk70izvsybpmwot','http://res.cloudinary.com/dmofxxark/image/upload/v1624094041/Design/tztappk70izvsybpmwot.png','rita design 4','rita design 4 description text 1 text 2 text 3 text 4 ....',100),(104,'Design/hsjvtmwkmhuqmciiyrpt','http://res.cloudinary.com/dmofxxark/image/upload/v1624094043/Design/hsjvtmwkmhuqmciiyrpt.png','rita design 5','rita design 5 description text 1 text 2 text 3 text 4 ....',100),(105,'Design/vtjelgdkmxcfz5jrxesn','http://res.cloudinary.com/dmofxxark/image/upload/v1624094044/Design/vtjelgdkmxcfz5jrxesn.png','rita design 6','rita design 6 description text 1 text 2 text 3 text 4 ....',100),(106,'Design/qsqktjdn99d5faivh9pw','http://res.cloudinary.com/dmofxxark/image/upload/v1624094046/Design/qsqktjdn99d5faivh9pw.png','rita design 7','rita design 7 description text 1 text 2 text 3 text 4 ....',100),(107,'Design/vjftztbdr5a6jieteych','http://res.cloudinary.com/dmofxxark/image/upload/v1624094048/Design/vjftztbdr5a6jieteych.png','rita design 8','rita design 8 description text 1 text 2 text 3 text 4 ....',100),(108,'Design/hflxamrfs0l7ba1oh4nm','http://res.cloudinary.com/dmofxxark/image/upload/v1624094049/Design/hflxamrfs0l7ba1oh4nm.png','rita design 9','rita design 9 description text 1 text 2 text 3 text 4 ....',100),(109,'Design/vjn8tguzypy8c8g4b1aa','http://res.cloudinary.com/dmofxxark/image/upload/v1624094052/Design/vjn8tguzypy8c8g4b1aa.png','rita design 10','rita design 10 description text 1 text 2 text 3 text 4.....',100),(110,'Design/htju912lofcahaq9wspf','http://res.cloudinary.com/dmofxxark/image/upload/v1624094053/Design/htju912lofcahaq9wspf.png','rita design 11','rita design 11 description text 1 text 2 text 3 text 4 ....',100),(111,'Design/hqaespsasokrexmh8c2o','http://res.cloudinary.com/dmofxxark/image/upload/v1624094055/Design/hqaespsasokrexmh8c2o.png','rita design 12','rita design 12 description text 1 text 2 text 3 text 4 ....',100),(112,'Design/j2uxfzpfzxjhlzfv1ttd','http://res.cloudinary.com/dmofxxark/image/upload/v1624094599/Design/j2uxfzpfzxjhlzfv1ttd.png','Hacked Title','Hacked Description      01',102),(113,'Design/ki8aa5ujmvcouqbewwvq','http://res.cloudinary.com/dmofxxark/image/upload/v1624796779/Design/ki8aa5ujmvcouqbewwvq.png','text','text',102),(114,'Design/jcoyarynq7xecm3dbane','http://res.cloudinary.com/dmofxxark/image/upload/v1624797191/Design/jcoyarynq7xecm3dbane.png','try','trytry',102),(115,'Design/m61mje5lblwkank5fgyj','http://res.cloudinary.com/dmofxxark/image/upload/v1624797251/Design/m61mje5lblwkank5fgyj.png','try','trytry',102),(116,'Design/gd0ymnsoafihputtnvsj','http://res.cloudinary.com/dmofxxark/image/upload/v1624797340/Design/gd0ymnsoafihputtnvsj.png','tt','tt',102),(117,'Design/zz6j8roh1q80r0mvlcw5','http://res.cloudinary.com/dmofxxark/image/upload/v1624806139/Design/zz6j8roh1q80r0mvlcw5.png','Test','tt',102),(118,'Design/yrnm7ezqeazyb8vlu1nz','http://res.cloudinary.com/dmofxxark/image/upload/v1624806190/Design/yrnm7ezqeazyb8vlu1nz.png','bbb','ttbbbbbbbb',102),(119,'Design/eitc5fvgbwgo3swdsgka','http://res.cloudinary.com/dmofxxark/image/upload/v1624806367/Design/eitc5fvgbwgo3swdsgka.png','frthrthrh','tyhthththt',102);
/*!40000 ALTER TABLE `file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `role_name` (`role_name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) COLLATE latin1_general_ci NOT NULL,
  `email` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `user_password` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (100,'rita','rita@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(101,'robert','robert@admin.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',1),(102,'bob','bob@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(103,'braddy','braddy@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(104,'josh','josh@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(105,'john','john@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(106,'fred','fred@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(107,'ashley','ashley@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(108,'amy','amy@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(109,'anita','anita@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(110,'eddy','eddy@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(111,'larry','larry@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(112,'ahtan','ahtan@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(113,'joe','joe@admin.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(114,'gabby','gabby@designer.com','$2b$10$K.0HwpsoPDGaB/atFBmmXOGTw4ceeg33.WrxJx/FeC9.gCyYvIbs6',2),(115,'test','test@gmail.com','$2b$10$4NO2zsCViFfovH2qQIzL2.t6eyc4nXu06FdA3zm2c.gTjAaPP/7xq',2),(116,'test2','test2@gmail.com','$2b$10$jKvaNz66aSEwmEaSy53WFu9WqkGH9mAy6B19myKRNJH6NcjS4xrAa',2),(128,'testing','testing@gmail.com','$2b$10$YZZoAXBi.1KPWjPtag9LYupFdoUV4LByTTeD9uCYLl6sKEVc8xXPC',2),(129,'ytn','nyt','$2b$10$C5G0KV95LMm07XN8EoyYnuq455GMlQJtY7aYBQHbdmhAQEEwiBTb.',2),(130,'tynt','ygy@gmail.com','$2b$10$JgQ0Q9Gbc24HTwJ5..SnB.nh5hxTluvnjdxCBo4SkgFW76Hcukv1G',2),(131,'testingName','testingEmail@gmail.com','$2b$10$mMCII20zA/.RlauJv.f09eIm0AFxuH5tmobmjA07vNq0R/nAqL8ri',2),(132,'TERRY','terry@abc.com','$2b$10$zs9nRRmp2ZPZ08asqW46QO28/WIxOc6SqiukREFFPOhcnBQywJZ2i',2);
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

-- Dump completed on 2021-07-09 14:51:51
