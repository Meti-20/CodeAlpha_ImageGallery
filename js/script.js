/**
 * MUGHNI — Islamic Visual Archive (مُغْنِي)
 * Pure Vanilla JavaScript (ES6+) Implementation
 */

"use strict";

/* ==========================================================================
   1. Curated Islamic Archive Dataset (33 Authenticated Visuals across 8 Collections)
   ========================================================================== */
const MUGHNI_ARCHIVE = [
  // --- 1. SACRED PLACES (4) ---
  {
    id: 2,
    title: "The Prophet's Mosque Canopy Courtyard",
    titleAr: "مظلات المسجد النبوي الشريف",
    collection: "Sacred Places",
    category: "Sanctuary",
    description: "Foldable architectural umbrellas opened across the expansive marble plaza of Al-Masjid an-Nabawi in Medina.",
    descriptionAr: "المظلات الهندسية المفتوحة عبر الساحات الرخامية الرحبة للمسجد النبوي الشريف في المدينة المنورة.",
    location: "Al-Masjid an-Nabawi, Medina",
    country: "Saudi Arabia",
    region: "Hejaz, Arabian Peninsula",
    era: "Historic / Modern Architectural Extension",
    tags: ["Medina", "Prophet's Mosque", "Canopy", "Sanctuary"],
    image: "https://i.pinimg.com/736x/c8/ba/c8/c8bac8ef07a98acdb55cb761c2b864ae.jpg",
    thumbnail: "https://i.pinimg.com/736x/c8/ba/c8/c8bac8ef07a98acdb55cb761c2b864ae.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "portrait"
  },
  {
    id: 3,
    title: "Dome of the Rock on the Moriah Esplanade",
    titleAr: "قبة الصخرة المشرفة في القدس",
    collection: "Sacred Places",
    category: "Shrine & Dome",
    description: "Octagonal Umayyad monument with glazed blue ceramic tiles and gilded dome rising above the sacred plateau.",
    descriptionAr: "المعلم الأموي المثمن بكسوته الخزفية الزرقاء وقبته المذهبة الشامخة في ساحات المسجد الأقصى.",
    location: "Al-Aqsa Compound, Al-Quds",
    country: "Palestine",
    region: "Levant",
    era: "Umayyad Era (691 CE)",
    tags: ["Al-Quds", "Dome of the Rock", "Umayyad", "Tilework"],
    image: "https://i.pinimg.com/1200x/b8/51/e8/b851e86c4c98d656c1045d6efab11c11.jpg",
    thumbnail: "https://i.pinimg.com/1200x/b8/51/e8/b851e86c4c98d656c1045d6efab11c11.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "wide"
  },
  {
    id: 4,
    title: "Historic Quba Mosque at Sunset",
    titleAr: "مسجد قباء التاريخي عند الغسق",
    collection: "Sacred Places",
    category: "Historical Mosque",
    description: "The first mosque in Islamic history, illuminated with soft golden lights against dusk skies.",
    descriptionAr: "أول مسجد أسس في الإسلام مضاء بأنواره الهادئة في سكون المساء بالمدينة المنورة.",
    location: "Medina",
    country: "Saudi Arabia",
    region: "Hejaz, Arabian Peninsula",
    era: "First Year of Hijrah (Foundational)",
    tags: ["Quba", "Medina", "Sacred Places", "Minarets"],
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1600&q=85",
    thumbnail: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=650&q=80",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://unsplash.com",
    featured: false,
    aspect: "square"
  },

  // --- 2. ISLAMIC ARCHITECTURE (5) ---
  {
    id: 5,
    title: "Cascading Domes of the Blue Mosque",
    titleAr: "قباب المسجد الأزرق المتدرجة",
    collection: "Islamic Architecture",
    category: "Ottoman Architecture",
    description: "Sedefkâr Mehmed Agha's monumental Ottoman domes and semi-domes flanked by minarets overlooking the Bosporus.",
    descriptionAr: "القباب العثمانية المتدرجة لمسجد السلطان أحمد والمآذن الشامخة المطلة على مضيق البوسفور.",
    location: "Istanbul",
    country: "Turkey",
    region: "Anatolia / Southeastern Europe",
    era: "Classical Ottoman (1616 CE)",
    tags: ["Ottoman", "Domes", "Istanbul", "Blue Mosque"],
    image: "https://i.pinimg.com/1200x/b6/7e/bd/b67ebddbe839c828ff6978c492297497.jpg",
    thumbnail: "https://i.pinimg.com/1200x/b6/7e/bd/b67ebddbe839c828ff6978c492297497.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: true,
    aspect: "landscape"
  },
  {
    id: 6,
    title: "Court of the Lions Muqarnas Arches",
    titleAr: "أقواس المقرنصات في باحة السباع بقصر الحمراء",
    collection: "Islamic Architecture",
    category: "Andalusian Architecture",
    description: "Slender marble columns supporting stilted arches with intricate stucco honeycomb carvings at the Alhambra.",
    descriptionAr: "الأعمدة الرخامية الرشيقة والأقواس الجصية المزخرفة بالمقرنصات في قصر الحمراء بغرناطة.",
    location: "Granada, Andalusia",
    country: "Spain",
    region: "Iberian Peninsula",
    era: "Nasrid Dynasty (14th Century)",
    tags: ["Alhambra", "Andalusia", "Muqarnas", "Nasrid"],
    image: "https://i.pinimg.com/736x/7b/ba/81/7bba816e8bd481be292eb0ee316e4ca9.jpg",
    thumbnail: "https://i.pinimg.com/736x/7b/ba/81/7bba816e8bd481be292eb0ee316e4ca9.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "portrait"
  },
  {
    id: 8,
    title: "Colonnade of the Grand Mosque",
    titleAr: "أروقة وأعمدة جامع الشيخ زايد الكبير",
    collection: "Islamic Architecture",
    category: "Contemporary Islamic Architecture",
    description: "White Sivec marble arches with lapis lazuli and mother-of-pearl floral inlays reflecting in water basins.",
    descriptionAr: "الأعمدة والأقواس الرخامية البيضاء المرصعة بالأحجار الكريمة المنعكسة على الأحواض المائية.",
    location: "Abu Dhabi",
    country: "United Arab Emirates",
    region: "Arabian Peninsula",
    era: "Contemporary (2007 CE)",
    tags: ["Arches", "Colonnade", "Marble", "Abu Dhabi"],
    image: "https://i.pinimg.com/736x/a3/b2/03/a3b20302be25d127199c50a81a896eb3.jpg",
    thumbnail: "https://i.pinimg.com/736x/a3/b2/03/a3b20302be25d127199c50a81a896eb3.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "wide"
  },
  // --- 3. QUR'AN & CALLIGRAPHY (4) ---
  {
    id: 10,
    title: "Gold-Illuminated Thuluth Manuscript Folio",
    titleAr: "مخطوطة قرآنية مذهبة بخط الثلث",
    collection: "Qur'an & Calligraphy",
    category: "Illuminated Manuscripts",
    description: "Classical Thuluth script bordered with intricate botanical arabesques and 24-karat gold leaf gilding.",
    descriptionAr: "صفحة مخطوطة بخط الثلث الرصين محاطة بالزخارف النباتية والتذهيب الدقيق.",
    location: "Museum Collection",
    country: "Turkey / Egypt",
    region: "Middle East",
    era: "Mamluk / Ottoman Heritage",
    tags: ["Calligraphy", "Thuluth", "Illumination", "Gold Leaf"],
    image: "https://i.pinimg.com/736x/62/de/9f/62de9f532482e16650243757ed65a4dd.jpg",
    thumbnail: "https://i.pinimg.com/736x/62/de/9f/62de9f532482e16650243757ed65a4dd.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "portrait"
  },
  {
    id: 12,
    title: "Master Calligrapher's Reed Pen & Ink",
    titleAr: "أدوات الخطاط التقليدية: القصب والدواة",
    collection: "Qur'an & Calligraphy",
    category: "Artisanal Practice",
    description: "Carved bamboo qalam, raw silk likka, and hand-ground soot ink used in traditional scribal transmission.",
    descriptionAr: "أقلام القصب المشذوبة يدوياً مع دواة الحبر الأسود التقليدي في مرسم الخط العربي.",
    location: "Traditional Calligraphy Atelier, Istanbul",
    country: "Turkey",
    region: "Anatolia",
    era: "Living Artistic Tradition",
    tags: ["Qalam", "Ink", "Artisan", "Tradition"],
    image: "https://i.pinimg.com/736x/98/79/71/9879713a35411cbbc9b2a47aee834681.jpg",
    thumbnail: "https://i.pinimg.com/736x/98/79/71/9879713a35411cbbc9b2a47aee834681.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://unsplash.com",
    featured: false,
    aspect: "square"
  },
  {
    id: 13,
    title: "Diwani Script Composition",
    titleAr: "لوحة بالخط الديواني المترابط",
    collection: "Qur'an & Calligraphy",
    category: "Calligraphic Art",
    description: "Flowing intertwined cursive Diwani letterforms gracefully sweeping across handmade cotton-fiber paper.",
    descriptionAr: "تكوين خطي بديع بالخط الديواني ذي الانحناءات المتدفقة والمتشابكة على ورق قطني عتيق.",
    location: "Cairo",
    country: "Egypt",
    region: "North Africa",
    era: "Ottoman Royal Court Lineage",
    tags: ["Diwani", "Calligraphy", "Cursive", "Arabesque"],
    image: "https://i.pinimg.com/736x/08/32/ae/0832ae714f8223fb940764e30f3cbb1c.jpg",
    thumbnail: "https://i.pinimg.com/736x/08/32/ae/0832ae714f8223fb940764e30f3cbb1c.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://unsplash.com",
    featured: false,
    aspect: "wide"
  },

  // --- 4. ISLAMIC GEOMETRY (4) ---
  {
    id: 14,
    title: "Twelve-Pointed Star Zillij Tilework",
    titleAr: "فسيفساء الزليج المغربي بنجمة اثني عشرية",
    collection: "Islamic Geometry",
    category: "Geometric Tessellation",
    description: "Hand-cut terracotta and glazed enamel mosaic pieces forming complex mathematical non-repeating symmetry.",
    descriptionAr: "زليج تقليدي مقطوع يدوياً يشكل نجوماً اثني عشرية في تناسق هندسي رياضي متناهي الدقة.",
    location: "Fez",
    country: "Morocco",
    region: "Maghreb, North Africa",
    era: "Marinid / Saadian Tradition",
    tags: ["Geometry", "Zillij", "Tessellation", "Morocco", "Stars"],
    image: "https://i.pinimg.com/736x/a4/5c/f6/a45cf64c50f4f025aefb4cbb73fa62d0.jpg",
    thumbnail: "https://i.pinimg.com/736x/a4/5c/f6/a45cf64c50f4f025aefb4cbb73fa62d0.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "portrait"
  },
  {
    id: 15,
    title: "Muqarnas Corbel Honeycomb Vault",
    titleAr: "قبة المقرنصات الخلوية المعمارية",
    collection: "Islamic Geometry",
    category: "Architectural Vaulting",
    description: "Three-dimensional geometric corbeling bridging rectangular rooms into dome transitions.",
    descriptionAr: "المقرنصات الهندسية ثلاثية الأبعاد التي تحول الفضاء المعماري إلى تحفة رياضية بديعة.",
    location: "Alhambra, Granada",
    country: "Spain",
    region: "Iberian Peninsula",
    era: "Nasrid Period (1380 CE)",
    tags: ["Muqarnas", "Vault", "Granada", "Geometry"],
    image: "https://i.pinimg.com/736x/15/57/29/155729d659a21eb4e9f45836e18effb8.jpg",
    thumbnail: "https://i.pinimg.com/736x/15/57/29/155729d659a21eb4e9f45836e18effb8.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "square"
  },
  {
    id: 16,
    title: "Symmetrical Arabesque Jali Lattice",
    titleAr: "نافذة المشربية الحجرية المزخرفة (جالي)",
    collection: "Islamic Geometry",
    category: "Stone Piercing",
    description: "Perforated stone lattice screen casting geometric light patterns onto historic courtyard flagstones.",
    descriptionAr: "شاشة حجرية مفرغة بنقوش هندسية ترشح الضوء وترسم ظلالاً متناظرة على بلاط الفناء.",
    location: "Fatehpur Sikri, Agra",
    country: "India",
    region: "South Asia",
    era: "Mughal Era (1571 CE)",
    tags: ["Jali", "Screen", "Mughal", "Geometry", "Lattice"],
    image: "https://i.pinimg.com/736x/b0/4b/ac/b04bace052ae188d2aeec7728fcacbb7.jpg",
    thumbnail: "https://i.pinimg.com/736x/b0/4b/ac/b04bace052ae188d2aeec7728fcacbb7.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "landscape"
  },
  {
    id: 17,
    title: "Girih Interlocking Rosette Ceiling",
    titleAr: "زخرفة الجره الهندسية على السقف الخشبي",
    collection: "Islamic Geometry",
    category: "Girih Woodwork",
    description: "Five geometric girih tiles assembled to create complex decagonal rosettes without overlapping joints.",
    descriptionAr: "عقد هندسي إسلامي من بلاطات الجره الخماسية لتشكيل نجوم عشارية على سقف خشبي معشق.",
    location: "Yazd",
    country: "Iran",
    region: "Persian Plateau",
    era: "Timurid / Safavid Lineage",
    tags: ["Girih", "Ceiling", "Decagram", "Mathematics"],
    image: "https://i.pinimg.com/736x/a4/76/0e/a4760e0594ad17d9dd422c61b65f036d.jpg",
    thumbnail: "https://i.pinimg.com/736x/a4/76/0e/a4760e0594ad17d9dd422c61b65f036d.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "wide"
  },

  // --- 5. RAMADAN (4) ---
  {
    id: 18,
    title: "Traditional Brass Fanous Lantern",
    titleAr: "فانوس رمضان النحاسي المضاء",
    collection: "Ramadan",
    category: "Cultural Illumination",
    description: "Handcrafted tin and colored glass lantern glowing with warm candlelight for the evening meal of Iftar.",
    descriptionAr: "فانوس رمضاني تقليدي مصنوع يدوياً من النحاس والزجاج الملون يضيء موائد الإفطار.",
    location: "Khan el-Khalili, Cairo",
    country: "Egypt",
    region: "North Africa",
    era: "Fatimid Cultural Heritage",
    tags: ["Ramadan", "Fanous", "Lantern", "Iftar", "Cairo"],
    image: "https://i.pinimg.com/736x/8e/5b/07/8e5b074d6b2c045e274888c7a349f364.jpg",
    thumbnail: "https://i.pinimg.com/736x/8e/5b/07/8e5b074d6b2c045e274888c7a349f364.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "portrait"
  },
  {
    id: 19,
    title: "Crescent Moon over Minaret Silhouette",
    titleAr: "هلال الشهر الفضيل فوق هامة المئذنة",
    collection: "Ramadan",
    category: "Celestial Observation",
    description: "Slender new moon waxing above an illuminated stone minaret, marking the arrival of the blessed month.",
    descriptionAr: "هلال أول الشهر يسطع في سماء الغروب إلى جوار مئذنة أثرية معلناً حلول شهر الصيام.",
    location: "Istanbul",
    country: "Turkey",
    region: "Southeastern Europe",
    era: "Contemporary Observation",
    tags: ["Crescent", "Moon", "Minaret", "Ramadan"],
    image: "https://i.pinimg.com/736x/3a/b0/50/3ab05096c7d95517566847bec104a711.jpg",
    thumbnail: "https://i.pinimg.com/736x/3a/b0/50/3ab05096c7d95517566847bec104a711.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "landscape"
  },
  {
    id: 20,
    title: "Medina Dates & Pure Water for Iftar",
    titleAr: "تمر المدينة النبوية والماء لكسر الصيام",
    collection: "Ramadan",
    category: "Prophetic Tradition",
    description: "Authentic dark Ajwa dates presented with clear spring water according to classical sunnah tradition.",
    descriptionAr: "تمور العجوة المباركة مع الماء النقي لكسر الصيام اقتداءً بالهدي النبوي الشريف.",
    location: "Medina",
    country: "Saudi Arabia",
    region: "Hejaz",
    era: "Living Sunnah Tradition",
    tags: ["Dates", "Ajwa", "Iftar", "Tradition"],
    image: "https://i.pinimg.com/736x/bf/72/c1/bf72c11fbfbdf818dfbcef25a228d2d8.jpg",
    thumbnail: "https://i.pinimg.com/736x/bf/72/c1/bf72c11fbfbdf818dfbcef25a228d2d8.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "square"
  },
  {
    id: 21,
    title: "Night Prayer Rows during Taraweeh",
    titleAr: "صفوف المصلين في صلاة التراويح",
    collection: "Ramadan",
    category: "Communal Devotion",
    description: "Devout worshippers standing in synchronized rows for nightly Qur'anic recitation during the last ten nights.",
    descriptionAr: "صفوف متراصة من المصلين في سكينة وخشوع خلال صلاة القيام في الليالي الفاضلة.",
    location: "Amman",
    country: "Jordan",
    region: "Levant",
    era: "Contemporary Worship",
    tags: ["Prayer", "Taraweeh", "Congregation", "Ramadan"],
    image: "https://i.pinimg.com/736x/ba/3a/db/ba3adb17b7b40dd369507da0a095225b.jpg",
    thumbnail: "https://i.pinimg.com/736x/ba/3a/db/ba3adb17b7b40dd369507da0a095225b.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "wide"
  },

  // --- 6. HAJJ & UMRAH (4) ---
  {
    id: 22,
    title: "Tawaf of Unity around the Sacred Kaaba",
    titleAr: "طواف الوحدة حول الكعبة المشرفة",
    collection: "Hajj & Umrah",
    category: "Pilgrimage Ritual",
    description: "Pilgrims from every continent circumambulating in concentric flowing circles dressed in simple white Ihram.",
    descriptionAr: "جموع الحجيج والمعتمرين في طواف مهيب حول الكعبة بلباس الإحرام الأبيض الموحد.",
    location: "Makkah",
    country: "Saudi Arabia",
    region: "Hejaz",
    era: "Perennial Pilgrimage Rite",
    tags: ["Hajj", "Umrah", "Tawaf", "Pilgrimage", "Ihram"],
    image: "https://i.pinimg.com/736x/68/fb/ec/68fbecaa8c107a54479a2dd0fcfdf98d.jpg",
    thumbnail: "https://i.pinimg.com/736x/68/fb/ec/68fbecaa8c107a54479a2dd0fcfdf98d.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pintrest.com",
    featured: false,
    aspect: "landscape"
  },
  {
    id: 23,
    title: "The Tent City of Mina Valley",
    titleAr: "خيام وادي منى المبارك وقت الغروب",
    collection: "Hajj & Umrah",
    category: "Pilgrimage Station",
    description: "Over one hundred thousand fireproof air-conditioned white tents filling the desert valley during the days of Tashreeq.",
    descriptionAr: "خيام منى البيضاء تملأ جنبات الوادي المبارك لإيواء ضيوف الرحمن في أيام التشريق.",
    location: "Mina Valley, Makkah",
    country: "Saudi Arabia",
    region: "Hejaz",
    era: "Historic Pilgrimage Infrastructure",
    tags: ["Mina", "Hajj", "Pilgrimage", "Tents"],
    image: "https://i.pinimg.com/736x/3b/78/c7/3b78c782bbcd245c24fdce59d07a32c4.jpg",
    thumbnail: "https://i.pinimg.com/736x/3b/78/c7/3b78c782bbcd245c24fdce59d07a32c4.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "wide"
  },
  {
    id: 24,
    title: "Supplication at the Plain of Arafat",
    titleAr: "يوم عرفة العظيم: الوقوف والدعاء",
    collection: "Hajj & Umrah",
    category: "Day of Arafah",
    description: "The pivotal summit of Hajj where millions gather from sunrise to sunset on the Plain of Arafat in supplication.",
    descriptionAr: "المشهد المهيب لوقوف الحجيج بصعيد عرفات الطاهر في تضرع ودعاء واستغفار.",
    location: "Mount Arafat, Makkah",
    country: "Saudi Arabia",
    region: "Hejaz",
    era: "Foundational Pillar of Hajj",
    tags: ["Arafat", "Hajj", "Supplication", "Dua"],
    image: "https://i.pinimg.com/1200x/f2/37/f5/f237f59049708a7e04a4ba26966db8be.jpg",
    thumbnail: "https://i.pinimg.com/1200x/f2/37/f5/f237f59049708a7e04a4ba26966db8be.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pintrest.com",
    featured: false,
    aspect: "portrait"
  },
  {
    id: 25,
    title: "Pilgrims Entering the Rawdah Mubarak",
    titleAr: "الروضة الشريفة في المسجد النبوي",
    collection: "Hajj & Umrah",
    category: "Sanctuary",
    description: "Peaceful pilgrims paying respects at the green-carpeted noble garden between the Prophet's pulpit and chamber.",
    descriptionAr: "سكينة المصلين والزائرين في الروضة الشريفة بين المنبر النبوي والحجرة النبوية المطهرة.",
    location: "Medina",
    country: "Saudi Arabia",
    region: "Hejaz",
    era: "Noble Prophetic Sanctuary",
    tags: ["Medina", "Rawdah", "Prophet", "Pilgrims"],
    image: "https://i.pinimg.com/1200x/b7/da/1c/b7da1cd46b0f9056e68819baf43f3c3c.jpg",
    thumbnail: "https://i.pinimg.com/1200x/b7/da/1c/b7da1cd46b0f9056e68819baf43f3c3c.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "square"
  },

  // --- 7. ISLAMIC WORLD (4) ---
  {
    id: 26,
    title: "Madrassas of Registan Square",
    titleAr: "مدارس ساحة ريجستان التاريخية في سمرقند",
    collection: "Islamic World",
    category: "Central Asian Heritage",
    description: "Ulugh Beg and Sher-Dor madrassas with soaring ceramic minarets and mosaic tilework along the Silk Road.",
    descriptionAr: "المدارس الإسلامية الشامخة في سمرقند بزخارفها الفسيفسائية الفاخرة على مسار طريق الحرير.",
    location: "Samarkand",
    country: "Uzbekistan",
    region: "Central Asia",
    era: "Timurid Renaissance (15th–17th Century)",
    tags: ["Central Asia", "Samarkand", "Silk Road", "Timurid"],
    image: "https://i.pinimg.com/736x/0a/b6/b9/0ab6b995c67648c1c87894b98cce126d.jpg",
    thumbnail: "https://i.pinimg.com/736x/0a/b6/b9/0ab6b995c67648c1c87894b98cce126d.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "square"
  },
  {
    id: 27,
    title: "Sandstone Courtyard of Badshahi Mosque",
    titleAr: "فناء مسجد بادشاهي الرخامي في لاهور",
    collection: "Islamic World",
    category: "Mughal Heritage",
    description: "Red sandstone portal and carved marble domes overlooking the vast historic courtyard built by Aurangzeb.",
    descriptionAr: "الصرح المغولي الشامخ بالحجر الرملي الأحمر والقباب الرخامية البيضاء في لاهور.",
    location: "Lahore",
    country: "Pakistan",
    region: "South Asia",
    era: "Mughal Empire (1673 CE)",
    tags: ["Mughal", "Pakistan", "Sandstone", "Badshahi"],
    image: "https://i.pinimg.com/1200x/f4/e4/5b/f4e45bdabffe6f21d76bf0a1e0b3d7a6.jpg",
    thumbnail: "https://i.pinimg.com/1200x/f4/e4/5b/f4e45bdabffe6f21d76bf0a1e0b3d7a6.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "landscape"
  },
  {
    id: 28,
    title: "Koutoubia Minaret Against the Atlas",
    titleAr: "مئذنة جامع الكتبية وجبال الأطلس",
    collection: "Islamic World",
    category: "Almohad Heritage",
    description: "Sandstone minaret rising 77 meters crowned with copper orbs and arched decorative bands.",
    descriptionAr: "مئذنة الكتبية الشهيرة في مراكش بكراتها النحاسية وجدرانها الحجرية الأندلسية المغربية.",
    location: "Marrakech",
    country: "Morocco",
    region: "North Africa",
    era: "Almohad Dynasty (1195 CE)",
    tags: ["Morocco", "Almohad", "Minaret", "Marrakech"],
    image: "https://i.pinimg.com/1200x/db/72/3c/db723c03a7e6259a24fd11fe0d6db785.jpg",
    thumbnail: "https://i.pinimg.com/1200x/db/72/3c/db723c03a7e6259a24fd11fe0d6db785.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "wide"
  },
  {
    id: 29,
    title: "Grand Chandelier of Sultan Qaboos Mosque",
    titleAr: "ثريا جامع السلطان قابوس الأكبر",
    collection: "Islamic World",
    category: "Modern Craftsmanship",
    description: "Fourteen-meter Swarovski crystal chandelier illuminating hand-woven Persian prayer carpet under central dome.",
    descriptionAr: "الثريا البلورية الضخمة تضيء السجادة الفارسية المحبوكة تحت القبة المركزية لجامع السلطان قابوس.",
    location: "Muscat",
    country: "Oman",
    region: "Arabian Peninsula",
    era: "Contemporary (2001 CE)",
    tags: ["Oman", "Chandelier", "Dome", "Muscat"],
    image: "https://i.pinimg.com/1200x/05/8d/90/058d9051fa8201936a376181ee48c18e.jpg",
    thumbnail: "https://i.pinimg.com/1200x/05/8d/90/058d9051fa8201936a376181ee48c18e.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "portrait"
  },

  // --- 8. ISLAMIC ETHIOPIA (4) ---
  {
    id: 30,
    title: "Historic Jamia Mosque of Harar Jugol",
    titleAr: "مسجد الجامع التاريخي في هرر جوغول",
    collection: "Islamic Ethiopia",
    category: "East African Heritage",
    description: "The primary central mosque of the UNESCO World Heritage walled city of Harar, serving as a hub for regional Islamic scholarship.",
    descriptionAr: "المسجد الجامع الرئيسي في مدينة هرر التاريخية المحصورة بالأسوار والمسجلة في التراث العالمي.",
    location: "Harar Jugol",
    country: "Ethiopia",
    region: "Horn of Africa",
    era: "10th–16th Century Lineage",
    tags: ["Ethiopia", "Harar", "Horn of Africa", "Historic Mosque", "UNESCO"],
    image: "https://i.pinimg.com/1200x/dc/44/a0/dc44a01dbcac8a49d81a8b476a90c270.jpg",
    thumbnail: "https://i.pinimg.com/1200x/dc/44/a0/dc44a01dbcac8a49d81a8b476a90c270.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: true,
    aspect: "landscape"
  },
  {
    id: 31,
    title: "Traditional Harari Heritage Interior (Gey Gar)",
    titleAr: "البيت الهرري التقليدي (غي غار)",
    collection: "Islamic Ethiopia",
    category: "Vernacular Architecture",
    description: "Traditional raised sitting platforms (nadaba) and decorative wall niches (taqet) holding handcrafted ceramics and Qur'ans.",
    descriptionAr: "العمارة الداخلية للبيت الهرري بمصاطب الجلوس (الندبة) والكوّات الجدارية المخصصة للمصاحف.",
    location: "Harar",
    country: "Ethiopia",
    region: "Horn of Africa",
    era: "Traditional Harari Urban Culture",
    tags: ["Harar", "Gey Gar", "Interior", "Ethiopia", "Cultural Heritage"],
    image: "https://i.pinimg.com/736x/51/c3/18/51c318098d89a0bef44350f0bf6d7a77.jpg",
    thumbnail: "https://i.pinimg.com/736x/51/c3/18/51c318098d89a0bef44350f0bf6d7a77.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "portrait"
  },
  {
    id: 32,
    title: "Ancient Ethiopian Arabic & Ajami Manuscript",
    titleAr: "مخطوط إسلامي إثيوبي قديم بالعربية والعجمية",
    collection: "Islamic Ethiopia",
    category: "Manuscript Tradition",
    description: "Centuries-old leather-bound parchment text featuring Arabic script with indigenous Harari and Oromo marginal commentaries.",
    descriptionAr: "مخطوط جلدي عتيق مدون بالخط العربي وحواشٍ لغوية محلية من التراث العلمي لعلماء هرر.",
    location: "Harar / Wallo Heritage Collection",
    country: "Ethiopia",
    region: "Horn of Africa",
    era: "17th–18th Century CE",
    tags: ["Manuscripts", "Ethiopia", "Ajami", "Scholarship", "Harar"],
    image: "https://i.pinimg.com/1200x/6f/49/ce/6f49ce6cdd5a587260a4387b8e2b80c4.jpg",
    thumbnail: "https://i.pinimg.com/1200x/6f/49/ce/6f49ce6cdd5a587260a4387b8e2b80c4.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "square"
  },
  {
    id: 33,
    title: "Walled Gates of Harar Jugol (Buda Gate)",
    titleAr: "بوابات أسوار هرر التاريخية (بوابة بودا)",
    collection: "Islamic Ethiopia",
    category: "Fortified Heritage",
    description: "Thick historic stone gatehouses built by Emir Nur ibn Mujahid guarding the ancient holy walled city.",
    descriptionAr: "البوابات الحجرية الحصينة لأسوار هرر التاريخية التي بناها الأمير نور بن مجاهد في القرن السادس عشر.",
    location: "Harar Jugol",
    country: "Ethiopia",
    region: "Horn of Africa",
    era: "Adal Sultanate Heritage (16th Century)",
    tags: ["Harar", "Buda Gate", "Fortification", "Ethiopia", "History"],
    image: "https://i.pinimg.com/1200x/bc/73/e2/bc73e269217d6d7e6fa8a92397c31541.jpg",
    thumbnail: "https://i.pinimg.com/1200x/bc/73/e2/bc73e269217d6d7e6fa8a92397c31541.jpg",
    source: "Photographic Archive via Unsplash",
    sourceUrl: "https://pinterest.com",
    featured: false,
    aspect: "wide"
  }
];

