import { photoOfMe } from "../assets";

function ImageBottomRight() {
  return (
    <div className="absolute -bottom-4 -right-4 h-[384px] w-[384px] overflow-hidden rounded-full bg-white">
      <img src={photoOfMe} alt="Photo of me" className="absolute z-10" />
    </div>
  );
}

export default ImageBottomRight;
