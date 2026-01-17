# Lending Architecture — XRPL Layer
**Public Codex File**

## Purpose
The lending architecture describes how XRPL may represent:

- Obligations  
- Collateral positions  
- Credit relationships  
- Event‑driven adjustments  

## High‑Level Concepts
- **Obligation Representation:** Balances may reflect lending positions  
- **Collateral Representation:** Tokenized assets may serve as collateral  
- **Policy State:** Lending flows may reflect eligibility or status  
- **Oracle Signals:** Events may trigger state changes  

## Vessel Roles
- **Bank Vessel:** Defines lending perimeter  
- **Treasury Vessel:** Manages reserves and exposure (off‑ledger)  
- **Oracle Vessel:** Provides verification and event signals  

## Public‑Safe Scope
No interest models, liquidation logic, or risk scoring are included.