/* ==========================================================================
   2. Bilingual Translation Dictionary (English / Arabic)
   ========================================================================== */
const I18N = {
  en: {
    brandSubtitle: "Islamic Visual Archive",
    navExplore: "Explore",
    navCollections: "Collections",
    navMyCollection: "My Collection",
    navAbout: "About",
    heroLabel: "ISLAMIC VISUAL ARCHIVE",
    heroTitle: "Discover the beauty, heritage and visual culture of the Islamic world.",
    heroSub: "MUGHNI curates authentic visual collections of sacred architecture, calligraphy, geometric traditions, historical sanctuaries, and cultural heritage from Andalusia to the historic walled city of Harar.",
    ctaExplore: "Explore the Archive",
    ctaDiscover: "✦ Discover Something New",
    featuredLabel: "FEATURED ARCHIVE MASTERPIECE",
    featuredBtnFullscreen: "View Fullscreen",
    featuredBtnExplore: "Explore Collection",
    collectionsTitle: "Curated Visual Collections",
    collectionsOverline: "EXPLORE THEMATIC ARCHIVES",
    searchPlaceholder: "Search title, location, category, tag, or country...",
    viewGrid: "Grid",
    viewMasonry: "Masonry",
    viewEditorial: "Editorial",
    sortFeatured: "Featured Masterpieces",
    sortAZ: "Title (A → Z)",
    sortZA: "Title (Z → A)",
    sortCollection: "Collection",
    sortNewest: "Newest Addition",
    filterAll: "All Collections",
    filterSacred: "Sacred Places",
    filterArchitecture: "Islamic Architecture",
    filterCalligraphy: "Qur'an & Calligraphy",
    filterGeometry: "Islamic Geometry",
    filterRamadan: "Ramadan",
    filterHajj: "Hajj & Umrah",
    filterWorld: "Islamic World",
    filterEthiopia: "Islamic Ethiopia",
    resultsCount: "{count} visuals in archive",
    resultsSearch: "{count} visuals matching \"{query}\"",
    resultsCollection: "{count} visuals in {name}",
    resultsSaved: "{count} visuals saved in My Collection",
    emptyTitle: "No visuals match your search",
    emptySub: "Try using more general keywords like 'mosque', 'Harar', 'calligraphy', or 'Makkah'.",
    emptyReset: "Reset All Filters",
    emptyFavTitle: "Your collection is empty",
    emptyFavSub: "Save visuals you want to return to later by clicking the heart icon on any archive card.",
    emptyFavAction: "Explore the Archive",
    btnSaved: "Saved",
    btnSave: "Save",
    compareReady: "Compare ({count})",
    compareTitle: "Visual Comparison",
    compareExit: "Close Comparison",
    compareAttrTitle: "Title",
    compareAttrLocation: "Location",
    compareAttrCountry: "Country",
    compareAttrEra: "Era",
    compareAttrCollection: "Collection",
    compareAttrCategory: "Category",
    compareAttrTags: "Tags",
    lbCounter: "{current} / {total}",
    lbClose: "Close Lightbox (Esc)",
    lbPrev: "Previous Visual (←)",
    lbNext: "Next Visual (→)",
    lbSlideshow: "Slideshow",
    lbPause: "Pause",
    lbDownload: "Download",
    lbShare: "Share",
    lbLink: "Copy Link",
    lbZoomReset: "1x",
    toastSaved: "Saved to My Collection",
    toastRemoved: "Removed from My Collection",
    toastCopied: "Direct visual link copied to clipboard",
    toastCompareAdded: "Added to comparison ({count}/2)",
    toastCompareMax: "You can compare a maximum of 2 visuals",
    toastThemeDark: "Switched to Dark Theme",
    toastThemeLight: "Switched to Light Theme",
    toastLangAr: "تم التبديل إلى الواجهة العربية",
    toastLangEn: "Switched to English interface",
    inspirationQuote: "\"Unquestionably, by the remembrance of Allah hearts are assured.\"",
    inspirationCite: "Qur'an — Surah Ar-Ra'd (13:28)",
    footerDesc: "MUGHNI is a non-commercial digital visual repository dedicated to preserving and exploring the architectural, calligraphic, and geometric heritage of Islamic visual culture worldwide.",
    techNote: "Built with HTML5, CSS3 & Vanilla JavaScript"
  },
  ar: {
    brandSubtitle: "أرشيف المرئيات الإسلامية",
    navExplore: "استكشف",
    navCollections: "المجموعات",
    navMyCollection: "مجموعتي",
    navAbout: "عن الأرشيف",
    heroLabel: "أرشيف المرئيات الإسلامية",
    heroTitle: "اكتشف الجمال، والتراث، والثقافة البصرية للعالم الإسلامي.",
    heroSub: "يجمع أرشيف مُغْنِي مجموعات بصرية موثقة من العمارة المقدسة، وفنون الخط، والزخارف الهندسية، والتراث الإسلامي العريق من الأندلس وحتى مدينة هرر التاريخية.",
    ctaExplore: "تصفح الأرشيف",
    ctaDiscover: "✦ اكتشف عملاً جديداً",
    featuredLabel: "عمل أرشيفي مميز",
    featuredBtnFullscreen: "عرض بالشاشة الكاملة",
    featuredBtnExplore: "استكشف المجموعة",
    collectionsTitle: "المجموعات البصرية المختارة",
    collectionsOverline: "استكشف المحاور الفنية",
    searchPlaceholder: "ابحث بالعنوان، أو المكان، أو التصنيف، أو البلد...",
    viewGrid: "شبكة",
    viewMasonry: "حر متداخل",
    viewEditorial: "تحريري واسع",
    sortFeatured: "الأعمال المميزة",
    sortAZ: "العنوان (أ ← ي)",
    sortZA: "العنوان (ي ← أ)",
    sortCollection: "المجموعة",
    sortNewest: "الأحدث إضافة",
    filterAll: "جميع المجموعات",
    filterSacred: "الأماكن المقدسة",
    filterArchitecture: "العمارة الإسلامية",
    filterCalligraphy: "القرآن والخط العربي",
    filterGeometry: "الهندسة الإسلامية",
    filterRamadan: "رمضان المبارك",
    filterHajj: "الحج والعمرة",
    filterWorld: "العالم الإسلامي",
    filterEthiopia: "إثيوبيا الإسلامية",
    resultsCount: "{count} عملاً بصرياً في الأرشيف",
    resultsSearch: "{count} عملاً يطابق \"{query}\"",
    resultsCollection: "{count} عملاً في {name}",
    resultsSaved: "{count} عملاً محفوظاً في مجموعتي",
    emptyTitle: "لم يتم العثور على نتائج مطابقة",
    emptySub: "جرب استخدام مصطلحات بحث عامة مثل 'مسجد'، 'هرر'، 'محراب'، أو 'الكعبة'.",
    emptyReset: "إعادة ضبط المرشحات",
    emptyFavTitle: "مجموعتك الخاصة فارغة حالياً",
    emptyFavSub: "احفظ الأعمال البصرية التي ترغب في الرجوع إليها بالضغط على أيقونة الإعجاب في أي بطاقة.",
    emptyFavAction: "تصفح الأرشيف الآن",
    btnSaved: "محفوظ",
    btnSave: "حفظ",
    compareReady: "مقارنة ({count})",
    compareTitle: "مقارنة بصرية بين عملين",
    compareExit: "إغلاق المقارنة",
    compareAttrTitle: "العنوان",
    compareAttrLocation: "الموقع",
    compareAttrCountry: "البلد",
    compareAttrEra: "الحقبة التاريخية",
    compareAttrCollection: "المجموعة",
    compareAttrCategory: "التصنيف",
    compareAttrTags: "الوسوم",
    lbCounter: "{current} من {total}",
    lbClose: "إغلاق (Esc)",
    lbPrev: "العمل السابق (←)",
    lbNext: "العمل التالي (→)",
    lbSlideshow: "عرض تلقائي",
    lbPause: "إيقاف",
    lbDownload: "تحميل",
    lbShare: "مشاركة",
    lbLink: "نسخ الرابط",
    lbZoomReset: "1x",
    toastSaved: "تم الحفظ في مجموعتي",
    toastRemoved: "تمت الإزالة من مجموعتي",
    toastCopied: "تم نسخ رابط العمل البصري إلى الحافظة",
    toastCompareAdded: "أضيف للمقارنة ({count}/2)",
    toastCompareMax: "يمكنك مقارنة عملين بصريين كحد أقصى",
    toastThemeDark: "تم التبديل إلى المظهر الداكن",
    toastThemeLight: "تم التبديل إلى المظهر الفاتح",
    toastLangAr: "تم التبديل إلى الواجهة العربية",
    toastLangEn: "Switched to English interface",
    inspirationQuote: "«أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ»",
    inspirationCite: "القرآن الكريم — سورة الرعد (الآية 28)",
    footerDesc: "مُغْنِي منصة أرشيفية غير تجارية مكرسة لتوثيق واستكشاف روائع العمارة، والخط، والتراث البصري للحضارة الإسلامية حول العالم.",
    techNote: "مبني باستخدام تقنيات الويب القياسية: HTML5 وCSS3 وجافاسكريبت المجردة"
  }
};

