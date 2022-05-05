-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Hôte : db:3306
-- Généré le : ven. 29 avr. 2022 à 09:30
-- Version du serveur : 10.7.3-MariaDB-1:10.7.3+maria~focal
-- Version de PHP : 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `meal_me`
--

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `username` VARCHAR(20) NOT NULL,
  `password` VARCHAR(60) NOT NULL
);

INSERT INTO `users` (`username`, `password`) VALUES
('theo', 'theo'),
('matthieu', 'matthieu'),
('marie', 'marie'),
('simon', 'simon');

--
-- Structure de la table `ingredients`
--

CREATE TABLE `ingredients` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` text NOT NULL
);

--
-- Déchargement des données de la table `ingredients`
--

INSERT INTO `ingredients` (`id`, `name`) VALUES
(1, 'yogurt'),
(2, 'yellow onion'),
(4, 'yellow bell pepper'),
(5, 'yeast'),
(7, 'wraps'),
(8, 'worcestershire sauce'),
(12, 'wine'),
(13, 'whole-grain mustard'),
(15, 'whole wheat flour'),
(16, 'whole wheat bread'),
(24, 'white wine'),
(25, 'white pepper'),
(26, 'white onion'),
(27, 'white chocolate'),
(32, 'whiskey'),
(34, 'whipped cream'),
(41, 'water'),
(42, 'walnuts'),
(43, 'vodka'),
(44, 'vinegar'),
(50, 'vegan margarine'),
(51, 'vegan chocolate chips'),
(52, 'vegan cheese'),
(55, 'vanilla extract'),
(56, 'vanilla bean'),
(57, 'vanilla'),
(59, 'unsalted butter'),
(62, 'turmeric'),
(65, 'turkey'),
(66, 'tuna'),
(67, 'truffle oil'),
(69, 'tortilla chips'),
(70, 'tortilla'),
(71, 'tortellini'),
(75, 'tomatoes'),
(76, 'tomato sauce'),
(78, 'tomato juice'),
(80, 'tofu'),
(82, 'toast'),
(85, 'thai red curry paste'),
(87, 'thai basil'),
(88, 'teriyaki sauce'),
(89, 'tequila'),
(91, 'tarragon'),
(95, 'taco shells'),
(99, 'sweet potato'),
(102, 'sweet paprika'),
(103, 'sweet onion'),
(104, 'sweet chilli sauce'),
(105, 'sunflower seeds'),
(111, 'sugar'),
(115, 'strawberry jello'),
(116, 'strawberry jam'),
(117, 'strawberries'),
(122, 'stew meat'),
(123, 'stevia'),
(125, 'steaks'),
(126, 'sriracha sauce'),
(127, 'squash'),
(128, 'sprouts'),
(129, 'sprite'),
(130, 'spinach'),
(135, 'spaghetti'),
(136, 'soy sauce'),
(141, 'sour cream'),
(142, 'soda water'),
(147, 'smoked salmon'),
(148, 'smoked paprika'),
(166, 'shiitake mushroom caps'),
(169, 'sherry'),
(170, 'shells'),
(171, 'shallot'),
(172, 'sesame seeds'),
(174, 'sesame oil'),
(176, 'seeds'),
(179, 'sea scallops'),
(180, 'sea salt'),
(183, 'sausage'),
(185, 'sandwich bun'),
(186, 'salted butter'),
(187, 'salt'),
(189, 'salsa'),
(190, 'salmon fillet'),
(191, 'salami'),
(193, 'salad'),
(195, 'sage'),
(199, 'rutabaga'),
(203, 'round steak'),
(205, 'rosemary'),
(207, 'romaine lettuce'),
(211, 'roast beef'),
(215, 'rice vinegar'),
(217, 'rice paper'),
(218, 'rice noodles'),
(219, 'rice milk'),
(221, 'rice'),
(222, 'ribs'),
(223, 'rhubarb'),
(228, 'red wine'),
(232, 'red onion'),
(235, 'red grapes'),
(238, 'red chilli'),
(240, 'red bell peppers'),
(243, 'shrimps'),
(246, 'raspberries'),
(249, 'ramen noodles'),
(252, 'radishes'),
(255, 'quinoa'),
(258, 'pumpkin seeds'),
(262, 'pumpkin'),
(264, 'prunes'),
(265, 'provolone cheese'),
(266, 'prosciutto'),
(268, 'powdered sugar'),
(270, 'potatoes'),
(286, 'pork'),
(291, 'pomegranates'),
(293, 'polenta'),
(296, 'plantain'),
(302, 'pita'),
(303, 'pistachios'),
(307, 'pineapple'),
(309, 'pimientos'),
(313, 'pickles'),
(315, 'pesto'),
(316, 'peppers'),
(317, 'pepperoni'),
(320, 'penne'),
(321, 'pecorino'),
(323, 'pecan'),
(324, 'peas'),
(325, 'pears'),
(329, 'peanuts'),
(333, 'peanut butter'),
(334, 'peach'),
(338, 'pasta'),
(341, 'parsley'),
(342, 'parmigiano reggiano'),
(343, 'paprika'),
(344, 'papaya'),
(347, 'pancetta'),
(348, 'palm sugar'),
(349, 'oysters'),
(353, 'oregano'),
(361, 'orange'),
(363, 'onion'),
(364, 'olives'),
(365, 'olive oil'),
(368, 'oil'),
(369, 'oats'),
(372, 'nutella'),
(380, 'nectarine'),
(383, 'mustard seeds'),
(384, 'mustard'),
(385, 'mussels'),
(386, 'mushroom'),
(387, 'mozzarella'),
(390, 'miso'),
(394, 'milk chocolate'),
(395, 'milk'),
(398, 'meatballs'),
(400, 'meat'),
(401, 'mayonnaise'),
(402, 'matcha tea'),
(404, 'mascarpone'),
(406, 'marshmallows'),
(411, 'margarine'),
(413, 'maple syrup'),
(414, 'mango'),
(415, 'mandarin oranges'),
(418, 'madras curry powder'),
(419, 'macadamia nuts'),
(432, 'lobster'),
(433, 'liquor'),
(436, 'linguine'),
(440, 'lime'),
(447, 'lettuce'),
(448, 'lemongrass'),
(454, 'lemon'),
(456, 'leeks'),
(461, 'lasagna noodles'),
(462, 'lamb'),
(464, 'kiwis'),
(466, 'ketchup'),
(467, 'kale'),
(468, 'kalamata olives'),
(476, 'jalapeno'),
(485, 'ice cream'),
(486, 'ice'),
(492, 'honey'),
(493, 'hoisin sauce'),
(494, 'herbs'),
(495, 'herbes de provence'),
(497, 'hazelnuts'),
(499, 'harissa'),
(501, 'hamburger buns'),
(502, 'ham'),
(505, 'guacamole'),
(506, 'gruyere'),
(526, 'greens'),
(528, 'green olives'),
(529, 'green grapes'),
(531, 'green chili pepper'),
(532, 'green bell pepper'),
(533, 'green beans'),
(538, 'grapefruit'),
(540, 'granola'),
(547, 'gouda cheese'),
(548, 'gorgonzola'),
(550, 'goat cheese'),
(551, 'gnocchi'),
(556, 'ginger'),
(557, 'gin'),
(558, 'gelatin'),
(563, 'garlic'),
(564, 'garam masala'),
(565, 'fusilli'),
(568, 'fudge'),
(573, 'fried onions'),
(589, 'flour'),
(595, 'fish'),
(596, 'fettuccine'),
(597, 'feta cheese'),
(601, 'fennel'),
(604, 'farro'),
(605, 'farfalle'),
(610, 'escarole'),
(612, 'english muffin'),
(615, 'macaronis'),
(616, 'eggplant'),
(621, 'eggs'),
(622, 'edamame'),
(641, 'dill'),
(650, 'dates'),
(652, 'dark chocolate'),
(659, 'cucumber'),
(661, 'croutons'),
(665, 'cream cheese'),
(666, 'cream'),
(668, 'cranberries'),
(673, 'courgettes'),
(676, 'cornmeal'),
(679, 'cornbread'),
(686, 'corn'),
(687, 'coriander'),
(699, 'coffee'),
(707, 'coconut'),
(708, 'cocoa powder'),
(710, 'clove'),
(712, 'clams'),
(716, 'cinnamon'),
(722, 'chocolate'),
(725, 'chili sauce'),
(727, 'chili peppers'),
(730, 'chickpea'),
(731, 'chicken wings'),
(732, 'chicken thighs'),
(733, 'chicken tenders'),
(742, 'chicken bouillon'),
(744, 'chia seeds'),
(745, 'chestnuts'),
(746, 'cherry tomatoes'),
(748, 'cherry'),
(749, 'cheese'),
(750, 'cheddar'),
(753, 'cereal'),
(758, 'celery'),
(760, 'cauliflower'),
(762, 'carrots'),
(763, 'carp'),
(765, 'cardamom'),
(767, 'caramels'),
(769, 'capers'),
(770, 'cantaloupe'),
(785, 'candy canes'),
(788, 'cabbage'),
(793, 'butter'),
(794, 'bulgur'),
(795, 'brussel sprouts'),
(797, 'brown sugar'),
(798, 'brown rice'),
(800, 'broccoli'),
(801, 'brie'),
(803, 'breadcrumbs'),
(805, 'bread'),
(810, 'blueberries'),
(811, 'blue cheese'),
(812, 'blood orange'),
(814, 'blackberries'),
(816, 'black pepper'),
(817, 'black olives'),
(818, 'black beans'),
(820, 'biscuits'),
(822, 'berries'),
(823, 'bell pepper'),
(824, 'beets'),
(825, 'beer'),
(831, 'beef'),
(832, 'beans'),
(833, 'bbq sauce'),
(836, 'banana'),
(838, 'balsamic vinegar'),
(843, 'baguette'),
(845, 'bacon'),
(849, 'baby carrots'),
(852, 'avocado'),
(853, 'asparagus'),
(857, 'arugula'),
(858, 'artichokes'),
(861, 'arborio rice'),
(862, 'apricots'),
(865, 'apple'),
(867, 'angel hair pasta'),
(869, 'andouille sausage'),
(870, 'anchovies'),
(873, 'almonds'),
(877, 'alfredo sauce'),
(887, 'french fries'),
(888, 'chicken');

--
-- Structure de la table `favorites`
--

CREATE TABLE `favorites` (
  `id` int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `user_id` int(10) NOT NULL,
  `recipe_id` text NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
);
