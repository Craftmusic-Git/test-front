type VaillantLogoProps = {
  className?: string;
}

const VaillantLogo = ({ className }: VaillantLogoProps) => {
  return (
    <svg className={ className } viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M 20,60  50,80 L 80,60" strokeLinejoin="round" strokeLinecap="round" className="stroke-blue-800 fill-transparent stroke-[12px]" />
      <path d="M 20,25  50,45 L 80,25" strokeLinejoin="round" strokeLinecap="round" className="stroke-blue-800 fill-transparent stroke-[12px]" />
    </svg>
  )
}

export default VaillantLogo;