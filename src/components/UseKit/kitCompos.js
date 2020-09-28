import tw, { styled } from "twin.macro"
export const Title1 = styled.div`
  ${tw`text-gray-300 text-center text-4xl font-bold`}
  font-family:'Fondamento';
  color: ${(props) => (props.color ? " #e0e2db" : "text-gray-300")};
`

export const Title2 = styled.div`
  ${tw`text-gray-300 text-center text-3xl font-extrabold tracking-widest leading-relaxed shadow-md`}
  font-family:'Cinzel'
`

/* export const Title2 = styled.div`
${tw``}
`; */