/* ==========================================================================
   3. Application State
   ========================================================================== */
const state = {
  images: [...MUGHNI_ARCHIVE],
  filteredImages: [...MUGHNI_ARCHIVE],
  currentIndex: 0,
  activeCollection: "All",
  searchQuery: "",
  sortBy: "featured",
  viewMode: "grid", // 'grid' | 'masonry' | 'editorial'
  favorites: [],
  comparison: [], // max 2 IDs
  theme: "light",
  language: "en", // 'en' | 'ar'
  slideshowActive: false,
  slideshowTimer: null,
  slideshowInterval: 3500,
  zoomLevel: 1,
  minZoom: 1,
  maxZoom: 3,
  zoomStep: 0.5,
  isDragging: false,
  dragStart: { x: 0, y: 0 },
  panPosition: { x: 0, y: 0 },
  touchStartX: 0,
  touchStartY: 0,
  lightboxOpen: false,
  lastFocusedElement: null
};

/* ==========================================================================
   4. LocalStorage Helper Keys
   ========================================================================== */
const STORAGE = {
  FAVORITES: "mughni_favorites_v1",
  THEME: "mughni_theme_v1",
  LANG: "mughni_lang_v1",
  VIEW: "mughni_view_v1"
};

function loadStoredState() {
  // Theme
  try {
    const savedTheme = localStorage.getItem(STORAGE.THEME);
    if (savedTheme === "dark" || savedTheme === "light") {
      state.theme = savedTheme;
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      state.theme = prefersDark ? "dark" : "light";
    }
  } catch (e) {
    state.theme = "light";
  }

  // Language
  try {
    const savedLang = localStorage.getItem(STORAGE.LANG);
    if (savedLang === "ar" || savedLang === "en") {
      state.language = savedLang;
    }
  } catch (e) {
    state.language = "en";
  }

  // View Mode
  try {
    const savedView = localStorage.getItem(STORAGE.VIEW);
    if (["grid", "masonry", "editorial"].includes(savedView)) {
      state.viewMode = savedView;
    }
  } catch (e) {
    state.viewMode = "grid";
  }

  // Favorites
  try {
    const savedFavs = localStorage.getItem(STORAGE.FAVORITES);
    if (savedFavs) {
      const parsed = JSON.parse(savedFavs);
      if (Array.isArray(parsed)) state.favorites = parsed;
    }
  } catch (e) {
    state.favorites = [];
  }
}

