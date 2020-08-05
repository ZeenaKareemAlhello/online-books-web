import React from 'react';
import './style.scss';
import audioBook from './audioBook.mp3';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const AudioPage = () => {
  const bookName = 'Mind without body';
  const audio = audioBook;
  const BookCover = 'https://via.placeholder.com/353x498';
  const description = `is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since
  the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book.galley of type and
  scrambled it to make a type specimen book. .galley of type and
  scrambled it to make a type specimen book.type specimen book`;
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol sm="5" size="12">
          <div className="mt-5 d-flex align-items-center justify-content-center">
            <img src={BookCover} width="353" height="498" alt="bookCover" />
          </div>
        </MDBCol>
        <MDBCol sm="7" size="12">
          <div className="mt-5">
            <h1 className="blue-text">{bookName}</h1>
            <p className="mt-3 d-none d-sm-block text-2xl leading-7 text-justify">
              {description}
            </p>
          </div>
          <div className="mt-5">
            <AudioPlayer
              src={audio}
              style={{
                height: '200px',
              }}
              customVolumeControls={[]}
              customAdditionalControls={[]}
              showFilledProgress={false}
            />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AudioPage;
