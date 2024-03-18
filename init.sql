DROP TABLE users;
DROP TABLE authorities;
DROP TABLE confirmation_tokens;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    wallet_address VARCHAR(42) DEFAULT NULL,
    password VARCHAR(64) DEFAULT NULL,
    enabled BOOLEAN NOT NULL,
    created BIGINT NOT NULL,
    last_seen BIGINT DEFAULT NULL,
    image VARCHAR(30) DEFAULT 'jazzicon',
    image_color VARCHAR(7) DEFAULT '#ffffff',
    type VARCHAR(8) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS authorities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    user_id INT,
    CONSTRAINT fk_user_authorities FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE IF NOT EXISTS confirmation_tokens (
    id SERIAL PRIMARY KEY,
    token VARCHAR(64) NOT NULL,
    created BIGINT NOT NULL,
    expires BIGINT NOT NULL,
    user_id INT,
    CONSTRAINT fk_user_tokens FOREIGN KEY (user_id) REFERENCES users (id)
);

INSERT INTO users(email, wallet_address, password, enabled, created, last_seen)
VALUES('marchel0925.dev@gmail.com', NULL, '$2y$10$sAY4b98Z4bkcb8g5Cu3wpu7cTsI2wDvteDdkVuxaW/yD10N2GLCBq', true, 1689440422557, NULL);

INSERT INTO authorities (name, user_id)
VALUES('ROLE_ADMIN', 1);
