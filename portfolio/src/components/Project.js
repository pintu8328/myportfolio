import React from "react";
import { FaGithub,FaShareSquare } from "react-icons/fa";


const Project = () => {
  const [header] = React.useState({
    subHeading: "Projects",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "Maxfashion Clone",
      img: "./images/Maxfashion.png",
      link: "https://leafy-sorbet-dccc4d.netlify.app/",
      repolink: "https://github.com/kakashi10-23/Max-clone",
      p:"Max brings international fashion and value to discerning shoppers in over 325 stores across 16 countries.Max offers apparel, footwear and accessories for the entire family - women, men and children. We build this website using Html,CSS,Js and ReactJS"
    },
    {
      id: 2,
      heading: "Purplle Clone",
      img: "./images/Purplle.png",
      link: "https://benevolent-cheesecake-c6b08b.netlify.app/",
      repolink: "https://github.com/Vibhav-Mishra/Purplle-clone",
      p:"Purplle is an online store selling cosmetics, fragrances, skin, and hair care products. It gives an online space to beauty and wellness needs that showcases some of the beauty brands and products.We try to build a American Eagle clone using Html, CSS, and JavaScript"
    },
    {
      id: 3,
      heading: "Anthropologie Clone",
      img: "./images/nature.png",
      link: "https://anthropologie-clone.netlify.app/",
      repolink: "https://github.com/pintu8328/Anthropologie_clone",
      p:"Nature’s Basket is India’s pioneering food destination present through physical retail stores, online portal and a mobile application. Our footprint currently extends to over 35 neighbourhood convenience stores in Mumbai, Pune and Bangalore with a diverse product portfolio ranging from fresh fruits and vegetables, fish and meat, artisanal breads, FMCG and staples. I build this website using HTML, CSS, JavaScript. "
    },
  ]);
  return (
    <div className="prices" id="Projects">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeading}</h1>

          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-40" key={prices.id}>
              <div className="price">
                <div className="priceHeading">{prices.heading}</div>
                <div className="price__rs">
                  <img className="imgx" src={prices.img} alt=""></img>
                </div>
                <p id="desc">{prices.p}</p>

                <div className="price__btn">
                  <a
                    href={prices.link}
                    className="btn btn-outline"
                    target='_blank'
                    style={{color:"white"}}
                  >
                   <FaShareSquare style={{fontSize:"22px", paddingTop:"5px",color:"white"}}/>
                  </a>
                  <a
                    href={prices.repolink}
                    className="btn btn-outline"
                    id="descShow"
                    target='_blank'
                  >
                    <FaGithub style={{fontSize:"25px", paddingTop:"5px",color:"white"}}/>
                  </a>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;