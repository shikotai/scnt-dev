import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import News from "./pages/News/News";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Br28713383 from "./pages/Projects/br28713383/br28713383";

import News1 from "./pages/News/japan-news/japan-news";
import SwitzerlandNews from "./pages/News/switzerland-news/switzerland-news";
import Referendum from "./pages/News/referendum/referendum";
import BeijingNews from "./pages/News/beijing-news/beijing-news";
import UrumqiNews from "./pages/News/urumqi-news/urumqi-news";
import AstanaSymposiumNews from "./pages/News/astana-news/astana-news";

import Members from "./pages/Members/Members";
import UaliShynybek from "./pages/Members/uali-shynybek/uali-shynybek";
import TursunovaAigul from "./pages/Members/tursunova-aigul/tursunova-aigul";
import SeisenovaAknur from "./pages/Members/seisenova-aknur/seisenova-aknur";
import MutushevAlibek from "./pages/Members/mutushev-alibek/mutushev-alibek";
import KapizovOmirzak from "./pages/Members/kapizov-omirzak/kapizov-omirzak";
import DaurenMukhanov from "./pages/Members/dauren-mukhanov/dauren-mukhanov";
import SadykAliman from "./pages/Members/sadyk-aliman/sadyk-aliman";
import MuratovaAinur from "./pages/Members/muratova-ainur/muratova-ainur";
import GabdullinaAiman from "./pages/Members/gabdullina-aiman/gabdullina-aiman";
import TuratpekovaZhanar from "./pages/Members/turatpekova-zhanar/turatpekova-zhanar";
import SanuarAyazhan from "./pages/Members/sanuar-ayazhan/sanuar-ayazhan";
import SeisenovErzhan from "./pages/Members/seisenov-erzhan/seisenov-erzhan";
import AitkalikyzyMira from "./pages/Members/aitkalikyzy-mira/aitkalikyzy-mira";
import BurashevGaidar from "./pages/Members/burashev-gaidar/burashev-gaidar";
import ManapAida from "./pages/Members/manap-aida/manap-aida";
import AnuarbekovaNazerke from "./pages/Members/anuarbekova-nazerke/anuarbekova-nazerke";
import AitzhanMentai from "./pages/Members/aitzhan-mentai/aitzhan-mentai";
import NuralyAsiya from "./pages/Members/nuraly-asiya/nuraly-asiya";
import OryngalievaSandugash from "./pages/Members/oryngalieva-sandugash/oryngalieva-sandugash";
import KokenaevaDiana from "./pages/Members/kokenaeva-diana/kokenaeva-diana";
import ManapKhalima from "./pages/Members/manap-khalima/manap-khalima";
import MyshyrovaZhanat from "./pages/Members/myshyrova-zhanat/myshyrova-zhanat";
import BerdievaAlfiya from "./pages/Members/berdieva-alfiya/berdieva-alfiya";
import SeisenovB from "./pages/Members/seisenov-berdibai/seisenov-berdibai";
import SanatAida from "./pages/Members/sanat-aida/sanat-aida";
import MukhanovaSaida from "./pages/Members/mukhanova-saida/mukhanova-saida";

import JapanTrip2026 from "./pages/News/japan-trip-2026/japan-trip-2026";
import Buyout from "./pages/Buyout/buyout";
import Partners from "./pages/Partners/partners";

