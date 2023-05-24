import { Header } from "../../shared/components/Header";
import DragBox from "../../shared/components/dragbox";
import { Container, MainTitle } from "./styles";

export default function Slice(props: {changeLog: any}) {
  const changeLog = props.changeLog
  
  return (
    <div>
      <Header changeLog={changeLog} />
      <MainTitle>Problem-solving board</MainTitle>
      <Container>
        <DragBox label="Problemas/impedimentos" color="red" />
        <DragBox label="Plano de ação/solução" color="green" />
      </Container>
    </div>
  );
}
