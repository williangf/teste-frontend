const FORM_VALIDATIONS = {
  username: {
    required: "Campo obrigatório",
    maxLength: {
      value: 30,
      message: "Número máximo de caracteres atingido",
    },
  },
  email: {
    required: "Campo obrigatório",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Email inválido",
    },
    maxLength: {
      value: 50,
      message: "Número máximo de caracteres atingido",
    },
  },
  searchTerm: {
    required: "Campo obrigatório",
  },
};

export default FORM_VALIDATIONS;
