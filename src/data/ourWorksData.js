import worksThumbnail1 from "../assets/projects/sarapuu/Sarapuu.png";
import worksThumbnail2 from "../assets/projects/above/abovespace.png";

import sarapuu from "../assets/projects/sarapuu/Sarapuu2.png";
import above from "../assets/projects/above/abovespace.png";

// Sarapuu — branding
import sarapuuLogoThumb from "../assets/projects/sarapuu/Logo1.PNG";

// Sarapuu — web design
import sarapuuWebThumb from "../assets/projects/sarapuu/Sarapuu.png"; // макбук-мокап
import sarapuuPrototype from "../assets/projects/sarapuu/prototype3.png";
import sarapuuDesignHome from "../assets/projects/sarapuu/SaparuuDesignV5.png";
import sarapuuDesignEnvironment from "../assets/projects/sarapuu/SaparuuDesign_environmentV1.png";
import sarapuuDesignSales from "../assets/projects/sarapuu/SaparuuDesign_salesinfo.png";

// Omadoma — branding
import omadomaLogoThumb from "../assets/projects/omadoma/omadoma_logo.png";
import omadomaLogoThumb1 from "../assets/projects/omadoma/omadoma-logo.svg";
import omadomaWebThumb  from "../assets/projects/omadoma/desktop_mobile.png";
import omadomaHome  from "../assets/projects/omadoma/omadoma_home3.png";
import omadomaMeist     from "../assets/projects/omadoma/meist.png";
import omadomaTeenused  from "../assets/projects/omadoma/omadoma_teenused2.png";
import omadomaServices  from "../assets/projects/omadoma/services.png";

// Laeproff — branding
import laeproffThumb from "../assets/projects/laeproff/var1.png";
import laeproffHome  from "../assets/projects/laeproff/laeproff_home.png";
import laeproffLogo  from "../assets/projects/laeproff/var2.PNG";

// Kodujalagi — branding
import koduThumb from "../assets/projects/kodujalagi/var6.PNG";
import koduHome  from "../assets/projects/kodujalagi/kodujalagi_home.png";
import koduMiks  from "../assets/projects/kodujalagi/kodujalagi_miks.png";
import koduLogo  from "../assets/projects/kodujalagi/logo_kodujalagi_1.svg";

// Ikodomos — branding
import ikodomosThumb    from "../assets/projects/ikodomos/mockup.png";
import ikodomosLogo     from "../assets/projects/ikodomos/final_newlogo_withWhiteBG.png";
import ikodomosHome     from "../assets/projects/ikodomos/Home_page_V4.png";
import ikodomosLogin    from "../assets/projects/ikodomos/login_page_V3.png";
import ikodomosRegister from "../assets/projects/ikodomos/register_page_V2.png";
import ikodomosDashboard from "../assets/projects/ikodomos/profile_dashboard.png";
import ikodomosServiceChoice from "../assets/projects/ikodomos/profile_service_choice.png";
import ikodomosServiceStep from "../assets/projects/ikodomos/profile_service1_step1.png";

//gloreal
import gloRealLogoThumb   from "../assets/projects/gloreal/logo_final_v2.svg";
import gloRealCardsFront  from "../assets/projects/gloreal/bussiness_cards_mockup.png";
import gloRealCardsBack   from "../assets/projects/gloreal/bussiness_cards_mockup1.png";
import gloRealFolder      from "../assets/projects/gloreal/newFolderNewKaust2.png";

// web-design
import gloRealWebThumb    from "../assets/projects/gloreal/mockup.png";
import gloRealHome        from "../assets/projects/gloreal/gloreal_new.png";
import gloRealTeam        from "../assets/projects/gloreal/pic1_2active.PNG";
import gloRealTeam2        from "../assets/projects/gloreal/3veel1tava3.PNG";

//above
import aboveSpaceThumb from "../assets/projects/abovespace/abovespace.png";
import aboveSpaceLogo  from "../assets/projects/abovespace/ASlogo_raketa2.png";

//boxing
import boxingThumb  from "../assets/projects/boxing/poster7.png";
import boxingPoster1 from "../assets/projects/boxing/afisha_v5.png";
import boxingPoster2 from "../assets/projects/boxing/final_test.png";
import boxingPoster3 from "../assets/projects/boxing/finish3.png";
import boxingPoster4 from "../assets/projects/boxing/IMG_9143_16.png";
import boxingPoster5 from "../assets/projects/boxing/KickBox.png";
import boxingPoster6 from "../assets/projects/boxing/post.png";
import boxingPoster7 from "../assets/projects/boxing/poster_test.png";
import boxingYoutube from "../assets/projects/boxing/youtube2.png";

//Padel911
import padel911Logo       from "../assets/projects/padel911/logo.png";
import padel911FastCupBadge   from "../assets/projects/padel911/fastcup.png";
import padel911GirlPowerBadge from "../assets/projects/padel911/girlpower2.png";
import padel911TeamCupBadge   from "../assets/projects/padel911/teamcup3.png";

import padel911Tshirts     from "../assets/projects/padel911/black-white-colored.png";
import padel911Coupon      from "../assets/projects/padel911/coupon-01.png";
import padel911DiplomGirls from "../assets/projects/padel911/diplom_girls_1st.png";
import padel911DiplomFast  from "../assets/projects/padel911/diplom-fastcup-1st.png";
import padel911DiplomMix   from "../assets/projects/padel911/diplom-teamcupmix-1st.png";

