// ─────────────────────────────────────────────────────────────
// scripts/seed.mjs — ใส่ข้อมูลตัวอย่างลง Firestore (ส่วน C ของการบ้าน)
// วิธีรัน: npm run seed
//
// ใช้ id ตายตัว (u001, mn001, od001 …) รันซ้ำกี่ครั้งก็ได้ ข้อมูลจะถูกเขียนทับ ไม่เพิ่มซ้ำ
// ⚠️ ชื่อพนักงานเป็นชื่อสมมติ · อีเมลเป็นอีเมลตัวอย่าง · customerId เป็นรหัสสมมติ
//    ไม่มีชื่อหรือเบอร์โทรลูกค้าในออเดอร์ ตาม PDPA (BL-08)
// ─────────────────────────────────────────────────────────────

import { db, ตั้งค่าแล้ว } from "../js/firebase-config.js";
import { doc, setDoc, terminate } from "firebase/firestore";

if (!ตั้งค่าแล้ว) {
  console.error("❌ ยังไม่ได้วางค่า firebaseConfig ในไฟล์ js/firebase-config.js");
  console.error("   ทำตามขั้นตอน 'ตั้งค่า Firestore' ใน README.md ก่อน แล้วรัน npm run seed อีกครั้ง");
  process.exit(1);
}

const users = [
  { id: "u001", name: "สมชาย ใจดี",   email: "somchai@example.com", role: "barista" },
  { id: "u002", name: "สมหญิง รักงาน", email: "somying@example.com", role: "barista" },
  { id: "u003", name: "สมศรี ตั้งใจ",  email: "somsri@example.com",  role: "owner" }
];

const menus = [
  { id: "mn001", name: "อเมริกาโน่", price: 50 },
  { id: "mn002", name: "ลาเต้",      price: 60 },
  { id: "mn003", name: "มัทฉะลาเต้",  price: 65 }
];

// 5 ออเดอร์: 3 รับออเดอร์แล้ว · 1 กำลังทำ · 1 เสร็จแล้ว
const orders = [
  {
    id: "od001",
    tableNo: 2, customerId: "guest-7f3a",
    menuId: "mn002", menuName: "ลาเต้",
    size: "กลาง", sweetness: "หวานน้อย", milk: "นมโอ๊ต", quantity: 1, totalPrice: 60,
    note: "แพ้นมวัว รบกวนใช้นมโอ๊ตเท่านั้น และช่วยล้างที่ตีฟองนมก่อนทำด้วยค่ะ",
    status: "เสร็จแล้ว",
    baristaId: "u001", baristaName: "สมชาย ใจดี",
    createdAt: "2026-09-07 08:12",
    messages: [
      { id: "ms001", authorId: "u001", authorName: "สมชาย ใจดี",
        message: "ใช้นมโอ๊ตและล้างที่ตีฟองนมให้แล้วครับ เครื่องดื่มพร้อมรับที่เคาน์เตอร์",
        createdAt: "2026-09-07 08:20" }
    ]
  },
  {
    id: "od002",
    tableNo: 5, customerId: "guest-2c9d",
    menuId: "mn001", menuName: "อเมริกาโน่",
    size: "ใหญ่", sweetness: "ไม่หวาน", milk: "ไม่ใส่นม", quantity: 2, totalPrice: 100,
    note: "ขอแยกแก้ว และขอน้ำแข็งน้อย จะนั่งทำงานยาวถึงบ่าย",
    status: "กำลังทำ",
    baristaId: "u002", baristaName: "สมหญิง รักงาน",
    createdAt: "2026-09-08 09:40",
    messages: [
      { id: "ms002", authorId: "u002", authorName: "สมหญิง รักงาน",
        message: "รับทราบค่ะ แยกแก้วและใส่น้ำแข็งน้อยให้นะคะ",
        createdAt: "2026-09-08 09:42" }
    ]
  },
  {
    id: "od003",
    tableNo: 1, customerId: "guest-9b41",
    menuId: "mn003", menuName: "มัทฉะลาเต้",
    size: "กลาง", sweetness: "หวานน้อย", milk: "นมอัลมอนด์", quantity: 1, totalPrice: 65,
    note: "ไม่แน่ใจว่าผงมัทฉะมีส่วนผสมนมผงหรือเปล่า ถ้ามีขอเปลี่ยนเป็นเมนูที่ไม่มีนมวัว",
    status: "รับออเดอร์แล้ว",
    baristaId: "", baristaName: "",
    createdAt: "2026-09-09 13:05",
    messages: []
  },
  {
    id: "od004",
    tableNo: 3, customerId: "guest-4e7c",
    menuId: "mn002", menuName: "ลาเต้",
    size: "เล็ก", sweetness: "หวานปกติ", milk: "นมวัว", quantity: 1, totalPrice: 60,
    note: "รีบเข้าประชุม ถ้าได้ภายใน 10 นาทีจะดีมาก",
    status: "รับออเดอร์แล้ว",
    baristaId: "", baristaName: "",
    createdAt: "2026-09-10 08:55",
    messages: []
  },
  {
    id: "od005",
    tableNo: 4, customerId: "guest-d812",
    menuId: "mn001", menuName: "อเมริกาโน่",
    size: "กลาง", sweetness: "ไม่หวาน", milk: "ไม่ใส่นม", quantity: 1, totalPrice: 50,
    note: "ขอเมล็ดคั่วอ่อนถ้ามี",
    status: "รับออเดอร์แล้ว",
    baristaId: "", baristaName: "",
    createdAt: "2026-09-11 10:20",
    messages: []
  }
];

let จำนวนข้อความ = 0;

for (const { id, ...ข้อมูล } of users) {
  await setDoc(doc(db, "users", id), ข้อมูล);
  console.log("  users/" + id + " · " + ข้อมูล.name);
}
for (const { id, ...ข้อมูล } of menus) {
  await setDoc(doc(db, "menus", id), ข้อมูล);
  console.log("  menus/" + id + " · " + ข้อมูล.name);
}
for (const { id, messages, ...ข้อมูล } of orders) {
  await setDoc(doc(db, "orders", id), ข้อมูล);
  console.log("  orders/" + id + " · โต๊ะ " + ข้อมูล.tableNo + " · " + ข้อมูล.menuName + " · " + ข้อมูล.status);
  for (const { id: idข้อความ, ...ข้อมูลข้อความ } of messages) {
    await setDoc(doc(db, "orders", id, "messages", idข้อความ), ข้อมูลข้อความ);
    console.log("    └ messages/" + idข้อความ + " · " + ข้อมูลข้อความ.authorName);
    จำนวนข้อความ++;
  }
}

console.log(
  "✅ ใส่ข้อมูลตัวอย่างสำเร็จ: users " + users.length +
  " · menus " + menus.length +
  " · orders " + orders.length +
  " · messages " + จำนวนข้อความ
);

await terminate(db);
process.exit(0);
