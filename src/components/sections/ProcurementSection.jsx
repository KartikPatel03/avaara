
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProcurementSection.css";

gsap.registerPlugin(ScrollTrigger);

const procurementStages = [
  {
    number: "01",
    title: "IDENTIFY",
    text: "Understand the requirement, specification, quantity and delivery destination.",
  },
  {
    number: "02",
    title: "SOURCE",
    text: "Identify relevant suppliers and sourcing opportunities around the requirement.",
  },
  {
    number: "03",
    title: "EVALUATE",
    text: "Compare quotations, requirements, supplier information and available options.",
  },
  {
    number: "04",
    title: "COORDINATE",
    text: "Support purchasing and coordinate the requirement through delivery.",
  },
];

function ProcurementSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".procurement-section__eyebrow", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
        y: 25,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.from(".procurement-section__title-line", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
        yPercent: 110,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.from(".procurement-section__intro", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 68%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".procurement-stage", {
        scrollTrigger: {
          trigger: ".procurement-flow",
          start: "top 78%",
        },
        y: 55,
        opacity: 0,
        rotateX: 8,
        duration: 0.85,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".procurement-node", {
        scrollTrigger: {
          trigger: ".procurement-flow",
          start: "top 72%",
        },
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        delay: 0.25,
        ease: "back.out(1.8)",
      });

      gsap.to(".procurement-orbit", {
        rotation: 360,
        duration: 28,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".procurement-pulse", {
        scale: 1.35,
        opacity: 0,
        duration: 2.2,
        repeat: -1,
        ease: "power2.out",
      });

      gsap.to(".procurement-route__beam", {
        xPercent: 100,
        duration: 2.4,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="procurement"
      className="procurement-section"
    >
      <div className="procurement-section__background">
        <div className="procurement-orbit procurement-orbit--one" />
        <div className="procurement-orbit procurement-orbit--two" />
        <div className="procurement-grid" />
      </div>

      <div className="procurement-section__container">
        <div className="procurement-section__top">
          <div className="procurement-section__eyebrow">
            <span>05</span>
            <i />
            <span>GLOBAL PROCUREMENT</span>
          </div>

          <div className="procurement-section__location">
            <span className="procurement-location__dot" />
            <span>MIDDLE EAST / HYDERABAD</span>
          </div>
        </div>

        <div className="procurement-section__heading">
          <div className="procurement-section__title">
            <div className="procurement-title-mask">
              <h2 className="procurement-section__title-line">
                REQUIREMENTS
              </h2>
            </div>

            <div className="procurement-title-mask">
              <h2 className="procurement-section__title-line">
                <em>MEET</em> SUPPLY.
              </h2>
            </div>
          </div>

          <div className="procurement-section__intro">
            <p>
              iSpace supports requirement-driven sourcing and
              procurement — connecting specifications and quantities
              with suppliers, quotations and coordinated purchasing.
            </p>

            <span>
              SOURCE / EVALUATE / PROCURE / COORDINATE
            </span>
          </div>
        </div>

        <div className="procurement-flow">
          <div className="procurement-flow__line">
            <span className="procurement-route__beam" />
          </div>

          {procurementStages.map((stage, index) => (
            <article
              className="procurement-stage"
              key={stage.number}
            >
              <div className="procurement-stage__visual">
                <span className="procurement-node">
                  <span>{stage.number}</span>
                  <i className="procurement-pulse" />
                </span>
              </div>

              <div className="procurement-stage__content">
                <span className="procurement-stage__number">
                  {stage.number}
                </span>

                <h3>{stage.title}</h3>

                <p>{stage.text}</p>
              </div>

              {index < procurementStages.length - 1 && (
                <span className="procurement-stage__connector">
                  →
                </span>
              )}
            </article>
          ))}
        </div>

        <div className="procurement-details">
          <article className="procurement-detail">
            <span className="procurement-detail__number">
              01
            </span>

            <div>
              <span className="procurement-detail__label">
                MIDDLE EAST OPERATIONS
              </span>

              <h3>Regional Procurement</h3>

              <p>
                Procurement support for regional requirements,
                including institutional and defense-related sourcing
                where applicable.
              </p>
            </div>
          </article>

          <article className="procurement-detail procurement-detail--active">
            <span className="procurement-detail__number">
              02
            </span>

            <div>
              <span className="procurement-detail__label">
                HYDERABAD / INDIA
              </span>

              <h3>India Sourcing Desk</h3>

              <p>
                Connecting global customers with Indian
                manufacturers, distributors and suppliers according
                to requirement, specification and destination.
              </p>
            </div>
          </article>
        </div>

        <div className="procurement-section__footer">
          <span>05 / 07</span>

          <div className="procurement-section__footer-line">
            <span />
          </div>

          <span>REQUIREMENT-DRIVEN SOURCING</span>
        </div>
      </div>
    </section>
  );
}

export default ProcurementSection;