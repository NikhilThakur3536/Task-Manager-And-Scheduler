export type InputFieldsProps = {
  label: string,
  placeholder: string,
  name: string,
  type: string,

}

export const InputFieldsData: InputFieldsProps[] = [
  {
    label: "Username",
    placeholder: "Enter your username...",
    name: "username",
    type: "text",
  },
  {
    label: "E-mail",
    placeholder: "Enter your e-mail...",
    name: "email",
    type: "email",
  },
  {
    label: "Password",
    placeholder: "Enter your password...",
    name: "password",
    type: "password",
  }
]
