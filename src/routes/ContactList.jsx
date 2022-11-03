import { Outlet, Link, Form, useLoaderData } from "react-router-dom"
import { getContacts, createContact } from "../apis/contacts";
// import styled from "styled-components";

// const Aside = styled.aside`
//   grid-area: 40%;
// `



export function ContactList(){
  let { contacts } = useLoaderData();
  if(contacts === undefined) contacts = '';

  return (
    <>
      <aside style={{width: '100px', display: "flex", flexDirection: 'column', backgroundColor: 'salmon'}}>
        <h1>React Router Contacts</h1>
        <Form method="post" style={{display: 'flex'}}>
          <input type="text" placeholder="enter contact name" />
          <button type="submit">New</button>
        </Form>
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

// data manipulation
export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export async function action() {
  await createContact();
}