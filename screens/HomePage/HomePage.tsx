import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as S from "./HomePage.styles";
import Spacer from "@/components/Spacer";

function HomePage() {
  return (
    <SafeAreaView>
      <S.Container>
        <Spacer size={64} />
        <S.Title>Descubre tu credito</S.Title>
        <Spacer size={11} />
        <S.SubtitleContainer>
          <S.Subtitle>
            Llena el siguiente formulario para conocer los creditos que tenemos
            disponibles para ti.
          </S.Subtitle>
        </S.SubtitleContainer>
      </S.Container>
    </SafeAreaView>
  );
}

export default HomePage;
