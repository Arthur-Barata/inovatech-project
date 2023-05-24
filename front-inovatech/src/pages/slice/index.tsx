import DragBox from "../../shared/components/dragbox";
import { Container } from "./styles";

export default function Slice() {
  return (
    <Container>
      <DragBox label="Problemas/impedimentos" color="red" />
      <DragBox label="Plano de ação/solução" color="green" />
    </Container>
  );
}
