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
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `books` (
  `bookid` int(11) NOT NULL AUTO_INCREMENT,
  `level` int(11) DEFAULT NULL,
  `term` int(11) DEFAULT NULL,
  `examtype` int(11) DEFAULT NULL,
  `fileLocation` varchar(250) DEFAULT NULL,
  `fileName` varchar(250) DEFAULT NULL,
  `uploadTime` varchar(100) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `size` float DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `imgsrc` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`bookid`)
) ENGINE=InnoDB AUTO_INCREMENT=234 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (196,1,1,1,'./uploads/843a2e4547b73561878859b23ebadb10.pdf','Computer Fundamentals','1610013641468',200,24,3599660,'pdf','./uploads/bb8e3e1b11c9ae20a3eb3ddd2f0a07af.jpeg'),(197,1,2,1,'./uploads/b9a4b949be659a396506d8b7439f599c.pdf','Elementary Linear Algebra with Applications','1610013699195',200,24,20652300,'pdf','./uploads/cb30b8c26e08bbf2748a9a3094649eb6.png'),(198,1,2,1,'./uploads/575e0097692330342e7fe36f225ee287.pdf','University Physics With Modern Physics 1','1610013738326',200,24,73174,'pdf','./uploads/f59b4fe33d154230995f81f41547aab9.png'),(199,1,2,1,'./uploads/ca8ddc2acfbb8e93608347aeff52d462.pdf','Programming in ANSI C','1610013764177',200,24,1253660,'pdf','./uploads/0cee360ec65e5f61693495bdce73b9f0.jpeg'),(200,1,3,1,'./uploads/ab8459c86cedb5742df9321c1ce175dc.pdf','Debdutta Pal, Suman Halder - Data Structure and Algorithm with C (2018, ALPHA SCIENCE INTL) - libgen.lc','1610013802563',200,24,6563470,'pdf','./uploads/8ae280d86726665ae296ef8b93a0f897.jpeg'),(201,1,3,1,'./uploads/56110dd787c86dc07aab2f9ffe7edf91.pdf','Discrete Mathematics and Its Applications','1610013839113',200,24,9772830,'pdf','./uploads/8a257148300847deb56cb16de294626b.jpeg'),(202,1,3,1,'./uploads/851f466158e2dd916355e22f1e01ecb3.pdf','Basic Engineering Circuit Analysis ','1610013875836',200,24,32769600,'pdf','./uploads/1f654ad44fb0fa5593fad6d4bca8a5c6.png'),(203,1,3,1,'./uploads/d28af11f29b06293e1e0fec09103d87a.pdf','A First Course in Differential','1610013917169',200,24,12784500,'pdf','./uploads/afa9ed15db5865d2bc00f2d7e66cecfe.png'),(204,2,1,1,'./uploads/0d3f1861a74f2032971b25ad3cf3be5f.pdf','Digital Systems Principles And Applications  ','1610013943942',200,24,57394100,'pdf','./uploads/b311757a365965c5d234b0334547e181.png'),(205,2,1,1,'./uploads/3a2f1402485308c440fc7c27f71b7031.pdf','Laplace_pdf','1610013961542',200,24,4754120,'pdf','./uploads/61642fa1d96913ebe9be459f8ca62823.png'),(206,2,1,1,'./uploads/deedf423454de2fee92dfca59ee57b47.pdf','JAVA Programming','1610013990101',200,24,7838510,'pdf','./uploads/0fe21eccfe4db27e03e7dca1cb69ae5e.png'),(207,2,1,1,'./uploads/0c5b9d99fe9ecdc9dc403c16fb27b629.pdf','Introduction to algorithm','1610014025812',200,24,5779720,'pdf','./uploads/463656e78ab05c4809437049dfbe891a.jpeg'),(208,2,2,1,'./uploads/d908fb175723c6d33eb6593503b748ce.pdf','Principles-of-Electronics','1610014071976',200,24,15756000,'pdf','./uploads/4fbb462f85582752e82bb643b4fc9a20.jpeg'),(209,2,2,1,'./uploads/6bfae710caade135e52c17e082fc498d.pdf','Statistics','1610014094340',200,24,29990600,'pdf','./uploads/223fa5d2b20eafe50497f70b8baa4c88.jpeg'),(210,2,3,1,'./uploads/404a7e147e1095b144b680fbf4ff44da.pdf',' Assembly Language Programming Organization of the IBM PC ','1610014136387',200,24,15043200,'pdf','./uploads/1da18d6f2b0d0c3270f94361b33ef610.jpeg'),(211,2,3,1,'./uploads/aec38dd20dc173ca583f169634e5c9cd.pdf','Data Communications','1610014158170',200,24,68633500,'pdf','./uploads/803bb357351a7dbb36de8ca6cac1450c.png'),(212,2,3,1,'./uploads/63268552323aaeb1eff33ab8ca6cdf1f.pdf','Computational Molecular Biology','1610014567397',200,24,6156950,'pdf','./uploads/b7fe261b16f9fa708df48589cb5a54a9.jpeg'),(213,3,1,1,'./uploads/0bc6a997d051aa4d7aa1a056bf8d5728.pdf','Data Communications and Networking','1610014617641',200,24,39254600,'pdf','./uploads/3ebfd3ac43f46633368355d2603a6180.png'),(214,3,1,1,'./uploads/140e23cd22ed03606ac7243f4f5437c0.pdf','Data Communications and Networking','1610014617990',200,24,39254600,'pdf','./uploads/3ebfd3ac43f46633368355d2603a6180.png'),(215,3,1,1,'./uploads/0d8ad19cc7f1a87c5948996722bdd96b.pdf','Data Communications and Networking','1610014618164',200,24,39254600,'pdf','./uploads/3ebfd3ac43f46633368355d2603a6180.png'),(216,3,1,1,'./uploads/d2bc096681685c17c205295e7c1200df.pdf','Data Communications and Networking','1610014618293',200,24,39254600,'pdf','./uploads/3ebfd3ac43f46633368355d2603a6180.png'),(217,3,1,1,'./uploads/39eaea038330483b40d6ed2e766ebbd7.pdf','Database-System-Concepts-6e','1610014632505',200,24,17297600,'pdf','./uploads/e2907f945509232adac6864a5333732f.png'),(218,3,2,1,'./uploads/962de32b2299a2623d1333de722b5ea7.pdf','Computer Architecture and Organization','1610014673743',200,24,17921000,'pdf','./uploads/af4a52f12798f08440a18a1ae7077072.png'),(219,3,2,1,'./uploads/0091ed8688962b25204ae62c180ce121.pdf','Economics','1610014689872',200,24,33628500,'pdf','./uploads/44002fa043490d7b89dcbf30aed6a4aa.png'),(220,3,2,1,'./uploads/f16efa8421ad8e0589c4afa93091a1de.pdf','Operating Systems','1610014704081',200,24,7038100,'pdf','./uploads/b2e066abffe66235f24a054b1909c338.png'),(221,3,2,1,'./uploads/78e566d775a161a99331e9287d0ec235.pdf','System Analysis & Design','1610014715742',200,24,41770900,'pdf','./uploads/bdc74551e04009c79335969d1f5fae9f.png'),(222,3,3,1,'./uploads/f157411a919dd381474de22cf80e2499.pdf','Compiler Design','1610014735226',200,24,50581300,'pdf','./uploads/eecfd19bab11a9f89d9614ecee7554b5.png'),(223,3,3,1,'./uploads/6429233b2a0bbe28f339708ae793dfb5.pdf','Financial and Managerial Accounting','1610014745196',200,24,34701100,'pdf','./uploads/02f0548991fceb5f35cf9eb4a3222492.jpeg'),(224,3,3,1,'./uploads/0983ef380de31ebb5363236c60669db3.pdf','Software Engineering','1610014756423',200,24,14566700,'pdf','./uploads/de289718873ff4586507a544217168f3.pdf'),(226,4,1,1,'./uploads/33b5444f24831393f4c779f6ed04cd2d.pdf','artificial-intelligence','1610014800899',200,24,37986700,'pdf','./uploads/1348fbbc6d9007de28b8634e419bb504.jpeg'),(227,4,1,1,'./uploads/880b0ce45eb3b2e11cb15440f9abe2bc.pdf','Simulation','1610014815749',200,24,28803800,'pdf','./uploads/053027ace098f32fd926caab1d6653f6.jpeg'),(228,4,1,1,'./uploads/d6362c0dc7c1bff7b8aa4841289f3580.pdf','Web Engineering','1610014828430',200,24,13056900,'pdf','./uploads/c30a2fcbfacc521d857fcbb6563b95c1.png'),(229,4,2,1,'./uploads/9b55a013cc57f6f9781dfc3ec5cab41d.pdf','Computer Graphics','1610014855252',200,24,21139000,'pdf','./uploads/6eb535b6f5ddacda259d923a3edb8e98.jpeg'),(230,4,2,1,'./uploads/13231a1a54b36fd9e4f3437131255eb4.pdf','Computer Graphics','1610014874109',200,24,58296400,'pdf','./uploads/6eb535b6f5ddacda259d923a3edb8e98.jpeg'),(231,4,2,1,'./uploads/841e6d1106123347fd66dcc92610a429.pdf','Embedded Systems','1610014889260',200,24,12611300,'pdf','./uploads/de289718873ff4586507a544217168f3.pdf'),(232,4,3,1,'./uploads/db9ec7a3b25948402e89256b835c87eb.pdf','Introduction to Robotics','1610014909288',200,24,5365780,'pdf','./uploads/0c4ae076baaea5a04b028a9aa44b2e8a.jpeg'),(233,4,3,1,'./uploads/9651262ad69f6407304c7184f9a521cf.pdf','Social and Professional Issues in Computing','1610014921874',200,24,3697860,'pdf','./uploads/2d59d3bc72b19b296c05470a3ea2843f.png');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-26 22:51:49
