import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import MusicPlayer from "./MusicPlayer";

const LyricsModal = ({ modal, toggle, lyrics, selectedSong }) => {
  console.log(selectedSong);
  const {
    artist: { name },
    album: { cover_medium },
    title,
    preview,
  } = selectedSong;
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <ModalBody>
        <h3 style={{ textAlign: "center" }}>
          {name} -{" "}
          <strong style={{ textTransform: "uppercase" }}>{title}</strong>
        </h3>
        <div className="album-cover">
          <img src={cover_medium} alt="" />
          <MusicPlayer src={preview} />
        </div>
        <span
          dangerouslySetInnerHTML={{
            __html: lyrics
              ? lyrics.replace(/(\r\n|\r|\n)/g, "<br />")
              : "No lyrics found.",
          }}
        ></span>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default LyricsModal;
