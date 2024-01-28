"use strict";(self.webpackChunkfhir_demo_2024=self.webpackChunkfhir_demo_2024||[]).push([[783],{2186:function(e,t,a){a.d(t,{Z:function(){return m}});a(8320);var i=a(7294),l=a(4160),n=a(6226),r=a(3516),s=a(5867),o=a(6774);const c=(0,l.dq)("/");function m(e){let{children:t,location:a}=e;const{search:m,pathname:u}=a,{selectedFeatures:k={}}=i.useContext(s.Ym),v=Object.keys(k).sort(),d=Object.keys(r.D).filter((e=>{var t;return!v.length||(null===(t=r.D[e].features)||void 0===t?void 0:t.some((e=>v.some((t=>t===e)))))})),h=d.indexOf(u.replace(c,"").replaceAll("/","")),j=d.length>1?i.createElement("nav",{className:"prevNext"},i.createElement("div",null,h>0?i.createElement(l.rU,{to:"/"+d[h-1]+m},"Previous ",i.createElement("img",{src:o.Z,alt:""})):i.createElement(l.rU,{to:"/"+d[d.length-1]+m},"Last ",i.createElement("img",{src:o.Z,alt:""}))),i.createElement("div",null,h<d.length-1?i.createElement(l.rU,{to:"/"+d[h+1]+m},"Next ",i.createElement("img",{src:o.Z,alt:""})):i.createElement(l.rU,{to:"/"+d[0]+m},"First",i.createElement("img",{src:o.Z,alt:""})))):null;return i.createElement(n.Z,null,i.createElement("header",null,v.length?i.createElement(i.Fragment,null,i.createElement("hr",null),i.createElement("h3",null,"Showing demos with feature"+(v.length>1?"s":"")+":"),i.createElement(s.ZP,{list:v}),i.createElement("hr",null)):null,j),i.createElement("main",{className:"demo"},t),j,i.createElement("img",{className:"decoration",src:o.Z,alt:""}))}},336:function(e,t,a){a.r(t),a.d(t,{Head:function(){return m},default:function(){return u}});var i=a(7294),l=a(2186),n=a(5867),r=a(3516),s=a.p+"static/bcb-medical-fd1ab4cfad949a2f70a3cd3998c71e12.svg",o=a.p+"static/bcb-medical-omavointi-2b6523551e585bd93ce970e2334b6415.png",c=a.p+"static/bcb-medical-suite-38ff06fa35efcd0ef185c61a7ade0192.png";const m=()=>i.createElement("title",null,"FHIR Demo 2023: BCB Medical");function u(e){let{location:t}=e;const a=r.D["bcb-medical"].features;return i.createElement(l.Z,{features:a,location:t},i.createElement("h1",null,i.createElement("a",{href:"https://www.microsoft.com/"},i.createElement("img",{src:s,alt:"BCB Medical"}))),i.createElement(n.ZP,{list:a}),i.createElement("aside",{className:"event atk-paivat"},i.createElement("h2",null,"ATK-päivät: Ständi 221"),i.createElement("p",null,"ATK-päivillä 2023 BCB Medicalin osastolla järjestetään demo Omavointi-tuoteperheen kyvykkyydestä integroitua FHIR-rajapintoja tarjoaviin järjestelmiin (esim. UNA).")),i.createElement("section",{id:"about"},i.createElement("p",null,"BCB Medical Oy on terveydenhuollon tietojärjestelmätoimittaja, joka on vuodesta 2003 kehittänyt hoidon laadun ja vaikuttavuuden seurantajärjestelmiä terveydenhuollon ammattilaisten käyttöön ja sähköisiä asiointipalveluita potilaille. BCB tautikohtaiset laaturekisterit ja Omavointi sähköiset asiointipalvelut ovat käytössä laajasti kaikilla Suomen hyvinvointialueilla."),i.createElement("p",null,"Rekisterit ovat kiinteästi integroituja sairaaloiden potilastietojärjestelmiin sekä potilaan sähköisiin Omavointi-kyselyihin. Sähköisen asioinnin kokonaisratkaisu, Omavointi-mobiili, nivoutuu myös osaksi hyvinvointialueiden olemassa olevia järjestelmiä. BCB-järjestelmien avulla kerättyä tietoa voidaan hyödyntää monipuolisesti tietojohtamisen välineenä. Erilaisilla raportti- ja analytiikkatyökaluilla sekä muilla jatkuvasti kehittyvillä tiedon hyödyntämisen välineillä voidaan seurata ja kehittää prosesseja niin yksittäisellä klinikalla kuin koko hyvinvointialueella."),i.createElement("p",null,"BCB-järjestelmiin voidaan FHIR-integraation avulla tuoda potilaan henkilö- ja ajanvaraus­tietoja sekä lääkitys- ja havainto-arvo­tietoja potilastieto­järjestelmistä tai etä- ja kotimittauslaitteista (esim. PEF-mittaukset). BCB Medicalin kehittämät laaturekisterit ja Omavointi-ratkaisut ovat kykeneviä integroitumaan useisiin eri FHIR-rajapintoja tarjoaviin järjestelmiin (esim. Apotin Epic-järjestelmä).")),i.createElement("section",{id:"bcb-suite"},i.createElement("h2",null,"Hoidon laadun ja vaikuttavuuden seuranta BCB Suite -kokonaisuuden avulla"),i.createElement("img",{src:c,alt:"BCB Suite koostuu BCB Tautikohtaisista laaturekistereistä ja BCB Omavointi-kyselyistä sekä BCB Integraatioalustasta ja BCB Data ja analytiikka -komponenteista."}),i.createElement("div",{className:"media"},i.createElement("iframe",{width:"100%",height:"100%",src:"https://player.vimeo.com/video/825741800?h=d63ed24fb5&title=0&byline=0",title:"BCB Suite",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0}))),i.createElement("section",{id:"omavointi"},i.createElement("h2",null,"Sähköinen kokonaisasiointi hyvinvointialueilla Omavointi-ratkaisuja hyödyntäen"),i.createElement("img",{src:o,alt:"BCB Omavointi -mobiilin osia ovat Omavointi-dynaamiset palvelupolut, Omavointi-kyselyt (BCB Rekisterikohtaiset kyselyt), Omavointi-etäseuranta, Omavointi -kansalaisen lomakkeet, Omavointi-palautteet sekä Omavointi-etävastaanotto."}),i.createElement("div",{className:"media"},i.createElement("iframe",{width:"100%",height:"100%",src:"https://player.vimeo.com/video/827636381?h=cbce9e84d7&title=0&byline=0",title:"BCB Omavointi kokonaisratkaisut",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0}))),i.createElement("script",{src:"https://player.vimeo.com/api/player.js"}),i.createElement("section",{id:"contact"},i.createElement("h3",null,"Contact"),i.createElement("div",{className:"business-card"},i.createElement("h3",null,"Janne Heikkinen"),i.createElement("p",null,"Data Integration Architect"),i.createElement("address",null,i.createElement("a",{href:"mailto:janne.heikkinen@bcbmedical.com"},"janne.heikkinen@bcbmedical.com")))))}}}]);
//# sourceMappingURL=component---src-pages-bcb-medical-js-e758d3d38f83ac91ee23.js.map