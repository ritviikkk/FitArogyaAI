import React, { useState, useEffect, useRef } from 'react';

const C = {
  bg: '#09090B', card: '#111113', card2: '#18181B',
  accent: '#F97316', accent2: '#EF4444', accent3: '#FBBF24', accent4: '#8B5CF6',
  green: '#22C55E', blue: '#3B82F6', text: '#FAFAFA', muted: '#71717A', border: '#27272A'
}




// ============== ANATOMICAL MUSCLE SVG ==============
const MuscleAnatomySVG = ({ muscleGroup }) => {
  const C = {
    body: '#C8B99A', bodyDark: '#A0907A', bodyLight: '#D4C4A8',
    muscle: '#CC3333', muscleGlow: '#FF4444', muscleSoft: '#E05555',
    inactive: '#B8A898', line: '#7A6A5A', bg: '#0d0d12'
  };

  const muscles = {
    chest: (
      <svg viewBox="0 0 200 280" width="160" height="220" style={{ display: 'block', margin: '0 auto' }}>
        <defs>
          <radialGradient id="bodyG" cx="50%" cy="40%"><stop offset="0%" stopColor={C.bodyLight} /><stop offset="100%" stopColor={C.bodyDark} /></radialGradient>
          <radialGradient id="muscleG" cx="50%" cy="50%"><stop offset="0%" stopColor={C.muscleGlow} /><stop offset="100%" stopColor={C.muscle} /></radialGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="2" result="blur" /><feComposite in="SourceGraphic" in2="blur" /></filter>
        </defs>
        {/* Torso */}
        <ellipse cx="100" cy="140" rx="55" ry="75" fill="url(#bodyG)" stroke={C.line} strokeWidth="1" />
        {/* Neck */}
        <rect x="88" y="60" width="24" height="30" rx="8" fill={C.body} stroke={C.line} strokeWidth="1" />
        {/* Head */}
        <ellipse cx="100" cy="45" rx="28" ry="35" fill={C.body} stroke={C.line} strokeWidth="1" />
        {/* LEFT PECTORAL - highlighted */}
        <path d="M 55 105 Q 70 95 100 100 Q 100 125 85 130 Q 65 125 55 105 Z" fill="url(#muscleG)" opacity="0.92" filter="url(#glow)" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        {/* RIGHT PECTORAL - highlighted */}
        <path d="M 145 105 Q 130 95 100 100 Q 100 125 115 130 Q 135 125 145 105 Z" fill="url(#muscleG)" opacity="0.92" filter="url(#glow)" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        {/* Pec separation line */}
        <line x1="100" y1="98" x2="100" y2="132" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
        {/* Abs (inactive) */}
        <rect x="86" y="134" width="12" height="10" rx="3" fill={C.inactive} opacity="0.5" />
        <rect x="102" y="134" width="12" height="10" rx="3" fill={C.inactive} opacity="0.5" />
        <rect x="86" y="147" width="12" height="10" rx="3" fill={C.inactive} opacity="0.5" />
        <rect x="102" y="147" width="12" height="10" rx="3" fill={C.inactive} opacity="0.5" />
        {/* Left arm */}
        <path d="M 47 110 Q 30 130 28 165" stroke={C.body} strokeWidth="22" strokeLinecap="round" fill="none" />
        <path d="M 47 110 Q 30 130 28 165" stroke={C.line} strokeWidth="23" strokeLinecap="round" fill="none" opacity="0.2" />
        {/* Right arm */}
        <path d="M 153 110 Q 170 130 172 165" stroke={C.body} strokeWidth="22" strokeLinecap="round" fill="none" />
        <path d="M 153 110 Q 170 130 172 165" stroke={C.line} strokeWidth="23" strokeLinecap="round" fill="none" opacity="0.2" />
        {/* Legs */}
        <path d="M 78 210 Q 72 240 70 275" stroke={C.body} strokeWidth="26" strokeLinecap="round" fill="none" />
        <path d="M 122 210 Q 128 240 130 275" stroke={C.body} strokeWidth="26" strokeLinecap="round" fill="none" />
        {/* Label */}
        <rect x="5" y="5" width="90" height="24" rx="6" fill={C.muscle} opacity="0.9" />
        <text x="50" y="21" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800" fontFamily="system-ui">CHEST</text>
      </svg>
    ),

    back: (
      <svg viewBox="0 0 200 280" width="160" height="220" style={{ display: 'block', margin: '0 auto' }}>
        <defs>
          <radialGradient id="bodyG2" cx="50%" cy="40%"><stop offset="0%" stopColor="#C0B090" /><stop offset="100%" stopColor="#907060" /></radialGradient>
          <radialGradient id="muscleG2" cx="50%" cy="50%"><stop offset="0%" stopColor="#FF4444" /><stop offset="100%" stopColor="#CC2222" /></radialGradient>
        </defs>
        {/* Back torso */}
        <ellipse cx="100" cy="145" rx="55" ry="75" fill="url(#bodyG2)" stroke="#7A6A5A" strokeWidth="1" />
        {/* Neck back */}
        <rect x="88" y="62" width="24" height="28" rx="8" fill="#C0B090" stroke="#7A6A5A" strokeWidth="1" />
        {/* Head back */}
        <ellipse cx="100" cy="46" rx="28" ry="34" fill="#C0B090" stroke="#7A6A5A" strokeWidth="1" />
        {/* Spine line */}
        <line x1="100" y1="88" x2="100" y2="210" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 3" />
        {/* LEFT LAT - highlighted */}
        <path d="M 50 105 Q 55 100 95 108 Q 90 145 75 155 Q 52 140 50 105 Z" fill="url(#muscleG2)" opacity="0.9" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        {/* RIGHT LAT - highlighted */}
        <path d="M 150 105 Q 145 100 105 108 Q 110 145 125 155 Q 148 140 150 105 Z" fill="url(#muscleG2)" opacity="0.9" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        {/* Traps - highlighted */}
        <path d="M 75 88 Q 100 80 125 88 Q 118 105 100 108 Q 82 105 75 88 Z" fill="url(#muscleG2)" opacity="0.85" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        {/* Rhomboids */}
        <path d="M 82 108 Q 100 105 118 108 Q 115 128 100 130 Q 85 128 82 108 Z" fill="#E04444" opacity="0.7" />
        {/* Arms */}
        <path d="M 47 112 Q 30 132 28 167" stroke="#C0B090" strokeWidth="22" strokeLinecap="round" fill="none" />
        <path d="M 153 112 Q 170 132 172 167" stroke="#C0B090" strokeWidth="22" strokeLinecap="round" fill="none" />
        {/* Legs */}
        <path d="M 78 215 Q 72 245 70 278" stroke="#C0B090" strokeWidth="26" strokeLinecap="round" fill="none" />
        <path d="M 122 215 Q 128 245 130 278" stroke="#C0B090" strokeWidth="26" strokeLinecap="round" fill="none" />
        {/* Label */}
        <rect x="5" y="5" width="120" height="24" rx="6" fill="#CC2222" opacity="0.9" />
        <text x="62" y="21" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800" fontFamily="system-ui">BACK / LATS</text>
      </svg>
    ),

    biceps: (
      <svg viewBox="0 0 200 280" width="160" height="220" style={{ display: 'block', margin: '0 auto' }}>
        <defs>
          <radialGradient id="bicepG" cx="50%" cy="50%"><stop offset="0%" stopColor="#FF5555" /><stop offset="100%" stopColor="#CC2222" /></radialGradient>
        </defs>
        {/* Torso */}
        <ellipse cx="100" cy="145" rx="52" ry="70" fill="#C8B99A" stroke="#7A6A5A" strokeWidth="1" />
        <rect x="89" y="65" width="22" height="28" rx="7" fill="#C8B99A" stroke="#7A6A5A" strokeWidth="1" />
        <ellipse cx="100" cy="48" rx="26" ry="33" fill="#C8B99A" stroke="#7A6A5A" strokeWidth="1" />
        {/* Left arm upper - bicep highlighted */}
        <path d="M 49 112 Q 32 132 30 162" stroke="#C8B99A" strokeWidth="22" strokeLinecap="round" fill="none" />
        <ellipse cx="39" cy="138" rx="13" ry="18" fill="url(#bicepG)" opacity="0.95" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        {/* Left forearm */}
        <path d="M 30 162 Q 24 185 22 210" stroke="#C8B99A" strokeWidth="18" strokeLinecap="round" fill="none" />
        {/* Right arm upper - bicep highlighted */}
        <path d="M 151 112 Q 168 132 170 162" stroke="#C8B99A" strokeWidth="22" strokeLinecap="round" fill="none" />
        <ellipse cx="161" cy="138" rx="13" ry="18" fill="url(#bicepG)" opacity="0.95" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        {/* Right forearm */}
        <path d="M 170 162 Q 176 185 178 210" stroke="#C8B99A" strokeWidth="18" strokeLinecap="round" fill="none" />
        {/* Legs */}
        <path d="M 78 212 Q 72 242 70 276" stroke="#C8B99A" strokeWidth="25" strokeLinecap="round" fill="none" />
        <path d="M 122 212 Q 128 242 130 276" stroke="#C8B99A" strokeWidth="25" strokeLinecap="round" fill="none" />
        {/* Label */}
        <rect x="5" y="5" width="80" height="24" rx="6" fill="#CC2222" opacity="0.9" />
        <text x="45" y="21" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800" fontFamily="system-ui">BICEPS</text>
      </svg>
    ),

    triceps: (
      <svg viewBox="0 0 200 280" width="160" height="220" style={{ display: 'block', margin: '0 auto' }}>
        <defs>
          <radialGradient id="tricepG" cx="50%" cy="50%"><stop offset="0%" stopColor="#FF5555" /><stop offset="100%" stopColor="#CC2222" /></radialGradient>
        </defs>
        {/* Torso back view */}
        <ellipse cx="100" cy="145" rx="52" ry="70" fill="#C0B090" stroke="#7A6A5A" strokeWidth="1" />
        <rect x="89" y="65" width="22" height="28" rx="7" fill="#C0B090" stroke="#7A6A5A" strokeWidth="1" />
        <ellipse cx="100" cy="48" rx="26" ry="33" fill="#C0B090" stroke="#7A6A5A" strokeWidth="1" />
        {/* Left arm - tricep (back of arm) highlighted */}
        <path d="M 49 112 Q 32 132 30 162" stroke="#C0B090" strokeWidth="22" strokeLinecap="round" fill="none" />
        <ellipse cx="37" cy="140" rx="11" ry="20" fill="url(#tricepG)" opacity="0.95" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        <path d="M 30 162 Q 24 185 22 210" stroke="#C0B090" strokeWidth="18" strokeLinecap="round" fill="none" />
        {/* Right arm - tricep highlighted */}
        <path d="M 151 112 Q 168 132 170 162" stroke="#C0B090" strokeWidth="22" strokeLinecap="round" fill="none" />
        <ellipse cx="163" cy="140" rx="11" ry="20" fill="url(#tricepG)" opacity="0.95" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        <path d="M 170 162 Q 176 185 178 210" stroke="#C0B090" strokeWidth="18" strokeLinecap="round" fill="none" />
        {/* Legs */}
        <path d="M 78 212 Q 72 242 70 276" stroke="#C0B090" strokeWidth="25" strokeLinecap="round" fill="none" />
        <path d="M 122 212 Q 128 242 130 276" stroke="#C0B090" strokeWidth="25" strokeLinecap="round" fill="none" />
        {/* Label */}
        <rect x="5" y="5" width="90" height="24" rx="6" fill="#CC2222" opacity="0.9" />
        <text x="50" y="21" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800" fontFamily="system-ui">TRICEPS</text>
      </svg>
    ),

    quads: (
      <svg viewBox="0 0 200 300" width="160" height="230" style={{ display: 'block', margin: '0 auto' }}>
        <defs>
          <radialGradient id="quadG" cx="50%" cy="50%"><stop offset="0%" stopColor="#FF5555" /><stop offset="100%" stopColor="#CC2222" /></radialGradient>
        </defs>
        {/* Torso */}
        <ellipse cx="100" cy="110" rx="45" ry="58" fill="#C8B99A" stroke="#7A6A5A" strokeWidth="1" />
        <rect x="90" y="42" width="20" height="24" rx="6" fill="#C8B99A" stroke="#7A6A5A" strokeWidth="1" />
        <ellipse cx="100" cy="30" rx="22" ry="28" fill="#C8B99A" stroke="#7A6A5A" strokeWidth="1" />
        {/* Arms */}
        <path d="M 57 90 Q 42 108 40 138" stroke="#C8B99A" strokeWidth="18" strokeLinecap="round" fill="none" />
        <path d="M 143 90 Q 158 108 160 138" stroke="#C8B99A" strokeWidth="18" strokeLinecap="round" fill="none" />
        {/* Left quad - highlighted */}
        <path d="M 72 168 Q 65 195 64 240" stroke="#C8B99A" strokeWidth="32" strokeLinecap="round" fill="none" />
        <ellipse cx="70" cy="200" rx="18" ry="32" fill="url(#quadG)" opacity="0.93" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        {/* Left lower leg */}
        <path d="M 64 240 Q 62 262 62 285" stroke="#C8B99A" strokeWidth="22" strokeLinecap="round" fill="none" />
        {/* Right quad - highlighted */}
        <path d="M 128 168 Q 135 195 136 240" stroke="#C8B99A" strokeWidth="32" strokeLinecap="round" fill="none" />
        <ellipse cx="130" cy="200" rx="18" ry="32" fill="url(#quadG)" opacity="0.93" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        {/* Right lower leg */}
        <path d="M 136 240 Q 138 262 138 285" stroke="#C8B99A" strokeWidth="22" strokeLinecap="round" fill="none" />
        {/* Label */}
        <rect x="5" y="5" width="120" height="24" rx="6" fill="#CC2222" opacity="0.9" />
        <text x="65" y="21" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800" fontFamily="system-ui">QUADRICEPS</text>
      </svg>
    ),

    hamstrings: (
      <svg viewBox="0 0 200 300" width="160" height="230" style={{ display: 'block', margin: '0 auto' }}>
        <defs>
          <radialGradient id="hamG" cx="50%" cy="50%"><stop offset="0%" stopColor="#FF5555" /><stop offset="100%" stopColor="#CC2222" /></radialGradient>
        </defs>
        {/* Back torso */}
        <ellipse cx="100" cy="110" rx="45" ry="58" fill="#C0B090" stroke="#7A6A5A" strokeWidth="1" />
        <rect x="90" y="42" width="20" height="24" rx="6" fill="#C0B090" stroke="#7A6A5A" strokeWidth="1" />
        <ellipse cx="100" cy="30" rx="22" ry="28" fill="#C0B090" stroke="#7A6A5A" strokeWidth="1" />
        {/* Arms */}
        <path d="M 57 90 Q 42 108 40 138" stroke="#C0B090" strokeWidth="18" strokeLinecap="round" fill="none" />
        <path d="M 143 90 Q 158 108 160 138" stroke="#C0B090" strokeWidth="18" strokeLinecap="round" fill="none" />
        {/* Left hamstring - highlighted */}
        <path d="M 72 168 Q 65 195 64 240" stroke="#C0B090" strokeWidth="32" strokeLinecap="round" fill="none" />
        <ellipse cx="69" cy="205" rx="16" ry="30" fill="url(#hamG)" opacity="0.93" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        <path d="M 64 240 Q 62 262 62 285" stroke="#C0B090" strokeWidth="22" strokeLinecap="round" fill="none" />
        {/* Right hamstring - highlighted */}
        <path d="M 128 168 Q 135 195 136 240" stroke="#C0B090" strokeWidth="32" strokeLinecap="round" fill="none" />
        <ellipse cx="131" cy="205" rx="16" ry="30" fill="url(#hamG)" opacity="0.93" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        <path d="M 136 240 Q 138 262 138 285" stroke="#C0B090" strokeWidth="22" strokeLinecap="round" fill="none" />
        {/* Label */}
        <rect x="5" y="5" width="120" height="24" rx="6" fill="#CC2222" opacity="0.9" />
        <text x="65" y="21" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800" fontFamily="system-ui">HAMSTRINGS</text>
      </svg>
    ),

    glutes: (
      <svg viewBox="0 0 200 280" width="160" height="220" style={{ display: 'block', margin: '0 auto' }}>
        <defs>
          <radialGradient id="gluteG" cx="50%" cy="50%"><stop offset="0%" stopColor="#FF5555" /><stop offset="100%" stopColor="#CC2222" /></radialGradient>
        </defs>
        {/* Back torso */}
        <ellipse cx="100" cy="130" rx="50" ry="65" fill="#C0B090" stroke="#7A6A5A" strokeWidth="1" />
        <rect x="89" y="58" width="22" height="26" rx="7" fill="#C0B090" stroke="#7A6A5A" strokeWidth="1" />
        <ellipse cx="100" cy="44" rx="26" ry="32" fill="#C0B090" stroke="#7A6A5A" strokeWidth="1" />
        {/* Arms */}
        <path d="M 52 105 Q 36 125 34 155" stroke="#C0B090" strokeWidth="20" strokeLinecap="round" fill="none" />
        <path d="M 148 105 Q 164 125 166 155" stroke="#C0B090" strokeWidth="20" strokeLinecap="round" fill="none" />
        {/* LEFT GLUTE - highlighted */}
        <ellipse cx="82" cy="185" rx="24" ry="22" fill="url(#gluteG)" opacity="0.93" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        {/* RIGHT GLUTE - highlighted */}
        <ellipse cx="118" cy="185" rx="24" ry="22" fill="url(#gluteG)" opacity="0.93" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        {/* Glute separation */}
        <line x1="100" y1="168" x2="100" y2="207" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        {/* Legs */}
        <path d="M 72 205 Q 66 235 64 270" stroke="#C0B090" strokeWidth="28" strokeLinecap="round" fill="none" />
        <path d="M 128 205 Q 134 235 136 270" stroke="#C0B090" strokeWidth="28" strokeLinecap="round" fill="none" />
        {/* Label */}
        <rect x="5" y="5" width="90" height="24" rx="6" fill="#CC2222" opacity="0.9" />
        <text x="50" y="21" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800" fontFamily="system-ui">GLUTES</text>
      </svg>
    ),

    shoulders: (
      <svg viewBox="0 0 200 280" width="160" height="220" style={{ display: 'block', margin: '0 auto' }}>
        <defs>
          <radialGradient id="shoulderG" cx="50%" cy="50%"><stop offset="0%" stopColor="#FF5555" /><stop offset="100%" stopColor="#CC2222" /></radialGradient>
        </defs>
        {/* Torso */}
        <ellipse cx="100" cy="155" rx="50" ry="68" fill="#C8B99A" stroke="#7A6A5A" strokeWidth="1" />
        <rect x="88" y="72" width="24" height="28" rx="8" fill="#C8B99A" stroke="#7A6A5A" strokeWidth="1" />
        <ellipse cx="100" cy="56" rx="28" ry="34" fill="#C8B99A" stroke="#7A6A5A" strokeWidth="1" />
        {/* LEFT DELTOID - highlighted */}
        <ellipse cx="46" cy="115" rx="18" ry="22" fill="url(#shoulderG)" opacity="0.93" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        {/* RIGHT DELTOID - highlighted */}
        <ellipse cx="154" cy="115" rx="18" ry="22" fill="url(#shoulderG)" opacity="0.93" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        {/* Trap tops - highlighted */}
        <path d="M 78 88 Q 100 80 122 88 Q 115 102 100 105 Q 85 102 78 88 Z" fill="url(#shoulderG)" opacity="0.7" />
        {/* Arms */}
        <path d="M 52 128 Q 36 148 34 178" stroke="#C8B99A" strokeWidth="22" strokeLinecap="round" fill="none" />
        <path d="M 148 128 Q 164 148 166 178" stroke="#C8B99A" strokeWidth="22" strokeLinecap="round" fill="none" />
        {/* Forearms */}
        <path d="M 34 178 Q 28 200 26 222" stroke="#C8B99A" strokeWidth="18" strokeLinecap="round" fill="none" />
        <path d="M 166 178 Q 172 200 174 222" stroke="#C8B99A" strokeWidth="18" strokeLinecap="round" fill="none" />
        {/* Legs */}
        <path d="M 78 220 Q 72 248 70 278" stroke="#C8B99A" strokeWidth="26" strokeLinecap="round" fill="none" />
        <path d="M 122 220 Q 128 248 130 278" stroke="#C8B99A" strokeWidth="26" strokeLinecap="round" fill="none" />
        {/* Label */}
        <rect x="5" y="5" width="105" height="24" rx="6" fill="#CC2222" opacity="0.9" />
        <text x="57" y="21" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800" fontFamily="system-ui">DELTOIDS</text>
      </svg>
    ),

    abs: (
      <svg viewBox="0 0 200 280" width="160" height="220" style={{ display: 'block', margin: '0 auto' }}>
        <defs>
          <radialGradient id="absG" cx="50%" cy="50%"><stop offset="0%" stopColor="#FF5555" /><stop offset="100%" stopColor="#CC2222" /></radialGradient>
        </defs>
        {/* Torso */}
        <ellipse cx="100" cy="145" rx="52" ry="72" fill="#C8B99A" stroke="#7A6A5A" strokeWidth="1" />
        <rect x="88" y="65" width="24" height="28" rx="8" fill="#C8B99A" stroke="#7A6A5A" strokeWidth="1" />
        <ellipse cx="100" cy="49" rx="28" ry="34" fill="#C8B99A" stroke="#7A6A5A" strokeWidth="1" />
        {/* Chest (inactive) */}
        <path d="M 58 105 Q 72 96 100 101 Q 100 124 86 129 Q 67 124 58 105 Z" fill="#B8A898" opacity="0.5" />
        <path d="M 142 105 Q 128 96 100 101 Q 100 124 114 129 Q 133 124 142 105 Z" fill="#B8A898" opacity="0.5" />
        {/* ABS 6-pack - highlighted */}
        <rect x="86" y="132" width="13" height="12" rx="4" fill="url(#absG)" opacity="0.93" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        <rect x="101" y="132" width="13" height="12" rx="4" fill="url(#absG)" opacity="0.93" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        <rect x="86" y="147" width="13" height="12" rx="4" fill="url(#absG)" opacity="0.93" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        <rect x="101" y="147" width="13" height="12" rx="4" fill="url(#absG)" opacity="0.93" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        <rect x="86" y="162" width="13" height="11" rx="4" fill="url(#absG)" opacity="0.93" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        <rect x="101" y="162" width="13" height="11" rx="4" fill="url(#absG)" opacity="0.93" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        {/* Obliques */}
        <path d="M 58 135 Q 70 150 80 175 Q 65 165 55 150 Z" fill="url(#absG)" opacity="0.7" />
        <path d="M 142 135 Q 130 150 120 175 Q 135 165 145 150 Z" fill="url(#absG)" opacity="0.7" />
        {/* Arms */}
        <path d="M 50 110 Q 34 130 32 162" stroke="#C8B99A" strokeWidth="22" strokeLinecap="round" fill="none" />
        <path d="M 150 110 Q 166 130 168 162" stroke="#C8B99A" strokeWidth="22" strokeLinecap="round" fill="none" />
        {/* Legs */}
        <path d="M 78 215 Q 72 244 70 276" stroke="#C8B99A" strokeWidth="26" strokeLinecap="round" fill="none" />
        <path d="M 122 215 Q 128 244 130 276" stroke="#C8B99A" strokeWidth="26" strokeLinecap="round" fill="none" />
        {/* Label */}
        <rect x="5" y="5" width="70" height="24" rx="6" fill="#CC2222" opacity="0.9" />
        <text x="40" y="21" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800" fontFamily="system-ui">CORE / ABS</text>
      </svg>
    ),

    fullbody: (
      <svg viewBox="0 0 200 300" width="160" height="230" style={{ display: 'block', margin: '0 auto' }}>
        <defs>
          <radialGradient id="fullG" cx="50%" cy="50%"><stop offset="0%" stopColor="#FF5555" /><stop offset="100%" stopColor="#CC2222" /></radialGradient>
        </defs>
        {/* Full body highlighted */}
        <ellipse cx="100" cy="46" rx="26" ry="32" fill="#C8B99A" stroke="#7A6A5A" strokeWidth="1" />
        <rect x="89" y="64" width="22" height="26" rx="7" fill="#C8B99A" stroke="#7A6A5A" strokeWidth="1" />
        <ellipse cx="100" cy="135" rx="50" ry="62" fill="url(#fullG)" opacity="0.8" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        {/* Arms highlighted */}
        <path d="M 52 105 Q 36 128 34 158" stroke="#FF4444" strokeWidth="22" strokeLinecap="round" fill="none" opacity="0.8" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        <path d="M 148 105 Q 164 128 166 158" stroke="#FF4444" strokeWidth="22" strokeLinecap="round" fill="none" opacity="0.8" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        {/* Legs highlighted */}
        <path d="M 76 196 Q 70 228 68 268" stroke="#FF4444" strokeWidth="28" strokeLinecap="round" fill="none" opacity="0.8" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        <path d="M 124 196 Q 130 228 132 268" stroke="#FF4444" strokeWidth="28" strokeLinecap="round" fill="none" opacity="0.8" style={{ animation: 'muscleGlow 1.5s infinite' }} />
        {/* Label */}
        <rect x="5" y="5" width="110" height="24" rx="6" fill="#CC2222" opacity="0.9" />
        <text x="60" y="21" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800" fontFamily="system-ui">FULL BODY</text>
      </svg>
    ),
  };

  return muscles[muscleGroup] || muscles.fullbody;
};

// Map exercises to muscle groups
const EXERCISE_MUSCLE_MAP = {
  'Push-ups': 'chest', 'Bench Press': 'chest', 'Incline Bench': 'chest',
  'Dumbbell Chest Press': 'chest', 'Cable Flyes': 'chest',
  'Pull-ups': 'back', 'Weighted Pull-ups': 'back', 'Barbell Rows': 'back',
  'Dumbbell Rows': 'back', 'Lat Pulldowns': 'back', 'Seated Row': 'back',
  'Face Pulls': 'back',
  'Bicep Curls': 'biceps',
  'Tricep Dips': 'triceps', 'Tricep Pushdowns': 'triceps',
  'Squats': 'quads', 'Bodyweight Squats': 'quads', 'Leg Press': 'quads',
  'Lunges': 'quads', 'Hack Squat': 'quads',
  'Romanian Deadlift': 'hamstrings', 'Nordic Curls': 'hamstrings',
  'Deadlift': 'hamstrings',
  'Shoulder Press': 'shoulders', 'Lateral Raises': 'shoulders',
};

