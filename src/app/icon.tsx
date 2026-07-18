import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

// Generated favicon (no brand artwork exists yet) — the same saffron seal
// mark used in the Logo/Ledger system, rendered as a real icon rather than
// left as a default Next.js favicon.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2E2036',
          borderRadius: '50%',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            background: '#D98A2A',
            color: '#241B1B',
            fontSize: 26,
            fontWeight: 700,
            fontFamily: 'Georgia, serif',
          }}
        >
          H
        </div>
      </div>
    ),
    { ...size },
  );
}
