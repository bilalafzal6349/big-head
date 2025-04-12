import { Container } from "./Container";
import React from "react";

export const EventSection = () => {
  return (
    <div className="px-6 pt-12" id="events">
      <Container>
        <div className="py-24 text-center">
          <h1 className="font-signatra text-5xl leading-tight tracking-[-0.00833em]">
            Events
          </h1>
          <p className="mt-12 text-[20px] leading-[34px] tracking-[0.01071em] font-semibold font-Montserrat text-[rgba(0,0,0,0.87)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tincidunt condimentum dolor, quis sagittis enim facilisis a. Vivamus
            sed congue justo. Ut dignissim gravida augue, at tristique nisl
            varius sed. Curabitur vulputate, ipsum ac pulvinar semper, lacus leo
            euismod orci, non placerat risus purus non sem. Nulla non quam sit
            amet augue pharetra malesuada. Aenean a sodales ante. Vivamus congue
            ligula magna, nec scelerisque ipsum condimentum eu. Maecenas aliquam
            aliquet urna nec fermentum. Nam sit amet mattis metus, vel
            pellentesque lectus. Nulla elit quam, dictum at dictum eu, elementum
            vitae eros. In volutpat sagittis semper. Praesent et augue accumsan,
            auctor libero at, molestie mi. Cras feugiat dictum fringilla.
          </p>
        </div>
      </Container>
    </div>
  );
};