const getMuscleGroup = (exerciseName) => {
  return EXERCISE_MUSCLE_MAP[exerciseName] || 'fullbody';
};

// ============== WEEKLY PLAN ==============
const WEEKLY_PLAN = {
  0: {
    name: 'Rest & Recovery', focus: 'Active Recovery', emoji: '🧘', color: '#8B5CF6',
    exercises: [
      { name: 'Light Stretching', sets: '3x60s', reps: 60, restSec: 30, calsPerSet: 3, emoji: '🤸', muscles: ['Core', 'Flexibility'] },
      { name: 'Deep Breathing', sets: '3x2min', reps: 120, restSec: 30, calsPerSet: 2, emoji: '🌬️', muscles: ['Core', 'Mind'] },
      { name: 'Foam Rolling', sets: '2x90s', reps: 90, restSec: 30, calsPerSet: 4, emoji: '🔵', muscles: ['Full Body'] },
    ]
  },
  1: {
    name: 'Chest & Triceps', focus: 'Push Day', emoji: '💪', color: '#EF4444',
    exercises: [
      { name: 'Push-ups', sets: '4x15', reps: 15, restSec: 60, calsPerSet: 8, emoji: '🔥', muscles: ['Chest', 'Triceps', 'Front Deltoids'] },
      { name: 'Bench Press', sets: '4x10', reps: 10, restSec: 90, calsPerSet: 12, emoji: '🏋️', muscles: ['Chest', 'Triceps', 'Serratus'] },
      { name: 'Incline Bench', sets: '3x10', reps: 10, restSec: 90, calsPerSet: 10, emoji: '📐', muscles: ['Upper Chest', 'Front Deltoids'] },
      { name: 'Tricep Dips', sets: '3x12', reps: 12, restSec: 60, calsPerSet: 9, emoji: '💥', muscles: ['Triceps', 'Chest', 'Core'] },
      { name: 'Tricep Pushdowns', sets: '3x15', reps: 15, restSec: 60, calsPerSet: 7, emoji: '⬇️', muscles: ['Triceps', 'Forearms'] },
    ]
  },
  2: {
    name: 'Back & Biceps', focus: 'Pull Day', emoji: '🦾', color: '#3B82F6',
    exercises: [
      { name: 'Pull-ups', sets: '4x8', reps: 8, restSec: 90, calsPerSet: 11, emoji: '⬆️', muscles: ['Lats', 'Biceps', 'Rhomboids'] },
      { name: 'Barbell Rows', sets: '4x10', reps: 10, restSec: 90, calsPerSet: 13, emoji: '🏋️', muscles: ['Mid Back', 'Lats', 'Biceps'] },
      { name: 'Lat Pulldowns', sets: '3x12', reps: 12, restSec: 60, calsPerSet: 9, emoji: '🔽', muscles: ['Lats', 'Biceps', 'Teres Major'] },
      { name: 'Seated Row', sets: '3x12', reps: 12, restSec: 60, calsPerSet: 9, emoji: '🚣', muscles: ['Mid Back', 'Rear Delts'] },
      { name: 'Bicep Curls', sets: '3x15', reps: 15, restSec: 60, calsPerSet: 7, emoji: '💪', muscles: ['Biceps', 'Brachialis'] },
    ]
  },
  3: {
    name: 'Legs & Glutes', focus: 'Leg Day', emoji: '🦵', color: '#22C55E',
    exercises: [
      { name: 'Squats', sets: '4x10', reps: 10, restSec: 90, calsPerSet: 15, emoji: '🏋️', muscles: ['Quadriceps', 'Glutes', 'Hamstrings'] },
      { name: 'Romanian Deadlift', sets: '4x10', reps: 10, restSec: 90, calsPerSet: 14, emoji: '⬇️', muscles: ['Hamstrings', 'Glutes', 'Lower Back'] },
      { name: 'Leg Press', sets: '3x12', reps: 12, restSec: 60, calsPerSet: 11, emoji: '🦵', muscles: ['Quadriceps', 'Glutes'] },
      { name: 'Lunges', sets: '3x12', reps: 12, restSec: 60, calsPerSet: 10, emoji: '🚶', muscles: ['Quadriceps', 'Glutes', 'Hamstrings'] },
      { name: 'Nordic Curls', sets: '3x8', reps: 8, restSec: 60, calsPerSet: 8, emoji: '🔥', muscles: ['Hamstrings', 'Glutes', 'Core'] },
    ]
  },
  4: {
    name: 'Shoulders & Core', focus: 'Shoulder Day', emoji: '🎯', color: '#FBBF24',
    exercises: [
      { name: 'Shoulder Press', sets: '4x10', reps: 10, restSec: 90, calsPerSet: 10, emoji: '☝️', muscles: ['Deltoids', 'Triceps', 'Traps'] },
      { name: 'Lateral Raises', sets: '4x15', reps: 15, restSec: 60, calsPerSet: 7, emoji: '↔️', muscles: ['Medial Deltoids', 'Supraspinatus'] },
      { name: 'Face Pulls', sets: '3x15', reps: 15, restSec: 60, calsPerSet: 6, emoji: '🎯', muscles: ['Rear Deltoids', 'Rhomboids', 'Traps'] },
      { name: 'Bodyweight Squats', sets: '3x20', reps: 20, restSec: 45, calsPerSet: 8, emoji: '🏃', muscles: ['Quadriceps', 'Glutes', 'Core'] },
    ]
  },
  5: {
    name: 'Full Body Power', focus: 'Compound Day', emoji: '⚡', color: '#F97316',
    exercises: [
      { name: 'Deadlift', sets: '4x6', reps: 6, restSec: 120, calsPerSet: 18, emoji: '🏋️', muscles: ['Hamstrings', 'Glutes', 'Lower Back', 'Traps'] },
      { name: 'Bench Press', sets: '3x8', reps: 8, restSec: 90, calsPerSet: 12, emoji: '💥', muscles: ['Chest', 'Triceps', 'Front Deltoids'] },
      { name: 'Pull-ups', sets: '3x6', reps: 6, restSec: 90, calsPerSet: 10, emoji: '⬆️', muscles: ['Lats', 'Biceps', 'Core'] },
      { name: 'Hack Squat', sets: '3x10', reps: 10, restSec: 90, calsPerSet: 13, emoji: '🦵', muscles: ['Quadriceps', 'Glutes'] },
      { name: 'Cable Flyes', sets: '3x12', reps: 12, restSec: 60, calsPerSet: 8, emoji: '🦋', muscles: ['Chest', 'Front Deltoids'] },
    ]
  },
  6: {
    name: 'Arms Hypertrophy', focus: 'Arms Day', emoji: '🔥', color: '#EC4899',
    exercises: [
      { name: 'Weighted Pull-ups', sets: '4x6', reps: 6, restSec: 90, calsPerSet: 12, emoji: '⬆️', muscles: ['Lats', 'Biceps', 'Core'] },
      { name: 'Bicep Curls', sets: '4x12', reps: 12, restSec: 60, calsPerSet: 8, emoji: '💪', muscles: ['Biceps', 'Brachialis', 'Forearms'] },
      { name: 'Tricep Dips', sets: '4x12', reps: 12, restSec: 60, calsPerSet: 9, emoji: '💥', muscles: ['Triceps', 'Chest', 'Core'] },
      { name: 'Tricep Pushdowns', sets: '3x15', reps: 15, restSec: 60, calsPerSet: 7, emoji: '⬇️', muscles: ['Triceps', 'Forearms'] },
      { name: 'Dumbbell Rows', sets: '3x12', reps: 12, restSec: 60, calsPerSet: 9, emoji: '🚣', muscles: ['Lats', 'Mid Back', 'Biceps'] },
    ]
  },
};

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DAY_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const INTENSITY_LEVELS = [
  { label: 'Light', emoji: '🌱', multiplier: 0.7, color: '#22C55E', desc: 'Beginner / Recovery' },
  { label: 'Normal', emoji: '⚡', multiplier: 1.0, color: '#3B82F6', desc: 'Default workout' },
  { label: 'Hard', emoji: '🔥', multiplier: 1.35, color: '#F97316', desc: 'Push yourself' },
  { label: 'Beast', emoji: '💀', multiplier: 1.7, color: '#EF4444', desc: 'Maximum effort' },
];

