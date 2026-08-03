---
name: analyze-requirements
description: Turn a business need for the my-coffee-store2t coffee shop project into structured Requirement documents and a prioritized Product Backlog under docs/01-requirements/, then offer to commit and push. Use when the user describes a new feature/business need for the coffee store, or explicitly asks to analyze requirements, create/update the backlog, or write a user story.
---

# วิเคราะห์ Requirement → สร้าง Product Backlog (my-coffee-store2t)

Skill นี้ใช้สำหรับแปลงความต้องการทางธุรกิจของร้านกาแฟ (my-coffee-store2t) ให้กลายเป็นเอกสาร Requirement และ Product Backlog ที่มีโครงสร้าง พร้อมให้ทีมนำไปทำงานต่อ ตามลำดับขั้นดังนี้

## ขั้นตอน

1. **ยืนยันโฟลเดอร์โปรเจกต์** — งานนี้ต้องทำในโฟลเดอร์ `/Users/tom149463/Projects/my-coffee-store2t` (โฟลเดอร์หลักของโครงการ ADT) เท่านั้น ถ้า working directory ปัจจุบันไม่ใช่โฟลเดอร์นี้ ให้แจ้งผู้ใช้/สลับไปทำงานที่นั่นก่อน

2. **มอบหมายงานวิเคราะห์ให้ subagent `requirement-analyst`** ผ่าน Agent tool โดยส่งบริบทความต้องการทางธุรกิจที่ผู้ใช้ให้มาไปด้วยแบบครบถ้วน (verbatim) — subagent ตัวนี้รู้จักโครงสร้างเอกสารของโปรเจกต์อยู่แล้ว และจะ:
   - อ่าน requirement/backlog เดิมก่อนเขียนเพิ่ม
   - สร้าง/อัปเดตไฟล์ requirement ใน `docs/01-requirements/01-spec/`
   - สร้าง/อัปเดต `docs/01-requirements/03-task/backlog.md` เป็นตาราง backlog (ID, User Story, Priority, Story Points, สถานะ, อ้างอิง)
   - เชื่อม wikilink ระหว่างเอกสารให้ครบ

3. **ตรวจสอบผลลัพธ์กับผู้ใช้** — สรุปให้ผู้ใช้เห็นว่ามีการสร้าง/แก้ไขไฟล์อะไรบ้าง มี backlog item ใหม่กี่รายการ และมีสมมติฐาน/คำถามที่ subagent ตั้งไว้หรือไม่ ให้ผู้ใช้ยืนยันหรือแก้ไขก่อนไปขั้นถัดไป

4. **เสนอ commit/push** — ถามผู้ใช้ว่าต้องการ commit เอกสารที่เปลี่ยนแปลง (README/requirement/backlog) และ push ขึ้น `origin` (`github.com/aitomprompts-cmyk/my-coffee-store2t`) เลยหรือไม่ อย่า commit/push เองโดยไม่ถามก่อน

## ข้อควรระวัง

- ห้ามลบเอกสารเดิม — ถ้าทิศทางเปลี่ยนให้ย้ายของเก่าไป `docs/00-archived/` แทน (ตามกติกาที่ระบุใน `docs/00-archived/index.md`)
- เอกสารทั้งหมดเขียนเป็นภาษาไทยและใช้ Obsidian wikilink ให้สอดคล้องกับของเดิมในโปรเจกต์
- ถ้าความต้องการที่ผู้ใช้ให้มายังคลุมเครือเกินกว่าจะวิเคราะห์ได้ (เช่น ไม่รู้กลุ่มผู้ใช้หลัก) ให้ subagent ถามคำถามที่จำเป็นจริงๆ ก่อน แทนที่จะเดาทั้งหมด
