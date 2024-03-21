import { Keyboard, Alert, Platform } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";

import { Button, TextInput, Spacer, Title, Subtitle } from "@/components";
import * as S from "./HomePage.styles";
import { CREDITS_LIST, queryKeys } from "@/api/queryKeys";
import { useCreditContext } from "@/contexts/creditContext";

type FormData = {
  name: string;
  email: string;
};

function HomePage() {
  const queryClient = useQueryClient();
  const { update: updateCreditData } = useCreditContext();
  const {
    control,
    formState: { isValid },
  } = useForm<FormData>({
    defaultValues: { name: "", email: "" },
    mode: "onChange",
  });

  const { mutate: getCredits, isPending } = useMutation({
    mutationFn: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(CREDITS_LIST);
        }, 1000);
      }),
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.credits.all.queryKey, data);
      router.navigate("modal");
    },
    onError: () => {
      Alert.alert("Error", "Ocurrió un error al obtener los créditos.");
    },
  });

  const onSubmit = () => {
    Keyboard.dismiss();
    updateCreditData({
      name: "name",
      email: "email",
    });
    getCredits();
  };

  return (
    <S.Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Spacer size={72} />
      <Title>Descubre tu crédito</Title>
      <Spacer size={11} />
      <S.SubtitleContainer>
        <Subtitle>
          Llena el siguiente formulario para conocer los créditos que tenemos
          disponibles para ti.
        </Subtitle>
      </S.SubtitleContainer>
      <Spacer size={30} />
      <Controller
        control={control}
        rules={{
          required: "El nombre es requerido.",
          minLength: {
            value: 2,
            message: "El nombre debe tener al menos 2 caractéres.",
          },
          maxLength: {
            value: 50,
            message: "El nombre debe tener menos de 50 caractéres.",
          },
          pattern: {
            value: /^[a-zA-Z\s]*$/,
            message: "El nombre solo puede contener letras y espacios.",
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextInput
            label="Nombre"
            value={value}
            onChange={onChange}
            error={error?.message}
            name="name"
          />
        )}
        name="name"
      />
      <Spacer size={16} />
      <Controller
        control={control}
        rules={{
          required: "El correo es requerido.",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "El correo debe ser un correo válido.",
          },
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextInput
            label="Correo"
            type="email"
            value={value}
            onChange={onChange}
            error={error?.message}
            name="email"
            autoCapitalize="none"
          />
        )}
        name="email"
      />
      <Spacer size={35} />
      <Button
        title="Descubrir créditos"
        disabled={!isValid}
        isLoading={isPending}
        onPress={onSubmit}
      />

      {/* <S.KeyboardDismiss onPress={Keyboard.dismiss} /> */}
    </S.Container>
  );
}

export default HomePage;
