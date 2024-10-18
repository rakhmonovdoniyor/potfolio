import React from "react";
import {
  Box,
  BoxWrap,
  BtnWrap,
  Contai86n,
  Contain,
  GradientButton,
  Img1,
  Img2,
  SecondBody,
  SecondBodyLeft,
  SecondBodyRight,
  Skills,
  SkillsWrap,
  TextBody,
  TextP,
  WrapFlex,
  WrapFlexLeft,
  WrapFlexRight,
} from "../../styles/homestyle";
import myimg from "../../assets/my/image.png";
import img4 from "../../assets/projects/image.png";
import img3 from "../../assets/projects/imagecrm.png";
import "../../index.css";

import img2 from "../../assets/home/image.png";
import "../../index.css";
import { Divider } from "@mui/joy";
import LinearProgressDeterminate from "./linear";

import { Link } from "react-router-dom";
import SecondBody1 from "./secomd";
import { MyPhoto, MyPhotoWrap } from "../../styles/read.style";

const Home = () => {
  return (
    <div>
      <Contain>
        <WrapFlex>
          <WrapFlexLeft>
            <h1>Home</h1>
            <h1>Blogs</h1>
          </WrapFlexLeft>
          <WrapFlexRight>
            <h2>About</h2>

            <h2>Projects</h2>
            <Link to="/contact">
              <button class="button-85" role="button">
                Contact{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <g clip-path="url(#clip0_60_7096)">
                    <path
                      d="M13.6109 0H5.05533C4.84037 0 4.66643 0.173943 4.66643 0.388901C4.66643 0.603859 4.84037 0.777802 5.05533 0.777802H12.6721L0.113697 13.3362C-0.0382246 13.4881 -0.0382246 13.7342 0.113697 13.8861C0.18964 13.962 0.289171 14 0.388666 14C0.488161 14 0.587656 13.962 0.663635 13.8861L13.222 1.3277V8.94447C13.222 9.15943 13.3959 9.33337 13.6109 9.33337C13.8259 9.33337 13.9998 9.15943 13.9998 8.94447V0.388901C13.9998 0.173943 13.8258 0 13.6109 0Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_60_7096">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </Link>
          </WrapFlexRight>
        </WrapFlex>
        <MyPhotoWrap>
          <MyPhoto src={myimg} alt="img" />
        </MyPhotoWrap>
        <MyPhotoWrap>
          <p>Name:</p>
          <h1>Rakhmonov Doniyor</h1>
          <p>Age:</p>
          <h1>20</h1>
        </MyPhotoWrap>

        <TextBody>
          <h1>About me</h1>
          <TextP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            dolor perspiciatis veritatis magnam placeat non facilis modi
            necessitatibus similique, aspernatur pariatur, fugit deleniti
            corporis voluptatum id molestiae voluptatibus omnis repudiandae odit
            unde voluptate. Iusto obcaecati ipsam molestias ex, eos excepturi
            rerum quibusdam asperiores explicabo architecto qui ullam nulla
            commodi error corrupti veritatis rem exercitationem laboriosam
            placeat iste quo quos fugit ea? Consectetur animi ullam nisi
            expedita, eum assumenda nostrum nemo ratione. Recusandae ipsa minima
            numquam enim accusantium, ab culpa praesentium atque magni
            voluptates voluptatem ipsum, dolorum cum nihil corrupti omnis
            cupiditate et! Quisquam earum perspiciatis debitis corporis! Neque,
            ad quaerat!
          </TextP>
        </TextBody>
        <SecondBody1 />
        <Divider orientation="horizontal">
          <h1 style={{ color: "white", paddingTop: "20px" }}>Projects</h1>
        </Divider>
        <SkillsWrap>
          <Link
            overlay
            to="https://doniyor-crm.netlify.app/"
            href="https://doniyor-crm.netlify.app/"
            // underline="none"
            style={{ textDecoration: "none" }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Skills>
              <img src={img3} alt="" />
              <h1>about</h1>
              <TextP style={{ color: "blue" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, saepe.
              </TextP>
            </Skills>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            overlay
            to="https://camp-site-camping.netlify.app/"
            underline="none"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Skills>
              <Img2 src={img4} alt="sss" />
              <h1>about</h1>
              <TextP style={{ color: "blue" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, saepe.
              </TextP>
            </Skills>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            overlay
            href="https://camp-site-camping.netlify.app/"
            underline="none"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Skills>
              <Img2 src={img4} alt="sss" />
              <h1>about</h1>
              <TextP style={{ color: "blue" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, saepe.
              </TextP>
            </Skills>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            overlay
            href="https://camp-site-camping.netlify.app/"
            underline="none"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Skills>
              <Img2 src={img4} alt="sss" />
              <h1>about</h1>
              <TextP style={{ color: "blue" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, saepe.
              </TextP>
            </Skills>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            overlay
            href="https://camp-site-camping.netlify.app/"
            underline="none"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Skills>
              <Img2 src={img4} alt="sss" />
              <h1>about</h1>
              <TextP style={{ color: "blue" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, saepe.
              </TextP>
            </Skills>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            overlay
            href="https://camp-site-camping.netlify.app/"
            underline="none"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Skills>
              <Img2 src={img4} alt="sss" />
              <h1>about</h1>
              <TextP style={{ color: "blue" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, saepe.
              </TextP>
            </Skills>
          </Link>
        </SkillsWrap>
        <Divider orientation="horizontal">
          <h1>#rakhmonovdoniyor2024 </h1>
        </Divider>
      </Contain>
    </div>
  );
};

export default Home;
