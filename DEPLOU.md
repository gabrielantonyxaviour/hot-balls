## Setup

1. Install rust
   `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`

2. (apple silicon only) install rosetta 2
   `softwareupdate --install-rosetta --agree-to-license`

## Run Validators

### Arbitrum Sepolia

1. Open new terminal from root
2. Move to rust folder using
   `cd hyperlane-monorepo/rust`
3. Add your private key using
   `export HYP_KEY=<your_priv_key>`
4. Run Validator using
   `export CONFIG_FILES=./agent-config.json && export VALIDATOR_SIGNATURES_DIR=./tmp/hyperlane-validator-signatures-arbitrumsepolia && mkdir -p $VALIDATOR_SIGNATURES_DIR && cargo build --release --bin validator && ./target/release/validator --db ./hyperlane_db_validator_arbitrumsepolia --originChainName arbitrumsepolia --checkpointSyncer.type localStorage --checkpointSyncer.path $VALIDATOR_SIGNATURES_DIR --validator.key $HYP_KEY`

### Fhenix Helium

1. Open new terminal from root
2. Move to rust folder using
   `cd hyperlane-monorepo/rust`
3. Add your private key using
   `export HYP_KEY=<your_priv_key>`
4. Run Validator using
   `export CONFIG_FILES=./agent-config.json && export VALIDATOR_SIGNATURES_DIR=./tmp/hyperlane-validator-signatures-fhenixtestnet && mkdir -p $VALIDATOR_SIGNATURES_DIR && cargo build --release --bin validator && ./target/release/validator --db ./hyperlane_db_validator_fhenixtestnet --originChainName fhenixtestnet --checkpointSyncer.type localStorage --checkpointSyncer.path $VALIDATOR_SIGNATURES_DIR --validator.key $HYP_KEY`

### Chiliz Spicy

1. Open new terminal from root
2. Move to rust folder using
   `cd hyperlane-monorepo/rust`
3. Add your private key using
   `export HYP_KEY=<your_priv_key>`
4. Run Validator using
   `export CONFIG_FILES=./agent-config.json && export VALIDATOR_SIGNATURES_DIR=./tmp/hyperlane-validator-signatures-chilizspicy && mkdir -p $VALIDATOR_SIGNATURES_DIR && cargo build --release --bin validator && ./target/release/validator --db ./hyperlane_db_validator_chilizspicy --originChainName chilizspicy --checkpointSyncer.type localStorage --checkpointSyncer.path $VALIDATOR_SIGNATURES_DIR --validator.key $HYP_KEY`

## Run Relayer

1. Open new terminal from root
2. Move to rust folder using
   `cd hyperlane-monorepo/rust`
3. Add your private key using
   `export HYP_KEY=<your_priv_key>`
4. Run Validator using
   `export CONFIG_FILES=./agent-config.json && ./target/release/relayer --db ./hyperlane_db_relayer --relayChains arbitrumsepolia,chilizspicy,fhenixtestnet --allowLocalCheckpointSyncers true --defaultSigner.key $HYP_KEY --metrics-port 9091`
