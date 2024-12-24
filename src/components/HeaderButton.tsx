import React, { useState } from 'react';

interface HeaderButtonProps {
  title: string;
  size: ButtonSize;
  disabled?: boolean;
  onClick: () => void;
}

type ButtonSize = 'standard' | 'small';

const HeaderButton: React.FC<HeaderButtonProps> = ({ title, size, disabled, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onFocus={(e) => e.target.blur()}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative text-${size === 'standard' ? '16' : '20'} text-darkGrey font-semibold font-syne py-2 border-none focus:outline-none transition-all duration-300 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} inline-block hover:text-black`}
      >
      {title}
      <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-darkGrey transition-opacity ${hover ? 'opacity-100' : 'opacity-0'} duration-[700ms] inline-block`} />
    </button>
  );
};

export default HeaderButton;
