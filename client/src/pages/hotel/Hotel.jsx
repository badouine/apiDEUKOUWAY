import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      scr: "https://t-cf.bstatic.com/xdata/images/hotel/square600/49404416.webp?k=8db78f49ede24106b1749bcd17d9f27e6ac83972d4ad8e6ce756b345e6fd6903&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/266406936.webp?k=f1e1c16d147bad196f283284c1c27144d0827afc8dc9b1a2d94a0c992e0843c6&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/184901749.webp?k=51e159640d40f8a90018a8b180a187cf691479727bcd48f8f835a0c26098bcbd&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/26357138.webp?k=f3958337922942720adb1899542d2e456287ffd19aae6c3ee51e217d2d21af0a&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/148916506.webp?k=6e8be975858603509b614553b704c48d4ea79aa2abfc8bdab142c8c059b2406a&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/5465222.webp?k=950669f27fb32f2e3b897b57e8cffc2ad6c5d236b2e760b63e67a9583afe10da&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/square600/265102710.webp?k=0dbd7460e3018107ecaa3530aec285193b317862228220f21b0060938727ec33&o=&s=1",
    },
    {
      src: "https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_riad/ec1ea267f18d830b68ca76a666734f8e93a1853d.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location ~ 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Cet établissement est à 4 minutes à pied de la plage. Doté d'une
                piscine avec une zone pour les enfants, le Kalimera Hotel est un
                établissement à la gestion familiale situé à seulement 50 mètres
                de la plage d'Agia Marina de La Canée. Il est équipé d'une
                connexion Wi-Fi gratuite dans l'ensemble de ses locaux et ses
                logements indépendants sont pourvus d'un balcon.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                located in the real heart of Krakow , this propert has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
