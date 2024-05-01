"use strict";(self.webpackChunkfhir_demo_2024=self.webpackChunkfhir_demo_2024||[]).push([[569],{9498:function(e,I,i){i.d(I,{A:function(){return A}});i(2041);var t=i(6540),l=i(4810),c=i(6194),a=i(7507),n=i(2154),g=i(2854),M=i(6548);const N=(0,l.Fe)("/");function A(e){let{children:I,location:i}=e;const{search:A,pathname:m}=i,{selectedRoles:s={}}=t.useContext(n.li),C=Object.keys(s).sort(),o=Object.keys(a.n).filter((e=>{var I;return!a.n[e].hidden&&(!C.length||(null===(I=a.n[e].roles)||void 0===I?void 0:I.some((e=>C.some((I=>I===e))))))})),j=o.indexOf(m.replace(N,"").replaceAll("/","")),d=o.length>1?t.createElement("nav",{className:"prevNext"},t.createElement("div",null,j>0?t.createElement(l.N_,{to:"/"+o[j-1]+A},t.createElement("div",null,t.createElement("span",{className:"navSymbol"},"<")," "," ",t.createElement("span",{className:"navText"},"Previous")," "," ",t.createElement("img",{src:g.A,alt:""}))):t.createElement(l.N_,{to:"/"+o[o.length-1]+A},t.createElement("div",null,t.createElement("span",{className:"navSymbol"},"<")," "," ",t.createElement("span",{className:"navText"},"Last")," "," ",t.createElement("img",{src:g.A,alt:""})))),t.createElement("div",null,j<o.length-1?t.createElement(l.N_,{to:"/"+o[j+1]+A},t.createElement("div",null,t.createElement("img",{src:g.A,alt:""})," "," ",t.createElement("span",{className:"navText"},"Next")," "," ",t.createElement("span",{className:"navSymbol"},">"))):t.createElement(l.N_,{to:"/"+o[0]+A},t.createElement("div",null,t.createElement("img",{src:g.A,alt:""})," "," ",t.createElement("span",{className:"navText"},"First")," "," ",t.createElement("span",{className:"navSymbol"},">"))))):null;return t.createElement(c.A,{id:"demo"},t.createElement("header",null,t.createElement("h1",null,"FHIR Demo 2024 ",t.createElement("img",{className:"inline",src:g.A,alt:""})),C.length?t.createElement(t.Fragment,null,t.createElement("hr",null),t.createElement("h3",null,j>=0?t.createElement(t.Fragment,null,"Participant #"+(j+1)+" of "+o.length+" with role"+(C.length>1?"s":""),t.createElement("span",{className:"ariaHelp"}," ",C.join(" or "))):null,t.createElement(n.Ay,{list:n.Z4})),t.createElement("hr",null)):t.createElement("p",null,"Participant #"+(j+1)+" / "+o.length)),d,t.createElement("main",{className:"demo"},I),d,t.createElement("img",{className:"decoration",src:M.A,alt:""}))}},7076:function(e,I,i){i.r(I),i.d(I,{Head:function(){return M},default:function(){return N}});var t=i(6540),l=i(6194),c=i(9498),a=i(2154),n=i(7507),g="data:image/jpeg;base64,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";function M(){const e=t.createElement("title",null,"FHIR Demo 2024: Solita");return(0,l.x)({title:e})}function N(e){let{location:I}=e;const i=n.n.solita.roles;return t.createElement(c.A,{roles:i,location:I},t.createElement("h1",{className:"white"},t.createElement("a",{href:"https://www.solita.fi/"},t.createElement("img",{src:g,alt:"Solita"}))),t.createElement(a.Ay,{list:i}),t.createElement("aside",{className:"event atk-paivat"},t.createElement("h2",null,"ATK-päivät: Ständi 200"),t.createElement("p",null,"Tervetuloa osastollemme keskustelemaan siitä, kuinka rakennamme vaikuttavia terveydenhuollon ratkaisuja FHIR standardin avulla!"),t.createElement("p",null,"Esittelemme demoja ja keskustelemme osastollamme koko tapahtuman ajan.")),t.createElement("section",{id:"about"},t.createElement("h2",null,"Solita - We harness human insight and intelligent technologies to impact many lives"),t.createElement("p",null,"At Solita we want to build impactful services that lead to a better life for all of us. We do that by harnessing human insight and intelligent technologies."),t.createElement("p",null,"Solita uses the HL7 FHIR specification in almost all healthcare integration and interoperability implementations in both the public and private sectors. The FHIR standard is used both as an interface technology for medical MDR devices and for integrations in patient registry systems.")),t.createElement("section",{id:"omaolo"},t.createElement("h2",null,"Omaolo - Finland's national symptom assessment service"),t.createElement("p",null,"Solita has developed a symptom assessment service ",t.createElement("a",{href:"https://www.omaolo.fi/"},"Omaolo")," for DigiFinland, a state-owned development company."),t.createElement("p",null,"In Omaolo, you can find social and health services quickly and without barriers, 24 hours a day - even if you are at home! The recommendations provided by Omaolo are always personal. They are based on the most up-to-date scientific evidence and nationally determined criteria."),t.createElement("p",null,"Omaolo is a CE marked medical device, and has thus been developed according to ISO 13485 quality management system principles."),t.createElement("h4",null,"Already 4 Million users, over ⅔ of population"),t.createElement("p",null,"Omaolo utilizes the ",t.createElement("strong",null,"FHIR standard")," extensively in the system's microservice architecture for both internal and external integrations.")),t.createElement("section",{id:"kotidigi"},t.createElement("h2",null,"Kotidigi - Solita homecare platform for wellness data"),t.createElement("p",null,t.createElement("strong",null,"Opportunity:")," Treating patients at their own home instead of at the hospital has a lot of benefits: it's much more comfortable for the patients, and it can save a lot of money for the society."),t.createElement("p",null,t.createElement("strong",null,"Problem:")," There are all kinds of data-intensive wellbeing related equipment in the market, both for professionals and consumers. But there hasn't been a standard way to gather different information together and available for healthcare professionals (HCPs). Thus, patients have still needed to be taken care at the hospital."),t.createElement("p",null,t.createElement("strong",null,"Solution:")," The Solita HomeCare Platform aims to solve this problem, by being the central place to gather the data, and having the ability to create automatic alert levels for HCPs to check and act on."),t.createElement("p",null,"The platform is being developed and piloted in collaboration with Pirkanmaa welfare district. ",t.createElement("strong",null,"HL7 FHIR")," is used as both integration façade and data strorage for the device data."),t.createElement("p",null,"Solita co-owns the IPRs for the platform, thus it can be used to develop a specific solution in other countries as well.")),t.createElement("section",{id:"contact"},t.createElement("h3",null,"Contact"),t.createElement("div",{className:"business-card"},t.createElement("h3",null,"Janne Kaartinen"),t.createElement("p",null,"Senior Consultant"),t.createElement("address",null,t.createElement("a",{href:"mailto:janne.kaartinen@solita.fi"},"janne.kaartinen@solita.fi")))))}},6548:function(e,I){I.A="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICB2aWV3Qm94PSI5IDYgMjkgMzQiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHZlcnNpb249IjEuMSIKPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDY4LjIyODA4OCw2OC4yMjgwODgsMCwxMjguMTQyMDksNjkuMDA2ODM2KSIgc3ByZWFkTWV0aG9kPSJwYWQiIGlkPSJsaW5lYXJHcmFkaWVudDM5MDUiPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZmY2VkIiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzg5NSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmNlZCIgb2Zmc2V0PSIwLjAwOTY0NiIgaWQ9InN0b3AzODk3IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMzAwIiBvZmZzZXQ9IjAuNjkyMzA3IiBpZD0ic3RvcDM4OTkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmNDk4MDAiIG9mZnNldD0iMC45NDg1ODExNSIgaWQ9InN0b3AzOTAxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZjQ5ODAwIiBvZmZzZXQ9IjEiIGlkPSJzdG9wMzkwMyIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAsOTkuMTkzMDA4LDk5LjE5MzAwOCwwLDEyNS44MTg4NSw3MC44MDA3ODEpIiBzcHJlYWRNZXRob2Q9InBhZCIgaWQ9ImxpbmVhckdyYWRpZW50Mzg3OSI+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmZmZmYiIG9mZnNldD0iMCIgaWQ9InN0b3AzODY3IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMzAwIiBvZmZzZXQ9IjAuMTQ2OTEyOTgiIGlkPSJzdG9wMzg2OSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTMwMCIgb2Zmc2V0PSIwLjI0MTc2IiBpZD0ic3RvcDM4NzEiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUzMDAiIG9mZnNldD0iMC4zMjM5NTQ4MyIgaWQ9InN0b3AzODczIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZGUxMTE5IiBvZmZzZXQ9IjAuNjIwODgiIGlkPSJzdG9wMzg3NSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2UyMGUxOCIgb2Zmc2V0PSIxIiBpZD0ic3RvcDM4NzciIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDQ0Ljk4Mzg1Niw0NC45ODM4NTYsMCwxMzcuMDc3MTUsNjMuNTgzMDA4KSIgc3ByZWFkTWV0aG9kPSJwYWQiIGlkPSJsaW5lYXJHcmFkaWVudDM4NTEiPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZmY2VkIiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzg0MSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmNlZCIgb2Zmc2V0PSIwLjAxMDQ4ODEyIiBpZD0ic3RvcDM4NDMiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUzMDAiIG9mZnNldD0iMC43NTI3NDciIGlkPSJzdG9wMzg0NSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTMwMCIgb2Zmc2V0PSIwLjkwNTU4MTA2IiBpZD0ic3RvcDM4NDciIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNlYzc1MDMiIG9mZnNldD0iMSIgaWQ9InN0b3AzODQ5IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCwxMDEuMDYzNTcsMTAxLjA2MzU3LDAsMTQyLjA0OTMyLDQ1LjYyNTk3NykiIHNwcmVhZE1ldGhvZD0icGFkIiBpZD0ibGluZWFyR3JhZGllbnQzODI1Ij4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmZmZiIgb2Zmc2V0PSIwIiBpZD0ic3RvcDM4MTMiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4xNDY5MTI5OCIgaWQ9InN0b3AzODE1IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMjQxNzYiIGlkPSJzdG9wMzgxNyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjMyMzk1NDgzIiBpZD0ic3RvcDM4MTkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNkZTExMTkiIG9mZnNldD0iMC42MjA4OCIgaWQ9InN0b3AzODIxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZTIwZTE4IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMzgyMyIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAsNzMuMTk1MDg0LDczLjE5NTA4NCwwLDExMy4wMzAyNyw1OS43Njk1MzEpIiBzcHJlYWRNZXRob2Q9InBhZCIgaWQ9ImxpbmVhckdyYWRpZW50Mzc5NyI+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmZmZmYiIG9mZnNldD0iMCIgaWQ9InN0b3AzNzg1IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMTQ2OTEyOTgiIGlkPSJzdG9wMzc4NyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjI0MTc2IiBpZD0ic3RvcDM3ODkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4zMjM5NTQ4MyIgaWQ9InN0b3AzNzkxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZGUxMTE5IiBvZmZzZXQ9IjAuNjIwODgiIGlkPSJzdG9wMzc5MyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2UyMGUxOCIgb2Zmc2V0PSIxIiBpZD0ic3RvcDM3OTUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDk2LjQ4ODcwOCw5Ni40ODg3MDgsMCwxMjUuNDgzODksNDUuNjI1OTc3KSIgc3ByZWFkTWV0aG9kPSJwYWQiIGlkPSJsaW5lYXJHcmFkaWVudDM3NjkiPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZmZmZmIiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzc1NyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjE0NjkxMjk4IiBpZD0ic3RvcDM3NTkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4yNDE3NiIgaWQ9InN0b3AzNzYxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMzIzOTU0ODMiIGlkPSJzdG9wMzc2MyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2RlMTExOSIgb2Zmc2V0PSIwLjYyMDg4IiBpZD0ic3RvcDM3NjUiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNlMjBlMTgiIG9mZnNldD0iMSIgaWQ9InN0b3AzNzY3IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGc+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjM1Mjc3Nzc3LDAsMCwtMC4zNTI3Nzc3NywtMjQuMjUzMTI1LDU5Ljg5NzE1NSkiIGlkPSJnMzc0NSI+CiAgICAgIDxwYXRoIGQ9Im0gMTIxLjg2NywxMTguNDIxIGMgLTguNjQyLC0xMC4xNjYgLTEyLjIsLTIwLjU4NyAtMTIuNzEsLTI2LjQzNCB2IDAgQyAxMDguMTQxLDczLjE4IDEyMi4xMjEsNjYuMDY0IDEyNy40NTgsNjIuMjUgdiAwIGMgLTQuMDY3LDMuMDUgLTYuODYyLDE0LjY1NyAtMi4wMzMsMjUuODQxIHYgMCBjIDQuODI5LDExLjE4MyAxNC42NTYsMTcuNzkgMTYuMjY2LDMyLjM2MyB2IDAgYyAxLjUyNSwxNC40ODcgLTcuNjI0LDI5LjIzIC03LjYyNCwyOS4yMyB2IDAgYyAyLjAzMywtMTcuMDI5IC0zLjU1OSwtMjEuMDk2IC0xMi4yLC0zMS4yNjMiIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyR3JhZGllbnQzNzY5KTtzdHJva2U6bm9uZSIgLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMzUyNzc3NzcsMCwwLC0wLjM1Mjc3Nzc3LC0yNC4yNTMxMjUsNTkuODk3MTU1KSIgaWQ9ImczNzczIj4KICAgICAgPHBhdGggZD0ibSAxMTEuNywxMTUuMjAxIGMgLTguMDExLC03LjEyIC0xMS4zNTMsLTE2LjQzNSAtMTAuODQ0LC0yMi41MzUgdiAwIGMgMC41MDcsLTEzLjg5NCAxMy41NTUsLTIzLjA0NSAxMy41NTUsLTIzLjA0NSB2IDAgYyAtNS45Myw3LjExNyAtOS42NTgsMTcuOTYxIC03Ljc5NCwyOC40NjcgdiAwIGMgMS44NjQsMTAuNTA1IDEzLjM4NiwyMi43MDUgMTguNjM5LDI4Ljk3NSB2IDAgYyAtMS44NjQsLTIuMDM0IC00LjQwNiwtMy43MjkgLTEzLjU1NiwtMTEuODYyIiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50Mzc5Nyk7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjM1Mjc3Nzc3LDAsMCwtMC4zNTI3Nzc3NywtMjQuMjUzMTI1LDU5Ljg5NzE1NSkiIGlkPSJnMzgwMSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTQwLjg0NSwxMDYuMjIyIEMgMTM3LjQ1Niw5OC40MjYgMTMwLjMzOSw4OS45NTQgMTI4LjMwNiw4Ni4wNTggdiAwIGMgLTUuOTMxLC0xMi44NzggMi4yMDIsLTI0LjczOSAyLjIwMiwtMjQuNzM5IHYgMCBjIDIyLjM2NywxLjAxNyAyNi42MDIsMTguNDY5IDI3LjQ1LDI3Ljc4NyB2IDAgYyAtMS42OTUsLTQuNTczIC02LjEsLTguODA5IC05LjE1LC0xMC42NzUgdiAwIGMgOS42NTksMTYuNzc2IDEuMTg3LDM4LjQ2NSAtNC4wNjYsNDUuNzUyIHYgMCBjIDAuMTY5LC01LjQyMyAtMC41MDksLTEwLjE2NiAtMy44OTcsLTE3Ljk2MSIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDM4MjUpO3N0cm9rZTpub25lIiAvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4zNTI3Nzc3NywwLDAsLTAuMzUyNzc3NzcsLTI0LjI1MzEyNSw1OS44OTcxNTUpIiBpZD0iZzM4MjkiPgogICAgICA8cGF0aCBkPSJtIDEzMi4wMzMsODEuNjUyIGMgLTUuODU0LC05LjE5OSAtMC42NzcsLTE4LjQ2OCAtMC42NzcsLTE4LjQ2OCB2IDAgYyA4LjY0MSwxLjUyMyAxMS44NjEsNi4wOTggMTMuNTU1LDkuNjU3IHYgMCBjIC0yLjU0MiwtMS42OTQgLTQuNDA2LC0yLjcxMiAtNy40NTUsLTMuMjIgdiAwIGMgNy4yODYsOS40ODkgNy42MjUsMjAuNjczIDcuMTE2LDI5LjE0NSB2IDAgYyAtMi44ODEsLTguMTMzIC03Ljc5NSwtOS42NiAtMTIuNTM5LC0xNy4xMTQiIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyR3JhZGllbnQzODUxKTtzdHJva2U6bm9uZSIgLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMzUyNzc3NzcsMCwwLC0wLjM1Mjc3Nzc3LC0yNC4yNTMxMjUsNTkuODk3MTU1KSIgaWQ9ImczODU1Ij4KICAgICAgPHBhdGggZD0ibSAxMTguNDc4LDEwMS4zMDcgYyAtMTAuMzM3LC0xNy4xMTQgNC4zNjUsLTMzLjc4NSA0LjM2NSwtMzMuNzg1IHYgMCBjIC00Ljc0NSw4Ljk4IC0zLjA1NywyMS43MDIgNC4yMTgsMzEuMTYgdiAwIGMgMTEuMDg1LDE0LjQxIDkuNzMsMjAuNzU0IDkuNzMsMzMuNjg2IHYgMCBjIC0yLjAzMSwtMTcuOTIgLTExLjE5NywtMTguNjkxIC0xOC4zMTMsLTMxLjA2MSIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDM4NzkpO3N0cm9rZTpub25lIiAvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4zNTI3Nzc3NywwLDAsLTAuMzUyNzc3NzcsLTI0LjI1MzEyNSw1OS44OTcxNTUpIiBpZD0iZzM4ODMiPgogICAgICA8cGF0aCBkPSJtIDExOC4xNywxMDIuOTI1IGMgLTguMjI1LC0xNi4yMzUgLTAuODUzLC0yOS45NzQgNi43NzEsLTM3Ljg2MiB2IDAgYyAtMTguNzk5LDIyLjY3NyAtMS4wODQsNDEuMjY0IDcuODg3LDUzLjc2OCB2IDAgYyAxMi4zNTgsMTcuMjIyIDguMjM0LDI5LjIxOCA4LjIzNCwyOS4yMTggdiAwIGMgMi44MDksLTIwLjgwNCAtMTUuMzk4LC0zMC4zMzUgLTIyLjg5MiwtNDUuMTI0IiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50MzkwNSk7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L2c+CiAgICA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToxMC41ODMzcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6I2UzMDYxMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMiIHg9IjI4LjgyMjI5OCIgeT0iMTcuOTMyMzk4Ij4KICAgICAgPHRzcGFuIHg9IjI4LjgyMjI5OCIgeT0iMTcuOTMyMzk4IiBzdHlsZT0iZmlsbDojZTMwNjEzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjI2NDU4MyI+wq48L3RzcGFuPgogICAgPC90ZXh0PgogIDwvZz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-solita-js-258caab54d60274e0805.js.map