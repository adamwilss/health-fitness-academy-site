import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt =
  'Health Fitness Academy — OFQUAL-regulated fitness qualifications for women';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/* Brand tokens mirrored from globals.css — satori can't read CSS vars. */
const DUSK = '#2E2036';
const PARCHMENT = '#F2EAD9';
const SAFFRON = '#D98A2A';
const LAVENDER = '#BDB2BF';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: DUSK,
          padding: 72,
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 28,
              letterSpacing: 6,
              color: SAFFRON,
              textTransform: 'uppercase',
            }}
          >
            Health Fitness Academy
          </div>
          {/* Wax-seal mark */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: 150,
              height: 150,
              borderRadius: 9999,
              border: `6px solid ${SAFFRON}`,
              color: PARCHMENT,
              fontSize: 44,
              fontStyle: 'italic',
              transform: 'rotate(-6deg)',
            }}
          >
            HFA
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 76,
              lineHeight: 1.08,
              color: PARCHMENT,
              fontWeight: 700,
              maxWidth: 940,
            }}
          >
            Qualified by women. Built for women ready to lead.
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 30,
              color: LAVENDER,
            }}
          >
            OFQUAL-regulated fitness qualifications — from £300, online &amp; Manchester
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: `2px solid rgba(242,234,217,0.18)`,
            paddingTop: 28,
          }}
        >
          <div style={{ display: 'flex', fontSize: 24, color: LAVENDER }}>
            healthfitnessacademy.co.uk
          </div>
          <div
            style={{
              display: 'flex',
              gap: 16,
              fontSize: 22,
              color: SAFFRON,
              textTransform: 'uppercase',
              letterSpacing: 3,
            }}
          >
            OFQUAL · CIMSPA · Active IQ · REPs
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
