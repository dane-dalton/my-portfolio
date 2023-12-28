type HeaderProps = {
  header: string;
};

function OtherPagesHeader({ header }: HeaderProps) {
  return (
    <h1 className="stroke-header mt-[1rem] text-center text-[12rem] leading-[12.5rem]">
      {header}
    </h1>
  );
}

export default OtherPagesHeader;
