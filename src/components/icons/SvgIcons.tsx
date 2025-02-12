import React from 'react'
import { useState } from 'react'

interface IconProps {
  width?: number
  height?: number
  className?: string
}

export const GithubIcon: React.FC<IconProps> = ({ width = 24, height = 24, className }) => {
  const [color, setColor] = useState('#bebebe')

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width={width}
      height={height}
      className={className}
      onMouseEnter={() => setColor('#fff')}
      onMouseLeave={() => setColor('#bebebe')}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
        d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
      />
    </svg>
  )
}

export const FacebookIcon: React.FC<IconProps> = ({ width = 24, height = 24, className }) => {
  const [color, setColor] = useState('#bebebe')

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width={width}
      height={height}
      className={className}
      onMouseEnter={() => setColor('rgb(9, 139, 214)')}
      onMouseLeave={() => setColor('#bebebe')}
    >
      <rect
        fill={color}
        x="4.83"
        y="4.83"
        width="118.35"
        height="118.35"
        rx="6.53"
        ry="6.53"
      />
      <path
        d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
      />
    </svg>
  )
}

export const LocationIcon: React.FC<IconProps> = ({ width = 24, height = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    className={className}
  >
    <path
      d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
      stroke="#bebebe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
    <path
      d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
      stroke="#bebebe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
)

export const ArrowIcon: React.FC<IconProps> = ({ width = 24, height = 24, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5 -5 26 26"
      width={width}
      height={height}
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          className='arrow-head'
          d="M10 0L9 1L11.2929 3.29289L6.2929 8.29289L7.70711 9.70711L12.7071 4.7071L15 7L16 6V0H10Z" fill="#5a75dd">
        </path>
        <path d="M1 2H6V4H3V13H12V10H14V15H1V2Z" fill="#5a75dd"></path>
      </g>
    </svg>
  )
}

export const ArrowIcon2: React.FC<IconProps> = ({ width = 24, height = 24, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      className={className}
    >
      <path
        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill='#fff'
      ></path>
    </svg>
  )
}

export const TypeScriptIcon: React.FC<IconProps> = ({ width = 24, height = 24, className }) => {
  return (
    <svg
      viewBox="0 0 128 128"
      width={width}
      height={height}
      className={className}
    >
      <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
      <path data-name="original" fill="#007acc"
        d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z">
      </path>
    </svg>
  )
}