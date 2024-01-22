type HeaderProps = {
  header: string;
};

function PageHeader({ header }: HeaderProps) {
  return (
    <h1 className="stroke-header mt-[1rem] text-center text-[5rem] leading-[5rem] xs:text-[6rem] xs:leading-[6rem] sm:text-[8rem] sm:leading-[8rem] lg:text-[10rem] lg:leading-[10rem] xl:text-[12rem] xl:leading-[12.5rem]">
      {header}
    </h1>
  );
}

export default PageHeader;
