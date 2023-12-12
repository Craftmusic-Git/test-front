type VaillantOutlineLogoProps = {
  className?: string;
}

const VaillantOutlineLogo = ({ className }: VaillantOutlineLogoProps) => {
  return (
    <svg className={ className } viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="90" height="90" rx="10" ry="10" className="fill-blue-800" />
      <rect x="10" y="10" width="80" height="80" rx="7.5" ry="7.5" className="fill-white"/>
      <path d="M 20,55  50,75 L 80,55" strokeLinejoin="round" strokeLinecap="round" className="stroke-blue-800 fill-transparent stroke-[8px]" />
      <path d="M 20,30  50,50 L 80,30" strokeLinejoin="round" strokeLinecap="round" className="stroke-blue-800 fill-transparent stroke-[8px]" />
    </svg>
  )
}

export default VaillantOutlineLogo;