import Link from "next/link";
import Users from "./Users";

const Page = (props) => {
  return (
    <div>
      <h1 style={{backgroundColor: "#ddd"}}>{props.title}</h1>
      <Users/>
      <br/>
      <nav>
        <Link href={props.linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
    </div>
  );
};

export default Page;
