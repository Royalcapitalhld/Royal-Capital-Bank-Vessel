# XRPL Issuance Model — Royal Capital Bank Vessel
**Public Codex File**  
**Layer: XRPL (Issuance & Compliance Perimeter)**

## Role of XRPL in the Royal Capital Architecture
The XRPL layer serves as the **primary issuance and compliance perimeter** for Royal Capital instruments.

It is the ledger where:

- Issued units are represented  
- Compliance‑aware flows are enforced  
- Vessel‑separated logic is anchored  
- Public‑facing state is visible  

## Issuance Principles
The Bank Vessel, operating from the Wyoming jurisdiction, declares:

- What may be issued  
- Under what conditions  
- Within which compliance perimeter  

On XRPL, this translates into:

- **Issued tokens** representing claims, rights, or positions  
- **Controlled minting and burning** via defined operational channels  
- **Compliance‑aware flows** aligned with the Bank Vessel mandate  

## Vessel Separation on XRPL
On XRPL:

- **Bank Vessel** — defines issuance rules and compliance perimeter  
- **Treasury Vessel** — holds reserves and manages liquidity (off‑ledger logic, on‑ledger representation)  
- **Oracle Vessel** — provides verification signals and parametric triggers (off‑ledger truth, on‑ledger effects)  

No vessel crosses into the authority of another.

## Public‑Safe View
This document describes only:

- High‑level issuance concepts  
- Vessel roles  
- Public‑visible architecture  

Internal logic, hooks, and operational procedures remain sealed in the private repository.