const MEMBERS_PATH = "/staff-directory-scnt-2026";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/br28713383" element={<Br28713383 />} />
        <Route path="/buyout" element={<Buyout />} />
        <Route path="/partners" element={<Partners />} />

        {/* News pages */}
        <Route path="/news/japan-news" element={<News1 />} />

        <Route
          path="/news/switzerland-news"
          element={<SwitzerlandNews />}
        />

        <Route path="/news/beijing-news" element={<BeijingNews />} />
        <Route path="/news/urumqi-news" element={<UrumqiNews />} />
        <Route path="/news/referendum" element={<Referendum />} />

        <Route
          path="/news/astana-news"
          element={<AstanaSymposiumNews />}
        />

        <Route path="/news/japan-trip-2026" element={<JapanTrip2026 />} />

        {/* Disable old public members URLs */}
        <Route path="/members" element={<Navigate to="/" replace />} />
        <Route path="/members/*" element={<Navigate to="/" replace />} />

        {/* Hidden staff directory */}
        <Route path={MEMBERS_PATH} element={<Members />} />

        {/* Individual staff profiles */}
        <Route
          path={`${MEMBERS_PATH}/mutushev-alibek`}
          element={<MutushevAlibek />}
        />

        <Route
          path={`${MEMBERS_PATH}/seisenova-aknur`}
          element={<SeisenovaAknur />}
        />

        <Route
          path={`${MEMBERS_PATH}/kapizov-omirzak`}
          element={<KapizovOmirzak />}
        />

        <Route
          path={`${MEMBERS_PATH}/oryngalieva-sandugash`}
          element={<OryngalievaSandugash />}
        />

        <Route
          path={`${MEMBERS_PATH}/dauren-mukhanov`}
          element={<DaurenMukhanov />}
        />

        <Route
          path={`${MEMBERS_PATH}/nuraly-asiya`}
          element={<NuralyAsiya />}
        />

        <Route
          path={`${MEMBERS_PATH}/muratova-ainur`}
          element={<MuratovaAinur />}
        />

        <Route
          path={`${MEMBERS_PATH}/gabdullina-aiman`}
          element={<GabdullinaAiman />}
        />

        <Route
          path={`${MEMBERS_PATH}/sadyk-aliman`}
          element={<SadykAliman />}
        />

        <Route
          path={`${MEMBERS_PATH}/kokenaeva-diana`}
          element={<KokenaevaDiana />}
        />

        <Route
          path={`${MEMBERS_PATH}/turatpekova-zhanar`}
          element={<TuratpekovaZhanar />}
        />

        <Route
          path={`${MEMBERS_PATH}/sanat-aida`}
          element={<SanatAida />}
        />

        <Route
          path={`${MEMBERS_PATH}/seisenov-berdibai`}
          element={<SeisenovB />}
        />

        <Route
          path={`${MEMBERS_PATH}/seisenov-erzhan`}
          element={<SeisenovErzhan />}
        />

        <Route
          path={`${MEMBERS_PATH}/aitkalikyzy-mira`}
          element={<AitkalikyzyMira />}
        />

        <Route
          path={`${MEMBERS_PATH}/manap-khalima`}
          element={<ManapKhalima />}
        />

        <Route
          path={`${MEMBERS_PATH}/burashev-gaidar`}
          element={<BurashevGaidar />}
        />

        <Route
          path={`${MEMBERS_PATH}/aitzhan-mentai`}
          element={<AitzhanMentai />}
        />

        <Route
          path={`${MEMBERS_PATH}/manap-aida`}
          element={<ManapAida />}
        />

        <Route
          path={`${MEMBERS_PATH}/mukhanova-saida`}
          element={<MukhanovaSaida />}
        />

        <Route
          path={`${MEMBERS_PATH}/myshyrova-zhanat`}
          element={<MyshyrovaZhanat />}
        />

        <Route
          path={`${MEMBERS_PATH}/sanuar-ayazhan`}
          element={<SanuarAyazhan />}
        />

        <Route
          path={`${MEMBERS_PATH}/uali-shynybek`}
          element={<UaliShynybek />}
        />

        <Route
          path={`${MEMBERS_PATH}/anuarbekova-nazerke`}
          element={<AnuarbekovaNazerke />}
        />

        <Route
          path={`${MEMBERS_PATH}/tursunova-aigul`}
          element={<TursunovaAigul />}
        />

        <Route
          path={`${MEMBERS_PATH}/berdieva-alfiya`}
          element={<BerdievaAlfiya />}
        />

       

        {/* Unknown URLs return to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;