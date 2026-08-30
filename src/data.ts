import slider1 from "./assets/images/241097509_6661365207222220_1185751103338527730_n.jpg";
import slider2 from "./assets/images/atrium_1753553534294.jpeg";

import servicesMukorom from "./assets/images/39_2.png";

import serviceDataImage1 from "./assets/images/kozm_1753553626500.webp";
import serviceDataImage2 from "./assets/images/fodrasz_1753553593675.jpg";
import serviceDataImage3 from "./assets/images/massz_1723752343434.jpg";
import serviceDataImage4 from "./assets/images/mukorom_494179958.jpg";

import serviceDataRoomImage1 from "./assets/images/kozmetika_892634.jpg";
import serviceDataRoomImage2 from "./assets/images/kozmetika_2389764.jpg";

import serviceDataRoomImage5 from "./assets/images/masszazs_2734234.png";



import imageSzilvia from "./assets/images/kozm_1753553626500.webp";
import imageReka from "./assets/images/fodrasz_1753553593675.jpg";
import imageVera from "./assets/images/massz_1723752343434.jpg";
import imageIbolya from "./assets/images/mukorom_494179958.jpg";



export const sliderImages = [
  slider1,
  slider2
];



export interface Services {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: string;
  promoTitle?: string;
  promoText?: string;
  works?: {
    image: string;
    label: string;
  }[];
}

export const services: Services[] = [
  {
    id: "kozmetika",
    title: "KOZMETIKA",
    description: "Professzionális arckezelések, anti-ageing kezelések, IPL szőrtelenítés és még sok más.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Kozmetika szolgáltatások",
    icon: "mdi:face-woman-shimmer"
  },
  {
    id: "fodraszat",
    title: "FODRÁSZAT",
    description: "Kreatív hajformázás, egyéni stílus kialakítása és professzionális hajápolás.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Fodrászat szolgáltatások",
    icon: "ri:scissors-line",
    promoTitle: "Új vendégeknek 15% kedvezmény!",
    promoText: "Foglalj időpontot még ma, és élvezd kedvezményünket első látogatáskor.",
    /* works: [
      { image: serviceDataRoomImage1, label: "Balayage" },
      { image: serviceDataRoomImage2, label: "Tőfestés" },
      { image: serviceDataRoomImage1, label: "Alkalmi frizura" },
      { image: serviceDataRoomImage2, label: "Fésűs melír" },
    ], */
  },
  {
    id: "masszazs",
    title: "MASSZÁZS",
    description: "Relaxáló és gyógymasszázs szolgáltatások a testi-lelki harmónia érdekében.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Masszázs szolgáltatások",
    icon: "tabler:massage"
  },
  {
    id: "mukormos",
    title: "MŰKÖRÖM",
    description: "Prémium alapanyagok, kifinomult technika – mert a kezeid is megérdemlik a legjobbat.",
    image: servicesMukorom,
    alt: "Műkörmös szolgáltatások",
    icon: "fluent-emoji-high-contrast:nail-polish",
  },
];



export interface ServiceData {
  id: string;
  pageTitle: string;
  title: string;
  name: string;
  image: string;
  alt: string;
  priceImage?: string;
  roomImage?: string;
  roomImage2?: string;
  priceTable?: {
    head: string[];
    body: {
      category: string;
      description?: string;
      rows: {
        type: string;
        prices: string[];
        indent?: boolean;
      }[];
    }[];
  } | null;
}

