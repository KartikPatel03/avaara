import "./ispace-lower-design.css";
import "./ispace-polish.css";
import "./ispace-next.css";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ISpaceLoader from "./components/loader/ISpaceLoader";
import FocusPanels from "./components/panels/FocusPanels";
import ProcurementSection from "./components/sections/ProcurementSection";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  ["ABOUT", "about"],
  ["PROCUREMENT", "procurement"],
  ["CAPABILITIES", "capabilities"],
  ["LOGISTICS", "logistics"],
  ["INDIA EXPORTS", "india-exports"],
  ["OUR REACH", "our-reach"],
];

const capabilities = [
  {
    number: "01",
    title: "MANPOWER",
    description:
      "Manpower support for organizations requiring people and project-based operational assistance.",
    tag: "PEOPLE / PROJECTS",
  },
  {
    number: "02",
    title: "TECHNICAL SUPPORT",
    description:
      "Technical support for organizations requiring specialized assistance across project requirements.",
    tag: "TECHNICAL / SUPPORT",
  },
  {
    number: "03",
    title: "PROCUREMENT & SUPPLY",
    description:
      "Requirement-driven sourcing, supplier identification, quotation comparison, evaluation, negotiation and purchasing coordination.",
    tag: "SOURCE / PROCURE",
  },
  {
    number: "04",
    title: "LOGISTICS & DELIVERY",
    description:
      "Coordinated movement of requirements through logistics and delivery networks from sourcing to destination.",
    tag: "MOVE / DELIVER",
  },
];

const indiaCategories = [
  ["01", "WHOLE SPICES", "Sourcing and export coordination for whole spice requirements."],
  ["02", "GROUND SPICES", "Indian ground spice sourcing according to customer requirements."],
  ["03", "COTTON & WOVEN", "Sourcing of cotton and woven textile requirements from India."],
  ["04", "TECHNICAL TEXTILES", "Technical textile sourcing for specified applications and requirements."],
];

