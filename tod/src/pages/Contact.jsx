import React, { useState } from "react";
import { useToast, Button,Input ,Textarea} from "@chakra-ui/react";
import axios from "axios";

const Contact = () => {
  const toast = useToast();
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handelInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handelSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/form/contact`,user,{
        headers:{
          "Content-Type":"application/json"
        }
      })
      console.log(response);
    } catch (error) {
      console.log("contact us ",error);
    }
    toast({
      title: "Message sent",
      description: "Your message has been sent successfully",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
    console.log(user);
  };

  return (
    <>
      <section>
        <main>
          <div className="section-contact">
            <div className="container grid grid-two-cols">
              <div className="contact-img">
                <img
                  src="images/img2.jpg"
                  alt=""
                  srcSet=""
                  width="400"
                  height="400"
                />
              </div>

              {/* contact us form */}
              <div className="contact-form">
                <h1 className="main-heading">Contact us</h1>

                <br />
                <form onSubmit={handelSubmit}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={user.name}
                      onChange={handelInput}
                      size='lg'
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>
                    <Input
                      type="email"
                      name="email"
                      id="em"
                      value={user.email}
                      onChange={handelInput}
                      size='lg'
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message">Message</label>
                    <br />
                    <Textarea
                      name="message"
                      id=""
                      cols="30"
                      rows="10"
                      value={user.message}
                      onChange={handelInput}
                      required
                    ></Textarea>
                  </div>
                  <br />

                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="md"
                    height="48px"
                    width="150px"
                    border="2px"
                    borderColor="green.500"
                  >
                    Contact Us
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Contact;
