// Shared sample data for the three prototypes. Mirrors the Google Sheets tabs (see docs/architecture.md). Sample only — never ship as production data.
window.SALON = (() => {
  const employees = [
    { id: "E1", name: "سارة", color: "var(--emp-sara)", hex: "#D58B91", role: "employee", skills: ["hair", "brows"] },
    { id: "E2", name: "نور", color: "var(--emp-noor)", hex: "#C65A32", role: "employee", skills: ["nails", "makeup"] },
    { id: "E3", name: "مريم", color: "var(--emp-mariam)", hex: "#8FAE8B", role: "employee", skills: ["nails", "brows"] },
    { id: "E4", name: "زينب", color: "var(--emp-zainab)", hex: "#B49AD6", role: "employee", skills: ["hair", "makeup", "bridal"] }
  ];
  const categories = [
    { id: "hair", name: "الشعر" }, { id: "nails", name: "الأظافر" }, { id: "brows", name: "الحواجب" }, { id: "makeup", name: "المكياج" }, { id: "bridal", name: "العرايس" }
  ];
  const services = [
    { id: "S1", cat: "hair", name: "قص وتصفيف", desc: "قص مع غسيل واستشوار.", dur: 45, price: 25000, deposit: 0 },
    { id: "S2", cat: "hair", name: "صبغ شعر", desc: "صبغة كاملة مع غسيل.", dur: 120, price: 60000, deposit: 20000 },
    { id: "S3", cat: "hair", name: "تسريحة سهرة", desc: "رفع أو ويفي مع تثبيت.", dur: 60, price: 40000, deposit: 10000 },
    { id: "S4", cat: "nails", name: "مانيكير", desc: "تنظيف وطلاء.", dur: 40, price: 15000, deposit: 0 },
    { id: "S5", cat: "nails", name: "تركيب أظافر", desc: "أكريليك أو جل.", dur: 90, price: 45000, deposit: 15000 },
    { id: "S6", cat: "brows", name: "ترتيب حواجب", desc: "تحديد وتشذيب.", dur: 20, price: 10000, deposit: 0 },
    { id: "S7", cat: "makeup", name: "مكياج سهرة", desc: "مكياج كامل يدوم طول الليل.", dur: 60, price: 50000, deposit: 15000 },
    { id: "S8", cat: "bridal", name: "مكياج عروس", desc: "جلسة كاملة مع تجربة مسبقة.", dur: 180, price: 250000, deposit: 50000 }
  ];
  const STATUS = {
    confirmed: { label: "مؤكّد", v: "confirmed" }, pending: { label: "بانتظار التوزيع", v: "pending" }, progress: { label: "قيد الخدمة", v: "progress" },
    done: { label: "مكتمل", v: "done" }, cancelled: { label: "ملغي", v: "cancelled" }, unpaid: { label: "بانتظار الدفع", v: "unpaid" }
  };
  const PAY = { paid: "مدفوع", deposit: "عربون مدفوع", unpaid: "غير مدفوع", cash: "نقد", free: "مجاني" };
  const SRC = { walkin: "حضور", whatsapp: "واتساب", web: "الموقع" };
  const today = [
    { id: "B101", t: "10:00", cust: "هدى", phone: "07701234567", svc: "S1", emp: "E1", status: "done", pay: "cash", src: "walkin" },
    { id: "B102", t: "10:30", cust: "رنا", phone: "07711234567", svc: "S4", emp: "E3", status: "progress", pay: "unpaid", src: "walkin", arrived: true },
    { id: "B103", t: "11:00", cust: "مريم ك.", phone: "07721234567", svc: "S5", emp: null, status: "pending", pay: "deposit", src: "web" },
    { id: "B104", t: "11:30", cust: "شهد", phone: "07731234567", svc: "S2", emp: "E4", status: "confirmed", pay: "deposit", src: "whatsapp" },
    { id: "B105", t: "12:00", cust: "دعاء", phone: "07741234567", svc: "S6", emp: "E1", status: "confirmed", pay: "unpaid", src: "walkin", arrived: true },
    { id: "B106", t: "1:00", cust: "آية", phone: "07751234567", svc: "S7", emp: null, status: "pending", pay: "deposit", src: "web" },
    { id: "B107", t: "2:30", cust: "زهراء", phone: "07761234567", svc: "S8", emp: "E4", status: "confirmed", pay: "deposit", src: "web" },
    { id: "B108", t: "4:00", cust: "نبأ", phone: "07771234567", svc: "S3", emp: "E1", status: "unpaid", pay: "unpaid", src: "web" },
    { id: "B109", t: "5:30", cust: "سجى", phone: "07781234567", svc: "S4", emp: "E2", status: "cancelled", pay: "unpaid", src: "whatsapp" }
  ];
  const slots = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00", "5:30", "6:00", "6:30", "7:00"];
  const byId = (arr, id) => arr.find(x => x.id === id);
  const iqd = n => n.toLocaleString("ar-EG") + " د.ع";
  const ar = n => Number(n).toLocaleString("ar-EG");
  const timeAr = t => { const [h, m] = t.split(":"); const hh = +h; return ar(hh) + ":" + m.replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d]) + (hh >= 10 && hh <= 11 ? " ص" : " م"); };
  const help = {
    pending: { q: "شنو يعني بانتظار التوزيع؟", a: "الزبونة حجزت موعد، بس بعد ما حددنا الموظفة.\n\nمثال: مريم حجزت أظافر الساعة ١٢، وسارة ونور متفرغات.\n\nاختاري وحدة منهن حتى يتحدد الموعد إلها." },
    walkin: { q: "شلون أضيف زبونة بدون موعد؟", a: "إذا إجت زبونة للصالون بدون حجز، اختاري الخدمة واضغطي «هسه».\n\nإذا أكو موظفة متفرغة، ينضاف الحجز مباشرة." },
    capacity: { q: "ليش ما يطلع الوقت متوفر؟", a: "النظام يحسب كل الموظفات اللي يعرفن هالخدمة ودوامهن واستراحاتهن والحجوزات الموجودة — حتى اللي بعد ما توزعت.\n\nإذا ما أكو وحدة تگدر تكمل الخدمة كاملة بهالوقت، ما يطلع متوفر." },
    deposit: { q: "شنو العربون؟", a: "مبلغ تدفعه الزبونة مقدماً حتى يثبت الحجز. ينحسب من سعر الخدمة، والباقي تدفعه بالصالون." },
    code: { q: "وين ألگي رمز الدخول؟", a: "الرمز تعطيج إياه مسؤولة الاستقبال. إذا ضاع أو انكشف، تگدر تلغيه وتطلع رمز جديد." }
  };
  return { employees, categories, services, STATUS, PAY, SRC, today, slots, byId, iqd, ar, timeAr, help };
})();