export const servicesData: ServiceData[] = [
  {
    id: "kozmetika",
    pageTitle: "Kozmetika",
    title: "Kozmetikus / Kozmetikus Szakoktató",
    name: "Singer Szilvia",
    image: serviceDataImage1,
    alt: "Singer Szilvia kozmetikus",
    roomImage: serviceDataRoomImage1,
    roomImage2: serviceDataRoomImage2,
    priceTable: {
      head: ["Szolgáltatás", "Ár"],
      body: [
        {
          category: "Festések",
          rows: [
            { type: "Szempilla festés", prices: ["2.400 Ft"] },
            { type: "Szemöldök festés", prices: ["2.400 Ft"] },
            { type: "Szempilla lifting + festés", prices: ["14.200 Ft"] },
            { type: "Szemöldök laminálás + festés", prices: ["14.200 Ft"] },
            { type: "Szempilla lifting + Szemöldök laminálás", prices: ["25.300 Ft"] },
          ],
        },
        {
          category: "Gyanták",
          rows: [
            { type: "Szemöldök", prices: ["2.400 Ft"] },
            { type: "Bajusz, orr, fül", prices: ["2.200 Ft"] },
            { type: "Áll", prices: ["1.700-2.400 Ft"] },
            { type: "Lábszár", prices: ["4.300 Ft"] },
            { type: "Comb", prices: ["5.700 Ft"] },
            { type: "Végig láb", prices: ["10.000 Ft"] },
            { type: "Fazon", prices: ["6.000 / 6.700 / 8.100 Ft"] },
            { type: "Hónalj", prices: ["2.600 Ft"] },
            { type: "Kar + ujj", prices: ["3.100 + 800 Ft"] },
            { type: "Has", prices: ["3.900 - 6.700 Ft"] },
          ],
        },
        {
          category: "Férfi gyanták",
          rows: [
            { type: "Hát", prices: ["6.700 - 8.000 Ft"] },
            { type: "Mellkas", prices: ["6.000 - 8.100 Ft"] },
            { type: "Kar", prices: ["4.000 Ft"] },
          ],
        },
        {
          category: "Masszázsok",
          rows: [
            { type: "20 perc", prices: ["8.300 Ft"] },
            { type: "30 perc", prices: ["9.700 Ft"] },
            { type: "Kéz", prices: ["5.800 Ft"] },
          ],
        },
        {
          category: "Maszkok",
          rows: [
            { type: "Fátyol, arany, gumi", prices: ["7.500 Ft"] },
            { type: "Pakolás", prices: ["3.500 Ft"] },
            { type: "Peeling", prices: ["3.300 Ft"] },
            { type: "Randi maszk", prices: ["6.600 Ft"] },
            { type: "Szem", prices: ["5.200 Ft"] },
            { type: "Kéz", prices: ["4.100 Ft"] },
          ],
        },
        {
          category: "Smink",
          rows: [
            { type: "Nappali", prices: ["6.000 - 7.900 Ft"] },
            { type: "Alkalmi", prices: ["9.400 - 15.000 Ft"] },
            { type: "Esküvői sminkpróba", prices: ["22.000 Ft"] },
            { type: "Esküvői smink + kiszállás", prices: ["30.300 Ft"] },
            { type: "Smink oktatás", prices: ["19.800 Ft"] },
          ],
        },
        {
          category: "Kezelések",
          rows: [
            { type: "Gigi", prices: ["21.100 Ft"] },
            { type: "Tini 16 éves korig", prices: ["12.300 Ft"] },
            { type: "Dekoltázs / hát", prices: ["15.200 Ft"] },
            { type: "Hialurox", prices: ["23.200 Ft"] },
            { type: "+ nyak", prices: ["26.800 Ft"], indent: true  },
            { type: "+ dekoltázs", prices: ["31.500 Ft"], indent: true  },
            { type: "Texture", prices: ["30.600 Ft"] },
            { type: "+ dekoltázs", prices: ["39.900 Ft"], indent: true  },
            { type: "G4", prices: ["38.600 Ft"] },
            { type: "Thesera", prices: ["51.800 Ft"] },
            { type: "Bioplazma (UH vagy masszázs)", prices: ["22.700 Ft"] },
            { type: "+ nyak", prices: ["24.600 Ft"], indent: true  },
            { type: "+ dekoltázs", prices: ["27.800 Ft"], indent: true  },
            { type: "Hámlasztás", prices: ["15.500 Ft"] },
            { type: "Mezoterápia", prices: ["13.300 Ft"] },
            { type: "Mikrodermabrázió", prices: ["8.300 Ft"] },
            { type: "Ultrahang", prices: ["5.300 Ft"] },
            { type: "+ nyak", prices: ["7.700 Ft"], indent: true  },
            { type: "Olvadó peptid szálak / szál", prices: ["3.200 Ft"] },
            { type: "Carboxi", prices: ["13.300 Ft"] },
          ],
        },
        {
          category: "Kombinált kezelések",
          rows: [
            { type: "Mikro + Mezo", prices: ["21.700 Ft"] },
            { type: "Kezelés + Mikro", prices: ["27.300 Ft"] },
            { type: "Kezelés + Hialurox", prices: ["39.800 Ft"] },
          ],
        },
      ],
    },
  },
  {
    id: "fodraszat",
    pageTitle: "Fodrászat",
    title: "Fodrász",
    name: "Petrányi Réka",
    image: serviceDataImage2,
    alt: "Petrányi Réka fodrász",
    //roomImage: serviceDataRoomImage3,
    //roomImage2: serviceDataRoomImage4,
    priceTable: {
      head: ["Szolgáltatás", "Rövid", "Közepes", "Hosszú"],
      body: [
        {
          category: "Mosás, szárítás",
          rows: [
            { type: "Nőknek", prices: ["4.200 Ft", "5.000 Ft", "5.800 Ft"] },
            { type: "Férfiaknak", prices: ["4.200 Ft", "5.000 Ft", "5.800 Ft"] },
            { type: "Lányoknak", prices: ["3.800-6.000 Ft"] },
            { type: "Fiúknak", prices: ["2.500-3.800 Ft"] },
          ],
        },
        {
          category: "Mosás, vágás, szárítás",
          rows: [
            { type: "Nőknek", prices: ["6.000 Ft", "7.200 Ft", "9.000 Ft"] },
            { type: "Férfiaknak", prices: ["6.000 Ft", "7.200 Ft", "9.000 Ft"] },
            { type: "Lányoknak", prices: ["3.800-6.000 Ft"] },
            { type: "Fiúknak", prices: ["2.500-3.800 Ft"] },
          ],
        },
        {
          category: "Tőfestés (60g-ig), szárítás",
          rows: [
            { type: "Nőknek", prices: ["12.000 Ft", "14.000 Ft", "16.000 Ft"] },
            { type: "Férfiaknak", prices: ["12.000 Ft", "14.000 Ft", "16.000 Ft"] },
          ],
        },
        {
          category: "Tőfestés, vágás, szárítás",
          rows: [
            { type: "Nőknek", prices: ["14.000 Ft", "16.000 Ft", "18.000 Ft"] },
            { type: "Férfiaknak", prices: ["14.000 Ft", "16.000 Ft", "18.000 Ft"] }
          ],
        },
        {
          category: "Fóliás melír",
          rows: [
            { type: "Nőknek", prices: ["200-300 Ft / fólia"] },
          ],
        },
        {
          category: "Fésűs melír munkadíj",
          rows: [
            { type: "Nőknek", prices: ["6.000 Ft"] },
          ],
        },
        {
          category: "Balayage, ombre munkadíj",
          rows: [
            { type: "Nőknek", prices: ["8.000-14.000 Ft"] },
          ],
        },
        {
          category: "Festés munkadíj (hozott anyag)",
          rows: [
            { type: "Nőknek", prices: ["4.200-6.200 Ft"] },
            { type: "Férfiaknak", prices: ["4.200-6.200 Ft"] }
          ],
        },
        {
          category: "Frufru",
          rows: [
            { type: "Nőknek", prices: ["1.500Ft"] },
          ],
        },
        {
          category: "Tápláló kezelés",
          rows: [
            { type: "Nőknek", prices: ["szárítás és/vagy vágás +3.000 Ft"] },
            { type: "Férfiaknak", prices: ["szárítás és/vagy vágás +3.000 Ft"] },
          ],
        },
        {
          category: "Alkalmi frizura",
          rows: [
            { type: "Nőknek", prices: ["9.000-16.000 Ft"] },
          ],
        },
        {
          category: "Egyszerű fonás póthaj nélkül",
          rows: [
            { type: "Nőknek", prices: ["3.000-6.000 Ft"] },
          ],
        },
        {
          category: "Festék",
          rows: [
            { type: "Nőknek", prices: ["100Ft / g"] },
            { type: "Férfiaknak", prices: ["100Ft / g"] },
          ],
        },
        {
          category: "Szőkítő",
          rows: [
            { type: "Nőknek", prices: ["150Ft / g"] },
            { type: "Férfiaknak", prices: ["150Ft / g"] },
          ],
        },
      ],
    },
  },
  {
    id: "masszazs",
    pageTitle: "Masszázs",
    title: "Masszőr / Gyógymasszőr",
    name: "Kocsis Vera",
    image: serviceDataImage3,
    alt: "Kocsis Vera masszőr",
    priceImage: "/masszazs_arlista.jpeg",
    roomImage: serviceDataRoomImage5,
    //roomImage2: serviceDataRoomImage6,
    priceTable: {
      head: ["Típus", "Ár"],
      body: [
        {
          category: "Frissítő-relaxáló masszázs",
          description: "Harmonikus kezelés, amely ötvözi a lágy, nyugtató érintéseket és a frissítőbb, élénkítő fogásokat. Segít csökkenteni az izomfáradtságot, javítja a közérzetet és támogatja a teljes ellazulást.",
          rows: [
            { type: "30 perc", prices: ["7.000 Ft"] },
            { type: "60 perc", prices: ["11.000 Ft"] },
            { type: "90 perc", prices: ["13.500 Ft"] },
          ],
        },
        {
          category: "Gyógynövényes-batyus masszázs",
          description: "Meleg, illatos gyógynövényes batyukkal végzett különleges kezelés. A hő és a természetes növényi hatóanyagok együtt segítik a mély ellazulást, serkentik a keringést és támogatják a szervezet regenerációját.",
          rows: [
            { type: "60 perc", prices: ["13.000 Ft"] },
            { type: "90 perc", prices: ["15.000 Ft"] },
          ],
        },
        {
          category: "Alakformáló cellulit masszázs",
          description: "A masszázs mellett csúszóköpöly és tekercselés alkalmazása a narancsbőr csökkentésére, a bpr feszítésére és az alakformálás elpsegíésére.",
          rows: [
            { type: "45 perc", prices: ["12.000 Ft"] },
            { type: "75 perc", prices: ["16.000 Ft"] },
            {
              type: "5 alkalmas bérlet (75 perces masszázs)",
              prices: ["75.000 Ft"],
            },
            {
              type: "10 alkalmas bérlet (75 perces masszázs)",
              prices: ["140.000 Ft"],
            },
          ],
        },
        {
          category: "Kiegészítő szolgáltatások",
          rows: [
            { type: "Kineziotape - testrésztől függően", prices: ["2.500 Ft - 4.500 Ft"] },
            { type: "Csúszóköpöly", prices: ["1.000 Ft"] },
            { type: "Talpmasszázs - 15 perc", prices: ["3.000 Ft"] },
            { type: "Talpmasszázs - 30 perc", prices: ["6.000 Ft"] },
          ],
        },
      ],
    },
  },
  {
    id: "mukormos",
    pageTitle: "Műköröm",
    title: "Műkörmös",
    name: "Bari Ibolya",
    image: serviceDataImage4,
    alt: "Bari Ibolya műkörmös",
    priceImage: "",
    roomImage: "",
    priceTable: {
      head: ["Típus", "Ár"],
      body: [
        {
          category: "Alap szolgáltatások",
          rows: [
            { type: "Manikűr", prices: ["3.500 Ft"] },
            { type: "Paraffinos kézápolás", prices: ["5.000 Ft"] },
            { type: "Géllakk", prices: ["8.000 Ft"] },
            { type: "Erősített géllakk", prices: ["9.000 Ft"] },
          ],
        },
        {
          category: "Műköröm építés",
          rows: [
            { type: "S", prices: ["10.500 Ft"] },
            { type: "M", prices: ["11.500 Ft"] },
            { type: "L", prices: ["13.000 Ft"] },
          ],
        },
        {
          category: "Töltés",
          rows: [
            { type: "S", prices: ["10.000 Ft"] },
            { type: "M", prices: ["11.000 Ft"] },
            { type: "L", prices: ["12.500 Ft"] },
          ],
        },
        {
          category: "Korrekció",
          rows: [
            { type: "2 köröm", prices: ["800 Ft"] },
          ],
        },
        {
          category: "Pótlás",
          rows: [
            { type: "Körmönként", prices: ["800 Ft"] },
          ],
        },
        {
          category: "Díszítés",
          rows: [
            { type: "Francia / babyboomer", prices: ["+1500 Ft"] },
            { type: "Chrome por", prices: ["200 Ft / köröm"] },
            { type: "Beépített effektek (glitter, kagylóhéj stb.)", prices: ["200 Ft / köröm"] },
            { type: "Telikövezés", prices: ["1.000 Ft / köröm"] },
            { type: "Festett minták", prices: ["Egyéni árképzés"] },
          ],
        },
        {
          category: "Lábápolás",
          rows: [
            { type: "Láb géllakk", prices: ["9.500 Ft"] },
          ],
        },
        {
          category: "Eltávolítás",
          rows: [
            { type: "Új szett esetén", prices: ["2.500 Ft"] },
            { type: "Végleges: Géllakk", prices: ["3.000 Ft"] },
            { type: "Műköröm", prices: ["4.500 Ft"] },
          ],
        },
      ],
    },
  },
];



