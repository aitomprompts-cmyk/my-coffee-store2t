// ─────────────────────────────────────────────────────────────
// js/orders.js — หน้ารายการออเดอร์ (มุมมองบาริสต้า)
// สัปดาห์ที่ 6: อ่านจาก Firestore จริง (ผ่าน js/data.js)
// ─────────────────────────────────────────────────────────────

import { ตั้งค่าแล้ว } from "./firebase-config.js";
import { getOrders } from "./data.js";

const กล่อง = document.getElementById("ผลลัพธ์");

if (!ตั้งค่าแล้ว) {
  showConfigWarning();
  กล่อง.innerHTML = "<p>ยังอ่านข้อมูลไม่ได้ — ต้องวางค่า firebaseConfig ในไฟล์ js/firebase-config.js ก่อน</p>";
} else {
  try {
    แสดงตาราง(await getOrders());
  } catch (err) {
    console.error(err);
    กล่อง.innerHTML =
      '<p class="error">อ่านข้อมูลจาก Firestore ไม่สำเร็จ: ' + esc(err.message) + "</p>" +
      "<p>ถ้าขึ้น permission denied ให้ตรวจว่าเลือก Test mode ตอนสร้างฐานข้อมูล</p>";
  }
}

function แสดงตาราง(รายการ) {
  if (รายการ.length === 0) {
    กล่อง.innerHTML = "<p>ยังไม่มีออเดอร์ในระบบ — รัน <code>npm run seed</code> เพื่อใส่ข้อมูลตัวอย่าง</p>";
    return;
  }

  let html =
    '<p class="count">ทั้งหมด ' + รายการ.length + " ออเดอร์ · เรียงจากใหม่ไปเก่า</p>" +
    '<div class="table-wrap"><table><thead><tr>' +
    "<th>เวลา</th>" +
    "<th>โต๊ะ</th>" +
    "<th>เมนู</th>" +
    '<th class="hide-mobile">ตัวเลือก</th>' +
    '<th class="hide-mobile">จำนวน</th>' +
    "<th>สถานะ</th>" +
    '<th class="hide-mobile">บาริสต้า</th>' +
    "</tr></thead><tbody>";

  for (const ออเดอร์ of รายการ) {
    const หมายเหตุ = ออเดอร์.note ? '<span class="note">📝 ' + esc(ออเดอร์.note) + "</span>" : "";
    const บาริสต้า = ออเดอร์.baristaName ? esc(ออเดอร์.baristaName) : '<span class="empty">ยังไม่มีคนรับ</span>';
    html +=
      "<tr>" +
      '<td class="time">' + esc(ออเดอร์.createdAt) + "</td>" +
      '<td class="table-no">' + esc(ออเดอร์.tableNo) + "</td>" +
      '<td><span class="menu-name">' + esc(ออเดอร์.menuName) + "</span>" + หมายเหตุ + "</td>" +
      '<td class="hide-mobile">' + esc([ออเดอร์.size, ออเดอร์.sweetness, ออเดอร์.milk].join(" · ")) + "</td>" +
      '<td class="hide-mobile num">' + esc(ออเดอร์.quantity) + " แก้ว · " + esc(ออเดอร์.totalPrice) + " บาท</td>" +
      "<td>" + ป้ายสถานะ(ออเดอร์.status) + "</td>" +
      '<td class="hide-mobile barista">' + บาริสต้า + "</td>" +
      "</tr>";
  }

  html += "</tbody></table></div>";
  กล่อง.innerHTML = html;
}
