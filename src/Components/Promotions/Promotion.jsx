import { Box, Slide } from '@mui/material'
import React from 'react'
import { useEffect,useRef,useState } from 'react'
import { MessageText, PromotionsContainer } from '../../Style/Promotion/Promotion'

const messages = [
    "20% off on your first order!",
    "Summer sale starts now, visit any store.",
  ];
  const Promotion=()=> {
    const containerRef = useRef();
    const [show, setShow] = useState(true);
      const [messageIndex, setMessageIndex] = useState(0);
      useEffect(() => {
              setTimeout(() => {
                setShow(false);
              }, 3000);
      const intervalId = setInterval(() => {
        // get next message
        setMessageIndex((i) => (i + 1) % messages.length);
  
        // slide the message in
          setShow(true);
  
        setTimeout(() => {
          setShow(false);
        }, 3000);
      }, 4000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    return (
      <PromotionsContainer ref={containerRef} overflow="hidden">
        <Slide
          direction={show ? "left" : "right"}
          in={show}
          container={containerRef.current}
          timeout={{
            enter: 500,
            exit: 100,
          }}
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <MessageText>
              {messages[messageIndex]}
            </MessageText>
          </Box>
        </Slide>
      </PromotionsContainer>
    );
  }
export default Promotion
