CREATE TABLE IF NOT EXISTS chains (
    chain_id INT NOT NULL PRIMARY KEY,
    name VARCHAR(70) NOT NULL DEFAULT 'Sepolia',
    currency VARCHAR(5) NOT NULL DEFAULT 'ETH',
    image_url VARCHAR(200) DEFAULT NULL
);

INSERT INTO chains (chain_id, name, currency, image_url)
VALUES(11155111, 'Sepolia', 'ETH', null);