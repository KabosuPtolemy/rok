DROP TABLE confirmation_tokens;

CREATE TABLE IF NOT EXISTS confirmation_tokens (
    id SERIAL PRIMARY KEY,
    token VARCHAR(64) NOT NULL,
    created BIGINT NOT NULL,
    expires BIGINT NOT NULL,
    user_id INT,
    CONSTRAINT fk_user_tokens FOREIGN KEY (user_id) REFERENCES users (id)
);