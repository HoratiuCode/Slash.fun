[简体中文](./README_CN.md)

# Slash.fun Smart Contracts

Slash.fun is a Foundry-based smart contract system for launching and trading bonding-curve tokens on Monad.

## What This Repository Contains

- `src/`: Core protocol contracts
- `test/`: Foundry test suite
- `web/`: Optional React + Vite frontend
- `lib/`: External dependencies (forge-std, OpenZeppelin, v2-core)

## Core Contracts

- `GNad.sol`: Main entry point for token creation and trading
- `BondingCurve.sol`: Reserve accounting and buy/sell math
- `BondingCurveFactory.sol`: Deploys and tracks bonding curves
- `Token.sol`: ERC20 token with permit support
- `WMon.sol`: Wrapped Monad token
- `FeeVault.sol`: Fee collection and multisig withdrawals

## High-Level Flow

1. A creator calls `createBc` to launch a token + bonding curve.
2. Traders buy/sell through `GNad` (`buy`, `sell`, protected/exact-out variants).
3. The curve tracks real + virtual reserves for pricing.
4. Fees accumulate in `FeeVault`.
5. Once curve conditions are met, liquidity can be listed to a DEX pair.

## Key Features

- Bonding-curve price discovery
- Slippage-protected trading (`protectBuy`, `protectSell`)
- Permit-enabled UX (EIP-2612 paths)
- Modular factory + curve architecture
- Foundry test coverage across core contracts

## Prerequisites

- [Foundry](https://book.getfoundry.sh/getting-started/installation)
- `git` with submodule support
- Optional (for frontend): Node.js 18+ and npm

## Setup

```bash
git clone <repo-url>
cd Slash.fun
git submodule update --init --recursive
```

## Build

```bash
forge build
```

## Test

```bash
# run all tests
forge test

# verbose output
forge test -vvv

# gas report
forge test --gas-report

# single test file
forge test --match-path test/WMon.t.sol

# single test function
forge test --match-test test_Deposit
```

Additional test notes are in [test/README.md](test/README.md).

## Frontend (Optional)

The `web/` directory contains a lightweight React/Vite interface.

```bash
cd web
npm install
npm run dev
```

Other scripts:

```bash
npm run build
npm run preview
```

## Project Layout

```text
src/
  BondingCurve.sol
  BondingCurveFactory.sol
  FeeVault.sol
  GNad.sol
  Token.sol
  WMon.sol
  errors/
  interfaces/
  lib/
test/
web/
```

## Security Notes

- Protocol operations move value; review contract logic before deployment.
- Use slippage-protected functions in integrations where possible.
- Validate fee and reserve parameters before launching markets.

## License

MIT. See [LICENSE](./LICENSE).
