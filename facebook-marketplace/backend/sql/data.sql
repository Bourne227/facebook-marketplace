-- Dummy Data --
-- INSERT INTO dummy (created) VALUES (current_timestamp);

-- Populate Your Tables Here --
DELETE FROM fuser;
DELETE FROM dummy;
INSERT INTO fuser(useremail, uservalue) VALUES('zchu2@ucsc.edu','{"password": "passwordzchu2", "name": "Daniel"}');
INSERT INTO fuser(useremail, uservalue) VALUES('jli563@ucsc.edu','{"password": "passwordjli563", "name":"jli"}');
INSERT INTO fuser(useremail, uservalue) VALUES('tony6@ucsc.edu','{"password": "passwordtony6", "name":"Tony"}');
INSERT INTO fuser(useremail, uservalue) VALUES('stao7@ucsc.edu','{"password": "passwordstao7", "name":"Tao"}');
INSERT INTO fuser(useremail, uservalue) VALUES('Akali@ucsc.edu','{"password": "Akali", "name":"Akali"}');
INSERT INTO fuser(useremail, uservalue) VALUES('Alistar@ucsc.edu','{"password": "Alistar", "name":"Alistar"}');
INSERT INTO fuser(useremail, uservalue) VALUES('Anivia@ucsc.edu','{"password": "Anivia", "name":"Anivia"}');
INSERT INTO fuser(useremail, uservalue) VALUES('Braum@ucsc.edu','{"password": "Braum", "name":"Braum"}');
INSERT INTO fuser(useremail, uservalue) VALUES('jayce@ucsc.edu','{"password": "jayce", "name":"Talisi"}');
INSERT INTO fuser(useremail, uservalue) VALUES('victor@ucsc.edu','{"password": "victor", "name":"Vector"}');
INSERT INTO fuser(useremail, uservalue) VALUES('vi@ucsc.edu','{"password": "passwordvi", "name":"Vi"}');
INSERT INTO fuser(useremail, uservalue) VALUES('jinx@ucsc.edu','{"password": "passwordjinx", "name":"poder"}');
INSERT INTO fuser(useremail, uservalue) VALUES('warwick@ucsc.edu','{"password": "warwick", "name":"ww"}');
INSERT INTO fuser(useremail, uservalue) VALUES('ekko@ucsc.edu','{"password": "passwordekko", "name":"qicai"}');


-- INSERT INTO dummy(dtype, dvalue) VALUES('housing','{"capacity": "2b2b", "price": "4200", "location": "1102 Pacific Ave Santa Cruz CA", "sellerinfo": "ekko@ucsc.edu"}');
-- INSERT INTO dummy(dtype, dvalue) VALUES('housing','{"capacity": "4b2b", "price": "5300", "location": "6127 Maree ct San Jose CA", "sellerinfo": "jli563@ucsc.edu"}');
-- INSERT INTO dummy(dtype, dvalue) VALUES('housing','{"capacity": "2b2b", "price": "2300", "location": "37456 Willowood Dr Fremont CA", "sellerinfo": "stao7@ucsc.edu"}');
-- INSERT INTO dummy(dtype, dvalue) VALUES('housing','{"capacity": "1b1b", "price": "2000", "location": "1701 Mission St Santa Cruz CA", "sellerinfo": "vi@ucsc.edu"}');
-- INSERT INTO dummy(dtype, dvalue) VALUES('housing','{"capacity": "1b0b", "price": "1400", "location": "1156 High St Santa Cruz CA", "sellerinfo": "Braum@ucsc.edu"}');
-- INSERT INTO dummy(dtype, dvalue) VALUES('housing','{"capacity": "4b4b", "price": "3500", "location": "116 Riverside Dr Binghamton NY", "sellerinfo": "warwick@ucsc.edu"}');