function saveTheme(theme) {
  try { localStorage.setItem(STORAGE.THEME, theme); } catch(e){}
}

function saveLang(lang) {
  try { localStorage.setItem(STORAGE.LANG, lang); } catch(e){}
}

function saveView(view) {
  try { localStorage.setItem(STORAGE.VIEW, view); } catch(e){}
}

function saveFavorites() {
  try { localStorage.setItem(STORAGE.FAVORITES, JSON.stringify(state.favorites)); } catch(e){}
}

/* ==========================================================================
   5. Internationalization & RTL Controller
   ========================================================================== */
function t(key, vars = {}) {
  const dict = I18N[state.language] || I18N.en;
  let text = dict[key] || I18N.en[key] || "";
  for (const [vKey, vVal] of Object.entries(vars)) {
    text = text.replace(new RegExp(`\\{${vKey}\\}`, "g"), vVal);
  }
  return text;
}

function applyLanguage(lang, notify = true) {
  state.language = lang;
  saveLang(lang);

  const isAr = lang === "ar";
  document.documentElement.lang = isAr ? "ar" : "en";
  document.documentElement.dir = isAr ? "rtl" : "ltr";

  // Update static UI Elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key) el.textContent = t(key);
  });

  // Update Placeholders
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.placeholder = t("searchPlaceholder");

  // Update Language Button label
  const langToggleBtn = document.getElementById("langToggleBtn");
  if (langToggleBtn) {
    langToggleBtn.textContent = isAr ? "English" : "العربية";
  }
  const mobileLangToggleBtn = document.getElementById("mobileLangToggleBtn");
  if (mobileLangToggleBtn) {
    mobileLangToggleBtn.textContent = isAr ? "English" : "العربية";
  }

  // Update Compare button text
  updateCompareHeaderButton();

  // Re-render gallery & collections
  renderCollections();
  filterAndSortImages();
  renderGallery();

  if (notify) {
    showToast(t(isAr ? "toastLangAr" : "toastLangEn"));
  }
}

