import { Wrapper, Input, Label } from "./Filter.styled";
import { useSelector, useDispatch } from "react-redux";
import { getFilterName } from "../../redux/PhoneBook/PhonebookActions";
import { filter } from "../../redux/PhoneBook/PhonebookSelectors";

const Filter = () => {
  const formFilter = useSelector(filter);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        value={formFilter}
        onChange={(e) => dispatch(getFilterName(e.target.value.toLowerCase()))}
      />
    </Wrapper>
  );
};

export default Filter;
