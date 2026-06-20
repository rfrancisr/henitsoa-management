"use client";

import dynamic from "next/dynamic";

const CalendrierClient = dynamic(() => import("./CalendrierClient"), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-2xl h-[600px] flex items-center justify-center" style={{ border: "1px solid rgba(232,212,138,0.3)" }}>
      <p className="text-stone-300 text-sm">Chargement du calendrier…</p>
    </div>
  ),
});

export default function CalendrierWrapper({ canEdit }: { canEdit: boolean }) {
  return <CalendrierClient canEdit={canEdit} />;
}
