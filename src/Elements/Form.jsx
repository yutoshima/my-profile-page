import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  padding: 20px;
  border-radius: 5px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #DEDEDE;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #DEDEDE;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #7B9AD0;
  color: #DEDEDE;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  margin: 0 auto;

  &:hover {
    background-color: #DEDEDE;
    color: #7B9AD0;
  }
`;

const ContactForm = () => {
  return (
    <FormContainer>
      <FormTitle>お問い合わせフォーム</FormTitle>
      <FormGroup>
        <Label htmlFor="name">氏名</Label>
        <Input type="text" id="name" name="name" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message">お問い合わせ内容</Label>
        <TextArea id="message" name="message" rows="5" />
      </FormGroup>
      <Button type="submit">送信</Button>
    </FormContainer>
  );
};

export default ContactForm;