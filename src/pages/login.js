import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import PageContainer from "@components/PageContainer";
import InputContainer from "@components/InputContainer";
import Button from "@components/Button";
import FORM_VALIDATIONS from "@constants/formValidations";
import Container from "@styles/pages/login";
import { TbVideo } from "react-icons/tb";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, dirtyFields, touchedFields },
  } = useForm({
    mode: "onBlur",
  });

  async function onSubmitHandler(data) {
    setIsLoading(true);

    const { username, email } = data;

    try {
      await signIn("credentials", {
        callbackUrl: "/",
        username,
        email,
      });
    } catch (error) {
      setError("email", {
        type: "custom",
        message: "Houve um erro ao realizar o login",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <PageContainer title="Login" header={false}>
      <Container>
        <div className="login-container fade">
          <TbVideo className="logo" size={72} />
          <form
            className="login-form"
            onSubmit={handleSubmit(onSubmitHandler)}
            noValidate
          >
            <InputContainer
              register={register("username", FORM_VALIDATIONS.username)}
              error={errors.username}
              touchedField={touchedFields.username}
              dirtyField={dirtyFields.username}
              name="username"
              type="text"
              placeholder="Nome do usuário"
            />
            <InputContainer
              register={register("email", FORM_VALIDATIONS.email)}
              error={errors.email}
              touchedField={touchedFields.email}
              dirtyField={dirtyFields.email}
              name="email"
              type="email"
              placeholder="E-mail"
            />
            <Button type="submit" disabled={isLoading}>
              Entrar
            </Button>
          </form>
        </div>
      </Container>
    </PageContainer>
  );
}
