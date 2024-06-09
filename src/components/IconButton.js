import DownloadIcon from "../asset/download.png";
import "./IconButton.css";

export default function IconButton({ text }) {
  return (
    <a
      href="https://drive.google.com/file/d/1y_iaSio923odRxquZb9f1pspf_i3j4xT/view?usp=drive_link"
      className="IconButton"
      target="_blank">
      <img src={DownloadIcon} />
      {text}
    </a>
  );
}
