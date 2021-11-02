//Packages
import Head from "next/head";
import fetch from "isomorphic-fetch"; //elegir entre el backend o front

//Components
import Navigation from "../components/Navigation";
import Users from "../components/Users";

const ContactUs = (props) => {
  const { users } = props;
  return (
    <div>
      <Head>
        <title>Gorilla Contact Us title</title>
      </Head>
      <Navigation />
      <h1>Contact US Screen</h1>
      <Users users={users} />
    </div>
  );
};

ContactUs.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  return { users: resJSON.data };
};

export default ContactUs;
