import React from "react";
import Chip from "../Main/Chip";
import TestimonialIcon from "../../assets/icons/testimonial.svg";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonial = () => {
  return (
    <div className="flex flex-col w-full space-y-8 my-32">
      <Chip icon={TestimonialIcon} name="Testimonial" />
      <h3 className="text-4xl leading-normal">
        Trusted By
        <span className="text-green"> Chiefs</span>
      </h3>
      <Carousel showStatus={false} autoPlay emulateTouch swipeable width="100%">
        <div className="flex flex-col text-left">
          <div className="flex flex-col space-y-8 border border-border rounded-3xl px-8 pt-8 pb-12">
            <div className="flex flex-row space-x-2">
              <Avatar />
              <div>
                <div>Grace Villaquiran</div>
                <div className="text-xs text-subtitle">
                  Product Owner of{" "}
                  <span className="text-green">Telefonica Colombia</span>
                </div>
              </div>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                laudantium deleniti, corrupti quae officiis harum minima
                molestiae aut omnis adipisci odio similique quam quos nemo
                neque. Ut explicabo minus alias?
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-left">
          <div className="flex flex-col space-y-8 border border-border rounded-3xl px-8 pt-8 pb-12">
            <div className="flex flex-row space-x-2">
              <Avatar />
              <div>
                <div>Grace Villaquiran</div>
                <div className="text-xs text-subtitle">
                  Product Owner of{" "}
                  <span className="text-green">Telefonica Colombia</span>
                </div>
              </div>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                laudantium deleniti, corrupti quae officiis harum minima
                molestiae aut omnis adipisci odio similique quam quos nemo
                neque. Ut explicabo minus alias?
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-left">
          <div className="flex flex-col space-y-8 border border-border rounded-3xl px-8 pt-8 pb-12">
            <div className="flex flex-row space-x-2">
              <Avatar />
              <div>
                <div>Grace Villaquiran</div>
                <div className="text-xs text-subtitle">
                  Product Owner of{" "}
                  <span className="text-green">Telefonica Colombia</span>
                </div>
              </div>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                laudantium deleniti, corrupti quae officiis harum minima
                molestiae aut omnis adipisci odio similique quam quos nemo
                neque. Ut explicabo minus alias?
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonial;
