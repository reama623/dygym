CREATE TABLE gym.t_user (
	seq INTEGER auto_increment NOT NULL PRIMARY KEY,
	user_name varchar(100) NOT NULL,
	user_id varchar(100) NOT NULL,
	group_id varchar(100)NULL,
	trainer_id varchar(100) NULL,
	created_date DATETIME DEFAULT CURRENT_TIMESTAMP NULL,
	updated_date DATETIME DEFAULT CURRENT_TIMESTAMP NULL,
	created_user varchar(100) NULL,
	updated_user varchar(100) NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE gym.t_trainer (
	seq INTEGER auto_increment NOT NULL PRIMARY KEY,
	trainer_name varchar(100) NOT NULL,
	trainer_id varchar(100) NOT NULL,
	group_id varchar(100) NULL,
	created_date DATETIME DEFAULT CURRENT_TIMESTAMP NULL,
	updated_date DATETIME DEFAULT CURRENT_TIMESTAMP NULL,
	created_user varchar(100) NULL,
	updated_user varchar(100) NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE gym.t_group (
	seq INTEGER auto_increment NOT NULL PRIMARY KEY,
	name varchar(100) NOT NULL,
	created_date DATETIME DEFAULT CURRENT_TIMESTAMP NULL,
	updated_date DATETIME DEFAULT CURRENT_TIMESTAMP NULL,
	created_user varchar(100) NULL,
	updated_user varchar(100) NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE gym.t_category (
	seq INTEGER auto_increment NOT NULL PRIMARY KEY,
	title varchar(100) NOT NULL,
	`desc` text NULL,
	group_id varchar(100) NOT NULL,
	trainer_id varchar(100) NOT NULL,
	created_date DATETIME DEFAULT CURRENT_TIMESTAMP NULL,
	updated_date DATETIME DEFAULT CURRENT_TIMESTAMP NULL,
	created_user varchar(100) NULL,
	updated_user varchar(100) NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE gym.t_exercise (
	seq INTEGER auto_increment NOT NULL PRIMARY KEY,
	title varchar(100) NOT NULL,
	`desc` text NULL,
	user_id varchar(100) NOT NULL,
	group_id varchar(100) NULL,
	trainer_id varchar(100) NULL,
	created_date DATETIME DEFAULT CURRENT_TIMESTAMP NULL,
	updated_date DATETIME DEFAULT CURRENT_TIMESTAMP NULL,
	created_user varchar(100) NULL,
	updated_user varchar(100) NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE `t_today_exercises` (
	`seq` INTEGER NOT NULL AUTO_INCREMENT,
	`trainer_id` varchar(100) DEFAULT NULL,
	`group_id` varchar(100) DEFAULT NULL,
	`exercises` text,
	`created_date` datetime DEFAULT CURRENT_TIMESTAMP,
	`updated_date` datetime DEFAULT CURRENT_TIMESTAMP,
	`created_user` varchar(100) DEFAULT NULL,
	`updated_user` varchar(100) DEFAULT NULL,
	`user_id` varchar(100) DEFAULT NULL,
	PRIMARY KEY (`seq`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;