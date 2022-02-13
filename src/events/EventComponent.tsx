import {ChangeEvent, ChangeEventHandler, EventHandler} from "react";

const EventComponent: React.FC = () => {
    // React.ChangeEvent<HTMLInputElement>
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    };

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log('Begin dragged');
    };

    return <div>
        <input onChange={onChange}/>
        <div draggable onDragStart={onDragStart}></div>
    </div>
};

export default EventComponent;