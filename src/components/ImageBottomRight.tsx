import { photoOfMe } from "../assets";

function ImageBottomRight() {
  return (
    <div className="absolute -bottom-4 -right-4 overflow-hidden rounded-full bg-white xs:h-[16rem] xs:w-[16rem] md:h-[20rem] md:w-[20rem] lg:h-[22rem] lg:w-[22rem] xl:h-[24rem] xl:w-[24rem]">
      <img src={photoOfMe} alt="Photo of me" className="absolute z-10" />
    </div>
  );
}

export default ImageBottomRight;
