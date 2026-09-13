# Nazoratchi — Savdo nuqtalarini nazorat qilish paneli (Maket)

Do'kon va filiallarni, ularning kameralarini bitta joyda ko'rish va nazorat qilish uchun admin panel maketi. "Ledger / daftar" uslubida — issiq qog'oz foni, muhr (stamp) uslubidagi holat belgilari.

## Tarkibi
- `index.html` — kirish (login) sahifasi
- `companies.html` — kompaniyalar ro'yxati (qidiruv, filtr, sahifalash)
- `company.html?id=...` — tanlangan kompaniyaning jonli kameralar ko'rinishi
- `assets/style.css` — umumiy uslub ("ledger" issiq qog'oz temasi)
- `assets/data.js` — namunaviy (mock) ma'lumotlar

## Lokal ko'rish
```bash
npx serve .
# yoki
python3 -m http.server 8000
```
Brauzerda `http://localhost:8000` ni oching.

## GitHub'ga yuklash
```bash
cd nazoratchi
git init
git add .
git commit -m "Nazoratchi admin panel maketi"
git branch -M main
git remote add origin https://github.com/<username>/<repo-nomi>.git
git push -u origin main
```

## Keyingi qadam — haqiqiy tizim
Bu faqat vizual maket. Haqiqiy loyihada kerak bo'ladi:
- Backend va ma'lumotlar bazasi
- Autentifikatsiya (parol faqat serverda hash qilingan holda saqlanadi)
- Kameralarni ulash uchun WebRTC/RTSP → HLS oqim serveri
- Real vaqtda holatni yangilash uchun WebSocket