function toggleLanguage() {
  applyLanguage(state.language === "en" ? "ar" : "en", true);
}

/* ==========================================================================
   6. Theme Controller
   ========================================================================== */
function applyTheme(theme, notify = true) {
  state.theme = theme;
  saveTheme(theme);
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  if (notify) {
    showToast(t(theme === "dark" ? "toastThemeDark" : "toastThemeLight"));
  }
}

function toggleTheme() {
  applyTheme(state.theme === "dark" ? "light" : "dark", true);
}

/* ==========================================================================
   7. View Mode Controller (Grid, Masonry, Editorial)
   ========================================================================== */
function setViewMode(mode) {
  if (!["grid", "masonry", "editorial"].includes(mode)) return;
  state.viewMode = mode;
  saveView(mode);

  const galleryGrid = document.getElementById("galleryGrid");
  if (galleryGrid) {
    galleryGrid.className = `gallery-grid view-${mode}`;
  }

  document.querySelectorAll(".view-mode-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-view") === mode);
  });

  renderGallery();
}

/* ==========================================================================
   8. Favorites / My Collection Controller
   ========================================================================== */
function isFavorite(id) {
  return state.favorites.includes(Number(id));
}

function toggleFavorite(id, event) {
  if (event) event.stopPropagation();
  const numId = Number(id);
  const found = state.images.find(img => img.id === numId);
  const title = (state.language === "ar" && found?.titleAr) ? found.titleAr : (found?.title || "Visual");

  if (isFavorite(numId)) {
    state.favorites = state.favorites.filter(fId => fId !== numId);
    showToast(`${t("toastRemoved")}: ${title}`);
  } else {
    state.favorites.push(numId);
    showToast(`${t("toastSaved")}: ${title}`);
  }

  saveFavorites();
  updateFavoritesBadges();

  if (state.activeCollection === "Favorites") {
    filterAndSortImages();
    renderGallery();
  } else {
    updateCardFavButtons(numId);
  }

  if (state.lightboxOpen && state.filteredImages[state.currentIndex]?.id === numId) {
    syncLightboxFavoriteButton();
  }
}

function updateFavoritesBadges() {
  const count = state.favorites.length;
  const headerFavBadge = document.getElementById("headerFavBadge");
  if (headerFavBadge) headerFavBadge.textContent = count;
  const mobileFavBadge = document.getElementById("mobileFavBadge");
  if (mobileFavBadge) mobileFavBadge.textContent = count;
}

function updateCardFavButtons(id) {
  const fav = isFavorite(id);
  document.querySelectorAll(`.card-action-btn.fav-btn[data-id="${id}"]`).forEach(btn => {
    btn.classList.toggle("active", fav);
    btn.setAttribute("aria-label", fav ? t("btnSaved") : t("btnSave"));
  });
}

function syncLightboxFavoriteButton() {
  const favBtn = document.getElementById("lightboxFavBtn");
  if (!favBtn) return;
  const curr = state.filteredImages[state.currentIndex];
  if (!curr) return;
  const fav = isFavorite(curr.id);

  favBtn.classList.toggle("active", fav);
  favBtn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="${fav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
    <span>${fav ? t("btnSaved") : t("btnSave")}</span>
  `;
}

/* ==========================================================================
   9. Visual Comparison Controller
   ========================================================================== */
function toggleComparison(id, event) {
  if (event) event.stopPropagation();
  const numId = Number(id);

  if (state.comparison.includes(numId)) {
    state.comparison = state.comparison.filter(cId => cId !== numId);
  } else {
    if (state.comparison.length >= 2) {
      showToast(t("toastCompareMax"), null, true);
      return;
    }
    state.comparison.push(numId);
    showToast(t("toastCompareAdded", { count: state.comparison.length }));
  }

  updateCompareButtons();
  updateCompareHeaderButton();

  // If two items are selected, automatically trigger or update comparison
  if (state.comparison.length === 2) {
    openCompareModal();
  }
}

function updateCompareButtons() {
  document.querySelectorAll(".card-action-btn.compare-btn").forEach(btn => {
    const id = Number(btn.getAttribute("data-id"));
    btn.classList.toggle("active", state.comparison.includes(id));
  });
}

function updateCompareHeaderButton() {
  const compBtn = document.getElementById("headerCompareBtn");
  if (!compBtn) return;
  const count = state.comparison.length;
  compBtn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="3" width="9" height="18" rx="2"></rect>
      <rect x="13" y="3" width="9" height="18" rx="2"></rect>
    </svg>
    <span>${t("compareReady", { count })}</span>
  `;
  compBtn.classList.toggle("compare-ready", count > 0);
}

