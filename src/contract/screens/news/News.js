import React, {useState, useEffect} from 'react';
import './News.css'

export default function News() {

  const [y, setY] = useState(window.scrollY)
  const [up, setUp] = useState(false)


  const news = [
    {img: '../../../../n1.png', link: 'https://www.gcgdao.info/news/meet-gutter-cat-gang'},
    {img: '../../../../n2.png', link: 'https://www.gcgdao.info/news/dao-powered-nft-communities'},
    {img: '../../../../n3.png', link: 'https://www.gcgdao.info/news/the-future-is-dao'},
    {img: '../../../../n4.png', link: 'https://www.gcgdao.info/news/nft-communities-for-artists-and-collectors'}
  ];

  const nav =(e)=>{
    const window = e.currentTarget;
    if(y > window.scrollY){
      setUp(true)
    }
    else if (y < window.scrollY){
      setUp(false)
    }
    setY(window.scrollY)

  }
  useEffect(() => {
    setY(window.scrollY)
  }, [y]);

  useEffect(() => {
    window.addEventListener('scroll', (e)=> nav(e));
  
    return () => {
      window.removeEventListener('scroll', (e)=> nav(e))
    }
    // eslint-disable-next-line
  }, [y])
  

  return (
    <div style={{height: '120vh'}} className='container-fluid pt-2 mt-5'>
      <h5 className="paragraphs mx-3">ALL THINGS GUTTER RELATED</h5>
      <h1 className="title"><span style={{backgroundImage: 'url(../../../logo.svg) ,linear-gradient(139deg, #ec9228, #b547f9)'}} className="image-text">THE GUTTER</span></h1>
      <div className="row d-lg-none">
        {news.map(({img, link}, index)=>{
          return (
            <a href={link} key={index} className="col-6 col-md-3">
              <img src={img} alt="" className="w-100 rounded mb-3 news-img" />
            </a>
          )
        })}
      </div>
      <div className="d-none d-lg-block d-news">
        <div className={up ? "d-flex desktop-news up" : "d-flex desktop-news"}>
          {news.map(({img, link}, index)=>{
            return (
              <a href={link} key={index} className="col-6 col-md-3 mx-3 py-3">
                <img src={img} alt="" className="w-100 desktop-news-img" />
              </a>
            )
          })}
        </div>
        <div className='news-bar'></div>
      </div>
    </div>
  )
}
