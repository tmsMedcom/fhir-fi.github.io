import * as React from 'react';

import Article, { getHead } from '../components/Article';
import fhirLogo from '../images/fhir.svg';
import fhirLogo2 from '../images/fhir-deco.svg';
import mikaelx1 from '../images/MikaelRinnetmaki.jpg';
import mikaelx2 from '../images/MikaelRinnetmaki2x.jpg';
import slackLogo from '../images/Slack_icon_2019.svg';


export function Head() {
  const title = <title>Take part in FHIR Demo 2024</title>;
  return getHead({ title });
};

export default function Participate() {
  return (
    <Article id="participate">
      <section id="about">
        <h1><small>Take part in</small><br />FHIR Demo 2024</h1>
        <img className="decoration" src={fhirLogo} alt="" />
      </section>
      <section id="description" className="callout">
        <h2>Be part of the <strong>Nordic FHIR Demo</strong> showcase!</h2>
        <p>
          The <strong>FHIR Demo 2024</strong> showcase builds on the success of previous installations in <a
          href="http://www.hl7.fi/wp-content/uploads/HL7-Finland-%23U0432%23U0402%23U201c-FHIR-demon-loppuraportti-20160527.pdf">2016</a>,
          {' '}<a href="https://fhir.fi/en/demo2022/index.html">2022</a>, and <a
          href="https://fhir.fi/en/demo2023/index.html">2023</a>. This year it will be even
          bigger, and more international.
        </p>
        <p>
          We&apos;re inviting everyone working on FHIR on some level, and for everyone supporting
          FHIR, to join the showcase. Share what you&apos;ve done or are planning, and help others
          find you and learn from your experience and goals!
        </p>
        <p>
          Participation costs you nothing, and gives you increased visibility within the FHIR
          community and in healthtech ecosystems overall.
        </p>
        {/*
        <p>
          If this is not for you right now, please do consider whether there would be someone else
          you know that could be interested in this opportunity. Feel free to share this invitation
          as widely as you can.
        </p>
        */}
        <p className="center">
          <a className="button" href="mailto:mikael@sensotrend.com">Announce your interest!</a>
        </p>
      </section>
      <section id="info">
        <h1>Apps and Systems, Consultancies and Institutions</h1>
        <p>This year, we plan to tag entries into four categories.</p>
        <p>
          <strong>Apps</strong> are FHIR clients utilizing data in FHIR format or integrated into
          an electronic health record system or patient portal through the SMART App Launch
          mechanism.
        </p>
        <p>
          <strong>Systems</strong> are platforms and servers receiving and hosting data and making
          it available to other parties.
        </p>
        <p>
          <strong>Consultancies</strong> are companies and organizations helping others to adopt
          and implement the FHIR standard, apps, and systems.
        </p>
        <p>
          <strong>Institutions</strong> are hospitals, government institutions, national HL7
          affiliates and other organizations that may not build FHIR implementations themselves but
          may be utilizing them or just be proponents for FHIR. Of course, they can also build FHIR
          apps and systems.
        </p>
        <p>
          Your entry can certainly be tagged with several tags. It might be a service with both an
          app and a system, offered by an institution. The entry can also be for a company that has
          built an app and also offers consultancy.
        </p>
        <p>
          The point is to make it easy for the audience to find implementations they are most
          interested in. Someone interested in the showcase may be looking to procure existing
          implementations, or for inspiration from use cases implemented by others, or a partner to
          help them with their implementation. The showcase aims to serve all these interests.
        </p>
      </section>
      <section id="faq">
        <section id="what-does-it-cost">
          <h1>Frequently asked questions</h1>
          <h2>What does it cost?</h2>
          <p>
            No money changes hands. You only need to collect the information you want to present.
          </p>
        </section>
        <section id="technical-readiness-level">
          <h2>Does the implementation need to be in production?</h2>
          <p>
            No, it does not. The aim is to show the full range of FHIR activities. We want to show
            what already works, but also what people are currently working on. We&apos;re happy to
            include you into the showcase even if you just have an idea on how you would use FHIR.
            Even that may give someone else an idea for their own implementation, or trigger someone
            to contact you about cooperation.
          </p>
        </section>
        <section id="showcase-content">
        <h2>What kind of information should I present?</h2>
          <p>
            There are no strict limits. FHIR is used in many ways. An app vendor may present how
            their app works seamlessly with a system, thanks to FHIR. HL7 country affiliates may
            advertise their work plan for this year. These are different kind of showcases, and
            there are many more. If you don&apos;t yet have a clear idea, you may draw inspiration
            from <a href="https://fhir.fi/en/demo2023/#participants">last year&apos;s entries</a>.
          </p>
        </section>
        <section id="how-to-submit">
          <h2>How do I submit my information?</h2>
          <p>
            Ideally, compile your demo page yourself and issue a pull request to the source code of
            the website. We&apos;re using the Gatsby framework, see <a
            href="https://github.com/fhir-fi/fhir-fi.github.io/tree/fhir-demo-2024-gatsby/fhir-demo-2024">the
            instructions</a>.
          </p>
          <p>
            We do realize not everyone is up for that, so yu can also send the information you want
            to be presented in an email, or as a Word document or a slideshow. We'll compile the
            page for you!
          </p>
        </section>
        <section id="where-does-the-showcase-take-place">
          <h2>Where does the showcase take place?</h2>
          <p>
            The main area for the showcase is <strong>this website.</strong> The showcase will be
            updated throughout the year. We hope it will become a go-to resource for everyone in
            the Nordic region looking for advice on how to implement FHIR.
          </p>
          <p>
            In addition, we will advertise the showcase in several trade events. Some of the
            participants of the showcase will be present in at least the following events:
          </p>
          <ul>
            <li>
              13.-16.5.2024 <a href="https://vitalis.nu/">Vitalis</a>, Gothenburg, Sweden
            </li>
            <li>
              21.-23.5.2024 <a href="https://radicalhealthfestival.messukeskus.com/">Radical
              Health Festival</a>, Helsinki, Finland</li>
            <li>
              27.-29.5.2024 <a
              href="https://koulutus.fcg.fi/sosiaali-ja-terveydenhuollon-ATK-paivat">Sosiaali- ja
              terveydenhuollon ATK-päivät</a>, Tampere, Finland
            </li>
         </ul>
          <p>
            The Vitalis conference has a <a
            href="https://invitepeople.com/public/events/ae499c7a48/seminars/ae2dc6387c">specific
            session</a> on the program to present the showcase.
          </p>
        </section>
        <section id="showcase-schedule">
         <h2>When does it start? When do I need to be ready?</h2>
          <p>
            This initial website is already public. We plan to publish the first list of
            participants in mid-April. We keep on adding participants throughout the year. However,
            you most likely get the biggest benefit if you get your case published before the trade
            shows in May. That&apos;s when we&apos;ll be advertising the showcase the most.
          </p>
        </section>
        <section id="what-to-do-next">
          <h2>What should I do next?</h2>
          <p>
            Let the coordinator of the showcase you&apos;re interested in participating. Write an
            email to mikael@sensotrend.com. You don&apos;t need to have the showcase ready, just
            indicate your interest. But do start thinking of what you would like to share, and in
            which format you&apos;d be able to share it.
          </p>
        </section>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <p>Please do get in touch! Email reaches me best.</p>
        <div className="business-card">
          <picture>
            <source srcSet={mikaelx2} media="(min-resolution: 144dpi)" />
            <source srcSet={mikaelx1} />
            <img src={mikaelx1} alt="" />
          </picture>
          <h2>Mikael Rinnetmäki</h2>
          <p>FHIR Ambassador, HL7 Finland</p>
          <address>
            <a href="mailto:mikael@sensotrend.com">mikael@sensotrend.com</a>
            <br />
            <a href="tel:+358503855511">+358 50 385 5511</a>
          </address>
        </div>
        <p><img className="inline decoration" src={slackLogo} alt="" /> You can also <a
          href="https://join.slack.com/t/fhirfinland/shared_invite/zt-1j143ocuu-Ax4SfnlQt~iDKt5Xrb6Uwg">join
          the <strong>FHIR Finland</strong> Slack</a> and discuss on the
          <strong>#fhir-demo-2024</strong> channel.
        </p>
      </section>
      <img className="decoration" src={fhirLogo2} alt="" />
    </Article>
  )
};