function openCompareModal() {
  if (state.comparison.length < 2) {
    showToast(t("toastCompareAdded", { count: state.comparison.length }));
    return;
  }

  const modal = document.getElementById("compareModal");
  const body = document.getElementById("compareBody");
  if (!modal || !body) return;

  const itemA = state.images.find(i => i.id === state.comparison[0]);
  const itemB = state.images.find(i => i.id === state.comparison[1]);
  if (!itemA || !itemB) return;

  const isAr = state.language === "ar";

  const renderCol = (item) => `
    <div class="compare-col">
      <div class="compare-img-wrap">
        <img src="${item.image}" alt="${isAr ? item.titleAr : item.title}" style="width:100%;height:100%;object-fit:cover;" />
      </div>
      <h3 style="font-family:var(--font-serif);font-size:1.3rem;font-weight:700;">${isAr ? item.titleAr : item.title}</h3>
      <table class="compare-table">
        <tbody>
          <tr><th>${t("compareAttrLocation")}</th><td>${item.location}</td></tr>
          <tr><th>${t("compareAttrCountry")}</th><td>${item.country}</td></tr>
          <tr><th>${t("compareAttrEra")}</th><td>${item.era}</td></tr>
          <tr><th>${t("compareAttrCollection")}</th><td>${item.collection}</td></tr>
          <tr><th>${t("compareAttrCategory")}</th><td>${item.category}</td></tr>
          <tr><th>${t("compareAttrTags")}</th><td>${item.tags.join(" • ")}</td></tr>
        </tbody>
      </table>
      <button class="btn-secondary" style="margin-top:auto;" onclick="window.removeComparisonItem(${item.id})">
        ${isAr ? "إزالة من المقارنة" : "Remove from Compare"}
      </button>
    </div>
  `;

  body.innerHTML = renderCol(itemA) + renderCol(itemB);
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCompareModal() {
  const modal = document.getElementById("compareModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
}

window.removeComparisonItem = function(id) {
  state.comparison = state.comparison.filter(cId => cId !== id);
  updateCompareButtons();
  updateCompareHeaderButton();
  closeCompareModal();
};

/* ==========================================================================
   10. Random Discovery Controller ("✦ Discover")
   ========================================================================== */
function discoverRandomVisual() {
  if (state.images.length === 0) return;
  // Choose random index
  const randIndex = Math.floor(Math.random() * state.images.length);
  const item = state.images[randIndex];

  // Open in lightbox
  state.filteredImages = [...state.images];
  const targetIndex = state.filteredImages.findIndex(img => img.id === item.id);
  openLightbox(targetIndex >= 0 ? targetIndex : 0);
  showToast(t("ctaDiscover"));
}

/* ==========================================================================
   11. Filter, Search & Sort Logic
   ========================================================================== */
function filterAndSortImages() {
  const query = state.searchQuery.trim().toLowerCase();
  const col = state.activeCollection;

  let results = state.images.filter(item => {
    // 1. Collection / My Collection filter
    if (col === "Favorites") {
      if (!isFavorite(item.id)) return false;
    } else if (col !== "All") {
      if (item.collection.toLowerCase() !== col.toLowerCase()) return false;
    }

    // 2. Search Query across multiple attributes
    if (query) {
      const matchTitleEn = item.title.toLowerCase().includes(query);
      const matchTitleAr = item.titleAr.includes(query);
      const matchLoc = item.location.toLowerCase().includes(query);
      const matchCountry = item.country.toLowerCase().includes(query);
      const matchCategory = item.category.toLowerCase().includes(query);
      const matchDesc = item.description.toLowerCase().includes(query);
      const matchTags = item.tags.some(t => t.toLowerCase().includes(query));

      if (!matchTitleEn && !matchTitleAr && !matchLoc && !matchCountry && !matchCategory && !matchDesc && !matchTags) {
        return false;
      }
    }

    return true;
  });

  // Sorting
  switch (state.sortBy) {
    case "title-asc":
      results.sort((a, b) => (state.language === "ar" ? a.titleAr.localeCompare(b.titleAr) : a.title.localeCompare(b.title)));
      break;
    case "title-desc":
      results.sort((a, b) => (state.language === "ar" ? b.titleAr.localeCompare(a.titleAr) : b.title.localeCompare(a.title)));
      break;
    case "collection":
      results.sort((a, b) => a.collection.localeCompare(b.collection));
      break;
    case "featured":
      results.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || a.id - b.id);
      break;
    case "newest":
    default:
      results.sort((a, b) => b.id - a.id);
      break;
  }

  state.filteredImages = results;
  updateUrlParams();
}

function updateUrlParams() {
  const params = new URLSearchParams();
  if (state.activeCollection !== "All") params.set("collection", state.activeCollection);
  if (state.searchQuery.trim()) params.set("search", state.searchQuery.trim());
  if (state.sortBy !== "featured") params.set("sort", state.sortBy);
  if (state.viewMode !== "grid") params.set("view", state.viewMode);

  const queryStr = params.toString();
  const newUrl = queryStr ? `${window.location.pathname}?${queryStr}` : window.location.pathname;
  window.history.replaceState({}, "", newUrl);
}

function restoreUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const col = params.get("collection");
  const search = params.get("search");
  const sort = params.get("sort");
  const view = params.get("view");

  if (col) state.activeCollection = col;
  if (search) state.searchQuery = search;
  if (sort) state.sortBy = sort;
  if (view && ["grid", "masonry", "editorial"].includes(view)) state.viewMode = view;
}

/* ==========================================================================
   12. Render Curated Collections Section
   ========================================================================== */
function renderCollections() {
  const container = document.getElementById("collectionsGrid");
  if (!container) return;

  const collections = [
    {
      name: "Sacred Places",
      title: state.language === "ar" ? "الأماكن المقدسة" : "Sacred Places",
      desc: state.language === "ar" ? "الكعبة المشرفة، المسجد النبوي، قبة الصخرة ومساجد الهدى التاريخية." : "The Kaaba, Prophet's Mosque, Al-Aqsa, and venerated foundational sanctuaries.",
      img: "https://i.pinimg.com/736x/09/8f/8a/098f8ae9c25f6fdbb24fc589d3fe1ba9.jpg",
      count: state.images.filter(i => i.collection === "Sacred Places").length
    },
    {
      name: "Islamic Architecture",
      title: state.language === "ar" ? "العمارة الإسلامية" : "Islamic Architecture",
      desc: state.language === "ar" ? "القباب العثمانية، قصر الحمراء، الأقواس الحدوية، وأروقة الرخام." : "Ottoman domes, Andalusian muqarnas, Safavid tilework, and Cordoban arches.",
      img: "https://i.pinimg.com/736x/4c/4d/e3/4c4de3cf0d30b15d8b736d164be3d86d.jpg",
      count: state.images.filter(i => i.collection === "Islamic Architecture").length
    },
    {
      name: "Qur'an & Calligraphy",
      title: state.language === "ar" ? "القرآن والخط العربي" : "Qur'an & Calligraphy",
      desc: state.language === "ar" ? "مخطوطات قرآنية مذهبة، خط الثلث، الكوفي الأصيل، وأقلام القصب." : "Illuminated manuscripts, classical Thuluth, Kufic folios, and reed pen studies.",
      img: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=650&q=80",
      count: state.images.filter(i => i.collection === "Qur'an & Calligraphy").length
    },
    {
      name: "Islamic Geometry",
      title: state.language === "ar" ? "الهندسة الإسلامية" : "Islamic Geometry",
      desc: state.language === "ar" ? "فسيفساء الزليج، قباب المقرنصات الخلوية، وشاشات الجالي الحجرية." : "Complex star zillij, structural muqarnas vaulting, and stone arabesques.",
      img: "https://i.pinimg.com/736x/d1/1c/10/d11c104e938886155eed932333bb1322.jpg",
      count: state.images.filter(i => i.collection === "Islamic Geometry").length
    },
    {
      name: "Ramadan",
      title: state.language === "ar" ? "رمضان المبارك" : "Ramadan",
      desc: state.language === "ar" ? "فوانيس الإفطار التراثية، أهلة المساجد، وتمر المدينة لصيام الشهر." : "Traditional fanous lanterns, crescent moon rises, dates, and evening prayer rows.",
      img: "https://i.pinimg.com/736x/2b/f2/28/2bf228474edd4e6897ff712e4a160c1c.jpg",
      count: state.images.filter(i => i.collection === "Ramadan").length
    },
    {
      name: "Hajj & Umrah",
      title: state.language === "ar" ? "الحج والعمرة" : "Hajj & Umrah",
      desc: state.language === "ar" ? "طواف الحجيج، خيام وادي منى، وصعيد عرفات في مشهد مهيب." : "Pilgrim circumambulation, the tent city of Mina, and prayer on the Plain of Arafat.",
      img: "https://i.pinimg.com/1200x/6c/84/52/6c84529d80986d8aad87c4d6a1195b5f.jpg",
      count: state.images.filter(i => i.collection === "Hajj & Umrah").length
    },
    {
      name: "Islamic World",
      title: state.language === "ar" ? "العالم الإسلامي" : "Islamic World",
      desc: state.language === "ar" ? "سمرقند على طريق الحرير، لاهور المغولية، مراكش، وثريات مسقط." : "Samarkand madrassas, Lahore sandstone, Marrakech minarets, and Omani craft.",
      img: "https://i.pinimg.com/1200x/c8/2d/85/c82d85f77697518d70a07834ce5d2e5f.jpg",
      count: state.images.filter(i => i.collection === "Islamic World").length
    },
    {
      name: "Islamic Ethiopia",
      title: state.language === "ar" ? "إثيوبيا الإسلامية" : "Islamic Ethiopia",
      desc: state.language === "ar" ? "هرر جوغول، جامع هرر الكبير، البيوت التراثية، والمخطوطات العجمية." : "Historic Jamia Mosque of Harar, traditional Gey Gar architecture, and rare manuscripts.",
      img: "https://i.pinimg.com/736x/86/d5/8a/86d58aae680155ab6ba997b4f946a983.jpg",
      count: state.images.filter(i => i.collection === "Islamic Ethiopia").length
    }
  ];

  let html = "";
  collections.forEach(c => {
    const isActive = state.activeCollection === c.name;
    html += `
      <article class="collection-card ${isActive ? 'active' : ''}" data-collection="${c.name}">
        <div class="collection-card-media">
          <img src="${c.img}" class="collection-card-img" alt="${c.title}" loading="lazy" />
          <span class="collection-card-badge">${c.count} ${state.language === "ar" ? "عمل" : "visuals"}</span>
        </div>
        <div class="collection-card-body">
          <h3 class="collection-card-title">${c.title}</h3>
          <p class="collection-card-desc">${c.desc}</p>
          <span class="collection-card-action">
            ${state.language === "ar" ? "استكشف المجموعة ←" : "Explore collection →"}
          </span>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll(".collection-card").forEach(card => {
    card.addEventListener("click", () => {
      const colName = card.getAttribute("data-collection");
      state.activeCollection = colName;
      updateFilterPillsUI();
      filterAndSortImages();
      renderGallery();
      document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
    });
  });
}

function updateFilterPillsUI() {
  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.classList.toggle("active", pill.getAttribute("data-collection") === state.activeCollection);
  });
}

/* ==========================================================================
   13. Render Gallery Cards & Empty States
   ========================================================================== */
function renderGallery() {
  const container = document.getElementById("galleryGrid");
  const countBadge = document.getElementById("resultsCountBadge");
  if (!container) return;

  const count = state.filteredImages.length;
  const isAr = state.language === "ar";

  // Results count status
  if (countBadge) {
    if (state.searchQuery.trim()) {
      countBadge.textContent = t("resultsSearch", { count, query: state.searchQuery.trim() });
    } else if (state.activeCollection === "Favorites") {
      countBadge.textContent = t("resultsSaved", { count });
    } else if (state.activeCollection !== "All") {
      countBadge.textContent = t("resultsCollection", { count, name: state.activeCollection });
    } else {
      countBadge.textContent = t("resultsCount", { count });
    }
  }

  // Empty state handling
  if (count === 0) {
    const isFav = state.activeCollection === "Favorites";
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem; background: var(--bg-surface); border: 1px dashed var(--border-medium); border-radius: var(--radius-md);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color:var(--text-muted);margin-bottom:1rem;">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        <h3 style="font-family:var(--font-serif);font-size:1.5rem;margin-bottom:0.5rem;">${isFav ? t("emptyFavTitle") : t("emptyTitle")}</h3>
        <p style="color:var(--text-secondary);max-width:460px;margin-inline:auto;margin-bottom:1.5rem;font-size:0.95rem;">
          ${isFav ? t("emptyFavSub") : t("emptySub")}
        </p>
        <button class="btn-primary" onclick="window.resetArchiveFilters()">
          ${isFav ? t("emptyFavAction") : t("emptyReset")}
        </button>
      </div>
    `;
    return;
  }

  // Render cards
  const fragment = document.createDocumentFragment();

  state.filteredImages.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = `gallery-card aspect-${item.aspect || 'landscape'}`;
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    const itemTitle = isAr && item.titleAr ? item.titleAr : item.title;
    const itemDesc = isAr && item.descriptionAr ? item.descriptionAr : item.description;

    card.setAttribute("aria-label", `${itemTitle} — ${item.location}`);

    const favActive = isFavorite(item.id);
    const compActive = state.comparison.includes(item.id);

    card.innerHTML = `
      <div class="card-media">
        <span class="card-badge">${item.collection}</span>
        <div class="card-actions-strip">
          <button
            class="card-action-btn compare-btn ${compActive ? 'active' : ''}"
            data-id="${item.id}"
            title="Add to Compare (max 2)"
            aria-label="Compare ${itemTitle}"
            type="button"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="3" width="9" height="18" rx="2"></rect>
              <rect x="13" y="3" width="9" height="18" rx="2"></rect>
            </svg>
          </button>
          <button
            class="card-action-btn fav-btn ${favActive ? 'active' : ''}"
            data-id="${item.id}"
            title="${favActive ? t("btnSaved") : t("btnSave")}"
            aria-label="${favActive ? t("btnSaved") : t("btnSave")}"
            type="button"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="${favActive ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <img
          class="card-img"
          src="${item.thumbnail}"
          alt="${itemTitle} - ${item.location}"
          loading="lazy"
          onerror="this.onerror=null; this.src='assets/images/placeholder.svg';"
        />
      </div>
      <div class="card-body">
        <h3 class="card-title">${itemTitle}</h3>
        <p class="card-meta">
          <span>${item.location}</span>
          <span>&bull;</span>
          <span>${item.country}</span>
        </p>
        <p class="card-editorial-desc">${itemDesc}</p>
      </div>
    `;

    // Click handler to open Lightbox
    card.addEventListener("click", (e) => {
      if (e.target.closest(".card-action-btn")) return;
      openLightbox(index, card);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        if (e.target.closest(".card-action-btn")) return;
        e.preventDefault();
        openLightbox(index, card);
      }
    });

    // Favorite action
    const favBtn = card.querySelector(".fav-btn");
    favBtn?.addEventListener("click", (e) => toggleFavorite(item.id, e));

    // Compare action
    const compBtn = card.querySelector(".compare-btn");
    compBtn?.addEventListener("click", (e) => toggleComparison(item.id, e));

    fragment.appendChild(card);
  });

  container.innerHTML = "";
  container.appendChild(fragment);
}

