
/* Buat tabel product */
CREATE TABLE `tb_product`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` varchar(10) NOT NULL,
  `id_catagory` int(11) NOT NULL,
  `id_cashier` int(11) NOT NULL,
  PRIMARY KEY (`id`)
)

/* Membuat tabel catagory */
CREATE TABLE `tb_catagory`  (
  `id_catagory` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id_catagory`)
)

/* Membuat tabel cashier */
CREATE TABLE `tb_cashier`  (
  `id_cashier` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id_cashier`)
)

/* Menambahakan Data di tabel cashier */
INSERT INTO `tb_cashier` VALUES (1, 'Pevita Pearce');
INSERT INTO `tb_cashier` VALUES (2, 'Raisa Andriana');
INSERT INTO `tb_cashier` VALUES (3, 'Betuah Anugerah');

/* Menambahkan Data di tabel catagory */
INSERT INTO `tb_catagory` VALUES (1, 'Food');
INSERT INTO `tb_catagory` VALUES (2, 'Drink');

/* Menambahkan Data di tabel product */
INSERT INTO `tb_product` VALUES (1, 'Latte', '10000', 2, 1);
INSERT INTO `tb_product` VALUES (2, 'Cake', '20000', 1, 2);
INSERT INTO `tb_product` VALUES (3, 'Green Tea', '15000', 2, 3);

/* Query menggabungkan tabel */
SELECT
	tb_cashier.`name` as 'cashier', 
	tb_product.`name` as 'product', 
	tb_catagory.`name` as 'catagory', 
	tb_product.price
FROM
	tb_product
	INNER JOIN
	tb_cashier
	ON 
		tb_product.id_cashier = tb_cashier.id_cashier
	INNER JOIN
	tb_catagory
	ON 
		tb_product.id_catagory = tb_catagory.id_catagory