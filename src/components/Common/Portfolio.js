import React,{Component} from 'react'
import PortfolioItem from './PortfolioItem'
import image1 from '../assets/img/portfolio/01-thumbnail.jpg'
import image2 from '../assets/img/portfolio/02-thumbnail.jpg'
import image3 from '../assets/img/portfolio/03-thumbnail.jpg'
import image4 from '../assets/img/portfolio/04-thumbnail.jpg'
import image5 from '../assets/img/portfolio/05-thumbnail.jpg'
import image6 from '../assets/img/portfolio/06-thumbnail.jpg'
const portfolio = [
    {title:'Threads',subtitle:'Illustration',img: image1},
    {title:'Explore',subtitle:'Graphic Design',img:image2},
    {title:'Finish',subtitle:'Identity',img:image3},
    {title:'Lines',subtitle:'Branding',img:image4},
    {title:'Southwest',subtitle:'Website Design',img:image5},
    {title:'Window',subtitle:'Photography',img:image6}

]
class Portfolio extends Component{
    render(){
        return(
            <section className="bg-light" id="portfolio">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                  
                {portfolio.map((item,index)=>{
                    return <PortfolioItem {...item} key={index}/>
                })}
                    
                   
                </div>
                </div>
        </section>
        )
    }
}
export default Portfolio