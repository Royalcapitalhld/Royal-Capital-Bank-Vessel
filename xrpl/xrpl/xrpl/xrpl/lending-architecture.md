# Lending Architecture — XRPL Layer
**Public Codex File**  
**Domain: Credit, Collateral, and Policy State**

## Purpose of the Lending Architecture
The lending architecture describes how **credit relationships** may be represented or coordinated using XRPL as a state and settlement layer.

It is designed to:

- Represent obligations and claims  
- Reflect collateral positions  
- Align with vessel‑separated governance  
- Operate within a compliance‑aware perimeter  

## High‑Level Lending Concepts
Public‑safe concepts:

- **Obligation Representation:** XRPL may reflect balances or positions tied to lending relationships.  
- **Collateral Representation:** Tokenized or ledger‑visible assets may serve as collateral.  
- **Policy State:** Lending flows may be influenced by policy state (e.g., eligibility, status).  
- **Event‑Driven Adjustments:** Oracle signals may trigger state changes (e.g., margin, liquidation events).

## Vessel Roles
- **Bank Vessel:** Defines lending perimeter and high‑level rules.  
- **Treasury Vessel:** Manages reserves, liquidity, and risk exposure (off‑ledger).  
- **Oracle Vessel:** Provides verification and event signals (off‑ledger truth, on‑ledger effects).

## Public‑Safe Scope
This file does **not** describe:

- Specific lending products  
- Interest rate models  
- Risk scoring  
- Liquidation logic  
- Smart contract or hook code  

Those remain private and institutionally governed.
