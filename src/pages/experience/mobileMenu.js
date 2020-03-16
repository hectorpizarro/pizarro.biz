import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledMobileMenu = styled.ul`
  font-size: ${props => props.theme.fontsize.xs};
`;

const StyledLi = styled.li`
  margin-left: ${props => props.theme.size.d2};
  margin-right: ${props => props.theme.size.d2};
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  padding: ${props => props.theme.size.d2};
  border: 1px solid ${props => props.theme.color.gray300};
  background-color: white;
  border-radius: ${props => props.theme.size.d1};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

const StyledRow1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledRow2 = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-height: 750px) {
    display: none;
  }
`;

const StyledCompany = styled.span`
  font-weight: 700;
  font-size: ${props => props.theme.fontsize.sm};
`;

/**
 * Slides component, shown only on mobile (under 640px browser width)
 * @returns {Object} UL DOM node
 */
const MobileMenu = ({ goToSlide, experienceIds, experiences }) => (
  <StyledMobileMenu>
    {experienceIds.map(experienceId => {
      const exp = experiences[experienceId];

      return (
        <StyledLi key={experienceId}>
          <StyledButton data-id={experienceId} onClick={goToSlide}>
            <StyledRow1>
              <div>
                <StyledCompany>{exp.company}</StyledCompany>
                {exp.contractorCompany && (
                  <span>{` (in ${exp.contractorCompany})`}</span>
                )}
              </div>
              <div>{`${exp.fromMonth} ${exp.fromYear}/${exp.toMonth} ${exp.toYear}`}</div>
            </StyledRow1>

            <StyledRow2>
              <div>{exp.role}</div>
              <div>
                {`${exp.isInsite ? "Insite" : "Remotely"} - ${exp.country}`}
              </div>
            </StyledRow2>
          </StyledButton>
        </StyledLi>
      );
    })}
  </StyledMobileMenu>
);

MobileMenu.propTypes = {
  // Function moves slide to selected section
  goToSlide: PropTypes.func.isRequired,
  experienceIds: PropTypes.array.isRequired,
  experiences: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  experienceIds: state.experiences.allIds,
  experiences: state.experiences.byId
});

export default connect(mapStateToProps)(MobileMenu);
