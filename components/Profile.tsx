import ContactBox from "./ContactBox";
import Image from 'next/image'
import ProfilePic from '../public/img/islam-shehata.jpeg';

export default function Profile() {
  return (
  <section className="container mx-auto px-3 md:px-6 lg:px-12">
    <div className="flex flex-col md:flex-row gap-4 lg:gap-12 box-border">
      <section className="flex flex-col w-full md:w-2/3 md:text-right">
        <h1 className="text-6xl md:text-7xl text-[#481515] mt-6">
          <span className="title">صانع ومطور</span> برمجيات
        </h1>
        <p className="pt-1">
          هويت التقنية منذ الصغر، حيث كنت ألعب على الحاسوب و الآتاري وغيرهم.
          عملت بالبرمجة بجانب دراسة إدارة الأعمال. ابني برمجيات بلغات مختلفة مثل
          جو و بايثون. حاليًا أعمل لدى شركة ألمانية تبني منصة لتجارة العملات
          الرقمية.
        </p>

        <ContactBox />
      </section>

      <section
        className="
          w-full
          md:w-1/2
          box-border
          my-24
          align-center
          place-items-stretch
        "
      >
        <div
          className="
          mx-auto
            bg-secondary
            relative
            w-full
            place-items-end
            md:w-80
            h-60
            py-4
            rounded-xl
          "
        >
          <Image
            src={ProfilePic}
            alt="صورة شخصية"
            className="
              z-10
              absolute
              top-[-7rem]
              md:top-[-3.7rem]
              right-0
              w-full
              md:w-80
              mt-4
              md:mt-0
              rounded-md
              clip
            "
          />
        </div>
      </section>

      
    </div>
  </section>);
}

{/* <style scoped>
.title::after {
  content: "\a";
  white-space: pre;
}
</style> */}