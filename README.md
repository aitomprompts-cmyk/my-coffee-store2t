# ☕ my-coffee-store2t — สั่งกาแฟผ่านมือถือที่โต๊ะ

**ผู้จัดทำ:** ธนาวรรธน์ กิตติศรญเกียรติ

**ADT-RAISE Non-Degree Batch 2 · Module 2: MVP-Ready** (สัปดาห์ที่ 6–9)

ลูกค้าที่นั่งโต๊ะในร้านสั่งเครื่องดื่มผ่านมือถือได้เอง ไม่ต้องต่อคิวหรือเรียกพนักงาน แล้วบาริสต้าเห็นออเดอร์และกดเปลี่ยนสถานะได้

- ส่วนที่เลือกทำใน Module 2 ดู [`SCOPE.md`](SCOPE.md)
- ความต้องการ ดู [`docs/01-requirements/01-spec/self-order.md`](docs/01-requirements/01-spec/self-order.md)
- โครงสร้างข้อมูล Firestore ดู [`docs/02-design/02-technical/data-structure.md`](docs/02-design/02-technical/data-structure.md)

> ข้อมูลทุกชิ้นในฐานข้อมูลตัวอย่างเป็น **ข้อมูลสมมติ** ไม่มีข้อมูลลูกค้าจริง

---

## 📁 ในโฟลเดอร์นี้มีอะไร

```
index.html              หน้าแรก
orders.html             รายการออเดอร์ · อ่านจาก Firestore จริง เรียงใหม่ไปเก่า
css/style.css           หน้าตา
js/firebase-config.js   ค่าเชื่อมต่อ Firebase
js/data.js              ฟังก์ชันอ่านข้อมูลจาก Firestore
js/orders.js            วาดตารางหน้ารายการออเดอร์
js/nav.js · js/util.js  เมนูด้านบน และตัวช่วยเล็ก ๆ
scripts/seed.mjs        สคริปต์ใส่ข้อมูลตัวอย่างลง Firestore
docs/                   เอกสารโครงงาน (Obsidian vault) และภาพหน้า Firebase Console
```

## ▶️ เปิดดูในเครื่อง

```
npm install
npm run dev
```

แล้วเปิด http://localhost:3001

## 🗄️ ตั้งค่า Firestore (ทำครั้งเดียว)

1. เข้า [Firebase Console](https://console.firebase.google.com) → สร้างโปรเจกต์
2. เมนู **Firestore Database** → **Create database** → **Test mode** → ที่ตั้ง `asia-southeast1`
3. ⚙️ **Project settings** → **Your apps** → ไอคอน `</>` → คัดลอกกล่อง `firebaseConfig`
4. วางค่าแทนข้อความ `วางค่า-...-ที่นี่` ในไฟล์ `js/firebase-config.js`
5. ใส่ข้อมูลตัวอย่าง: `npm run seed`
6. เปิดหน้ารายการออเดอร์ ต้องเห็น 5 แถว

⚠️ Test mode เปิดให้ใครก็อ่านเขียนได้ และหมดอายุใน 30 วัน สัปดาห์ที่ 7–8 จะปิดด้วย Security Rules

## ✅ ความคืบหน้าการบ้านที่ 1

| ส่วน | งาน | สถานะ |
|---|---|---|
| 0 | `SCOPE.md` | ✅ |
| A | repo บน GitHub + commit ในชื่อผู้จัดทำ | ✅ |
| B | โครงสร้างข้อมูล | ✅ ร่างในไฟล์แล้ว · ⏳ ลอกลงกระดาษ |
| C | Firestore + ข้อมูลตัวอย่าง 5 รายการ | ⏳ รอสร้างโปรเจกต์ Firebase |
| D | หน้ารายการอ่านจาก Firestore | ✅ โค้ดพร้อม · ⏳ รอ firebaseConfig |
| — | ภาพ Firebase Console ใน `docs/` | ⏳ |
