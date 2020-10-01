import tw, { styled } from "twin.macro"

export const Title1 = styled.div`
  ${tw`text-silver text-center text-4xl font-bold mt-3 mb-3`}
  font-family:'Fondamento';
  color: ${(props) => (props.color ? " #e0e2db" : "text-gray-300")};
`

export const Title2 = styled.div`
  ${tw` px-3 py-3 text-silver text-center text-3xl font-bold tracking-widest leading-relaxed shadow-md mt-3 mb-3`};
  font-family: "Cinzel";
`

export const ButtonPri = styled.button`
  ${tw`bg-transparent hover:bg-purplelight
  mt-3 mb-3 
text-purplelight font-semibold
  hover:text-white py-2 px-4
  border border-purplelight 
  hover:border-transparent rounded
  text-2xl
  flex justify-evenly items-center
  `};

  font-family: "Fondamento";
  width: ${(props) =>
    props.width === "large"
      ? "30%"
      : props.width === "medium"
      ? "25%"
      : props.width === "small"
      ? "15%"
      : ""};
`
export const Contenedor = styled.div`
  ${tw`mt-3 mb-3 bg-palesilver w-full  px-2 py-3 flex justify-center items-center`};
`
/* export const Title2 = styled.div`
${tw``}
`; */