window.resetArchiveFilters = function() {
  state.activeCollection = "All";
  state.searchQuery = "";
  state.sortBy = "featured";

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  document.getElementById("searchClearBtn")?.classList.remove("visible");
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) sortSelect.value = "featured";

  updateFilterPillsUI();
  filterAndSortImages();
  renderGallery();
  showToast(state.language === "ar" ? "تمت استعادة كافة الأعمال" : "All archive filters reset");
};

/* ==========================================================================
   14. Lightbox Modal Controller
   ========================================================================== */
function openLightbox(index, triggerElement = null) {
  if (index < 0 || index >= state.filteredImages.length) return;

  state.currentIndex = index;
  state.lightboxOpen = true;
  state.lastFocusedElement = triggerElement || document.activeElement;

  resetZoom();
  updateLightboxContent();

  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
  }
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    document.getElementById("lightboxCloseBtn")?.focus();
  }, 100);
}

function closeLightbox() {
  if (!state.lightboxOpen) return;

  stopSlideshow();
  resetZoom();

  state.lightboxOpen = false;
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
  }
  document.body.style.overflow = "";

  if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
    state.lastFocusedElement.focus();
  }
}

function showNextImage() {
  if (!state.lightboxOpen || state.filteredImages.length === 0) return;
  resetZoom();
  state.currentIndex = (state.currentIndex + 1) % state.filteredImages.length;
  updateLightboxContent();
}

function showPreviousImage() {
  if (!state.lightboxOpen || state.filteredImages.length === 0) return;
  resetZoom();
  state.currentIndex = (state.currentIndex - 1 + state.filteredImages.length) % state.filteredImages.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = state.filteredImages[state.currentIndex];
  if (!item) return;

  const total = state.filteredImages.length;
  const isAr = state.language === "ar";
  const itemTitle = isAr && item.titleAr ? item.titleAr : item.title;
  const itemDesc = isAr && item.descriptionAr ? item.descriptionAr : item.description;

  // Counter
  const counter = document.getElementById("lightboxCounter");
  if (counter) counter.textContent = t("lbCounter", { current: state.currentIndex + 1, total });

  // Heading & Metadata
  const heading = document.getElementById("lightboxHeading");
  if (heading) heading.textContent = itemTitle;
  const catBadge = document.getElementById("lightboxCategoryBadge");
  if (catBadge) catBadge.textContent = `${item.collection} · ${item.category}`;
  const locBadge = document.getElementById("lightboxLocationBadge");
  if (locBadge) locBadge.textContent = `${item.location}, ${item.country}`;
  const desc = document.getElementById("lightboxDesc");
  if (desc) desc.textContent = itemDesc;
  const credit = document.getElementById("lightboxPhotographer");
  if (credit) {
    credit.innerHTML = `Source Archive: <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer">${item.source}</a> · Era: ${item.era}`;
  }

  // Image
  const img = document.getElementById("lightboxImg");
  if (img) {
    img.style.opacity = "0.3";
    const preload = new Image();
    preload.src = item.image;
    preload.onload = () => {
      img.src = item.image;
      img.alt = itemTitle;
      img.style.opacity = "1";
    };
    preload.onerror = () => {
      img.src = item.thumbnail || 'assets/images/placeholder.svg';
      img.alt = itemTitle;
      img.style.opacity = "1";
    };
  }

  syncLightboxFavoriteButton();
}

/* ==========================================================================
   15. Slideshow Controller (Defensive Single Interval)
   ========================================================================== */
function startSlideshow() {
  if (state.slideshowActive) return;
  state.slideshowActive = true;
  updateSlideshowBtnUI();

  if (state.slideshowTimer) clearInterval(state.slideshowTimer);
  state.slideshowTimer = setInterval(showNextImage, state.slideshowInterval);
  showToast(state.language === "ar" ? "تم بدء العرض التلقائي" : "Slideshow started (3.5s)");
}

function stopSlideshow() {
  if (!state.slideshowActive && !state.slideshowTimer) return;
  state.slideshowActive = false;
  if (state.slideshowTimer) {
    clearInterval(state.slideshowTimer);
    state.slideshowTimer = null;
  }
  updateSlideshowBtnUI();
}

function toggleSlideshow() {
  if (state.slideshowActive) {
    stopSlideshow();
    showToast(state.language === "ar" ? "تم إيقاف العرض التلقائي" : "Slideshow paused");
  } else {
    startSlideshow();
  }
}

function updateSlideshowBtnUI() {
  const btn = document.getElementById("lightboxSlideshowBtn");
  if (!btn) return;
  btn.classList.toggle("slideshow-active", state.slideshowActive);
  btn.innerHTML = state.slideshowActive
    ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg><span>${t("lbPause")}</span>`
    : `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg><span>${t("lbSlideshow")}</span>`;
}

/* ==========================================================================
   16. Zoom & Pan Controller
   ========================================================================== */
function applyZoom() {
  const wrapper = document.getElementById("lightboxImgWrapper");
  const text = document.getElementById("lightboxZoomText");
  if (!wrapper) return;

  wrapper.style.transform = `scale(${state.zoomLevel}) translate(${state.panPosition.x / state.zoomLevel}px, ${state.panPosition.y / state.zoomLevel}px)`;
  wrapper.classList.toggle("is-zoomed", state.zoomLevel > 1);

  if (text) text.textContent = `${Math.round(state.zoomLevel * 100)}%`;
}

function zoomIn() {
  if (state.zoomLevel < state.maxZoom) {
    state.zoomLevel = Math.min(state.maxZoom, +(state.zoomLevel + state.zoomStep).toFixed(1));
    applyZoom();
  }
}

function zoomOut() {
  if (state.zoomLevel > state.minZoom) {
    state.zoomLevel = Math.max(state.minZoom, +(state.zoomLevel - state.zoomStep).toFixed(1));
    if (state.zoomLevel === 1) state.panPosition = { x: 0, y: 0 };
    applyZoom();
  }
}

function resetZoom() {
  state.zoomLevel = 1;
  state.panPosition = { x: 0, y: 0 };
  applyZoom();
}

/* ==========================================================================
   17. Share & Download Integration
   ========================================================================== */
async function downloadCurrentImage() {
  const item = state.filteredImages[state.currentIndex];
  if (!item) return;

  try {
    const res = await fetch(item.image);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const safeTitle = item.title.toLowerCase().replace(/[^a-z0-9]/g, "-");
    a.download = `mughni-archive-${safeTitle}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(state.language === "ar" ? "اكتمل التحميل" : "Download initiated!");
  } catch (err) {
    window.open(item.image, "_blank");
    showToast(state.language === "ar" ? "تم فتح الصورة الأصلية" : "Opened visual in new tab");
  }
}

