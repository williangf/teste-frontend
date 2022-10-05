import { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import PageContainer from "@components/PageContainer";
import InputContainer from "@components/InputContainer";
import Button from "@components/Button";
import Container from "@styles/pages/login";
import { TbVideo } from "react-icons/tb";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, dirtyFields, touchedFields, isValid },
  } = useForm({
    mode: "onBlur",
  });

  async function onSubmitHandler(data) {
    setIsLoading(true);

    const { username, email } = data;

    try {
      await signIn("credentials", {
        callbackUrl: '/',
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
        <div className="login-container">
          <TbVideo className="logo" size={72} />
          <form
            className="login-form"
            onSubmit={handleSubmit(onSubmitHandler)}
            noValidate
          >
            <InputContainer
              register={register("username", {
                required: "Campo obrigatório",
                maxLength: {
                  value: 30,
                  message: "Número máximo de caracteres atingido"
                },
              })}
              error={errors.username}
              touchedField={touchedFields.username}
              dirtyField={dirtyFields.username}
              name="username"
              type="text"
              placeholder="Nome do usuário"
            />
            <InputContainer
              register={register("email", {
                required: "Campo obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido"
                },
                maxLength: {
                  value: 50,
                  message: "Número máximo de caracteres atingido"
                },
              })}
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
