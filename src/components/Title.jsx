function Title({isMobile}) {
  return (
    <h1 className="block tablet:hidden desktop:block text-4xl mb-6 min-[1500px]:text-4xlc font-light text-grey-dark dark:text-white">
      {isMobile ? 
        <span className="font-bold text-3xlc">All your security needs in one product</span>
        :
        <span>
          <span className="font-bold">Lorem ipsm</span>
          dolor sit amet
        </span>
      }
    </h1>
  );
}

export default Title;