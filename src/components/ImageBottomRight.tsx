import { photoOfMe } from "../assets";

function ImageBottomRight() {
  return (
    <div className="absolute -bottom-4 -right-4 overflow-hidden rounded-full bg-white xs:h-[18rem] xs:w-[18rem] md:h-[21rem] md:w-[21rem] lg:h-[24rem] lg:w-[24rem]">
      <img src={photoOfMe} alt="Photo of me" className="absolute z-10" />
    </div>
  );
}

export default ImageBottomRight;