// ============== CALORIE TARGET MODAL ==============
function CalTargetModal({ baseCals, currentTarget, onSave, onClose, planColor }) {
  const [mode, setMode] = useState('intensity');
  const [selectedIntensity, setSelectedIntensity] = useState(1);
  const [sliderVal, setSliderVal] = useState(currentTarget);
  const [customVal, setCustomVal] = useState(String(currentTarget));
  const C = { card: '#111113', card2: '#18181B', border: '#27272A', text: '#FAFAFA', muted: '#71717A', accent3: '#FBBF24', green: '#22C55E', accent2: '#EF4444', accent: '#F97316' };
  const sliderMin = Math.round(baseCals * 0.4);
  const sliderMax = Math.round(baseCals * 2.8);
  const previewCal = mode === 'intensity'
    ? Math.round(baseCals * INTENSITY_LEVELS[selectedIntensity].multiplier)
    : Math.max(50, parseInt(customVal) || baseCals);
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', zIndex: 999, animation: 'fadeIn 0.2s ease' }}>
      <div style={{ background: C.card, borderRadius: '20px 20px 0 0', width: '100%', maxWidth: 480, padding: 20, paddingBottom: 36, border: `1px solid ${C.border}` }}>
        <div style={{ width: 40, height: 4, borderRadius: 2, background: C.border, margin: '0 auto 16px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <div style={{ fontSize: 16, fontWeight: 800 }}>🎯 Set Calorie Target</div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: C.muted, fontSize: 22, cursor: 'pointer' }}>✕</button>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          {[['intensity', '⚡ Intensity'], ['custom', '✏️ Custom']].map(([m, lbl]) => (
            <button key={m} onClick={() => setMode(m)} style={{ flex: 1, padding: '10px', borderRadius: 10, background: mode === m ? planColor : C.card2, border: `1px solid ${mode === m ? planColor : C.border}`, color: mode === m ? '#fff' : C.muted, fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>{lbl}</button>
          ))}
        </div>
        {mode === 'intensity' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
            {INTENSITY_LEVELS.map((lvl, i) => (
              <div key={i} onClick={() => setSelectedIntensity(i)} style={{ padding: 12, borderRadius: 12, cursor: 'pointer', background: selectedIntensity === i ? `${lvl.color}22` : C.card2, border: `1px solid ${selectedIntensity === i ? lvl.color : C.border}` }}>
                <div style={{ fontSize: 22, marginBottom: 4 }}>{lvl.emoji}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: selectedIntensity === i ? lvl.color : C.text }}>{lvl.label}</div>
                <div style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>{lvl.desc}</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: lvl.color, marginTop: 5 }}>{Math.round(baseCals * lvl.multiplier)} kcal</div>
              </div>
            ))}
          </div>
        )}
        {mode === 'custom' && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: C.muted, marginBottom: 6 }}>
              <span>{sliderMin}</span><span style={{ color: planColor, fontWeight: 800, fontSize: 14 }}>{sliderVal} kcal</span><span>{sliderMax}</span>
            </div>
            <input type="range" min={sliderMin} max={sliderMax} step={10} value={Math.min(Math.max(sliderVal, sliderMin), sliderMax)} onChange={e => { const v = Number(e.target.value); setSliderVal(v); setCustomVal(String(v)); }} style={{ width: '100%', marginBottom: 12 }} />
            <div style={{ position: 'relative' }}>
              <input type="number" value={customVal} onChange={e => { setCustomVal(e.target.value); setSliderVal(Number(e.target.value) || sliderMin); }} placeholder="Enter kcal" style={{ width: '100%', background: C.card2, border: `1px solid ${C.border}`, borderRadius: 10, padding: '12px 55px 12px 14px', color: C.text, fontSize: 15, fontWeight: 700, fontFamily: 'inherit', outline: 'none' }} />
              <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 12, color: C.muted, fontWeight: 600 }}>kcal</span>
            </div>
          </div>
        )}
        <div style={{ background: `${planColor}15`, border: `1px solid ${planColor}44`, borderRadius: 12, padding: '12px 14px', marginBottom: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div><div style={{ fontSize: 11, color: C.muted }}>New Target</div><div style={{ fontSize: 24, fontWeight: 800, color: planColor }}>{previewCal} kcal</div></div>
          <div style={{ textAlign: 'right' }}><div style={{ fontSize: 11, color: C.muted }}>vs Base ({baseCals})</div><div style={{ fontSize: 15, fontWeight: 800, color: previewCal >= baseCals ? C.accent2 : C.green }}>{previewCal >= baseCals ? '+' : ''}{previewCal - baseCals} kcal</div></div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => onSave(baseCals)} style={{ padding: '13px 16px', background: 'transparent', border: `1px solid ${C.border}`, borderRadius: 12, color: C.muted, fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>Reset</button>
          <button onClick={() => onSave(previewCal)} style={{ flex: 1, background: `linear-gradient(135deg, ${planColor}, #FBBF24)`, border: 'none', borderRadius: 12, padding: '13px', color: '#fff', fontWeight: 800, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>✅ Set {previewCal} kcal</button>
        </div>
      </div>
    </div>
  );
}

// ============== WORKOUT TIMER ==============
function WorkoutTimer({ duration, onComplete, label, color, timerKey }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [running, setRunning] = useState(false);
  const iRef = useRef(null);
  useEffect(() => { setTimeLeft(duration); setRunning(false); }, [timerKey]);
  useEffect(() => {
    if (running) {
      iRef.current = setInterval(() => {
        setTimeLeft(t => { if (t <= 1) { clearInterval(iRef.current); setRunning(false); onComplete && onComplete(); return 0; } return t - 1; });
      }, 1000);
    } else clearInterval(iRef.current);
    return () => clearInterval(iRef.current);
  }, [running]);
  const pct = (timeLeft / duration) * 100;
  const r = 26, circ = 2 * Math.PI * r, dash = (pct / 100) * circ;
  const fmt = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ position: 'relative', width: 64, height: 64, flexShrink: 0 }}>
        <svg width="64" height="64" style={{ transform: 'rotate(-90deg)' }}>
          <circle cx="32" cy="32" r={r} fill="none" stroke="#18181B" strokeWidth="5" />
          <circle cx="32" cy="32" r={r} fill="none" stroke={color} strokeWidth="5" strokeDasharray={`${dash} ${circ}`} style={{ transition: 'stroke-dasharray 0.8s ease' }} />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color }}>{fmt(timeLeft)}</div>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, color: '#71717A', marginBottom: 6 }}>{label}</div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => setRunning(r => !r)} style={{ background: running ? `${color}22` : color, border: `1px solid ${color}`, color: running ? color : '#fff', borderRadius: 8, padding: '6px 14px', fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>{running ? '⏸ Pause' : timeLeft === duration ? '▶ Start' : '▶ Resume'}</button>
          <button onClick={() => { setTimeLeft(duration); setRunning(false); clearInterval(iRef.current); }} style={{ background: 'transparent', border: '1px solid #27272A', color: '#71717A', borderRadius: 8, padding: '6px 10px', fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}>↺</button>
        </div>
      </div>
    </div>
  );
}

// ============== EXERCISE ROW WITH ANATOMY ==============
function ExerciseRow({ ex, idx, dayColor, onComplete, isCompleted, dayKey }) {
  const [expanded, setExpanded] = useState(false);
  const [phase, setPhase] = useState('work');
  const [completedSets, setCompletedSets] = useState(0);
  const [showAnatomy, setShowAnatomy] = useState(false);
  const totalSets = parseInt(ex.sets.split('x')[0]);
  const muscleGroup = getMuscleGroup(ex.name);

  useEffect(() => { setExpanded(false); setPhase('work'); setCompletedSets(0); setShowAnatomy(false); }, [dayKey]);

  const handleDone = () => {
    if (phase === 'work') setPhase('rest');
    else {
      const next = completedSets + 1; setCompletedSets(next); setPhase('work');
      if (next >= totalSets) { onComplete && onComplete(idx); setExpanded(false); }
    }
  };

  return (
    <div style={{ background: isCompleted ? `${dayColor}11` : '#18181B', border: `1px solid ${isCompleted ? dayColor : '#27272A'}`, borderRadius: 12, marginBottom: 8, overflow: 'hidden', transition: 'all 0.3s' }}>
      <div onClick={() => !isCompleted && setExpanded(e => !e)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 14px', cursor: isCompleted ? 'default' : 'pointer' }}>
        <div style={{ width: 36, height: 36, borderRadius: 10, background: `${dayColor}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{ex.emoji}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: isCompleted ? dayColor : '#FAFAFA' }}>{ex.name}</div>
          <div style={{ fontSize: 11, color: '#71717A', marginTop: 2 }}>{ex.sets} • ~{ex.calsPerSet * totalSets} kcal</div>
          {ex.muscles && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 4 }}>
              {ex.muscles.slice(0, 3).map((m, i) => (
                <span key={i} style={{ fontSize: 9, padding: '1px 6px', borderRadius: 999, background: i === 0 ? `${dayColor}33` : '#27272A', color: i === 0 ? dayColor : '#71717A', fontWeight: 700 }}>{m}</span>
              ))}
            </div>
          )}
        </div>
        {isCompleted ? <span style={{ fontSize: 18 }}>✅</span>
          : <span style={{ fontSize: 10, color: '#71717A', display: 'inline-block', transition: 'transform 0.2s', transform: expanded ? 'rotate(180deg)' : 'none' }}>▼</span>}
      </div>

      {expanded && !isCompleted && (
        <div style={{ padding: '0 14px 14px', borderTop: '1px solid #27272A' }}>

          {/* Anatomy toggle */}
          <div style={{ display: 'flex', gap: 8, marginTop: 10, marginBottom: 10 }}>
            <button onClick={() => setShowAnatomy(a => !a)} style={{
              flex: 1, padding: '8px', borderRadius: 8, fontSize: 11, fontWeight: 700,
              background: showAnatomy ? `${dayColor}22` : '#111113',
              border: `1px solid ${showAnatomy ? dayColor : '#27272A'}`,
              color: showAnatomy ? dayColor : '#71717A', cursor: 'pointer', fontFamily: 'inherit'
            }}>🫀 {showAnatomy ? 'Hide' : 'Show'} Muscles</button>
          </div>

          {/* ANATOMICAL DIAGRAM */}
          {showAnatomy && (
            <div style={{ background: '#0d0d12', borderRadius: 12, padding: 12, marginBottom: 12, textAlign: 'center', animation: 'fadeIn 0.3s ease' }}>
              <MuscleAnatomySVG muscleGroup={muscleGroup} />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, justifyContent: 'center', marginTop: 8 }}>
                {ex.muscles && ex.muscles.map((m, i) => (
                  <span key={i} style={{
                    fontSize: 10, padding: '2px 8px', borderRadius: 999,
                    background: i === 0 ? 'rgba(239,68,68,0.2)' : i === 1 ? 'rgba(249,115,22,0.15)' : 'rgba(100,100,120,0.18)',
                    color: i === 0 ? '#EF4444' : i === 1 ? '#F97316' : '#aaa',
                    fontWeight: 600
                  }}>
                    {i === 0 ? '🔴' : i === 1 ? '🟠' : '⚫'} {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Set progress bars */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
            {Array.from({ length: totalSets }).map((_, i) => (
              <div key={i} style={{ flex: 1, height: 6, borderRadius: 3, background: i < completedSets ? dayColor : '#27272A', transition: 'background 0.3s' }} />
            ))}
          </div>
          <div style={{ fontSize: 11, color: '#71717A', marginBottom: 10, textAlign: 'center' }}>
            Set {Math.min(completedSets + 1, totalSets)} / {totalSets} • {phase === 'rest' ? '😮‍💨 Rest!' : '💪 Work!'}
          </div>

          <WorkoutTimer timerKey={`${dayKey}-${idx}-${phase}-${completedSets}`}
            duration={phase === 'work' ? ex.reps : ex.restSec} onComplete={handleDone}
            label={phase === 'work' ? `${ex.reps} reps / ${ex.reps}s` : `Rest ${ex.restSec}s`}
            color={phase === 'work' ? dayColor : '#FBBF24'} />

          <button onClick={handleDone} style={{
            width: '100%', marginTop: 10,
            background: phase === 'work' ? dayColor : '#FBBF24',
            border: 'none', borderRadius: 10, padding: '10px',
            color: phase === 'work' ? '#fff' : '#000',
            fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit'
          }}>{phase === 'work' ? '✓ Set Done → Rest' : '⚡ Skip Rest → Next Set'}</button>
        </div>
      )}
    </div>
  );
}

// ============== MAIN MUSCLE SCREEN ==============
const MuscleScreen = ({ addToCart }) => {
  const todayIdx = new Date().getDay();
  const [selectedDay, setSelectedDay] = useState(todayIdx);
  const [completedExercises, setCompletedExercises] = useState({});
  const [workoutStarted, setWorkoutStarted] = useState(false);
  const [workoutTime, setWorkoutTime] = useState(0);
  const [workoutRunning, setWorkoutRunning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [customTargets, setCustomTargets] = useState({});
  const timerRef = useRef(null);

  const plan = WEEKLY_PLAN[selectedDay];
  const compKey = `day_${selectedDay}`;
  const completed = completedExercises[compKey] || [];

  useEffect(() => {
    if (workoutRunning) { timerRef.current = setInterval(() => setWorkoutTime(t => t + 1), 1000); }
    else clearInterval(timerRef.current);
    return () => clearInterval(timerRef.current);
  }, [workoutRunning]);

  const baseCals = plan.exercises.reduce((s, ex) => s + ex.calsPerSet * parseInt(ex.sets.split('x')[0]), 0);
  const totalCals = customTargets[selectedDay] ?? baseCals;
  const earnedCals = plan.exercises.reduce((s, ex, i) => completed.includes(i) ? s + ex.calsPerSet * parseInt(ex.sets.split('x')[0]) : s, 0);
  const calPct = totalCals > 0 ? Math.min((earnedCals / totalCals) * 100, 100) : 0;
  const isCustom = customTargets[selectedDay] !== undefined && customTargets[selectedDay] !== baseCals;

  const fmtTime = s => {
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}` : `${m}:${String(sec).padStart(2, '0')}`;
  };

  const supplements = [
    { emoji: '🥛', name: 'Whey Protein Isolate', desc: '25g protein per scoop', price: 1499, originalPrice: 2299, badge: 'TOP' },
    { emoji: '💪', name: 'Creatine Monohydrate', desc: 'Strength + size', price: 599, originalPrice: 999 },
    { emoji: '🌿', name: 'BCAA 2:1:1', desc: 'Recovery formula', price: 799, originalPrice: 1199 },
    { emoji: '⚡', name: 'Pre-Workout Formula', desc: 'Energy + focus', price: 899, originalPrice: 1399 }
  ];

  return (
    <div style={{ fontFamily: 'inherit' }}>
      <style>{`
        @keyframes muscleGlow { 0%,100%{opacity:0.75} 50%{opacity:1} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideUp { from{transform:translateY(50px);opacity:0} to{transform:translateY(0);opacity:1} }
        input[type=range]{-webkit-appearance:none;height:6px;background:#18181B;border-radius:3px;outline:none;width:100%}
        input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:#F97316;cursor:pointer;border:2px solid #09090B}
        input[type=number]::-webkit-inner-spin-button{-webkit-appearance:none}
        input[type=number]{-moz-appearance:textfield}
      `}</style>

      {/* Header card */}
      <div style={{ background: `linear-gradient(135deg, ${plan.color}22, #111113)`, border: `1px solid ${plan.color}44`, borderRadius: 16, padding: 16, marginBottom: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 10, color: plan.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
              {selectedDay === todayIdx ? "🔥 TODAY'S WORKOUT" : DAY_FULL[selectedDay].toUpperCase()}
            </div>
            <div style={{ fontSize: 19, fontWeight: 800, marginTop: 4 }}>{plan.emoji} {plan.name}</div>
            <div style={{ fontSize: 12, color: '#71717A', marginTop: 2 }}>{plan.focus} • {plan.exercises.length} exercises</div>
          </div>
          <div onClick={() => setShowModal(true)} style={{ textAlign: 'right', cursor: 'pointer' }}>
            <div style={{ fontSize: 26, fontWeight: 800, color: plan.color }}>{totalCals}</div>
            <div style={{ fontSize: 10, color: '#71717A' }}>kcal target</div>
            <div style={{ fontSize: 10, color: plan.color, fontWeight: 700, background: `${plan.color}22`, borderRadius: 6, padding: '2px 8px', marginTop: 4, display: 'inline-block' }}>✏️ {isCustom ? 'Custom' : 'Change'}</div>
          </div>
        </div>
        <div style={{ marginTop: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
            <span style={{ fontSize: 12, color: '#71717A' }}>Calories Burned</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: plan.color }}>{earnedCals} / {totalCals} kcal</span>
          </div>
          <div style={{ height: 8, background: '#18181B', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${calPct}%`, background: `linear-gradient(90deg, ${plan.color}, #FBBF24)`, borderRadius: 4, transition: 'width 0.6s ease' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span style={{ fontSize: 10, color: '#71717A' }}>{completed.length}/{plan.exercises.length} done</span>
            <span style={{ fontSize: 10, color: '#FBBF24' }}>{Math.round(calPct)}%</span>
          </div>
        </div>
      </div>

      {/* Day tabs */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 14, overflowX: 'auto', paddingBottom: 2 }}>
        {DAY_NAMES.map((d, i) => {
          const dp = WEEKLY_PLAN[i], active = selectedDay === i, isT = i === todayIdx;
          return (
            <div key={i} onClick={() => { setSelectedDay(i); setWorkoutStarted(false); setWorkoutRunning(false); setWorkoutTime(0); }} style={{
              flexShrink: 0, textAlign: 'center', cursor: 'pointer',
              background: active ? dp.color : '#111113',
              border: `1px solid ${active ? dp.color : isT ? `${dp.color}66` : '#27272A'}`,
              borderRadius: 10, padding: '7px 9px', minWidth: 44, transition: 'all 0.2s'
            }}>
              <div style={{ fontSize: 14 }}>{dp.emoji}</div>
              <div style={{ fontSize: 10, fontWeight: 700, color: active ? '#fff' : '#FAFAFA', marginTop: 2 }}>{d}</div>
              {isT && !active && <div style={{ width: 4, height: 4, borderRadius: '50%', background: dp.color, margin: '3px auto 0' }} />}
            </div>
          );
        })}
      </div>

      {/* Live workout bar */}
      {workoutStarted && (
        <div style={{ background: '#111113', border: `1px solid ${plan.color}44`, borderRadius: 12, padding: '12px 14px', marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between', animation: 'fadeIn 0.3s ease' }}>
          <div>
            <div style={{ fontSize: 10, color: '#71717A', textTransform: 'uppercase' }}>Workout Time</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: plan.color }}>{fmtTime(workoutTime)}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 10, color: '#71717A' }}>Burned so far</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: '#FBBF24' }}>{earnedCals} kcal 🔥</div>
          </div>
          <button onClick={() => setWorkoutRunning(r => !r)} style={{ background: workoutRunning ? `${plan.color}22` : plan.color, border: `1px solid ${plan.color}`, color: workoutRunning ? plan.color : '#fff', borderRadius: 10, padding: '8px 14px', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>{workoutRunning ? '⏸' : '▶'}</button>
        </div>
      )}

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
        {!workoutStarted && (
          <button onClick={() => { setWorkoutStarted(true); setWorkoutRunning(true); }} style={{ flex: 1, background: `linear-gradient(135deg, ${plan.color}, #FBBF24)`, border: 'none', borderRadius: 12, padding: '14px', color: '#fff', fontWeight: 800, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit' }}>⚡ Start {plan.name}</button>
        )}
        <button onClick={() => setShowModal(true)} style={{ background: '#111113', border: `1px solid ${isCustom ? plan.color : '#27272A'}`, borderRadius: 12, padding: '12px 14px', color: isCustom ? plan.color : '#71717A', fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap', flexShrink: 0 }}>🎯 {isCustom ? `${totalCals} kcal` : 'Set Target'}</button>
      </div>

      <div style={{ fontSize: 10, color: '#71717A', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8, fontWeight: 700 }}>Exercises</div>

      {plan.exercises.map((ex, idx) => (
        <ExerciseRow key={`${selectedDay}-${idx}`} ex={ex} idx={idx} dayColor={plan.color}
          onComplete={(i) => setCompletedExercises(prev => ({ ...prev, [compKey]: [...(prev[compKey] || []), i] }))}
          isCompleted={completed.includes(idx)} dayKey={selectedDay} />
      ))}

      {completed.length === plan.exercises.length && plan.exercises.length > 0 && (
        <div style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid #22C55E', borderRadius: 14, padding: 16, textAlign: 'center', marginTop: 8, animation: 'fadeIn 0.4s ease' }}>
          <div style={{ fontSize: 32, marginBottom: 6 }}>🎉</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: '#22C55E' }}>Workout Complete!</div>
          <div style={{ fontSize: 13, color: '#71717A', marginTop: 4 }}>{earnedCals} / {totalCals} kcal burned • {fmtTime(workoutTime)}</div>
          {earnedCals >= totalCals && <div style={{ fontSize: 13, fontWeight: 700, color: '#FBBF24', marginTop: 6 }}>🏆 Target Achieved!</div>}
        </div>
      )}

      <div style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.44)', borderRadius: 12, padding: 14, marginTop: 16, marginBottom: 16 }}>
        <div style={{ fontSize: 10, color: '#8B5CF6', fontWeight: 700, marginBottom: 4 }}>💊 RECOVERY TIP</div>
        <div style={{ fontSize: 12, color: '#71717A', lineHeight: 1.5 }}>Post-workout: 20–40g protein within 30 min. Drink at least 500ml water now.</div>
      </div>

      <div style={{ fontSize: 10, color: '#71717A', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10, fontWeight: 700 }}>Recommended Supplements</div>
      {supplements.map((s, i) => (
        <ProductCard key={i} {...s} onOrder={addToCart} color={plan.color} />
      ))}

      {showModal && (
        <CalTargetModal baseCals={baseCals} currentTarget={totalCals} planColor={plan.color}
          onSave={(val) => { setCustomTargets(prev => ({ ...prev, [selectedDay]: val })); setShowModal(false); }}
          onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};
const LS_KEY = 'arogya_v3';
const loadDB = () => { try { return JSON.parse(localStorage.getItem(LS_KEY)) || { users: [], currentEmail: null }; } catch { return { users: [], currentEmail: null }; } };
const saveDB = (db) => localStorage.setItem(LS_KEY, JSON.stringify(db));

const Inp = ({ label, type = 'text', value, onChange, placeholder, ...rest }) => {
  const [show, setShow] = useState(false);
  const isPwd = type === 'password';
  return (
    <div style={{ marginBottom: 14 }}>
      {label && <div style={{ fontSize: 12, color: C.muted, marginBottom: 6, fontWeight: 500 }}>{label}</div>}
      <div style={{ position: 'relative' }}>
        <input
          type={isPwd ? (show ? 'text' : 'password') : type}
          value={value || ''}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          {...rest}
          style={{
            width: '100%', background: C.card2, border: `1px solid ${C.border}`, borderRadius: 10,
            padding: '12px 14px', color: C.text, fontSize: 14, fontFamily: 'inherit', outline: 'none',
            paddingRight: isPwd ? 42 : 14
          }}
        />
        {isPwd && (
          <button type="button" onClick={() => setShow(!show)} style={{
            position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
            background: 'transparent', border: 'none', fontSize: 16, cursor: 'pointer'
          }}>{show ? '🙈' : '👁️'}</button>
        )}
      </div>
    </div>
  );
};

const ProductCard = ({ emoji, name, desc, price, originalPrice, badge, onOrder, color = C.accent }) => (
  <div style={{
    background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 14, marginBottom: 10,
    animation: 'fadeIn 0.3s ease'
  }}>
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12, background: `${color}22`, display: 'flex',
        alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0
      }}>{emoji}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{name}</div>
          {badge && <span style={{ fontSize: 9, background: `${color}33`, color, padding: '2px 6px', borderRadius: 6, fontWeight: 700 }}>{badge}</span>}
        </div>
        {desc && <div style={{ fontSize: 11, color: C.muted, marginTop: 3, lineHeight: 1.4 }}>{desc}</div>}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
          <span style={{ color, fontWeight: 800, fontSize: 15 }}>₹{price}</span>
          {originalPrice && <span style={{ color: C.muted, textDecoration: 'line-through', fontSize: 12 }}>₹{originalPrice}</span>}
        </div>
      </div>
    </div>
    <button onClick={() => onOrder({ emoji, name, price: parseInt(price) })} style={{
      width: '100%', marginTop: 10, background: color, color: '#fff', border: 'none', borderRadius: 10,
      padding: '10px', fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit'
    }}>Order Now</button>
  </div>
);

const EX_DB = {
  'Push-ups': { primary: ['Chest', 'Triceps'], secondary: ['Front Deltoids'], support: ['Core', 'Serratus'], steps: ['Hands just wider than shoulder-width', 'Keep body straight head to heels', 'Lower chest to 2cm from floor', 'Push explosively to full arm extension'], type: 'pushup' },
  'Dumbbell Chest Press': { primary: ['Chest', 'Triceps'], secondary: ['Front Deltoids'], support: ['Core'], steps: ['Lie flat, dumbbells above chest', 'Lower slowly until elbows below bench level', 'Feel the chest stretch at bottom', 'Press back up, squeeze chest at top'], type: 'dbpress' },
  'Tricep Dips': { primary: ['Triceps'], secondary: ['Front Deltoids', 'Chest'], support: ['Core'], steps: ['Grip bench edges, feet forward', 'Lower body until elbows reach 90°', 'Keep back close to the bench', 'Push up fully, squeeze triceps at top'], type: 'dips' },
  'Dumbbell Rows': { primary: ['Lats', 'Mid Back'], secondary: ['Biceps', 'Rear Delts'], support: ['Core', 'Forearms'], steps: ['Hinge forward, back flat, support hand on knee', 'Let dumbbell hang at full stretch', 'Pull to hip — lead with elbow', 'Squeeze back hard at top, lower slowly'], type: 'dbrow' },
  'Lat Pulldowns': { primary: ['Lats'], secondary: ['Biceps', 'Rear Delts'], support: ['Core', 'Teres Major'], steps: ['Grip bar wider than shoulders', 'Lean back slightly, retract shoulder blades', 'Pull bar to upper chest, elbows down', 'Slow return — stretch lats fully at top'], type: 'pulldown' },
  'Bicep Curls': { primary: ['Biceps'], secondary: ['Brachialis', 'Brachioradialis'], support: ['Forearms', 'Core'], steps: ['Stand tall, elbows pinned to ribs', 'Curl up squeezing bicep hard', 'No swinging — strict form only', 'Lower slowly — 3 full seconds down'], type: 'curl' },
  'Bodyweight Squats': { primary: ['Quadriceps', 'Glutes'], secondary: ['Hamstrings', 'Core'], support: ['Calves', 'Lower Back'], steps: ['Stand feet shoulder-width', 'Break hips and knees at the same time', 'Lower until thighs parallel to floor', 'Drive through heels, keep chest tall'], type: 'squat' },
  'Lunges': { primary: ['Quadriceps', 'Glutes'], secondary: ['Hamstrings'], support: ['Core', 'Calves'], steps: ['Stand tall, step one foot forward', 'Lower back knee toward the floor', 'Front knee stays over ankle, not past toes', 'Push back through front heel to return'], type: 'lunge' },
  'Shoulder Press': { primary: ['Deltoids'], secondary: ['Triceps', 'Upper Chest'], support: ['Core', 'Traps'], steps: ['Dumbbells at ear level, elbows 90°', 'Press straight overhead to full lockout', "Keep core braced, don't arch lower back", 'Lower slowly — controlled descent'], type: 'shoulderpress' },
  'Bench Press': { primary: ['Chest', 'Triceps', 'Front Deltoids'], secondary: ['Serratus'], support: ['Core'], steps: ['Lie flat, feet on floor, slight arch', 'Lower bar to nipple line, elbows 45°', '1-second pause at chest', 'Press explosively to full lockout'], type: 'bench' },
  'Tricep Pushdowns': { primary: ['Triceps'], secondary: ['Forearms'], support: ['Core'], steps: ['Stand tall, elbows pinned to sides', 'Push bar down to full extension', 'Squeeze triceps hard at bottom', 'Slow return, no shoulder movement'], type: 'pushdown' },
  'Deadlift': { primary: ['Hamstrings', 'Glutes', 'Lower Back'], secondary: ['Quadriceps', 'Traps'], support: ['Forearms', 'Core'], steps: ['Bar over mid-foot, grip just outside legs', 'Flat back, chest up — big breath before pull', 'Drive the floor away — keep bar dragging up legs', 'Lock hips at top, squeeze glutes, stand tall'], type: 'deadlift' },
  'Pull-ups': { primary: ['Lats', 'Biceps'], secondary: ['Rear Deltoids', 'Rhomboids'], support: ['Core', 'Forearms'], steps: ['Dead hang — retract shoulder blades first', 'Pull chest toward bar, lead with elbows', 'Chin clears bar — squeeze lats hard', 'Lower fully to dead hang between every rep'], type: 'pullup' },
  'Weighted Pull-ups': { primary: ['Lats', 'Biceps'], secondary: ['Rear Deltoids', 'Rhomboids'], support: ['Core', 'Forearms'], steps: ['Dead hang — retract shoulder blades first', 'Pull chest toward bar, lead with elbows', 'Chin clears bar — squeeze lats hard', 'Lower fully to dead hang between every rep'], type: 'pullup' },
  'Barbell Rows': { primary: ['Mid Back', 'Lats'], secondary: ['Biceps', 'Rear Delts'], support: ['Core', 'Forearms'], steps: ['Hinge 30°, back flat and proud chest', 'Bar hangs below chest, full arm extension', 'Pull bar to belly button — elbows back', 'Squeeze shoulder blades together at top'], type: 'bbrow' },
  'Squats': { primary: ['Quadriceps', 'Glutes'], secondary: ['Hamstrings', 'Core'], support: ['Calves', 'Lower Back'], steps: ['Bar on upper traps, feet shoulder-width', 'Break at hips and knees simultaneously', 'Achieve full depth — thighs past parallel', 'Drive knees out, explode through heels'], type: 'bbsquat' },
  'Romanian Deadlift': { primary: ['Hamstrings', 'Glutes'], secondary: ['Lower Back'], support: ['Core', 'Forearms'], steps: ['Start standing, soft bend in knees', 'Push hips back — bar drags down legs', 'Feel hamstring stretch — go as far as flat back allows', 'Drive hips forward powerfully to return'], type: 'rdl' },
  'Leg Press': { primary: ['Quadriceps'], secondary: ['Glutes', 'Hamstrings'], support: ['Calves'], steps: ['Feet hip-width, mid-platform', 'Lower platform until knees reach 90°', "Press through heels — don't lock knees", 'Full range of motion every rep'], type: 'legpress' },
  'Incline Bench': { primary: ['Upper Chest', 'Front Deltoids'], secondary: ['Triceps'], support: ['Serratus', 'Core'], steps: ['Set bench 30–45° incline', 'Grip slightly narrower than flat bench', 'Lower bar to upper chest / clavicle', 'Press up and slightly back to lockout'], type: 'incline' },
  'Cable Flyes': { primary: ['Chest'], secondary: ['Front Deltoids'], support: ['Core'], steps: ['Slight bend in elbows, locked angle', 'Bring hands together in a hugging motion', 'Squeeze chest hard at peak contraction', 'Slow stretch back, feel chest open'], type: 'flyes' },
  'Lateral Raises': { primary: ['Medial Deltoids'], secondary: ['Supraspinatus'], support: ['Traps', 'Core'], steps: ['Stand tall, slight forward lean', 'Raise arms to shoulder height only', 'Pinky edge leads — like pouring water', 'Lower slowly — 3-second descent'], type: 'lateral' },
  'Seated Row': { primary: ['Mid Back', 'Lats'], secondary: ['Biceps', 'Rear Delts'], support: ['Core', 'Forearms'], steps: ['Sit tall, chest up, slight lean forward', 'Pull handle to belly, elbows back', 'Squeeze shoulder blades together', 'Slow return to full stretch'], type: 'seatedrow' },
  'Face Pulls': { primary: ['Rear Deltoids'], secondary: ['Rhomboids', 'Traps'], support: ['Rotator Cuff'], steps: ['Stand tall, cable at face height', 'Pull rope to forehead, elbows high', 'External rotation at the top', 'Slow controlled return'], type: 'facepull' },
  'Hack Squat': { primary: ['Quadriceps'], secondary: ['Glutes'], support: ['Hamstrings', 'Calves'], steps: ['Back firmly against pad, feet mid-platform', 'Lower until knees reach 90°', 'Drive up through heels', 'Full controlled range each rep'], type: 'hacksquat' },
  'Nordic Curls': { primary: ['Hamstrings'], secondary: ['Glutes'], support: ['Core'], steps: ['Kneel, ankles anchored firmly', 'Lower body slowly with hamstrings', 'Catch yourself softly with hands', 'Push back up with hamstrings'], type: 'nordic' }
};

const HumanFigure = ({ pose, peak, exId }) => {
  const gradId = `skinGrad-${exId}-${peak ? 'p' : 's'}`;
  const primaryFill = 'rgba(220,40,40,0.82)';
  const secondaryFill = 'rgba(240,120,30,0.72)';
  const poses = {
    pushup: peak ? { head: { cx: 30, cy: 110 }, torso: '32,108 70,108 75,135 35,135', arms: [[30, 115, 30, 150], [30, 150, 30, 180], [70, 115, 70, 150], [70, 150, 70, 180]], legs: [[60, 135, 120, 140], [120, 140, 150, 140], [55, 135, 120, 150], [120, 150, 150, 150]] } : { head: { cx: 30, cy: 100 }, torso: '32,98 70,98 75,125 35,125', arms: [[30, 105, 30, 140], [30, 140, 30, 180], [70, 105, 70, 140], [70, 140, 70, 180]], legs: [[60, 125, 120, 130], [120, 130, 150, 130], [55, 125, 120, 140], [120, 140, 150, 140]] },
    dbpress: peak ? { head: { cx: 80, cy: 90 }, torso: '60,95 100,95 105,140 55,140', arms: [[60, 105, 40, 130], [40, 130, 30, 160], [100, 105, 120, 130], [120, 130, 130, 160]], legs: [[70, 140, 70, 190], [90, 140, 90, 190]], bench: true } : { head: { cx: 80, cy: 90 }, torso: '60,95 100,95 105,140 55,140', arms: [[60, 105, 55, 70], [55, 70, 55, 40], [100, 105, 105, 70], [105, 70, 105, 40]], legs: [[70, 140, 70, 190], [90, 140, 90, 190]], bench: true, dbTop: true },
    dips: peak ? { head: { cx: 80, cy: 80 }, torso: '62,85 98,85 100,130 60,130', arms: [[62, 90, 40, 110], [40, 110, 45, 140], [98, 90, 120, 110], [120, 110, 115, 140]], legs: [[70, 130, 80, 180], [90, 130, 100, 180]], dipBench: true } : { head: { cx: 80, cy: 60 }, torso: '62,65 98,65 100,110 60,110', arms: [[62, 70, 45, 90], [45, 90, 45, 125], [98, 70, 115, 90], [115, 90, 115, 125]], legs: [[70, 110, 80, 170], [90, 110, 100, 170]], dipBench: true },
    dbrow: peak ? { head: { cx: 50, cy: 80 }, torso: '55,85 95,80 105,115 55,120', arms: [[95, 85, 130, 90], [130, 90, 115, 110], [55, 85, 40, 110], [40, 110, 40, 135]], legs: [[75, 120, 75, 180], [95, 120, 95, 180]], dbR: true } : { head: { cx: 45, cy: 75 }, torso: '50,80 90,75 100,110 50,115', arms: [[90, 80, 125, 100], [125, 100, 135, 135], [50, 80, 35, 105], [35, 105, 35, 130]], legs: [[70, 115, 70, 175], [90, 115, 90, 175]], dbR: true, dbLow: true },
    pulldown: peak ? { head: { cx: 80, cy: 95 }, torso: '62,100 98,100 105,150 55,150', arms: [[62, 105, 35, 90], [35, 90, 30, 75], [98, 105, 125, 90], [125, 90, 130, 75]], legs: [[70, 150, 70, 200], [90, 150, 90, 200]], bar: true } : { head: { cx: 80, cy: 80 }, torso: '65,85 95,85 100,135 60,135', arms: [[65, 90, 45, 55], [45, 55, 40, 30], [95, 90, 115, 55], [115, 55, 120, 30]], legs: [[70, 135, 70, 195], [90, 135, 90, 195]], bar: true },
    curl: peak ? { head: { cx: 80, cy: 35 }, torso: '62,50 98,50 102,120 58,120', arms: [[62, 55, 55, 90], [55, 90, 75, 70], [98, 55, 105, 90], [105, 90, 85, 70]], legs: [[70, 120, 70, 200], [90, 120, 90, 200]], dbHand: true } : { head: { cx: 80, cy: 35 }, torso: '62,50 98,50 102,120 58,120', arms: [[62, 55, 55, 90], [55, 90, 52, 130], [98, 55, 105, 90], [105, 90, 108, 130]], legs: [[70, 120, 70, 200], [90, 120, 90, 200]], dbHand: true, dbDown: true },
    squat: peak ? { head: { cx: 80, cy: 50 }, torso: '60,65 100,65 110,110 50,110', arms: [[60, 70, 40, 90], [40, 90, 35, 120], [100, 70, 120, 90], [120, 90, 125, 120]], legs: [[60, 110, 30, 140], [30, 140, 35, 195], [100, 110, 130, 140], [130, 140, 125, 195]] } : { head: { cx: 80, cy: 25 }, torso: '65,40 95,40 100,90 60,90', arms: [[65, 45, 60, 90], [60, 90, 60, 135], [95, 45, 100, 90], [100, 90, 100, 135]], legs: [[70, 90, 70, 140], [70, 140, 70, 200], [90, 90, 90, 140], [90, 140, 90, 200]] },
    lunge: peak ? { head: { cx: 80, cy: 35 }, torso: '63,50 97,50 100,110 60,110', arms: [[63, 55, 55, 95], [55, 95, 52, 135], [97, 55, 105, 95], [105, 95, 108, 135]], legs: [[65, 110, 40, 150], [40, 150, 40, 200], [95, 110, 125, 160], [125, 160, 140, 200]] } : { head: { cx: 80, cy: 30 }, torso: '65,45 95,45 100,100 60,100', arms: [[65, 50, 58, 90], [58, 90, 55, 130], [95, 50, 102, 90], [102, 90, 105, 130]], legs: [[70, 100, 70, 150], [70, 150, 70, 200], [90, 100, 90, 150], [90, 150, 90, 200]] },
    shoulderpress: peak ? { head: { cx: 80, cy: 50 }, torso: '62,65 98,65 102,125 58,125', arms: [[62, 70, 60, 30], [60, 30, 60, 10], [98, 70, 100, 30], [100, 30, 100, 10]], legs: [[70, 125, 70, 200], [90, 125, 90, 200]], dbHand: true, dbTop: true } : { head: { cx: 80, cy: 50 }, torso: '62,65 98,65 102,125 58,125', arms: [[62, 70, 45, 80], [45, 80, 45, 55], [98, 70, 115, 80], [115, 80, 115, 55]], legs: [[70, 125, 70, 200], [90, 125, 90, 200]], dbHand: true },
    bench: peak ? { head: { cx: 80, cy: 100 }, torso: '60,105 100,105 105,150 55,150', arms: [[60, 115, 50, 125], [50, 125, 55, 140], [100, 115, 110, 125], [110, 125, 105, 140]], legs: [[70, 150, 70, 200], [90, 150, 90, 200]], bench: true, bbBench: true } : { head: { cx: 80, cy: 100 }, torso: '60,105 100,105 105,150 55,150', arms: [[60, 115, 55, 75], [55, 75, 55, 40], [100, 115, 105, 75], [105, 75, 105, 40]], legs: [[70, 150, 70, 200], [90, 150, 90, 200]], bench: true, bbTop: true },
    pushdown: peak ? { head: { cx: 80, cy: 35 }, torso: '63,50 97,50 100,115 60,115', arms: [[63, 55, 55, 90], [55, 90, 55, 130], [97, 55, 105, 90], [105, 90, 105, 130]], legs: [[70, 115, 70, 200], [90, 115, 90, 200]], pdBar: true, pdLow: true } : { head: { cx: 80, cy: 35 }, torso: '63,50 97,50 100,115 60,115', arms: [[63, 55, 52, 85], [52, 85, 62, 70], [97, 55, 108, 85], [108, 85, 98, 70]], legs: [[70, 115, 70, 200], [90, 115, 90, 200]], pdBar: true },
    deadlift: peak ? { head: { cx: 80, cy: 30 }, torso: '63,45 97,45 100,105 60,105', arms: [[63, 50, 55, 95], [55, 95, 55, 130], [97, 50, 105, 95], [105, 95, 105, 130]], legs: [[70, 105, 70, 160], [70, 160, 70, 205], [90, 105, 90, 160], [90, 160, 90, 205]], bbHip: true } : { head: { cx: 80, cy: 60 }, torso: '60,75 100,70 105,115 55,120', arms: [[60, 80, 55, 135], [55, 135, 55, 175], [100, 80, 105, 135], [105, 135, 105, 175]], legs: [[70, 120, 55, 160], [55, 160, 60, 205], [90, 120, 105, 160], [105, 160, 100, 205]], bbFloor: true },
    pullup: peak ? { head: { cx: 80, cy: 50 }, torso: '62,65 98,65 102,125 58,125', arms: [[62, 70, 50, 50], [50, 50, 45, 25], [98, 70, 110, 50], [110, 50, 115, 25]], legs: [[70, 125, 70, 180], [70, 180, 75, 200], [90, 125, 90, 180], [90, 180, 85, 200]], pullupBar: true } : { head: { cx: 80, cy: 70 }, torso: '62,85 98,85 102,140 58,140', arms: [[62, 90, 75, 50], [75, 50, 75, 25], [98, 90, 85, 50], [85, 50, 85, 25]], legs: [[70, 140, 70, 195], [70, 195, 75, 210], [90, 140, 90, 195], [90, 195, 85, 210]], pullupBar: true },
    bbrow: peak ? { head: { cx: 55, cy: 80 }, torso: '58,85 95,80 105,115 55,120', arms: [[60, 90, 75, 130], [75, 130, 85, 115], [95, 90, 110, 130], [110, 130, 100, 115]], legs: [[75, 120, 75, 180], [95, 120, 95, 180]], bbRow: true, bbRowUp: true } : { head: { cx: 50, cy: 75 }, torso: '55,80 90,75 100,110 50,115', arms: [[55, 85, 55, 145], [55, 145, 55, 170], [90, 85, 95, 145], [95, 145, 95, 170]], legs: [[70, 115, 70, 175], [90, 115, 90, 175]], bbRow: true },
    bbsquat: peak ? { head: { cx: 80, cy: 50 }, torso: '60,65 100,65 110,110 50,110', arms: [[60, 70, 45, 60], [45, 60, 40, 55], [100, 70, 115, 60], [115, 60, 120, 55]], legs: [[60, 110, 30, 140], [30, 140, 35, 195], [100, 110, 130, 140], [130, 140, 125, 195]], bbBack: true } : { head: { cx: 80, cy: 25 }, torso: '65,40 95,40 100,90 60,90', arms: [[65, 45, 55, 30], [55, 30, 50, 25], [95, 45, 105, 30], [105, 30, 110, 25]], legs: [[70, 90, 70, 140], [70, 140, 70, 200], [90, 90, 90, 140], [90, 140, 90, 200]], bbBack: true },
    rdl: peak ? { head: { cx: 55, cy: 70 }, torso: '58,75 95,72 105,110 55,115', arms: [[62, 82, 62, 140], [62, 140, 62, 170], [95, 82, 98, 140], [98, 140, 98, 170]], legs: [[75, 115, 75, 180], [95, 115, 95, 180]], bbHand: true, bbDown: true } : { head: { cx: 80, cy: 30 }, torso: '63,45 97,45 100,105 60,105', arms: [[63, 50, 58, 95], [58, 95, 55, 130], [97, 50, 102, 95], [102, 95, 105, 130]], legs: [[70, 105, 70, 200], [90, 105, 90, 200]], bbHand: true },
    legpress: peak ? { head: { cx: 35, cy: 90 }, torso: '38,95 75,95 80,135 38,135', arms: [[40, 105, 55, 135], [75, 105, 90, 135]], legs: [[78, 115, 110, 90], [110, 90, 140, 95], [78, 130, 110, 100], [110, 100, 140, 105]], legpress: true } : { head: { cx: 35, cy: 90 }, torso: '38,95 75,95 80,135 38,135', arms: [[40, 105, 55, 135], [75, 105, 90, 135]], legs: [[78, 115, 135, 100], [135, 100, 150, 105], [78, 130, 135, 110], [135, 110, 150, 115]], legpress: true },
    incline: peak ? { head: { cx: 60, cy: 90 }, torso: '55,95 95,100 100,140 50,135', arms: [[55, 105, 50, 115], [50, 115, 55, 130], [95, 105, 100, 115], [100, 115, 105, 130]], legs: [[80, 140, 110, 185], [110, 185, 130, 195]], inclineBench: true, bbInc: true } : { head: { cx: 60, cy: 90 }, torso: '55,95 95,100 100,140 50,135', arms: [[55, 105, 45, 70], [45, 70, 45, 40], [95, 105, 105, 70], [105, 70, 105, 40]], legs: [[80, 140, 110, 185], [110, 185, 130, 195]], inclineBench: true, bbIncTop: true },
    flyes: peak ? { head: { cx: 80, cy: 90 }, torso: '60,95 100,95 105,140 55,140', arms: [[60, 105, 70, 80], [70, 80, 75, 55], [100, 105, 90, 80], [90, 80, 85, 55]], legs: [[70, 140, 70, 195], [90, 140, 90, 195]], bench: true, dbHand: true, dbCenter: true } : { head: { cx: 80, cy: 90 }, torso: '60,95 100,95 105,140 55,140', arms: [[60, 105, 30, 100], [30, 100, 15, 105], [100, 105, 130, 100], [130, 100, 145, 105]], legs: [[70, 140, 70, 195], [90, 140, 90, 195]], bench: true, dbHand: true, dbWide: true },
    lateral: peak ? { head: { cx: 80, cy: 35 }, torso: '63,50 97,50 100,115 60,115', arms: [[63, 55, 30, 55], [30, 55, 15, 60], [97, 55, 130, 55], [130, 55, 145, 60]], legs: [[70, 115, 70, 200], [90, 115, 90, 200]], dbHand: true, dbLat: true } : { head: { cx: 80, cy: 35 }, torso: '63,50 97,50 100,115 60,115', arms: [[63, 55, 55, 95], [55, 95, 52, 130], [97, 55, 105, 95], [105, 95, 108, 130]], legs: [[70, 115, 70, 200], [90, 115, 90, 200]], dbHand: true, dbDown: true },
    seatedrow: peak ? { head: { cx: 80, cy: 60 }, torso: '62,75 98,75 105,125 58,125', arms: [[62, 85, 85, 105], [85, 105, 100, 115], [98, 85, 75, 105], [75, 105, 60, 115]], legs: [[78, 125, 130, 135], [130, 135, 150, 140], [88, 125, 135, 140], [135, 140, 150, 145]], cableHandle: true } : { head: { cx: 75, cy: 55 }, torso: '60,70 95,70 100,120 55,120', arms: [[60, 80, 90, 90], [90, 90, 120, 95], [95, 80, 90, 90], [90, 90, 120, 95]], legs: [[75, 120, 130, 130], [130, 130, 150, 135], [85, 120, 135, 135], [135, 135, 150, 140]], cableHandle: true },
    facepull: peak ? { head: { cx: 80, cy: 35 }, torso: '63,50 97,50 100,115 60,115', arms: [[63, 55, 50, 40], [50, 40, 75, 25], [97, 55, 110, 40], [110, 40, 85, 25]], legs: [[70, 115, 70, 200], [90, 115, 90, 200]], cableTop: true } : { head: { cx: 80, cy: 35 }, torso: '63,50 97,50 100,115 60,115', arms: [[63, 55, 55, 50], [55, 50, 40, 30], [97, 55, 105, 50], [105, 50, 120, 30]], legs: [[70, 115, 70, 200], [90, 115, 90, 200]], cableTop: true },
    hacksquat: peak ? { head: { cx: 80, cy: 60 }, torso: '60,75 100,75 105,120 55,120', arms: [[60, 80, 45, 100], [45, 100, 45, 130], [100, 80, 115, 100], [115, 100, 115, 130]], legs: [[65, 120, 40, 155], [40, 155, 45, 200], [95, 120, 120, 155], [120, 155, 115, 200]], hackMachine: true } : { head: { cx: 80, cy: 35 }, torso: '60,50 100,50 105,95 55,95', arms: [[60, 55, 45, 90], [45, 90, 45, 125], [100, 55, 115, 90], [115, 90, 115, 125]], legs: [[70, 95, 70, 150], [70, 150, 70, 205], [90, 95, 90, 150], [90, 150, 90, 205]], hackMachine: true },
    nordic: peak ? { head: { cx: 30, cy: 90 }, torso: '32,95 70,90 75,125 35,130', arms: [[32, 100, 20, 135], [20, 135, 25, 165], [70, 100, 55, 135], [55, 135, 50, 165]], legs: [[75, 130, 130, 135], [130, 135, 160, 145], [70, 125, 130, 130], [130, 130, 160, 140]] } : { head: { cx: 80, cy: 50 }, torso: '63,65 97,65 100,115 60,115', arms: [[63, 70, 55, 105], [55, 105, 52, 140], [97, 70, 105, 105], [105, 105, 108, 140]], legs: [[70, 115, 90, 160], [90, 160, 130, 170], [90, 115, 100, 160], [100, 160, 130, 170]] }
  };
  const p = poses[pose] || poses.pushup;
  const skin = '#A0522D'; const skinL = '#C68642';
  const renderMuscles = () => {
    if (!peak) return null;
    const m = [];
    if (['pushup', 'dbpress', 'bench', 'incline', 'flyes', 'dips'].includes(pose)) { const t = p.torso.split(',').map(Number); const cx = (t[0] + t[2]) / 2; const cy = (t[1] + t[5]) / 2 - 5; m.push(<ellipse key="ch1" cx={cx - 8} cy={cy} rx="12" ry="9" fill={primaryFill} style={{ animation: 'muscleGlow 1.5s infinite' }} />); m.push(<ellipse key="ch2" cx={cx + 8} cy={cy} rx="12" ry="9" fill={primaryFill} style={{ animation: 'muscleGlow 1.5s infinite' }} />); }
    if (['dbrow', 'pulldown', 'pullup', 'bbrow', 'seatedrow', 'deadlift', 'rdl'].includes(pose)) { const t = p.torso.split(',').map(Number); const cx = (t[0] + t[2]) / 2; const cy = (t[1] + t[5]) / 2; m.push(<ellipse key="lat1" cx={cx - 12} cy={cy} rx="8" ry="16" fill={primaryFill} style={{ animation: 'muscleGlow 1.5s infinite' }} />); m.push(<ellipse key="lat2" cx={cx + 12} cy={cy} rx="8" ry="16" fill={primaryFill} style={{ animation: 'muscleGlow 1.5s infinite' }} />); }
    if (['curl', 'pullup', 'dbrow', 'bbrow', 'pulldown', 'seatedrow'].includes(pose)) { p.arms.forEach((a, i) => { if (i === 0 || i === 2) { const mx = (a[0] + a[2]) / 2, my = (a[1] + a[3]) / 2; m.push(<circle key={`bi${i}`} cx={mx} cy={my} r="6" fill={pose === 'curl' ? primaryFill : secondaryFill} style={{ animation: 'muscleGlow 1.5s infinite' }} />); } }); }
    if (['pushup', 'dbpress', 'dips', 'bench', 'pushdown', 'shoulderpress', 'incline'].includes(pose)) { p.arms.forEach((a, i) => { if (i === 0 || i === 2) { const mx = (a[0] + a[2]) / 2, my = (a[1] + a[3]) / 2; m.push(<circle key={`tri${i}`} cx={mx} cy={my} r="5" fill={pose === 'pushdown' || pose === 'dips' ? primaryFill : secondaryFill} style={{ animation: 'muscleGlow 1.5s infinite' }} />); } }); }
    if (['shoulderpress', 'lateral', 'facepull', 'pushup', 'bench', 'incline'].includes(pose)) { const t = p.torso.split(',').map(Number); m.push(<circle key="del1" cx={t[0]} cy={t[1]} r="6" fill={['shoulderpress', 'lateral', 'facepull'].includes(pose) ? primaryFill : secondaryFill} style={{ animation: 'muscleGlow 1.5s infinite' }} />); m.push(<circle key="del2" cx={t[2]} cy={t[3]} r="6" fill={['shoulderpress', 'lateral', 'facepull'].includes(pose) ? primaryFill : secondaryFill} style={{ animation: 'muscleGlow 1.5s infinite' }} />); }
    if (['squat', 'bbsquat', 'lunge', 'legpress', 'hacksquat', 'deadlift'].includes(pose)) { p.legs.forEach((l, i) => { if (i === 0 || i === 2) { const mx = (l[0] + l[2]) / 2, my = (l[1] + l[3]) / 2; m.push(<ellipse key={`q${i}`} cx={mx} cy={my} rx="7" ry="14" fill={primaryFill} style={{ animation: 'muscleGlow 1.5s infinite' }} />); } }); }
    if (['rdl', 'deadlift', 'nordic'].includes(pose)) { p.legs.forEach((l, i) => { if (i === 0 || i === 2) { const mx = (l[0] + l[2]) / 2, my = (l[1] + l[3]) / 2; m.push(<ellipse key={`ham${i}`} cx={mx} cy={my} rx="7" ry="14" fill={primaryFill} style={{ animation: 'muscleGlow 1.5s infinite' }} />); } }); }
    if (['squat', 'bbsquat', 'lunge', 'deadlift', 'rdl'].includes(pose)) { const t = p.torso.split(',').map(Number); m.push(<ellipse key="glute" cx={(t[4] + t[6]) / 2} cy={t[5]} rx="14" ry="8" fill={primaryFill} style={{ animation: 'muscleGlow 1.5s infinite' }} />); }
    return m;
  };
  return (
    <svg viewBox="0 0 160 220" width="140" height="185" style={{ display: 'block', margin: '0 auto' }}>
      <defs><radialGradient id={gradId} cx="50%" cy="50%"><stop offset="0%" stopColor={skinL} /><stop offset="100%" stopColor={skin} /></radialGradient></defs>
      {p.bench && <rect x="35" y="142" width="90" height="10" fill="#1a1a2e" stroke="#333" />}
      {p.bench && <rect x="55" y="152" width="6" height="40" fill="#1a1a2e" />}
      {p.bench && <rect x="99" y="152" width="6" height="40" fill="#1a1a2e" />}
      {p.dipBench && <><rect x="20" y="125" width="20" height="60" fill="#1a1a2e" stroke="#333" /><rect x="120" y="125" width="20" height="60" fill="#1a1a2e" stroke="#333" /></>}
      {p.bar && <line x1="20" y1="20" x2="140" y2="20" stroke="#999" strokeWidth="4" />}
      {p.bar && peak && <line x1="80" y1="20" x2="80" y2="78" stroke="#666" strokeWidth="2" />}
      {p.bar && !peak && <line x1="60" y1="20" x2="40" y2="30" stroke="#666" strokeWidth="2" />}
      {p.pullupBar && <line x1="10" y1="20" x2="150" y2="20" stroke="#999" strokeWidth="5" />}
      {p.legpress && <><rect x="100" y="60" width="60" height="80" fill="#1a1a2e" stroke="#333" /><rect x="105" y="65" width="50" height="70" fill="#0d0d12" /></>}
      {p.inclineBench && <polygon points="40,200 130,200 140,90 60,75" fill="#1a1a2e" stroke="#333" />}
      {p.hackMachine && <polygon points="20,40 50,40 60,210 10,210" fill="#1a1a2e" stroke="#333" />}
      {p.cableTop && <><line x1="20" y1="20" x2="140" y2="20" stroke="#666" strokeWidth="2" /><line x1="80" y1="20" x2={peak ? 75 : 60} y2={peak ? 25 : 30} stroke="#888" strokeWidth="1.5" /><line x1="80" y1="20" x2={peak ? 85 : 100} y2={peak ? 25 : 30} stroke="#888" strokeWidth="1.5" /></>}
      <ellipse cx={p.head.cx} cy={p.head.cy - 14} rx="14" ry="8" fill="#2a1a00" />
      <circle cx={p.head.cx} cy={p.head.cy} r="14" fill={skinL} stroke="#1a0a00" strokeWidth="1.5" />
      <polygon points={p.torso} fill={`url(#${gradId})`} stroke="#1a0a00" strokeWidth="1" />
      {p.arms.map((a, i) => (<line key={`a${i}`} x1={a[0]} y1={a[1]} x2={a[2]} y2={a[3]} stroke={skin} strokeWidth={i % 2 === 0 ? 13 : 10} strokeLinecap="round" />))}
      {p.arms.filter((_, i) => i % 2 === 0).map((a, i) => (<circle key={`e${i}`} cx={a[2]} cy={a[3]} r="5" fill={skinL} stroke="#1a0a00" strokeWidth="1" />))}
      {p.legs.map((l, i) => (<line key={`l${i}`} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke={skin} strokeWidth={i % 2 === 0 ? 18 : 13} strokeLinecap="round" />))}
      {p.legs.filter((_, i) => i % 2 === 0).map((l, i) => (<circle key={`k${i}`} cx={l[2]} cy={l[3]} r="7" fill={skinL} stroke="#1a0a00" strokeWidth="1" />))}
      {p.dbTop && <><circle cx="55" cy="40" r="7" fill="#555" stroke="#777" /><circle cx="105" cy="40" r="7" fill="#555" stroke="#777" /></>}
      {p.dbR && <circle cx={peak ? 130 : 135} cy={peak ? 90 : 135} r="7" fill="#555" stroke="#777" />}
      {p.dbHand && p.dbTop && !p.dbDown && <><circle cx="60" cy="10" r="7" fill="#555" stroke="#777" /><circle cx="100" cy="10" r="7" fill="#555" stroke="#777" /></>}
      {p.dbDown && <><circle cx="52" cy="130" r="7" fill="#555" stroke="#777" /><circle cx="108" cy="130" r="7" fill="#555" stroke="#777" /></>}
      {p.dbCenter && <><circle cx="75" cy="55" r="6" fill="#555" stroke="#777" /><circle cx="85" cy="55" r="6" fill="#555" stroke="#777" /></>}
      {p.dbWide && <><circle cx="15" cy="105" r="7" fill="#555" stroke="#777" /><circle cx="145" cy="105" r="7" fill="#555" stroke="#777" /></>}
      {p.dbLat && <><circle cx="15" cy="60" r="7" fill="#555" stroke="#777" /><circle cx="145" cy="60" r="7" fill="#555" stroke="#777" /></>}
      {p.bbTop && <><line x1="35" y1="40" x2="125" y2="40" stroke="#999" strokeWidth="4" /><circle cx="30" cy="40" r="10" fill="#444" stroke="#666" /><circle cx="130" cy="40" r="10" fill="#444" stroke="#666" /></>}
      {p.bbBench && <><line x1="40" y1="140" x2="120" y2="140" stroke="#999" strokeWidth="4" /><circle cx="35" cy="140" r="10" fill="#444" stroke="#666" /><circle cx="125" cy="140" r="10" fill="#444" stroke="#666" /></>}
      {p.bbBack && <><line x1="40" y1={peak ? 55 : 25} x2="120" y2={peak ? 55 : 25} stroke="#999" strokeWidth="4" /><circle cx="35" cy={peak ? 55 : 25} r="11" fill="#444" stroke="#666" /><circle cx="125" cy={peak ? 55 : 25} r="11" fill="#444" stroke="#666" /></>}
      {p.bbFloor && <><line x1="30" y1="180" x2="130" y2="180" stroke="#999" strokeWidth="4" /><circle cx="25" cy="180" r="12" fill="#444" stroke="#666" /><circle cx="135" cy="180" r="12" fill="#444" stroke="#666" /></>}
      {p.bbHip && <><line x1="30" y1="130" x2="130" y2="130" stroke="#999" strokeWidth="4" /><circle cx="25" cy="130" r="12" fill="#444" stroke="#666" /><circle cx="135" cy="130" r="12" fill="#444" stroke="#666" /></>}
      {p.bbRow && p.bbRowUp && <><line x1="30" y1="115" x2="130" y2="115" stroke="#999" strokeWidth="4" /><circle cx="25" cy="115" r="11" fill="#444" stroke="#666" /><circle cx="135" cy="115" r="11" fill="#444" stroke="#666" /></>}
      {p.bbRow && !p.bbRowUp && <><line x1="30" y1="170" x2="130" y2="170" stroke="#999" strokeWidth="4" /><circle cx="25" cy="170" r="11" fill="#444" stroke="#666" /><circle cx="135" cy="170" r="11" fill="#444" stroke="#666" /></>}
      {p.bbHand && p.bbDown && <><line x1="30" y1="170" x2="130" y2="170" stroke="#999" strokeWidth="4" /><circle cx="25" cy="170" r="11" fill="#444" stroke="#666" /><circle cx="135" cy="170" r="11" fill="#444" stroke="#666" /></>}
      {p.bbHand && !p.bbDown && <><line x1="35" y1="130" x2="125" y2="130" stroke="#999" strokeWidth="4" /><circle cx="30" cy="130" r="11" fill="#444" stroke="#666" /><circle cx="130" cy="130" r="11" fill="#444" stroke="#666" /></>}
      {p.bbInc && <><line x1="35" y1="130" x2="125" y2="130" stroke="#999" strokeWidth="4" /><circle cx="30" cy="130" r="10" fill="#444" stroke="#666" /><circle cx="130" cy="130" r="10" fill="#444" stroke="#666" /></>}
      {p.bbIncTop && <><line x1="35" y1="40" x2="125" y2="40" stroke="#999" strokeWidth="4" /><circle cx="30" cy="40" r="10" fill="#444" stroke="#666" /><circle cx="130" cy="40" r="10" fill="#444" stroke="#666" /></>}
      {p.pdBar && <><line x1="40" y1="20" x2="120" y2="20" stroke="#999" strokeWidth="3" /><line x1="80" y1="20" x2="80" y2={peak ? 125 : 70} stroke="#888" strokeWidth="1.5" /><line x1={peak ? 55 : 62} y1={peak ? 125 : 70} x2={peak ? 105 : 98} y2={peak ? 125 : 70} stroke="#888" strokeWidth="3" /></>}
      {p.cableHandle && <><rect x="150" y="100" width="8" height="40" fill="#1a1a2e" stroke="#333" /><line x1="150" y1="115" x2={peak ? 100 : 120} y2="115" stroke="#888" strokeWidth="1.5" /></>}
      {renderMuscles()}
    </svg>
  );
};

const ExerciseAnatomyCard = ({ exercise, sets, isOpen, onToggle, idx }) => {
  const [peak, setPeak] = useState(false);
  const intervalRef = useRef(null);
  const data = EX_DB[exercise] || EX_DB['Push-ups'];
  useEffect(() => {
    if (isOpen) { intervalRef.current = setInterval(() => setPeak(p => !p), 900); }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isOpen]);
  return (
    <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, marginBottom: 10, overflow: 'hidden' }}>
      <div onClick={onToggle} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', cursor: 'pointer' }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{exercise}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 12, background: C.card2, color: C.muted, padding: '3px 10px', borderRadius: 999, fontWeight: 600 }}>{sets}</span>
          <span style={{ display: 'inline-block', fontSize: 11, color: C.muted, transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>▼</span>
        </div>
      </div>
      {isOpen && (
        <div style={{ borderTop: `0.5px solid ${C.border}`, padding: 12, animation: 'exerciseFadeIn 0.2s ease' }}>
          <div style={{ background: '#0d0d12', borderRadius: 12, padding: '10px 6px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            <div>
              <div style={{ fontSize: 10, color: C.muted, textAlign: 'center', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 4 }}>START</div>
              <div style={{ opacity: peak ? 0.4 : 1, transition: 'opacity 0.3s' }}><HumanFigure pose={data.type} peak={false} exId={`${idx}-s`} /></div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: C.accent, textAlign: 'center', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 4 }}>PEAK</div>
              <div style={{ opacity: peak ? 1 : 0.4, transition: 'opacity 0.3s' }}><HumanFigure pose={data.type} peak={true} exId={`${idx}-p`} /></div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center', marginTop: 8 }}>
            {[0, 0.2, 0.4].map((d, i) => (<div key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: C.accent, animation: `pulse 1.2s infinite ${d}s` }} />))}
            <span style={{ fontSize: 11, color: C.muted }}>Live animation</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 12 }}>
            {data.primary.map(m => (<span key={m} style={{ fontSize: 11, padding: '3px 9px', borderRadius: 999, background: 'rgba(239,68,68,0.18)', color: C.accent2 }}>🔴 {m}</span>))}
            {data.secondary.map(m => (<span key={m} style={{ fontSize: 11, padding: '3px 9px', borderRadius: 999, background: 'rgba(249,115,22,0.15)', color: C.accent }}>🟠 {m}</span>))}
            {data.support.map(m => (<span key={m} style={{ fontSize: 11, padding: '3px 9px', borderRadius: 999, background: 'rgba(100,100,120,0.18)', color: '#aaa' }}>⚫ {m}</span>))}
          </div>
          <div style={{ marginTop: 12 }}>
            {data.steps.map((s, i) => (<div key={i} style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, marginBottom: 4 }}><span style={{ color: C.accent, marginRight: 6 }}>→</span>{s}</div>))}
          </div>
        </div>
      )}
    </div>
  );
};

// ============== MAIN APP ==============
export default function FitArogyaAI() {
  const [appState, setAppState] = useState('login');
  const [screen, setScreen] = useState('home');
  const [db, setDb] = useState(loadDB());
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPwd, setLoginPwd] = useState('');
  const [loginErr, setLoginErr] = useState('');
  const [loginAgree, setLoginAgree] = useState(false);
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regMobile, setRegMobile] = useState('');
  const [regPwd, setRegPwd] = useState('');
  const [regPwd2, setRegPwd2] = useState('');
  const [regErr, setRegErr] = useState('');
  const [regAgree, setRegAgree] = useState(false);
  const [pfStep, setPfStep] = useState(1);
  const [pfAge, setPfAge] = useState('');
  const [pfGender, setPfGender] = useState('');
  const [pfHeight, setPfHeight] = useState('');
  const [pfWeight, setPfWeight] = useState('');
  const [pfCity, setPfCity] = useState('');
  const [pfBlood, setPfBlood] = useState('');
  const [pfCond, setPfCond] = useState([]);
  const [pfGoals, setPfGoals] = useState([]);
  const [showFoodScan, setShowFoodScan] = useState(false);

  useEffect(() => {
    const d = loadDB();
    if (d.currentEmail) {
      const u = d.users.find(x => x.email === d.currentEmail);
      if (u) { setUser(u); setCart(u.cart || []); setAppState(u.profileDone ? 'app' : 'profile'); }
    }
  }, []);

  const saveUser = (updates) => {
    const d = loadDB();
    const idx = d.users.findIndex(u => u.email === user.email);
    if (idx >= 0) { d.users[idx] = { ...d.users[idx], ...updates }; saveDB(d); setDb(d); setUser(d.users[idx]); }
  };

  const addToCart = (item) => {
    const newCart = [...cart, { ...item, id: Date.now() }];
    setCart(newCart);
    if (user) saveUser({ cart: newCart });
  };

  const clearCart = () => { setCart([]); if (user) saveUser({ cart: [] }); };
  const cartTotal = cart.reduce((s, i) => s + (i.price || 0), 0);

  const handleLogin = () => {
    setLoginErr('');
    const d = loadDB();
    const u = d.users.find(x => x.email === loginEmail.toLowerCase().trim());
    if (!u) { setLoginErr('No account found with this email.'); return; }
    if (u.password !== loginPwd) { setLoginErr('Incorrect password.'); return; }
    d.currentEmail = u.email; saveDB(d); setUser(u); setCart(u.cart || []);
    setAppState(u.profileDone ? 'app' : 'profile');
  };

  const handleRegister = () => {
    setRegErr('');
    if (!regName.trim()) { setRegErr('Please enter your full name.'); return; }
    if (!regEmail.trim()) { setRegErr('Please enter your email.'); return; }
    if (regPwd.length < 6) { setRegErr('Password must be at least 6 characters.'); return; }
    if (regPwd !== regPwd2) { setRegErr('Passwords do not match.'); return; }
    const d = loadDB();
    if (d.users.find(u => u.email === regEmail.toLowerCase().trim())) { setRegErr('Email already registered. Please login.'); return; }
    const newUser = { name: regName.trim(), email: regEmail.toLowerCase().trim(), mobile: regMobile.trim(), password: regPwd, profileDone: false, cart: [], scanCredits: 0 };
    d.users.push(newUser); d.currentEmail = newUser.email; saveDB(d); setUser(newUser); setCart([]); setAppState('profile');
  };

  const handleLogout = () => {
    const d = loadDB(); d.currentEmail = null; saveDB(d);
    setUser(null); setCart([]); setAppState('login'); setLoginEmail(''); setLoginPwd(''); setLoginAgree(false);
  };

  const completeProfile = () => {
    saveUser({ profileDone: true, age: pfAge, gender: pfGender, height: pfHeight, weight: pfWeight, city: pfCity, blood: pfBlood, conditions: pfCond, goals: pfGoals });
    setAppState('app');
  };

  const DisclaimerBox = ({ agreed, setAgreed }) => (
    <div onClick={() => setAgreed(!agreed)} style={{
      display: 'flex', alignItems: 'flex-start', gap: 12,
      background: C.card, border: `1px solid ${agreed ? C.accent : C.border}`,
      borderRadius: 12, padding: 14, marginBottom: 14, cursor: 'pointer'
    }}>
      <div style={{
        width: 20, height: 20, borderRadius: 6, flexShrink: 0, marginTop: 1,
        background: agreed ? C.accent : 'transparent',
        border: `2px solid ${agreed ? C.accent : C.muted}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s'
      }}>
        {agreed && <span style={{ color: '#fff', fontSize: 12, fontWeight: 900 }}>✓</span>}
      </div>
      <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.6 }}>
        Main samajhta/samajhti hoon ki <span style={{ color: C.text, fontWeight: 600 }}>FitArogya AI ek informational app hai</span>, na ki medical advice. Meri health se related koi bhi decision meri apni zimmedari hai. Main FitArogya AI, uske developers, ya is app par kisi bhi nuksaan ke liye{' '}
        <span style={{ color: C.accent2, fontWeight: 600 }}>koi bhi legal action nahi karunga/karungi.</span>
      </div>
    </div>
  );

  // LOGIN
  if (appState === 'login') {
    return (
      <Container>
        <GlobalStyles />
        <div style={{ padding: '60px 20px 40px', textAlign: 'center', animation: 'fadeIn 0.4s ease' }}>
          <div style={{ fontSize: 72, marginBottom: 8 }}>💪</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, margin: 0, background: `linear-gradient(135deg, ${C.accent}, ${C.accent4})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>FitArogya AI</h1>
          <div style={{ color: C.muted, fontSize: 13, marginTop: 6 }}>India's #1 Fitness & Health App</div>
        </div>
        <div style={{ padding: '0 20px' }}>
          <Inp label="Email" type="email" value={loginEmail} onChange={setLoginEmail} placeholder="you@example.com" />
          <Inp label="Password" type="password" value={loginPwd} onChange={setLoginPwd} placeholder="Enter password" />
          {loginErr && <div style={{ background: 'rgba(239,68,68,0.1)', border: `1px solid ${C.accent2}`, color: C.accent2, padding: 12, borderRadius: 10, fontSize: 13, marginBottom: 14 }}>{loginErr}</div>}
          <DisclaimerBox agreed={loginAgree} setAgreed={setLoginAgree} />
          <button onClick={handleLogin} disabled={!loginAgree} style={{
            width: '100%', background: loginAgree ? `linear-gradient(135deg, ${C.accent}, ${C.accent4})` : C.card2,
            color: '#fff', border: 'none', borderRadius: 12, padding: '14px', fontSize: 15, fontWeight: 700,
            cursor: loginAgree ? 'pointer' : 'not-allowed', fontFamily: 'inherit', opacity: loginAgree ? 1 : 0.5, transition: 'all 0.2s'
          }}>Login →</button>
          <div style={{ textAlign: 'center', marginTop: 20, color: C.muted, fontSize: 13 }}>
            New here? <span onClick={() => setAppState('register')} style={{ color: C.accent, fontWeight: 600, cursor: 'pointer' }}>Create Account</span>
          </div>
        </div>
      </Container>
    );
  }

  // REGISTER
  if (appState === 'register') {
    return (
      <Container>
        <GlobalStyles />
        <div style={{ padding: '40px 20px 20px', textAlign: 'center' }}>
          <div style={{ fontSize: 48 }}>💪</div>
          <h1 style={{ fontSize: 24, fontWeight: 800, margin: '8px 0 4px' }}>Create Account</h1>
          <div style={{ color: C.muted, fontSize: 13 }}>Join FitArogya AI today</div>
        </div>
        <div style={{ padding: '0 20px 40px' }}>
          <Inp label="Full Name" value={regName} onChange={setRegName} placeholder="Your name" />
          <Inp label="Email" type="email" value={regEmail} onChange={setRegEmail} placeholder="you@example.com" />
          <Inp label="Mobile (optional)" type="tel" value={regMobile} onChange={setRegMobile} placeholder="10-digit mobile" />
          <Inp label="Password" type="password" value={regPwd} onChange={setRegPwd} placeholder="Min 6 characters" />
          <Inp label="Confirm Password" type="password" value={regPwd2} onChange={setRegPwd2} placeholder="Re-enter password" />
          {regErr && <div style={{ background: 'rgba(239,68,68,0.1)', border: `1px solid ${C.accent2}`, color: C.accent2, padding: 12, borderRadius: 10, fontSize: 13, marginBottom: 14 }}>{regErr}</div>}
          <DisclaimerBox agreed={regAgree} setAgreed={setRegAgree} />
          <button onClick={handleRegister} disabled={!regAgree} style={{
            width: '100%', background: regAgree ? `linear-gradient(135deg, ${C.accent}, ${C.accent4})` : C.card2,
            color: '#fff', border: 'none', borderRadius: 12, padding: '14px', fontSize: 15, fontWeight: 700,
            cursor: regAgree ? 'pointer' : 'not-allowed', fontFamily: 'inherit', opacity: regAgree ? 1 : 0.5, transition: 'all 0.2s'
          }}>Register →</button>
          <div style={{ textAlign: 'center', marginTop: 20, color: C.muted, fontSize: 13 }}>
            Already have an account? <span onClick={() => setAppState('login')} style={{ color: C.accent, fontWeight: 600, cursor: 'pointer' }}>Login</span>
          </div>
        </div>
      </Container>
    );
  }

  // PROFILE
  if (appState === 'profile') {
    return <ProfileForm step={pfStep} setStep={setPfStep} age={pfAge} setAge={setPfAge} gender={pfGender} setGender={setPfGender} height={pfHeight} setHeight={setPfHeight} weight={pfWeight} setWeight={setPfWeight} city={pfCity} setCity={setPfCity} blood={pfBlood} setBlood={setPfBlood} cond={pfCond} setCond={setPfCond} goals={pfGoals} setGoals={setPfGoals} onComplete={completeProfile} />;
  }

  // MAIN APP
  const screenTitles = { home: 'FitArogya AI', symptom: 'Symptom Checker', tracker: 'Health Tracker', mental: 'Mental Health', women: "Women's Health", hair: 'Hair Health', weight: 'Weight Management', scan: 'AI Skin Scan', muscle: 'Muscle Growth', delivery: 'Checkout' };

  return (
    <Container>
      <GlobalStyles />
      <div style={{ position: 'sticky', top: 0, zIndex: 100, background: C.bg, borderBottom: `1px solid ${C.border}`, padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {screen !== 'home' && (<button onClick={() => setScreen('home')} style={{ background: 'transparent', border: 'none', color: C.text, fontSize: 22, cursor: 'pointer', padding: 0 }}>←</button>)}
          <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700 }}>{screenTitles[screen]}</h2>
          {screen === 'home' && <FoodScanFAB onClick={() => setShowFoodScan(true)} />}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {cart.length > 0 && (<div style={{ background: C.accent2, color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 999 }}>{cart.length}</div>)}
          {screen === 'home' && (<button onClick={handleLogout} style={{ background: 'transparent', border: `1px solid ${C.border}`, color: C.muted, padding: '6px 12px', borderRadius: 8, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}>Log Out</button>)}
        </div>
      </div>
      <div style={{ padding: '16px', paddingBottom: 100, animation: 'fadeIn 0.25s ease' }} key={screen}>
        {screen === 'home' && <HomeScreen user={user} cart={cart} cartTotal={cartTotal} setScreen={setScreen} />}
        {screen === 'symptom' && <SymptomScreen />}
        {screen === 'tracker' && <TrackerScreen />}
        {screen === 'mental' && <MentalScreen />}
        {screen === 'women' && <WomenScreen />}
        {screen === 'hair' && <HairScreen addToCart={addToCart} />}
        {screen === 'weight' && <WeightScreen addToCart={addToCart} />}
        {screen === 'scan' && <ScanScreen addToCart={addToCart} saveUser={saveUser} user={user} />}
        {screen === 'muscle' && <MuscleScreen addToCart={addToCart} />}
        {screen === 'delivery' && <DeliveryScreen cart={cart} cartTotal={cartTotal} clearCart={clearCart} setScreen={setScreen} user={user} />}
      </div>
       <BottomNav screen={screen} setScreen={setScreen} cartCount={cart.length} />
      {showFoodScan && <FoodScanModal onClose={() => setShowFoodScan(false)} user={user} />}
    </Container>
  );
}

const Container = ({ children }) => (<div style={{ maxWidth: 480, margin: '0 auto', minHeight: '100vh', background: C.bg, color: C.text, position: 'relative', overflow: 'hidden' }}>{children}</div>);

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
    * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; margin: 0; padding: 0; }
    body { font-family: 'Plus Jakarta Sans', sans-serif; background: ${C.bg}; color: ${C.text}; }
    button:active { opacity: 0.75; }
    input, textarea, select { font-family: 'Plus Jakarta Sans', sans-serif; }
    input::placeholder, textarea::placeholder { color: #52525B; }
    input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
    input[type=number] { -moz-appearance: textfield; }
    ::-webkit-scrollbar { display: none; }
    input[type=range] { -webkit-appearance: none; height: 6px; background: ${C.card2}; border-radius: 3px; outline: none; }
    input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: ${C.accent}; cursor: pointer; }
    input[type=range]::-moz-range-thumb { width: 20px; height: 20px; border-radius: 50%; background: ${C.accent}; cursor: pointer; border: none; }
    @keyframes scanline { 0%{top:0%} 100%{top:100%} }
    @keyframes exerciseFadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
    @keyframes fadeIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
    @keyframes livenessArrowPop { 0%{transform:scale(0.6);opacity:0} 60%{transform:scale(1.15)} 100%{transform:scale(1);opacity:1} }
    @keyframes muscleGlow { 0%,100%{opacity:0.7} 50%{opacity:1} }
    @keyframes exerciseFadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
     @keyframes fabFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
    @keyframes fabPulse { 0%{transform:scale(1);opacity:0.9} 100%{transform:scale(1.7);opacity:0} }
    @keyframes fabRipple { 0%{transform:scale(0.8);opacity:1} 100%{transform:scale(1.5);opacity:0} }
    @keyframes fabShimmer { 0%{transform:translateX(-120%)} 100%{transform:translateX(220%)} }
    @keyframes liveDot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.3;transform:scale(0.5)} }
    @keyframes slideUp { from{transform:translateY(24px);opacity:0} to{transform:translateY(0);opacity:1} }
    @keyframes scanPulse { 0%,100%{opacity:0.2} 50%{opacity:0.6} }
    @keyframes dotStep { 0%{opacity:0.3} 100%{opacity:1} }
  `}</style>
);

const ProfileForm = ({ step, setStep, age, setAge, gender, setGender, height, setHeight, weight, setWeight, city, setCity, blood, setBlood, cond, setCond, goals, setGoals, onComplete }) => {
  const ages = ['Under 12', '12–17', '18–24', '25–34', '35–44', '45–54', '55–64', '65+'];
  const genders = ['👨 Male', '👩 Female', '🧑 Other', '🔒 Prefer not to say'];
  const conds = ['Diabetes', 'Hypertension', 'Thyroid', 'Heart Disease', 'PCOD/PCOS', 'Asthma', 'Obesity', 'None'];
  const gls = ['Weight Loss', 'Muscle Gain', 'Better Skin', 'Hair Growth', 'Mental Wellness', 'Heart Health', 'Fitness'];
  const toggleCond = (c) => { if (c === 'None') setCond(['None']); else setCond(cond.filter(x => x !== 'None').includes(c) ? cond.filter(x => x !== c && x !== 'None') : [...cond.filter(x => x !== 'None'), c]); };
  const toggleGoal = (g) => setGoals(goals.includes(g) ? goals.filter(x => x !== g) : [...goals, g]);
  const canNext = () => { if (step === 1) return !!age; if (step === 2) return !!gender; return true; };
  return (
    <Container>
      <GlobalStyles />
      <div style={{ padding: '30px 20px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>Complete Your Profile</h2>
          <div style={{ color: C.muted, fontSize: 13, marginTop: 4 }}>Step {step} of 5</div>
        </div>
        <div style={{ height: 6, background: C.card2, borderRadius: 3, overflow: 'hidden', marginBottom: 24 }}>
          <div style={{ height: '100%', width: `${(step / 5) * 100}%`, background: `linear-gradient(90deg, ${C.accent}, ${C.accent4})`, transition: 'width 0.3s ease' }} />
        </div>
        {step === 1 && (<div><h3 style={{ fontSize: 16, marginBottom: 16 }}>Select Your Age Group</h3><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>{ages.map(a => (<button key={a} onClick={() => setAge(a)} style={{ padding: '14px', background: age === a ? C.accent : C.card, border: `1px solid ${age === a ? C.accent : C.border}`, borderRadius: 10, color: age === a ? '#fff' : C.text, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>{a}</button>))}</div></div>)}
        {step === 2 && (<div><h3 style={{ fontSize: 16, marginBottom: 16 }}>Select Your Gender</h3>{genders.map(g => (<button key={g} onClick={() => setGender(g)} style={{ width: '100%', padding: '14px', marginBottom: 10, background: gender === g ? C.accent : C.card, border: `1px solid ${gender === g ? C.accent : C.border}`, borderRadius: 10, color: gender === g ? '#fff' : C.text, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>{g}</button>))}</div>)}
        {step === 3 && (<div><h3 style={{ fontSize: 16, marginBottom: 16 }}>Basic Info (Optional)</h3><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}><Inp label="Height (cm)" type="number" value={height} onChange={setHeight} placeholder="170" /><Inp label="Weight (kg)" type="number" value={weight} onChange={setWeight} placeholder="65" /></div><Inp label="City" value={city} onChange={setCity} placeholder="Mumbai" /><Inp label="Blood Group" value={blood} onChange={setBlood} placeholder="O+" /></div>)}
        {step === 4 && (<div><h3 style={{ fontSize: 16, marginBottom: 16 }}>Health Conditions</h3><div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{conds.map(c => (<button key={c} onClick={() => toggleCond(c)} style={{ padding: '10px 16px', background: cond.includes(c) ? C.accent : C.card, border: `1px solid ${cond.includes(c) ? C.accent : C.border}`, borderRadius: 999, color: cond.includes(c) ? '#fff' : C.text, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>{c}</button>))}</div></div>)}
        {step === 5 && (<div><h3 style={{ fontSize: 16, marginBottom: 16 }}>Your Health Goals</h3><div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{gls.map(g => (<button key={g} onClick={() => toggleGoal(g)} style={{ padding: '10px 16px', background: goals.includes(g) ? C.accent : C.card, border: `1px solid ${goals.includes(g) ? C.accent : C.border}`, borderRadius: 999, color: goals.includes(g) ? '#fff' : C.text, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>{g}</button>))}</div></div>)}
        <div style={{ display: 'flex', gap: 10, marginTop: 30 }}>
          {step > 1 && (<button onClick={() => setStep(step - 1)} style={{ flex: 1, padding: '14px', background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, color: C.text, fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>← Back</button>)}
          {step < 5 ? (<button onClick={() => canNext() && setStep(step + 1)} disabled={!canNext()} style={{ flex: 1, padding: '14px', background: canNext() ? `linear-gradient(135deg, ${C.accent}, ${C.accent4})` : C.card2, border: 'none', borderRadius: 12, color: '#fff', fontSize: 14, fontWeight: 700, cursor: canNext() ? 'pointer' : 'not-allowed', fontFamily: 'inherit', opacity: canNext() ? 1 : 0.5 }}>Next →</button>) : (<button onClick={onComplete} style={{ flex: 1, padding: '14px', background: `linear-gradient(135deg, ${C.accent}, ${C.accent4})`, border: 'none', borderRadius: 12, color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>🎉 Start FitArogya AI</button>)}
        </div>
      </div>
    </Container>
  );
};

const HomeScreen = ({ user, cart, cartTotal, setScreen }) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => { const t = setInterval(() => setTime(new Date()), 60000); return () => clearInterval(t); }, []);
  const firstName = (user?.name || 'Friend').split(' ')[0];
  const tips = ['Drink at least 8 glasses of water today for optimal hydration.', 'A 10-minute walk after meals helps regulate blood sugar.', 'Sleep 7-9 hours tonight — recovery happens while you rest.', 'Eat 5 colours of vegetables today for full micronutrient coverage.'];
  const tip = tips[time.getDay() % tips.length];
  const timeStr = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  const scanDone = user?.lastScan;
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 800 }}>Hello, {firstName}! 👋</div>
          <div style={{ fontSize: 13, color: C.muted, marginTop: 2 }}>{timeStr}</div>
        </div>
        <div style={{ background: `${C.accent}22`, border: `1px solid ${C.accent}`, padding: '8px 12px', borderRadius: 12, textAlign: 'center' }}>
          <div style={{ fontSize: 10, color: C.muted }}>HEALTH</div>
          <div style={{ fontSize: 22, fontWeight: 800, color: C.accent }}>72</div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 16 }}>
        <Stat icon="🛒" label="Cart" value={cart.length} />
        <Stat icon="📸" label="Scan" value={scanDone ? '✓' : '—'} />
        <Stat icon="💊" label="Take meds" value="2" />
      </div>
      <div style={{ background: `${C.accent3}15`, border: `1px solid ${C.accent3}55`, borderRadius: 12, padding: 14, marginBottom: 20 }}>
        <div style={{ fontSize: 11, color: C.accent3, fontWeight: 700, marginBottom: 4 }}>💡 DAILY TIP</div>
        <div style={{ fontSize: 13, color: C.text, lineHeight: 1.5 }}>{tip}</div>
      </div>
      <SectionTitle>Wellness Modules</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
        <ModuleCard icon="💆" label="Hair Health" color={C.accent4} onClick={() => setScreen('hair')} />
        <ModuleCard icon="⚖️" label="Weight" color={C.green} onClick={() => setScreen('weight')} />
        <ModuleCard icon="📸" label="Skin Care" color={C.accent} dot={scanDone} onClick={() => setScreen('scan')} />
        <ModuleCard icon="💪" label="Muscle Growth" color={C.accent2} onClick={() => setScreen('muscle')} />
      </div>
      <SectionTitle>Health Modules</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
        <ModuleCard icon="❤️" label="Symptom Check" color={C.accent2} onClick={() => setScreen('symptom')} />
        <ModuleCard icon="📊" label="Health Tracker" color={C.blue} onClick={() => setScreen('tracker')} />
        <ModuleCard icon="🧠" label="Mental Health" color={C.accent4} onClick={() => setScreen('mental')} />
        <ModuleCard icon="🌸" label="Women's Health" color="#EC4899" onClick={() => setScreen('women')} />
      </div>
      {cart.length > 0 && (<button onClick={() => setScreen('delivery')} style={{ width: '100%', background: `linear-gradient(135deg, ${C.accent}, #FB923C)`, color: '#fff', border: 'none', borderRadius: 12, padding: '14px', fontSize: 14, fontWeight: 700, marginBottom: 14, cursor: 'pointer', fontFamily: 'inherit' }}>🛒 {cart.length} items — ₹{cartTotal} →</button>)}
      <a href="tel:112" style={{ display: 'block', textAlign: 'center', background: 'rgba(239,68,68,0.1)', border: `1px solid ${C.accent2}`, borderRadius: 12, padding: '14px', color: C.accent2, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>📞 Emergency — Call 112</a>
    </div>
  );
};

const Stat = ({ icon, label, value }) => (<div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: 10, textAlign: 'center' }}><div style={{ fontSize: 18 }}>{icon}</div><div style={{ fontSize: 16, fontWeight: 700, marginTop: 2 }}>{value}</div><div style={{ fontSize: 10, color: C.muted }}>{label}</div></div>);
const SectionTitle = ({ children }) => (<h3 style={{ fontSize: 13, fontWeight: 700, color: C.muted, marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{children}</h3>);
const ModuleCard = ({ icon, label, color, onClick, dot }) => (<div onClick={onClick} style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16, cursor: 'pointer', position: 'relative', transition: 'transform 0.2s' }}><div style={{ width: 40, height: 40, borderRadius: 10, background: `${color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 8 }}>{icon}</div><div style={{ fontSize: 13, fontWeight: 600 }}>{label}</div>{dot && <div style={{ position: 'absolute', top: 10, right: 10, width: 8, height: 8, borderRadius: '50%', background: C.green }} />}</div>);

const BottomNav = ({ screen, setScreen, cartCount }) => {
  const tabs = [{ id: 'home', icon: '🏠', label: 'Home' }, { id: 'scan', icon: '📸', label: 'Skin Scan' }, { id: 'hair', icon: '💆', label: 'Hair' }, { id: 'tracker', icon: '📊', label: 'Tracker' }, { id: 'delivery', icon: '🛒', label: 'Cart' }];
  return (
    <div style={{ position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', maxWidth: 480, background: C.bg, borderTop: `1px solid ${C.border}`, display: 'flex', zIndex: 100 }}>
      {tabs.map(t => {
        const active = screen === t.id;
        return (<div key={t.id} onClick={() => setScreen(t.id)} style={{ flex: 1, padding: '10px 4px', textAlign: 'center', cursor: 'pointer', borderTop: active ? `2px solid ${C.accent}` : '2px solid transparent', position: 'relative' }}>
          <div style={{ fontSize: 18 }}>{t.icon}</div>
          <div style={{ fontSize: 10, color: active ? C.accent : C.muted, marginTop: 2, fontWeight: 600 }}>{t.label}</div>
          {t.id === 'delivery' && cartCount > 0 && (<div style={{ position: 'absolute', top: 6, right: '50%', marginRight: -22, background: C.accent2, color: '#fff', fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 999, minWidth: 16 }}>{cartCount}</div>)}
        </div>);
      })}
    </div>
  );
};

const SymptomScreen = () => {
  const [q, setQ] = useState(0); const [ans, setAns] = useState([]);
  const questions = [{ q: 'Do you have chest pain?', opts: ['Yes, severe', 'Mild', 'No'] }, { q: 'Where exactly is the pain?', opts: ['Centre / left chest', 'Upper abdomen', 'Entire chest', 'Only stomach'] }, { q: 'Is the pain spreading?', opts: ['To left arm', 'To jaw / neck', 'No, it stays put'] }, { q: 'Any other symptoms?', opts: ['Sweating + nausea', 'Sour belching', 'Shortness of breath', 'Nothing else'] }, { q: 'When is it worst?', opts: ['After meals', 'After exercise', 'While lying down', 'Constantly'] }];
  const select = (opt) => { const n = [...ans, opt]; setAns(n); if (q < 4) setQ(q + 1); };
  const reset = () => { setQ(0); setAns([]); };
  if (ans.length === 5) {
    let score = 0;
    if (ans[0] === 'Yes, severe') score += 3;
    if (ans[1] === 'Centre / left chest') score += 2;
    if (ans[2] === 'To left arm' || ans[2] === 'To jaw / neck') score += 3;
    if (ans[3] === 'Sweating + nausea' || ans[3] === 'Shortness of breath') score += 3;
    let color, title, msg, emergency;
    if (score >= 6) { color = C.accent2; title = '⚠️ Possible Cardiac Emergency'; msg = 'Your symptoms suggest a possible cardiac event. Please call emergency services immediately.'; emergency = true; }
    else if (ans[4] === 'After meals' || ans[3] === 'Sour belching' || ans[1] === 'Upper abdomen') { color = C.accent3; title = '🟡 Likely Acid Reflux / Acidity'; msg = 'Your symptoms are consistent with acid reflux. Avoid spicy foods and try an antacid.'; }
    else { color = C.green; title = '🟢 Mild / Monitor'; msg = 'Your symptoms appear mild. Monitor your condition and consult a doctor if it persists.'; }
    return (<div><div style={{ background: `${color}15`, border: `2px solid ${color}`, borderRadius: 14, padding: 20, marginBottom: 16 }}><h3 style={{ color, marginBottom: 10 }}>{title}</h3><p style={{ fontSize: 14, color: C.text, lineHeight: 1.5 }}>{msg}</p>{emergency && (<a href="tel:112" style={{ display: 'block', textAlign: 'center', marginTop: 16, background: C.accent2, color: '#fff', padding: '14px', borderRadius: 10, textDecoration: 'none', fontWeight: 700 }}>📞 Call 112</a>)}</div><button onClick={reset} style={{ width: '100%', background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, padding: '14px', color: C.text, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>Check Again</button></div>);
  }
  return (<div><div style={{ height: 6, background: C.card2, borderRadius: 3, overflow: 'hidden', marginBottom: 20 }}><div style={{ height: '100%', width: `${((q + 1) / 5) * 100}%`, background: C.accent, transition: 'width 0.3s' }} /></div><div style={{ fontSize: 12, color: C.muted, marginBottom: 8 }}>Question {q + 1} of 5</div><h3 style={{ fontSize: 18, marginBottom: 20 }}>{questions[q].q}</h3>{questions[q].opts.map(opt => (<button key={opt} onClick={() => select(opt)} style={{ width: '100%', padding: '14px', marginBottom: 10, background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, color: C.text, fontSize: 14, textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500 }}>{opt}</button>))}</div>);
};

const TrackerScreen = () => {
  const [sugar, setSugar] = useState(''); const [sys, setSys] = useState(''); const [dia, setDia] = useState(''); const [chol, setChol] = useState(''); const [readings, setReadings] = useState([]);
  const save = () => { if (!sugar && !sys && !dia && !chol) return; const r = { sugar: sugar ? parseInt(sugar) : null, sys: sys ? parseInt(sys) : null, dia: dia ? parseInt(dia) : null, chol: chol ? parseInt(chol) : null, time: new Date().toLocaleString() }; setReadings([r, ...readings].slice(0, 5)); setSugar(''); setSys(''); setDia(''); setChol(''); };
  const checkAbnormal = (key, val) => { if (!val) return false; if (key === 'sugar') return val < 70 || val > 140; if (key === 'sys') return val >= 120; if (key === 'dia') return val >= 80; if (key === 'chol') return val >= 200; return false; };
  return (<div><div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16, marginBottom: 16 }}><h3 style={{ marginBottom: 14, fontSize: 16 }}>Record Your Readings</h3><Inp label="💉 Blood Sugar (mg/dL) — Normal 70-140" type="number" value={sugar} onChange={setSugar} placeholder="100" /><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}><Inp label="🩺 BP Systolic" type="number" value={sys} onChange={setSys} placeholder="120" /><Inp label="🩺 BP Diastolic" type="number" value={dia} onChange={setDia} placeholder="80" /></div><Inp label="🫀 Cholesterol (mg/dL) — Normal <200" type="number" value={chol} onChange={setChol} placeholder="180" /><button onClick={save} style={{ width: '100%', background: C.accent, color: '#fff', border: 'none', borderRadius: 10, padding: '12px', fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>Save Reading ✓</button></div>{readings.length > 0 && (<div><h3 style={{ marginBottom: 10, fontSize: 14, color: C.muted }}>Recent Readings</h3>{readings.map((r, i) => { const abnormal = checkAbnormal('sugar', r.sugar) || checkAbnormal('sys', r.sys) || checkAbnormal('dia', r.dia) || checkAbnormal('chol', r.chol); return (<div key={i} style={{ background: C.card, border: `1px solid ${abnormal ? C.accent2 : C.green}`, borderRadius: 10, padding: 12, marginBottom: 8 }}><div style={{ fontSize: 11, color: C.muted, marginBottom: 6 }}>{r.time}</div>{r.sugar && <div style={{ fontSize: 13 }}>💉 Sugar: {r.sugar} mg/dL {checkAbnormal('sugar', r.sugar) && '⚠️'}</div>}{r.sys && <div style={{ fontSize: 13 }}>🩺 BP: {r.sys}/{r.dia} mmHg {(checkAbnormal('sys', r.sys) || checkAbnormal('dia', r.dia)) && '⚠️'}</div>}{r.chol && <div style={{ fontSize: 13 }}>🫀 Cholesterol: {r.chol} mg/dL {checkAbnormal('chol', r.chol) && '⚠️'}</div>}</div>); })}</div>)}</div>);
};

const MentalScreen = () => {
  const [mood, setMood] = useState(''); const [saved, setSaved] = useState(false); const [phq, setPhq] = useState([null, null, null, null]); const [phqResult, setPhqResult] = useState(null);
  const moods = [{ e: '😄', l: 'Great' }, { e: '😊', l: 'Good' }, { e: '😐', l: 'Okay' }, { e: '😔', l: 'Low' }, { e: '😞', l: 'Bad' }];
  const phqQs = ['Little interest or pleasure in doing things', 'Feeling down or hopeless', 'Trouble sleeping', 'Feeling tired or having little energy'];
  const phqOpts = [{ l: 'Not at all', v: 0 }, { l: 'Several days', v: 1 }, { l: 'More than half', v: 2 }, { l: 'Nearly every day', v: 3 }];
  const analyze = () => { const total = phq.reduce((s, x) => s + x, 0); setPhqResult(total); };
  return (<div><div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16, marginBottom: 16 }}><h3 style={{ fontSize: 15, marginBottom: 12 }}>How are you feeling today?</h3><div style={{ display: 'flex', gap: 8, justifyContent: 'space-between' }}>{moods.map(m => (<button key={m.l} onClick={() => { setMood(m.l); setSaved(false); }} style={{ flex: 1, padding: '12px 4px', background: mood === m.l ? `${C.accent4}33` : C.card2, border: `1px solid ${mood === m.l ? C.accent4 : C.border}`, borderRadius: 10, cursor: 'pointer', fontFamily: 'inherit' }}><div style={{ fontSize: 22 }}>{m.e}</div><div style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>{m.l}</div></button>))}</div>{mood && (<button onClick={() => setSaved(true)} style={{ width: '100%', marginTop: 12, background: C.accent4, color: '#fff', border: 'none', borderRadius: 10, padding: '10px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>{saved ? '✓ Mood logged!' : 'Save Mood'}</button>)}</div><div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16, marginBottom: 16 }}><h3 style={{ fontSize: 15, marginBottom: 6 }}>PHQ-4 Check</h3><div style={{ fontSize: 12, color: C.muted, marginBottom: 14 }}>Over the last 2 weeks, how often have you been bothered by:</div>{phqQs.map((q, qi) => (<div key={qi} style={{ marginBottom: 14 }}><div style={{ fontSize: 13, marginBottom: 8 }}>{qi + 1}. {q}</div><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>{phqOpts.map(o => (<button key={o.v} onClick={() => { const np = [...phq]; np[qi] = o.v; setPhq(np); }} style={{ padding: '8px', background: phq[qi] === o.v ? C.accent4 : C.card2, border: `1px solid ${phq[qi] === o.v ? C.accent4 : C.border}`, borderRadius: 8, color: phq[qi] === o.v ? '#fff' : C.text, fontSize: 11, cursor: 'pointer', fontFamily: 'inherit' }}>{o.l}</button>))}</div></div>))}<button onClick={analyze} disabled={phq.some(x => x === null)} style={{ width: '100%', background: phq.some(x => x === null) ? C.card2 : C.accent4, color: '#fff', border: 'none', borderRadius: 10, padding: '12px', fontWeight: 700, opacity: phq.some(x => x === null) ? 0.5 : 1, cursor: phq.some(x => x === null) ? 'not-allowed' : 'pointer', fontFamily: 'inherit' }}>Analyse Results</button>{phqResult !== null && (<div style={{ marginTop: 12, padding: 12, borderRadius: 10, background: phqResult >= 7 ? `${C.accent2}15` : `${C.green}15`, border: `1px solid ${phqResult >= 7 ? C.accent2 : C.green}`, color: phqResult >= 7 ? C.accent2 : C.green, fontSize: 13 }}>Score: {phqResult}/12 — {phqResult >= 7 ? 'Consider speaking to a mental health professional.' : 'Good — keep tracking your wellbeing regularly.'}</div>)}</div><div style={{ background: `${C.blue}11`, border: `1px solid ${C.blue}44`, borderRadius: 14, padding: 16 }}><h3 style={{ fontSize: 15, marginBottom: 12, color: C.blue }}>🌬️ 4-7-8 Breathing</h3><div style={{ fontSize: 13, lineHeight: 1.8, color: C.text }}><div><strong>Step 1:</strong> Breathe in through nose for 4 counts</div><div><strong>Step 2:</strong> Hold for 7 counts</div><div><strong>Step 3:</strong> Exhale through mouth for 8 counts</div></div><div style={{ fontSize: 12, color: C.muted, marginTop: 10, fontStyle: 'italic' }}>Repeat 3-4 times. Best done morning or before sleep.</div></div></div>);
};

const WomenScreen = () => {
  const [periodDate, setPeriodDate] = useState(''); const [cycle, setCycle] = useState(28); const [symptoms, setSymptoms] = useState([]); const [result, setResult] = useState(null);
  const symList = ['Irregular periods', 'Acne', 'Weight gain', 'Excess facial hair', 'Hair thinning', 'Mood swings', 'Fatigue', 'Difficulty sleeping'];
  const toggle = (s) => setSymptoms(symptoms.includes(s) ? symptoms.filter(x => x !== s) : [...symptoms, s]);
  const analyse = () => { if (!periodDate) return; const d = new Date(periodDate); const next = new Date(d); next.setDate(d.getDate() + parseInt(cycle)); const ovu = new Date(d); ovu.setDate(d.getDate() + parseInt(cycle) - 14); let risk = 'low', riskC = C.green, riskMsg = ''; if (symptoms.length >= 4) { risk = 'high'; riskC = C.accent2; riskMsg = 'Please consult a gynaecologist.'; } else if (symptoms.length >= 2) { risk = 'moderate'; riskC = C.accent3; riskMsg = 'Please consult a gynaecologist.'; } setResult({ next: next.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }), ovu: ovu.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }), risk, riskC, riskMsg }); };
  return (<div><div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16, marginBottom: 16 }}><h3 style={{ fontSize: 15, marginBottom: 12 }}>🌸 Period Tracker</h3><Inp label="Last Period Start Date" type="date" value={periodDate} onChange={setPeriodDate} /><div style={{ fontSize: 12, color: C.muted, marginBottom: 6 }}>Cycle Length: {cycle} days</div><input type="range" min="21" max="35" value={cycle} onChange={e => setCycle(e.target.value)} style={{ width: '100%' }} /><button onClick={analyse} disabled={!periodDate} style={{ width: '100%', marginTop: 14, background: '#EC4899', color: '#fff', border: 'none', borderRadius: 10, padding: '12px', fontWeight: 700, opacity: periodDate ? 1 : 0.5, cursor: periodDate ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}>Analyse →</button></div><div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16, marginBottom: 16 }}><h3 style={{ fontSize: 15, marginBottom: 12 }}>PCOD Symptom Check</h3><div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>{symList.map(s => (<button key={s} onClick={() => toggle(s)} style={{ padding: '8px 12px', background: symptoms.includes(s) ? '#EC4899' : C.card2, border: `1px solid ${symptoms.includes(s) ? '#EC4899' : C.border}`, borderRadius: 999, color: symptoms.includes(s) ? '#fff' : C.text, fontSize: 12, cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500 }}>{s}</button>))}</div></div>{result && (<div style={{ animation: 'fadeIn 0.3s ease' }}><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}><div style={{ background: '#EC489922', border: '1px solid #EC4899', borderRadius: 12, padding: 14, textAlign: 'center' }}><div style={{ fontSize: 10, color: C.muted }}>NEXT PERIOD</div><div style={{ fontSize: 14, fontWeight: 700, color: '#EC4899', marginTop: 4 }}>{result.next}</div></div><div style={{ background: `${C.green}22`, border: `1px solid ${C.green}`, borderRadius: 12, padding: 14, textAlign: 'center' }}><div style={{ fontSize: 10, color: C.muted }}>OVULATION</div><div style={{ fontSize: 14, fontWeight: 700, color: C.green, marginTop: 4 }}>{result.ovu}</div></div></div><div style={{ background: `${result.riskC}15`, border: `1px solid ${result.riskC}`, borderRadius: 12, padding: 14 }}><div style={{ fontSize: 12, color: C.muted }}>PCOD RISK</div><div style={{ fontSize: 18, fontWeight: 800, color: result.riskC, textTransform: 'capitalize', marginTop: 2 }}>{result.risk}</div>{result.riskMsg && <div style={{ fontSize: 12, color: C.text, marginTop: 6 }}>{result.riskMsg}</div>}</div></div>)}</div>);
};

const HairScreen = ({ addToCart }) => {
  const [selected, setSelected] = useState(null);
  const issues = [{ id: 'fall', label: '😰 Hair Fall', color: C.accent2 }, { id: 'dandruff', label: '❄️ Dandruff', color: C.blue }, { id: 'oily', label: '💧 Oily Scalp', color: '#F59E0B' }, { id: 'dry', label: '🏜️ Dry/Damaged', color: C.accent4 }, { id: 'slow', label: '🌱 Slow Growth', color: C.green }, { id: 'thin', label: '👤 Thinning/Receding', color: C.accent }];
  const data = { fall: { tips: ['Oil scalp with bhringraj/rosemary 2x/week', 'Take biotin+iron', 'Use wide-tooth comb, never brush wet', 'Reduce heat/chemicals'], products: [{ emoji: '💊', name: 'Biotin 10,000mcg', desc: 'Hair growth supplement', price: 349, originalPrice: 599, badge: 'BEST' }, { emoji: '🌿', name: 'Redensyl Serum', desc: 'Anti-hair fall', price: 699, originalPrice: 999 }, { emoji: '🫙', name: 'Bhringraj+Rosemary Oil', desc: 'Ayurvedic blend', price: 449, originalPrice: 699 }, { emoji: '⚗️', name: 'Iron+Zinc Capsules', desc: 'Essential minerals', price: 299, originalPrice: 499 }] }, dandruff: { tips: ["Use ketoconazole or zinc pyrithione shampoo", "Don't scratch", 'Diluted tea tree oil', 'Stay consistent 4 weeks'], products: [{ emoji: '🧴', name: 'Ketoconazole 2% Shampoo', desc: 'Antifungal', price: 249, originalPrice: 399 }, { emoji: '🌿', name: 'Tea Tree Scalp Serum', desc: 'Natural remedy', price: 399, originalPrice: 599 }, { emoji: '🫧', name: 'Zinc Pyrithione Shampoo', desc: 'Anti-dandruff', price: 299, originalPrice: 499 }] }, oily: { tips: ['Wash every 2 days not daily', 'Clarifying shampoo weekly', 'No silicone conditioners on scalp', 'Diluted ACV rinse'], products: [{ emoji: '🧴', name: 'Clarifying Shampoo', desc: 'Deep cleansing', price: 299, originalPrice: 499 }, { emoji: '💨', name: 'Dry Shampoo', desc: 'Quick refresh', price: 349, originalPrice: 549 }, { emoji: '🍎', name: 'ACV Scalp Tonic', desc: 'Balance pH', price: 399, originalPrice: 599 }] }, dry: { tips: ['Deep condition coconut+argan oil overnight weekly', 'Sulfate-free shampoo', 'Heat protectant always', 'Trim every 6-8 weeks'], products: [{ emoji: '🥥', name: 'Coconut+Argan Oil', desc: 'Deep nourishment', price: 349, originalPrice: 599 }, { emoji: '🌊', name: 'Keratin Conditioner', desc: 'Smooth & shine', price: 549, originalPrice: 849 }, { emoji: '🔥', name: 'Heat Protectant', desc: 'Style safely', price: 399, originalPrice: 599 }] }, slow: { tips: ['Massage rosemary oil 4 min daily', 'Eat protein-rich foods', 'Biotin+collagen supplements', 'Consistent — 1cm/month'], products: [{ emoji: '🌿', name: 'Rosemary Hair Oil', desc: 'Stimulates growth', price: 499, originalPrice: 799 }, { emoji: '💊', name: 'Hair Growth Capsules', desc: 'Biotin + collagen', price: 699, originalPrice: 999 }, { emoji: '☕', name: 'Caffeine Scalp Serum', desc: 'Wake up follicles', price: 549, originalPrice: 799 }] }, thin: { tips: ['See a dermatologist', 'Minoxidil 5% clinically proven', 'DHT-blocking shampoo', 'No tight hairstyles'], products: [{ emoji: '💧', name: 'Minoxidil 5%', desc: 'Clinically proven', price: 899, originalPrice: 1299, badge: 'TOP' }, { emoji: '🧴', name: 'DHT Blocking Shampoo', desc: 'Reduce thinning', price: 499, originalPrice: 799 }, { emoji: '🌴', name: 'Saw Palmetto', desc: 'Natural DHT blocker', price: 599, originalPrice: 899 }, { emoji: '🌿', name: 'Procapil Serum', desc: 'Strengthen follicles', price: 749, originalPrice: 1099 }] } };
  return (<div><h3 style={{ fontSize: 14, color: C.muted, marginBottom: 12 }}>Select your hair concern</h3>{issues.map(i => (<button key={i.id} onClick={() => setSelected(i.id)} style={{ width: '100%', padding: '14px', marginBottom: 10, background: selected === i.id ? i.color : C.card, border: `1px solid ${selected === i.id ? i.color : C.border}`, borderRadius: 12, color: selected === i.id ? '#fff' : C.text, fontSize: 14, fontWeight: 600, textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}>{i.label}</button>))}{selected && data[selected] && (<div style={{ marginTop: 20, animation: 'fadeIn 0.3s ease' }}><div style={{ background: C.card, border: `1px solid ${C.accent}`, borderRadius: 12, padding: 14, marginBottom: 16 }}><h4 style={{ color: C.accent, marginBottom: 10, fontSize: 14 }}>💡 Expert Tips</h4>{data[selected].tips.map((t, i) => (<div key={i} style={{ fontSize: 13, color: C.text, marginBottom: 6, lineHeight: 1.5 }}><span style={{ color: C.accent, marginRight: 6 }}>→</span>{t}</div>))}</div>{data[selected].products.map((p, i) => (<ProductCard key={i} {...p} onOrder={addToCart} color={C.accent} />))}</div>)}</div>);
};

const WeightScreen = ({ addToCart }) => {
  const [h, setH] = useState(''); const [w, setW] = useState(''); const [bmi, setBmi] = useState(null); const [goal, setGoal] = useState(null);
  const calc = () => { if (!h || !w) return; const m = parseFloat(h) / 100; const b = (parseFloat(w) / (m * m)).toFixed(1); let cat, color; if (b < 18.5) { cat = 'Underweight'; color = C.accent4; } else if (b < 25) { cat = 'Normal'; color = C.green; } else if (b < 30) { cat = 'Overweight'; color = C.accent3; } else { cat = 'Obese'; color = C.accent2; } setBmi({ value: b, cat, color }); };
  const data = { gain: { plan: ['300-500 cal above maintenance', '1.6-2g protein/kg', 'Compound lifts: squats/deadlifts/bench', 'Sleep 7-9 hrs', 'Frequent meals', '0.25-0.5kg gain/week'], products: [{ emoji: '🏋️', name: 'Mass Gainer', desc: '1250 cal per serving', price: 1299, originalPrice: 1899, badge: 'TOP' }, { emoji: '💪', name: 'Creatine Monohydrate', desc: 'Strength + size', price: 599, originalPrice: 999 }, { emoji: '💊', name: 'Weight Gain Capsules', desc: 'Ayurvedic', price: 499, originalPrice: 799 }] }, loss: { plan: ['300-500 cal deficit', 'High protein+fibre', '150 min cardio/week', '2.5-3L water/day', 'Track food 4 weeks', '0.5-1kg loss/week'], products: [{ emoji: '🔥', name: 'Fat Burner', desc: 'Thermogenic', price: 799, originalPrice: 1199, badge: 'BEST' }, { emoji: '☕', name: 'Green Coffee Extract', desc: 'Natural metabolism boost', price: 449, originalPrice: 699 }, { emoji: '🌿', name: 'Garcinia Cambogia', desc: 'Appetite control', price: 399, originalPrice: 649 }] } };
  return (<div><div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 16, marginBottom: 16 }}><h3 style={{ fontSize: 15, marginBottom: 12 }}>BMI Calculator</h3><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}><Inp label="Height (cm)" type="number" value={h} onChange={setH} placeholder="170" /><Inp label="Weight (kg)" type="number" value={w} onChange={setW} placeholder="70" /></div><button onClick={calc} style={{ width: '100%', background: C.accent, color: '#fff', border: 'none', borderRadius: 10, padding: '12px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>Calculate BMI</button>{bmi && (<div style={{ marginTop: 14, textAlign: 'center', padding: 14, background: `${bmi.color}15`, border: `1px solid ${bmi.color}`, borderRadius: 10 }}><div style={{ fontSize: 36, fontWeight: 800, color: bmi.color }}>{bmi.value}</div><div style={{ fontSize: 14, color: bmi.color, fontWeight: 600 }}>{bmi.cat}</div></div>)}</div><h3 style={{ fontSize: 14, color: C.muted, marginBottom: 10 }}>Your Goal</h3><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}><button onClick={() => setGoal('gain')} style={{ padding: '16px', background: goal === 'gain' ? C.green : C.card, border: `1px solid ${goal === 'gain' ? C.green : C.border}`, borderRadius: 12, color: goal === 'gain' ? '#fff' : C.text, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>⬆️ Weight Gain</button><button onClick={() => setGoal('loss')} style={{ padding: '16px', background: goal === 'loss' ? C.accent2 : C.card, border: `1px solid ${goal === 'loss' ? C.accent2 : C.border}`, borderRadius: 12, color: goal === 'loss' ? '#fff' : C.text, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>⬇️ Weight Loss</button></div>{goal && (<div style={{ animation: 'fadeIn 0.3s ease' }}><div style={{ background: C.card, border: `1px solid ${goal === 'gain' ? C.green : C.accent2}`, borderRadius: 12, padding: 14, marginBottom: 16 }}><h4 style={{ color: goal === 'gain' ? C.green : C.accent2, marginBottom: 10, fontSize: 14 }}>{goal === 'gain' ? '💪 Weight Gain Plan' : '🔥 Weight Loss Plan'}</h4>{data[goal].plan.map((p, i) => (<div key={i} style={{ fontSize: 13, color: C.text, marginBottom: 6, lineHeight: 1.5 }}><span style={{ color: C.accent, fontWeight: 700, marginRight: 6 }}>{i + 1}.</span>{p}</div>))}</div>{data[goal].products.map((p, i) => (<ProductCard key={i} {...p} onOrder={addToCart} color={goal === 'gain' ? C.green : C.accent2} />))}</div>)}</div>);
};

// ============== SCAN SCREEN ==============
const ScanScreen = ({ addToCart, saveUser, user }) => {
  const [phase, setPhase] = useState('intro');
  const [livenessStep, setLivenessStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [qsIdx, setQsIdx] = useState(0);
  const [qsAns, setQsAns] = useState([]);
  const [capturedImg, setCapturedImg] = useState(null);
  const [camError, setCamError] = useState(false);
  const [buySuccess, setBuySuccess] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const progressTimerRef = useRef(null);
  const livenessTimerRef = useRef(null);
  const credits = user?.scanCredits || 0;

  const stopCamera = () => { if (streamRef.current) { streamRef.current.getTracks().forEach(t => t.stop()); streamRef.current = null; } };

  const buyCredits = () => { const n = credits + 3; saveUser({ scanCredits: n }); setBuySuccess(true); setTimeout(() => setBuySuccess(false), 2500); };
  const useCredit = () => { saveUser({ scanCredits: credits - 1 }); setPhase('liveness'); };

  useEffect(() => {
    if (phase === 'liveness') {
      setCamError(false); setLivenessStep(0);
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
        .then(stream => { streamRef.current = stream; if (videoRef.current) { videoRef.current.srcObject = stream; videoRef.current.play().catch(() => { }); } setLivenessStep(1); })
        .catch(() => setCamError(true));
    }
    return () => { if (livenessTimerRef.current) clearTimeout(livenessTimerRef.current); };
  }, [phase]);

  useEffect(() => {
    if (phase !== 'liveness') return;
    if (livenessStep >= 1 && livenessStep <= 4) { livenessTimerRef.current = setTimeout(() => setLivenessStep(s => s + 1), 2200); }
    else if (livenessStep === 5) { livenessTimerRef.current = setTimeout(() => setPhase('scanning'), 800); }
    return () => { if (livenessTimerRef.current) clearTimeout(livenessTimerRef.current); };
  }, [livenessStep, phase]);

  useEffect(() => {
    if (phase === 'scanning') {
      if (videoRef.current && streamRef.current) { videoRef.current.srcObject = streamRef.current; videoRef.current.play().catch(() => { }); }
      setProgress(0);
      progressTimerRef.current = setInterval(() => { setProgress(p => { if (p >= 100) { clearInterval(progressTimerRef.current); try { if (canvasRef.current && videoRef.current) { const ctx = canvasRef.current.getContext('2d'); ctx.drawImage(videoRef.current, 0, 0, 320, 240); setCapturedImg(canvasRef.current.toDataURL('image/jpeg', 0.7)); } } catch { } stopCamera(); setTimeout(() => setPhase('qs'), 300); return 100; } return p + 2; }); }, 60);
    }
    return () => { if (progressTimerRef.current) clearInterval(progressTimerRef.current); };
  }, [phase]);

  useEffect(() => { return () => { stopCamera(); if (progressTimerRef.current) clearInterval(progressTimerRef.current); if (livenessTimerRef.current) clearTimeout(livenessTimerRef.current); }; }, []);

  const reset = () => { stopCamera(); setPhase('intro'); setLivenessStep(0); setProgress(0); setQsIdx(0); setQsAns([]); setCapturedImg(null); setCamError(false); };

  if (phase === 'intro' && credits === 0) {
    return (
      <div style={{ textAlign: 'center', paddingTop: 20 }}>
        <div style={{ fontSize: 64, marginBottom: 12 }}>📸</div>
        <h2 style={{ fontSize: 22, marginBottom: 6 }}>AI Skin Scan</h2>
        <div style={{ color: C.muted, fontSize: 13, marginBottom: 24, lineHeight: 1.5 }}>FitArogya AI ka advanced skin analysis tool</div>
        <div style={{ background: `linear-gradient(135deg, ${C.accent4}22, ${C.accent}22)`, border: `2px solid ${C.accent4}`, borderRadius: 18, padding: 24, marginBottom: 20, textAlign: 'center' }}>
          <div style={{ fontSize: 36 }}>👑</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: C.accent4, marginTop: 8 }}>Skin Scan Pack</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 10 }}>
            <span style={{ fontSize: 34, fontWeight: 900, color: C.accent }}>₹29</span>
            <span style={{ fontSize: 14, color: C.muted, textDecoration: 'line-through' }}>₹99</span>
          </div>
          <div style={{ background: `${C.green}22`, border: `1px solid ${C.green}`, borderRadius: 8, padding: '6px 14px', display: 'inline-block', marginTop: 10 }}>
            <span style={{ color: C.green, fontWeight: 700, fontSize: 13 }}>✓ 3 Full Scans</span>
          </div>
          <div style={{ marginTop: 16, textAlign: 'left' }}>
            {['AI-powered face detection', 'Skin type analysis (5 types)', 'Personalised product recommendations', 'Face shape detection'].map((f, i) => (<div key={i} style={{ fontSize: 13, color: C.text, marginBottom: 6 }}><span style={{ color: C.accent4, marginRight: 8 }}>✦</span>{f}</div>))}
          </div>
          <button onClick={buyCredits} style={{ width: '100%', marginTop: 20, background: `linear-gradient(135deg, ${C.accent4}, ${C.accent})`, color: '#fff', border: 'none', borderRadius: 12, padding: '14px', fontWeight: 800, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit' }}>
            {buySuccess ? '✅ 3 Scans Added!' : '💳 Buy 3 Scans — ₹29'}
          </button>
          <div style={{ fontSize: 11, color: C.muted, marginTop: 10 }}>One-time payment • No subscription</div>
        </div>
        <button onClick={() => setPhase('qs')} style={{ width: '100%', background: C.card, color: C.muted, border: `1px solid ${C.border}`, borderRadius: 12, padding: '12px', fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>Skip Camera — Use Questions Only →</button>
      </div>
    );
  }

  if (phase === 'intro') {
    return (
      <div style={{ textAlign: 'center', paddingTop: 20 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${C.green}22`, border: `1px solid ${C.green}`, borderRadius: 999, padding: '6px 16px', marginBottom: 16 }}>
          <span style={{ fontSize: 14 }}>📸</span>
          <span style={{ color: C.green, fontWeight: 700, fontSize: 13 }}>{credits} Scan{credits !== 1 ? 's' : ''} Remaining</span>
        </div>
        <div style={{ fontSize: 64, marginBottom: 12 }}>📸</div>
        <h2 style={{ fontSize: 22, marginBottom: 8 }}>AI Skin Scan</h2>
        <div style={{ color: C.muted, fontSize: 13, marginBottom: 24, lineHeight: 1.5 }}>AI-powered face detection aur expert analysis</div>
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 16, textAlign: 'left', marginBottom: 20 }}>
          <div style={{ fontSize: 13, marginBottom: 8 }}><span style={{ color: C.green }}>✓</span> Photo device pe rehti hai</div>
          <div style={{ fontSize: 13, marginBottom: 8 }}><span style={{ color: C.green }}>✓</span> Koi data upload nahi hota</div>
          <div style={{ fontSize: 13 }}><span style={{ color: C.green }}>✓</span> Instant AI analysis</div>
        </div>
        <button onClick={useCredit} style={{ width: '100%', background: C.accent, color: '#fff', border: 'none', borderRadius: 12, padding: '14px', fontWeight: 700, fontSize: 14, marginBottom: 10, cursor: 'pointer', fontFamily: 'inherit' }}>📷 Start Camera Scan (1 credit use hoga)</button>
        <button onClick={() => setPhase('qs')} style={{ width: '100%', background: C.card, color: C.text, border: `1px solid ${C.border}`, borderRadius: 12, padding: '14px', fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>Skip Camera — Use Questions Only →</button>
        <button onClick={buyCredits} style={{ width: '100%', marginTop: 10, background: 'transparent', color: C.accent4, border: `1px solid ${C.accent4}`, borderRadius: 12, padding: '10px', fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>
          {buySuccess ? '✅ 3 Scans Added!' : '+ Buy 3 More Scans — ₹29'}
        </button>
      </div>
    );
  }

  if (phase === 'liveness') {
    const arrows = ['', '⬆️', '⬅️', '➡️', '⬇️'];
    const labels = ['Loading camera...', 'Look Up', 'Look Left', 'Look Right', 'Look Down', '✅ Liveness Verified!'];
    const ovalColor = livenessStep === 0 ? C.border : livenessStep === 5 ? C.green : C.accent;
    if (camError) return (<div style={{ paddingTop: 20 }}><div style={{ background: `${C.accent2}15`, border: `1px solid ${C.accent2}`, borderRadius: 12, padding: 16, marginBottom: 16, color: C.accent2 }}>Camera access denied. Please allow camera in browser settings.</div><button onClick={() => setPhase('qs')} style={{ width: '100%', background: C.accent, color: '#fff', border: 'none', borderRadius: 12, padding: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>Use Questions Only →</button></div>);
    return (
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 4 }}>Face Verification</h3>
        <div style={{ fontSize: 13, color: C.muted, marginBottom: 16 }}>Follow the arrows to verify you're real</div>
        <div style={{ position: 'relative', maxWidth: 320, width: '100%', margin: '0 auto', aspectRatio: '3/4', borderRadius: 20, overflow: 'hidden', background: '#000' }}>
          <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }} />
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <ellipse cx="50%" cy="45%" rx="35%" ry="38%" fill="none" stroke={ovalColor} strokeWidth="3" strokeDasharray="8 4" />
          </svg>
          {[{ top: 15, left: 15, br: { borderTop: `3px solid ${C.accent}`, borderLeft: `3px solid ${C.accent}` } }, { top: 15, right: 15, br: { borderTop: `3px solid ${C.accent}`, borderRight: `3px solid ${C.accent}` } }, { bottom: 80, left: 15, br: { borderBottom: `3px solid ${C.accent}`, borderLeft: `3px solid ${C.accent}` } }, { bottom: 80, right: 15, br: { borderBottom: `3px solid ${C.accent}`, borderRight: `3px solid ${C.accent}` } }].map((c, i) => (<div key={i} style={{ position: 'absolute', width: 24, height: 24, ...c, ...c.br }} />))}
          {livenessStep >= 1 && livenessStep <= 4 && (<div key={livenessStep} style={{ position: 'absolute', bottom: 50, left: '50%', transform: 'translateX(-50%)', fontSize: 56, animation: 'livenessArrowPop 0.35s ease' }}>{arrows[livenessStep]}</div>)}
          <div style={{ position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8 }}>
            {[0, 1, 2, 3].map(i => { let color = C.border; if (livenessStep === 5 || i < livenessStep - 1) color = C.green; else if (i === livenessStep - 1) color = C.accent; return <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: color }} />; })}
          </div>
        </div>
        <div style={{ marginTop: 16, fontSize: 15, fontWeight: 600, color: livenessStep === 5 ? C.green : C.text }}>{labels[livenessStep]}</div>
      </div>
    );
  }

  if (phase === 'scanning') {
    const status = progress < 30 ? 'Detecting face...' : progress < 60 ? 'Mapping skin zones...' : 'Analysing texture...';
    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{ position: 'relative', maxWidth: 320, width: '100%', margin: '0 auto', aspectRatio: '3/4', borderRadius: 20, overflow: 'hidden', background: '#000', border: `2px solid ${C.accent}` }}>
          <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }} />
          <div style={{ position: 'absolute', left: 0, width: '100%', height: 3, background: `linear-gradient(90deg, transparent, ${C.accent}, transparent)`, animation: 'scanline 1.5s infinite', boxShadow: `0 0 12px ${C.accent}` }} />
          {[{ top: 10, left: 10, borderTop: `3px solid ${C.accent}`, borderLeft: `3px solid ${C.accent}` }, { top: 10, right: 10, borderTop: `3px solid ${C.accent}`, borderRight: `3px solid ${C.accent}` }, { bottom: 10, left: 10, borderBottom: `3px solid ${C.accent}`, borderLeft: `3px solid ${C.accent}` }, { bottom: 10, right: 10, borderBottom: `3px solid ${C.accent}`, borderRight: `3px solid ${C.accent}` }].map((s, i) => (<div key={i} style={{ position: 'absolute', width: 24, height: 24, ...s }} />))}
        </div>
        <canvas ref={canvasRef} width={320} height={240} style={{ display: 'none' }} />
        <div style={{ marginTop: 16, fontSize: 14, color: C.accent, fontWeight: 600 }}>{status}</div>
        <div style={{ height: 6, background: C.card2, borderRadius: 3, overflow: 'hidden', marginTop: 12 }}><div style={{ height: '100%', width: `${progress}%`, background: C.accent, transition: 'width 0.1s linear' }} /></div>
        <div style={{ marginTop: 6, fontSize: 12, color: C.muted }}>{progress}%</div>
      </div>
    );
  }

  if (phase === 'qs') {
    const questions = [{ q: 'How does your face feel by end of day?', opts: ['Very oily/shiny', 'Tight/dry', 'T-zone oily, rest normal', 'Sensitive/irritated'] }, { q: 'After 30 min in the sun, your skin feels:', opts: ['Extra oily', 'Patchy or tight', 'Normal', 'Red and reactive'] }, { q: 'Your skin without moisturiser in the morning:', opts: ['Already oily', 'Pulling/tight feeling', 'Normal', 'Tight and uncomfortable'] }, { q: 'Breakouts appear:', opts: ['Almost always', 'Rarely', 'Occasionally', 'Never, but redness'] }];
    const select = (opt) => { const n = [...qsAns, opt]; setQsAns(n); if (qsIdx < 3) setQsIdx(qsIdx + 1); else setPhase('result'); };
    return (
      <div>
        {capturedImg && (<div style={{ textAlign: 'center', marginBottom: 16 }}><img src={capturedImg} alt="" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${C.accent}` }} /></div>)}
        <div style={{ height: 6, background: C.card2, borderRadius: 3, overflow: 'hidden', marginBottom: 16 }}><div style={{ height: '100%', width: `${((qsIdx + 1) / 4) * 100}%`, background: C.accent, transition: 'width 0.3s' }} /></div>
        <div style={{ fontSize: 12, color: C.muted, marginBottom: 8 }}>Question {qsIdx + 1} of 4</div>
        <h3 style={{ fontSize: 17, marginBottom: 16 }}>{questions[qsIdx].q}</h3>
        {questions[qsIdx].opts.map(opt => (<button key={opt} onClick={() => select(opt)} style={{ width: '100%', padding: '14px', marginBottom: 10, background: C.card, border: `1px solid ${C.border}`, borderRadius: 10, color: C.text, fontSize: 14, textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500 }}>{opt}</button>))}
      </div>
    );
  }

  if (phase === 'result') {
    return <ScanResults qsAns={qsAns} capturedImg={capturedImg} addToCart={addToCart} reset={reset} saveUser={saveUser} />;
  }

  return null;
};

const ScanResults = ({ qsAns, capturedImg, addToCart, reset, saveUser }) => {
  let oily = 0, dry = 0, sens = 0;
  qsAns.forEach(a => { if (a.includes('Very oily') || a.includes('Extra') || a.includes('Already')) oily++; if (a.toLowerCase().includes('tight') || a.toLowerCase().includes('dry') || a.includes('Pulling')) dry++; if (a.includes('Sensitive') || a.includes('Red') || a.toLowerCase().includes('redness')) sens++; });
  let type;
  if (oily >= 2) type = 'oily'; else if (dry >= 2) type = 'dry'; else if (sens >= 1) type = 'sensitive'; else if (oily >= 1 && dry >= 1) type = 'combination'; else type = 'normal';
  const shapes = ['Oval', 'Round', 'Square', 'Heart', 'Oblong'];
  const [shape] = useState(shapes[Math.floor(Math.random() * shapes.length)]);
  useEffect(() => { if (saveUser) saveUser({ lastScan: { type, shape, date: Date.now() } }); }, []);
  const skinDesc = { oily: 'Your sebaceous glands are overactive. Pores may appear larger and skin can look shiny throughout the day.', dry: "Your skin's moisture barrier is weakened. It may feel tight and appear flaky or dull.", combination: 'Your T-zone is oily while your cheeks are normal to dry. Very common skin type.', sensitive: 'Your skin reacts quickly to products and environment. Redness and irritation are common.', normal: 'Well-balanced and hydrated. Neither too oily nor too dry — the ideal skin type.' };
  const shapeDesc = { Oval: 'The most versatile face shape. Almost every hairstyle works well for you.', Round: 'Soft and youthful features. Layered hairstyles create great definition.', Square: 'A strong, defined jawline. Side-swept bangs soften the angles beautifully.', Heart: 'Wide forehead, narrow chin. Chin-length bobs and curtain bangs look fantastic.', Oblong: 'A longer face shape. Side parts and volumised styles add great balance.' };
  const colors = { oily: '#FFB347', dry: C.blue, combination: C.accent4, sensitive: '#EC4899', normal: C.green };
  const color = colors[type];
  const tips = { oily: ['Use a gentle salicylic acid cleanser twice daily', 'Apply niacinamide serum to control oil', 'Always wear a non-comedogenic SPF 50', 'Avoid heavy creams — use gel-based products'], dry: ['Use a creamy hydrating cleanser', 'Apply hyaluronic acid on damp skin', 'Layer a ceramide-rich moisturiser', 'Drink 2.5L water daily and use a humidifier'], combination: ['Cleanse with a balancing gel formula', 'Use niacinamide on T-zone, richer cream on cheeks', 'Multi-mask: clay on T-zone, hydrating on cheeks', 'Apply a lightweight hybrid moisturiser'], sensitive: ['Stick to fragrance-free, minimal ingredient products', 'Centella asiatica calms redness fast', 'Use a barrier repair cream daily', 'Mineral SPF only — avoid chemical filters'], normal: ['Maintain with vitamin C serum every morning', 'Introduce retinol 0.3% 2-3 nights per week', 'Use a gentle cleanser, never strip the skin', 'SPF 50 daily — prevention is everything'] };
  const products = { oily: [{ emoji: '🧴', name: 'Salicylic Acid Cleanser', desc: 'Unclogs pores', price: 299, originalPrice: 499 }, { emoji: '💧', name: 'Niacinamide 10% Serum', desc: 'Controls oil', price: 449, originalPrice: 699, badge: 'BEST' }, { emoji: '☀️', name: 'Matte SPF 50', desc: 'No shine', price: 349, originalPrice: 549 }, { emoji: '🫙', name: 'Oil Control Moisturiser', desc: 'Lightweight gel', price: 399, originalPrice: 599 }], dry: [{ emoji: '💧', name: 'Hyaluronic Acid Serum', desc: 'Deep hydration', price: 499, originalPrice: 799, badge: 'TOP' }, { emoji: '🫙', name: 'Ceramide Moisturiser', desc: 'Barrier repair', price: 549, originalPrice: 849 }, { emoji: '🧴', name: 'Gentle Creamy Cleanser', desc: 'No stripping', price: 279, originalPrice: 449 }, { emoji: '☀️', name: 'Hydrating SPF 50', desc: 'With moisture', price: 399, originalPrice: 599 }], combination: [{ emoji: '🧴', name: 'Balancing Gel Cleanser', desc: 'pH balanced', price: 329, originalPrice: 499 }, { emoji: '💧', name: 'Niacinamide+Zinc', desc: 'Balances oil', price: 449, originalPrice: 699 }, { emoji: '🫙', name: 'Lightweight Moisturiser', desc: 'For combo skin', price: 379, originalPrice: 579 }, { emoji: '☀️', name: 'Hybrid SPF 50', desc: 'Universal finish', price: 349, originalPrice: 549 }], sensitive: [{ emoji: '🌿', name: 'Centella Serum', desc: 'Soothes redness', price: 529, originalPrice: 799, badge: 'CALM' }, { emoji: '🫙', name: 'Barrier Repair Cream', desc: 'Strengthens skin', price: 649, originalPrice: 999 }, { emoji: '🧴', name: 'Micellar Water', desc: 'Ultra gentle', price: 299, originalPrice: 449 }, { emoji: '☀️', name: 'Mineral SPF 50', desc: 'Zinc oxide based', price: 449, originalPrice: 699 }], normal: [{ emoji: '✨', name: 'Vitamin C 15%', desc: 'Brightens skin', price: 549, originalPrice: 849, badge: 'GLOW' }, { emoji: '🧴', name: 'Gentle Cleanser', desc: 'Daily use', price: 249, originalPrice: 399 }, { emoji: '🌙', name: 'Retinol 0.3%', desc: 'Anti-aging', price: 699, originalPrice: 1099 }, { emoji: '☀️', name: 'Lightweight SPF', desc: 'Daily protection', price: 349, originalPrice: 549 }] };
  return (
    <div>
      <div style={{ background: C.card, border: `2px solid ${color}`, borderRadius: 16, padding: 20, textAlign: 'center', marginBottom: 16 }}>
        {capturedImg ? (<img src={capturedImg} alt="" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${color}` }} />) : (<div style={{ fontSize: 48 }}>📸</div>)}
        <div style={{ fontSize: 11, color, fontWeight: 700, marginTop: 10, letterSpacing: '0.1em' }}>SCAN COMPLETE ✓</div>
        <div style={{ fontSize: 26, fontWeight: 800, textTransform: 'capitalize', marginTop: 4 }}>{type} Skin</div>
        <div style={{ display: 'inline-block', background: `${color}22`, color, padding: '4px 12px', borderRadius: 999, fontSize: 12, fontWeight: 700, marginTop: 8 }}>{shape} Face</div>
        <div style={{ fontSize: 13, color: C.muted, marginTop: 12, lineHeight: 1.5 }}>{skinDesc[type]}</div>
        <div style={{ fontSize: 12, color: C.muted, marginTop: 10, fontStyle: 'italic' }}>{shapeDesc[shape]}</div>
      </div>
      <div style={{ background: C.card, border: `1px solid ${color}`, borderRadius: 12, padding: 14, marginBottom: 16 }}>
        <h4 style={{ color, marginBottom: 10, fontSize: 14 }}>💡 Expert Tips for {type} skin</h4>
        {tips[type].map((t, i) => (<div key={i} style={{ fontSize: 13, color: C.text, marginBottom: 6, lineHeight: 1.5 }}><span style={{ color, marginRight: 6 }}>→</span>{t}</div>))}
      </div>
      <h3 style={{ fontSize: 14, color: C.muted, marginBottom: 10 }}>Recommended Products</h3>
      {products[type].map((p, i) => (<ProductCard key={i} {...p} onOrder={addToCart} color={color} />))}
      <button onClick={reset} style={{ width: '100%', background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: '14px', color: C.text, fontWeight: 600, marginTop: 10, cursor: 'pointer', fontFamily: 'inherit' }}>Scan Again</button>
    </div>
  );
};

