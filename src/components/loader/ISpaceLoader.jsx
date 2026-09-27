import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./ISpaceLoader.css";

function ISpaceMark() {
  return (
    <svg
      className="ispace-loader__mark"
      viewBox="0 0 160 160"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ispaceGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f1d36a" />
          <stop offset="45%" stopColor="#d2a52b" />
          <stop offset="100%" stopColor="#9c7414" />
        </linearGradient>

        <linearGradient id="ispacePurple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9b76ff" />
          <stop offset="50%" stopColor="#6d35e8" />
          <stop offset="100%" stopColor="#4320a5" />
        </linearGradient>
      </defs>

      <circle className="mark-line mark-outer" cx="80" cy="80" r="56" />
      <circle className="mark-line mark-inner" cx="80" cy="80" r="40" />

      <line className="mark-line mark-cross" x1="80" y1="8" x2="80" y2="152" />
      <line className="mark-line mark-cross" x1="8" y1="80" x2="152" y2="80" />

      <path
        className="mark-line mark-diamond"
        d="M80 39 L121 80 L80 121 L39 80 Z"
      />

      <path
        className="mark-line mark-diamond-small"
        d="M80 57 L103 80 L80 103 L57 80 Z"
      />

      <circle className="mark-core" cx="80" cy="80" r="4.5" />

      <circle className="mark-highlight" cx="63" cy="55" r="2" />
    </svg>
  );
}

