"use client";

import { useState } from "react";
import Image from "next/image";
import type { Initiative } from "../data/initiatives";

interface InitiativesTabsProps {
  initiatives: Initiative[];
}

export default function InitiativesTabs({ initiatives }: InitiativesTabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div style={{ overflowX: "auto", margin: "0 -4px" }} className="rv d1">
        <div className="tab-scroll" id="tabs" role="tablist">
          {initiatives.map((init, i) => (
            <button
              key={init.id}
              role="tab"
              aria-selected={activeTab === i}
              aria-controls={`panel-${i}`}
              id={`tab-${i}`}
              className={`itab ${activeTab === i ? "on" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {init.tabLabel}
            </button>
          ))}
        </div>
      </div>

      {initiatives.map((init, i) => (
        <div
          key={init.id}
          className={`ipanel ${activeTab === i ? "on" : ""}`}
          id={`panel-${i}`}
          role="tabpanel"
          aria-labelledby={`tab-${i}`}
        >
          <div className="ipimgw">
            <Image
              // The original HEIC needs unoptimized flag and fallback if possible. 
              // We'll leave unoptimized on so Next.js doesn't try to parse HEIC or large assets in this client component for now.
              src={init.image}
              alt={init.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              unoptimized={init.image.toLowerCase().endsWith(".heic")} 
            />
            <div className="ipnum">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="ipfoot">
              <span className="ipfn">{init.footerLabel}</span>
              <span className="ipfs">{init.footerSub}</span>
            </div>
          </div>
          <div className="ipcont">
            <div className="ipcat">{init.category}</div>
            <div
              className="ipname"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {init.name}
            </div>
            <div className="ipsub">{init.subtitle}</div>
            <p className="ipdesc">{init.description}</p>
            <div className="ipdiv" />
            <ul className="iplist">
              {init.highlights.map((h, idx) => (
                <li key={idx}>
                  <span>
                    {h.bold && <strong>{h.bold} </strong>}
                    {h.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