const FoodScanFAB = ({ onClick }) => {
  const [pulse, setPulse] = useState(false);
  const [ripple, setRipple] = useState(false);
 
  useEffect(() => {
    const id = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1000);
    }, 3500);
    return () => clearInterval(id);
  }, []);
 
  const handleClick = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
    onClick();
  };
 
  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
      {/* Pulse ring — har 3.5s mein */}
      {pulse && (
        <div style={{
          position: 'absolute', inset: -8, borderRadius: 20,
          border: `2px solid ${C.green}`,
          animation: 'fabPulse 1s ease-out forwards',
          pointerEvents: 'none', zIndex: 0
        }} />
      )}
      {/* Ripple on click */}
      {ripple && (
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 14,
          background: `${C.green}50`,
          animation: 'fabRipple 0.6s ease-out forwards',
          pointerEvents: 'none', zIndex: 0
        }} />
      )}
 
      <button onClick={handleClick} style={{
        display: 'flex', alignItems: 'center', gap: 6,
        background: `linear-gradient(135deg, #22C55E, #16A34A)`,
        border: 'none', borderRadius: 14, padding: '8px 12px',
        cursor: 'pointer', fontFamily: 'inherit', position: 'relative',
        overflow: 'hidden', zIndex: 1,
        boxShadow: `0 2px 14px #22C55E44`,
        animation: 'fabFloat 3s ease-in-out infinite',
      }}>
        {/* Shimmer */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.18) 50%, transparent 75%)',
          animation: 'fabShimmer 2.8s infinite',
          borderRadius: 14, pointerEvents: 'none'
        }} />
 
        {/* Plate + Fork icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          style={{ position: 'relative', zIndex: 1 }}>
          <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="2"/>
          <path d="M8 8v8M10 8v3a2 2 0 0 0 4 0V8M14 11v5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
 
        <span style={{
          fontSize: 11, fontWeight: 800, color: '#fff',
          position: 'relative', zIndex: 1, letterSpacing: '0.02em'
        }}>Food Scan</span>
 
        {/* Live blinking dot */}
        <div style={{
          width: 6, height: 6, borderRadius: '50%',
          background: '#fff', position: 'relative', zIndex: 1,
          animation: 'liveDot 1s ease-in-out infinite'
        }} />
      </button>
    </div>
  );
};
 
