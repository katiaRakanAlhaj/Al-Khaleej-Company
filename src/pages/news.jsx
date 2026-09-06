import NewsGrid from "../features/news/component/newsGrid";
import { usefetchNewsPage } from "../features/news/hook/useFetchNews";

const News = ()=> {
    const {data:newsData , isLoading:newsDataLoading,error:newsDataError} = usefetchNewsPage();
    return(
        <div>
            <NewsGrid newsData = {newsData}/>
        </div>
    )
}
export default News;