import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { useVideosSearch } from "@contexts/videosSearch";
import FORM_VALIDATIONS from "@constants/formValidations";
import InputContainer from "@components/InputContainer";
import Button from "@components/Button";
import Container from "./styles";
import { TbSearch } from "react-icons/tb";

export default function SearchBar({
  isLoading,
  isSearchTermFilled,
  updateSearchTerm,
}) {
  const { searchTerm } = useVideosSearch();
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, touchedFields },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      searchTerm
    }
  });

  async function onSubmitHandler(data) {
    updateSearchTerm(data.searchTerm);
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

SearchBar.propTypes = {
  isLoading: PropTypes.bool,
  isSearchTermFilled: PropTypes.bool,
};