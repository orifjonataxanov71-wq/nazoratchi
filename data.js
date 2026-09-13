// Mock data for the demo. Replace with real API calls to your backend.
const COMPANIES = [
  { id: "dilmuss", name: "Dilmuss", initials: "DL", branch: "Chilonzor filiali", plan: "Business", status: "live", cameras: 8, ownerName: "Orifjon Rahimov", registered: "2025-11-02" },
  { id: "oqtepa-market", name: "Oqtepa Market", initials: "OM", branch: "Oqtepa filiali", plan: "Standart", status: "live", cameras: 5, ownerName: "Malika Yusupova", registered: "2025-12-18" },
  { id: "somsa-house", name: "Somsa House", initials: "SH", branch: "Yunusobod filiali", plan: "Business", status: "idle", cameras: 6, ownerName: "Jasur Tosh", registered: "2026-01-09" },
  { id: "green-mart", name: "Green Mart", initials: "GM", branch: "Mirzo Ulug'bek filiali", plan: "Standart", status: "offline", cameras: 4, ownerName: "Nodira Aliyeva", registered: "2026-01-27" },
  { id: "faol-savdo", name: "Faol Savdo", initials: "FS", branch: "Sergeli filiali", plan: "Pro", status: "live", cameras: 12, ownerName: "Bekzod Nazarov", registered: "2026-02-14" },
  { id: "asr-tekstil", name: "Asr Tekstil", initials: "AT", branch: "Shayxontohur filiali", plan: "Business", status: "live", cameras: 7, ownerName: "Sardor Qosimov", registered: "2026-03-03" },
  { id: "novza-oziq", name: "Novza Oziq-ovqat", initials: "NO", branch: "Yashnobod filiali", plan: "Standart", status: "idle", cameras: 3, ownerName: "Gulnoza Ergasheva", registered: "2026-03-21" },
  { id: "temiryol-bozor", name: "Temiryo'l Bozor", initials: "TB", branch: "Bektemir filiali", plan: "Pro", status: "live", cameras: 10, ownerName: "Ilhom Davronov", registered: "2026-04-08" },
];

// per-company camera list
const CAMERAS = {
  dilmuss: [
    { name: "Kassa 1", loc: "Savdo zali", status: "live", viewers: 2, people: 3 },
    { name: "Kassa 2", loc: "Savdo zali", status: "live", viewers: 1, people: 1 },
    { name: "Kirish eshigi", loc: "Bosh kirish", status: "offline", viewers: 0, people: null },
    { name: "Ombor", loc: "Orqa xona", status: "live", viewers: 1, people: 0 },
    { name: "Parking", loc: "Tashqi hovli", status: "live", viewers: 0, people: 2 },
    { name: "Savdo zali — markaz", loc: "Savdo zali", status: "live", viewers: 3, people: 6 },
    { name: "Chiqish eshigi", loc: "Orqa chiqish", status: "live", viewers: 0, people: 0 },
    { name: "2-qavat", loc: "Ofis qismi", status: "idle", viewers: 0, people: 1 },
  ],
};
function camerasFor(id){
  if (CAMERAS[id]) return CAMERAS[id];
  // generate deterministic placeholder cameras for other companies
  const co = COMPANIES.find(c => c.id === id);
  const n = co ? co.cameras : 4;
  const names = ["Kassa 1","Kassa 2","Kirish eshigi","Ombor","Savdo zali","Parking","Chiqish eshigi","2-qavat","Yon eshik","Sklad-2","Direktor xonasi","Yuk qabul"];
  const locs = ["Savdo zali","Bosh kirish","Orqa xona","Tashqi hovli","Orqa chiqish","Ofis qismi"];
  const out = [];
  for (let i=0;i<n;i++){
    const seed = (id.length + i*7) % 10;
    const status = seed === 3 ? "offline" : (seed === 6 ? "idle" : "live");
    out.push({
      name: names[i % names.length],
      loc: locs[i % locs.length],
      status,
      viewers: status === "live" ? (seed % 3) : 0,
      people: status === "offline" ? null : (seed % 5),
    });
  }
  return out;
}
