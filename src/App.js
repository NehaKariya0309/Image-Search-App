import Jumbutron from './components/Jumbutron';
import SearchField from './components/SearchField';
import Images from './components/Images'
import useAxios from './Hooks/useAxios';
import { useState } from 'react';
import { createContext } from 'react';
import React from 'react';
export const ImageContext=createContext();



function App() {
  const [searchImage,setSearchImage]=useState("");
  const {response,isLoading,error,fetchData} =useAxios(`https://api.unsplash.com/search/photos?page=1&query=office&per_page=30&client_id=F9y_nacwti27FraKcmFN7tsfDqlRAtTFBVZFvCp-N_s`);
  console.log(response);
  const info={
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }
  return (
    <ImageContext.Provider value={info}>
    <Jumbutron>
      <SearchField/>
      </Jumbutron>
      <Images />
    </ImageContext.Provider>
  );
}


export default App;