export interface Specialist {
  id: string;
  name: string;
  title: string;
  color: string;
  description: string;
  details: string;
  image: string;
  alt: string;
  tel: string;
  exp: string;
  satisfiedGuests?: string;
}

export const specialists: Specialist[] = [
  {
    id: "szilvia",
    name: "Singer Szilvia",
    title: "Kozmetikus / Kozmetikus Szakoktató",
    color: "atrium-rose",
    description: "Singer Szilvia vagyok. 1994-ben kezdtem tevékenykedni kozmetikusként édesanyámmal, akinek biztatására kezdtem el érdeklődni e csodálatos hivatás iránt. Mivel gyerekkoromban sok időt töltöttem a kozmetikában, így elég otthonos közeggé vált számomra, amelyben kamatoztatni tudom a kreativitásomat és a pszichológiai érdeklődésemet.",
    details: "Folyamatos továbbképzéseken veszek részt, 2004-ben pedig kozmetikus szakoktatói diplomát is szereztem a Pécsi Tudományegyetemen.",
    image: imageSzilvia,
    alt: "Singer Szilvia kozmetikus",
    tel: "+36 30 936 7951",
    exp: "32+ év",
    satisfiedGuests: "1000"
  },
  {
    id: "reka",
    name: "Petrányi Réka",
    title: "Fodrász",
    color: "atrium-gold",
    description: "2010 óta vagyok fodrász, de mindig is foglalkoztatott a haj témája. Gyerekkoromban csavarókkal, fonásokkal és a papírvágó ollóval terrorizáltam a családomat, a Barbie babákról már ne is beszéljünk – az ő hajukat vízfestékkel be is festettem. Szerencsére a kreativitásom megmaradt, viszont a szerszámokat és a festékeket azóta lecseréltem. Már inkább Kevin Murphyvel, Echossal, Alfaparf-fal és Wellával festek a vendég igénye szerint és a tökéletes végeredmény érdekében. Emellett a technikámon is finomítottam.",
    details: "Szeretek mindig naprakész lenni, ezért folyamatosan képzem magam. Imádom, hogy mindig lehet újat tanulni, új technikákat elsajátítani. Számomra a fodrászkodás inkább hobbi, mint munka; szerencsés vagyok, mert egész nap azt csinálhatom, ami kikapcsol és feltölt! Love is in the Hair.",
    image: imageReka,
    alt: "Petrányi Réka fodrász",
    tel: "+36 30 494 9803",
    exp: "16+ év",
    satisfiedGuests: "600"
  },
  {
    id: "vera",
    name: "Kocsis Vera",
    title: "Masszőr / Gyógymasszőr",
    color: "atrium-rose",
    description: "Kocsis Vera vagyok, masszőr és tánctanár. Több mint 13 éves sportolói múlttal a hátam mögött pontosan tudom, milyen fontos szerepet játszik a testünk regenerációja, a rendszeres feltöltődés és a tudatos odafigyelés a mindennapokban. 2024-ben szereztem meg frissítő–relaxáló masszőr, babamasszőr, valamint kineziotape végzettségemet. 2025-ben tovább bővítettem a tudásom cellulit masszazs és gyógynövényes batyus masszázs területen, hogy minél komplexebb és személyre szabottabb kezeléseket nyújthassak. Nyáron két képzéssel is szeretném még bővíteni a tudásomat: nyirokmasszázs, és egy kimozgatásos technikával.",
    details: "Számomra fontos, hogy a masszázs ne csak egy utólagos megoldás legyen, hanem prevenciós jelleggel legyen végezve, hiszen mindig könnyebb megelőzni a problémát, mint egy már kialakult, hosszan tartó fájdalmat kezelni. A kezelések során mindig Te vagy a középpontban. Ha szeretnél, mesélhetsz a napodról, de ha inkább csendben pihennél és kikapcsolódnál, azt is teljes mértékben tiszteletben tartom. A célom, hogy biztonságban, ellazulva és feltöltődve távozz.",
    image: imageVera,
    alt: "Kocsis Vera masszőr",
    tel: "+36 30 512 9527",
    exp: "2+ év",
    satisfiedGuests: "100"
  },
  {
    id: "ibolya",
    name: "Bari Ibolya",
    title: "Műkörmös",
    color: "atrium-gold",
    description: "Bari Ibolya vagyok, 33 éves, két kisgyermek édesanyja. 2020-ban végeztem a Crystal Nails műkörömépítő tanfolyamán. Kezdetben otthon, a saját kezemen próbáltam leutánozni a körmösömet, ellesve, mit mi után csinál. Videókat néztem műköröm témában. Később az iskolában pedig megkaptam a biztos alapokat ahhoz, hogy fejlődhessek, egyre jobb legyek, és el tudjak helyezkedni ebben a szép, kreatív szakmában.",
    details: "Acryl géllel dolgozom most már két éve, nagyon megszerettem ezt a technikát, de a legnépszerűbb még most is a géllakkozás a vendégeim körében. Igényes Crystal Nails, Luxury Nails és Essacco termékekkel valósítom meg álmaid körmét. Szívesen tanulok új díszítési technikákat – ha van valami ötleted, elképzelésed, örömmel fogadom, és a legjobb tudásom szerint igyekszem megvalósítani azt. A szép körmök mellé kellemes beszélgetést, jókedvet, vagy akár nyugodt, pihentető csendet biztosítok a vendégeim számára.",
    image: imageIbolya,
    alt: "Bari Ibolya műkörmös",
    tel: "+36 70 613 0084",
    exp: "6+ év",
    satisfiedGuests: "300"
  }
];



