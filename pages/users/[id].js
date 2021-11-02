import React from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-fetch";
import Container from "../../components/Container";

const UserProfile = (props) => {
  const { user } = props;
  const router = useRouter();
  const { id } = router.query;
  return (
    <Container>
      <h1>{user.first_name}</h1>
    </Container>
  );
};

UserProfile.getInitialProps = async (ctx) => {
  //ctx = contexto

  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const resJSON = await res.json();

  return { user: resJSON.data };
};

export default UserProfile;
