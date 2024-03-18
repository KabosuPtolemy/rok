DROP TABLE projects;
DROP TABLE subscribers;
DROP TABLE images;
DROP TABLE chains;

CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(150),
    chain_id INTEGER NOT NULL,
    contract_url VARCHAR(200) DEFAULT NULL,
    created TIMESTAMP DEFAULT NOW(),
    changed TIMESTAMP DEFAULT NULL,
    end_date TIMESTAMP,
    price NUMERIC,
    goal INT DEFAULT 50,
    kyc BOOLEAN DEFAULT FALSE,
    published BOOLEAN DEFAULT FALSE,
    owner_address VARCHAR(42),
    discord_url VARCHAR(200) DEFAULT NULL,
    opensea_url VARCHAR(200) DEFAULT NULL,
    twitter_url VARCHAR(200) DEFAULT NULL,
    website_url VARCHAR(200) DEFAULT NULL,
    CONSTRAINT fk_chain_project FOREIGN KEY (chain_id) REFERENCES chains (chain_id)
);

CREATE TABLE IF NOT EXISTS subscribers (
    id SERIAL PRIMARY KEY,
    address VARCHAR(42),
    project_id INT NOT NULL,
    CONSTRAINT fk_project_subscribers FOREIGN KEY (project_id) REFERENCES projects (id)
);

CREATE TABLE IF NOT EXISTS images (
    id SERIAL PRIMARY KEY,
    full_url VARCHAR(200),
    teaser_url VARCHAR(200),
    project_id INT NOT NULL,
    CONSTRAINT fk_project_images FOREIGN KEY (project_id) REFERENCES projects (id)
);

CREATE TABLE IF NOT EXISTS chains (
    chain_id INT NOT NULL PRIMARY KEY,
    name VARCHAR(70) NOT NULL DEFAULT 'Sepolia',
    currency VARCHAR(5) NOT NULL DEFAULT 'ETH',
    image_url VARCHAR(200) DEFAULT NULL
);

INSERT INTO projects(
    name,
    description,
    chain_id,
    contract_url,
    created,
    end_date,
    price,
    goal,
    kyc,
    published,
    owner_address,
    discord_url,
    opensea_url,
    twitter_url,
    website_url
) VALUES (
    'TROGG',
    'The Troggs welcome you in their newfound magical cave!',
    11155111,
    null,
    NOW(),
    '2024-01-01',
    0.04,
    50,
    false,
    false,
    'some_address_1',
    'https://discord.com/invite/trogg',
    'https://hyperspace.xyz/collection/trogg',
    'https://twitter.com/troggnft',
    'https://tro.gg/'
);

INSERT INTO projects(
    name,
    description,
    chain_id,
    contract_url,
    created,
    end_date,
    price,
    goal,
    kyc,
    published,
    owner_address,
    discord_url,
    opensea_url,
    twitter_url,
    website_url
) VALUES(
    'Encryptas',
    '10,000 Faceless Coder Chicks saving the world through code & flowers!',
    11155111,
    null,
    NOW(),
    '2024-01-01',
    0.02,
    50,
    false,
    true,
    'some_address_0',
    'https://discord.com/invite/vTswEfkPdJ',
    'https://opensea.io/collection/encryptas-1',
    'https://twitter.com/cypherchk',
    'https://www.cypherchk.com/'
);

INSERT INTO projects(
    name,
    description,
    chain_id,
    contract_url,
    created,
    end_date,
    price,
    goal,
    kyc,
    published,
    owner_address,
    discord_url,
    opensea_url,
    twitter_url,
    website_url
) VALUES(
    'Phunk APE Origins',
    'Phunk Ape Origins pays homage to the CryptoPhunk culture as well as to the Great Apes.',
    11155111,
    'https://sepolia.etherscan.io/address/0xB04D78aC3850E9458eC8A9e90f48AA84a82d5f4b',
    NOW(),
    '2024-01-01',
    0.01,
    500,
    false,
    true,
    'some_address_1',
    'https://discord.com/invite/WNtZURFPTc',
    'https://opensea.io/collection/phunk-ape-origins',
    'https://twitter.com/PhunkAPEorigins',
    'https://app.indelible.xyz/mint/0x9b66d03fc1eee61a512341058e95f1a68dc3a913'
);

INSERT INTO projects(
    name,
    description,
    chain_id,
    contract_url,
    created,
    end_date,
    price,
    goal,
    kyc,
    published,
    owner_address,
    discord_url,
    opensea_url,
    twitter_url,
    website_url
) VALUES(
    'Crypto Homeless Degen',
    'A collection of 23K unique Crypto Homeless Degens.',
    11155111,
    null,
    NOW(),
    '2024-01-01',
    0.03,
    50,
    false,
    true,
    'some_address_0',
    null,
    'https://opensea.io/collection/cryptohomelessdegens',
    'https://twitter.com/CryptoHomelessN',
    'http://www.cryptohomeless.art/'
);

INSERT INTO chains (chain_id, name, currency, image_url)
VALUES(11155111, 'Sepolia', 'ETH', null);