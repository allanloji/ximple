import { Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, TextInput, Spacer } from "@/components";
import * as S from "./HomePage.styles";
import { Link } from "expo-router";

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
        <Spacer size={30} />
        <TextInput label="Nombre" />
        <Spacer size={16} />
        <TextInput label="Correo" type="email" />
        <Spacer size={35} />
        <Link href="/modal" asChild>
          <Button title="Descubrir créditos" />
        </Link>
        <S.KeyboardDismiss onPress={Keyboard.dismiss} />
      </S.Container>
    </SafeAreaView>
  );
}

export default HomePage;
