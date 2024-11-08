import { IoMdHeart } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className="h-14 w- flex items-center justify-center bg-gray-950">
      <span className="flex items-center gap-1.5 sm:text-xs font-mono text-gray-400 ">
        Made by <IoMdHeart className="text-emerald-400" size={13} />
        by <strong className="font-medium">Raphael Silva Freitas</strong>
      </span>
    </footer>
  )
}

export default Footer
