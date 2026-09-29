import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ISpaceLoader from "./components/loader/ISpaceLoader";
import FocusPanels from "./components/panels/FocusPanels";
import ProcurementSection from "./components/sections/ProcurementSection";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  {
    label: "ABOUT",
    target: "about",
  },
  {
    label: "PROCUREMENT",
    target: "procurement",
  },
  {
    label: "CAPABILITIES",
    target: "capabilities",
  },
  {
    label: "LOGISTICS",
    target: "logistics",
  },
  {
    label: "INDIA EXPORTS",
    target: "india-exports",
  },
  {
    label: "OUR REACH",
    target: "our-reach",
  },
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
  {
    number: "01",
    title: "WHOLE SPICES",
    description:
      "Sourcing and export coordination for whole spice requirements.",
  },
  {
    number: "02",
    title: "GROUND SPICES",
    description:
      "Indian ground spice sourcing according to customer requirements.",
  },
  {
    number: "03",
    title: "COTTON & WOVEN",
    description:
      "Sourcing of cotton and woven textile requirements from India.",
  },
  {
    number: "04",
    title: "TECHNICAL TEXTILES",
    description:
      "Technical textile sourcing for specified applications and requirements.",
  },
];

function NetworkVisual() {
  return (
    <div className="network-visual" aria-hidden="true">
      <div className="network-visual__glow" />

      <div className="network-visual__sphere">
        <div className="sphere-grid sphere-grid--one" />
        <div className="sphere-grid sphere-grid--two" />

        <div className="sphere-ring sphere-ring--one" />
        <div className="sphere-ring sphere-ring--two" />
      </div>

      <div className="network-route network-route--one">
        <span className="route-dot route-dot--purple" />
      </div>

      <div className="network-route network-route--two">
        <span className="route-dot route-dot--gold" />
      </div>

      <div className="network-route network-route--three">
        <span className="route-dot route-dot--purple" />
      </div>

      <div className="network-node network-node--usa">
        <span />
        <small>USA</small>
      </div>

      <div className="network-node network-node--middle-east">
        <span />
        <small>MIDDLE EAST</small>
      </div>

      <div className="network-node network-node--india">
        <span />
        <small>HYDERABAD</small>
      </div>

      <div className="network-visual__label network-visual__label--top">
        GLOBAL SOURCING NETWORK
      </div>

      <div className="network-visual__label network-visual__label--bottom">
        PROCUREMENT / SUPPLY / DELIVERY
      </div>

      <div className="network-visual__crosshair">
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function CapabilityCard({ capability, index }) {
  return (
    <article className={`capability-card capability-card--${index + 1}`}>
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

        <span className="capability-card__arrow">
          ↗
        </span>
      </div>
    </article>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="ispace-about"
    >
      <div className="ispace-about__grid" />

      <div className="ispace-about__container">
        <div className="section-eyebrow">
          <span>02</span>
          <span className="section-eyebrow__line" />
          <span>ABOUT iSPACE</span>
        </div>

        <div className="ispace-about__layout">
          <div className="ispace-about__heading">
            <h2>
              ONE PARTNER.
              <br />
              <em>ACCOUNTABLE.</em>
            </h2>
          </div>

          <div className="ispace-about__copy">
            <p>
              iSpace Global Sourcing Hub connects
              international requirements with sourcing,
              procurement, supply and coordinated delivery
              capabilities.
            </p>

            <p>
              With Middle East operations and a dedicated
              Hyderabad sourcing hub, iSpace supports
              customers across international requirements
              and Indian supply opportunities.
            </p>

            <div className="ispace-about__meta">
              <span>GLOBAL REQUIREMENTS</span>
              <span>INDIA SOURCING</span>
              <span>MIDDLE EAST OPERATIONS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogisticsSection() {
  return (
    <section
      id="logistics"
      className="ispace-logistics"
    >
      <div className="ispace-logistics__orb" />

      <div className="ispace-logistics__container">
        <div className="section-eyebrow section-eyebrow--light">
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
            Coordinated movement of requirements through
            logistics and delivery networks from sourcing
            to destination.
          </p>
        </div>

        <div className="logistics-flow">
          <div className="logistics-flow__line">
            <span />
          </div>

          <article>
            <span>01</span>
            <h3>SOURCE</h3>
            <p>Requirement and supplier coordination.</p>
          </article>

          <article>
            <span>02</span>
            <h3>COORDINATE</h3>
            <p>Commercial and logistics coordination.</p>
          </article>

          <article>
            <span>03</span>
            <h3>MOVE</h3>
            <p>International movement of requirements.</p>
          </article>

          <article>
            <span>04</span>
            <h3>DELIVER</h3>
            <p>Coordinated delivery to destination.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function IndiaExportsSection() {
  return (
    <section
      id="india-exports"
      className="india-exports"
    >
      <div className="india-exports__background" />

      <div className="india-exports__container">
        <div className="section-eyebrow">
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
            Connecting global customers with Indian
            manufacturers, distributors and suppliers
            according to requirement, specification and
            destination.
          </p>
        </div>

        <div className="india-exports__grid">
          {indiaCategories.map((category) => (
            <article
              className="india-export-card"
              key={category.number}
            >
              <div className="india-export-card__top">
                <span>{category.number}</span>
                <span>INDIA / EXPORT</span>
              </div>

              <div className="india-export-card__visual">
                <div className="india-export-card__ring" />
                <div className="india-export-card__dot" />
              </div>

              <div className="india-export-card__content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
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
    <section
      id="our-reach"
      className="ispace-reach"
    >
      <div className="ispace-reach__world">
        <div className="reach-ring reach-ring--one" />
        <div className="reach-ring reach-ring--two" />
        <div className="reach-ring reach-ring--three" />

        <span className="reach-point reach-point--usa" />
        <span className="reach-point reach-point--middle-east" />
        <span className="reach-point reach-point--india" />
      </div>

      <div className="ispace-reach__container">
        <div className="section-eyebrow">
          <span>08</span>
          <span className="section-eyebrow__line" />
          <span>OUR REACH</span>
        </div>

        <div className="ispace-reach__content">
          <h2>
            CONNECTED
            <br />
            <em>BY REQUIREMENT.</em>
          </h2>

          <p>
            Middle East operations supported by an
            India sourcing hub in Hyderabad, connecting
            international requirements with supply
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
    <section
      id="request-a-quote"
      className="ispace-quote"
    >
      <div className="ispace-quote__container">
        <div className="section-eyebrow">
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
            Tell us what you need. iSpace can coordinate
            sourcing, procurement, supply and delivery
            requirements around your specification and
            destination.
          </p>
        </div>

        <form className="quote-form">
          <label>
            <span>NAME</span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
            />
          </label>

          <label>
            <span>COMPANY</span>
            <input
              type="text"
              name="company"
              placeholder="Company name"
            />
          </label>

          <label>
            <span>EMAIL</span>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
            />
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
  const visualRef = useRef(null);

  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .from(navRef.current, {
          y: -24,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".hero-eyebrow",
          {
            y: 20,
            opacity: 0,
            duration: 0.55,
          },
          "-=0.35"
        )
        .from(
          ".hero-title-line",
          {
            yPercent: 105,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-copy",
          {
            y: 20,
            opacity: 0,
            duration: 0.55,
          },
          "-=0.4"
        )
        .from(
          ".hero-actions",
          {
            y: 18,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.25"
        )
        .from(
          ".network-visual",
          {
            scale: 0.82,
            opacity: 0,
            rotationY: -10,
            duration: 1.1,
            ease: "expo.out",
          },
          "-=0.75"
        )
        .from(
          ".network-node",
          {
            scale: 0,
            opacity: 0,
            stagger: 0.12,
            duration: 0.45,
            ease: "back.out(2)",
          },
          "-=0.5"
        );

      gsap.to(".network-visual__sphere", {
        rotation: 360,
        duration: 45,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".sphere-ring--one", {
        rotation: -360,
        duration: 22,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".sphere-ring--two", {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".network-visual__glow", {
        scale: 1.12,
        opacity: 0.7,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.from(".capabilities-header > *", {
        scrollTrigger: {
          trigger: ".capabilities",
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".capability-card", {
        scrollTrigger: {
          trigger: ".capabilities-grid",
          start: "top 78%",
        },
        y: 70,
        opacity: 0,
        rotateX: 7,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".india-export-card", {
        scrollTrigger: {
          trigger: ".india-exports__grid",
          start: "top 78%",
        },
        y: 60,
        opacity: 0,
        rotateX: 6,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".logistics-flow article", {
        scrollTrigger: {
          trigger: ".logistics-flow",
          start: "top 78%",
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });

      const handlePointer = (event) => {
        if (!visualRef.current) return;

        const rect =
          visualRef.current.getBoundingClientRect();

        const x =
          (event.clientX - rect.left) /
            rect.width -
          0.5;

        const y =
          (event.clientY - rect.top) /
            rect.height -
          0.5;

        gsap.to(".network-visual__sphere", {
          x: x * 18,
          y: y * 18,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.to(".network-node", {
          x: x * 10,
          y: y * 10,
          duration: 1,
          ease: "power3.out",
        });
      };

      window.addEventListener(
        "pointermove",
        handlePointer
      );

      return () => {
        window.removeEventListener(
          "pointermove",
          handlePointer
        );

      };
    }, homeRef);

    return () => ctx.revert();
  }, [loading]);

  return (
    <>
      {loading && (
        <ISpaceLoader
          onComplete={() => setLoading(false)}
        />
      )}

      <main
        ref={homeRef}
        className="ispace-home"
      >
        <nav
          ref={navRef}
          className="ispace-nav"
        >
          <a
            className="ispace-brand"
            href="#top"
            aria-label="iSpace home"
          >
            <span className="ispace-brand__mark">
              +
            </span>

            <span className="ispace-brand__name">
              iSpace
            </span>
          </a>

          <div className="ispace-nav__links">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={`#${item.target}`}
                className={
                  index === 0
                    ? "is-active"
                    : ""
                }
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            className="ispace-nav__cta"
            href="#request-a-quote"
          >
            <span>REQUEST A QUOTE</span>
            <span className="cta-arrow">
              ↗
            </span>
          </a>

          <button
            className="ispace-nav__menu"
            type="button"
            aria-label="Open navigation"
          >
            <span />
            <span />
          </button>
        </nav>

        <section
          id="top"
          className="ispace-hero"
        >
          <div className="ispace-hero__grid" />

          <div className="ispace-hero__content">
            <div className="hero-eyebrow">
              <span className="eyebrow-line" />

              <span>
                GLOBAL SOURCING HUB / HYDERABAD
              </span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-line">
                iSPACE
              </span>

              <span className="hero-title-line">
                <em>GLOBAL</em> SOURCING HUB.
              </span>

              <span className="hero-title-line hero-title-line--small">
                CONNECTING REQUIREMENTS.
              </span>
            </h1>

            <p className="hero-copy">
              iSpace connects international requirements
              with sourcing, procurement, supply and
              coordinated delivery networks — supported by
              Middle East operations and a dedicated
              Hyderabad sourcing hub.
            </p>

            <div className="hero-actions">
              <a
                className="hero-primary"
                href="#request-a-quote"
              >
                <span>REQUEST A QUOTE</span>

                <span className="hero-primary__arrow">
                  ↗
                </span>
              </a>

              <a
                className="hero-secondary"
                href="#about"
              >
                EXPLORE iSPACE
              </a>
            </div>
          </div>

          <div
            ref={visualRef}
            className="ispace-hero__visual"
          >
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

        <section
          id="capabilities"
          className="capabilities"
        >
          <div className="capabilities__orb" />

          <div className="capabilities-header">
            <div className="section-eyebrow">
              <span>04</span>

              <span className="section-eyebrow__line" />

              <span>
                OPERATIONAL CAPABILITIES
              </span>
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
                  iSpace brings together sourcing,
                  procurement, technical support,
                  manpower and coordinated delivery
                  capabilities around the requirements
                  of each customer.
                </p>

                <span className="capabilities-header__micro">
                  ONE PARTNER / MULTIPLE REQUIREMENTS
                </span>
              </div>
            </div>
          </div>

          <div className="capabilities-grid">
            {capabilities.map(
              (capability, index) => (
                <CapabilityCard
                  key={capability.number}
                  capability={capability}
                  index={index}
                />
              )
            )}
          </div>

          <div className="capabilities-bottom">
            <span>04 / 09</span>

            <div className="capabilities-bottom__line">
              <span />
            </div>

            <span>
              SOURCE / COORDINATE / DELIVER
            </span>
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
