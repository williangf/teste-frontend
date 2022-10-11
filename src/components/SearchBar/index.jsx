import { useForm } from "react-hook-form";
import classNames from "classnames";
import InputContainer from "@components/InputContainer";
import Button from "@components/Button";
import FORM_VALIDATIONS from "@constants/formValidations";
import Container from "./styles";
import { TbSearch } from "react-icons/tb";

export default function SearchBar({
  isLoading,
  setSearchTerm,
  isSearchTermFilled,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, touchedFields },
  } = useForm({
    mode: "onSubmit",
  });

  async function onSubmitHandler(data) {
    setSearchTerm(data.searchTerm);
  }

  return (
    <Container isSearchTermFilled={isSearchTermFilled}>
      <form
        className="search-form"
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate
      >
        <InputContainer
          register={register("searchTerm", FORM_VALIDATIONS.searchTerm)}
          error={errors.searchTerm}
          touchedField={touchedFields.searchTerm}
          dirtyField={dirtyFields.searchTerm}
          name="searchTerm"
          type="text"
          placeholder="Pesquisar"
          noMargin
          disabled={isLoading}
          insideButton={
            <Button type="submit" disabled={isLoading}>
              <TbSearch size={24} />
            </Button>
          }
        />
      </form>
    </Container>
  )
}