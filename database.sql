-- CREANDO TABLAS

CREATE TABLE Clothing(
    Clothing_ID SERIAL,
    Model text,
    Type_Product_ID int,
    Size_Clothing_ID int,
    Type_Color_ID int,
    Type_Gender_ID int,
    Price int,
    Stock int,
    Img text,
    Likes int,
    PRIMARY KEY(Clothing_ID)
);

CREATE TABLE Shoes(
    Shoes_ID SERIAL,
    Model text,
    Type_Product_ID int,
    Size_Shoes_ID int,
    Type_Color_ID int,
    Type_Gender_ID int,
    Price int,
    Stock int,
    Img text,
    Likes int,
    PRIMARY KEY(Shoes_ID)
);

CREATE TABLE Accessories(
    Accessories_ID SERIAL,
    Model text,
    Type_Product_ID int,
    Type_Color_ID int,
    Type_Gender_ID int,
    Price int,
    Stock int,
    Img text,
    Likes int,
    PRIMARY KEY(Accessories_ID)
);

CREATE TABLE Size_Clothing(
    Size_Clothing_ID SERIAL,
    Type_Size text,
    PRIMARY KEY(Size_Clothing_ID)
);

CREATE TABLE Size_Shoes(
    Size_Shoes_ID SERIAL,
    Type_Size int,
    PRIMARY KEY(Size_Shoes_ID)
);

CREATE TABLE Type_Products(
    Type_Product_ID SERIAL,
    Type_Product text,
    PRIMARY KEY(Type_Product_ID)
);

CREATE TABLE Type_Color(
    Type_Color_ID SERIAL,
    Type_Color text,
    PRIMARY KEY(Type_Color_ID)
);

CREATE TABLE Genders(
    Type_Gender_ID SERIAL,
    Type_Gender text,
    PRIMARY KEY(Type_Gender_ID)
);

CREATE TABLE Users(
    User_ID SERIAL,
    First_Name text,
    Last_Name text,
    Email text,
    Username text,
    Pass_Word text,
    PRIMARY KEY(User_ID)
);

-- INSERTANDO DATOS

INSERT INTO Type_Color(Type_Color) VALUES ('Red'),('Blue'),('Black'),('Grey'),('White'),('Green'),('Sky Blue'),('Purple'),('Violet'),('Pink'),('Dark Blue'),('Apple Green'),('Orange'),('Turquoise'),('Yellow');

INSERT INTO Size_Shoes(Type_Size) VALUES ('35'),('36'),('37'),('38'),('39'),('40'),('41'),('42'),('43'),('44'),('45');

INSERT INTO Size_Clothing(Type_Size) VALUES ('XS'),('S'),('M'),('L'),('XL'),('XXL');

INSERT INTO Type_Products(Type_Product) VALUES ('Training Shoes'),('Running Shoes'),('Tops'),('T-Shirts'),('Shorts'),('Hoodies'),('Pullovers'),('Joggers'),('Sweatpants'),('Pants'),('Tights'),('Sports Bras'),('Watches'),('Cap');

INSERT INTO Genders(Type_Gender) VALUES ('Man'),('Woman');

INSERT INTO Users(First_Name, Last_Name, Email, Username, Pass_Word)
VALUES ('Kevin', 'Zlatan', 'kevinZlatan@gmail.com', 'KZlatan', 'kev123_*T')

-- CONSULTAS

SELECT * FROM Type_Products;

DROP TABLE Type_Color;

UPDATE Type_Products SET Type_Product = "Leggins" WHERE Type_Product = "Tights";

UPDATE Type_Products
SET Type_Product = 'Leggings'
WHERE Type_Product = 'Tights';

-----------------------------

-- INSERTANDO A SHOES

