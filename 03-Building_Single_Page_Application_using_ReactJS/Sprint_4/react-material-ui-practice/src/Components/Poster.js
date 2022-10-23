import React , { Component } from 'react' ;
import poster from './poster.jpeg' ;
import MediaControlCard from './PosterCards';




export default class Poster extends Component {
    render(){
        return(<div style={{marginBottom:'1px'}}>
            <p style={{textAlign:"left"}}>
                <a href="#" className='p-link'>Technology</a>
                <a href="#" className='p-link'>Design</a>
                <a href="#" className='p-link'>Culture</a>
                <a href="#" className='p-link'>Bussiness</a>
                <a href="#" className='p-link' >Politics</a>
                <a href="#" className='p-link'  >Opinion</a>
                <a href="#" className='p-link'>Science</a>
                <a href="#" className='p-link'>Health</a>
               <a href="#" className='p-link'>style</a>
                <a href="#" className='p-link'>Travel</a>
           </p>
          <div className='container1'>
            <img src={poster} id ='poster-img'/>
            <div className='t1'>
                <pre className='t1-h1'>Title of a longer featured<br/>
                blog post</pre>
                <pre className='t1-h2'>Multiple lines of text that forms lede , informing<br/>
                new readers quickly and efficiently about what's<br/>
                most intreatings in the post's content .
                <br/><br/><br/>
                <a href='#' id='cr'>continue reading...</a></pre>
            </div>
            
          </div>
         
              <MediaControlCard/>
        
          
        </div>);
    }
}



