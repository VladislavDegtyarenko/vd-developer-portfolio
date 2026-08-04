import Image from "next/image";
import styled from "styled-components";

const StyledPhoto = styled.div`
  --photo-size: 200px;

  position: relative;
  width: var(--photo-size);
  height: var(--photo-size);
  border-radius: var(--borderRadiusNormal);
  border: solid var(--strokeWidth) ${({ theme }) => theme.cyan};
  flex-shrink: 0;
  position: relative;
  background-color: ${({ theme }) => theme.bg};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: calc(var(--borderRadiusNormal) - var(--strokeWidth));
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
    background: transparent;
    box-shadow: 0 0 4rem ${({ theme }) => theme.cyan};
    z-index: 1;
  }
`;

const Photo = () => {
  return (
    <StyledPhoto className="photo">
      <Image
        src="/assets/photo/vd-developer-july26.png"
        sizes="(max-width: 991.98px) 464px, 624px"
        alt="Photo of Vladyslav Dihtiarneko, frontend developer"
        fill
        priority
      />
    </StyledPhoto>
  );
};

export default Photo;
