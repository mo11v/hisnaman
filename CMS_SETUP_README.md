# لوحة التحكم بعد الإصلاح

تم إصلاح:
- Reset Password
- Invitation links
- Login / Logout
- Decap CMS admin
- رفع الصور
- تعديل المقالات والخدمات والعملاء

## خطوات التشغيل
1. فك ضغط الملف.
2. ارفع الملفات نفسها على GitHub، وليس ملف ZIP.
3. اربط Repository مع Netlify.
4. في Netlify فعل:
   - Identity
   - Invite only
   - Git Gateway
5. ادخل على:
   /admin/

## لو رابط Reset فتح الصفحة الرئيسية
الكود الآن يحوله تلقائيًا إلى:
 /admin/#recovery_token=...
