import { Outlet, Link, useLoaderData } from "react-router-dom"
import { getContacts } from "../apis/contacts";
// import styled from "styled-components";

// const Aside = styled.aside`
//   grid-area: 40%;
// `

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export function ContactList(){
  const { contacts } = useLoaderData();
  return (
    <>
      <h1>React Router Contacts</h1>
      <aside style={{width: '100px', display: "flex", flexDirection: 'column', backgroundColor: 'salmon'}}>
        {
          contacts.length ? (
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <Link to={`contacts/${contact.id}`}>
                  {contact.first || contact.last ? (
                    <>
                      {contact.first} {contact.last}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}{" "}
                  {contact.favorite && <span>★</span>}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>No contacts</i>
          </p>
        )
        }
        <Link to={'/contacts/1'}>card 1</Link>
        <Link to={'/contacts/2'}>card 2</Link>
        <Link to={'/contacts/3'}>card 3</Link>
        <Link to={'/contacts/4'}>card 4</Link>
        <Link to={'/contacts/5'}>card 5</Link>
      </aside>
      <Outlet />
    </>
  )
}