import padel911PostDecember  from "../assets/projects/padel911/post_december.png";
import padel911PostGirlpower from "../assets/projects/padel911/post_girlpower.png";
import padel911PostHohoho    from "../assets/projects/padel911/post_hohoho.png";
import padel911PostMarch     from "../assets/projects/padel911/march_post.png";
import padel911PostAmericano from "../assets/projects/padel911/post_americano.png";
import padel911PostBlue      from "../assets/projects/padel911/post_blue.png";




// ─── Доступные категории ──────────────────────────────────────────────────
// branding | web-design | graphic-design | print | social-media | photography

// ─── Доступные этапы ─────────────────────────────────────────────────────
// planning | implementation | draft | testing | result
// Указывай только те этапы, которые реально есть у проекта.
// Тексты этапов — в файлах переводов: works.{id}.stages.{stage}

const ourWorksData = [
  {
    id: 1,
    category: "branding",
    featured: true,
    thumbnail: sarapuuLogoThumb,
    images: [sarapuuLogoThumb],
    link: "https://sarapuukrundid.ee/",
    stages: ["planning", "draft", "result"],
  },
  {
    id: 2,
    category: "web-design",
    featured: true,
    thumbnail: laeproffThumb,
    images: [laeproffHome, laeproffLogo],
    link: "https://laeproff.vercel.app/",
    stages: ["planning", "implementation", "draft", "testing", "result"],
    },
  {
    id: 3,
    category: "web-design",
    featured: true,
    thumbnail: koduThumb,
    images: [koduHome, koduMiks, koduLogo],
    link: "https://kodu-ja-lagi.vercel.app/",
    stages: ["planning", "implementation", "draft", "testing", "result"],
    },
    {
    id: 4,
    category: "web-design",
    featured: true,
    thumbnail: omadomaWebThumb,
    images: [omadomaHome,omadomaMeist, omadomaTeenused, omadomaServices],
    link: "https://omadoma.ee/",
    stages: ["planning", "implementation", "draft", "testing", "result"],
  },
{
  id: 5,
  category: "web-design",
  featured: true,
  thumbnail: gloRealWebThumb,
  images: [gloRealHome],
  link: "https://gloreal.ee/",
  stages: ["planning", "implementation", "draft", "testing", "result"],
},
  {
    id: 6,
    category: "web-design",
    featured: true,
    thumbnail: ikodomosThumb,
    images: [
    ikodomosLogo,
    ikodomosHome,
    ikodomosLogin,
    ikodomosRegister,
    ikodomosDashboard,
    ikodomosServiceChoice,
    ikodomosServiceStep,
    ],
    link: "https://ikodomos.gloreal.ee/",
    stages: ["planning", "implementation", "draft", "testing", "result"],
    },

  // ── Работы только на странице /works ─────────────────────────────────
  {
id: 7,
category: "branding",
featured: true,
thumbnail: padel911Logo,
images: [padel911Logo, padel911FastCupBadge, padel911GirlPowerBadge, padel911TeamCupBadge],
stages: ["planning", "draft", "result"],
},

    {
    id: 12,
    category: "graphic-design",
    featured: true,
    thumbnail: aboveSpaceThumb,
    images: [aboveSpaceLogo],
    stages: ["planning", "draft", "result"],
    },
  {
    id: 8,
    category: "web-design",
    featured: true,
    thumbnail: sarapuuWebThumb,
    images: [
      sarapuuPrototype,
      sarapuuDesignHome,
      sarapuuDesignEnvironment,
      sarapuuDesignSales,
    ],
    link: "https://sarapuukrundid.ee/",
    stages: ["planning", "implementation", "draft", "testing", "result"],
  },
  {
    id: 9,
    category: "branding",
    featured: true,
    thumbnail: omadomaLogoThumb1,
    images: [omadomaLogoThumb],
    link: "https://omadoma.ee/",
    stages: ["planning", "implementation", "draft", "result"],
    },
    {
id: 10,
category: "print",
featured: true,
thumbnail: padel911Tshirts,
images: [padel911Coupon, padel911DiplomGirls, padel911DiplomFast, padel911DiplomMix],
stages: ["planning", "draft", "result"],
},


      {
  id: 13,
  category: "branding",
  featured: true,
  thumbnail: gloRealLogoThumb,
  images: [gloRealCardsFront, gloRealCardsBack, gloRealFolder],
  link: "https://gloreal.ee/",
  stages: ["planning", "implementation", "draft", "result"],
},
    {
    id: 11,
    category: "graphic-design",
    featured: true,
    thumbnail: boxingThumb,
    images: [
    boxingPoster1,
    boxingPoster2,
    boxingPoster3,
    boxingPoster4,
    boxingPoster5,
    boxingPoster6,
    boxingPoster7,
    boxingYoutube,
    ],
    stages: ["planning", "draft", "result"],
    },
    {
id: 14,
category: "social-media",
featured: true,
thumbnail: padel911PostDecember,
images: [
padel911PostMarch,
padel911PostGirlpower,
padel911PostHohoho,
padel911PostAmericano,
padel911PostBlue,
],
stages: ["planning", "draft", "result"],
},


];

export default ourWorksData;
