import React from "react";
import {
  BtnWrap,
  Img1,
  SecondBody,
  SecondBodyLeft,
  SecondBodyRight,
  TextP,
} from "../../styles/homestyle";
import img from "../../assets/bof=dy/image1.png";
import { Link } from "react-router-dom";

const SecondBody1 = () => {
  return (
    <div>
      <SecondBody>
        <SecondBodyLeft>
          <h1>Developer</h1>
          <TextP>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            incidunt rerum impedit quisquam, facere provident similique veniam
            excepturi fuga. Distinctio eum nesciunt corrupti placeat nulla
            repellat dolor fugit tempore necessitatibus, itaque aliquam. Rerum
            at iusto alias. Libero esse qui at, doloremque odit adipisci
            temporibus. Soluta autem reprehenderit eaque recusandae veniam.
          </TextP>
          <div>
            <Link to="/readmore">
              <BtnWrap>
                Read More
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
              </BtnWrap>
            </Link>
          </div>
        </SecondBodyLeft>
        <SecondBodyRight>
          <Img1 src={img} alt="df" />
        </SecondBodyRight>
      </SecondBody>
    </div>
  );
};

export default SecondBody1;
