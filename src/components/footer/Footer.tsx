import Link from "next/link";

const Footer = () => {
  return (
    <footer className="font-sans min-h-[12vh]">
      <div className="flex flex-col items-center w-full p-8 bg-gray-200">
        <div className="flex flex-col items-center w-full">
          <div className="w-1/2 max-w-[480px] text-center text-gray-700">
            Vaillant is offered free of charge and was passionately developed by a solo creator. Please be kind and understanding in your use of it.
          </div>
          <div className="flex gap-20 pt-8 text-blue-950">
            <div>
              <Link href="/faq">F.A.Q</Link>
            </div>
            <div>
              <Link href="/documentation">Documentation</Link>
            </div>
            <div>
              <Link href="/Blog">Blog</Link>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
      <div className="flex justify-center w-full h-8 bg-blue-950 text-gray-50">
        <span>Vaillant V 0.0.1 - alpha</span>
      </div>
    </footer>
  )
}

export default Footer;