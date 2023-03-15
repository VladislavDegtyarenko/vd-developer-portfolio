import styled from "styled-components";
import { H4, P1 } from "./../ui/Text";

const StyledSlide = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 991.98px) {
    flex-direction: column;
    text-align: center;
  }

  .slide {
    &__img {
      width: 320px;
      height: 320px;
      margin-right: 16px;
      flex-shrink: 0;
      border-radius: var(--borderRadiusNormal);
      overflow: hidden;
      box-shadow: 0 0 8px #35353533;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @media screen and (max-width: 991.98px) {
        width: 240px;
        height: 240px;
        margin-bottom: 16px;
        margin-right: 0;
      }
    }
    &__descr {
      margin-top: 16px;
      color: ${({ theme }) => theme.grey};
    }
    &__buttons {
      margin-top: 16px;
      display: flex;
      @media screen and (max-width: 991.98px) {
        justify-content: center;
      }
    }
    &__btn {
      text-decoration: none;
      font-weight: 700;
      padding: 12px 24px;
      border-radius: var(--borderRadiusNormal);
      color: ${({ theme }) => theme.grey};
      cursor: pointer;
      transition: background-color var(--duration), color var(--duration);
      border: none;
      &:hover {
        color: #dddcdc;
      }
      &-primary {
        background-color: ${({ theme }) => theme.cyan};
        color: ${({ theme }) => theme.fg};
        &:hover {
          background-color: #178695;
          color: ${({ theme }) => theme.fg};
        }
      }
      p {
        font-weight: 700;
      }

      &-disabled {
        color: #686868;
      }
    }
  }
`;

const ProjectSlide = ({
  img,
  title,
  description,
  previewLink,
  codeLink,
  previewProject,
}) => {
  return (
    <StyledSlide>
      <div className="slide__img">
        <img src={img} alt="" loading="lazy" />
      </div>
      <div className="slide__main">
        <H4>{title}</H4>
        <P1 className="slide__descr">{description}</P1>
        <div className="slide__buttons">
          {previewLink && previewLink.length > 0 ? (
            <P1
              as="button"
              // href={previewLink}
              onClick={() => previewProject(previewLink)}
              target="_blank"
              className="slide__btn slide__btn-primary"
            >
              Preview
            </P1>
          ) : null}

          {codeLink && codeLink.length > 0 ? (
            <P1 as="a" href={codeLink} target="_blank" className="slide__btn">
              Code
            </P1>
          ) : null}
        </div>
      </div>
    </StyledSlide>
  );
};

export default ProjectSlide;
