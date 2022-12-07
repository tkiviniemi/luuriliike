const Footer = () => {
  return (
    <footer className="bg-emerald-600 p-4 w-full shadow-inner">
      <div className="flex justify-evenly text-zinc-600">
        <socials className="flex flex-col">
          <a href="https://www.facebook.com/">
            <i className="hover:text-stone-200 mr-2">Facebook</i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="hover:text-stone-200">Instagram</i>
          </a>
        </socials>
        <div className="flex flex-col">
          <p className=" ">&copy; 2021 Luuriliike.</p>
          <p className=" ">All rights reserved.</p>
        </div>
        <div className="flex flex-col">
          <p className=" ">Yrityskuja 1</p>
          <p className=" ">33500 Tampere</p>
        </div>
        <div>
          <p className="">+358 01 234 567</p>
          <p className=" ">email@luuriliike.fi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
