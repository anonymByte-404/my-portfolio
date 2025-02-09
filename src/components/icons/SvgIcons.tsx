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
