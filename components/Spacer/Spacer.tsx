import * as S from "./Spacer.styles";

interface SpacerProps {
  size: number;
}

function Spacer({ size = 1 }: SpacerProps) {
  return <S.Container height={size} />;
}

export default Spacer;
