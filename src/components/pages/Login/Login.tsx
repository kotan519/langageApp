import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";
import { useHistory } from "react-router-dom";
import { useLoginUser } from "../../../hooks/useLoginUser";
import { useMessage } from "../../../hooks/useMessage";

export const Login: FC = memo(() => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { showMessage } = useMessage();
  const { loginUser } = useLoginUser();

  const history = useHistory();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const onClickRegister = useCallback(() => history.push("/register"),[history]);

  const onLoginClick = async () => {
    if (email && password) {
      try {
        await loginUser(email, password);
      } catch (error) {
        console.error("Login failed", error);
        showMessage({title: "ログインに失敗しました", status:"error"});
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
        <Heading as="h2" size="md" textAlign="center" mb={2}>ログイン</Heading>
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
          <PrimaryButton disabled={email === "" || password === ""} onClick={onLoginClick}>
            ログイン
          </PrimaryButton>
          <PrimaryButton onClick={onClickRegister}>登録する</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});


