import ProfilePic from "../asset/profile-pic-2.jpeg";
import "./RoundedImage.css";

export default function RoundedImage() {
  return (
    <div className="RoundedImage">
      <img src={ProfilePic} alt="Profile Pic" />
    </div>
  );
}
