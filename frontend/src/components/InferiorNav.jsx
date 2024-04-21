export default function InferiorNav() {
  function handleClick() {
    window.alert("Feature coming soon!🚀");
  }

  return (
    <nav className="max-w-[1440px] flex justify-center">
      <div className="flex gap-[60px]">
        <span
          className="px-4 py-6 hover:bg-gradient-to-r from from-[#994D80] to-[#E55CB8] hover:text-transparent hover:bg-clip-text"
          onClick={handleClick}
        >
          SHOP
        </span>
        <span
          className="px-4 py-6 hover:bg-gradient-to-r from from-[#994D80] to-[#E55CB8] hover:text-transparent hover:bg-clip-text"
          onClick={handleClick}
        >
          BEST SELLERS
        </span>
        <span
          className="px-4 py-6 hover:bg-gradient-to-r from from-[#994D80] to-[#E55CB8] hover:text-transparent hover:bg-clip-text"
          onClick={handleClick}
        >
          BRANDS
        </span>
        <span
          className="px-4 py-6 hover:bg-gradient-to-r from from-[#994D80] to-[#E55CB8] hover:text-transparent hover:bg-clip-text"
          onClick={handleClick}
        >
          BLOG
        </span>
      </div>
    </nav>
  );
}
