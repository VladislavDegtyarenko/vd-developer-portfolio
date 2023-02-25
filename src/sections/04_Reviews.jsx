import styled from "styled-components";
import Section from "./../ui/Section";
import SectionDivider from "./../ui/SectionDivider";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import SectionSubtitle from "../ui/SectionSubtitle";
import { P1, P2 } from "../ui/Text";

import OVasinAvatar from "./../assets/reviews/o-vasin.jpg";

import { Fade } from "react-awesome-reveal";

const StyledReviews = styled(Section)`
  .reviews {
    &__descr {
      margin-top: 48px;
    }
    &__card {
      margin-top: 48px;
      padding: 32px;
      background: ${({ theme }) => theme.cardBg};
      border: 4px solid rgba(27, 154, 170, 0.2);
      border-radius: var(--borderRadiusNormal);

      @media screen and (max-width: 991.98px) {
        padding: 24px;
      }

      &_text {
        & > *:not(:first-child) {
          margin-top: 16px;
        }
        .bold-white {
          font-weight: 700;
          color: ${({ theme }) => theme.fg};
        }

        .bold-cyan {
          font-weight: 700;
          color: ${({ theme }) => theme.cyan};
        }
        * {
          @media screen and (max-width: 991.98px) {
            font-size: 16px;
            line-height: 24px;
          }
        }
      }
      &_sign {
        display: flex;
        align-items: center;
        margin-top: 16px;
      }
      &_avatar {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        margin-right: 16px;
      }
      &_name {
        color: ${({ theme }) => theme.cyan};
        font-weight: 700;
      }
      &_position {
        color: ${({ theme }) => theme.grey};
      }
    }
  }
`;

const Reviews = () => {
  return (
    <>
      <StyledReviews id="reviews">
        <Container>
          <SectionTitle>Reviews</SectionTitle>
          <SectionSubtitle className="reviews__descr">
            See what my past colleagues, managers and clients have to say about my
            frontend development skills.
          </SectionSubtitle>

          <Fade triggerOnce>
            <div className="reviews__card">
              <div className="reviews__card_text">
                <P1>
                  I had the pleasure of working with{" "}
                  <span className="bold-white">Vladislav</span> on a headless project that
                  utilized <span className="bold-cyan">React</span> and{" "}
                  <span className="bold-cyan">Salesforce Commerce Cloud</span>. His
                  exceptional skills as a frontend developer were evident from the start,
                  as he quickly learned and adapted to new technologies, workflow, and
                  platforms. He consistently produced high-quality work, and his attention
                  to detail was unparalleled.
                </P1>
                <P1>
                  Not only was <span className="bold-white">Vladislav</span> a talented
                  developer, but he was also an incredibly responsible and reliable team
                  player. His dedication to the project was unwavering, and he always went
                  above and beyond to ensure the success of the project.
                </P1>
                <P1>
                  I am confident that <span className="bold-white">Vladislav</span> will
                  make a valuable contribution to any frontend development role he takes
                  on, and <span className="bold-cyan">recommend him</span> without
                  hesitation.
                </P1>
              </div>
              <div className="reviews__card_sign">
                <img src={OVasinAvatar} alt="" className="reviews__card_avatar" />
                <div>
                  <P1 className="reviews__card_name">Oleksiy Vasin</P1>
                  <P2 className="reviews__card_position">
                    Frontend Development Lead, Astound Commerce
                  </P2>
                </div>
              </div>
            </div>
          </Fade>
        </Container>
      </StyledReviews>
      <Container>
        <SectionDivider />
      </Container>
    </>
  );
};

export default Reviews;
