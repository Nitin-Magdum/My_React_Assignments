import BlogBodyLeftContent , {BlogBodyRightContent} from "./BlogBodyContent";


export default function BlogBody(){
    return(
        <div style={{display:'flex'}}>
          <BlogBodyLeftContent/>
          <BlogBodyRightContent/>
        </div>
    );

}