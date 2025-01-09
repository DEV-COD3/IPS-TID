-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-01-2025 a las 14:29:03
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tid_medical`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipo`
--

CREATE TABLE `equipo` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `equipo`
--

INSERT INTO `equipo` (`id`, `nombre`) VALUES
(1, 'PC'),
(2, 'PORTATIL'),
(3, 'FONENDOSCOPIO'),
(4, 'PULSOXÍMETRO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `id` int(11) NOT NULL,
  `estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`id`, `estado`) VALUES
(1, 'ACTIVO'),
(2, 'INACTIVO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inventario`
--

CREATE TABLE `inventario` (
  `id` int(11) NOT NULL,
  `foto` varchar(500) NOT NULL,
  `codigo` varchar(100) NOT NULL,
  `equipo_id` int(11) NOT NULL,
  `marca_id` int(11) NOT NULL,
  `modelo` varchar(100) NOT NULL,
  `serial` varchar(100) NOT NULL,
  `registroInviama` varchar(500) NOT NULL,
  `riesgo` int(11) NOT NULL,
  `ubicacion` varchar(200) NOT NULL,
  `responsable` int(11) NOT NULL,
  `sistemaOperativo` varchar(50) NOT NULL,
  `color` varchar(90) NOT NULL,
  `estado` int(11) NOT NULL,
  `observaciones` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `inventario`
--

INSERT INTO `inventario` (`id`, `foto`, `codigo`, `equipo_id`, `marca_id`, `modelo`, `serial`, `registroInviama`, `riesgo`, `ubicacion`, `responsable`, `sistemaOperativo`, `color`, `estado`, `observaciones`) VALUES
(1, 'https://static.vecteezy.com/system/resources/previews/020/319/380/large_2x/gaming-pc-icon-vector.jpg', 'METID-00301', 2, 2, 'maicol', '5CD044KT50', 'NO APLIC', 4, 'ESTADIO', 1, 'WINDOWS 10', 'DORADO/PLATEADO', 1, 'AMD RIZEN 3 8 GB RAM                      https://drive.google.com/file/d/1uf3CjjYivqHA0CeCOh5nq8IbD-Qu80qi/view?usp=sharing'),
(2, 'https://static.vecteezy.com/system/resources/previews/020/319/380/large_2x/gaming-pc-icon-vector.jpg', 'ETTID-009', 1, 1, 'klko12', 'sdfa4f34f34f3434f4', 'NO APLICA', 4, ' ESTADIO', 2, 'WINDOWS 111', 'VERDE', 1, 'RIZEN 5\r\n'),
(3, 'https://previews.123rf.com/images/pikepicture/pikepicture1710/pikepicture171000219/87984650-estetoscopio-aislado-aislado-m%C3%A9dico-l%C3%ADquido-blanco-salud-concepto-es-ilustraci%C3%B3n-vectorial.jpg', 'METID-0044', 3, 4, 'RR5654', 'AD56ASFG45', 'SDFSDJA9898', 1, 'ROBLEDO', 3, 'NO APLICA', 'NEGRO', 1, 'LO TIENE MARCOS EL AUXILIAR\r\n'),
(4, 'https://static.vecteezy.com/system/resources/previews/020/319/380/large_2x/gaming-pc-icon-vector.jpg', 'METID-00301', 2, 2, 'MET43', '5CD044KT50', 'NO APLIC', 4, 'ESTADIO', 1, 'WINDOWS 10', 'DORADO/PLATEADO', 1, 'AMD RIZEN 3 8 GB RAM                      https://drive.google.com/file/d/1uf3CjjYivqHA0CeCOh5nq8IbD-Qu80qi/view?usp=sharing'),
(5, 'https://static.vecteezy.com/system/resources/previews/020/319/380/large_2x/gaming-pc-icon-vector.jpg', 'METID-00301', 2, 2, 'MET43', '5CD044KT50', 'NO APLIC', 4, 'ESTADIO', 1, 'WINDOWS 10', 'DORADO/PLATEADO', 1, 'AMD RIZEN 3 8 GB RAM                      https://drive.google.com/file/d/1uf3CjjYivqHA0CeCOh5nq8IbD-Qu80qi/view?usp=sharing'),
(6, 'https://static.vecteezy.com/system/resources/previews/020/319/380/large_2x/gaming-pc-icon-vector.jpg', 'METID-0044', 1, 1, 'klko12', 'sdfa4f34f34f3434f4', 'NO APLICA', 4, ' ESTADIO', 2, 'WINDOWS 111', 'VERDE', 1, 'RIZEN 5\r\n'),
(7, 'https://previews.123rf.com/images/pikepicture/pikepicture1710/pikepicture171000219/87984650-estetoscopio-aislado-aislado-m%C3%A9dico-l%C3%ADquido-blanco-salud-concepto-es-ilustraci%C3%B3n-vectorial.jpg', 'METID-0044', 3, 4, 'RR5654', 'AD56ASFG45', 'SDFSDJA9898', 1, 'ROBLEDO', 3, 'NO APLICA', 'NEGRO', 1, 'LO TIENE MARCOS EL AUXILIAR\r\n'),
(8, 'https://static.vecteezy.com/system/resources/previews/020/319/380/large_2x/gaming-pc-icon-vector.jpg', 'METID-00301', 2, 2, 'MET43', '5CD044KT50', 'NO APLIC', 4, 'ESTADIO', 1, 'WINDOWS 10', 'DORADO/PLATEADO', 1, 'AMD RIZEN 3 8 GB RAM                      https://drive.google.com/file/d/1uf3CjjYivqHA0CeCOh5nq8IbD-Qu80qi/view?usp=sharing'),
(9, 'https://static.vecteezy.com/system/resources/previews/020/319/380/large_2x/gaming-pc-icon-vector.jpg', 'METID-00301', 2, 2, 'ettid09', '5CD044KT50', 'NO APLIC', 4, 'ESTADIO', 1, 'WINDOWS 10', 'DORADO/PLATEADO', 1, 'AMD RIZEN 3 8 GB RAM                      https://drive.google.com/file/d/1uf3CjjYivqHA0CeCOh5nq8IbD-Qu80qi/view?usp=sharing'),
(10, 'https://static.vecteezy.com/system/resources/previews/020/319/380/large_2x/gaming-pc-icon-vector.jpg', 'METID-0044', 1, 1, 'klko12', 'sdfa4f34f34f3434f4', 'NO APLICA', 4, ' ESTADIO', 2, 'WINDOWS 111', 'VERDE', 1, 'RIZEN 5\r\n'),
(11, 'https://previews.123rf.com/images/pikepicture/pikepicture1710/pikepicture171000219/87984650-estetoscopio-aislado-aislado-m%C3%A9dico-l%C3%ADquido-blanco-salud-concepto-es-ilustraci%C3%B3n-vectorial.jpg', 'METID-0044', 3, 4, 'RR5654', 'AD56ASFG45', 'SDFSDJA9898', 1, 'ROBLEDO', 3, 'NO APLICA', 'NEGRO', 1, 'LO TIENE MARCOS EL AUXILIAR\r\n'),
(12, 'https://static.vecteezy.com/system/resources/previews/020/319/380/large_2x/gaming-pc-icon-vector.jpg', 'METID-00301', 2, 2, 'MET43', '5CD044KT50', 'NO APLIC', 4, 'ESTADIO', 1, 'WINDOWS 10', 'DORADO/PLATEADO', 1, 'AMD RIZEN 3 8 GB RAM                      https://drive.google.com/file/d/1uf3CjjYivqHA0CeCOh5nq8IbD-Qu80qi/view?usp=sharing'),
(13, 'https://static.vecteezy.com/system/resources/previews/020/319/380/large_2x/gaming-pc-icon-vector.jpg', 'METID-00301', 2, 2, 'MET43', '5CD044KT50', 'NO APLIC', 4, 'ESTADIO', 1, 'WINDOWS 10', 'DORADO/PLATEADO', 1, 'AMD RIZEN 3 8 GB RAM                      https://drive.google.com/file/d/1uf3CjjYivqHA0CeCOh5nq8IbD-Qu80qi/view?usp=sharing'),
(14, 'https://static.vecteezy.com/system/resources/previews/020/319/380/large_2x/gaming-pc-icon-vector.jpg', 'METID-0044', 1, 1, 'klko12', 'sdfa4f34f34f3434f4', 'NO APLICA', 4, ' ESTADIO', 2, 'WINDOWS 111', 'VERDE', 1, 'RIZEN 5\r\n'),
(15, 'https://previews.123rf.com/images/pikepicture/pikepicture1710/pikepicture171000219/87984650-estetoscopio-aislado-aislado-m%C3%A9dico-l%C3%ADquido-blanco-salud-concepto-es-ilustraci%C3%B3n-vectorial.jpg', 'METID-0044', 3, 4, 'RR5654', 'AD56ASFG45', 'SDFSDJA9898', 1, 'ROBLEDO', 3, 'NO APLICA', 'NEGRO', 2, 'LO TIENE MARCOS EL AUXILIAR\r\n'),
(16, 'https://static.vecteezy.com/system/resources/previews/020/319/380/large_2x/gaming-pc-icon-vector.jpg', 'METID-00301', 2, 2, 'MET43', '5CD044KT50', 'NO APLIC', 4, 'ESTADIO', 1, 'WINDOWS 10', 'DORADO/PLATEADO', 1, 'AMD RIZEN 3 8 GB RAM                      https://drive.google.com/file/d/1uf3CjjYivqHA0CeCOh5nq8IbD-Qu80qi/view?usp=sharing');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`id`, `nombre`) VALUES
(1, 'LENOVO'),
(2, 'HP'),
(3, 'LIFEN'),
(4, 'GMD');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modules`
--

CREATE TABLE `modules` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `modules`
--

INSERT INTO `modules` (`id`, `name`) VALUES
(2, 'agend'),
(5, 'chatboot'),
(9, 'contratacion'),
(4, 'control'),
(6, 'facture'),
(7, 'inventory'),
(10, 'portalSura'),
(1, 'programing'),
(3, 'users');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `riesgo`
--

CREATE TABLE `riesgo` (
  `id` int(11) NOT NULL,
  `riesgo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `riesgo`
--

INSERT INTO `riesgo` (`id`, `riesgo`) VALUES
(1, 'I'),
(2, 'IIB'),
(3, 'IIA'),
(4, 'NO APLICA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'ADMIN'),
(2, 'AUXILIAR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `role_modules`
--

CREATE TABLE `role_modules` (
  `role_id` int(11) NOT NULL,
  `module_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `role_modules`
--

INSERT INTO `role_modules` (`role_id`, `module_id`) VALUES
(1, 3),
(1, 7),
(2, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `names` varchar(100) DEFAULT NULL,
  `surnames` varchar(100) DEFAULT NULL,
  `cedula` varchar(100) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `names`, `surnames`, `cedula`, `status`, `email`) VALUES
(1, 'H.ADMIN', '$2a$12$cQB1VdYnpXAK43NGB8KBO.RszdIW9BRhtjRildSzqF243G2CvC.GS', 'Michael andres holguin lopez', 'SISTEMAS', '1565465465', 1, 'admi@gmail.com'),
(2, 'H.SULIMA', '$2a$12$cQB1VdYnpXAK43NGB8KBO.RszdIW9BRhtjRildSzqF243G2CvC.GS', 'SULIMA', '.', '154654', 1, 'sulima@gmail.com'),
(3, 'L.JUAN', '$2a$12$R3QyHOUUBRpdHvLzFedu2ulBp0uxWVjrm/9R8/Y2WmsqXfqHsOS8m', 'JUAN DIEGO', 'LEITON', '12008611341', 1, 'juan@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(1, 1),
(2, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `equipo`
--
ALTER TABLE `equipo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_inventarios` (`equipo_id`),
  ADD KEY `fk_inven_marca` (`marca_id`),
  ADD KEY `fk_invent_estado` (`estado`),
  ADD KEY `fk_inven_riesgo` (`riesgo`),
  ADD KEY `fk_inven_USER` (`responsable`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `riesgo`
--
ALTER TABLE `riesgo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `role_modules`
--
ALTER TABLE `role_modules`
  ADD PRIMARY KEY (`role_id`,`module_id`),
  ADD KEY `module_id` (`module_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indices de la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `equipo`
--
ALTER TABLE `equipo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `inventario`
--
ALTER TABLE `inventario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `modules`
--
ALTER TABLE `modules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `riesgo`
--
ALTER TABLE `riesgo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD CONSTRAINT `fk_inven_USER` FOREIGN KEY (`responsable`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `fk_inven_marca` FOREIGN KEY (`marca_id`) REFERENCES `marca` (`id`),
  ADD CONSTRAINT `fk_inven_riesgo` FOREIGN KEY (`riesgo`) REFERENCES `riesgo` (`id`),
  ADD CONSTRAINT `fk_invent_estado` FOREIGN KEY (`estado`) REFERENCES `estado` (`id`),
  ADD CONSTRAINT `fk_inventarios` FOREIGN KEY (`equipo_id`) REFERENCES `equipo` (`id`);

--
-- Filtros para la tabla `role_modules`
--
ALTER TABLE `role_modules`
  ADD CONSTRAINT `role_modules_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `role_modules_ibfk_2` FOREIGN KEY (`module_id`) REFERENCES `modules` (`id`);

--
-- Filtros para la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
