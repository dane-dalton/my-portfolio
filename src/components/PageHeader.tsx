type HeaderProps = {
  header: string;
};

function PageHeader({ header }: HeaderProps) {
  return (
    <h1 className="stroke-header mt-[1rem] text-center xs:text-[8rem] xs:leading-[8rem] lg:text-[12rem] lg:leading-[12.5rem]">
      {header}
    </h1>
  );
}

export default PageHeader;
