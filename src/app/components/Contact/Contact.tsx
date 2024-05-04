/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="Contact" id="contact">
      <div className="info">
        <div className="title">
          <h1>Entre em contato</h1>
          <p>
            Have a question or a project in mind? I'd love to hear from you.
            Let's chat and make something amazing together.
          </p>
        </div>
        <div className="contactInfo">
          <div className="contacts">
            <p> (71) 90000 - 0000 </p>
          </div>
          <div className="contacts">
            <p> michelgeronimoc@gmail.com</p>
          </div>
          <div className="contacts">
            <p> michelgeronimoc@hotmail.com</p>
          </div>
        </div>
      </div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, minWidth: 0 },
          maxWidth: "500px",
          width: "100%",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          // fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          // fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Número de telefone"
          variant="outlined"
          // fullWidth
        />
        <TextField
          id="outlined-multiline-static"
          label="Sua mensagem"
          multiline
          rows={4}
          // fullWidth
        />
        <button className="send">Enviar mensagem</button>
      </Box>
    </section>
  );
}