export interface Testimonials {
  id: string;
  author: string;
  content: string;
  rating: string;
}

export const testimonials: Testimonials[] = [
      {
        id: "1",
        author: "Sebestyénné Deli",
        content: "A szalon jellemzői: Profizmus, kedvesség, udvariasság, korrektség. Könnyen megközelíthető,tisztaság,rendezettség és nagyon jó érzés ilyen kellemes környezetben kezelésekre járni.Minden korosztálynak ajánlom!!!!",
        rating: "5"
      },
      {
        id: "2",
        author: "Eszter Miklós",
        content: "Gyönyörű és tiszta a szalon, nagyon ügyelnek a jelenlegi helyzetben a higéniára. A kozmetika jól felszerelt, kiváló szakemberekkel és minőségi anyagokkal dolgoznak. A kiszolgálás tökéletes, kedvesek, otthonos légkör és baráti hangulat várja aki ide látogat! Csak ajánlani tudom mindenkinek akinek fontos a minőség és a szakértelem. Én minden hónapban ellátogatok már évek óta!",
        rating: "5"
      },
      {
        id: "3",
        author: "Noémi Angel",
        content: "Csak ajánlani tudom mindenkinek! Profi munka. Vendég központúság! Kozmetikát és a masszázst amit próbáltam.",
        rating: "5"
      },
      {
        id: "4",
        author: "Violetta Tóth",
        content: "Véleményt legtöbb esetben akkor írunk, amikor valami sérelem ér bennünket és szeretnénk kifejezni a felháborodásunkat. Én nem a berögzültségekkel ellentétben az ELÉGEDETTSÉGEMET szeretném megosztani. Mindig izgultam egy kicsit, amikor új helyre mentem szépülni, de Te, kedves Szilvi teljes mértékben megnyugtattál a professzionalizmusoddal és a kedvességeddel. Azonnal éreztem, hogy szenvedélyesen szereted azt, amit csinálsz és ez át is tükröződik a munkádon. :) Visszatérő vendég lettem és maradok is az. Nagyon köszönöm! :* Mindenki számára, szeretettel ajánlom az Átrium Szépségszalon szolgáltatásait.",
        rating: "5"
      },
      {
        id: "5",
        author: "Molnár-Varga Kriszti",
        content: "Szilvi a világ legjobb kozmetikusa. Szakmailag felkészült, nagyon kedves, diszkrét. A szalon patyolat. A kellemes környezet abszolút megnyugtató, itt valóban ki lehet szakadni a hétköznapi mókuskerékből. Köszönöm.",
        rating: "5"
      },
      {
        id: "6",
        author: "Eva Hidvegi",
        content: "Nora pedikürösnél voltam, 1 hete, nagyon kellemes élménnyel tavoztam. Csak ajánlani tudom.",
        rating: "5"
      },
      {
        id: "7",
        author: "Péterné Ferenczi",
        content: "Nagyon profi személyzet, gyors kiszolgálás, nagyon tiszta.",
        rating: "5"
      },
      {
        id: "8",
        author: "Laszlo Laufer",
        content: "Legjobb kozmetikus a városban",
        rating: "5"
      },
      {
        id: "9",
        author: "Ferencné Soós",
        content: "Budapest legjobb szalonja, Szilvi és Nóri évek óta újra és újra elkísér magas színvonalukkal és professzionalizmusukkal, az Átrium Szalonban természetesen fontos a jó tanács, a barátságosság, a családias környezet, 😘. 12 év tapasztalat után mindenkinek jó szívvel tudom ajánlani.",
        rating: "5"
      }
]