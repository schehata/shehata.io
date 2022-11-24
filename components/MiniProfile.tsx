export default function MiniProfile() {
  return (
    <section className="flex flex-col">
    <p>عن الكاتب</p>
    <div className="flex flex-col box-border border border-gray-200 rounded-lg bg-gray-100">
        <section className="flex flex-col p-4">
            <h1 className="text-xl">إسلام شحاته</h1>
            <p className="pt-1 text-sm">
                هويت التقنية منذ الصغر، حيث كنت ألعب على الحاسوب و الآتاري وغيرهم. عملت
                بالبرمجة بجانب دراسة إدارة الأعمال. ابني برمجيات بلغات مختلفة مثل جو و
                بايثون. حاليًا أعمل لدى شركة ألمانية تبني منصة لتجارة العملات الرقمية.
            </p>
        </section>
    </div>
  </section>   
  );
}
