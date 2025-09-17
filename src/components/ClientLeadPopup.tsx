"use client";

import dynamic from "next/dynamic";

const LeadPopup = dynamic(() => import("./LeadPopup"), { ssr: false });

export default function ClientLeadPopup() {
  return <LeadPopup />;
}
