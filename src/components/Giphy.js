/* eslint-disable react-hooks/exhaustive-deps */
import { React, useState, useEffect } from 'react'
import GiphyItem from './GiphyItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Loading from './Spinner';

function Giphy(props) {
  const [search, setSearch] = useState("gifs");
  const [value, setValue] = useState([])
  const [loader,setLoader]=useState(true);
  useEffect(() => {
    const url = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=V4VRHnVAmeLU0lrJdVIZAoeMsDiGCyss&offset=100"
    const fetchData = async () => {
      try {
        setLoader(true);
        const response = await fetch(url);
        const res = await response.json()
        setValue(res.data)
        let count=res.data.length;
        console.log(count)
        setLoader(false)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();

  }, [search])

  return (
    <>
      <main>
        <div className="container" >
          <h1 style={{ textAlign: "center" }}  ><FontAwesomeIcon style={{color:"white"}}icon={faSearch} /></h1>
          <form role="search" className=' form-floating'>
            <input className="form-control" id="search" placeholder="Search" value={search} autoComplete="off" onChange={e => setSearch(e.target.value)}   />
            <label htmlFor="search" className='floatingInput' >Search For Gifs</label>
          </form>
          <div className="row my-5">
            {loader && <Loading/>}
            {value.map((element) => {
              return(
                <div className="col-lg-2 col-md-3 col-sm-4 col-4" key={element.images.fixed_height.url}>
                  <GiphyItem
                    images={element.images.fixed_height.url}
                  />
                  <br />
                </div>
              );
            })}

          </div>
        </div>
      </main>
      <hr classname="my-1000" style={{color:"white"}} />
      <footer className='text-center text-white' >
        <span >
          {" "}
          &copy;{" "}
          <span>
            {" "}
            Copyright 2023 |
            <a style={{ textDecoration: "none", color: " #56e1ca " }} href="https://devdaim.me" >
              {" "}
              DevDaim
            </a>{" "}
          </span>
        </span>
      </footer>
    </>
    
  )
}

export default Giphy