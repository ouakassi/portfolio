import { useEffect } from "react";
import { useMouse } from "../hooks/useMouse";

const useGlowCardStyles = () => {
  useEffect(() => {
    const styleId = "glow-card-styles";

    // Check if styles already exist
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      :root {
        --backdrop: hsl(0 0% 60% / 0.12);
        --radius: 14;
        --border: 3;
        --backup-border: var(--backdrop);
        --size: 200;
      }

      .glow-card {
        --border-size: calc(var(--border, 2) * 1px);
        --spotlight-size: calc(var(--size, 150) * 1px);
        --hue: calc(var(--base) + (var(--xp, 0) * var(--spread, 0)));
        
        background-image: radial-gradient(
          var(--spotlight-size) var(--spotlight-size) at
          calc(var(--x, 0) * 1px)
          calc(var(--y, 0) * 1px),
          hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 70) * 1%) / var(--bg-spot-opacity, 0.1)), 
          transparent
        );
        background-color: var(--backdrop, transparent);
        background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
        background-position: 50% 50%;
        background-attachment: fixed;
        border: var(--border-size) solid var(--backup-border);
        position: relative;
        touch-action: none;
        backdrop-filter: blur(5px);
      }

      .glow-card::before {
        pointer-events: none;
        content: "";
        position: absolute;
        inset: calc(var(--border-size) * -1);
        border: var(--border-size) solid transparent;
        border-radius: calc(var(--radius) * 1px);
        background-attachment: fixed;
        background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-image: radial-gradient(
          calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
          calc(var(--x, 0) * 1px)
          calc(var(--y, 0) * 1px),
          hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), 
          transparent 100%
        );
        filter: brightness(2);
        mask:
          linear-gradient(transparent, transparent),
          linear-gradient(white, white);
        mask-clip: padding-box, border-box;
        mask-composite: intersect;
      }

      .glow-card::after {
        pointer-events: none;
        content: "";
        position: absolute;
        inset: calc(var(--border-size) * -1);
        border: var(--border-size) solid transparent;
        border-radius: calc(var(--radius) * 1px);
        background-attachment: fixed;
        background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-image: radial-gradient(
          calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
          calc(var(--x, 0) * 1px)
          calc(var(--y, 0) * 1px),
          hsl(0 100% 100% / var(--border-light-opacity, 1)), 
          transparent 100%
        );
        mask:
          linear-gradient(transparent, transparent),
          linear-gradient(white, white);
        mask-clip: padding-box, border-box;
        mask-composite: intersect;
      }

      .glow-outer {
        position: absolute;
        inset: 0;
        border-radius: calc(var(--radius) * 1px);
        border-width: 60px;
        filter: blur(30px);
        background: none;
        pointer-events: none;
        opacity: var(--outer, 1);
      }

      .glow-outer::before {
        pointer-events: none;
        content: "";
        position: absolute;
        inset: -10px;
        border: 10px solid transparent;
        border-radius: calc(var(--radius) * 1px);
        background-attachment: fixed;
        background-size: calc(100% + 20px) calc(100% + 20px);
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-image: radial-gradient(
          calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
          calc(var(--x, 0) * 1px)
          calc(var(--y, 0) * 1px),
          hsl(var(--hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), 
          transparent 100%
        );
        filter: brightness(2);
        mask:
          linear-gradient(transparent, transparent),
          linear-gradient(white, white);
        mask-clip: padding-box, border-box;
        mask-composite: intersect;
      }
    `;

    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);
};

const GlowCard = ({
  children,
  baseHue = 210,
  spread = 100,
  size = 200,
  radius = 14,
  border = 3,
  className = "",
  style = {},
  outerGlow = true,
  saturation = 100,
  lightness = 70,
  bgSpotOpacity = 0.1,
  borderSpotOpacity = 1,
  borderLightOpacity = 1,
  ...props
}) => {
  useGlowCardStyles();

  const cardStyle = {
    "--base": baseHue,
    "--spread": spread,
    "--size": size,
    "--radius": radius,
    "--border": border,
    "--outer": outerGlow ? 1 : 0,
    "--saturation": saturation,
    "--lightness": lightness,
    "--bg-spot-opacity": bgSpotOpacity,
    "--border-spot-opacity": borderSpotOpacity,
    "--border-light-opacity": borderLightOpacity,
    ...style,
  };

  return (
    <div className={`glow-card ${className}`} style={cardStyle} {...props}>
      {outerGlow && <div className="glow-outer" />}
      {children}
    </div>
  );
};

export { GlowCard };
