'use client';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { FicheDocument } from './FichePDF';
import type { SemaineData } from '@/lib/repartition';

type Props = {
  semaine: SemaineData;
  classe: string;
  label: string;
};

export default function PDFBtnLazy({ semaine, classe, label }: Props) {
  return (
    <PDFDownloadLink
      document={<FicheDocument semaine={semaine} classe={classe} />}
      fileName={`fiches-${classe}-p${semaine.periode}-s${semaine.numero_semaine}.pdf`}
    >
      {({ loading }) => (
        <button
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-900 text-white hover:bg-stone-700 transition-colors disabled:opacity-60"
          disabled={loading}
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 12.5h10M8 3v7.5m0 0L5.5 8M8 10.5L10.5 8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {loading ? 'Génération…' : label}
        </button>
      )}
    </PDFDownloadLink>
  );
}
