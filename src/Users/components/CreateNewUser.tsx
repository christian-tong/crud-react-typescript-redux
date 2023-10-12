import { useUserACtions } from "../store/useUserActions";
import { Card, Title, TextInput, Button } from "@tremor/react";

function CreateNewUser() {
  const { addUser } = useUserACtions();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const github = formData.get("github") as string;

    console.log(name, email, github);

    name && email && github
      ? addUser({ name, email, github })
      : alert("Formulario vacio o incompleto");

    form.reset();
  };

  return (
    <Card className="flex flex-col gap-4 max-w-2xl">
      <Title>Create New User</Title>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <TextInput name="name" placeholder="Nombre"></TextInput>
        <TextInput name="email" placeholder="Email"></TextInput>
        <TextInput name="github" placeholder="Github"></TextInput>
        <div className="flex justify-center">
          <Button type="submit">Crear usuario</Button>
        </div>
      </form>
    </Card>
  );
}

export default CreateNewUser;