async function shareCurrentImage() {
  const item = state.filteredImages[state.currentIndex];
  if (!item) return;

  const data = {
    title: `MUGHNI — ${item.title}`,
    text: `${item.title} (${item.location}, ${item.country}) — MUGHNI Islamic Visual Archive`,
    url: window.location.href
  };

  if (navigator.share && navigator.canShare && navigator.canShare(data)) {
    try {
      await navigator.share(data);
    } catch(e){}
  } else {
    copyDirectLink(item.image);
  }
}

function copyDirectLink(url) {
  const link = url || window.location.href;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(link).then(() => {
      showToast(t("toastCopied"));
    }).catch(() => {
      prompt("Copy link:", link);
    });
  } else {
    prompt("Copy link:", link);
  }
}

/* ==========================================================================
   18. Toast Notifications
   ========================================================================== */
function showToast(message, isError = false) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${isError ? 'toast-error' : ''}`;
  toast.setAttribute("role", "alert");
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 14 14"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-8px)";
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}

/* ==========================================================================
   19. Event Listeners Setup
   ========================================================================== */
function setupEventListeners() {
  // Theme & Language
  document.getElementById("themeToggleBtn")?.addEventListener("click", toggleTheme);
  document.getElementById("mobileThemeToggleBtn")?.addEventListener("click", toggleTheme);
  document.getElementById("langToggleBtn")?.addEventListener("click", toggleLanguage);
  document.getElementById("mobileLangToggleBtn")?.addEventListener("click", toggleLanguage);

  // Mobile Drawer
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileBackdrop = document.getElementById("mobileBackdrop");
  const mobileDrawerCloseBtn = document.getElementById("mobileDrawerCloseBtn");

  const openDrawer = () => {
    mobileDrawer?.classList.add("open");
    mobileBackdrop?.classList.add("open");
    document.body.style.overflow = "hidden";
  };
  const closeDrawer = () => {
    mobileDrawer?.classList.remove("open");
    mobileBackdrop?.classList.remove("open");
    document.body.style.overflow = "";
  };

  mobileMenuBtn?.addEventListener("click", openDrawer);
  mobileDrawerCloseBtn?.addEventListener("click", closeDrawer);
  mobileBackdrop?.addEventListener("click", closeDrawer);
  document.querySelectorAll(".mobile-nav-link").forEach(l => l.addEventListener("click", closeDrawer));

  // Discover Button
  document.getElementById("heroDiscoverBtn")?.addEventListener("click", discoverRandomVisual);
  document.getElementById("headerDiscoverBtn")?.addEventListener("click", discoverRandomVisual);

  // My Collection quick switch
  document.getElementById("headerFavBtn")?.addEventListener("click", () => {
    state.activeCollection = "Favorites";
    updateFilterPillsUI();
    filterAndSortImages();
    renderGallery();
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("mobileFavBtn")?.addEventListener("click", () => {
    closeDrawer();
    state.activeCollection = "Favorites";
    updateFilterPillsUI();
    filterAndSortImages();
    renderGallery();
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  });

  // Compare header button
  document.getElementById("headerCompareBtn")?.addEventListener("click", openCompareModal);
  document.getElementById("compareCloseBtn")?.addEventListener("click", closeCompareModal);
  document.getElementById("compareModal")?.addEventListener("click", (e) => {
    if (e.target === document.getElementById("compareModal")) closeCompareModal();
  });

  // Featured Visual Buttons
  document.getElementById("featuredFullscreenBtn")?.addEventListener("click", () => {
    const featuredItem = state.images.find(i => i.featured);
    if (featuredItem) {
      const idx = state.filteredImages.findIndex(i => i.id === featuredItem.id);
      openLightbox(idx >= 0 ? idx : 0);
    }
  });

  document.getElementById("featuredExploreBtn")?.addEventListener("click", () => {
    state.activeCollection = "Sacred Places";
    updateFilterPillsUI();
    filterAndSortImages();
    renderGallery();
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  });

  // Search Input
  const searchInput = document.getElementById("searchInput");
  const searchClearBtn = document.getElementById("searchClearBtn");

  searchInput?.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    searchClearBtn?.classList.toggle("visible", Boolean(state.searchQuery));
    filterAndSortImages();
    renderGallery();
  });

  searchClearBtn?.addEventListener("click", () => {
    state.searchQuery = "";
    if (searchInput) {
      searchInput.value = "";
      searchInput.focus();
    }
    searchClearBtn.classList.remove("visible");
    filterAndSortImages();
    renderGallery();
  });

  // Filter Pills
  document.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const col = pill.getAttribute("data-collection");
      state.activeCollection = col;
      updateFilterPillsUI();
      filterAndSortImages();
      renderGallery();
    });
  });

  // View Mode Buttons
  document.querySelectorAll(".view-mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-view");
      setViewMode(mode);
    });
  });

  // Sort Dropdown
  document.getElementById("sortSelect")?.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    filterAndSortImages();
    renderGallery();
  });

  // Lightbox Navigation & Toolbar
  document.getElementById("lightboxCloseBtn")?.addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrevBtn")?.addEventListener("click", showPreviousImage);
  document.getElementById("lightboxNextBtn")?.addEventListener("click", showNextImage);

  document.getElementById("lightboxFavBtn")?.addEventListener("click", () => {
    const curr = state.filteredImages[state.currentIndex];
    if (curr) toggleFavorite(curr.id);
  });

  document.getElementById("lightboxSlideshowBtn")?.addEventListener("click", toggleSlideshow);
  document.getElementById("lightboxZoomInBtn")?.addEventListener("click", zoomIn);
  document.getElementById("lightboxZoomOutBtn")?.addEventListener("click", zoomOut);
  document.getElementById("lightboxZoomResetBtn")?.addEventListener("click", resetZoom);
  document.getElementById("lightboxDownloadBtn")?.addEventListener("click", downloadCurrentImage);
  document.getElementById("lightboxShareBtn")?.addEventListener("click", shareCurrentImage);
  document.getElementById("lightboxCopyLinkBtn")?.addEventListener("click", () => {
    const curr = state.filteredImages[state.currentIndex];
    if (curr) copyDirectLink(curr.image);
  });

  // Lightbox backdrop dismiss
  document.getElementById("lightbox")?.addEventListener("click", (e) => {
    if (e.target === document.getElementById("lightbox") || e.target === document.getElementById("lightboxImgWrapper")) {
      closeLightbox();
    }
  });

  // Zoom Panning
  const imgWrapper = document.getElementById("lightboxImgWrapper");
  imgWrapper?.addEventListener("mousedown", (e) => {
    if (state.zoomLevel <= 1) return;
    state.isDragging = true;
    state.dragStart = { x: e.clientX - state.panPosition.x, y: e.clientY - state.panPosition.y };
    imgWrapper.classList.add("is-dragging");
  });

  window.addEventListener("mousemove", (e) => {
    if (!state.isDragging || state.zoomLevel <= 1) return;
    state.panPosition = { x: e.clientX - state.dragStart.x, y: e.clientY - state.dragStart.y };
    applyZoom();
  });

  window.addEventListener("mouseup", () => {
    if (state.isDragging) {
      state.isDragging = false;
      imgWrapper?.classList.remove("is-dragging");
    }
  });

  // Touch Swipe on Mobile
  const lightbox = document.getElementById("lightbox");
  lightbox?.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      state.touchStartX = e.touches[0].clientX;
      state.touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  lightbox?.addEventListener("touchend", (e) => {
    if (e.changedTouches.length === 1) {
      const deltaX = e.changedTouches[0].clientX - state.touchStartX;
      const deltaY = e.changedTouches[0].clientY - state.touchStartY;

      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
        if (deltaX < 0) {
          state.language === "ar" ? showPreviousImage() : showNextImage();
        } else {
          state.language === "ar" ? showNextImage() : showPreviousImage();
        }
      }
    }
  }, { passive: true });

  // Global Keyboard Navigation
  window.addEventListener("keydown", handleGlobalKeys);

  // Back to Top button
  const backToTopBtn = document.getElementById("backToTopBtn");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 400;
    backToTopBtn?.classList.toggle("visible", scrolled);
    document.querySelector(".site-header")?.classList.toggle("scrolled", window.scrollY > 30);
  }, { passive: true });

  backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function handleGlobalKeys(e) {
  const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
  const isInput = activeTag === "input" || activeTag === "textarea" || activeTag === "select";

  // Lightbox shortcuts
  if (state.lightboxOpen) {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        closeLightbox();
        break;
      case "ArrowLeft":
        e.preventDefault();
        state.language === "ar" ? showNextImage() : showPreviousImage();
        break;
      case "ArrowRight":
        e.preventDefault();
        state.language === "ar" ? showPreviousImage() : showNextImage();
        break;
      case " ":
        if (!isInput) {
          e.preventDefault();
          toggleSlideshow();
        }
        break;
      case "+":
      case "=":
        e.preventDefault();
        zoomIn();
        break;
      case "-":
      case "_":
        e.preventDefault();
        zoomOut();
        break;
      case "r":
      case "R":
        e.preventDefault();
        resetZoom();
        break;
      case "c":
      case "C":
        if (!isInput) {
          e.preventDefault();
          const curr = state.filteredImages[state.currentIndex];
          if (curr) toggleFavorite(curr.id);
        }
        break;
    }
    return;
  }

  // Compare Modal Escape
  if (e.key === "Escape" && document.getElementById("compareModal")?.classList.contains("active")) {
    closeCompareModal();
  }
}

/* ==========================================================================
   20. Application Initialization
   ========================================================================== */
function initMughni() {
  loadStoredState();
  restoreUrlParams();

  // Apply visual theme & language settings
  applyTheme(state.theme, false);
  applyLanguage(state.language, false);
  setViewMode(state.viewMode);

  setupEventListeners();
  updateFavoritesBadges();
  updateCompareHeaderButton();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMughni);
} else {
  initMughni();
}
