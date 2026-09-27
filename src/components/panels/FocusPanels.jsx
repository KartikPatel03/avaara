import { useRef, useState } from "react";
import gsap from "gsap";
import "./FocusPanels.css";

const panels = [
  {
    id: "01",
    title: "PROCUREMENT",
    kicker: "SOURCE / EVALUATE / PROCURE",
    description:
      "Supplier identification, RFQs, quotation comparison, evaluation, negotiation, purchasing and delivery coordination.",
    destination: "#procurement",
  },
  {
    id: "02",
    title: "CAPABILITIES",
    kicker: "PEOPLE / TECHNICAL / SUPPLY",
    description:
      "Manpower, technical support, procurement & supply, and logistics & delivery capabilities.",
    destination: "#capabilities",
  },
  {
    id: "03",
    title: "LOGISTICS",
    kicker: "CONSOLIDATE / MOVE / DELIVER",
    description:
      "Warehouse consolidation, packaging, OEM sourcing, freight coordination and export documentation.",
    destination: "#logistics",
  },
  {
    id: "04",
    title: "INDIA EXPORTS",
    kicker: "HYDERABAD / INDIA / GLOBAL",
    description:
      "An India sourcing and export hub connecting global customers with Indian manufacturers, distributors and suppliers.",
    destination: "#india-exports",
  },
  {
    id: "05",
    title: "OUR REACH",
    kicker: "MIDDLE EAST / USA / INDIA",
    description:
      "A connected network linking regional requirements with international suppliers and delivery networks.",
    destination: "#our-reach",
  },
  {
    id: "06",
    title: "REQUEST A QUOTE",
    kicker: "TELL US WHAT YOU NEED",
    description:
      "Submit your requirement, quantity, delivery destination and supporting RFQ information.",
    destination: "#request-a-quote",
  },
];

const ease = "expo.out";

function FocusPanels() {
  const [focused, setFocused] = useState(null);
  const [selected, setSelected] = useState(null);

  const panelRefs = useRef([]);
  const visualRefs = useRef([]);

  const resetPanels = () => {
    gsap.to(panelRefs.current, {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.7,
      ease,
      overwrite: true,
    });

    gsap.to(visualRefs.current, {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease,
      overwrite: true,
    });
  };

  const focusPanel = (index) => {
    if (selected !== null) return;

    setFocused(index);

    panelRefs.current.forEach((panel, i) => {
      if (!panel) return;

      if (i === index) {
        gsap.to(panel, {
          scale: 1.025,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.72,
          ease,
          overwrite: true,
        });
      } else {
        gsap.to(panel, {
          scale: 0.975,
          opacity: 0.48,
          filter: "blur(1.5px)",
          duration: 0.72,
          ease,
          overwrite: true,
        });
      }
    });
  };

  const handleLeave = () => {
    if (selected !== null) return;

    setFocused(null);
    resetPanels();
  };

  const handlePointerMove = (event, index) => {
    if (selected !== null) return;

    const visual = visualRefs.current[index];

    if (!visual) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    gsap.to(visual, {
      x: x * 8,
      y: y * 7,
      rotateY: x * 5,
      rotateX: -y * 4,
      duration: 0.7,
      ease: "power3.out",
      overwrite: true,
    });
  };

  const handlePointerLeave = (index) => {
    const visual = visualRefs.current[index];

    if (!visual) return;

    gsap.to(visual, {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease,
      overwrite: true,
    });
  };

  const handleClick = (index) => {
    if (selected === index) {
      const destination = panels[index].destination;

      gsap.to(panelRefs.current, {
        scale: 0.92,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.55,
        ease: "power3.inOut",
        stagger: 0.035,
        overwrite: true,
        onComplete: () => {
          window.location.hash = destination.replace("#", "");

          window.setTimeout(() => {
            resetPanels();

            gsap.fromTo(
              panelRefs.current,
              {
                opacity: 0,
                y: 30,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease,
                stagger: 0.04,
              }
            );
          }, 120);
        },
      });

      return;
    }

    setSelected(index);

    panelRefs.current.forEach((panel, i) => {
      if (!panel) return;

      if (i === index) {
        gsap.to(panel, {
          scale: 1.055,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease,
          overwrite: true,
        });
      } else {
        gsap.to(panel, {
          scale: 0.94,
          opacity: 0.18,
          filter: "blur(4px)",
          duration: 0.8,
          ease,
          overwrite: true,
        });
      }
    });
  };

  const handleReset = () => {
    setSelected(null);
    setFocused(null);
    resetPanels();
  };

  return (
    <section className="focus-panels">
      <div className="focus-panels__header">
        <div className="focus-panels__eyebrow">
          <span>EXPLORE iSPACE</span>
          <i />
          <span>SELECT A SERVICE</span>
        </div>

        <div className="focus-panels__heading">
          <h2>
            ONE NETWORK.
            <br />
            <em>MULTIPLE PATHS.</em>
          </h2>

          <p>
            Explore how iSpace connects sourcing,
            procurement, supply and delivery around
            your requirements.
          </p>
        </div>
      </div>

      <div
        className={`focus-panels__grid ${
          selected !== null ? "has-selection" : ""
        }`}
      >
        {panels.map((panel, index) => {
          const isFocused = focused === index;
          const isSelected = selected === index;

          return (
            <button
              key={panel.id}
              ref={(element) => {
                panelRefs.current[index] = element;
              }}
              type="button"
              className={`focus-panel ${
                isFocused ? "is-focused" : ""
              } ${isSelected ? "is-selected" : ""}`}
              onMouseEnter={() => focusPanel(index)}
              onMouseLeave={() => {
                handleLeave();
                handlePointerLeave(index);
              }}
              onPointerMove={(event) =>
                handlePointerMove(event, index)
              }
              onFocus={() => focusPanel(index)}
              onBlur={handleLeave}
              onClick={() => handleClick(index)}
            >
              <span className="focus-panel__noise" />

              <span className="focus-panel__top">
                <span className="focus-panel__number">
                  {panel.id}
                </span>

                <span className="focus-panel__status">
                  {isSelected
                    ? "SELECTED"
                    : isFocused
                      ? "OPEN"
                      : "EXPLORE"}
                </span>
              </span>

              <span
                ref={(element) => {
                  visualRefs.current[index] = element;
                }}
                className="focus-panel__visual"
              >
                <span className="focus-panel__orbit focus-panel__orbit--one" />
                <span className="focus-panel__orbit focus-panel__orbit--two" />
                <span className="focus-panel__core" />
                <span className="focus-panel__signal" />
              </span>

              <span className="focus-panel__body">
                <span className="focus-panel__kicker">
                  {panel.kicker}
                </span>

                <span className="focus-panel__title">
                  {panel.title}
                </span>

                <span className="focus-panel__description">
                  {panel.description}
                </span>

                <span className="focus-panel__action">
                  <span>
                    {isSelected
                      ? "CLICK AGAIN TO ENTER"
                      : "FOCUS / ENTER"}
                  </span>

                  <span className="focus-panel__arrow">
                    ↗
                  </span>
                </span>
              </span>

              <span className="focus-panel__edge" />
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <button
          className="focus-panels__reset"
          type="button"
          onClick={handleReset}
        >
          ← BACK TO ALL
        </button>
      )}

      <div className="focus-panels__footer">
        <span>03 / 07</span>

        <span className="focus-panels__footer-line">
          <i />
        </span>

        <span>
          HOVER TO FOCUS / CLICK TO SELECT / CLICK AGAIN TO ENTER
        </span>
      </div>
    </section>
  );
}

export default FocusPanels;