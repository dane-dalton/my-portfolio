import { photoOfMe } from "../assets";

function ImageBottomRight() {
  return (
    <div className="absolute -bottom-4 -right-4 overflow-hidden rounded-full bg-white sm:h-[14rem] sm:w-[14rem] md:h-[18rem] md:w-[18rem] lg:h-[20rem] lg:w-[20rem] xl:h-[22rem] xl:w-[22rem]">
      <img src={photoOfMe} alt="Photo of me" className="absolute z-20" />
    </div>
  );
}

export default ImageBottomRight;
