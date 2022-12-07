import { useRef } from "react";

const RepairForm = (props) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneNumberRef = useRef("");
  const deviceRef = useRef("");
  const descriptionRef = useRef("");

  const submitHandler = async (event) => {
    event.preventDefault();
    const repair = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
      device: deviceRef.current.value,
      description: descriptionRef.current.value,
    };

    props.onRequestSubmit(repair);

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneNumberRef.current.value = "";
    deviceRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <div className="flex flex-col items-center">
      <p>Page for contacting about repairs</p>
      <form className="flex flex-col gap-2" onSubmit={submitHandler}>
        <label>
          Name:
          <input type="text" ref={nameRef} />
        </label>
        <label>
          Email:
          <input type="text" ref={emailRef} />
        </label>
        <label>
          Phone number:
          <input type="text" ref={phoneNumberRef} />
        </label>
        <label>
          Device:
          <input type="text" ref={deviceRef} />
        </label>
        <label>
          Description:
          <textarea rows="4" ref={descriptionRef} />
        </label>
        <button className="">Submit</button>
      </form>
    </div>
  );
};

export default RepairForm;
