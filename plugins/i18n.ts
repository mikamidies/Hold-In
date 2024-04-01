import { createI18n } from "vue-i18n";

export default defineNuxtPlugin(({ vueApp }) => {
  let i18n = createI18n({
    locale: "ru",
    legacy: false,
    globalInjection: true,
    messages: {
      uz: {
        warn_test: "Sayt test rejimida ishlamoqda",
        page_name_1: "Asosiy",
        page_name_2: "Kompaniya haqida",
        page_name_3: "Bizning yo'nalishlarimiz",
        page_name_4: "Galereya",
        page_name_5: "Yangiliklar",
        page_name_6: "Kontaktlar",

        page_title_1: "Kompaniya haqida",
        page_title_2: "Bizning yo'nalishlarimiz",
        page_title_3: "Bizning Galereyamiz",
        page_title_4: "Bizning yangiliklar",
        page_title_5: "Biz bilan bog'lanish",

        main_text_1: "Holding haqida",
        main_text_2:
          "Yillar davomida JIP o'zini ishonchli va mas'uliyatli ishlab chiqaruvchi sifatida ko'rsatdi, uning mahsulotlariga ishonchingiz komil bo'ladi. Bugungi kunda korxona Markaziy Osiyodagi eng yirik avtomatlashtirilgan ishlab chiqarish majmualaridan biriga ega",
        main_text_2_2:
          "Biz sanoatlashtirish uchun mas'ul bo'lgan holda yangi standartlar va tendentsiyalarni yaratamiz. Biz an'anaviy biznes amaliyotlarini o'zgartirmoqdamiz, mijozlar, xodimlar, hamkorlar va jamiyat uchun samaradorlikni oshirmoqdamiz. Bizga, yetakchi xolding kompaniyasiga, birgalikda taraqqiyot va rivojlanishga ishoning.",
        main_text_3: "Holding haqida batafsil",
        main_text_4: "Sertifikatlar",
        main_text_5: "Bozorda yillar",
        main_text_6: "Korxona mutaxassislari",
        main_text_7: "mln. dollarlik investitsiyalar jalb qilingan",
        main_text_8: "Xalqaro hamkorlar",
        main_text_9: "Bizning galereyamiz",
        main_text_10: "Toshkentdagi III Xalqaro Forum PLUSdan suratlar",
        main_text_11:
          "Toshkentdagi Meta va Admixer reklamasidan olingan suratlar",
        main_text_12: "Bizning manzillarimiz",
        main_text_13: "Yangiliklar",
        main_text_14: "Bog'lanish uchun ma'lumot",
        main_text_15: "Manzil:",
        main_text_16: "Telefon raqami:",
        main_text_17: "Ijtimoiy tarmoqlar",
        main_text_18: "Tel/Faks:",
        main_text_19: "Fikr-mulohaza shakli",
        main_text_20: "Ism familiyangiz",
        main_text_21: "Telefon raqam",
        main_text_22: "Xabar",
        main_text_23: "Yuborish",
        main_text_24: "Bizning hamkorlarimiz",

        about_text_1: "Bizning jamoamiz",
        about_text_2: "Bizning kareramiz",
        about_text_3: "Bizning kareramiz",

        gallery_text_1: "Barcha Galereya",
        gallery_text_2: "Fotogalereya",
        gallery_text_3: "Video galereya",

        inner_text_1: "Siz eng yaxshi yangi, ekologik toza avtomobilsiz",
        inner_text_2:
          "Biz uchta qatlamli plastmassadan eng yaxshi plastmassa mahsulotlarini ishlab chiqaramiz, biz mijozlarimiz uchun qulay bo'lgan hamma narsani qilamiz",
        inner_text_3: "Biz haqimizda batafsil",
        inner_text_4: "Biz haqimizda",
        inner_text_5:
          "Eng yaxshi umumiy iqtisodiy ko'rsatkich bilan aqlli va oddiy yechimingizni toping!",
        inner_text_6:
          "“Jahon Invest Plast” kompaniyasi O‘zbekistonda plastik mahsulotlar ishlab chiqaruvchi yetakchi hisoblanadi. Korxona uy, bog‘ va iste’mol uchun mo‘ljallangan 300 dan ortiq mahsulotlarni taklif etadi. Mahsulotlarimiz xaridorgir va Markaziy Osiyo mamlakatlariga eksport qilinmoqda, bu esa ularning ishonchliligi va sifatini tasdiqlaydi.",
        inner_text_7: "Ishlab chiqarish",
        inner_text_8:
          "Maykalar, briflar va bokschilar, futbolkalar va yengsiz jiletlar, ichki kiyimlar",
        inner_text_9: "Minglab odamlar",
        inner_text_10: "Xodimlarning umumiy soni",
        inner_text_11: "Batafsil",
        inner_text_12: "NEGA JIP NI TANLANGAN?",
        inner_text_13: "Buxoro viloyati",
        inner_text_14:
          "Taniqli mutafakkirlar va muqaddas Qurʼon voizlari tug‘ilgan joy, viloyat markazi Buxoro shahri sharofati bilan Buxoro viloyati islom madaniyati markazi deb nomlanadi.",
        inner_text_15: "Zapravkalar soni",
        inner_text_16: "Fikr-mulohaza shakli",
        inner_text_17:
          "Biz har qanday murakkab raqamli tizimlarni talablar bo'yicha tavsiflaymiz va batafsil dizayn hujjatlarini tuzamiz",
        inner_text_18: "Ismingiz",
        inner_text_19: "Telefon raqami",
        inner_text_20: "Yuborish",
        inner_text_21: "Manzilimiz",
        inner_text_22: "Telefon raqami",
        inner_text_23: "Elektron pochta",
        inner_text_24: "Ijtimoiy tarmoq",
        inner_text_25: "nnnn",
        inner_text_26: "nnnn",
        inner_text_27: "nnnn",
        inner_text_28: "nnnn",
        inner_text_29: "nnnn",

        news_text_1: "Boshqa yangiliklar",
        developer: "Veb-sayt NDC tomonidan ishlab chiqilgan",
        designer: "Developed by ",
        count: "ta",
        policy: "© 2023 JIP GROUP",
        num_1: "1",
        num_2: "2",
        num_3: "3",
        num_4: "4",

        seo_index_title: "Jahon Invest Holding",
        seo_index_desc:
          "Jahon Invest Group-bu qurilish, turar-joy majmualarini ishlab chiqish va PVX mahsulotlari va plastmassa mahsulotlarini ishlab chiqarish bo'yicha keng qamrovli echimlarga ixtisoslashgan etakchi xolding. Biz mijozlarimizning uy-joy, sanoat va iste'mol mahsulotlariga bo'lgan ehtiyojlarini qondirish orqali zamonaviy yashash joylari, yuqori sifatli qurilish materiallari va innovatsion PVX mahsulotlarini yaratamiz. Bizning vazifamiz mijozlar bilan uzoq muddatli munosabatlarni o'rnatish va yuqori sifat va ishonchlilik standartlariga javob beradigan mahsulotlarni yaratishdir.",
        seo_index_keys:
          "qurilish, turar-joy majmualari, PVX mahsulotlar, plastik mahsulotlar, muhandislik, qurilish materiallari, infratuzilma, yashash joylari, plastik mahsulotlar, sanoat, ishlab chiqarish xoldingi, innovatsiya, sifat, ishonchlilik.",
        seo_directions_title: "Jahon Invest Holding | Yo'nalishlar",
        seo_directions_desc:
          "Jahon Invest Group-bu qurilish, turar-joy majmualarini ishlab chiqish va PVX mahsulotlari va plastmassa mahsulotlarini ishlab chiqarish bo'yicha keng qamrovli echimlarga ixtisoslashgan etakchi xolding. Bizning sho'ba korxonalarimiz Modern City Construct, Premium Pipe Plast va Jahon Invest Plast.",
        seo_directions_keys:
          "Modern City Construct, Premium Pipe Plast, Jahon Invest Plast, qurilish, turar-joy majmualari, PVX mahsulotlari, plastmassa mahsulotlari, muhandislik, qurilish materiallari, infratuzilma, yashash joylari, plastik mahsulotlar, sanoat, ishlab chiqarish xoldingi",
        seo_about_title: "Jahon Invest Holding | Kompaniya haqida",
        seo_about_desc:
          "Jahon Invest Group xoldingi haqida ko'proq bilib oling - qurilish, turar-joy majmualarini ishlab chiqish, PVX mahsulotlari va plastmassa mahsulotlarini ishlab chiqarishga ixtisoslashgan etakchi korxona. Biz innovatsion texnologiyalar va professional yondashuvni birlashtirib, mijozlarimizning turli sanoat va uy-joy sohasidagi ehtiyojlarini qondiradigan yuqori sifatli va ishonchli echimlarni yaratamiz.",
        seo_about_keys:
          "Jahon Invest Group, qurilish, turar-joy majmualari, PVX mahsulotlari, plastmassa mahsulotlari, innovatsiyalar, sifat, ishonchlilik, muhandislik, sanoat, ishlab chiqish, qurilish materiallari, uy-joy qurilishi",
        seo_gallery_title: "Jahon Invest Holding | Galereya",
        seo_gallery_desc:
          "Jahon Invest Group xoldingi haqida ko'proq bilib oling - qurilish, turar-joy majmualarini ishlab chiqish, PVX mahsulotlari va plastmassa mahsulotlarini ishlab chiqarishga ixtisoslashgan etakchi korxona. Biz innovatsion texnologiyalar va professional yondashuvni birlashtirib, mijozlarimizning turli sanoat va uy-joy sohasidagi ehtiyojlarini qondiradigan yuqori sifatli va ishonchli echimlarni yaratamiz.",
        seo_gallery_keys:
          "Jahon Invest Group, qurilish, turar-joy majmualari, PVX mahsulotlari, plastmassa mahsulotlari, innovatsiyalar, sifat, ishonchlilik, muhandislik, sanoat, ishlab chiqish, qurilish materiallari, uy-joy qurilishi",
        seo_news_title: "Jahon Invest Holding | Yangiliklar",
        seo_news_desc:
          "Jahon Invest Group xoldingidan so'nggi yangiliklar va voqealarni bilib oling. Sizga qurilish, turar-joy majmualari, PVX mahsulotlari va plastmassa mahsulotlari ishlab chiqarish bo'yicha faoliyatimiz, yangi loyihalarimiz, yutuqlarimiz va innovatsiyalarimiz haqida eng dolzarb ma'lumotlarni taqdim etish uchun yangiliklarimizni muntazam yangilab turamiz. Kompaniyaning so'nggi voqealari va muvaffaqiyatlaridan xabardor bo'lish uchun bizning yangiliklarimizni kuzatib boring.",
        seo_news_keys:
          "Jahon Invest Group yangiliklari, tadbirlari, xoldingi, qurilish, turar-joy majmualari, PVX mahsulotlari, plastmassa mahsulotlari, innovatsiyalar, loyihalar, yutuqlar, yangilanishlar",
        seo_contacts_title: "Jahon Invest Holding | Kontaktlar",
        seo_contacts_desc:
          "Faoliyatimiz va xizmatlarimiz haqida ko'proq ma'lumot olish uchun biz bilan bog'laning. Jahon Invest Group xoldingi qurilish, uy-joy qurilishi, PVX mahsulotlari va plastmassa mahsulotlarini ishlab chiqarish bo'yicha keng ko'lamli xizmatlarni taklif etadi. Bizning aloqa ma'lumotlarimiz maslahat olish, tijorat takliflarini so'rash yoki uchrashuvni tashkil qilish uchun biz bilan bog'lanishingizga yordam beradi. Biz sizning barcha savollaringizga javob berishga va loyihalaringizni amalga oshirishda yordam berishga tayyormiz.",
        seo_contacts_keys:
          "kontaktlar, aloqa, fikr-mulohazalar, manzil, telefon, elektron pochta, maslahat, so'rov, tijorat taklifi",
      },

      ru: {
        warn_test: "Сайт работает в тестовом режиме",
        page_name_1: "Главная",
        page_name_2: "О компания",
        page_name_3: "Наши направления",
        page_name_4: "Галерея",
        page_name_5: "Новости",
        page_name_6: "Контакты",

        page_title_1: "О компания",
        page_title_2: "Наши направления",
        page_title_3: "Наши Галерея",
        page_title_4: "Наши Новости",
        page_title_5: "Связатся с нами",

        main_text_1: "О холдинге",
        main_text_2:
          "За годы существования компания JIP зарекомендовала себя как надежного и ответственного производителя, в продукции которого вы можете быть уверены. На сегодняшний день предприятие обладает одним из крупнейших в Средней Азии автоматизированным производственным комплексом",
        main_text_2_2:
          "Мы создаем новые стандарты и тренды, отвечая за индустриализацию. Изменяем традиционные методы бизнеса, повышая эффективность для клиентов, сотрудников, партнеров и общества. Доверьтесь нам, ведущей холдинговой компании, для прогресса и совместного развития.",
        main_text_3: "Подробнее о холдинге",
        main_text_4: "Сертификаты",
        main_text_5: "Года на рынке",
        main_text_6: "Специалистов на предприятиях",
        main_text_7: "млн. $ вовлечено инвестиций",
        main_text_8: "международных партнеров",
        main_text_9: "Наша галерея",
        main_text_10: "Фото с III Международного форума PLUS в Ташкенте",
        main_text_11: "Фото с Meta и Admixer Advertising в Ташкенте",
        main_text_12: "Наши направления",
        main_text_13: "Новости",
        main_text_14: "Контактная информация",
        main_text_15: "Адрес:",
        main_text_16: "Номер телефона:",
        main_text_17: "Социальные медиа",
        main_text_18: "Тел/Факс:",
        main_text_19: "Форма для обратной связи",
        main_text_20: "Ваше имя",
        main_text_21: "Номер телефона",
        main_text_22: "Сообщения",
        main_text_23: "Отправит",
        main_text_24: "Наши Партнеры",

        about_text_1: "Наша команда",
        about_text_2: "Наши карьера",
        about_text_3: "Посмотреть больше",

        gallery_text_1: "Все Галерея",
        gallery_text_2: "Фотогалерея",
        gallery_text_3: "Видеогалерея",

        inner_text_1: "Ты лучшая новая экологически чистая поездка",
        inner_text_2:
          "Мы производим самый наилучшие пластмассовый изделие из трех слоеного пластмассы, мы делаем всего комфортного для наших клиентов",
        inner_text_3: "Подробнее  о нас",
        inner_text_4: "О нас",
        inner_text_5:
          "Найдите свое умное и простое решение с лучшей общей экономичной тарифной ставкой!",
        inner_text_6:
          "Компания  Jahon Invest Plast является ведущим производителем пластмассовых товаров в Узбекистане. Компания предлагает более 300 наименований продукции для дома, сада и народного потребления. Наша продукция широко востребована и экспортируется в Центрально-Азиатские страны, что подтверждает надежность и качество.",
        inner_text_7: "Производства",
        inner_text_8:
          "Майки, Трусы и Боксеры, Футболки и Безрукавки,Нижнее бельё",
        inner_text_9: "Тысяч человек",
        inner_text_10: "Общая численность сотрудников",
        inner_text_11: "Подробное",
        inner_text_12: "ПОЧЕМУ ВЫБИРАЮТ JIP",
        inner_text_13: "Бухарская область",
        inner_text_14:
          "В честь города Бухары, места рождения известных мыслителей и проповедников Священного Корана, его называют центром исламской культуры Бухарской области.",
        inner_text_15: "Количество заправок",
        inner_text_16: "Форма для обратной связи",
        inner_text_17:
          "Описываем любые сложные цифровые системы с точки зрения требований, составляем подробную проектную документацию",
        inner_text_18: "Имя",
        inner_text_19: "Номер телефона",
        inner_text_20: "Отправить",
        inner_text_21: "Местоположения",
        inner_text_22: "Тел.номер",
        inner_text_23: "Эл.адрес",
        inner_text_24: "Социальная сеть",
        inner_text_25: "nnnn",
        inner_text_26: "nnnn",
        inner_text_27: "nnnn",
        inner_text_28: "nnnn",
        inner_text_29: "nnnn",

        news_text_1: "Другие новости",
        developer: "Сайт разработал NDC",
        designer: "Сайт разработал ",
        count: "",
        policy: "© 2023 JIP GROUP",
        num_1: "1",
        num_2: "2",
        num_3: "3",
        num_4: "4",

        seo_index_title: "Jahon Invest Holding",
        seo_index_desc:
          "Jahon Invest Group - ведущий холдинг, специализирующийся на комплексных решениях в области строительства, разработке жилых комплексов и производстве ПВХ продукции и пластмассовых изделий. Мы создаем современные жилые пространства, высококачественные строительные материалы и инновационные продукты из ПВХ, удовлетворяя потребности наших клиентов в сфере жилья, промышленности и потребительских товаров. Наша миссия - строить долгосрочные отношения с клиентами и создавать продукты, отвечающие высоким стандартам качества и надежности.",
        seo_index_keys:
          "строительство, жилые комплексы, ПВХ продукция, пластмассовые изделия, инженерные решения, строительные материалы, инфраструктура, жилые пространства, пластиковая продукция, промышленность, производственный холдинг, инновации, качество, надежность.",
        seo_directions_title: "Jahon Invest Holding | Направления",
        seo_directions_desc:
          "Jahon Invest Group - ведущий холдинг, специализирующийся на комплексных решениях в области строительства, разработке жилых комплексов и производстве ПВХ продукции и пластмассовых изделий. Наши дочерние компания - Modern City Construct, Premium Pipe Plast и Jahon Invest Plast.",
        seo_directions_keys:
          "Modern City Construct, Premium Pipe Plast, Jahon Invest Plast, строительство, жилые комплексы, ПВХ продукция, пластмассовые изделия, инженерные решения, строительные материалы, инфраструктура, жилые пространства, пластиковая продукция, промышленность, производственный холдинг",
        seo_about_title: "Jahon Invest Holding | О компании",
        seo_about_desc:
          "Узнайте больше о холдинге Jahon Invest Group - ведущем предприятии, специализирующемся на строительстве, разработке жилых комплексов, производстве ПВХ продукции и пластмассовых изделий. Мы объединяем инновационные технологии и профессиональный подход для создания высококачественных и надежных решений, удовлетворяющих потребности наших клиентов в различных отраслях промышленности и жилья.",
        seo_about_keys:
          "Jahon Invest Group, строительство, жилые комплексы, ПВХ продукция, пластмассовые изделия, инновации, качество, надежность, инженерные решения, промышленность, разработка, строительные материалы, жилищное строительство",
        seo_gallery_title: "Jahon Invest Holding | Галерея",
        seo_gallery_desc:
          "Узнайте больше о холдинге Jahon Invest Group - ведущем предприятии, специализирующемся на строительстве, разработке жилых комплексов, производстве ПВХ продукции и пластмассовых изделий. Мы объединяем инновационные технологии и профессиональный подход для создания высококачественных и надежных решений, удовлетворяющих потребности наших клиентов в различных отраслях промышленности и жилья.",
        seo_gallery_keys:
          "Jahon Invest Group, строительство, жилые комплексы, ПВХ продукция, пластмассовые изделия, инновации, качество, надежность, инженерные решения, промышленность, разработка, строительные материалы, жилищное строительство",
        seo_news_title: "Jahon Invest Holding | Новости",
        seo_news_desc:
          "Узнайте последние новости и события от холдинга Jahon Invest Group. Мы регулярно обновляем наши новости, чтобы предоставить вам самую актуальную информацию о нашей деятельности, новых проектах, достижениях и инновациях в области строительства, жилых комплексов, производства ПВХ продукции и пластмассовых изделий. Следите за нашими новостями, чтобы быть в курсе последних событий и успехов компании.",
        seo_news_keys:
          "новости, события, холдинг Jahon Invest Group, строительство, жилые комплексы, ПВХ продукция, пластмассовые изделия, инновации, проекты, достижения, обновления",
        seo_contacts_title: "Jahon Invest Holding | Контакты",
        seo_contacts_desc:
          "Свяжитесь с нами для получения дополнительной информации о нашей деятельности и услугах. Холдинг Jahon Invest Group предлагает широкий спектр услуг в области строительства, жилищного строительства, производства ПВХ продукции и пластмассовых изделий. Наши контактные данные помогут вам связаться с нами для получения консультации, запроса коммерческих предложений или организации встречи. Мы готовы ответить на все ваши вопросы и помочь в реализации ваших проектов.",
        seo_contacts_keys:
          "контакты, связь, обратная связь, адрес, телефон, электронная почта, консультация, запрос, коммерческое предложение",
      },

      en: {
        warn_test: "The site is working in test mode",
        page_name_1: "Home",
        page_name_2: "About company",
        page_name_3: "Our destinations",
        page_name_4: "Gallery",
        page_name_5: "News",
        page_name_6: "Contacts",

        page_title_1: "About company",
        page_title_2: "Our destinations",
        page_title_3: "Our Gallery",
        page_title_4: "Our news",
        page_title_5: "Contact us",

        main_text_1: "About the holding",
        main_text_2:
          "Over the years, JIP has established itself as a reliable and responsible manufacturer whose products you can be sure of. Today the enterprise has one of the largest automated production complex in Central Asia",
        main_text_2_2:
          "We create new standards and trends, being responsible for industrialization. We are changing traditional business practices, increasing efficiency for customers, employees, partners and society. Trust us, the leading holding company, to progress and develop together.",
        main_text_3: "More about the holding",
        main_text_4: "Certificates",
        main_text_5: "Years on the market",
        main_text_6: "Enterprise specialists",
        main_text_7: "mln. $ investments involved",
        main_text_8: "International partners",
        main_text_9: "Our gallery",
        main_text_10:
          "Photos from the III International Forum PLUS in Tashkent",
        main_text_11: "Photos from Meta and Admixer Advertising in Tashkent",
        main_text_12: "Certificates",
        main_text_13: "News",
        main_text_14: "Contact Information",
        main_text_15: "Address:",
        main_text_16: "Phone number:",
        main_text_17: "Social media",
        main_text_18: "Tel/Fax:",
        main_text_19: "Feedback form",
        main_text_20: "Your name",
        main_text_21: "Phone number",
        main_text_22: "Messages",
        main_text_23: "Send",
        main_text_24: "Our partners",

        about_text_1: "Our team",
        about_text_2: "Our careers",
        about_text_3: "View more",

        gallery_text_1: "All Gallery",
        gallery_text_2: "Photo gallery",
        gallery_text_3: "Video gallery",

        inner_text_1: "You're the best new eco-friendly ride",
        inner_text_2:
          "We produce the best plastic products from three layers of plastic, we do everything comfortable for our customers",
        inner_text_3: "More about us",
        inner_text_4: "About Us",
        inner_text_5:
          "Find your smart and simple solution with the best overall economical rate!",
        inner_text_6:
          "Jahon Invest Plast company is a leading manufacturer of plastic goods in Uzbekistan. The company offers more than 300 products for home, garden and consumer consumption. Our products are widely in demand and are exported to Central Asian countries, which confirms their reliability and quality.",
        inner_text_7: "Production",
        inner_text_8:
          "T-shirts, Briefs and Boxers, T-shirts and Sleeveless Vests, Underwear",
        inner_text_9: "Thousands of people",
        inner_text_10: "Total number of employees",
        inner_text_11: "Detailed",
        inner_text_12: "WHY CHOOSE JIP",
        inner_text_13: "Bukhara region",
        inner_text_14:
          "In honor of the city of Bukhara, the birthplace of famous thinkers and preachers of the Holy Qur'an, it is called the center of Islamic culture of Bukhara region.",
        inner_text_15: "Number of refills",
        inner_text_16: "Feedback form",
        inner_text_17:
          "We describe any complex digital systems in terms of requirements and draw up detailed design documentation",
        inner_text_18: "Name",
        inner_text_19: "Phone number",
        inner_text_20: "Send",
        inner_text_21: "Locations",
        inner_text_22: "Phone number",
        inner_text_23: "Email",
        inner_text_24: "Social network",
        inner_text_25: "nnnn",
        inner_text_26: "nnnn",
        inner_text_27: "nnnn",
        inner_text_28: "nnnn",
        inner_text_29: "nnnn",

        news_text_1: "Other news",
        developer: "Website developed by NDC",
        designer: "Developed by ",
        count: "",
        policy: "© 2023 JIP GROUP",
        num_1: "1",
        num_2: "2",
        num_3: "3",
        num_4: "4",

        seo_index_title: "Jahon Invest Holding",
        seo_index_desc:
          "Jahon Invest Group is a leading holding company specializing in integrated solutions in the field of construction, development of residential complexes and production of PVC products and plastic products. We create modern living spaces, high-quality building materials and innovative PVC products, meeting the needs of our customers in the field of housing, industry and consumer goods. Our mission is to build long-term relationships with customers and create products that meet high standards of quality and reliability.",
        seo_index_keys:
          "construction, residential complexes, PVC products, plastic products, engineering solutions, building materials, infrastructure, living spaces, plastic products, industry, manufacturing holding, innovation, quality, reliability.",
        seo_directions_title: "Jahon Invest Holding | Directions",
        seo_directions_desc:
          "Jahon Invest Group is a leading holding company specializing in integrated solutions in the field of construction, development of residential complexes and production of PVC products and plastic products. Our subsidiaries are Modern City Construct, Premium Pipe Plast and Jahon Invest Plast.",
        seo_directions_keys:
          "Modern City Construct, Premium Pipe Plast, Jahon Invest Plast, construction, residential complexes, PVC products, plastic products, engineering solutions, building materials, infrastructure, living spaces, plastic products, industry, manufacturing holding",
        seo_about_title: "Jahon Invest Holding | About the company",
        seo_about_desc:
          "Learn more about Jahon Invest Group Holding, a leading company specializing in construction, development of residential complexes, production of PVC products and plastic products. We combine innovative technologies and a professional approach to create high-quality and reliable solutions that meet the needs of our customers in various industries and housing.",
        seo_about_keys:
          "Jahon Invest Group, construction, residential complexes, PVC products, plastic products, innovation, quality, reliability, engineering solutions, industry, development, building materials, housing construction",
        seo_gallery_title: "Jahon Invest Holding | Gallery",
        seo_gallery_desc:
          "Learn more about Jahon Invest Group Holding, a leading company specializing in construction, development of residential complexes, production of PVC products and plastic products. We combine innovative technologies and a professional approach to create high-quality and reliable solutions that meet the needs of our customers in various industries and housing.",
        seo_gallery_keys:
          "Jahon Invest Group, construction, residential complexes, PVC products, plastic products, innovation, quality, reliability, engineering solutions, industry, development, building materials, housing construction",
        seo_news_title: "Jahon Invest Holding | News",
        seo_news_desc:
          "Find out the latest news and events from the Jahon Invest Group holding. We regularly update our news to provide you with the most up-to-date information about our activities, new projects, achievements and innovations in the field of construction, residential complexes, production of PVC products and plastic products. Follow our news to keep up to date with the latest developments and successes of the company.",
        seo_news_keys:
          "news, events, Jahon Invest Group holding, construction, residential complexes, PVC products, plastic products, innovations, projects, achievements, updates",
        seo_contacts_title: "Jahon Invest Holding | Contacts",
        seo_contacts_desc:
          "Contact us for more information about our activities and services. Jahon Invest Group Holding offers a wide range of services in the field of construction, housing construction, production of PVC products and plastic products. Our contact information will help you to contact us for advice, request commercial offers or arrange a meeting. We are ready to answer all your questions and help you implement your projects.",
        seo_contacts_keys:
          "contacts, communication, feedback, address, phone, e-mail, consultation, inquiry, commercial offer",
      },
    },
  });

  vueApp.use(i18n);
});
