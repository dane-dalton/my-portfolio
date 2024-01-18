import { photoOfMe } from "../assets";

function ImageBottomRight() {
  return (
    <div className="absolute -bottom-4 -right-4 overflow-hidden rounded-full bg-white xs:h-[14rem] xs:w-[14rem] md:h-[18rem] md:w-[18rem] lg:h-[22rem] lg:w-[22rem] xl:h-[24rem] xl:w-[24rem]">
      <img src={photoOfMe} alt="Photo of me" className="absolute z-10" />
    </div>
  );
}

export default ImageBottomRight;
