interface ChildProps {
    color: string;
    onClickEvent: () => void;
}

export const Child = ({ color, onClickEvent }: ChildProps) => {
  return <div>
        {color}
        <button onClick={onClickEvent}></button>
      </div>
};
// Child.displayName; => error

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClickEvent }) => {
  return <div>
      {color}
      <button onClick={onClickEvent}></button>
  </div>
};
// ChildAsFC.displayName; => done