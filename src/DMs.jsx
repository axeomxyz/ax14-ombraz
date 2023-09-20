import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import picture from './assets/glasses.jpg'
import pfp from './assets/pfp.jpg'
import { useDispatch, useSelector } from "react-redux";
import { flowiseReply } from "../redux/slices/handler";
import { FullPageChat } from "flowise-embed-react"

function DMs() {

  return (
    <>
      <div style={{ border: '1px solid lightgray', }}>
        <div style={{ borderBottom: '1px solid lightgray', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src={pfp} alt="" style={{
            backgroundColor: "#F4F4F4",
            borderRadius: "50%",
            flexGrow: 0,
            height: 40,
            marginLeft: '1vw',
            width: 40,
            border: '1px solid lightgray',

          }} />
          <p style={{ textAlign: 'left', paddingLeft: '1vw', fontWeight: 'bold' }}>ombraz</p>
        </div>
        <FullPageChat

          chatflowid="cdca309d-aa51-45f6-9415-7b1aa3cc49bc"
          apiHost="http://localhost:3000"
          theme={{
            chatWindow: {
              welcomeMessage: "Hello! This is the Instagram DMs demo. (Users will not see this message)",
              backgroundColor: 'white',
              fontSize: 16,
              height: 450,
              poweredByTextColor: "#303235",
              botMessage: {
                backgroundColor: "#EFEFEF",
                textColor: "#303235",
                showAvatar: true,
                avatarSrc: pfp
              },
              userMessage: {
                backgroundColor: "#3797F0",
                textColor: "#ffffff",
                showAvatar: true,
                avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
              },
              textInput: {
                placeholder: "Message...",
                backgroundColor: "#ffffff",
                textColor: "#303235",
                sendButtonColor: "#3B81F6",
              }
            }
          }}
        />
      </div>
    </>
  )
}

export default DMs
