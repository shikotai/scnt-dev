import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import News from "./pages/News/News";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Br28713383 from "./pages/Projects/br28713383/br28713383";
import News1 from "./pages/News/japan-news/japan-news";
import Members from "./pages/Members/Members";
import UaliShynybek from "./pages/Members/uali-shynybek/uali-shynybek";
import TursunovaAigul from "./pages/Members/tursunova-aigul/tursunova-aigul";
import SeisenovaAknur from "./pages/Members/seisenova-aknur/seisenova-aknur";
import MutushevAlibek from "./pages/Members/mutushev-alibek/mutushev-alibek";
import KapizovOmirzak from "./pages/Members/kapizov-omirzak/kapizov-omirzak";
import DaurenMukhanov from "./pages/Members/dauren-mukhanov/dauren-mukhanov";
import SadykAliman from "./pages/Members/sadyk-aliman/sadyk-aliman";
import Buyout from "./pages/Buyout/buyout";
import GabdullinaAiman from "./pages/Members/gabdullina-aiman/gabdullina-aiman";
import TuratpekovaZhanar from "./pages/Members/turatpekova-zhanar/turatpekova-zhanar";
import SanuarAyazhan from "./pages/Members/sanuar-ayazhan/sanuar-ayazhan";
import SeisenovErzhan from "./pages/Members/seisenov-erzhan/seisenov-erzhan";
import BurashevGaidar from "./pages/Members/burashev-gaidar/burashev-gaidar";
import ManapAida from "./pages/Members/manap-aida/manap-aida";
import AnuarbekovaNazerke from "./pages/Members/anuarbekova-nazerke/anuarbekova-nazerke";
import AitkalikyzyMira from "./pages/Members/aitkalikyzy-mira/aitkalikyzy-mira";
import AitzhanMentai from "./pages/Members/aitzhan-mentai/aitzhan-mentai";
import NuralyAsiya from "./pages/Members/nuraly-asiya/nuraly-asiya";
import OryngalievaSandugash from "./pages/Members/oryngalieva-sandugash/oryngalieva-sandugash";
import KokenaevaDiana from "./pages/Members/kokenaeva-diana/kokenaeva-diana";
import ManapKhalima from "./pages/Members/manap-khalima/manap-khalima";
import MyshyrovaZhanat from "./pages/Members/myshyrova-zhanat/myshyrova-zhanat";
import BerdievaAlfiya from "./pages/Members/berdieva-alfiya/berdieva-alfiya";
import MuratovaAinur from "./pages/Members/muratova-ainur/muratova-ainur";
import SwitzerlandNews from "./pages/News/switzerland-news/switzerland-news";
import SanatAida from "./pages/Members/sanat-aida/sanat-aida";
import Referendum from "./pages/News/referendum/referendum";
import SeisenovB from "./pages/Members/seisenov-berdibai/seisenov-berdibai";
import BeijingNews from "./pages/News/beijing-news/beijing-news";
import UrumqiNews from "./pages/News/urumqi-news/urumqi-news";
import MukhanovaSaida from "./pages/Members/mukhanova-saida/mukhanova-saida";
import Partners from "./pages/Partners/partners";
import AstanaNews from "./lang/ru/news/astana-news";
import AstanaSymposiumNews from "./pages/News/astana-news/astana-news";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/br28713383" element={<Br28713383 />} />
        <Route path="/news/japan-news" element = {<News1 />} />
        <Route path="/members" element={<Members />} />
        <Route path="/members/uali-shynybek" element={<UaliShynybek />} />
        <Route path="/members/tursunova-aigul" element = {<TursunovaAigul />} />
        <Route path="/members/seisenova-aknur" element = {<SeisenovaAknur />} />
        <Route path="/members/mutushev-alibek" element = {<MutushevAlibek />} />
        <Route path="/members/kapizov-omirzak" element = {<KapizovOmirzak />} />
        <Route path="/members/dauren-mukhanov" element = {<DaurenMukhanov />} />
        <Route path="/members/sadyk-aliman" element = {<SadykAliman />} />
        <Route path="/members/muratova-ainur" element = {<MuratovaAinur />} />
        <Route path="/members/gabdullina-aiman" element = {<GabdullinaAiman />} />
        <Route path="/members/turatpekova-zhanar" element = {<TuratpekovaZhanar />} />
        <Route path="/members/sanuar-ayazhan" element = {<SanuarAyazhan />} />
        <Route path="/members/seisenov-erzhan" element = {<SeisenovErzhan />} />
        <Route path="/members/aitkalikyzy-mira" element = {<AitkalikyzyMira />} />
        <Route path="/members/burashev-gaidar" element = {<BurashevGaidar />} />
        <Route path="/members/manap-aida" element = {<ManapAida />} />
        <Route path="/members/anuarbekova-nazerke" element = {<AnuarbekovaNazerke />} />
        <Route path="/members/aitzhan-mentai" element = {<AitzhanMentai />} />
        <Route path="/members/nuraly-asiya" element = {<NuralyAsiya />} />
        <Route path="/members/oryngalieva-sandugash" element = {<OryngalievaSandugash />} />
        <Route path="/members/kokenaeva-diana" element = {<KokenaevaDiana />} />
        <Route path="/members/manap-khalima" element = {<ManapKhalima />} />
        <Route path="/members/myshyrova-zhanat" element = {<MyshyrovaZhanat />} />
        <Route path="/members/berdieva-alfiya" element = {<BerdievaAlfiya />} />
        <Route path="/news/switzerland-news" element = {<SwitzerlandNews />} />
        <Route path="/buyout" element={<Buyout />} />
        <Route path="/members/seisenov-berdibai" element = {<SeisenovB />} />
        <Route path="/members/sanat-aida" element = {<SanatAida />} />
        <Route path="/news/beijing-news" element = {<BeijingNews />} />
        <Route path="/news/urumqi-news" element = {<UrumqiNews />} />
        <Route path="/news/referendum" element = {<Referendum />} />
        <Route path="/members/mukhanova-saida" element = {<MukhanovaSaida />} />
        <Route path="/partners" element = {<Partners />} />
        <Route path="/news/astana-news" element = {<AstanaSymposiumNews />} />
      </Routes>
    </Router>
  );
};

export default App;
