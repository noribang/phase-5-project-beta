import React, { useState } from 'react';
import styled from 'styled-components';

    function SmsForm() {
        // State
        const [sms, setSms] = useState('');
        const [number, setNumber] = useState(''); 

        // Function expression.
        // onSubmit().
        // Sends sms when form submit is clicked.
        const sendSms = (event) => {
            event.preventDefault();
        
            // Pass current number and sms state for attribute values.
            let smsObj = {
                mobile_number: '1' + number,
                message: sms,
            }

            // Make request
            fetch('http://localhost:3000/api/sms_messages/', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    accepts: 'application/json'
                },
                body: JSON.stringify(smsObj)
            })
            .then((resp) => resp.json())
            .then((data) => console.log(data))
        }

        // onChange handler. 
        // User types phone number and message.
        // Changes state for number and sms.
        const handleChange = (event) => {
            if (event.target.name === 'number') {
                setNumber(event.target.value);
            } else if (event.target.name === 'sms') {
                setSms(event.target.value);
            }
        }

        return(
        <div>
            {/* <h1>Messages here:</h1> */}
            <Container>
                <Header>Twilio SMS Message</Header>
                <Form onSubmit={sendSms}>
                    <label>Mobile Number:</label>
                    <Input name='number' onChange={handleChange}></Input>
                    <label>Message:</label>
                    <TextArea name='sms' onChange={handleChange}></TextArea>
                    <Button>Submit</Button>
                </Form>
            </Container>

        </div>
        );
    }
  
export default SmsForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #C8A2C8;
`

const Header = styled.h3`
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;s
`

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 6px 0 4px;
`

const TextArea = styled.textarea`
  width: 100%;
  resize: vertical;
  padding: 12px;
  margin: 6px 0 4px;
  height: 100px;
`

const Button = styled.button`
  width: 180px;
  padding: 12px 25px;
  margin: 6px 0 4px;
  font-size: 12px;
  text-transform: uppercase;
  color: white;
  background-color: black;
  letter-spacing: 1px;
  &:hover {
    cursor: pointer;
  }
`