-- INSERT INTO dummy(dtype, dvalue) VALUES('estuff','{"brand": "SONY", "mode": "PS5", "price": "750", "usage":"100", "sellerinfo": "jinx@ucsc.edu"}');
-- INSERT INTO dummy(dtype, dvalue) VALUES('estuff','{"brand": "Apple", "mode": "iphone 13 proMax", "price": "1000", "usage":"80", "sellerinfo": "jayce@ucsc.edu" }');
-- INSERT INTO dummy(dtype, dvalue) VALUES('estuff','{"brand": "Apple", "mode": "iphone 7", "price": "300", "usage":"80", "sellerinfo": "zchu2@ucsc.edu"}');
-- INSERT INTO dummy(dtype, dvalue) VALUES('estuff','{"brand": "Apple", "mode": "Air pod 2", "price": "100", "usage":"60", "sellerinfo": "tony6@ucsc.edu"}');
-- INSERT INTO dummy(dtype, dvalue) VALUES('estuff','{"brand": "Samsung", "mode": "4K TV", "price": "800", "usage":"80", "sellerinfo": "ekko@ucsc.edu"}');

INSERT INTO dummy(dtype, dvalue) VALUES('car','{"userName": "zchu2@ucsc.edu", "productName": "bmw", "URL": "https://karltayloreducation.com/wp-content/uploads/2020/08/mercedes-car-3-4-1.jpg", "Description":"a car", "price": "20000", "Date_Time": "10-2000", "Category": "bmwcar"}');
INSERT INTO dummy(dtype, dvalue) VALUES('car','{"userName": "jli563@ucsc.edu", "productName": "Audi", "URL": "https://cdn.motor1.com/images/mgl/JmVR6/s1/4x3/2019-audi-r8-onlocation.webp", "Description":"a car", "price": "170000",  "Date_Time": "10-2021", "Category": "audicar"}');
INSERT INTO dummy(dtype, dvalue) VALUES('car','{"userName": "stao7@ucsc.edu", "productName": "Toyota", "URL": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/07/931/524/toyota-land-cruiser.jpg?ve=1&tl=1", "Description":"a car", "price": "50000",  "Date_Time": "12-2018", "Category": "toyotacar"}');
INSERT INTO dummy(dtype, dvalue) VALUES('car','{"userName": "tony6", "productName": "Bentley", "URL": "https://s3-prod-europe.autonews.com/s3fs-public/Flying%20Spur%2021%20web.jpg", "Description":"a car", "price": "200000",  "Date_Time": "3-2019", "Category": "bentleycar"}');
INSERT INTO dummy(dtype, dvalue) VALUES('car','{"userName": "jinx@ucsc.edu", "productName": "Dodge", "URL": "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2021/challenger/gallery/desktop/2021-challenger-gallery-exterior1.jpg", "Description":"a car", "price": "60000",  "Date_Time": "4-2017", "Category": "dodgecar"}');

INSERT INTO dummy(dtype, dvalue) VALUES('housing','{"userName": "zchu2@ucsc.edu", "productName": "2b2b", "URL": "https://photos.zillowstatic.com/fp/7c058c48639a0b850835778d927d1354-p_e.jpg", "Description":"an apartment", "price": "20000", "Date_Time": "10-2000", "Category": "apartment"}');
INSERT INTO dummy(dtype, dvalue) VALUES('housing','{"userName": "jli563@ucsc.edu", "productName": "4b2b", "URL": "https://www.cityviewapts.com/uploads/floorplans/images/1336x1336G/80956/Studio_S05_480Sqft.jpg?1564582365", "Description":"an apartment", "price": "170000",  "Date_Time": "10-2021", "Category": "apartment"}');
INSERT INTO dummy(dtype, dvalue) VALUES('housing','{"userName": "stao7@ucsc.edu", "productName": "1b1b", "URL": "https://www.apartmentguide.com/blog/wp-content/uploads/2019/09/Studio_apartment.jpg", "Description":"a studio", "price": "50000",  "Date_Time": "12-2018", "Category": "studio"}');
INSERT INTO dummy(dtype, dvalue) VALUES('housing','{"userName": "tony6", "productName": "1b0b", "URL": "https://na.rdcpix.com/2054490467/8ecb8b5c10a19ccbe1daba7bc38ec77cw-c291298xd-w826_h860_q80.jpg", "Description":"a studio", "price": "200000",  "Date_Time": "3-2019", "Category": "studio"}');
INSERT INTO dummy(dtype, dvalue) VALUES('housing','{"userName": "jinx@ucsc.edu", "productName": "4b4b", "URL": "https://cdn.vox-cdn.com/thumbor/6itLJS9BZ-B5gXPjM1AB_z-ZKVI=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/65890203/iStock_1067331614.7.jpg", "Description":"a house", "price": "60000",  "Date_Time": "4-2017", "Category": "house"}');