function NetworkVisual() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;

      gsap.to(el, {
        rotateY: x * 8,
        rotateX: -y * 6,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.to(el.querySelector(".network-core"), {
        x: x * 16,
        y: y * 16,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(el.querySelectorAll(".network-node"), {
        x: x * 8,
        y: y * 8,
        duration: 0.9,
        ease: "power3.out",
      });
    };

    const reset = () => {
      gsap.to(el, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", reset);

    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div ref={ref} className="next-network">
      <div className="next-network__halo" />

      <div className="network-core">
        <div className="network-core__grid" />
        <div className="network-core__grid network-core__grid--second" />
        <div className="network-core__inner" />
      </div>

      <div className="network-route route-a">
        <i />
      </div>

      <div className="network-route route-b">
        <i />
      </div>

      <div className="network-route route-c">
        <i />
      </div>

      <div className="network-route route-d">
        <i />
      </div>

      <div className="network-node node-india">
        <b />
        <span>HYDERABAD</span>
        <small>INDIA SOURCING</small>
      </div>

      <div className="network-node node-middle">
        <b />
        <span>MIDDLE EAST</span>
        <small>OPERATIONS</small>
      </div>

      <div className="network-node node-global">
        <b />
        <span>GLOBAL</span>
        <small>REQUIREMENTS</small>
      </div>

      <div className="network-node node-europe">
        <b />
        <span>EUROPE</span>
        <small>SUPPLY</small>
      </div>

      <div className="network-data data-one">
        <strong>01</strong>
        <span>SOURCE</span>
      </div>

      <div className="network-data data-two">
        <strong>02</strong>
        <span>PROCURE</span>
      </div>

      <div className="network-data data-three">
        <strong>03</strong>
        <span>DELIVER</span>
      </div>

      <div className="network-caption">
        <span>LIVE NETWORK</span>
        <b />
        <span>REQUIREMENT → SUPPLY</span>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="ispace-about next-about">
      <div className="ispace-about__grid" />

      <div className="ispace-about__container">
        <div className="section-eyebrow next-eyebrow">
          <span>02</span>
          <span className="section-eyebrow__line" />
          <span>ABOUT iSPACE</span>
        </div>

        <div className="ispace-about__layout">
          <div className="ispace-about__heading">
            <div className="next-kicker">ONE PARTNER / ONE ACCOUNTABILITY</div>
            <h2>
              ONE PARTNER.
              <br />
              <em>ACCOUNTABLE.</em>
            </h2>
          </div>

          <div className="ispace-about__copy">
            <p>
              iSpace Global Sourcing Hub connects international requirements
              with sourcing, procurement, supply and coordinated delivery
              capabilities.
            </p>

            <p>
              With Middle East operations and a dedicated Hyderabad sourcing
              hub, iSpace supports customers across international requirements
              and Indian supply opportunities.
            </p>

            <div className="ispace-about__meta">
              <span>GLOBAL REQUIREMENTS</span>
              <span>INDIA SOURCING</span>
              <span>MIDDLE EAST OPERATIONS</span>
            </div>
          </div>
        </div>

        <div className="about-proof">
          <div>
            <strong>01</strong>
            <span>REQUIREMENT</span>
          </div>
          <div>
            <strong>02</strong>
            <span>SOURCING</span>
          </div>
          <div>
            <strong>03</strong>
            <span>COORDINATION</span>
          </div>
          <div>
            <strong>04</strong>
            <span>DELIVERY</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogisticsSection() {
  const steps = [
    ["01", "SOURCE", "Requirement and supplier coordination."],
    ["02", "COORDINATE", "Commercial and logistics coordination."],
    ["03", "MOVE", "International movement of requirements."],
    ["04", "DELIVER", "Coordinated delivery to destination."],
  ];

  return (
    <section id="logistics" className="ispace-logistics next-logistics">
      <div className="ispace-logistics__orb" />

      <div className="ispace-logistics__container">
        <div className="section-eyebrow section-eyebrow--light next-eyebrow">
          <span>06</span>
          <span className="section-eyebrow__line" />
          <span>LOGISTICS & DELIVERY</span>
        </div>

        <div className="ispace-logistics__heading">
          <h2>
            FROM SOURCE
            <br />
            <em>TO DESTINATION.</em>
          </h2>

          <p>
            Coordinated movement of requirements through logistics and delivery
            networks from sourcing to destination.
          </p>
        </div>

        <div className="logistics-flow next-flow">
          <div className="logistics-flow__line">
            <span />
          </div>

          {steps.map(([number, title, text]) => (
            <article key={number} className="next-logistics-card">
              <span>{number}</span>
              <div>
                <small>STAGE {number}</small>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <b>↗</b>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndiaExportsSection() {
  return (
    <section id="india-exports" className="india-exports next-india">
      <div className="india-exports__background" />

      <div className="india-exports__container">
        <div className="section-eyebrow next-eyebrow">
          <span>07</span>
          <span className="section-eyebrow__line" />
          <span>INDIA EXPORTS</span>
        </div>

        <div className="india-exports__heading">
          <h2>
            SOURCING
            <br />
            <em>FROM INDIA.</em>
          </h2>

          <p>
            Connecting global customers with Indian manufacturers, distributors
            and suppliers according to requirement, specification and destination.
          </p>
        </div>

        <div className="india-exports__grid">
          {indiaCategories.map(([number, title, description]) => (
            <article className="india-export-card next-india-card" key={number}>
              <div className="india-export-card__top">
                <span>{number}</span>
                <span>INDIA / EXPORT</span>
              </div>

              <div className="india-export-card__visual">
                <div className="india-export-card__ring" />
                <div className="india-export-card__dot" />
                <div className="india-signal">IND</div>
              </div>

              <div className="india-export-card__content">
                <h3>{title}</h3>
                <p>{description}</p>
                <span>EXPLORE ↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReachSection() {
  return (
    <section id="our-reach" className="ispace-reach next-reach">
      <div className="next-reach-network">
        <span className="reach-line reach-line-a" />
        <span className="reach-line reach-line-b" />
        <span className="reach-line reach-line-c" />
        <span className="reach-pulse pulse-a" />
        <span className="reach-pulse pulse-b" />
        <span className="reach-pulse pulse-c" />
        <span className="reach-pulse pulse-d" />
      </div>

      <div className="ispace-reach__container">
        <div className="section-eyebrow next-eyebrow">
          <span>08</span>
          <span className="section-eyebrow__line" />
          <span>OUR REACH</span>
        </div>

        <div className="ispace-reach__content">
          <div className="next-kicker">CONNECTED SUPPLY NETWORK</div>

          <h2>
            CONNECTED
            <br />
            <em>BY REQUIREMENT.</em>
          </h2>

          <p>
            Middle East operations supported by an India sourcing hub in
            Hyderabad, connecting international requirements with supply
            opportunities.
          </p>
        </div>

        <div className="reach-locations">
          <span>USA</span>
          <span>MIDDLE EAST</span>
          <span>HYDERABAD / INDIA</span>
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section id="request-a-quote" className="ispace-quote next-quote">
      <div className="ispace-quote__container">
        <div className="section-eyebrow next-eyebrow">
          <span>09</span>
          <span className="section-eyebrow__line" />
          <span>REQUEST A QUOTE</span>
        </div>

        <div className="ispace-quote__heading">
          <h2>
            HAVE A
            <br />
            <em>REQUIREMENT?</em>
          </h2>

          <p>
            Tell us what you need. iSpace can coordinate sourcing, procurement,
            supply and delivery requirements around your specification and
            destination.
          </p>
        </div>

        <form className="quote-form next-quote-form">
          <label>
            <span>NAME</span>
            <input name="name" placeholder="Your name" />
          </label>

          <label>
            <span>COMPANY</span>
            <input name="company" placeholder="Company name" />
          </label>

          <label>
            <span>EMAIL</span>
            <input type="email" name="email" placeholder="your@email.com" />
          </label>

          <label>
            <span>REQUIREMENT</span>
            <textarea
              name="requirement"
              rows="5"
              placeholder="Tell us about your requirement..."
            />
          </label>

          <button type="button">
            <span>SUBMIT REQUIREMENT</span>
            <span>↗</span>
          </button>
        </form>
      </div>
    </section>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const homeRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      gsap.set(".ispace-home", {
        opacity: 1,
        visibility: "visible",
      });

      const intro = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      intro
        .from(navRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.55,
        })
        .from(
          ".hero-eyebrow",
          {
            y: 18,
            opacity: 0,
            duration: 0.45,
          },
          "-=0.2"
        )
        .from(
          ".hero-title-line",
          {
            yPercent: 110,
            opacity: 0,
            duration: 0.7,
            stagger: 0.09,
          },
          "-=0.15"
        )
        .from(
          ".hero-copy",
          {
            y: 18,
            opacity: 0,
            duration: 0.45,
          },
          "-=0.35"
        )
        .from(
          ".hero-actions",
          {
            y: 15,
            opacity: 0,
            duration: 0.4,
          },
          "-=0.25"
        )
        .from(
          ".next-network",
          {
            scale: 0.86,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
          },
          "-=0.65"
        )
        .from(
          ".network-node",
          {
            scale: 0,
            opacity: 0,
            stagger: 0.08,
            duration: 0.4,
            ease: "back.out(1.8)",
          },
          "-=0.55"
        );

      gsap.utils.toArray(".ispace-about, .capabilities, .ispace-logistics, .india-exports, .ispace-reach, .ispace-quote").forEach((section) => {
        const targets = section.querySelectorAll(
          ".section-eyebrow, h2, p, .capability-card, .india-export-card, .next-logistics-card, .about-proof > div, .reach-locations span"
        );

        gsap.from(targets, {
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
          y: 35,
          opacity: 0,
          duration: 0.75,
          stagger: 0.06,
          ease: "power3.out",
        });
      });

      gsap.to(".network-core", {
        rotate: 360,
        duration: 34,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".network-core__inner", {
        scale: 1.08,
        opacity: 0.7,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".network-data", {
        y: -7,
        duration: 2.2,
        stagger: 0.35,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".reach-pulse", {
        scale: 1.8,
        opacity: 0,
        duration: 2.2,
        stagger: 0.5,
        repeat: -1,
        ease: "power2.out",
      });

      const buttons = document.querySelectorAll(
        ".hero-primary, .ispace-nav__cta, .quote-form button"
      );

      buttons.forEach((button) => {
        const enter = () => {
          gsap.to(button, {
            y: -3,
            scale: 1.025,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(button, {
            y: 0,
            scale: 1,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        button.addEventListener("pointerenter", enter);
        button.addEventListener("pointerleave", leave);

        button._nextCleanup = () => {
          button.removeEventListener("pointerenter", enter);
          button.removeEventListener("pointerleave", leave);
        };
      });
    }, homeRef);

    return () => {
      document
        .querySelectorAll(".hero-primary, .ispace-nav__cta, .quote-form button")
        .forEach((button) => button._nextCleanup?.());

      ctx.revert();
    };
  }, [loading]);

  return (
    <>
      {loading && (
        <ISpaceLoader onComplete={() => setLoading(false)} />
      )}

      <main ref={homeRef} className="ispace-home">
        <nav ref={navRef} className="ispace-nav">
          <a className="ispace-brand" href="#top">
            <span className="ispace-brand__mark">+</span>
            <span className="ispace-brand__name">iSpace</span>
          </a>

          <div className="ispace-nav__links">
            {navItems.map(([label, target], index) => (
              <a
                key={target}
                href={`#${target}`}
                className={index === 0 ? "is-active" : ""}
              >
                {label}
              </a>
            ))}
          </div>

          <a className="ispace-nav__cta" href="#request-a-quote">
            <span>REQUEST A QUOTE</span>
            <span className="cta-arrow">↗</span>
          </a>

          <button className="ispace-nav__menu" type="button">
            <span />
            <span />
          </button>
        </nav>

        <section id="top" className="ispace-hero next-hero">
          <div className="ispace-hero__grid" />

          <div className="ispace-hero__content">
            <div className="hero-eyebrow">
              <span className="eyebrow-line" />
              <span>GLOBAL SOURCING HUB / HYDERABAD</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-line">iSPACE</span>
              <span className="hero-title-line">
                <em>GLOBAL</em> SOURCING HUB.
              </span>
              <span className="hero-title-line hero-title-line--small">
                CONNECTING REQUIREMENTS.
              </span>
            </h1>

            <p className="hero-copy">
              iSpace connects international requirements with sourcing,
              procurement, supply and coordinated delivery networks — supported
              by Middle East operations and a dedicated Hyderabad sourcing hub.
            </p>

            <div className="hero-actions">
              <a className="hero-primary" href="#request-a-quote">
                <span>REQUEST A QUOTE</span>
                <span className="hero-primary__arrow">↗</span>
              </a>

              <a className="hero-secondary" href="#about">
                EXPLORE iSPACE
              </a>
            </div>
          </div>

          <div className="ispace-hero__visual">
            <NetworkVisual />
          </div>

          <div className="hero-footer">
            <span>01 / 09</span>
            <div className="hero-footer__line">
              <span />
            </div>
            <span>SCROLL TO EXPLORE</span>
          </div>
        </section>

        <AboutSection />

        <div id="explore-ispace">
          <FocusPanels />
        </div>

        <ProcurementSection />

        <section id="capabilities" className="capabilities">
          <div className="capabilities__orb" />

          <div className="capabilities-header">
            <div className="section-eyebrow">
              <span>04</span>
              <span className="section-eyebrow__line" />
              <span>OPERATIONAL CAPABILITIES</span>
            </div>

            <div className="capabilities-header__layout">
              <h2>
                CAPABILITIES
                <br />
                <em>BUILT AROUND</em>
                <br />
                REQUIREMENTS.
              </h2>

              <div className="capabilities-header__copy">
                <p>
                  iSpace brings together sourcing, procurement, technical
                  support, manpower and coordinated delivery capabilities around
                  the requirements of each customer.
                </p>
                <span className="capabilities-header__micro">
                  ONE PARTNER / MULTIPLE REQUIREMENTS
                </span>
              </div>
            </div>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <article
                className={`capability-card capability-card--${index + 1}`}
                key={capability.number}
              >
                <div className="capability-card__top">
                  <span className="capability-card__number">
                    {capability.number}
                  </span>
                  <span className="capability-card__tag">
                    {capability.tag}
                  </span>
                </div>

                <div className="capability-card__visual">
                  <div className="capability-card__orb">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="capability-card__index">
                    0{index + 1}
                  </span>
                </div>

                <div className="capability-card__content">
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <span className="capability-card__arrow">↗</span>
                </div>
              </article>
            ))}
          </div>

          <div className="capabilities-bottom">
            <span>04 / 09</span>
            <div className="capabilities-bottom__line">
              <span />
            </div>
            <span>SOURCE / COORDINATE / DELIVER</span>
          </div>
        </section>

        <LogisticsSection />
        <IndiaExportsSection />
        <ReachSection />
        <QuoteSection />
      </main>
    </>
  );
}

export default App;
