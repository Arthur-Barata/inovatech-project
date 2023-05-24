import DragBox from "../../shared/components/dragbox";
import { Container, MainTitle } from "./styles";

export default function Slice() {
  return (
    <div>
      <MainTitle>Problem-solving board</MainTitle>
      <Container>
        <DragBox label="Problemas/impedimentos" color="red" />
        <DragBox label="Plano de ação/solução" color="green" />
      </Container>
    </div>
  );
}
