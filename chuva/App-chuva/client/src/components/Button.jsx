export default function Button({children}) {
  return (
    <button className="flex bg-company-100 px-3 py-1 rounded text-white hover:bg-orange-800 m-2 items-center">
      {children}
    </button>
  )
}
