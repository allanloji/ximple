import { useState } from "react";
import { FlatList } from "react-native";
import { router } from "expo-router";
import { useQuery } from "@tanstack/react-query";

import { Button, CreditOption, Spacer, Subtitle, Title } from "@/components";
import { Credit, queryKeys } from "@/api/queryKeys";
import { useCreditContext } from "@/contexts/creditContext";

import * as S from "./CreditModal.styles";

function CreditModal() {
  const { update: updateCreditData } = useCreditContext();
  const { data: credits } = useQuery({
    ...queryKeys.credits.all,
    // Keep the data in cache for 5 minutes
    staleTime: 60 * 1000 * 5,
  });

  const [selectedCredit, setSelectedCredit] = useState<Credit>();

  const onCreditPressed = (credit: Credit) => {
    setSelectedCredit(credit);
  };

  const onContinuePressed = () => {
    updateCreditData({
      credit: selectedCredit,
    });
    router.replace("/credit-acceptance");
  };

  return (
    <S.Container>
      <S.ModalContainer>
        <Title>¡Felicidades!</Title>
        <Spacer size={11} />
        <Subtitle>Encontramos estos créditos perfectos para ti:</Subtitle>
        <Spacer size={20} />
        <S.ListContainer>
          <FlatList
            data={credits}
            renderItem={({ item: credit }) => (
              <CreditOption
                label={credit.label}
                value={credit.value}
                selected={selectedCredit?.id === credit.id}
                onPress={() => onCreditPressed(credit)}
              />
            )}
            ItemSeparatorComponent={() => <Spacer size={12} />}
            keyExtractor={(credit) => credit.id}
            ListEmptyComponent={() => (
              <Subtitle>No hay créditos disponibles</Subtitle>
            )}
          />
        </S.ListContainer>
        <Spacer size={37} />
        <Button
          title="Seleccionar crédito"
          disabled={typeof selectedCredit === "undefined"}
          onPress={onContinuePressed}
        />
      </S.ModalContainer>
    </S.Container>
  );
}

export default CreditModal;
