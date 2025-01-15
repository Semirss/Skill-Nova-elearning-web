-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Jan 15, 2025 at 03:04 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `skill_nova`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `userName`, `password`) VALUES
(1, 'Admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `courseID` int(11) NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `details` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`courseID`, `image`, `title`, `description`, `duration`, `details`) VALUES
(2, 'http://localhost/skill-nova-backEnd/css.png', 'CSS', 'Cascading Style Sheet', '20weeks', 'all%20courses/course-details-1'),
(7, 'http://localhost/skill-nova-backEnd/html.png', 'Html', 'Html is ...', '30 weeks', 'all%20courses/course-details-1'),
(15, 'http://localhost/skill-nova-backEnd/html.png', 'JavaScript', 'Javascript', '30 weeks', 'all%20courses/course-details-1');

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `quizID` int(11) NOT NULL,
  `courseID` int(11) NOT NULL,
  `questions` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`quizID`, `courseID`, `questions`) VALUES
(0, 0, 'css is ...');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `roomID` int(11) NOT NULL,
  `courseID` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`roomID`, `courseID`, `title`, `description`) VALUES
(7, 2, 'CSS Room', 'Css is...'),
(17, 7, 'HTML Room', 'html'),
(18, 15, 'JS Room', 'JavaScript Room');

-- --------------------------------------------------------

--
-- Table structure for table `room_answer`
--

CREATE TABLE `room_answer` (
  `answerID` int(11) NOT NULL,
  `questionID` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `answer` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `room_answer`
--

INSERT INTO `room_answer` (`answerID`, `questionID`, `userId`, `answer`, `timestamp`) VALUES
(60, 63, 40, 'CSS is ...', '2025-01-10 02:41:13'),
(62, 65, 40, 'Tailwind css is ...', '2025-01-10 02:48:42'),
(64, 69, 40, 'Html is', '2025-01-11 04:57:05'),
(66, 70, 47, 'JS is ...', '2025-01-11 05:29:22');

-- --------------------------------------------------------

--
-- Table structure for table `room_question`
--

CREATE TABLE `room_question` (
  `questionID` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `roomID` int(11) NOT NULL,
  `question` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `room_question`
--

INSERT INTO `room_question` (`questionID`, `userId`, `roomID`, `question`, `timestamp`) VALUES
(63, 40, 7, 'What is css?', '2025-01-10 02:40:47'),
(65, 40, 7, 'What is tailwind css?', '2025-01-10 02:48:08'),
(69, 40, 17, 'What is HTML?', '2025-01-11 04:56:47'),
(70, 47, 18, 'What is JS?', '2025-01-11 05:29:10');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `studentID` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `courseID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`studentID`, `userId`, `courseID`) VALUES
(25, 40, 2),
(27, 47, 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `userName` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullName` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `userName`, `fullName`, `password`, `email`) VALUES
(40, 'tom01', 'Tom', '$2y$10$jB/tu9idv7i7KMctHCTifOFJX7c0BfDoAO5LBEdk7D2bkq7J9DiO.', 'tom01@gmail'),
(47, 'abel01', 'Abel', '$2y$10$7jwft6Ccvoh2r6Na8UFtaOD016zGPMUQsDYB6vWalgbK3zZLX/XHC', 'abelyoh@gma');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`courseID`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`roomID`),
  ADD KEY `room_ibfk_1` (`courseID`);

--
-- Indexes for table `room_answer`
--
ALTER TABLE `room_answer`
  ADD PRIMARY KEY (`answerID`),
  ADD KEY `room_answer_ibfk_1` (`questionID`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `room_question`
--
ALTER TABLE `room_question`
  ADD PRIMARY KEY (`questionID`),
  ADD KEY `room_question_ibfk_2` (`roomID`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`studentID`),
  ADD UNIQUE KEY `userId` (`userId`),
  ADD KEY `courseID` (`courseID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `courseID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `roomID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `room_answer`
--
ALTER TABLE `room_answer`
  MODIFY `answerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `room_question`
--
ALTER TABLE `room_question`
  MODIFY `questionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `studentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`courseID`) REFERENCES `course` (`courseID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `room_answer`
--
ALTER TABLE `room_answer`
  ADD CONSTRAINT `room_answer_ibfk_1` FOREIGN KEY (`questionID`) REFERENCES `room_question` (`questionID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `room_answer_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `room_question`
--
ALTER TABLE `room_question`
  ADD CONSTRAINT `room_question_ibfk_2` FOREIGN KEY (`roomID`) REFERENCES `room` (`roomID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `room_question_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_3` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `student_ibfk_4` FOREIGN KEY (`courseID`) REFERENCES `course` (`courseID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
