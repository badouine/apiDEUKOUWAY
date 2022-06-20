import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  const {data, loading, error} = useFetch("/hotels/countByCity?cities=Thies,Diourbel,Saly")

  console.log(data);
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt="img"
        />
        <div className="featuredTitles">
            <h1>Somone</h1>
            <h2>123 proprietes</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt="img"
        />
        <div className="featuredTitles">
            <h1>Ngaparou</h1>
            <h2>345 proprietes</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
          alt="img"
        />
        <div className="featuredTitles">
            <h1>Saly</h1>
            <h2>875 proprietes</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
