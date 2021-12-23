CREATE TABLE dygym.category (
	num INTEGER auto_increment NULL PRIMARY KEY,
	name varchar(100) NULL,
	description varchar(100) NULL,
	createdAt DATETIME NULL,
	updatedAt DATETIME NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_bin;


CREATE TABLE dygym.exercise (
	num INTEGER auto_increment NULL PRIMARY KEY,
	name varchar(100) NULL,
	description varchar(100) NULL,
	createdAt DATETIME NULL,
	updatedAt DATETIME NULL,
	category_id INTEGER NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_bin;

CREATE TABLE dygym.users (
	num INTEGER auto_increment NULL PRIMARY KEY,
	name varchar(100) NULL,
	description varchar(100) NULL,
	createdAt DATETIME NULL,
	updatedAt DATETIME NULL,
	category_id INTEGER NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_bin;

CREATE TABLE dygym.t_today_exercises (
	id INTEGER auto_increment NOT NULL PRIMARY KEY,
	trainer_id INTEGER NULL,
	group_id INTEGER NULL,
	exercises TEXT NULL,
	created_date DATETIME DEFAULT now() NULL,
	updated_date DATETIME DEFAULT now() NULL,
	created_trainer_id INTEGER NULL,
	updated_trainer_id INTEGER NULL
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;