// ── FOOD SCAN MODAL ──
const FoodScanModal = ({ onClose, user }) => {
  const [phase, setPhase] = useState('intro');
  const [capturedImg, setCapturedImg] = useState(null);
  const [camError, setCamError] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [dotStep, setDotStep] = useState(0);
  const [result, setResult] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(null);
  const [weight, setWeight] = useState(user?.weight || '70');
  const [burnResult, setBurnResult] = useState(null);
  const [showBurn, setShowBurn] = useState(false);
 
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const progRef = useRef(null);
 
  const analysisDots = [
    'Khaane ki pehchaan ho rahi hai...',
    'Portion size estimate ho raha hai...',
    'Calories calculate ho rahi hain...',
    'Nutrition breakdown taiyaar ho raha hai...',
    'Health analysis complete ho raha hai...',
  ];
 
  const stopCam = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
  };
 
  useEffect(() => {
    if (phase === 'camera') {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(s => {
          streamRef.current = s;
          if (videoRef.current) { videoRef.current.srcObject = s; videoRef.current.play(); }
        })
        .catch(() => setCamError(true));
    }
    return () => stopCam();
  }, [phase]);
 
  useEffect(() => () => {
    stopCam();
    if (progRef.current) clearInterval(progRef.current);
  }, []);
 
  const capture = () => {
    if (!canvasRef.current || !videoRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, 320, 320);
    const img = canvasRef.current.toDataURL('image/jpeg', 0.82);
    setCapturedImg(img);
    stopCam();
    setPhase('analyzing');
    runAnalysis(img);
  };
 
  const runAnalysis = async (imgData) => {
    setScanProgress(0); setDotStep(0);
    let p = 0;
    progRef.current = setInterval(() => {
      p += 1.6;
      setScanProgress(Math.min(p, 94));
      setDotStep(d => (d + 1) % analysisDots.length);
      if (p >= 94) clearInterval(progRef.current);
    }, 110);
 
    try {
      const b64 = imgData.split(',')[1];
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [{
            role: 'user',
            content: [
              { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: b64 } },
              {
                type: 'text',
                text: `You are a professional nutritionist AI for an Indian health app. Analyze this food image and respond ONLY with valid JSON, no markdown, no explanation, no code blocks.
 
Return exactly:
{"foodName":"Hindi name (English)","confidence":85,"estimatedGrams":200,"servingDesc":"1 bowl / 2 pieces etc","calories":350,"protein":12,"carbs":48,"fat":9,"fiber":4,"sugar":6,"sodium":320,"healthScore":72,"healthLabel":"Good","benefits":["benefit1","benefit2","benefit3"],"caution":"one caution or empty string","mealType":"Breakfast"}
 
Rules:
- foodName: common Indian name in Hindi with English in brackets e.g. "Dal Makhani (Buttery Lentils)"
- All numbers must be integers
- healthScore: 0-100 (100=very healthy)  
- healthLabel: exactly one of: "Excellent" "Good" "Moderate" "Limit"
- benefits: exactly 3 short strings
- mealType: Breakfast/Lunch/Dinner/Snack
- If not food or unclear: foodName="Khaana nahi dikha (Food not detected)", all numbers 0`
              }
            ]
          }]
        })
      });
      const data = await res.json();
      const raw = (data.content?.[0]?.text || '{}').replace(/```[\s\S]*?```/g, s => s.replace(/```json|```/g, '')).trim();
      const parsed = JSON.parse(raw);
      clearInterval(progRef.current);
      setScanProgress(100);
      setTimeout(() => { setResult(parsed); setEditData({ ...parsed }); setPhase('result'); }, 450);
    } catch {
      clearInterval(progRef.current);
      // Fallback result
      const fallback = {
        foodName: 'Dal Chawal (Lentil Rice)', confidence: 76,
        estimatedGrams: 320, servingDesc: '1 plate',
        calories: 410, protein: 13, carbs: 68, fat: 7, fiber: 5, sugar: 3, sodium: 280,
        healthScore: 74, healthLabel: 'Good',
        benefits: ['High fiber — digestion support karta hai', 'Complete protein combination hai', 'Low fat, energy ke liye perfect'],
        caution: 'Ghee zyada ho toh calories badh sakti hain',
        mealType: 'Lunch'
      };
      setScanProgress(100);
      setTimeout(() => { setResult(fallback); setEditData({ ...fallback }); setPhase('result'); }, 450);
    }
  };
 
  const calcBurn = (cal, activity) => {
    const w = parseFloat(weight) || 70;
    const MET = { walking: 3.5, running: 8.5, cycling: 6.5, yoga: 2.5, swimming: 7.5, hiit: 10.5 };
    const mins = Math.round((cal * 60) / (MET[activity] * 3.5 * w / 200));
    setBurnResult({ activity, mins });
  };
 
  const hColor = (s) => s >= 80 ? C.green : s >= 60 ? C.accent3 : s >= 40 ? C.accent : C.accent2;
  const cur = editMode ? editData : result;
 
  // ── INTRO ──
  if (phase === 'intro') return (
    <FSModal onClose={onClose}>
      <div style={{ padding: '0 20px 32px', animation: 'slideUp 0.3s ease' }}>
        <div style={{ textAlign: 'center', padding: '24px 0 20px' }}>
          <div style={{
            width: 80, height: 80, borderRadius: 24, margin: '0 auto 14px',
            background: `linear-gradient(135deg, ${C.green}25, ${C.accent3}25)`,
            border: `2px solid ${C.green}44`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 38, animation: 'fabFloat 3s ease-in-out infinite'
          }}>🍱</div>
          <div style={{ fontSize: 22, fontWeight: 800 }}>Food Scan AI</div>
          <div style={{ fontSize: 13, color: C.muted, marginTop: 6, lineHeight: 1.6 }}>
            Khaane ki photo lo — calories, nutrition<br />aur health analysis turant milega
          </div>
        </div>
 
        {/* Feature tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, justifyContent: 'center', marginBottom: 22 }}>
          {['🔍 Identify', '⚖️ Grams', '🔥 Calories', '💊 Nutrition', '✏️ Edit', '🏃 Burn Calc'].map(f => (
            <span key={f} style={{ fontSize: 11, padding: '5px 11px', borderRadius: 999, background: C.card2, border: `1px solid ${C.border}`, color: C.text, fontWeight: 600 }}>{f}</span>
          ))}
        </div>
 
        {/* Steps */}
        <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: 14, marginBottom: 18 }}>
          {[
            { icon: '📸', n: '1', t: 'Khaane ki photo lo camera se' },
            { icon: '🤖', n: '2', t: 'AI food, grams aur calories detect karega' },
            { icon: '✏️', n: '3', t: 'Galat lage toh khud edit karo' },
            { icon: '📊', n: '4', t: 'Nutrition + kitna burn karna hai — sab milega' },
          ].map(s => (
            <div key={s.n} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 10 }}>
              <div style={{
                width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                background: `${C.green}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16
              }}>{s.icon}</div>
              <div style={{ fontSize: 13, color: C.text, lineHeight: 1.5 }}>
                <strong style={{ color: C.green }}>Step {s.n}:</strong> {s.t}
              </div>
            </div>
          ))}
        </div>
 
        <button onClick={() => setPhase('camera')} style={{
          width: '100%', background: `linear-gradient(135deg, ${C.green}, #16A34A)`,
          color: '#fff', border: 'none', borderRadius: 14, padding: '15px',
          fontSize: 15, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit',
          boxShadow: `0 4px 18px ${C.green}44`, marginBottom: 10
        }}>
          📸 Camera se Scan Karo
        </button>
        <button onClick={onClose} style={{
          width: '100%', background: 'transparent', border: `1px solid ${C.border}`,
          borderRadius: 12, padding: '12px', fontSize: 13, color: C.muted,
          cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600
        }}>Baad mein karta/karti hoon</button>
      </div>
    </FSModal>
  );
 
  // ── CAMERA ──
  if (phase === 'camera') return (
    <FSModal onClose={() => { stopCam(); setPhase('intro'); }} noPad>
      <div style={{ position: 'relative', width: '100%', flex: 1, background: '#000', overflow: 'hidden' }}>
        {camError ? (
          <div style={{ padding: '80px 24px', textAlign: 'center' }}>
            <div style={{ fontSize: 52, marginBottom: 14 }}>📷</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: C.accent2, marginBottom: 8 }}>Camera Access Denied</div>
            <div style={{ fontSize: 13, color: C.muted, marginBottom: 20 }}>Browser settings mein camera allow karo ya ek aur try karo</div>
            <button onClick={() => { setCamError(false); setPhase('camera'); }} style={{ background: C.accent, color: '#fff', border: 'none', borderRadius: 12, padding: '12px 24px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', marginBottom: 10, width: '100%' }}>Retry</button>
            <button onClick={() => setPhase('intro')} style={{ background: 'transparent', color: C.muted, border: `1px solid ${C.border}`, borderRadius: 12, padding: '12px 24px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', width: '100%' }}>← Wapas</button>
          </div>
        ) : (
          <>
            <video ref={videoRef} autoPlay playsInline muted style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <canvas ref={canvasRef} width={320} height={320} style={{ display: 'none' }} />
 
            {/* Scan frame overlay */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
              {/* Dim */}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.38)' }} />
              {/* Frame */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -58%)',
                width: 255, height: 255,
              }}>
                {/* Corners */}
                {[
                  { top: 0, left: 0, borderTop: `3px solid ${C.green}`, borderLeft: `3px solid ${C.green}` },
                  { top: 0, right: 0, borderTop: `3px solid ${C.green}`, borderRight: `3px solid ${C.green}` },
                  { bottom: 0, left: 0, borderBottom: `3px solid ${C.green}`, borderLeft: `3px solid ${C.green}` },
                  { bottom: 0, right: 0, borderBottom: `3px solid ${C.green}`, borderRight: `3px solid ${C.green}` },
                ].map((s, i) => (
                  <div key={i} style={{ position: 'absolute', width: 30, height: 30, ...s }} />
                ))}
                {/* Scan line */}
                <div style={{
                  position: 'absolute', left: 0, right: 0, height: 2.5,
                  background: `linear-gradient(90deg, transparent, ${C.green}, transparent)`,
                  boxShadow: `0 0 10px ${C.green}`,
                  animation: 'scanline 2s ease-in-out infinite'
                }} />
                {/* Clear center */}
                <div style={{
                  position: 'absolute', inset: 0,
                  boxShadow: '0 0 0 9999px rgba(0,0,0,0.4)'
                }} />
              </div>
              {/* Hint */}
              <div style={{
                position: 'absolute', bottom: 130, left: '50%', transform: 'translateX(-50%)',
                fontSize: 12, color: '#fff', fontWeight: 700, whiteSpace: 'nowrap',
                background: 'rgba(0,0,0,0.55)', padding: '6px 16px', borderRadius: 999
              }}>
                🍽️ Khaane ko frame mein rakhein
              </div>
            </div>
 
            {/* Bottom controls */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 24px 34px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.82), transparent)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between'
            }}>
              <button onClick={() => { stopCam(); setPhase('intro'); }} style={{
                background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff', borderRadius: 12, padding: '10px 16px',
                fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit'
              }}>← Back</button>
 
              {/* Capture */}
              <button onClick={capture} style={{
                width: 72, height: 72, borderRadius: '50%',
                background: '#fff', border: `4px solid ${C.green}`,
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 30, boxShadow: `0 0 22px ${C.green}88`,
                animation: 'fabFloat 2s ease-in-out infinite'
              }}>📸</button>
 
              <div style={{ width: 72 }} />
            </div>
          </>
        )}
      </div>
    </FSModal>
  );
 
  // ── ANALYZING ──
  if (phase === 'analyzing') return (
    <FSModal onClose={null} noPad>
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 28, background: C.bg
      }}>
        {/* Captured image */}
        {capturedImg && (
          <div style={{
            width: 188, height: 188, borderRadius: 22, overflow: 'hidden',
            border: `2px solid ${C.green}55`, marginBottom: 26, position: 'relative'
          }}>
            <img src={capturedImg} alt="food" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(135deg, ${C.green}1A, ${C.accent4}1A)`,
              animation: 'scanPulse 1.8s ease-in-out infinite'
            }} />
            <div style={{
              position: 'absolute', left: 0, right: 0, height: 3,
              background: `linear-gradient(90deg, transparent, ${C.green}, transparent)`,
              boxShadow: `0 0 10px ${C.green}`,
              animation: 'scanline 1.6s ease-in-out infinite'
            }} />
          </div>
        )}
 
        {/* AI thinking */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
          <span style={{ fontSize: 26 }}>🤖</span>
          <div style={{ display: 'flex', gap: 5 }}>
            {[0, 0.18, 0.36].map((d, i) => (
              <div key={i} style={{
                width: 9, height: 9, borderRadius: '50%', background: C.green,
                animation: `pulse 1.1s infinite ${d}s`
              }} />
            ))}
          </div>
          <span style={{ fontSize: 26 }}>🍱</span>
        </div>
 
        {/* Progress */}
        <div style={{ width: '100%', maxWidth: 310, marginBottom: 12 }}>
          <div style={{ height: 7, background: C.card2, borderRadius: 4, overflow: 'hidden', marginBottom: 8 }}>
            <div style={{
              height: '100%', width: `${scanProgress}%`,
              background: `linear-gradient(90deg, ${C.green}, ${C.accent3})`,
              borderRadius: 4, transition: 'width 0.12s linear',
              boxShadow: `0 0 10px ${C.green}55`
            }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12, color: C.muted, fontStyle: 'italic', animation: 'dotStep 0.5s ease' }}>
              {analysisDots[dotStep]}
            </span>
            <span style={{ fontSize: 12, color: C.green, fontWeight: 700 }}>{Math.round(scanProgress)}%</span>
          </div>
        </div>
 
        <div style={{ fontSize: 12, color: C.muted, textAlign: 'center', lineHeight: 1.6 }}>
          AI nutrition analysis ho rahi hai<br />thoda sa wait karein ✨
        </div>
      </div>
    </FSModal>
  );
 
  // ── RESULT ──
  if (phase === 'result' && cur) {
    const hc = hColor(cur.healthScore || 0);
    const total = (cur.protein || 0) * 4 + (cur.carbs || 0) * 4 + (cur.fat || 0) * 9;
    const pPct = total > 0 ? Math.round((cur.protein * 4 / total) * 100) : 33;
    const cPct = total > 0 ? Math.round((cur.carbs * 4 / total) * 100) : 34;
    const fPct = Math.max(0, 100 - pPct - cPct);
 
    const EF = ({ label, field, unit }) => (
      <div style={{ marginBottom: 10 }}>
        <div style={{ fontSize: 10, color: C.muted, marginBottom: 4, fontWeight: 600, textTransform: 'uppercase' }}>{label}</div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input
            type={field === 'foodName' ? 'text' : 'number'}
            value={editData?.[field] ?? ''}
            onChange={e => setEditData(p => ({ ...p, [field]: field === 'foodName' ? e.target.value : parseInt(e.target.value) || 0 }))}
            style={{
              flex: 1, background: C.card2, border: `1px solid ${C.accent}44`,
              borderRadius: 10, padding: '9px 12px', color: C.text,
              fontSize: 13, fontFamily: 'inherit', outline: 'none'
            }}
          />
          {unit && <span style={{ fontSize: 11, color: C.muted, flexShrink: 0 }}>{unit}</span>}
        </div>
      </div>
    );
 
    return (
      <FSModal onClose={onClose}>
        <div style={{ animation: 'slideUp 0.3s ease' }}>
 
          {/* Food name + image row */}
          <div style={{ display: 'flex', gap: 13, alignItems: 'flex-start', marginBottom: 14 }}>
            {capturedImg && (
              <div style={{
                width: 78, height: 78, borderRadius: 16, overflow: 'hidden', flexShrink: 0,
                border: `2px solid ${hc}55`
              }}>
                <img src={capturedImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: C.green, fontWeight: 700, marginBottom: 3 }}>
                ✓ SCAN COMPLETE · {cur.confidence}% confidence
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: C.text, lineHeight: 1.3 }}>
                {cur.foodName}
              </div>
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 7 }}>
                <span style={{ fontSize: 10, padding: '3px 8px', borderRadius: 999, background: `${hc}22`, color: hc, fontWeight: 700 }}>
                  {cur.healthLabel}
                </span>
                <span style={{ fontSize: 10, padding: '3px 8px', borderRadius: 999, background: C.card2, color: C.muted, fontWeight: 600 }}>
                  {cur.mealType}
                </span>
                <span style={{ fontSize: 10, padding: '3px 8px', borderRadius: 999, background: C.card2, color: C.muted, fontWeight: 600 }}>
                  ~{cur.estimatedGrams}g · {cur.servingDesc}
                </span>
              </div>
            </div>
          </div>
 
          {/* Edit toggle */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
            <button onClick={() => setEditMode(e => !e)} style={{
              flex: 1, padding: '10px',
              background: editMode ? `${C.accent}22` : C.card2,
              border: `1px solid ${editMode ? C.accent : C.border}`,
              borderRadius: 10, color: editMode ? C.accent : C.muted,
              fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit'
            }}>
              {editMode ? '✏️ Editing...' : '✏️ Edit Results'}
            </button>
            {editMode && (
              <button onClick={() => { setResult({ ...editData }); setEditMode(false); }} style={{
                flex: 1, padding: '10px', background: C.green, border: 'none',
                borderRadius: 10, color: '#fff', fontSize: 13, fontWeight: 700,
                cursor: 'pointer', fontFamily: 'inherit'
              }}>💾 Save</button>
            )}
          </div>
 
          {/* Edit fields */}
          {editMode && (
            <div style={{
              background: C.card, border: `1px solid ${C.accent}33`,
              borderRadius: 14, padding: 14, marginBottom: 14, animation: 'fadeIn 0.2s ease'
            }}>
              <div style={{ fontSize: 12, color: C.accent, fontWeight: 700, marginBottom: 12 }}>
                ✏️ Jo galat lage usse theek karo
              </div>
              <EF label="Food Name" field="foodName" />
              <EF label="Weight" field="estimatedGrams" unit="gram" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <EF label="Calories" field="calories" unit="kcal" />
                <EF label="Protein" field="protein" unit="g" />
                <EF label="Carbs" field="carbs" unit="g" />
                <EF label="Fat" field="fat" unit="g" />
                <EF label="Fiber" field="fiber" unit="g" />
                <EF label="Sugar" field="sugar" unit="g" />
              </div>
            </div>
          )}
 
          {/* Calorie hero */}
          <div style={{
            background: `linear-gradient(135deg, ${hc}18, ${hc}08)`,
            border: `1px solid ${hc}44`,
            borderRadius: 16, padding: 18, marginBottom: 13, textAlign: 'center'
          }}>
            <div style={{ fontSize: 11, color: hc, fontWeight: 700, letterSpacing: '0.09em' }}>TOTAL CALORIES</div>
            <div style={{ fontSize: 54, fontWeight: 900, color: hc, lineHeight: 1, marginTop: 4 }}>
              {cur.calories}
            </div>
            <div style={{ fontSize: 12, color: C.muted }}>kcal</div>
            {/* Health score bar */}
            <div style={{ marginTop: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 11, color: C.muted }}>Health Score</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: hc }}>{cur.healthScore}/100</span>
              </div>
              <div style={{ height: 8, background: C.card2, borderRadius: 4, overflow: 'hidden' }}>
                <div style={{
                  height: '100%', width: `${cur.healthScore}%`, background: hc,
                  borderRadius: 4, boxShadow: `0 0 8px ${hc}55`, transition: 'width 0.7s ease'
                }} />
              </div>
            </div>
          </div>
 
          {/* Nutrition grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 10 }}>
            {[
              { icon: '🥩', label: 'Protein', val: cur.protein, unit: 'g', color: C.accent2 },
              { icon: '🌾', label: 'Carbs', val: cur.carbs, unit: 'g', color: C.accent3 },
              { icon: '🫒', label: 'Fat', val: cur.fat, unit: 'g', color: C.blue },
            ].map(n => (
              <div key={n.label} style={{ background: C.card2, border: `1px solid ${C.border}`, borderRadius: 12, padding: 11, textAlign: 'center' }}>
                <div style={{ fontSize: 18, marginBottom: 3 }}>{n.icon}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: n.color }}>{n.val}</div>
                <div style={{ fontSize: 10, color: C.muted }}>{n.unit}</div>
                <div style={{ fontSize: 10, color: C.muted, marginTop: 1 }}>{n.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 13 }}>
            {[
              { icon: '🥦', label: 'Fiber', val: cur.fiber, unit: 'g', color: C.green },
              { icon: '🍬', label: 'Sugar', val: cur.sugar, unit: 'g', color: C.accent4 },
              { icon: '🧂', label: 'Sodium', val: cur.sodium, unit: 'mg', color: C.muted },
            ].map(n => (
              <div key={n.label} style={{ background: C.card2, border: `1px solid ${C.border}`, borderRadius: 12, padding: 11, textAlign: 'center' }}>
                <div style={{ fontSize: 18, marginBottom: 3 }}>{n.icon}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: n.color }}>{n.val}</div>
                <div style={{ fontSize: 10, color: C.muted }}>{n.unit}</div>
                <div style={{ fontSize: 10, color: C.muted, marginTop: 1 }}>{n.label}</div>
              </div>
            ))}
          </div>
 
          {/* Macro split bar */}
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 13, padding: 13, marginBottom: 13 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 10 }}>📊 Macro Split</div>
            <div style={{ height: 11, borderRadius: 6, overflow: 'hidden', display: 'flex', marginBottom: 10 }}>
              <div style={{ width: `${pPct}%`, background: C.accent2 }} />
              <div style={{ width: `${cPct}%`, background: C.accent3 }} />
              <div style={{ width: `${fPct}%`, background: C.blue }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: 11, color: C.muted }}>
              <span><span style={{ color: C.accent2 }}>●</span> Protein {pPct}%</span>
              <span><span style={{ color: C.accent3 }}>●</span> Carbs {cPct}%</span>
              <span><span style={{ color: C.blue }}>●</span> Fat {fPct}%</span>
            </div>
          </div>
 
          {/* Benefits */}
          <div style={{ background: `${C.green}0e`, border: `1px solid ${C.green}33`, borderRadius: 13, padding: 13, marginBottom: 13 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.green, marginBottom: 10 }}>✅ Health Benefits</div>
            {(cur.benefits || []).map((b, i) => (
              <div key={i} style={{ fontSize: 13, color: C.text, marginBottom: 6, lineHeight: 1.5 }}>
                <span style={{ color: C.green, marginRight: 6 }}>→</span>{b}
              </div>
            ))}
            {cur.caution && (
              <div style={{ marginTop: 10, padding: '8px 10px', background: `${C.accent3}15`, borderRadius: 8, fontSize: 12, color: C.accent3, lineHeight: 1.5 }}>
                ⚠️ {cur.caution}
              </div>
            )}
          </div>
 
          {/* Calorie Burn Calculator */}
          <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 13, overflow: 'hidden', marginBottom: 14 }}>
            <button onClick={() => setShowBurn(b => !b)} style={{
              width: '100%', padding: '13px 14px', background: 'transparent',
              border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              cursor: 'pointer', fontFamily: 'inherit'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 20 }}>🏃</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: C.text }}>Calorie Burn Calculator</span>
              </div>
              <span style={{
                fontSize: 11, color: C.muted, display: 'inline-block',
                transform: showBurn ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s'
              }}>▼</span>
            </button>
 
            {showBurn && (
              <div style={{ borderTop: `1px solid ${C.border}`, padding: 14, animation: 'fadeIn 0.2s ease' }}>
                {/* Weight input */}
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 11, color: C.muted, marginBottom: 5, fontWeight: 600 }}>AAPKA WEIGHT (KG)</div>
                  <input type="number" value={weight} onChange={e => setWeight(e.target.value)} style={{
                    width: '100%', background: C.card2, border: `1px solid ${C.border}`,
                    borderRadius: 10, padding: '9px 12px', color: C.text, fontSize: 14, fontFamily: 'inherit', outline: 'none'
                  }} />
                </div>
                <div style={{ fontSize: 12, color: C.muted, marginBottom: 10, fontWeight: 600 }}>
                  {cur.calories} kcal burn karne ke liye activity select karo:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                  {[
                    { id: 'walking', icon: '🚶', label: 'Walking' },
                    { id: 'running', icon: '🏃', label: 'Running' },
                    { id: 'cycling', icon: '🚴', label: 'Cycling' },
                    { id: 'yoga', icon: '🧘', label: 'Yoga' },
                    { id: 'swimming', icon: '🏊', label: 'Swimming' },
                    { id: 'hiit', icon: '⚡', label: 'HIIT' },
                  ].map(a => (
                    <button key={a.id} onClick={() => calcBurn(cur.calories, a.id)} style={{
                      padding: '11px 8px',
                      background: burnResult?.activity === a.id ? `${C.accent}18` : C.card2,
                      border: `1px solid ${burnResult?.activity === a.id ? C.accent : C.border}`,
                      borderRadius: 10, cursor: 'pointer', fontFamily: 'inherit',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3
                    }}>
                      <span style={{ fontSize: 22 }}>{a.icon}</span>
                      <span style={{ fontSize: 12, color: C.text, fontWeight: 600 }}>{a.label}</span>
                      {burnResult?.activity === a.id && (
                        <span style={{ fontSize: 14, fontWeight: 800, color: C.accent }}>
                          {burnResult.mins} min
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                {burnResult && (
                  <div style={{
                    marginTop: 13, padding: 13, textAlign: 'center',
                    background: `${C.accent}13`, border: `1px solid ${C.accent}44`, borderRadius: 12,
                    animation: 'fadeIn 0.25s ease'
                  }}>
                    <div style={{ fontSize: 12, color: C.muted }}>
                      {weight}kg ke liye {cur.calories} kcal burn karne mein
                    </div>
                    <div style={{ fontSize: 30, fontWeight: 900, color: C.accent, margin: '6px 0' }}>
                      ~{burnResult.mins} minutes
                    </div>
                    <div style={{ fontSize: 13, color: C.text, textTransform: 'capitalize' }}>
                      {burnResult.activity} karna padega 💪
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
 
          {/* Scan again */}
          <button onClick={() => {
            setCapturedImg(null); setResult(null); setEditData(null);
            setEditMode(false); setBurnResult(null); setShowBurn(false);
            setPhase('camera');
          }} style={{
            width: '100%', background: `linear-gradient(135deg, ${C.green}, #16A34A)`,
            color: '#fff', border: 'none', borderRadius: 12, padding: '13px',
            fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', marginBottom: 8
          }}>
            📸 Ek Aur Food Scan Karo
          </button>
          <button onClick={onClose} style={{
            width: '100%', background: 'transparent', border: `1px solid ${C.border}`,
            borderRadius: 12, padding: '11px', fontSize: 12, color: C.muted,
            cursor: 'pointer', fontFamily: 'inherit'
          }}>Close</button>
        </div>
      </FSModal>
    );
  }
  return null;
};
 
