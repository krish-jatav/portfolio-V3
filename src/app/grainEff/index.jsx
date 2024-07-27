"use client"

export default function Noise() {
    return (
        <div className=" fixed  inset-0 pointer-events-none z-50 opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1500 700"
          className=" h-full "
        >
          <defs>
            <filter
              id="nnnoise-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              colorInterpolationFilters="linearRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.120"
                numOctaves="4"
                seed="25"
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              ></feTurbulence>
              <feSpecularLighting
                surfaceScale="14"
                specularConstant="0.5"
                specularExponent="20"
                lightingColor="#d1d0c9"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                result="specularLighting"
              >
                <feDistantLight azimuth="3" elevation="100"></feDistantLight>
              </feSpecularLighting>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="transparent"></rect>
          <rect width="100%" height="100%" fill="#7957a8" filter="url(#nnnoise-filter)"></rect>
        </svg>
      </div>
      );
}
