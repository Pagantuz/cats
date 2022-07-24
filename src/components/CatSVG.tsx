import React from 'react';

const CatSVG: React.FC = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
      className='cat-svg'>
      <rect width='256' height='256' fill='none' />
      <line
        x1='128'
        y1='192'
        x2='128'
        y2='224'
        fill='none'
        stroke='#cdb172'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='24'
      />
      <circle cx='84' cy='140' r='16' stroke='#cdb172' fill='#cdb172' />
      <circle cx='172' cy='140' r='16' stroke='#cdb172' fill='#cdb172' />
      <polyline
        points='144 176 128 192 112 176'
        fill='none'
        stroke='#cdb172'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='24'
      />
      <path
        d='M32,136V51.3a8,8,0,0,1,13.7-5.6L67.6,67.6h0A100.8,100.8,0,0,1,128,48a100.8,100.8,0,0,1,60.4,19.6h0l21.9-21.9A8,8,0,0,1,224,51.3V136c0,48.6-43,88-96,88S32,184.6,32,136Z'
        fill='none'
        stroke='#cdb172'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='24'
      />
      <line
        x1='108'
        y1='49.9'
        x2='108'
        y2='88'
        fill='none'
        stroke='#cdb172'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='24'
      />
      <line
        x1='148'
        y1='49.9'
        x2='148'
        y2='88'
        fill='none'
        stroke='#cdb172'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='24'
      />
    </svg>
  );
};

export { CatSVG };
