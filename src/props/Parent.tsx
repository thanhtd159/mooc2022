import {ChildAsFC} from "./Child";

const Parent = () => {
  return <ChildAsFC color="red" onClickEvent={() => console.log('Clicked')}>
      abc
  </ChildAsFC>
};

export default Parent;