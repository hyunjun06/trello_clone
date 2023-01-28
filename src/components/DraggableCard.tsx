import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
	border-radius: 5px;
	padding: 10px 10px;
	margin-bottom: 5px;
	background-color: ${({ theme }) => theme.cardColor};
`;

function DraggableCard({ todo, index } : { todo: string, index: number }) {
    // console.log(`${todo} rendered`);
    
    return (
        <Draggable draggableId={todo} index={index}>
            {(provided) => (
                <Card
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    {todo}
                </Card>
            )}
        </Draggable>
    );
}

export default React.memo(DraggableCard);