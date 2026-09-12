// ─────────────────────────────────────────────────────────────
// js/firebase.js — เชื่อมเว็บ FixIt กับ Firestore (สัปดาห์ที่ 6: อ่านอย่างเดียว)
//
// ใช้ Firebase SDK ผ่าน CDN ไม่มีขั้นตอน build
// หน้าที่เรียกใช้ไฟล์นี้ต้องมี import map ใน <head> ชี้ "firebase/app" และ "firebase/firestore"
//
// 📌 วางค่าจาก Firebase Console → ⚙️ Project settings → Your apps → </>
//    แทนข้อความ "วางค่า-...-ที่นี่" ด้านล่างให้ครบทุกช่อง
// ─────────────────────────────────────────────────────────────

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "วางค่า-apiKey-ที่นี่",
  authDomain: "วางค่า-authDomain-ที่นี่",
  projectId: "วางค่า-projectId-ที่นี่",
  storageBucket: "วางค่า-storageBucket-ที่นี่",
  messagingSenderId: "วางค่า-messagingSenderId-ที่นี่",
  appId: "วางค่า-appId-ที่นี่"
};

// ยังไม่ได้วางค่าจริง → ไม่เชื่อมต่อ หน้าเว็บใช้ข้อมูลตัวอย่างในโค้ดต่อไป
export const firebaseReady = !String(firebaseConfig.projectId).startsWith("วางค่า");

export const db = firebaseReady ? getFirestore(initializeApp(firebaseConfig)) : null;

// แถบเตือนสีเหลือง ใช้ตอนที่ยังไม่ได้วางค่า firebaseConfig
export function showFirebaseWarning() {
  const box = document.createElement("div");
  box.className = "proto-banner";
  box.style.marginBottom = "1rem";
  box.style.borderRadius = "8px";
  box.textContent =
    "⚠️ ยังไม่ได้ตั้งค่า Firebase — หน้านี้ยังใช้ข้อมูลตัวอย่างในโค้ด · วางค่า firebaseConfig ในไฟล์ js/firebase.js ก่อน";
  const place = document.querySelector("main.container") || document.body;
  place.insertBefore(box, place.firstChild);
}
