import Page from "../components/Page";
import { addUser } from "../store/usersSlice";
import { wrapper } from "../store/store";

const Other = () => {
  return <Page title="Other Page" linkTo="/other" />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
  const response = await fetch(
   'https://jsonplaceholder.typicode.com/users'
  );
  const { data } = await response.json();
  console.log(data)
  store.dispatch(addUser(data));
})

export default Other;
