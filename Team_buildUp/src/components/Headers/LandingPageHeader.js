/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from "react";
import "../../assets/css/landing.css"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import Parser from 'html-react-parser';
import Axios from 'axios';

// reactstrap components
// import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  const [movieContent, setMovieContent] = useState({
    title: '',
    content: ''
  })

  const [viewContent, setViewContent] = useState([]);

  useEffect(() =>{
    Axios.get('http://localhost:8082/api/reviews').then((response)=>{
      setViewContent(response.data);
    })
  },[viewContent])

  const submitReview = ()=>{
    Axios.post('http://localhost:8082/api/review', {
      title: movieContent.title,
      content: movieContent.content
    }).then(()=>{
      alert('등록 완료!');
    })
  };
  

  const getValue = e => {
    const { name, value } = e.target
    setMovieContent({
      ...movieContent,
      [name]: value
    })
    console.log(movieContent);
  };

  return (
    <>
    
      {/* <div
        className="page-header section-dark"
        style={{
          backgroundImage: "url(" + require("assets/img/antoine-barres.jpg") + ")",

        }}
      > */}
      <div className="img">
      <div className="text-center">
    <br />
    <br />
    <br />
      <h1 className="drone-review"><strong>Drone Review</strong></h1>
      <div className='movie-container'>
        {viewContent.map(element=>
          <div>
            <h2>{element.title}</h2>
            <div>
             {Parser(element.content)}
            </div>
          </div>
        )}
      </div>
      
      <div className='form-wrapper'>
        <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
        />
        <CKEditor
          editor={ClassicEditor}
          data="리뷰 내용을 입력해주세요!"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setMovieContent({
              ...movieContent,
              content: data
            })
            console.log(movieContent);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button 
        className="submit-button" 
        onClick={submitReview}
      >입력</button>
     </div>
     <br/><br/><br/><br/><br/><br/><br/><br/>
     
     {/* </div> */}
     {/* <div class="img-cover"></div> */}
     </div>
    </>
  );
}

export default LandingPageHeader;