INSERT INTO dummy(dtype, dvalue) VALUES('estuff','{"userName": "zchu2@ucsc.edu", "productName": "ps5", "URL": "https://cdn.vox-cdn.com/thumbor/K-yujrt8GZ6ZtW6KrV2Pv6PphgI=/0x0:1024x683/1200x1200/filters:focal(512x342:513x343)/cdn.vox-cdn.com/uploads/chorus_asset/file/22017052/ps5_all_digital.jpg", "Description":"a ps5", "price": "2000", "Date_Time": "10-2000", "Category": "gaming console"}');
INSERT INTO dummy(dtype, dvalue) VALUES('estuff','{"userName": "jli563@ucsc.edu", "productName": "iphone 13 proMax", "URL": "https://cdn.arstechnica.net/wp-content/uploads/2021/09/iPhone-13-Pro-Max-back.jpeg", "Description":"an iphone", "price": "17000",  "Date_Time": "10-2021", "Category": "phone"}');
INSERT INTO dummy(dtype, dvalue) VALUES('estuff','{"userName": "stao7@ucsc.edu", "productName": "iphone 7", "URL": "https://i.guim.co.uk/img/media/bf2bf2248a52b9bb2f022bcdd9f8dd5ee8fa269e/0_0_4080_2448/master/4080.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=9b2f1c5b59d12887c88fc3c8300f2028", "Description":"an iphone", "price": "5000",  "Date_Time": "12-2018", "Category": "phone"}');
INSERT INTO dummy(dtype, dvalue) VALUES('estuff','{"userName": "tony6", "productName": "air pod 2", "URL": "https://www.zdnet.com/a/img/resize/7a6480f2c22fd18958cd91c6ce4318455d7a00f3/2019/04/02/4e6550a0-c2e9-43b6-9366-3f05cb6b53ba/airpods-2019-out-of-case.jpg?width=1200&height=900&fit=crop&auto=webp", "Description":"an airpod", "price": "1000",  "Date_Time": "3-2019", "Category": "earphone"}');
INSERT INTO dummy(dtype, dvalue) VALUES('estuff','{"userName": "jinx@ucsc.edu", "productName": "samsung 4k tv", "URL": "https://www.rollingstone.com/wp-content/uploads/2020/06/TCL-5-Series-TV-e1600372241986.jpg?resize=1800,1200&w=450", "Description":"a tv", "price": "60000",  "Date_Time": "4-2017", "Category": "TV"}');
-- car: 
--      卖家email -> user sql
--     subcat
--     make 
--     year
--     price 
--     color
--     mileage
--     model
--     bodystyle
--     seats
--      local -- mile 数字

-- housing:
--     ?b?b
--     price

-- book:
--      按照book example 
--      title
--      price
--      uuid

--电子产品:
--      model
--      price
--      usage

--user
--  password
--  email
--  uuid
--  


--product
-- userName
-- productName
-- URL
-- Description
-- Price
-- Date_Time
-- Category

-- case sensitive!!!!!!!!
