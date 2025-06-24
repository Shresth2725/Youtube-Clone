import React, { useEffect , useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import SearchVIdeo from './SearchVIdeo';
import { Link } from 'react-router-dom';


const SearchOutput = () => {
    const [searchParams] = useSearchParams(); 
    const SearchText = searchParams.get("y");
    // console.log(SearchText);
    const [searchResult , setSearchResult] = useState([]);

    useEffect(() => {
        fetchSearchAPI() ;
    } ,[])
    
    const fetchSearchAPI = async() => {
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${SearchText}&key=AIzaSyDTp8S5jMmCTg1HOEH27My7efVtO5dYv68`) ;
        const json = await data.json() ;
        // console.log(json);
        setSearchResult(json.items);
    }

  return (
    <div>
      {searchResult.map((video, index) => (
        <Link to={"/watch?v=" + video?.id?.videoId} key={index}>
          <SearchVIdeo info={video} />
        </Link>
      ))}
    </div>
  )
}

export default SearchOutput
