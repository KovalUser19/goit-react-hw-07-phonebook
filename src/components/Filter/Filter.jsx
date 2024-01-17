import { useDispatch, useSelector } from "react-redux";
import { onChangeFilter } from "../../redux/filterSlice";
import { selectFilter } from "../../redux/selectors";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = (e) => {
    dispatch(onChangeFilter(e.target.value));
  };

  return (
    <div>
      <label>Find contacts by name
      <input
        type="text"
          value={filter}
          onChange={handleFilterChange}
        ></input>
        </label>
    </div>
  )
}