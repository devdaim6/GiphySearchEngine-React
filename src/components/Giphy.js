/* eslint-disable react-hooks/exhaustive-deps */
import { React, useState, useEffect } from 'react'
import GiphyItem from './GiphyItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Giphy(props) {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState([])

  useEffect(() => {
    console.log(search)
    const url = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=SDEsWMHoj4DO7LFMxWFHlVJVkElcDm8h"
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const res = await response.json()
        setValue(res.data)
        // console.log(parsedRes);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();

  }, [search])

  return (
    <>
      <main>

        <div className="container " >
          <h1 style={{ textAlign: "center" }}  ><FontAwesomeIcon icon={faSearch} /></h1>
          <form role="search" className=' form-floating'>
            <input className="form-control" id="search" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} aria-label="Search" />
            <label htmlFor="search" className='floatingInput' >Search For Gifs</label>
          </form>
          <div className="row my-5">
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
      <hr classname="my-1000" />
      <footer className='text-center' >
        <span >
          {" "}
          &copy;{" "}
          <span>
            {" "}
            Copyright 2023 |
            <a style={{ textDecoration: "none", textDecorationColor: "#59c9fa" }} href="https://devdaim.me" >
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