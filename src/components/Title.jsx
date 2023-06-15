function Title({isMobile}) {
  return (
    <h1 className="block dark:tablet:hidden desktop:block text-4xl mb-6 tablet:max-w-[465px] desktop:max-w-[664px] min-[1000px]:text-4xlc font-light text-grey-dark dark:text-white">
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