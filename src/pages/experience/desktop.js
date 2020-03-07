import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import styled from "styled-components";
import AppService from "../../shared/appService";
import { showModal } from "../../shared/modal/ducks";
import { MODAL_EXPERIENCE } from "../../shared/constants";

const StyledDesktop = styled.div`
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  column-gap: 1rem;
  row-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  max-height: 90vh;
  font-size: ${props => props.theme.fontsize.xs};

  @media (min-width: 730px) {
    font-size: ${props => props.theme.fontsize.sm};
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1024px) {
    font-size: ${props => props.theme.fontsize.base};
  }
`;

const StyledCard = styled.div`
  width: 100%;
  border-radius: ${props => props.theme.size.d1};
  border: 1px solid ${props => props.theme.color.gray400};
  background-color: ${props => props.theme.color.gray100};
  text-align: left;
  cursor: pointer;
  position: relative;
  transition-property: background-color, border-color;
  transition-duration: 500ms;
  box-shadow: ${props => props.theme.boxShadow};
  &:hover {
    border: 1px solid ${props => props.theme.color.gray600};
    background-color: white;
  }
`;

const StyledRow1 = styled.div`
  padding: ${props => {
    const { d2 } = props.theme.size;
    return `${d2} ${d2} 0 ${d2}`;
  }};
`;
const StyledRow2 = styled.div`
  border-top: 1px solid ${props => props.theme.color.gray300};
  margin-top: ${props => props.theme.size.d1};
  padding: ${props => {
    const { d1, d2 } = props.theme.size;
    return `${d1} ${d2} ${d1} ${d2}`;
  }};
`;
const StyledRow3 = styled.div`
  border-top: 1px solid ${props => props.theme.color.gray300};
  text-align: justify;
  padding: ${props => {
    const { d1, d2, d4 } = props.theme.size;
    return `${d1} ${d2} ${d4} ${d2}`;
  }};

  @media (max-height: 850px) {
    display: none;
  }
`;

const StyledRow1Cell = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledCompany = styled.span`
  font-weight: 700;
  font-size: ${props => props.theme.fontsize.sm};
  @media (min-width: 1024px) {
    font-size: ${props => props.theme.fontsize.base};
  }
`;

const StyledCountryLong = styled.div`
  display: none;
  @media (min-width: 960px) {
    display: block;
  }
`;

const StyledCountryShort = styled.div`
  display: block;
  @media (min-width: 960px) {
    display: none;
  }
`;

const StyledContractor = styled.div`
  font-size: ${props => props.theme.fontsize.sm};
  display: none;
  @media (min-width: 960px) {
    display: block;
  }
`;

const StyledDates = styled.div`
  font-size: ${props => props.theme.fontsize.sm};
`;

const StyledNinjaIcon = styled(FontAwesomeIcon)`
  font-size: ${props => props.theme.fontsize.xl1};
  color: ${props => props.theme.color.gray500};
  margin-right: ${props => props.theme.size.d2};
`;

const StyledMore = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: ${props => props.theme.size.d1};
  margin-bottom: ${props => props.theme.size.d1};
  font-size: ${props => props.theme.fontsize.xs};
  color: ${props => props.theme.color.red500};
`;

/**
 * Content to show if browser is over 640px width.
 * @returns {Object} DIV DOM node.
 */
const Desktop = ({ showModal, experiences, experienceIds }) => {
  /**
   * Set experience id to Redux and show modal with experience detail.
   * @param {Object} event - Click event
   */
  const showExperienceDetail = event => {
    const expId = AppService.getClickId(event);
    showModal({ id: MODAL_EXPERIENCE, data: `${expId}` });
  };

  return (
    <StyledDesktop>
      <StyledGrid>
        {experienceIds.map(experienceId => {
          const exp = experiences[experienceId];

          return (
            <StyledCard
              key={exp.id}
              data-id={exp.id}
              onClick={showExperienceDetail}
            >
              <StyledRow1>
                <StyledRow1Cell>
                  <StyledCompany>{exp.company}</StyledCompany>
                  <StyledCountryLong>
                    {`${exp.isInsite ? "Insite" : "Remotely"} - ${exp.country}`}
                  </StyledCountryLong>
                  <StyledCountryShort>{exp.country}</StyledCountryShort>
                </StyledRow1Cell>
                <StyledRow1Cell>
                  {exp.contractorCompany && (
                    <StyledContractor>
                      {` (in ${exp.contractorCompany})`}
                    </StyledContractor>
                  )}
                  <StyledDates>
                    {`${exp.fromMonth} ${exp.fromYear}/${exp.toMonth} ${exp.toYear}`}
                  </StyledDates>
                </StyledRow1Cell>
              </StyledRow1>
              <StyledRow2>
                <StyledNinjaIcon icon={faUserNinja} />
                <span>{exp.role}</span>
              </StyledRow2>
              <StyledRow3>{exp.descriptionShort}</StyledRow3>
              <StyledMore
                href="/#"
                data-id={exp.id}
                onClick={showExperienceDetail}
              >
                more
              </StyledMore>
            </StyledCard>
          );
        })}
      </StyledGrid>
    </StyledDesktop>
  );
};

Desktop.propTypes = {
  experienceIds: PropTypes.array,
  experiences: PropTypes.object
};

const mapStateToProps = state => ({
  experienceIds: state.experiences.allIds,
  experiences: state.experiences.byId
});

const mapDispatchToProps = {
  showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Desktop);
