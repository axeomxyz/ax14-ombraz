import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import picture from './assets/glasses.jpg'
import pfp from './assets/pfp.jpg'
import { useDispatch, useSelector} from "react-redux";
import { flowiseReply } from "../redux/slices/handler";
import { FullPageChat } from "flowise-embed-react"

function App() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [isCommentSent, setIsCommentSent] = useState(false);

  const dispatch = useDispatch()
  const flowiseResponse = useSelector((state) => state.requests.flowiseReply)
  const flowiseResponsesArray = []
  useEffect(() => {
    if(flowiseResponse){
    setComments([...comments, '@ombraz: ' + flowiseResponse])
    
    }
}, [flowiseResponse])
  
  console.log(comments)
  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim() !== '') {
      // Agrega el nuevo comentario al array de comentarios
      setComments([...comments, '@coolcustomer: ' + commentText]);
      // Limpia el texto del comentario después de agregarlo al array
      dispatch(flowiseReply({
        "question": commentText
      }))
      console.log('logueoooooooooooo ', commentText)
      setCommentText('');
      setIsCommentSent(true)
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommentSubmit();
    }
  };
  return (
    <>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/p/CxQQhpVNVDO/?utm_source=ig_embed&utm_campaign=loading"
        data-instgrm-version={14}
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 3,
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          maxWidth: 680,
          minWidth: 680,
          padding: 0,
          width: "calc(100% - 2px)",
        }}
      >
        <div style={{ padding: 16 }}>
          {" "}
          <a
            style={{
              background: "#FFFFFF",
              lineHeight: 0,
              padding: "0 0",
              textAlign: "center",
              textDecoration: "none",
              width: "100%"
            }}
            target="_blank"
          >
            {" "}
            <div
              style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
            >
              {""}
              <div
              //foto

              />{" "}
              <img src={pfp} alt="" style={{
                backgroundColor: "#F4F4F4",
                borderRadius: "50%",
                flexGrow: 0,
                height: 40,
                marginRight: 14,
                width: 40,
                border: '1px solid lightgray',

              }} />
              <div

              >
                {""}
                <p >ombraz</p>

                {""}
                <div
                  //caption 2
                  style={{

                    borderRadius: 4,
                    flexGrow: 0,
                    height: 14,
                    width: 60
                  }}

                />
              </div>
            </div>
            <div
              style={{
                display: "block",
                height: 50,
                margin: "0 auto 12px",
                width: 50
              }}
            >

            </div>
            <img src={picture} alt="" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 14,
                alignItems: "center"
              }}
            >
              <div>
                {" "}
                <div
                  style={{
                    backgroundColor: "red",
                    borderRadius: "50%",
                    height: "12.5px",
                    width: "12.5px",
                    transform: "translateX(0px) translateY(7px)"
                  }}
                />{" "}
                <div
                  style={{
                    backgroundColor: "red",
                    height: "12.5px",
                    transform: "rotate(312deg) translateX(3px) translateY(1px)",
                    width: "13.5px",
                    flexGrow: 0,
                    marginRight: 14,
                    marginLeft: 2
                  }}
                />{" "}
                <div
                  style={{
                    backgroundColor: "red",
                    borderRadius: "50%",
                    height: "12.5px",
                    width: "12.5px",
                    transform: "translateX(9px) translateY(-18px)"
                  }}
                />
              </div>
              <div style={{ marginLeft: 8 }}>
                {" "}
                <div
                  style={{
                    backgroundColor: "lightgray",
                    borderRadius: "50%",
                    flexGrow: 0,
                    height: 20,
                    width: 20
                  }}
                />{" "}
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "2px solid transparent",
                    borderLeft: "6px solid lightgray",
                    borderBottom: "2px solid transparent",
                    transform: "translateX(16px) translateY(-4px) rotate(30deg)"
                  }}
                />
              </div>
              <div style={{ marginLeft: "auto" }}>
                {" "}
                <div
                  style={{
                    width: 0,
                    borderTop: "8px solid black",
                    borderRight: "8px solid transparent",
                    transform: "translateY(16px)"
                  }}
                />{" "}
                <div
                  style={{
                    backgroundColor: "black",
                    flexGrow: 0,
                    height: 12,
                    width: 16,
                    transform: "translateY(-4px)"
                  }}
                />{" "}
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "8px solid black",
                    borderLeft: "8px solid transparent",
                    transform: "translateY(-4px) translateX(8px)"
                  }}
                />
              </div>
            </div>{""}
            {/* comments */}
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", textAlign: "start", marginLeft: '5%', marginBottom: '5%' }}>
          {(comments.map((comment, index) => (
            <div key={index} style={{ height: '100%' }}>{comment}</div>
          )))}
          {(comments.length % 2 !== 0)? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> : null }
        </div>
        {/* <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", textAlign: "start", marginLeft: '5%', marginBottom: '5%' }}>
          {isCommentSent !== true || flowiseResponsesArray.length? flowiseResponsesArray.map((response, index) => (
            <div key={index} style={{ height: '100%' }}>{'@ombraz: ' + response}</div>
          )): <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}

        </div> */}
        <div style={{paddingBottom:'5vh'}}>
          <input
            style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", textAlign: "start", width: '90%', border: '0', marginLeft: '5%', height:'5vh',  outline: 'none' }}
            placeholder='Add a comment...'
            value={commentText}
            onChange={handleCommentChange}
            onKeyPress={handleKeyPress}
            onSubmit={handleCommentSubmit}
            
          ></input>
        </div>
      </blockquote>     
    </>
  )
}

export default App
