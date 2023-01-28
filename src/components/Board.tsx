import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    font-weight: 500;
`;

const Wrapper = styled.div`
	padding: 20px 10px;
	background-color: ${({ theme }) => theme.boardColor};
	border-radius: 5px;
	min-height: 250px;
`;

function Board({ cards, droppableId } : { cards: string[], droppableId: string }) {
    return (
        <Wrapper>
            <Title>{droppableId}</Title>
            <Droppable droppableId={droppableId}>
                {(provided) => (
                    <div style={{height: "100%"}} ref={provided.innerRef} {...provided.droppableProps}>
                        {cards.map((card, index) => (
                            <DraggableCard key={card} todo={card} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </Wrapper>
    );
}

export default Board;