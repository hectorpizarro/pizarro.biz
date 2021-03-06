import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserNinja,
  faLaptopCode,
  faIndustry,
  faCogs
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledCard = styled.div`
  /* Set font family because it will be loaded in React portal inside mobile menu */
  font-family: "Lato", sans-serif;
  border: 1px solid black;
  border-radius: ${props => props.theme.size.d1};
  background-color: white;
  font-size: ${props => props.theme.fontsize.xs};
  @media (min-width: 640px) {
    font-size: ${props => props.theme.fontsize.base};
  }
`;

const StyledHead = styled.div`
  border-bottom: 1px solid ${props => props.theme.color.gray200};
  padding: ${props => {
    const { d2, d4 } = props.theme.size;
    return `${d2} ${d4} ${d2} ${d4}`;
  }};
  @media (min-width: 640px) {
    padding-top: ${props => props.theme.size.d4};
    padding-bottom: ${props => props.theme.size.d4};
  }
`;

const StyledDescription = styled.div`
  border-bottom: 1px solid ${props => props.theme.color.gray200};
  padding: ${props => {
    const { d2, d4 } = props.theme.size;
    return `${d2} ${d4} 0 ${d4}`;
  }};
  @media (min-width: 640px) {
    padding-top: ${props => props.theme.size.d4};
    padding-bottom: ${props => props.theme.size.d2};
  }
`;

const StyledDescriptionP = styled.p`
  padding-bottom: ${props => props.theme.size.d2};
  text-align: justify;
`;

const StyledTech = styled.div`
  display: grid;
  column-gap: 0.75rem;
  row-gap: ${props => props.theme.size.d1};
  grid-template-columns: 0.5rem 1fr;
  grid-template-rows: repeat(3 2rem);
  padding: ${props => {
    const { d2, d4 } = props.theme.size;
    return `${d2} ${d4} ${d2} ${d4}`;
  }};
  @media (min-width: 640px) {
    column-gap: 1rem;
    grid-template-columns: 0.5rem 3rem 1fr;
    padding-top: ${props => props.theme.size.d4};
    padding-bottom: ${props => props.theme.size.d4};
  }
`;

const StyledTechIcon = styled(FontAwesomeIcon)`
  margin-top: ${props => props.theme.size.d1};
  color: ${props => props.theme.color.gray700};
  @media (min-width: 640px) {
    margin-right: ${props => props.theme.size.d2};
    font-size: ${props => props.theme.fontsize.xl1};
  }
`;

const StyledTechLabel = styled.div`
  font-weight: 700;
  color: ${props => props.theme.color.gray700};
  text-align: right;
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`;

const StyledTechDetail = styled.div`
  /* margin-left: ${props => props.theme.size.d2};
  @media (min-width: 640px) {
    margin-left: 0;
  } */
`;

const StyledHeadRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledRowCell = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCompany = styled.div`
  font-weight: 700;
  font-size: ${props => props.theme.fontsize.xs};
  @media (min-width: 640px) {
    font-size: ${props => props.theme.fontsize.xl1};
  }
`;

const StyledContractor = styled.div`
  margin-left: ${props => props.theme.size.d1};
`;

const StyledExpType = styled.div`
  font-size: ${props => props.theme.fontsize.xs};
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`;

const StyledCellSep = styled.div`
  margin-left: ${props => props.theme.size.d2};
  margin-right: ${props => props.theme.size.d2};
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`;

const StyledNinjaIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.color.gray500};
  margin-right: ${props => props.theme.size.d2};
  @media (min-width: 640px) {
    font-size: ${props => props.theme.fontsize.xl1};
  }
`;

const StyledTime = styled.span`
  font-size: ${props => props.theme.fontsize.xs};
  margin-right: ${props => props.theme.size.d3};
  display: none;
  @media (min-width: 640px) {
    display: inline;
  }
`;

/**
 * Single experience detailed card component. On mobile it's shown in a single slide. On desktop is shown inside a modal.
 */
const Card = ({ experience }) => {
  return (
    <StyledCard>
      {/* Head */}
      <StyledHead>
        {/* Head Row 1: company, country */}
        <StyledHeadRow>
          <StyledRowCell>
            <StyledCompany>{experience.company}</StyledCompany>
            {experience.contractorCompany && (
              <StyledContractor>
                (in {experience.contractorCompany})
              </StyledContractor>
            )}
          </StyledRowCell>
          <StyledRowCell>
            <StyledExpType>
              {experience.isInsite ? "Insite" : "Remotely"}
            </StyledExpType>
            <StyledCellSep>-</StyledCellSep>
            <div>{experience.country}</div>
          </StyledRowCell>
        </StyledHeadRow>
        {/* Head Row 2: role, dates */}
        <StyledHeadRow>
          <div>
            <StyledNinjaIcon icon={faUserNinja} />
            <span>{experience.role}</span>
          </div>
          <div>
            <StyledTime>({experience.timeDescription})</StyledTime>
            <span>{`${experience.fromMonth} ${experience.fromYear} - ${experience.toMonth} ${experience.toYear}`}</span>
          </div>
        </StyledHeadRow>
      </StyledHead>
      {/* Body description */}
      <StyledDescription>
        {experience.description.map((parr, idxParr) => (
          // eslint-disable-next-line react/no-array-index-key
          <StyledDescriptionP key={idxParr}>{parr}</StyledDescriptionP>
        ))}
      </StyledDescription>
      {/* Body Tech */}
      <StyledTech>
        {experience.tech_dev && (
          <>
            <StyledTechIcon icon={faLaptopCode} />
            <StyledTechLabel>Dev:</StyledTechLabel>
            <StyledTechDetail>{experience.tech_dev}</StyledTechDetail>
          </>
        )}
        {experience.tech_build && (
          <>
            <StyledTechIcon icon={faIndustry} />
            <StyledTechLabel>Build:</StyledTechLabel>
            <StyledTechDetail>{experience.tech_build}</StyledTechDetail>
          </>
        )}
        {experience.tech_test && (
          <>
            <StyledTechIcon icon={faCogs} />
            <StyledTechLabel>Test:</StyledTechLabel>
            <StyledTechDetail>{experience.tech_test}</StyledTechDetail>
          </>
        )}
      </StyledTech>
    </StyledCard>
  );
};

Card.propTypes = {
  experience: PropTypes.object.isRequired // Single experience object from JSON
};

export default Card;