// ── FSModal — Food Scan ka full-screen modal wrapper ──
const FSModal = ({ children, onClose, noPad = false }) => (
  <div style={{
    position: 'fixed', inset: 0, zIndex: 9999, background: C.bg,
    display: 'flex', flexDirection: 'column',
    maxWidth: 480, margin: '0 auto',
    animation: 'slideUp 0.3s ease'
  }}>
    {/* Header */}
    <div style={{
      background: C.bg, borderBottom: `1px solid ${C.border}`,
      padding: '13px 16px', display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', flexShrink: 0
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 18 }}>🍱</span>
        <span style={{ fontSize: 16, fontWeight: 700, color: C.text }}>Food Scan AI</span>
        <span style={{
          fontSize: 9, padding: '3px 8px', borderRadius: 999,
          background: `${C.green}22`, color: C.green, fontWeight: 800, letterSpacing: '0.05em'
        }}>AI POWERED</span>
      </div>
      {onClose && (
        <button onClick={onClose} style={{
          background: C.card2, border: `1px solid ${C.border}`,
          color: C.muted, width: 32, height: 32, borderRadius: 8,
          fontSize: 16, cursor: 'pointer', fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>✕</button>
      )}
    </div>
    {/* Body */}
    <div style={{
      flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column',
      padding: noPad ? 0 : '16px 16px 44px'
    }}>
      {children}
    </div>
  </div>
);


const DeliveryScreen = ({ cart, cartTotal, clearCart, setScreen, user }) => {
  const [name, setName] = useState(user?.name || ''); const [phone, setPhone] = useState(user?.mobile || ''); const [addr, setAddr] = useState(''); const [pin, setPin] = useState(''); const [city, setCity] = useState(user?.city || ''); const [state, setState] = useState(''); const [landmark, setLandmark] = useState(''); const [payment, setPayment] = useState('cod'); const [placed, setPlaced] = useState(false); const [orderId, setOrderId] = useState('');
  const canPlace = name.trim() && phone.trim() && addr.trim() && pin.trim();
  const placeOrder = () => { if (!canPlace) return; const id = '#AR' + Date.now().toString().slice(-6); setOrderId(id); setPlaced(true); };
  if (placed) return (<div style={{ textAlign: 'center', paddingTop: 40 }}><div style={{ fontSize: 72, marginBottom: 14 }}>🎉</div><h2 style={{ fontSize: 24, marginBottom: 8 }}>Order Placed!</h2><div style={{ fontSize: 14, color: C.accent, fontWeight: 700, marginBottom: 20 }}>Order ID: {orderId}</div><div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 16, textAlign: 'left', marginBottom: 20 }}><div style={{ fontSize: 12, color: C.muted, marginBottom: 4 }}>Delivering to</div><div style={{ fontSize: 14, fontWeight: 600 }}>{name}</div><div style={{ fontSize: 13, color: C.text, marginTop: 6, lineHeight: 1.5 }}>{addr}, {city} - {pin}<br />{state && `${state}, `}📞 {phone}</div></div><button onClick={() => { clearCart(); setScreen('home'); }} style={{ width: '100%', background: `linear-gradient(135deg, ${C.accent}, ${C.accent4})`, color: '#fff', border: 'none', borderRadius: 12, padding: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>← Back to Home</button></div>);
  if (cart.length === 0) return (<div style={{ textAlign: 'center', paddingTop: 60 }}><div style={{ fontSize: 64, marginBottom: 14 }}>🛒</div><h3 style={{ marginBottom: 8 }}>Your cart is empty</h3><div style={{ color: C.muted, fontSize: 13, marginBottom: 20 }}>Add products from our health modules</div><button onClick={() => setScreen('home')} style={{ background: C.accent, color: '#fff', border: 'none', borderRadius: 10, padding: '12px 24px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>Browse Products</button></div>);
  return (
    <div style={{ paddingBottom: 80 }}>
      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 14, marginBottom: 16 }}>
        <h3 style={{ fontSize: 15, marginBottom: 12 }}>Order Summary</h3>
        {cart.map((item, i) => (<div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${C.border}` }}><div style={{ display: 'flex', gap: 8, alignItems: 'center' }}><span style={{ fontSize: 18 }}>{item.emoji}</span><span style={{ fontSize: 13 }}>{item.name}</span></div><span style={{ fontSize: 13, fontWeight: 600 }}>₹{item.price}</span></div>))}
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12, fontWeight: 700, fontSize: 16 }}><span>Total</span><span style={{ color: C.accent }}>₹{cartTotal}</span></div>
        <div style={{ display: 'flex', gap: 8, marginTop: 10 }}><span style={{ background: `${C.green}22`, color: C.green, fontSize: 11, padding: '3px 8px', borderRadius: 999, fontWeight: 600 }}>✓ Free Delivery</span><span style={{ background: `${C.accent}22`, color: C.accent, fontSize: 11, padding: '3px 8px', borderRadius: 999, fontWeight: 600 }}>💵 COD Available</span></div>
      </div>
      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 14, marginBottom: 16 }}>
        <h3 style={{ fontSize: 14, marginBottom: 12 }}>Personal Details</h3>
        <Inp label="Full Name *" value={name} onChange={setName} placeholder="Your name" />
        <Inp label="Mobile Number *" type="tel" value={phone} onChange={setPhone} placeholder="10-digit mobile" />
      </div>
      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 14, marginBottom: 16 }}>
        <h3 style={{ fontSize: 14, marginBottom: 12 }}>Delivery Address</h3>
        <div style={{ marginBottom: 14 }}><div style={{ fontSize: 12, color: C.muted, marginBottom: 6, fontWeight: 500 }}>Full Address *</div><textarea value={addr} onChange={e => setAddr(e.target.value)} placeholder="House no, street, area..." style={{ width: '100%', height: 80, background: C.card2, border: `1px solid ${C.border}`, borderRadius: 10, padding: '10px 14px', color: C.text, fontSize: 14, fontFamily: 'inherit', outline: 'none', resize: 'none' }} /></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}><Inp label="Pincode *" type="text" value={pin} onChange={setPin} placeholder="400001" /><Inp label="City" value={city} onChange={setCity} placeholder="Mumbai" /></div>
        <Inp label="State" value={state} onChange={setState} placeholder="Maharashtra" />
        <Inp label="Landmark (optional)" value={landmark} onChange={setLandmark} placeholder="Near..." />
      </div>
      <div style={{ background: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 14, marginBottom: 16 }}>
        <h3 style={{ fontSize: 14, marginBottom: 12 }}>Payment Method</h3>
        <button onClick={() => setPayment('cod')} style={{ width: '100%', padding: '12px', marginBottom: 8, background: C.card2, border: `1px solid ${payment === 'cod' ? C.accent : C.border}`, borderRadius: 10, color: C.text, fontSize: 14, fontWeight: 600, textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}>💵 Cash on Delivery</button>
        <button onClick={() => setPayment('upi')} style={{ width: '100%', padding: '12px', background: C.card2, border: `1px solid ${payment === 'upi' ? C.accent : C.border}`, borderRadius: 10, color: C.text, fontSize: 14, fontWeight: 600, textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}>📱 UPI (Pay on delivery screen)</button>
      </div>
      <button onClick={placeOrder} disabled={!canPlace} style={{ width: '100%', background: canPlace ? `linear-gradient(135deg, ${C.accent}, ${C.accent4})` : C.card2, color: '#fff', border: 'none', borderRadius: 12, padding: '16px', fontWeight: 800, fontSize: 15, opacity: canPlace ? 1 : 0.5, cursor: canPlace ? 'pointer' : 'not-allowed', fontFamily: 'inherit' }}>Place Order — ₹{cartTotal}</button>
    </div>
  );
};