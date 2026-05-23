# OTP Instan — Cek Saldo

Web app untuk cek saldo reseller OTP Instan. Deploy ke Vercel dalam 1 menit.

## Struktur

```
otp-balance/
├── api/
│   └── balance.js      ← Serverless function (proxy ke otpinstan.com)
├── public/
│   └── index.html      ← Halaman utama
├── vercel.json
└── package.json
```

## Deploy ke Vercel

### Cara 1 — Via Vercel CLI

```bash
npm i -g vercel
cd otp-balance
vercel
```

Ikuti promptnya, selesai! Vercel akan kasih URL seperti `https://otp-balance-xxx.vercel.app`.

### Cara 2 — Via GitHub + Vercel Dashboard

1. Push folder ini ke repo GitHub kamu
2. Buka [vercel.com](https://vercel.com) → **Add New Project**
3. Import repo GitHub-nya
4. Klik **Deploy** — selesai!

### Cara 3 — Drag & Drop

1. Buka [vercel.com/new](https://vercel.com/new)
2. Drag & drop folder `otp-balance` ke halaman tersebut
3. Deploy otomatis!

## Cara Pakai

1. Buka URL web yang sudah di-deploy
2. Masukkan API key kamu (format: `otpk_xxxx`)
3. Klik **Cek Saldo** atau tekan Enter
4. Saldo tampil dalam Rupiah

## Fitur

- ✅ Proxy serverless (API key tidak expose ke browser)
- ✅ Animasi hitung saldo
- ✅ Warning saldo rendah (< Rp 10.000)
- ✅ Tampilkan/sembunyikan API key
- ✅ Timestamp last update
- ✅ Responsive mobile

## Dev Lokal

```bash
npm i -g vercel
vercel dev
# Buka http://localhost:3000
```
