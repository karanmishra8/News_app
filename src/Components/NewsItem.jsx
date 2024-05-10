import React from 'react'

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2 " style={{maxWidth:"300px"}}>
  <img src={src ? src : 'https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg'} style={{height:"200px",width: "280px"}} className='card-img-top' alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,30)}</h5>
    <p className="card-text">{description? description.slice(0,50): "The headline equity indices traded with minor gains in early trade."}</p>
    <a href={url} className="btn btn-primary">Read more</a>
  </div>
</div>
  )
}

export default NewsItem