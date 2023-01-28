import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms"; 
import Board from "./components/Board";

const Wrapper = styled.div`
	display: flex;
	max-width: 1080px;
	margin: 0 auto;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

const Boards = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 100%;
	grid-gap: 10px;
`;

function App() {
	const [toDos, setToDos] = useRecoilState(toDoState);

	const onDragEnd = ({destination, source} : DropResult) => {
		if(!destination) return;
		if(destination.droppableId === source.droppableId && destination.index === source.index) return;
		
		if(destination.droppableId === source.droppableId) {
			const newToDo = [...toDos[destination.droppableId]];
			const [removed] = newToDo.splice(source.index, 1);
			newToDo.splice(destination.index, 0, removed);
			setToDos({...toDos, [destination.droppableId]: newToDo});
		} else {
			const newToDo = [...toDos[destination.droppableId]];
			const newSourceToDo = [...toDos[source.droppableId]];
			const [removed] = newSourceToDo.splice(source.index, 1);
			newToDo.splice(destination.index, 0, removed);
			setToDos({...toDos, [destination.droppableId]: newToDo, [source.droppableId]: newSourceToDo});
		}
	};

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Wrapper>
				<Boards>
					{Object.keys(toDos).map((toDo) => (
						<Board key={toDo} cards={toDos[toDo]} droppableId={toDo} />
					))}
				</Boards>
			</Wrapper>
		</DragDropContext>
	);
}

export default App;
