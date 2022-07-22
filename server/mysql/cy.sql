set names utf8;
drop database if exists cy;
create database cy charset=utf8;
use cy;
/*食品型号家族*/
CREATE TABLE food_laptop_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);
/**食品信息**/
CREATE TABLE food_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,              #家族编号
  title VARCHAR(128),         #主标题
  subtitle VARCHAR(128),      #副标题
  price DECIMAL(10,2),        #价格
  lname VARCHAR(32),         #商品名称
  img VARCHAR(128)            #图片路径
);
/**用户信息**/
CREATE TABLE food_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32) default null Unique Key,
  upwd VARCHAR(32) NOT NULL ,
  email VARCHAR(64) NOT NULL,
  phone VARCHAR(16) NOT NULL,

  avatar VARCHAR(128),#头像图片路径
  user_name VARCHAR(32) Unique Key,#用户名，如王小明
  gender INT                       #性别  0-女  1-男
);
/**购物车条目**/
CREATE TABLE food_shoppingcart_item(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  limg VARCHAR(128), #商品图片
  subtitle VARCHAR(128), #商品副标题
  user_id INT,      #用户编号
  product_id INT,   #商品编号
  title VARCHAR(128),         #主标题
  price DECIMAL(10,2),        #价格
  count INT,        #购买数量
  is_checked BOOLEAN #是否已勾选，确定购买
);
/****首页轮播广告商品****/
CREATE TABLE food_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT,   #商品编号
  img VARCHAR(128)
);
/****首页商品****/
CREATE TABLE food_index_laptop(
  flid INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT,   #商品编号
  family_id INT,              #家族编号
  title VARCHAR(128),         #主标题
  subtitle VARCHAR(128),      #副标题
  lname VARCHAR(32),           #商品名称
  img VARCHAR(128)            #图片路径
);

/**活动**/
CREATE TABLE food_activity_laptop(
  alid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128),         #主标题
  subtitle VARCHAR(128),      #副标题
  aname VARCHAR(32),           #活动名称
  img VARCHAR(128),            #图片路径
  atime int                   #活动类型
);
/*数据插入*/

/*食品型号家族*/
INSERT INTO food_laptop_family VALUES
(null,'披萨'),
(null,'奶昔'),
(null,'海鲜'),
(null,'下饭菜'),
(null,'肉'),
(null,'素');

/*食品详情*/
INSERT INTO food_laptop VALUES
(1,1,"水果披萨","草莓,蓝莓等水果,多种类型的披萨",29.99,"披萨","http://127.0.0.1:3030/img/a71990edfcb3fb99af6af4af3bbfb689.jpg"),
(2,2,"水果奶昔","草莓,蓝莓等水果,多种口味的奶昔",12,"奶昔","http://127.0.0.1:3030/img/be32890d0771b79259e9cfb76c61bf5b.jpg"),
(3,3,"海鲜粉丝汤","扇贝,象拔蚌等多种海鲜",9.9,"海鲜","http://127.0.0.1:3030/img/index_hot_food_img1.png"),
(4,4,"咸菜1","咸菜,榨菜,酸萝卜,酸菜等菜品",5.9,"下饭菜","http://127.0.0.1:3030/img/index_hot_food_img2.png"),
(5,4,"咸菜2","咸菜,榨菜,酸萝卜,酸菜等菜品",5.9,"下饭菜","http://127.0.0.1:3030/img/index_hot_food_img3.png"),
(6,5,"糖醋排骨","新鲜猪肉现做",39.9,"猪肉制品","http://127.0.0.1:3030/img/index_Sbanner_img3.png"),
(7,5,"黑椒牛排","新鲜牛肉现做",59.9,"牛肉制品","http://127.0.0.1:3030/img/meat-g40491505c_1920.jpg"),
(8,6,"长沙臭豆腐","新鲜臭豆腐现做",12.9,"豆腐制品","http://127.0.0.1:3030/img/v2-c191864f30cd48cb36988ea60b455c56_r.jpg");

/*用户信息*/
INSERT INTO food_user VALUES
(null,'yuwenxiaoshi','az112233','123456@qq.com','13566667777','http://127.0.0.1:3030/img/left.png','余温消逝',1);
/*购物车条目信息*/
INSERT INTO food_shoppingcart_item VALUES
(null,"http://127.0.0.1:3030/img/a71990edfcb3fb99af6af4af3bbfb689.jpg","草莓,蓝莓等水果,多种类型的披萨",1,1,"水果披萨",29.99,1,0);

/****首页轮播广告商品****/
INSERT INTO  food_index_carousel VALUES
(null,2,"http://127.0.0.1:3030/img/be32890d0771b79259e9cfb76c61bf5b.jpg"),
(null,7,"http://127.0.0.1:3030/img/meat-g40491505c_1920.jpg"),
(null,8,"http://127.0.0.1:3030/img/v2-c191864f30cd48cb36988ea60b455c56_r.jpg"),
(null,1,"http://127.0.0.1:3030/img/a71990edfcb3fb99af6af4af3bbfb689.jpg");

/*首页商品*/
INSERT INTO  food_index_laptop VALUES
(1,3,3,"海鲜粉丝汤","扇贝,象拔蚌等多种海鲜","海鲜","http://127.0.0.1:3030/img/index_hot_food_img1.png"),
(2,4,4,"咸菜1","咸菜,榨菜,酸萝卜,酸菜等菜品","下饭菜","http://127.0.0.1:3030/img/index_hot_food_img2.png"),
(3,5,4,"咸菜2","咸菜,榨菜,酸萝卜,酸菜等菜品","下饭菜","http://127.0.0.1:3030/img/index_hot_food_img3.png"),
(4,6,5,"糖醋排骨","新鲜猪肉现做","猪肉制品","http://127.0.0.1:3030/img/index_Sbanner_img3.png");

/*活动*/
INSERT INTO food_activity_laptop VALUES
(null,"新用户充值八折起步","充80得100,以此类推","开业大酬宾","http://127.0.0.1:3030/img/left.png",1),
(null,"会员卡打85折","会员卡消费100以上打85折","会员尊享","http://127.0.0.1:3030/img/left.png",2),
(null,"免费试吃活动","中午12-13点免费试吃,限时3天","试吃活动","http://127.0.0.1:3030/img/left.png",3);