export default function ISpaceLoader({ onComplete }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const markWrap = root.querySelector(".ispace-loader__mark-wrap");
      const mark = root.querySelector(".ispace-loader__mark");
      const lines = root.querySelectorAll(".mark-line");
      const core = root.querySelector(".mark-core");
      const highlight = root.querySelector(".mark-highlight");
      const wordmark = root.querySelector(".ispace-loader__wordmark");
      const letters = root.querySelectorAll(".word-letter");
      const scan = root.querySelector(".ispace-loader__scan");
      const halo = root.querySelector(".ispace-loader__halo");
      const shadow = root.querySelector(".ispace-loader__shadow");
      const stripes = root.querySelectorAll(".ispace-loader__stripe");

      gsap.set(lines, {
        strokeDasharray: 500,
        strokeDashoffset: 500,
      });

      gsap.set(markWrap, {
        opacity: 0,
        scale: 0.72,
        rotationX: 18,
        rotationY: -22,
        rotationZ: -10,
        y: 18,
        transformPerspective: 900,
        transformOrigin: "center center",
      });

      gsap.set(mark, {
        rotationZ: 18,
      });

      gsap.set(core, {
        scale: 0,
        opacity: 0,
        transformOrigin: "center",
      });

      gsap.set(highlight, {
        opacity: 0,
        scale: 0,
        transformOrigin: "center",
      });

      gsap.set(letters, {
        opacity: 0,
        y: 14,
        rotationX: -70,
      });

      gsap.set(scan, {
        xPercent: -120,
        opacity: 0,
      });

      gsap.set(halo, {
        scale: 0.55,
        opacity: 0,
      });

      gsap.set(shadow, {
        scale: 0.45,
        opacity: 0,
      });

      gsap.set(stripes, {
        yPercent: (i) => (i % 2 === 0 ? 105 : -105),
      });

      const tl = gsap.timeline({
        onComplete: () => onComplete?.(),
      });

      tl.to({}, { duration: 0.2 })

        // Precision scan
        .to(scan, {
          xPercent: 120,
          opacity: 0.55,
          duration: 0.7,
          ease: "power2.inOut",
        })

        .to(scan, {
          opacity: 0,
          duration: 0.15,
        }, "-=0.12")

        // Ground shadow appears before the object
        .to(shadow, {
          scale: 1,
          opacity: 0.16,
          duration: 0.6,
          ease: "power3.out",
        }, "-=0.35")

        // 3D logo entrance
        .to(markWrap, {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          y: 0,
          duration: 0.8,
          ease: "expo.out",
        }, "-=0.35")

        .to(mark, {
          rotationZ: 0,
          duration: 0.55,
          ease: "power3.out",
        }, "<")

        // Ambient halo
        .to(halo, {
          scale: 1,
          opacity: 0.18,
          duration: 0.7,
          ease: "power2.out",
        }, "-=0.55")

        // Draw precision geometry
        .to(lines, {
          strokeDashoffset: 0,
          duration: 0.95,
          stagger: {
            each: 0.075,
            from: "center",
          },
          ease: "power2.inOut",
        }, "-=0.4")

        // Gold core
        .to(core, {
          scale: 1,
          opacity: 1,
          duration: 0.35,
          ease: "back.out(2.5)",
        }, "-=0.3")

        .to(core, {
          scale: 1.6,
          duration: 0.2,
          ease: "power2.out",
        })

        .to(core, {
          scale: 1,
          duration: 0.2,
          ease: "power2.inOut",
        })

        // Tiny highlight
        .to(highlight, {
          scale: 1,
          opacity: 0.8,
          duration: 0.25,
          ease: "back.out(2)",
        }, "-=0.2")

        // Wordmark
        .to(letters, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.55,
          stagger: 0.045,
          ease: "power3.out",
        }, "-=0.2")

        // Subtle floating motion
        .to(markWrap, {
          y: -4,
          rotationY: 2,
          duration: 0.7,
          ease: "sine.inOut",
        })

        .to(markWrap, {
          y: 0,
          rotationY: 0,
          duration: 0.7,
          ease: "sine.inOut",
        })

        // Hold
        .to({}, { duration: 0.35 })

        // Logo exits with depth
        .to(markWrap, {
          scale: 0.58,
          x: -42,
          y: -5,
          rotationX: 20,
          rotationY: -18,
          rotationZ: -9,
          opacity: 0,
          duration: 0.55,
          ease: "power4.in",
        })

        .to(shadow, {
          scale: 0.3,
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
        }, "<")

        .to(halo, {
          scale: 1.8,
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
        }, "<")

        .to(letters, {
          x: 38,
          opacity: 0,
          rotationX: 55,
          stagger: 0.025,
          duration: 0.45,
          ease: "power4.in",
        }, "<")

        // Alternating curtain
        .to(stripes, {
          yPercent: 0,
          duration: 0.72,
          stagger: {
            each: 0.045,
            from: "center",
          },
          ease: "power4.inOut",
        }, "-=0.04")

        .to(stripes, {
          yPercent: (i) => (i % 2 === 0 ? -112 : 112),
          duration: 0.92,
          stagger: {
            each: 0.055,
            from: "edges",
          },
          ease: "power4.inOut",
        })

        .to(root, {
          opacity: 0,
          duration: 0.18,
          pointerEvents: "none",
          ease: "power2.out",
        });
    }, root);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={rootRef} className="ispace-loader">
      <div className="ispace-loader__scan" />

      <div className="ispace-loader__halo" />

      <div className="ispace-loader__shadow" />

      <div className="ispace-loader__brand">
        <div className="ispace-loader__mark-wrap">
          <ISpaceMark />
        </div>

        <div className="ispace-loader__wordmark">
          <span className="word-letter word-purple">i</span>
          <span className="word-letter">S</span>
          <span className="word-letter">p</span>
          <span className="word-letter">a</span>
          <span className="word-letter">c</span>
          <span className="word-letter">e</span>
        </div>
      </div>

      <div className="ispace-loader__curtain" aria-hidden="true">
        <span className="ispace-loader__stripe stripe-purple" />
        <span className="ispace-loader__stripe stripe-white" />
        <span className="ispace-loader__stripe stripe-gold" />
        <span className="ispace-loader__stripe stripe-purple" />
        <span className="ispace-loader__stripe stripe-white" />
        <span className="ispace-loader__stripe stripe-purple" />
        <span className="ispace-loader__stripe stripe-gold" />
        <span className="ispace-loader__stripe stripe-purple" />
        <span className="ispace-loader__stripe stripe-white" />
      </div>
    </div>
  );
}