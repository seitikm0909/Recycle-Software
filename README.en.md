# Recycle Software

Client-side web application to manage recyclable material purchases/sales.

## Features
- Purchase/sale registration with automatic 8-character client IDs.
- Up to 15 item rows with auto-calculation.
- Client search and edit by record.
- A4 receipt printing (2 copies) + Kobutsu history print.
- DAISO-style Japanese receipt option (`領収書 DAISO G-92 No.2670`) for sales.
- Multi-language UI (PT/ES/EN/JA/VI/UR/ZH/SI).
- Summary dashboards and exports (CSV/Excel-compatible).

## Run (static)
```bash
python3 -m http.server 4173
```
Open `http://localhost:4173`.

## Run with Streamlit
```bash
pip install -r requirements.txt
streamlit run streamlit_app.py
```
Streamlit Cloud main file path: `streamlit_app.py`.
