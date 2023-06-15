function Description({isMobile}) {
  return (
    <>
      {isMobile ? 
        <p className="tablet:max-w-[465px] desktop:max-w-[664px] mb-6 text-lgc font-light text-grey-medium dark:text-white">Get the unmatched feeling of security with award-winning protection against hackers, viruses and malwares.</p>
        :
        <p className="block dark:tablet:hidden desktop:block tablet:max-w-[465px] desktop:max-w-[664px] min-[1300px]:max-w-[664px] min-[1820px]:max-w-full mb-6 text-lgc font-light text-grey-medium dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut dapibus eleifend mi eu faucibus. Aliquam erat volutpat.
          Pellentesque dui nisl, consectetur sit amet hendrerit at, commodo ac nunc.
        </p>
      }
    </>
  );
}
    
export default Description;