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
      <p className="text-zinc-600 font-bold text-lg">Consult about a repair!</p>
      <form className="flex flex-col gap-2 " onSubmit={submitHandler}>
        <div className="1">
          <label className="block text-zinc-600 text-md font-bold mb-2">
            Name:
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-zinc-600 focus:outline-black focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            ref={nameRef}
          />
        </div>
        <div className="mb-1">
          <label className="block text-zinc-600 text-md font-bold mb-2">
            Email:
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-zinc-600 focus:outline-black focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            ref={emailRef}
          />
        </div>
        <div className="mb-1">
          <label className="block text-zinc-600 text-md font-bold mb-2">
            Phone Number:
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-zinc-600 focus:outline-black focus:shadow-outline"
            id="phoneNumber"
            type="text"
            placeholder="Phone Number"
            ref={phoneNumberRef}
          />
        </div>
        <div className="mb-1">
          <label className="block text-zinc-600 text-md font-bold mb-2">
            Device:
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-zinc-600 focus:outline-black focus:shadow-outline"
            id="device"
            type="text"
            placeholder="Device"
            ref={deviceRef}
          />
        </div>
        <div>
          <label className="block text-zinc-600 text-md font-bold mb-2">
            Description:
          </label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 text-zinc-600 focus:outline-black focus:shadow-outline"
            id="description"
            rows="4"
            placeholder="Description"
            ref={descriptionRef}
          />
        </div>
        <button className="bg-emerald-600 shadow-md rounded p-1 font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RepairForm;
