export const adsId = String(import.meta.env.PUBLIC_GOOGLE_ADS_ID ?? 'AW-18229349170').trim();

export const adsLabels = {
  lead: String(import.meta.env.PUBLIC_GOOGLE_ADS_LABEL_LEAD ?? '').trim(),
  phone: String(import.meta.env.PUBLIC_GOOGLE_ADS_LABEL_PHONE ?? '').trim(),
  whatsapp: String(import.meta.env.PUBLIC_GOOGLE_ADS_LABEL_WHATSAPP ?? '').trim(),
};

export const adsEnabled = adsId.startsWith('AW-');

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    brTrack?: {
      lead: (payload?: { email?: string; phone?: string }) => void;
      phone: () => void;
      whatsapp: () => void;
    };
  }
}
