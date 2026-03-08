# Recycle Software

リサイクル材料の仕入/販売を管理するクライアントサイドWebアプリです。

## 主な機能
- 8文字の顧客ID自動生成。
- 最大15行の明細入力と自動計算。
- 顧客検索・既存データ編集。
- A4 2枚控え印刷 + 古物履歴印刷。
- 売上タブで `領収書 DAISO G-92 No.2670` 印刷。
- 多言語UI（PT/ES/EN/JA/VI/UR/ZH/SI）。
- サマリー/グラフ表示とCSV出力。

## 静的実行
```bash
python3 -m http.server 4173
```
`http://localhost:4173` を開いてください。

## Streamlit 実行
```bash
pip install -r requirements.txt
streamlit run streamlit_app.py
```
Streamlit Cloud の Main file path は `streamlit_app.py` です。
