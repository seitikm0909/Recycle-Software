from pathlib import Path

import streamlit as st


st.set_page_config(page_title="Recycle Software", layout="wide")

ROOT = Path(__file__).parent
INDEX_FILE = ROOT / "index.html"
STYLE_FILE = ROOT / "styles.css"
SCRIPT_FILE = ROOT / "app.js"
MODAL_SCRIPT_FILE = ROOT / "js/modals.js"
PRINT_SCRIPT_FILE = ROOT / "js/print.js"
CLIENTS_SCRIPT_FILE = ROOT / "js/clients.js"


def load_frontend() -> str:
    """Build a single HTML document compatible with Streamlit iframe rendering."""
    html = INDEX_FILE.read_text(encoding="utf-8")
    css = STYLE_FILE.read_text(encoding="utf-8")
    modal_js = MODAL_SCRIPT_FILE.read_text(encoding="utf-8")
    print_js = PRINT_SCRIPT_FILE.read_text(encoding="utf-8")
    clients_js = CLIENTS_SCRIPT_FILE.read_text(encoding="utf-8")
    js = SCRIPT_FILE.read_text(encoding="utf-8")

    html = html.replace('<link rel="stylesheet" href="styles.css" />', f"<style>{css}</style>")
    html = html.replace('<script src="js/modals.js"></script>', f"<script>{modal_js}</script>")
    html = html.replace('<script src="js/print.js"></script>', f"<script>{print_js}</script>")
    html = html.replace('<script src="js/clients.js"></script>', f"<script>{clients_js}</script>")
    html = html.replace('<script src="app.js"></script>', f"<script>{js}</script>")
    return html


st.title("♻️ Recycle Software")
st.caption("Versão Streamlit (cliente local com HTML/CSS/JS embutidos)")

with st.expander("Como usar no Streamlit Cloud", expanded=True):
    st.markdown(
        """
1. No **Main file path**, use exatamente: `streamlit_app.py`
2. No arquivo `requirements.txt`, mantenha `streamlit`.
3. Clique em **Deploy**.
        """.strip()
    )

render_height = st.slider("Altura da aplicação", min_value=700, max_value=2000, value=1300, step=50)

st.components.v1.html(load_frontend(), height=render_height, scrolling=True)
