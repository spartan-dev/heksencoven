import tw, { styled } from "twin.macro"

export const Title1 = styled.div`
  ${tw`text-silver text-center text-4xl font-bold mt-3 mb-3`}
  font-family:'Fondamento';
  color: ${(props) => (props.color ? "#e0e2db" : "text-gray-300")};
`

export const Title2 = styled.div`
  ${(props) =>
    props.space
      ? tw` xl:text-4xl lg:text-4xl tracking-wide  px-3 py-3 text-purplelight text-center text-3xl font-bold tracking-widest leading-relaxed  mt-3 mb-3`
      : tw` 
        sm:text-3xl
        xl:text-5xl 
        text-2xl 
        text-silver text-center
        font-bold tracking-widest
        leading-relaxed mt-3 mb-3`};
  text-align: ${(props) =>
    props.align === "left"
      ? "left"
      : props.align === "right"
      ? "right"
      : "center"};
  font-family: ${(props) => (props.font ? "Cinzel Bl" : "Cinzel")};
`
export const Title3 = styled.h3`
  ${tw`sm:text-left  xl:text-xl lg:text-xl tracking-wide  py-3  text-center font-bold   mt-3 mb-3`};
  font-family: "Cinzel";
`
export const TitleSection = styled.h1`
  font-family: "Cinzel Bl";
  font-weight: 700;
  font-size: 43px;
  color: #7e54c6;
  letter-spacing: 7px;
  line-height: 1.9em;
  padding-left: 12rem;
`
export const ButtonPri = styled.button`
  ${tw`bg-transparent 
  mt-3 mb-3 
  text-purplelight
  font-semibold 
  py-2 px-2
  border border-purplelight 
  text-2xl
  flex justify-evenly items-center
  hover:bg-purplelight 
  hover:text-white 
  hover:border-transparent
  `};

  font-family: "Fondamento";
  width: ${(props) =>
    props.width === "large"
      ? "30%"
      : props.width === "medium"
      ? "25%"
      : props.width === "small"
      ? "15%"
      : "99%"};
`
export const ContenedorSection = styled.div`
  ${tw`  
  flex
  justify-center
 -mb-12
 xl:mb-20
 `};
`
