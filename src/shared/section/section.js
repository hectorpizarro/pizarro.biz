import React from "react";
import PropTypes from "prop-types";
import { Element } from "react-scroll";
import SectionTitle from "./section-title";
import Footer from "../../app/footer";

const Section = props => {
  return (
    <Element name={props.name} className="flex flex-col h-screen w-full">
      <section className={`py-4 px-4 sm:px-8 h-full ${props.className}`}>
        {props.title && <SectionTitle title={props.title} />}
        {props.children}
      </section>
      {props.withFooter && <Footer />}
    </Element>
  );
};

Section.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  withFooter: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

Section.defaultProps = {
  className: "",
  withFooter: false
};

export default Section;
