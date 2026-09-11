// ─────────────────────────────────────────────────────────────
// js/data.js — อ่านข้อมูลจาก Firestore (สัปดาห์ที่ 6: อ่านอย่างเดียว)
//
// โครงสร้างตาม docs/02-design/02-technical/data-structure.md:
//   📁 users/{id}      { name, email, role }
//   📁 menus/{id}      { name, price }
//   📁 orders/{id}     { tableNo, customerId, menuId, menuName, size, sweetness, milk,
//                        quantity, totalPrice, note, status, baristaId, baristaName, createdAt }
//      📁 messages/{id} { authorId, authorName, message, createdAt }   ← subcollection
//
// การเขียน (สั่งเครื่องดื่ม, เปลี่ยนสถานะ, ส่งข้อความ) เป็นงานของสัปดาห์ที่ 7
// ─────────────────────────────────────────────────────────────

import { db } from "./firebase-config.js";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function เป็นรายการ(snap) {
  return snap.docs.map(function (d) { return { id: d.id, ...d.data() }; });
}

// เรียงจากใหม่ไปเก่าตาม createdAt (ข้อความ "YYYY-MM-DD HH:mm" เรียงตามตัวอักษรได้ตรงกับเวลา)
export async function getOrders() {
  const snap = await getDocs(query(collection(db, "orders"), orderBy("createdAt", "desc")));
  return เป็นรายการ(snap);
}
