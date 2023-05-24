import { useEffect, useState } from "react";
import { Calendar,  List, Tag,  Type } from "react-feather";
import { colorsList } from "../../../../Helper/Util";
import { ICard, ILabel, ITaskAssignment } from "../../../../Interfaces/Kanban";
import Chip from "../../Common/Chip";
import CustomInput from "../../CustomInput/CustomInput";
import Modal from "../../Modal/Modal";
import "./CardInfo.css";
import TaskAssignmentField from "../../TaskAssignment";
import users from "../../../../ApiMockData/mockUser";
interface CardInfoProps {
  onClose: () => void;
  card: ICard;
  boardId: number;
  updateCard: (boardId: number, cardId: number, card: ICard) => void;
}
function CardInfo(props: CardInfoProps) {
  const { onClose, card, boardId, updateCard } = props;
  const [selectedColor, setSelectedColor] = useState("");
  const [cardValues, setCardValues] = useState<ICard>({
    ...card,
  });

  const updateTitle = (value: string) => {
    setCardValues({ ...cardValues, title: value });
  };

  const updateDesc = (value: string) => {
    setCardValues({ ...cardValues, desc: value });
  };

  const addLabel = (label: ILabel) => {
    const index = cardValues.labels.findIndex(
      (item) => item.text === label.text
    );
    if (index > -1) return; //if label text already exist then return

    setSelectedColor("");
    setCardValues({
      ...cardValues,
      labels: [...cardValues.labels, label],
    });
  };

  const removeLabel = (label: ILabel) => {
    const tempLabels = cardValues.labels.filter(
      (item) => item.text !== label.text
    );

    setCardValues({
      ...cardValues,
      labels: tempLabels,
    });
  };

  const [assignedTasks, setAssignedTasks] = useState<{ [taskId: string]: string }>({});

  const assignTasks: React.FC<ITaskAssignment> = ({ cardId, users }) => {
    const handleTaskAssign = (cardId: string, userId: string) => {
      setAssignedTasks(prevState => ({
        ...prevState,
        [cardId]: userId,
      }));
    };
  
    return (
  
       
          <div key={cardId}>
            <h3>Selecione um usuário</h3>
            <TaskAssignmentField
              taskId={cardId}
              users={users}
              onAssign={handleTaskAssign}
            />
          </div>
   
   
    );
  };
  

  const updateDate = (date: string) => {
    if (!date) return;

    setCardValues({
      ...cardValues,
      date,
    });
  };

  useEffect(() => {
    if (updateCard) updateCard(boardId, cardValues.id, cardValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardValues]);

  return (
    <Modal onClose={onClose}>
      <div className="cardinfo">
        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <Type />
            <p>Title</p>
          </div>
          <CustomInput
            defaultValue={cardValues.title}
            text={cardValues.title}
            placeholder="Enter Title"
            onSubmit={updateTitle}
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <List />
            <p>Description</p>
          </div>
          <CustomInput
            defaultValue={cardValues.desc}
            text={cardValues.desc || "Adicionar Descrição"}
            placeholder="Enter description"
            onSubmit={updateDesc}
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <Calendar />
            <p>Date</p>
          </div>
          <input
            type="date"
            defaultValue={cardValues.date}
            min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => updateDate(event.target.value)}
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <Tag />
            <p>Flags</p>
          </div>
          <div className="cardinfo-box-labels">
            {cardValues.labels?.map((item, index) => (
              <Chip key={index} item={item} removeLabel={removeLabel} />
            ))}
          </div>
          <ul>
            {colorsList.map((item, index) => (
              <li
                key={index}
                style={{ backgroundColor: item }}
                className={selectedColor === item ? "li-active" : ""}
                onClick={() => setSelectedColor(item)}
              />
            ))}
          </ul>
          <CustomInput
            text="Adicionar flag"
            placeholder="Insira a flag"
            onSubmit={(value: string) =>
              addLabel({ color: selectedColor, text: value })
            }
          />

          <div>
          {assignTasks({ cardId:card.id, users: users })}
          </div>
        </div>

      
      </div>
    </Modal>
  );
}

export default CardInfo;