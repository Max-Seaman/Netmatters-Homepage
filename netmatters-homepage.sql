-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 09, 2025 at 10:22 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `netmatters-homepage`
--

-- --------------------------------------------------------

--
-- Table structure for table `contactform`
--

CREATE TABLE `contactform` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `companyname` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `marketing` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contactform`
--

INSERT INTO `contactform` (`id`, `name`, `companyname`, `email`, `phone`, `message`, `marketing`) VALUES
(17, 'SDF', 'SDF', 'admin@admin.com', '03423452134', '3456gfhs', 0),
(18, 'SDF', 'SDF', 'admin@admin.com', '03423452134', '3456gfhs', 0),
(19, 'Max Seaman', '', 'maxlseaman@icloud.com', '01345123451', '12th1', 0),
(20, 'Max Seaman', '', 'maxlseaman@icloud.com', '01345123451', '12th1', 0),
(21, 'Max Seaman', '', 'maxlseaman@icloud.com', '01345123451', '12th1', 0),
(22, 'SDF', 'SDF', 'WADFGHADFH@AFDGADSFG.ASDGADSG', '01345123451', 'sdf123', 0),
(23, 'SDF', 'SDF', 'WADFGHADFH@AFDGADSFG.ASDGADSG', '01345123451', 'qwq21', 0),
(24, 'SDF', 'SDF', 'WADFGHADFH@AFDGADSFG.ASDGADSG', '01345123451', 'qwerqwer', 0),
(25, 'SDF', 'SDF', 'admin@admin.com', '03423452134', '11111111111111111111111111111111', 1),
(26, 'SDF', 'SDF', 'admin@admin.com', '03423452134', '11111111111111111111111111111111', 1),
(27, 'SDF', '', 'admin@admin.com', '03423452134', '662663634254362', 1);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `button` int(11) NOT NULL,
  `author-image` text NOT NULL,
  `author` varchar(255) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `type`, `image`, `title`, `description`, `button`, `author-image`, `author`, `date`) VALUES
(1, 'insights', 'news-value.png', 'How Much Could Bespoke Software Add to Your E...', 'If you\'re a Managing Director or Senior Manager preparing your business for exit, you know that incr...', 1, 'news-netmatters.png', 'Netmatters', '2025-06-27'),
(2, 'insights', 'news-ai.png', 'How Can AI Benefit My Business?', 'The idea of integrating AI into business operations may seem daunting, but there are undeniable...', 1, 'news-netmatters.png', 'Netmatters', '2025-06-26'),
(3, 'careers', 'news-hire.png', '1st Line Technician', 'Salary Range &pound;25,000 - &pound;29,000 + Pension Hours 40 hours per week, Monday - Friday Location Wymondham...', 2, 'news-BS.png', 'Bethany Shakespeare', '2025-06-20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contactform`
--
ALTER TABLE `contactform`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contactform`
--
ALTER TABLE `contactform`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
