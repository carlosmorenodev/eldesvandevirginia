"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.banner}>
      <p style={styles.text}>
        Este sitio utiliza cookies técnicas para garantizar su funcionamiento.
      </p>

      <button onClick={acceptCookies} style={styles.button}>
        Entendido
      </button>
    </div>
  );
}

const styles = {
  banner: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    background: "#111",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    zIndex: 9999,
    gap: "12px",
    flexWrap: "wrap",
  },
  text: {
    margin: 0,
    fontSize: "14px",
    flex: 1,
  },
  button: {
    background: "#fff",
    color: "#111",
    border: "none",
    padding: "8px 12px",
    cursor: "pointer",
    borderRadius: "4px",
    fontWeight: "bold",
  },
};