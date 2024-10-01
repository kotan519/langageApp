import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { useRegister } from "../../../hooks/useRegister";
import { useNavigate } from "react-router-dom";

export const Register: FC = memo(() => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { registerUser } = useRegister();
  const navigate = useNavigate();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const onClickLogin = useCallback(() => navigate("/"), [navigate]);

  const onRegisterClick = async () => {
    if (email && password) {
      try {
        await registerUser(email, password);
      } catch (error) {
        console.error("Register failed", error);
      }
    }
  };

  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          単語学習アプリ
        </Heading>
        <Divider my={4} />
        <Heading as="h2" size="md" textAlign="center" mb={2}>ユーザー登録</Heading>
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="Email"
            value={email}
            onChange={onChangeEmail}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
          <PrimaryButton disabled={email === "" || password === ""} onClick={onRegisterClick}>
            登録
          </PrimaryButton>
          <PrimaryButton onClick={onClickLogin}>ログインする</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});


