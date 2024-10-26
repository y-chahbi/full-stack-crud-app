-- Create 'users' database if it does not exist
CREATE DATABASE IF NOT EXISTS users_db;

-- Switch to 'users_db' database
USE users_db;

-- Create or alter 'users' table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    -- Add 2fa column as boolean (TINYINT(1) in MySQL to represent true/false)
    two_factor_auth TINYINT(1) DEFAULT 0 -- 0 means false, 1 means true
);

-- Create 'files' database if it does not exist
CREATE DATABASE IF NOT EXISTS files_db;

-- Switch to 'files_db' database
USE files_db;

-- Create 'files' table and link it to 'users' table in 'users_db'
CREATE TABLE IF NOT EXISTS files (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    extension VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    -- Foreign key to reference 'id' in 'users' table in 'users_db'
    user_id INT,
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users_db.users(id) ON DELETE CASCADE
);
