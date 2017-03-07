-------------------------------
-------系统初始化相关脚本--------

create database `vue_demo` DEFAULT CHARACTER SET utf8mb4 ;

-- --------------------------------------------
-- Table structure for `book` 书籍表
-- -------------------------------------------
DROP TABLE IF EXISTS `vue_demo`.`book`;
CREATE TABLE `vue_demo`.`book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL COMMENT '书名',
  `intro` varchar(2000) NOT NULL COMMENT '简介',
  `author` varchar(50) NOT NULL COMMENT '作者',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 初始化几条数据
INSERT INTO `vue_demo`.`book`( `name`,`intro`,`author`) VALUES ('西游记','西游记》是吴承恩所著，是中国古典之一，是一部优秀的，也是一部规模宏伟、结构完整、用幻想形式来反映社会矛盾的精品巨著。小说以整整七回的“大闹天宫”故事开始，把孙悟空的形象提到全书首要的地位。第八至十二回写如来说法，观音访僧，魏征斩龙，唐僧出世等故事，交待取经的缘起。从十三回到全书结束,讲述了五百年后，观音向孙出自救的方法：他须随唐三藏到西方取经，作其徒弟，修成正果之日便得救。孙悟空遂紧随唐三藏上路，途中屡遇妖魔鬼怪，二人与猪八戒、沙僧等合力对付，展开一段艰辛的取西经之旅。作品写于明朝中期，当时社会经济虽繁荣，但政治日渐败坏，百姓生活困苦。作者对此不合理的现象，通过故事提出批评。此作品共一百回，六十万余字。分回标目，每一回目以整齐对偶展现。故事叙述唐三藏与徒弟孙悟空、猪八戒、沙僧、白龙马经过九九八十一次磨难，到西天取经的过程。','吴承恩');
INSERT INTO `vue_demo`.`book`( `name`,`intro`,`author`) VALUES ('红楼梦','《红楼梦》一书 ，以贾、史、王、薛四大家族的兴衰为背景，塑造了上至皇室贵胄，下至贩夫走卒等各色人物，深刻的反映了当时的社会现实。通过男女主人公贾宝玉和林黛玉的爱情悲剧，来揭示封建家族灭亡的必然性。','曹雪芹');

-- --------------------------------------------
-- Table structure for `fruit` 水果表
-- -------------------------------------------
DROP TABLE IF EXISTS `vue_demo`.`fruit`;
CREATE TABLE `vue_demo`.`fruit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL COMMENT '水果名称',
  `englishname` varchar(30) NOT NULL COMMENT '英文名称',
  `effect` varchar(2000) NOT NULL COMMENT '功效',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 初始化几条数据
INSERT INTO `vue_demo`.`fruit`( `name`,`englishname`,`effect`) VALUES ('苹果','apple','生津止渴、清热除烦、健胃消食');
INSERT INTO `vue_demo`.`fruit`( `name`,`englishname`,`effect`) VALUES ('梨子','pear','生津止渴，润燥化痰');
INSERT INTO `vue_demo`.`fruit`( `name`,`englishname`,`effect`) VALUES ('香蕉','banana','清肠胃，治便秘，并有清热润肺、止烦渴、填精髓、解酒毒等');
INSERT INTO `vue_demo`.`fruit`( `name`,`englishname`,`effect`) VALUES ('桃子','peach','有补益、补心、生津、解渴、消积、润肠、解劳热之功效');
INSERT INTO `vue_demo`.`fruit`( `name`,`englishname`,`effect`) VALUES ('西瓜','watermelon','具有清热解暑、生津止渴、利尿除烦的功效');
INSERT INTO `vue_demo`.`fruit`( `name`,`englishname`,`effect`) VALUES ('荔枝','litchi','具有补脾益肝、理气补血、温中止痛、补心安神的功效');