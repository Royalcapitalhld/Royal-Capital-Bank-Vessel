# XRPL Architecture Overview — Royal Capital Bank Vessel
**Public Codex File**  
**Domain: Issuance • Compliance • Representation**

## Purpose of the XRPL Layer
The XRPL layer serves as the **primary issuance and compliance perimeter** for Royal Capital instruments.  
It provides:

- Public visibility  
- Deterministic settlement  
- Compliance‑aware flows  
- Vessel‑aligned architecture  

## Core Architectural Principles
- **Deterministic Ledger:** XRPL provides fast, final settlement.  
- **Issuer‑Anchored Model:** The Bank Vessel declares and maintains issued instruments.  
- **Compliance Perimeter:** Transfers may be subject to eligibility and policy state.  
- **Vessel Separation:** Bank, Treasury, and Oracle vessels remain sovereign in their domains.  

## Ledger Roles
- **XRPL:** Issuance + compliance perimeter  
- **Stellar:** Liquidity + distribution (separate file)  
- **Oracle Layer:** Verification + truth signals  
- **Off‑Ledger Structures:** Legal, custodial, and institutional frameworks  

## Public‑Safe Scope
This file contains only high‑level architecture.  
Internal logic remains sealed in the private repository.
