import React, { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import InstagramLightbox from "./instagramLightbox";
import { Instagram } from "lucide-react";
import instaLogo from "@/assets/images/instalogo.jpg"

type GalleryItem = {
  src: string;
  postLink: string;
  title: string;
  caption: string;
  hashtags: string[];
};

export const Gallery = ({ onLightboxChange, stats, feed } : any) => {

  //console.log(feed);
  //const images = feed;

  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (onLightboxChange) {
      onLightboxChange(open);
    }

    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, [open, onLightboxChange]);

  const items = [
    {
    src: "/insta/1.jpg",
    postLink: "https://www.instagram.com/p/DESvLjgoy2T/",
    title: "atriubeauty",
    caption:
      "Drága Vendégeink! Köszönjük Nektek a 2024-es évet,a hűségeteket és ígérjük , hogy jövőre is készülünk sok-sok újdonsággal , hogy minél szebbek és harmonikusabbak lehessetek a segítségünkkel.",
    hashtags: ["#hálásköszönet🙏", "#johogyvagytok❤️", "@atrium_szepsegszalon", "#köszönjükahűséget", "#varunktiteket❣️"],
    },
    {
    src: "/insta/2.jpg",
    postLink: "https://www.instagram.com/p/DDF5LgQiJ5i/",
    title: "atriubeauty",
    caption:
      "Tegnap szeretett kis üzletem volt a helyszíne a születésnapom méltó megünneplésére, ami azért is volt jó választás, mert imádom a kozmetikai szalon meghitt közegét. Érdekes mód nem érzem magam annyinak amennyi vagyok és sokat is teszek érte, de remélem nálatok is sikerült megállítanom az időt?!",
    hashtags: [],
    },
    {
    src: "/insta/4.jpg",
    postLink: "https://www.instagram.com/p/C5p5MQyoI08/",
    title: "atriubeauty",
    caption:
      "Tegnapi siker sztorink…..a két kép között 1/2 óra eltérés van! Ha téged is érdekel,hogy mitől fiatalodsz meg ilyen gyorsan,akkor várunk szeretettel!\n\n ☎️06/30-936-7951",
    hashtags: ["#antiaging", "#fiatalítás", "#proteinszál", "#egypillanatműve", "#antiage", "#fiatalodjvelem", "#allitsukmegazidot"],
    },
    {
    src: "/insta/3.jpg",
    postLink: "https://www.instagram.com/p/C_5DnN0oZU2/",
    title: "atriubeauty",
    caption:
      "Ha igényes, tartós körmökre vágysz, keresd bizalommal Ibolyát!\n ☎️+36 70 613 0084",
    hashtags: ["#tartóskörmök", "#igenyesmunka", "#nails", "#nailsofinstagram", "#nailsart", "#gelnails", "#nailsartist", "#géllakk", "#műköröm", "#művészwet"],
    },
    {
    src: "/insta/5.jpg",
    postLink: "https://www.instagram.com/p/CxBcJJ2oivO/",
    title: "atriubeauty",
    caption:
      "Nagy örömmel osztom meg veletek,hogy púder hatású szemöldök tetoválással bővülnek szolgáltatásaink,amit Magyarország egyik legjobb iskolájában sajátíthattam el.\n Bevezető akcióval készülök nektek,részletekért kövessétek az oldalunkat,vagy érdeklődjetek telefonon,vagy üzenetben!\n\n Szilvi ☎️ 06309367951",
    hashtags: [],
    },
    {
    src: "/insta/6.jpg",
    postLink: "https://www.instagram.com/p/CrjJ_-mok_v/",
    title: "atriubeauty",
    caption:
      "Egyik legifjabb,legcukibb vendégünket szeretném nektek bemutatni Olivér személyében,aki megdícsérte Rékát,hogy nem is fájt a hajvágása.😂🙏🏼\n A hajvágási koncepció pedig az volt,hogy tetszen az oviba a lányoknak.\n Olivér új frizkójával szerintem mindenkit levesz a lábáról!😉",
    hashtags: ["#gyerekhajvágás", "#hairdresser", "#hajvágás", "#design", "#cukifiú", "#imádjákacsajok", "#hair", "#hairstyles"],
    },
    {
    src: "/insta/7.jpg",
    postLink: "https://www.instagram.com/p/Cbvce29oqlY/",
    title: "atriubeauty",
    caption:
      "Egy új meglepetéssel készülök nektek!\n\n ‼️A @gigimagyarorszag -nál voltam egy új termékbemutatón,amit ti is imádni fogtok,hiszen mind a 21 hatóanyag tartalmával a bőrregenáció új korszakát nyitja meg előttünk‼️\n\n Remélem ti is nagyon várjátok már?!Nemsokára ki is próbálhatjátok nálam és a beszamolóval pedig hamarosan jelentkezem!",
    hashtags: ["#g4hungary", "#gigimagyarország", "#újdonság", "#bőrregeneráló", "#newage", "#kényeztesdabőröd"],
    },
    {
    src: "/insta/8.jpg",
    postLink: "https://www.instagram.com/p/CatzHtuIYKa/",
    title: "atriubeauty",
    caption:
      "CITY NAP szépség maszk\n\n Ez a pazar luxusmaszk alapvető bőrhelyreállító hatóanyagokkal készült, és természetes nedvességtartalékot képez. Azonnal hidratálja a bőrt, elősegíti a bőr megújuló folyamatát. Megerősíti a bőr védekező barrierét, és megakadályozza a nedvesség elvesztését. Serkenti a kollagén termelést, és feszesíti az arckontúrokat. Megőrzi a bőr puhaságát és rugalmasságát, eltünteti és kezeli a kiszáradás okozta ráncokat. Elősegíti a bőr friss, revitalizált megjelenését, és gyors regenerálódását.",
    hashtags: ["#luxus", "#antiaging", "#gigicosmetics", "#kényeztetés", "#mask", "#fiatalitás"],
    },
    {
    src: "/insta/9.jpg",
    postLink: "https://www.instagram.com/p/CaiG7-7IsIG/",
    title: "atriubeauty",
    caption:
      "Új színek voltak bevetésen, amik nagyon jól harmonizálnak egymással és mindezt még megbolondítva egy kis díszítéssel.A Casino Royal bordó színe már a nevével is visz mindent!",
    hashtags: ["#gellakk", "#manicure", "#hungariangirl", "#fashion", "#nails", "#nailsofinstagram", "#nailart", "#nailsinspiration", "#nailsdesign", "#nailstyle", "#nailsalon"],
    },
    {
    src: "/insta/10.jpg",
    postLink: "https://www.instagram.com/p/CaVC_3MoWRV/",
    title: "atriubeauty",
    caption:
      "A talpmasszázs közben egy-egy pont határozott ingerlésével testünk más részén váltunk ki automatikus ingert. A talpunkon lévő reflexzónákon keresztül tudjuk a legnagyobb hatást kifejteni testünkre, ezért nevezik a talpmasszázst reflex masszázsnak is. A talpán lévő zónák masszírozásával reflexhatást válthatunk ki a szervekben, így serkentve az öngyógyító mechanizmusokat. A reflexpontok masszírozásával növeli az adott ponthoz tartozó szerv vérbőségét, javítja az anyagcseréjét.\n\n Hatásai:\n\n ⭕️ A reflexpontok masszírozásával növeli az adott ponthoz tartozó szerv vérbőségét, javítja az anyagcseréjé \n⭕️ Csökkenti a stresszt és beindítja a méregtelenítést \n⭕️ Általános frissítő, feszültségoldó hatású\n ⭕️Testi-lelki egyensúlyt teremt\n ⭕️Aktiválja az öngyógyító erőket\n ⭕️Méregtelenít \n\nBízd magad szakemberre!",
    hashtags: ["#talpmasszázs", "#reflexologia", "#állapotjavítás", "#méregtelenítés", "#talpreflexológia", "#reflexpontok", "#egészség"],
    },
    {
    src: "/insta/11.jpg",
    postLink: "https://www.instagram.com/p/CaP14RUolFJ/",
    title: "atriubeauty",
    caption:
      "Nem feltétlenül szükséges alkalom ahhoz ,hogy egy laza feltűzött kontyot viseljük,viszont nagyon romantikus hatást kölcsönöz a tulajdonosának. Ez a hajfeltűzési technika modern, laza és ezért kissé kócos kinézetű, ami manapság trendi.Lehet a fejtetőn, vagy a tarkó magasságában, egyaránt jól néz ki. Bátran viseljétek hétköznaponként is!",
    hashtags: ["#hungariangirl", "#trend", "#hairstyle", "#hair", "#konty", "#laza", "#fashion", "#hetkoznapokra"],
    },
    {
    src: "/insta/12.jpg",
    postLink: "https://www.instagram.com/p/CZrnlTGIA6m/",
    title: "atriubeauty",
    caption:
      "A masszázs testi-lelki-szellemi szinten ható, gyógyító és felszabadító érintés. Az érintés a legősibb és legtisztább kommunikáció, és olyan alapvető igényünk, mint a levegő, víz és a táplálék.\n\n A masszázs az egyik legősibb gyógyító, közérzetjavító, betegségmegelőző eljárás, ami mind a mai napig óriási népszerűségnek örvend, természetesen teljesen jogosan. Számtalan masszázs-technika és módszer létezik, de a masszázs igazi alapja, lényege az érintésben rejlik. A legerősebb felszabadító és gyógyító ereje ugyanis a szeretettel és elfogadással társuló érintésnek, és az átadott szeretetenergiának van. Ez az, ami a leginkább képes felszínre hozni és feloldani a testben és lélekben lévő elakadásokat.\n\n Ha te is szeretnél harmóniába kerülni önmagaddal,keresd Danielát bizalommal:\n\n +36 70 770 8647\n\n Első alkalmat 10%-os kedvezménnyel tudjátok igénybe venni‼️",
    hashtags: [],
    },
    {
    src: "/insta/13.jpg",
    postLink: "https://www.instagram.com/p/CUCaltioyOz/",
    title: "atriubeauty",
    caption:
      "Még sosem voltak kék körmeim,így megérdemelt egy esélyt!\n Megbolondítva egy kis glitterrel,hogy még trendibb legyen! Nektek hogy tetszik, én egyszerűen imádom!?",
    hashtags: ["#bluenails", "#blue", "#glitternails", "#trend", "#mégsosempróbáltam", "#tetszik"],
    },
    {
    src: "/insta/14.jpg",
    postLink: "https://www.instagram.com/p/CS1VlyJIOgR/",
    title: "atriubeauty",
    caption:
      "💇🏻‍♀️Szonját körülbelül 8 éves korában hozta le édesanyja először Rékához,aki immáron 19 évessé cseperedett és azóta is hűséges látogatói fodrászuknak.💇🏼‍♀️\n Most is Kevin Murphy termékekkel értük el nála ezt a természetes hatást és lágy hullámokkal tettük egy kicsit játékossá a haját.\n\n ☎️ +36 30 494 9803",
    hashtags: ["#kevinmurphy", "#hullámoshaj", "#természetes", "#lágyhullámok", "#hűségesvendég ❤️"],
    }
  ];


  const sizeTop = [
    "w-[clamp(48px,3vw,48px)] h-[clamp(48px,3vw,48px)]", 
    "w-[clamp(96px,6vw,96px)] h-[clamp(96px,6vw,96px)]",
    "w-[clamp(128px,8vw,128px)] h-[clamp(128px,8vw,128px)]",
    "w-[clamp(176px,11vw,176px)] h-[clamp(176px,11vw,176px)]",
    "w-[clamp(144px,9vw,144px)] h-[clamp(144px,9vw,144px)]",
    "w-[clamp(128px,8vw,128px)] h-[clamp(128px,8vw,128px)]",
    "w-[clamp(96px,6vw,96px)] h-[clamp(96px,6vw,96px)]",
  ];
  const roundTop = ["rounded-md", "rounded-md", "rounded-xl", "rounded-2xl", "rounded-2xl", "rounded-xl", "rounded-md"];

  const sizeBottom = [
    "w-[clamp(96px,6vw,96px)] h-[clamp(96px,6vw,96px)]",
    "w-[clamp(128px,8vw,128px)] h-[clamp(128px,8vw,128px)]",
    "w-[clamp(144px,9vw,144px)] h-[clamp(144px,9vw,144px)]",
    "w-[clamp(176px,11vw,176px)] h-[clamp(176px,11vw,176px)]",
    "w-[clamp(128px,8vw,128px)] h-[clamp(128px,8vw,128px)]",
    "w-[clamp(96px,6vw,96px)] h-[clamp(96px,6vw,96px)]",
    "w-[clamp(48px,3vw,48px)] h-[clamp(48px,3vw,48px)]",
  ];
  const roundBottom = ["rounded-md", "rounded-xl", "rounded-2xl", "rounded-2xl", "rounded-xl", "rounded-md", "rounded-md"];

const renderImage = ( img: GalleryItem, i: number, sizeArr: string[], roundArr: string[] ) => (
    <button
      key={i}
      onClick={() => {
        setStartIndex(i);
        setOpen(true);
      }}
      className={`relative group ${roundArr[i % 7]} overflow-hidden`}
    >
      <img
        src={img.src}
        alt=""
        className={`${sizeArr[i % 7]} max-w-[180px] object-cover ${roundArr[i % 7]} transform transition-transform duration-500 group-hover:scale-105`}
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 duration-500 transition flex justify-center items-center">
        <FaInstagram className="text-white text-xl transform transition-transform duration-500 group-hover:scale-110" />
      </div>
    </button>
  );

  return (
    <section id="gallery" className="py-20 overflow-hidden relative scroll-mt-24">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center flex-col">
        <div className="text-[#121212] flex flex-col md:flex-row md:items-center md:justify-between px-6 py-4 rounded-md max-w-4xl m-auto gap-6 md:gap-0">
        <div className="flex flex-row items-center gap-4">
          <a
            href="https://www.instagram.com/atrium_szepsegszalon/"
            target="_blank"
            className="w-14 h-14 rounded-full p-[3px] bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400"
          >
            <img
              src={instaLogo}
              alt="profile"
              className="w-full h-full rounded-full border-2 border-white object-cover"
            />
          </a>
          <div className="text-left mt-2 sm:mt-0 mr-0 sm:mr-10">
            <div className="flex items-center justify-center sm:justify-start">
              <a
                href="https://www.instagram.com/atrium_szepsegszalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#121212] text-base font-extrabold uppercase tracking-wide hover:underline"
              >
                Atrium Beauty
              </a>
              <span className="ml-1 inline-flex items-center justify-center w-3 h-3 rounded-full">
                <svg
                  aria-label="Ellenőrzött"
                  fill="rgb(0, 149, 246)"
                  height="18"
                  role="img"
                  viewBox="0 0 40 40"
                  width="18"
                >
                  <title>Ellenőrzött</title>
                  <path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"></path>
                </svg>
              </span>
            </div>
            <a
              href="https://www.instagram.com/atrium_szepsegszalon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm mt-1 hover:underline block"
            >
              @atrium_szepsegszalon
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-between items-center gap-8 md:gap-10 mr-0 md:mr-5">
          <div className="text-center">
            <div className="text-[#121212] font-semibold">{/* {stats.media_count ?? "0"} */}137</div>
            <div className="text-gray-400 text-sm">Bejegyzés</div>
          </div>

          <div className="text-center">
            <div className="text-[#121212] font-semibold">{/* {stats.followers_count ?? "0"} */}472</div>
            <div className="text-gray-400 text-sm">Követő</div>
          </div>

          <div className="text-center">
            <div className="text-[#121212] font-semibold">{/* {stats.follows_count ?? "0"} */}972</div>
            <div className="text-gray-400 text-sm">Követés</div>
          </div>
        </div>
        <a
          href="https://www.instagram.com/atrium_szepsegszalon/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-[#118CFF] hover:bg-[#0b7fe6] px-4 py-2 rounded-md shadow-md flex items-center gap-2 transition duration-200 justify-center md:justify-start"
        >
          <Instagram size={20} />
          <span className="text-sm font-semibold">Követés</span>
        </a>
      </div>

        <div className="relative w-full">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-gray-600 text-[14px] 
                          before:content-['—'] before:block before:w-4 before:h-[2px] before:bg-white before:mr-2 before:inline-block
                          lg:bottom-10 lg:left-auto lg:translate-x-0 lg:right-[14rem]">
            #AtriumBeauty
          </div>
          <div className="flex justify-center items-center p-10">
            <div className="relative flex flex-wrap gap-5 justify-center max-w-6xl">
              

              <div className="relative flex justify-center items-end w-full gap-5 pr-10">
                {items.slice(0, 7).map((img, i) => renderImage(img, i, sizeTop, roundTop))}
              </div>

              <div className="flex justify-center items-start w-full gap-5 pl-10" >
                {items.slice(7, 14).map((img, i) => renderImage(img, i+7, sizeBottom, roundBottom))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <InstagramLightbox
        isOpen={open}
        onClose={() => setOpen(false)}
        items={items}
        startIndex={startIndex}
      />
    </section>
  );
};

/* export const getStaticProps = async () => {
  
  const statsUrl = `https://graph.facebook.com/v19.0/${process.env.INSTAGRAM_USER_ID}?fields=username,followers_count,follows_count,media_count&access_token=${process.env.INSTAGRAM_TOKEN}`;
  const mediaUrl = `https://graph.facebook.com/v19.0/${process.env.INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,timestamp,media_url,permalink&access_token=${process.env.INSTAGRAM_TOKEN}`;

  const [statsRes, mediaRes] = await Promise.all([
    fetch(statsUrl),
    fetch(mediaUrl),
  ]);

  const stats = await statsRes.json();
  const feed = await mediaRes.json();

  console.log({
    stats,
    feed,
  });
} */