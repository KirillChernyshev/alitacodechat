import { useTheme } from '@emotion/react';

export default function ArrowRightIcon(props) {
  const theme = useTheme();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width='16' height='16' viewBox="0 0 16 16"
      fill={theme.palette.icon.fill.primary}
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M5.64645 13.3536C5.45118 13.1583 5.45118 12.8417 5.64645 12.6464L10.2929 8L5.64645 3.35355C5.45118 3.15829 5.45118 2.84171 5.64645 2.64645C5.84171 2.45118 6.15829 2.45118 6.35355 2.64645L11 7.29289C11.3905 7.68342 11.3905 8.31658 11 8.70711L6.35355 13.3536C6.15829 13.5488 5.84171 13.5488 5.64645 13.3536Z" />
    </svg>
  );
}
